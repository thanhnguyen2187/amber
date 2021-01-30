// ReSharper disable once CheckNamespace
namespace DataProvisioningService.Models
{
    public partial class StaticValue
    {
        public static class Data
        {
            public static readonly (
                string Key,
                string Content,
                string Reference
            )[] EndUserButtonsEnglish =
            {
                (
                    Key: Constant.Key.Home,
                    Content: "Home",
                    Reference: Constant.Reference.Home
                ),
                (
                    Key: Constant.Key.AboutUs,
                    Content: "About Us",
                    Reference: Constant.Reference.AboutUs
                ),
                (
                    Key: Constant.Key.ForSale,
                    Content: "For Sale",
                    Reference: Constant.Reference.ForSale
                ),
                (
                    Key: Constant.Key.ForRent,
                    Content: "For Rent",
                    Reference: Constant.Reference.ForRent
                ),
                (
                    Key: Constant.Key.Services,
                    Content: "Services",
                    Reference: Constant.Reference.Services
                ),
                (
                    Key: Constant.Key.Articles,
                    Content: "Articles",
                    Reference: Constant.Reference.Articles
                ),
            };
            
            public static readonly (
                string Key,
                string Content,
                string Reference
            )[] EndUserButtonsVietnamese =
            {
                (
                    Key: Constant.Key.Home,
                    Content: "Trang Chủ",
                    Reference: Constant.Reference.Home
                ),
                (
                    Key: Constant.Key.AboutUs,
                    Content: "Thông Tin",
                    Reference: Constant.Reference.AboutUs
                ),
                (
                    Key: Constant.Key.ForSale,
                    Content: "Đang Bán",
                    Reference: Constant.Reference.ForSale
                ),
                (
                    Key: Constant.Key.ForRent,
                    Content: "Cho Thuê",
                    Reference: Constant.Reference.ForRent
                ),
                (
                    Key: Constant.Key.Services,
                    Content: "Dịch Vụ",
                    Reference: Constant.Reference.Services
                ),
                (
                    Key: Constant.Key.Articles,
                    Content: "Các Bài Đăng",
                    Reference: Constant.Reference.Articles
                ),
            };
            
        }
    }
}