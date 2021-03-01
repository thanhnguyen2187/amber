namespace DataAccessingService.MetadataProviding.EndUserView
{
    public static class AboutUsController
    {
        public class AboutUsData
        {
            public string CoverSource { get; set; }
            public string BodyContent { get; set; }
        }

        public static AboutUsData GetAboutUsData()
        {
            return new()
            {
                CoverSource = "https://miro.medium.com/max/4032/1*Yz1EWGb79fF-m9PzNAej7Q.jpeg",
                BodyContent = "About Phung Motorbike!"
            };
        }
    }
}