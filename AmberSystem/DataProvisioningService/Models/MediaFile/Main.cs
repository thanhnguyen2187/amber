using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

// ReSharper disable once CheckNamespace
namespace DataProvisioningService.Models
{
    public partial class MediaFile : IBase
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [NotMapped]
        public static IEnumerator<int> SequenceIterator
            = IBase.GenerateSequenceIterator();
        
        public Visibility Visibility { get; set; }
        public DateTime DateCreated { get; set; }
        public int CreatorId { get; set; }
        public DateTime DateModified { get; set; }
        public int ModifierId { get; set; }
        
        public int TypeId { get; set; }
        // ReSharper disable once InconsistentNaming
        public string SourceURL { get; set; }
        // ReSharper disable once InconsistentNaming
        public string MIMEType { get; set; }
        
        public string Exif { get; set; }
        public string Base64Value { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string AlternateText { get; set; }
        public string Reference { get; set; }
        
        public int Width { get; set; }
        public int Height { get; set; }
        public bool Autoplay { get; set; }
    }
}