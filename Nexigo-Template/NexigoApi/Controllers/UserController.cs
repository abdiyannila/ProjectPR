using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using NexigoApi.Models;
using NexigoApi.NextflowService;

namespace NexigoApi.Controllers
{
    public class SelectResult
    {
        public string value { get; set; }
        public string text { get; set; }
    }

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        private DatabaseProjectDataContext context = null;

        public UserController()
        {
            context = new DatabaseProjectDataContext();
        }

        public IHttpActionResult UserList()
        {
            var result = new List<SelectResult>();
            using (var dc = new DatabaseProjectDataContext())
            {
                var users = dc.Employees.Where(o => o.StaffID != 2016022).ToList();

                foreach (var user in users)
                {
                    result.Add(new SelectResult()
                    {
                        text = user.Staff_Name,
                        value = user.StaffID.ToString()
                    });
                }
            }
            return Ok(result);
        }

        [HttpPost]
        public IHttpActionResult LoginUser([FromBody] Employee employee)
        {
            try
            {
                
                if (employee != null)
                {
                    var result = string.Empty;
                    using (var dc = new DatabaseProjectDataContext())
                    {
                        //var queres = (from a_loginuser in context.Employees select a_loginuser);
                        var user = dc.Employees.Where(a => a.StaffID==employee.StaffID && a.Password==employee.Password).SingleOrDefault();
                        if (user != null)
                        {
                            result = user.Staff_Name;
                        }
                        //else
                        //{
                        //    result = "No data";
                        //}
                        return Ok(result);
                    }
                }
                else
                {
                    return Unauthorized();
                }
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IHttpActionResult GetUserName([FromBody]int Id)
        {
            var result = string.Empty;
            using (var dc = new DatabaseProjectDataContext())
            {
                var user = dc.Employees.Where(o => o.StaffID == Id).SingleOrDefault();
                if (user != null)
                    result = user.Staff_Name;
                return Ok(result);
            }
        }

        [HttpPost]
        public IHttpActionResult GetUserPosition([FromBody]int Id)
        {
            var result = string.Empty;
            using (var dc = new DatabaseProjectDataContext())
            {
                //var user = (from a_user in context.Employees
                //            join a_level in context.Staff_Levels
                //            on a_user.Staff_Level equals a_level.Id
                //            where a_user.Staff_Level.Equals(Id)
                //            select new LoginUser
                //            {
                //                Staff_LevelName=a_level.Field_Name
                //            }).OrderBy(x => x.Staff_LevelName).SingleOrDefault();
                var user = dc.Employees.Where(o => o.StaffID == Id).SingleOrDefault();
                if (user != null)
                    result = user.Staff_Level.ToString();
                return Ok(result);
            }
        }

        [HttpPost]
        public IHttpActionResult GetUserDivision([FromBody]int Id)
        {
            var result = string.Empty;
            using (var dc = new DatabaseProjectDataContext())
            {
                var user = (from a_user in context.Employees
                            join a_division in context.Divisions
                            on a_user.StaffID equals Id
                            select new LoginUser
                            {
                                Division_Name = a_division.Division_Name
                            });
                if (user != null)
                    result = user.ToString();
                return Ok(result);
            }
        }

        public IHttpActionResult BudgetSourceList()
        {
            var result = new List<SelectResult>();
            using (var dc = new DatabaseProjectDataContext())
            {
                var budget = dc.Budget_Sources.Where(o => o.Id != 5).ToList();

                foreach (var b in budget)
                {
                    result.Add(new SelectResult()
                    {
                        text=b.Owner,
                        value = b.Id.ToString(),
                    });
                }
            }
            return Ok(result);
        }
    }
}


//if (obj != null)
//{
//    Session["Nama"] = obj.Nama.ToString();
//    Session["Password"] = obj.Password.ToString();
//    return RedirectToAction("About");
//}
//var user = dc.Users.Where(o => o.ID == pinno).SingleOrDefault();
//if (user != null)
//    result = user.Name;
//return Ok(result);
//var result = string.Empty;
//var user = queres.Where(a => a.Email.Equals(email) && a.Password.Equals(password)).FirstOrDefault();
//var result = string.Empty;Employee employee
//var result2 = string.Empty;
//var queres = (from a_loginuser in context.Employees select a_loginuser);

//using (var dc = new DatabaseProjectDataContext())
//{
//    var user = queres.Where(a => a.Email.Equals(email) && a.Password.Equals(password)).FirstOrDefault();
//    //if (user != null)
//    return Ok(user);
//    //return Ok(result + result2);
//}
