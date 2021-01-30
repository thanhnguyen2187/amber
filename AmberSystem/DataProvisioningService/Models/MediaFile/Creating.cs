// ReSharper disable once CheckNamespace
namespace DataProvisioningService.Models
{
    public partial class MediaFile
    {
        public static MediaFile CreateImageFile(
            // ReSharper disable once InconsistentNaming
            string sourceURL,
            string title,
            string description,
            string alternateText,
            string reference = ""
        ) => new()
        {
            Id = SequenceIterator.MoveNext() ? SequenceIterator.Current : -1,
            TypeId = Constant.TypeId.ImageFromURL,
            SourceURL = sourceURL,
            Title = title,
            Description = description,
            AlternateText = alternateText,
            Reference = reference,
        };
    }
}