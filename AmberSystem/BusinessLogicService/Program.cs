using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Https;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace BusinessLogicService
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(
                    webBuilder =>
                    {
                        webBuilder.UseStartup<Startup>();
                        webBuilder.ConfigureKestrel(
                            options: options =>
                            {
                                options.ConfigureHttpsDefaults(
                                    configureOptions: httpsOptions =>
                                    {
                                        // httpsOptions.ClientCertificateMode = ClientCertificateMode.RequireCertificate;
                                        httpsOptions.ServerCertificate = X509Certificate2.CreateFromPemFile(
                                            certPemFilePath: "../HttpsCertificateGenerating/amber.pem",
                                            keyPemFilePath: "../HttpsCertificateGenerating/amber-key.pem"
                                        );
                                        // httpsOptions.ServerCertificate = X509Certificate2.CreateFromPemFile(
                                        //     certPemFilePath: "../HttpsCertificateGenerating/amber.key.pem"
                                        // );
                                    }
                                );
                            }
                        );
                    }
                )
            ;
    }
}