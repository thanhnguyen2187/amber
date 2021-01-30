using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Dynamic;

// ReSharper disable once CheckNamespace
namespace DataProvisioningService.Models
{
    public partial class StaticValue : IBase
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
        
        public string ModuleName { get; set; }
        public string Key { get; set; }
        public int Index { get; set; }
        public string Text { get; set; }
        public string Source { get; set; }
        public string Reference { get; set; }
        public string Placeholder { get; set; }
        public string IconName { get; set; }
        public string Default { get; set; }
        public string Language { get; set; }
    }
}