using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using React.NETSample.Models;

namespace React.NETSample.API.Controllers
{
    public class InventoryController : ApiController
    {

        private IEnumerable<InventoryItemModel> inventory = new InventoryItemModel[]
        {
            new InventoryItemModel { vin = "F830AS8UF0A", makeId = 1, make = "Toyota", modelId = 1, model = "Prius", year = 2010, price = 28000.00},
            new InventoryItemModel { vin = "JE0EF9A09F9", makeId = 2, make = "Lexus", modelId = 11, model = "GS", year = 2015, price = 40000.00 },
            new InventoryItemModel { vin = "FO048F0A8D0", makeId = 3, make = "Honda", modelId = 21, model = "Accord", year = 2003, price = 18000.00},
            new InventoryItemModel { vin = "MVBANOSDOF8", makeId = 4, make = "Acura", modelId = 31, model = "TLX", year = 2015, price = 35000.00 },
            new InventoryItemModel { vin = "ASUDFUASLDF", makeId = 1, make = "Toyota", modelId = 2, model = "Camry", year = 2010, price = 22000.00},
            new InventoryItemModel { vin = "ZMXNVC9XZ78", makeId = 2, make = "Lexus", modelId = 11, model = "GS", year = 2014, price = 38000.00 },
            new InventoryItemModel { vin = "Q09T8Q09324", makeId = 3, make = "Honda", modelId = 22, model = "Civic", year = 2013, price = 18000.00},
            new InventoryItemModel { vin = "PJ089JOLJ0J", makeId = 4, make = "Acura", modelId = 31, model = "TLX", year = 2015, price = 35000.00 },
            new InventoryItemModel { vin = "AWF2SAF131F", makeId = 1, make = "Toyota", modelId = 2, model = "Camry", year = 2014, price = 20000.00},
            new InventoryItemModel { vin = "UGDHFRUID78", makeId = 2, make = "Lexus", modelId = 12, model = "IS", year = 2012, price = 32000.00 },
            new InventoryItemModel { vin = "NZJNCX030SD", makeId = 3, make = "Honda", modelId = 22, model = "Civic", year = 2014, price = 19000.00},
            new InventoryItemModel { vin = "PJ1F0DFJ840", makeId = 4, make = "Acura", modelId = 32, model = "ILX", year = 2012, price = 30000.00 },
            new InventoryItemModel { vin = "ASDFOJW8490", makeId = 1, make = "Toyota", modelId = 3, model = "Sienna", year = 2011, price = 22000.00},
            new InventoryItemModel { vin = "JGIIW0F0340", makeId = 2, make = "Lexus", modelId = 11, model = "GS", year = 2014, price = 38000.00 },
            new InventoryItemModel { vin = "XJCVIOF0232", makeId = 3, make = "Honda", modelId = 22, model = "Civic", year = 2011, price = 23000.00},
            new InventoryItemModel { vin = "ASFAW094J23", makeId = 4, make = "Acura", modelId = 31, model = "TLX", year = 2015, price = 35000.00 },
            new InventoryItemModel { vin = "DREWOIJFS09", makeId = 1, make = "Toyota", modelId = 2, model = "Camry", year = 2013, price = 20000.00},
            new InventoryItemModel { vin = "VMIOJFW940S", makeId = 2, make = "Lexus", modelId = 12, model = "IS", year = 2012, price = 32000.00 },
            new InventoryItemModel { vin = "ASFD0JG0239", makeId = 3, make = "Honda", modelId = 22, model = "Civic", year = 2015, price = 9500.00},
            new InventoryItemModel { vin = "XCVMNOF0982", makeId = 4, make = "Acura", modelId = 32, model = "ILX", year = 2013, price = 31000.00 },

        };

        // GET api/<controller>
        public IEnumerable<InventoryItemModel> Get(int makeId, int modelId, int year)
        {

            IEnumerable<InventoryItemModel> inventory = this.inventory;
            if (makeId > 0)
            {
                inventory = inventory.Where(i => i.makeId == makeId);
            }
            if (modelId > 0)
            {
                inventory = inventory.Where(i => i.modelId == modelId);
            }
            if (year > 0)
            {
                inventory = inventory.Where(i => i.year == year);
            }

            return inventory;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}