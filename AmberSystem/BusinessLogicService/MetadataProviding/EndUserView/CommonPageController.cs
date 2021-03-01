using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using DataAccessingController = DataAccessingService.MetadataProviding.EndUserView.CommonPageController;

namespace BusinessLogicService.MetadataProviding.EndUserView
{
    [ApiController]
    [ApiExplorerSettings(GroupName = "Metadata/EndUserView")]
    [Route(template: "Metadata/EndUserView/[controller]")]
    public class CommonPageController : ControllerBase
    {
        [HttpGet(
            template: "Data"
        )]
        public DataAccessingController.CommonPageData GetCommonPageData()
        {
            return DataAccessingController.GetCommonPageData();
        }

    }
}