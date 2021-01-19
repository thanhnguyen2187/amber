using System;

namespace DataProvisioningService.Models
{
    public class PresetValue : Base
    {
        public string ModuleName { get; set; }
        public string Text { get; set; }
        public string Language { get; set; }

        public static class Constant
        {
            public static class ModuleName
            {
                public const string AdministrationView = "administration_view";
                public const string EndUserView = "end_user_view";
                
                public const string NavBarButtons = "navbar_buttons";
                public const string NavBarRightButton = "navbar_right_button";
                public const string FooterButtons = "footer_buttons";
                // ReSharper disable once InconsistentNaming
                public const string CoverImageURL = "cover_image_url";
                public const string Label = "label";
                
                public const string Home = "home";
                public const string AboutUs = "about_us";
                public const string ForSale = "for_sale";
                public const string ForRent = "for_rent";
                public const string Services = "services";
                public const string ContractChecking = "contract_checking";

                // public static string EndUserNavBarButtonsPrefix =>
                //     $"{EndUserView}.{NavBarButtons}";
                public static string EndUserNavBarButtonsLabelHome =>
                    $"{EndUserView}.{NavBarButtons}.{Label}.{Home}";
                public static string EndUserNavBarButtonsLabelAboutUs =>
                    $"{EndUserView}.{NavBarButtons}.{Label}.{AboutUs}";
                public static string EndUserNavBarButtonsLabelForSale =>
                    $"{EndUserView}.{NavBarButtons}.{Label}.{ForSale}";
                public static string EndUserNavBarButtonsLabelForRent =>
                    $"{EndUserView}.{NavBarButtons}.{Label}.{ForRent}";
                public static string EndUserNavBarButtonsLabelServices =>
                    $"{EndUserView}.{NavBarButtons}.{Label}.{Services}";
                public static string EndUserNavBarRightButtonLabelContractChecking =>
                    $"{EndUserView}.{NavBarRightButton}.{Label}.{ContractChecking}";

                // ReSharper disable once InconsistentNaming
                public static string EndUserCoverImageURLHome =>
                    $"{EndUserView}.{CoverImageURL}.{Home}";
                // ReSharper disable once InconsistentNaming
                public static string EndUserCoverImageURLAboutUs =>
                    $"{EndUserView}.{CoverImageURL}.{AboutUs}";
                // ReSharper disable once InconsistentNaming
                public static string EndUserCoverImageURLForSale =>
                    $"{EndUserView}.{CoverImageURL}.{ForSale}";
                // ReSharper disable once InconsistentNaming
                public static string EndUserCoverImageURLForRent =>
                    $"{EndUserView}.{CoverImageURL}.{ForRent}";
                // ReSharper disable once InconsistentNaming
                public static string EndUserCoverImageURLServices =>
                    $"{EndUserView}.{CoverImageURL}.{Services}";
            }

            public static class Text
            {
                public const string EndUserNavBarButtonsHomeVietnamese = "Trang chủ";
                public const string EndUserNavBarButtonsHomeEnglish = "Homepage";
                public const string EndUserNavBarButtonsAboutUsVietnamese = "Giới thiệu";
                public const string EndUserNavBarButtonsAboutUsEnglish = "About us";
                public const string EndUserNavBarButtonsForSaleVietnamese = "For sale";
                public const string EndUserNavBarButtonsForSaleEnglish = "Đang bán";
                public const string EndUserNavBarButtonsForRentVietnamese = "For rent";
                public const string EndUserNavBarButtonsForRentEnglish = "Cho thuê";
                public const string EndUserNavBarButtonsServicesVietnamese = "Các dịch vụ";
                public const string EndUserNavBarButtonsServicesEnglish = "Services";
                public const string EndUserNavBarRightButtonContractCheckingVietnamese = "Kiểm tra hợp đồng";
                public const string EndUserNavBarRightButtonContractCheckingEnglish = "Check contract";
            }
            
            public static class Language
            {
                public const string English = "en";
                public const string Vietnamese = "vi";
            }
        }
    }
}