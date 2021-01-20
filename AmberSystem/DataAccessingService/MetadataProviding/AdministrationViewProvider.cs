using System;
using System.Collections.Generic;
using System.Linq;
using DataProvisioningService;
using DataProvisioningService.Models;

namespace DataAccessingService.MetadataProviding
{
    public static class AdministrationViewProvider
    {
        public class NavBarButtonData
        {
            public string Label { get; set; }
            public string LongKey { get; set; }
            public string ShortKey { get; set; }
            public string Language { get; set; }
            
            public NavBarButtonData() {}

            public NavBarButtonData(PresetValue presetValue)
            {
                Label = presetValue.Text;
                LongKey = presetValue.ModuleName; 
                // should evaluate to "administration_view.navbar_buttons.label.some_thing"
                ShortKey = LongKey.Split(separator: ".")[3];
                // should evaluate to "something"
                Language = presetValue.Language;
            }
        }
        
        public static List<NavBarButtonData> GetNavBarButtonData(
            // string longKey,
            string language = PresetValue.Constant.Language.English
        )
        {
            using var context = new AmberSystemDbContext();
            var navBarButtonsData =
            (
                context
                .PresetValues
                .Where(
                    presetValue =>
                        presetValue.Language == language
                        // && presetValue.ModuleName == longKey
                        && presetValue
                            .ModuleName
                            .Contains(PresetValue.Constant.ModuleName.NavBarButtons)
                            // .Split(
                            //     ".",
                            //     StringSplitOptions.TrimEntries | StringSplitOptions.RemoveEmptyEntries
                            // )
                            // .Contains(PresetValue.Constant.ModuleName.NavBarButtons)
                )
                .Select(presetValue => new NavBarButtonData(presetValue))
                .ToList()
                // .First()
            );
            
            return navBarButtonsData;
        }
    }
}