using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Dynamic;

// ReSharper disable once CheckNamespace
namespace DataProvisioningService.Models
{
    public partial class Staff : IBase
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [NotMapped]
        public static IEnumerator<int> SequenceIterator =
            IBase.GenerateSequenceIterator();

        public Visibility Visibility { get; set; }
        public DateTime DateCreated { get; set; }
        public int CreatorId { get; set; }
        public DateTime DateModified { get; set; }
        public int ModifierId { get; set; }
        
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}