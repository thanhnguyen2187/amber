using System;
using System.Collections.Generic;

namespace DataProvisioningService.Models
{
    public enum Visibility
    {
        Hidden = 0,
        Visible = 1,
    }
    
    public interface IBase
    {
        public int Id { get; set; }
        // public static readonly IEnumerator<int> IdIterator
        //     = IBase.GenerateIdIterator();
        
        public Visibility Visibility { get; set; }
        public DateTime DateCreated { get; set; }
        public int CreatorId { get; set; }
        public DateTime DateModified { get; set; }
        public int ModifierId { get; set; }

        public static IEnumerator<int> GenerateSequenceIterator()
        {
            var id = 1;
            while (true)
            {
                yield return id;
                id += 1;
            }
        }

        public static int GetIteratorNextValue(IEnumerator<int> iterator)
        {
            return iterator.MoveNext() ? iterator.Current : -1;
        }
    }
}