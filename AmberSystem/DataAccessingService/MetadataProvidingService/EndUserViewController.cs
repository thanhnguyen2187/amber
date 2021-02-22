using System.Collections.Generic;
using static DataAccessingService.MetadataProvidingService.EndUserViewController.HomePageData;

namespace DataAccessingService.MetadataProvidingService
{
    public static class EndUserViewController
    {
        public class HomePageData
        {
            public string Email { get; set; }
            public string PhoneNumber { get; set; }
            public string ShopAddress { get; set; }
            public string WareHouseAddress { get; set; }
            public List<CarouselItem> CarouselItems { get; set; }

            public class CarouselItem
            {
                public string Reference { get; set; }
            }
        }

        public static HomePageData GetHomePageData()
        {
            return new()
            {
                Email = "2wheelsvietnam@gmail.com",
                PhoneNumber = "(+84) 904 253 491",
                ShopAddress = "13 Ngo Huyen, Hang Trong, Hanoi",
                WareHouseAddress = "99 Bac Cau, Long Bien, Hanoi",
                // CarouselItems = {},
                CarouselItems = new List<CarouselItem>
                {
                    new()
                    {
                        Reference = "https://images.unsplash.com/photo-1552306062-29a5560e1c31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    },
                    new()
                    {
                        Reference = "https://images.unsplash.com/photo-1580341289255-5b47c98a59dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    },
                },
            };
        }
    }
}