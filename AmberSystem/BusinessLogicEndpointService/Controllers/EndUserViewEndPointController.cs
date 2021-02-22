using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DataAccessingService.MetadataProvidingService;

namespace BusinessLogicEndpointService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EndUserViewEndPointController : ControllerBase
    {
        private readonly ILogger<EndUserViewEndPointController> _logger;

        public EndUserViewEndPointController(ILogger<EndUserViewEndPointController> logger)
        {
            _logger = logger;
        }


        [HttpGet]
        public EndUserViewController.HomePageData Get()
        {
            return EndUserViewController.GetHomePageData();
        }
        // [HttpGet]
        // public static string Get()
        // {
        //     return "hello";
        // }
    }
}