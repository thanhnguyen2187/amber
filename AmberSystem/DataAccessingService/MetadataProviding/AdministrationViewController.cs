using System.Collections.Generic;
using System.Linq;
using DataProvisioningService;
using DataProvisioningService.Models;

namespace DataAccessingService.MetadataProviding
{
    public static class AdministrationViewProvider
    {
        public class HeaderButtonData
        {
            public string Content { get; set; }
            public string Reference { get; set; }
            public string Language { get; set; }
            
            public HeaderButtonData() {}

            public HeaderButtonData(StaticValue staticValue)
            {
                Content = staticValue.Text;
                Reference = staticValue.Reference;
                Language = staticValue.Language;
            }
        }
        
        public static List<HeaderButtonData> GetHeaderButtonsData(
            string language = StaticValue.Constant.Language.English
        )
        {
            using var context = new AmberSystemDbContext();
            var headerButtonsData =
            (
                context
                .StaticValues
                .Where(
                    staticValue =>
                        staticValue.Language == language
                        && staticValue.ModuleName == StaticValue.Constant.ModuleName.EndUserHeaderButtons
                )
                .Select(staticValue => new HeaderButtonData(staticValue))
                .ToList()
            );
            
            return headerButtonsData;
        }
    }
}