namespace DataAccessingService.MetadataProviding.EndUserView
{
    public static class CommonPageController
    {
        public class FooterData
        {
            public string Email { get; set; }
            public string PhoneNumber { get; set; }
            public string ShopAddress { get; set; }
            public string WarehouseAddress { get; set; }
        }

        public class CommonPageData
        {
            // public string[] EnabledRoutes { get; set; }
            public FooterData FooterData { get; set; }
        }

        public static CommonPageData GetCommonPageData()
        {
            return new()
            {
                // EnabledRoutes = {},
                FooterData = new FooterData
                {
                    Email = "2wheelsvietnam@gmail.com",
                    PhoneNumber = "(+84) 904 253 491",
                    ShopAddress = "13 Ngo Huyen, Hang Trong, Hanoi",
                    WarehouseAddress = "99 Bac Cau, Long Bien, Hanoi",
                },
            };
        }
    }
}