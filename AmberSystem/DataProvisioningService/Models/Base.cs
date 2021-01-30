using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataProvisioningService.Models
{
    
    [NotMapped]
    public class Base
    {
        // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        // public int Id { get; set; }
        
        public Visibility Visibility { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime DateCreated { get; set; }
        public int CreatorId { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime DateModified { get; set; }
        public int ModifierId { get; set; }
    }
}