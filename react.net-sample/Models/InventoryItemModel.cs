using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace React.NETSample.Models
{
    public class InventoryItemModel
    {
        public string vin { get; set; }
        public int makeId { get; set; }
        public string make { get; set; }
        public int modelId { get; set; }
        public string model { get; set; }
        public int year { get; set; }
        public double price { get; set; }
    }
}