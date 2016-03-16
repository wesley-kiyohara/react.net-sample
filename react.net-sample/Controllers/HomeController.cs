using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using React.NETSample.Models;
using React.NETSample.API.Controllers;

namespace react.net_sample.Controllers
{
    public class HomeController : Controller
    {

        private IEnumerable<InventoryItemModel> inventory;
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            InventoryController ic = new InventoryController();
            inventory = ic.Get(0,0,0);
            return View(inventory);
        }
    }
}
