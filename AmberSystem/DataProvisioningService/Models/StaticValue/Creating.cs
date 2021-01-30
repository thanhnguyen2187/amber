// ReSharper disable once CheckNamespace
namespace DataProvisioningService.Models
{
    public partial class StaticValue
    {
        // It should be called a factory
        public static StaticValue CreateEndUserHeaderButtonEnglish(
            string key,
            string content,
            string reference
        ) =>
            new()
            {
                Id = SequenceIterator.MoveNext() ? SequenceIterator.Current : -1,
                ModuleName = Constant.ModuleName.EndUserHeaderButtons,
                Key = key,
                Text = content,
                Reference = reference,
                Language = Constant.Language.English,
            };
        
        public static StaticValue CreateEndUserHeaderButtonVietnamese(
            string key,
            string content,
            string reference
        ) =>
            new()
            {
                Id = SequenceIterator.MoveNext() ? SequenceIterator.Current : -1,
                ModuleName = Constant.ModuleName.EndUserHeaderButtons,
                Key = key,
                Text = content,
                Reference = reference,
                Language = Constant.Language.Vietnamese,
            };

        public static StaticValue CreateEndUserBodyHomeCarouselImage(
            string key,
            string language,
            int index
        ) =>
            new()
            {
                Id = SequenceIterator.MoveNext() ? SequenceIterator.Current : -1,
                ModuleName = Constant.ModuleName.EndUserBodyHomeCarouselImages,
                Key = key,
                Index = index,
                Language = language,
            };

        public static StaticValue CreateEndUserBodyAboutUs(
            string rawContent
        ) =>
            new()
            {
                Id = SequenceIterator.MoveNext() ? SequenceIterator.Current : -1,
                ModuleName = Constant.ModuleName.EndUserBody,
                Key = Constant.Key.AboutUs,
                Text = rawContent,
                Language = Constant.Language.English,
            };
    }
}