using System.Linq;
using DataProvisioningService;
using DataProvisioningService.Models;

namespace DataAccessingService.ContentManagementService
{
    public class AboutUsContent
    {
        // ReSharper disable once InconsistentNaming
        public string RawHTMLString;
        public string Language;
        
        public AboutUsContent() {}

        public AboutUsContent(StaticValue staticValue)
        {
            RawHTMLString = staticValue.Text;
            Language = staticValue.Language;
        }
    }
    
    public class AboutUsContentController
    {
        public static AboutUsContent GetAboutUsContent()
        {
            using var context = new AmberSystemDbContext();
            var aboutUsContent =
            (
                context
                .StaticValues
                .Where(
                    value =>
                        value.ModuleName == StaticValue.Constant.ModuleName.EndUserBody
                        && value.Key == StaticValue.Constant.Key.AboutUs
                )
                .Select(value => new AboutUsContent(value))
                .First()
            );
            return aboutUsContent;
        }
    }
}