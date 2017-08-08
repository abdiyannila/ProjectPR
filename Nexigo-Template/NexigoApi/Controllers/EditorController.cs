using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using NexigoApi.Models;

namespace NexigoApi.Controllers
{
    public class EditorController : ApiController
    {
//        // GET api/<controller>
//        public string Get()
//        {
////            if (File.Exists("..\\..\\"))
////            {
////                return 
////            }
//            return "Not exist";
//        }

//        // GET api/<controller>/5
//        public string Get(string id)
//        {
//            return "value";
//        }

//        // POST api/<controller>
//        public dynamic Post([FromBody]dynamic value)
//        {
//            return value.filename;
//        }

//        // PUT api/<controller>/5
//        public void Put(int id, [FromBody]string value)
//        {
//        }

//        // DELETE api/<controller>/5
//        public void Delete(int id)
//        {
//        }

        [HttpPost]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult GetUnreadMessagesEnc([FromBody] WebReq req)
        {
            try
            {
                if (req != null)
                {
                    return Ok(req);
                }
                else
                {
                    return Unauthorized();
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }




    }
}