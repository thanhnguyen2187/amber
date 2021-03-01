using System.Collections.Generic;

namespace DataAccessingService.MetadataProviding.EndUserView
{
    public static class HomePageController
    {
        public class HomePageData
        {
            public List<GalleryItem> GalleryItems { get; set; }

            public class GalleryItem
            {
                public string Source { get; set; }
            }
        }
        
        public static HomePageData GetHomePageData()
        {
            return new()
            {
                GalleryItems = new List<HomePageData.GalleryItem>
                {
                    new()
                    {
                        Source = "https://images.unsplash.com/photo-1552306062-29a5560e1c31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    },
                    new()
                    {
                        Source = "https://images.unsplash.com/photo-1580341289255-5b47c98a59dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    },
                    new()
                    {
                        Source = "https://img.redbull.com/images/c_crop,x_0,y_88,h_1800,w_3200/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2016/10/14/1331823686966_1/casey-stoner",
                    },
                    new()
                    {
                        Source = "https://wallpaperaccess.com/full/467615.jpg",
                    },
                },
            };
        }
    }
}