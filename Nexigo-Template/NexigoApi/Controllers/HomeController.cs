using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using NexigoApi.Models;
using NexigoApi.NextflowService;

namespace NexigoApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class HomeController : ApiController
    {

    }
}
