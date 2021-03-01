using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using DataAccessingController = DataAccessingService.MetadataProviding.EndUserView.AboutUsController;

namespace BusinessLogicService.MetadataProviding.EndUserView
{
    [ApiController]
    [ApiExplorerSettings(GroupName = "Metadata/EndUserView")]
    [Route(template: "Metadata/EndUserView/[controller]")]
    public class AboutUsController : ControllerBase
    {
        [HttpGet(
           template: "Data"
            // Order = 2
        )]
        public DataAccessingController.AboutUsData GetHomePageData()
        {
            return DataAccessingController.GetAboutUsData();
        }

    }
}