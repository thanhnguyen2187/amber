using System;
using System.Text;

namespace DataProvisioningService.Models
{
    public partial class StaticValue
    {
        public static class Constant
        {
            public static class ModuleName
            {
                public const string AdministrationView = "administration_view";
                public const string EndUserView = "end_user_view";

                public const string Header = "header";
                public const string Footer = "footer";

                public const string Buttons = "buttons";

                public static string EndUserHeaderButtons =>
                    string.Join(
                        separator: ".",
                        value: new[]
                        {
                            EndUserView,
                            Header,
                            Buttons,
                        }
                    );
            }

            public static class Key
            {
                public const string Home = "home";
                public const string AboutUs = "about_us";
                public const string ForSale = "for_sale";
                public const string ForRent = "for_rent";
                public const string Services = "services";
                public const string ContractChecking = "contract_checking";
            }

            public static class Content
            {
            }

            // ReSharper disable once InconsistentNaming
            public static class SourceURL
            {
            }

            public static class Reference
            {
                public const string Home = "~/Home";
                public const string AboutUs = "~/AboutUs";
                public const string ForSale = "~/ForSale";
                public const string ForRent = "~/ForRent";
                public const string Services = "~/Services";
                public const string ContractChecking = "~/ContractChecking";
            }

            public static class Placeholder
            {
            }

            public static class IconName
            {
            }

            public static class Default
            {
            }

            public static class Language
            {
                public const string Vietnamese = "vi";
                public const string English = "en";
            }
        }
        
    }
}