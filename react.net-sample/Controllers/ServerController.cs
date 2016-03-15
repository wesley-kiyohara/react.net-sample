using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace react.net_sample.Controllers
{
    public class ServerController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Server Side React";

            return View();
        }
    }
}