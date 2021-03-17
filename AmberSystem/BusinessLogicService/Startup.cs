using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Certificate;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;

namespace BusinessLogicService
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        private readonly string AllowEverythingPolicyName = "AllowEverything";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddAuthentication(
                    CertificateAuthenticationDefaults.AuthenticationScheme
                )
                .AddCertificate(
                    options =>
                    {
                        options.AllowedCertificateTypes = CertificateTypes.All;
                    }
                )
                .AddCertificateCache()
            ;
            services.AddCors(options =>
            {
                options.AddPolicy(
                    name: AllowEverythingPolicyName,
                    configurePolicy: builder =>
                    {
                        builder
                            .AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                        ;
                    }
                );
            });
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo {Title = "BusinessLogicService", Version = "v1"});
                c.TagActionsBy(
                    tagsSelector: apiDescription =>
                    {
                        if (apiDescription.GroupName != null)
                        {
                            return new[] { apiDescription.GroupName };
                        }

                        if (apiDescription.ActionDescriptor is ControllerActionDescriptor controllerActionDescriptor)
                        {
                            return new[] { controllerActionDescriptor.ControllerName };
                        }

                        return new string[] { };
                    }
                );
                c.DocInclusionPredicate((name, apiDescription) => true);
            });

            // services
            //     .AddHttpClient("HttpClientWithSSLUntrusted")
            //     .ConfigurePrimaryHttpMessageHandler(
            //         () => new HttpClientHandler
            //         {
            //             ClientCertificateOptions = ClientCertificateOption.Manual,
            //             ServerCertificateCustomValidationCallback =
            //                 (message, certificate, certificateChain, policyErrors) => true
            //         }
            //     );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "BusinessLogicService v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapControllers().RequireCors(policyName: AllowEverythingPolicyName);
            });
        }
    }
}