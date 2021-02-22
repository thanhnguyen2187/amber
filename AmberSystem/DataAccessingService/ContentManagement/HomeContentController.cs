using System.Collections.Generic;
using System.Linq;
using DataProvisioningService;
using DataProvisioningService.Models;

namespace DataAccessingService.ContentManagementService
{
    public static class HomeContentController
    {
        public class HomeCarouselItem
        {
            public string Title { get; set; }
            public string Description { get; set; }
            public string Reference { get; set; }
            public string SourceURL { get; set; }
            public string AlternateText { get; set; }
            
            public HomeCarouselItem() {}

            public HomeCarouselItem(
                MediaFile mediaFile
            )
            {
                Title = mediaFile.Title;
                Description = mediaFile.Description;
                Reference = mediaFile.Reference;
                SourceURL = mediaFile.SourceURL;
                AlternateText = mediaFile.AlternateText;
            }
        }

        public static List<HomeCarouselItem> GetHomeCarouselItems()
        {
            using var context = new AmberSystemDbContext();
            var homeCarouselItems =
            (
                context
                .StaticValues
                .Where(
                    staticValue =>
                        staticValue.ModuleName == StaticValue.Constant.ModuleName.EndUserBodyHomeCarouselImages
                )
                .Select(
                    staticValue =>
                        int.Parse(staticValue.Key)
                )
                .ToList() // without `ToList`, the chain will not work
                .Select(
                    id =>
                        context
                            .MediaFiles
                            .First(mediaFile => mediaFile.Id == id)
                ) // use the key in each static value as an id to find the corresponding media file
                .Select(
                    mediaFile =>
                        new HomeCarouselItem(mediaFile)
                ) // turn the media file into a `HomeCarouselItem`
                .ToList()
            );

            return homeCarouselItems;
        }
    }
}