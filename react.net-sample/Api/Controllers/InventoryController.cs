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
        // GET api/<controller>
        public IEnumerable<InventoryItemModel> Get()
        {
            return new InventoryItemModel[] {
                new InventoryItemModel { vin = "F830AS8UF0A", make = "Toyota", model = "Prius", year = 2009 },
                new InventoryItemModel { vin = "JE0EF9A09F9", make = "Lexus", model = "GS", year = 2015 }
            };
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