using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataProvisioningService.Models
{
    public enum Visibility
    {
        Hidden = 0,
        Visible = 1,
    }
    
    public class Base
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public Visibility Visibility { get; set; }
        public DateTime DateCreated { get; set; }
        public int CreatorId { get; set; }
        public DateTime DateModified { get; set; }
        public int ModifierId { get; set; }
    }
}