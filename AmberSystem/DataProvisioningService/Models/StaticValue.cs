using System.Dynamic;

namespace DataProvisioningService.Models
{
    public partial class StaticValue : Base
    {
        public string ModuleName { get; set; }
        public string Key { get; set; }
        public string Content { get; set; }
        public string Source { get; set; }
        public string Reference { get; set; }
        public string Placeholder { get; set; }
        public string IconName { get; set; }
        public string Default { get; set; }
        public string Language { get; set; }
    }
}