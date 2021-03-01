using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using DataAccessingController = DataAccessingService.MetadataProviding.EndUserView.HomePageController;

namespace BusinessLogicService.MetadataProviding.EndUserView
{
    [ApiController]
    [ApiExplorerSettings(GroupName = "Metadata/EndUserView")]
    [Route(template: "Metadata/EndUserView/[controller]")]
    public class HomePageController : ControllerBase
    {
        [HttpGet(
           template: "Data"
            // Order = 2
        )]
        public DataAccessingController.HomePageData GetHomePageData()
        {
            return DataAccessingController.GetHomePageData();
        }

    }
}