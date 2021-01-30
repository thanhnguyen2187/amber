// ReSharper disable once CheckNamespace
namespace DataProvisioningService.Models
{
    public partial class MediaFile
    {
        public static class Data
        {
            public static readonly MediaFile[] ImageFiles =
            {
                CreateImageFile(
                    sourceURL: "https://www.telegraph.co.uk/content/dam/news/2017/02/08/tiger_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.png?imwidth=450",
                    title: "Chubby tiger",
                    description: "Chubby tiger",
                    alternateText: "Chubby tiger",
                    reference: "google.com"
                ),
                CreateImageFile(
                    sourceURL: "https://external-preview.redd.it/EJecWQC3S5HihqsTiAe0fy320SIfO-ZgeThQvaU5Fs8.jpg?width=640&crop=smart&auto=webp&s=e931cfa9e8b571e5cd0191c7dfed265989ab839d",
                    title: "Chubby tiger 2",
                    description: "Chubby tiger 2",
                    alternateText: "Chubby tiger 2"
                ),
                CreateImageFile(
                    sourceURL: "https://64.media.tumblr.com/20adf2ba2bb31f2b005281dedcfcfe41/tumblr_p3b4iq3sDN1qh8t5wo2_1280.jpg",
                    title: "Chubby tiger 3",
                    description: "Chubby tiger 3",
                    alternateText: "Chubby tiger 3"
                ),
                CreateImageFile(
                    sourceURL: "https://thumbor.forbes.com/thumbor/trim/0x360:4501x2892/fit-in/711x399/smart/https://specials-images.forbesimg.com/imageserve/5c0a960ca7ea43705919981f/0x0.jpg",
                    title: "Motorcycle",
                    description: "Motorcycle",
                    alternateText: "Motorcycle"
                ),
                CreateImageFile(
                    sourceURL: "https://ridermagazine.com/wp-content/uploads/2019/08/2020-Aprilia-RS-660-3qtr.jpg",
                    title: "Wheelie",
                    description: "Wheelie",
                    alternateText: "Wheelie"
                ),
            };
        }

    }
}