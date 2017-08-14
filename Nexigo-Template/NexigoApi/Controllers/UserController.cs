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
                var users = dc.UserMasters.Where(o => o.StaffID != "2016022").ToList();

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
        public IHttpActionResult LoginUser([FromBody] UserMaster employee)
        {
            try
            {
                
                if (employee != null)
                {
                    var result = string.Empty;
                    using (var dc = new DatabaseProjectDataContext())
                    {
                        //var queres = (from a_loginuser in context.Employees select a_loginuser);
                        var user = dc.UserMasters.Where(a => a.StaffID==employee.StaffID && a.Password==employee.Password).SingleOrDefault();
                        if (user != null)
                        {
                            result = user.Staff_Name;
                        }
                        else
                        {
                            result = "No data";
                        }
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
        public IHttpActionResult GetUserName([FromBody]string id)
        {
            var result = string.Empty;
            using (var dc = new DatabaseProjectDataContext())
            {
                var user = dc.UserMasters.Where(o => o.StaffID == id).SingleOrDefault();
                if (user != null)
                    result = user.Staff_Name;
                return Ok(result);
            }
        }

        [HttpPost]
        public IHttpActionResult GetUserPosition([FromBody]string id)
        {
            var result = string.Empty;
            using (var dc = new DatabaseProjectDataContext())
            {
                var user = (from a_user in context.UserMasters
                            join a_level in context.Staff_Levels
                            on a_user.Staff_Level equals a_level.Id
                            where a_user.StaffID.Equals(id)
                            select new LoginUser
                            {
                                Staff_LevelName = a_level.Field_Name
                            }).SingleOrDefault();
                if (user != null)
                    result = user.Staff_LevelName;
                return Ok(result);
            }
        }

        [HttpPost]
        public IHttpActionResult GetUserDivision([FromBody]string id)
        {
            var result = string.Empty;
            using (var dc = new DatabaseProjectDataContext())
            {
                var user = (from a_user in context.UserMasters
                            join a_divisi in context.Divisions
                            on a_user.Division_Code equals a_divisi.Id
                            where a_user.StaffID.Equals(id)
                            select new LoginUser
                            {
                                Division_Name = a_divisi.Division_Name
                            }).SingleOrDefault();

                if (user != null)
                    result = user.Division_Name;
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
                        text=b.Field_Name,
                        value = b.Id.ToString(),
                    });
                }
            }
            return Ok(result);
        }

        //[HttpPost]
        //public List<SelectModel> GetLocation()
        //{
        //    var select1 = new SelectModel
        //    {value="First Floor",text="1",};

        //    var select2 = new SelectModel
        //    {value = "Second Floor",text = "2",};

        //    var select3 = new SelectModel
        //    { value = "Third Floor", text = "2", };

        //    var select4 = new SelectModel
        //    { value = "Fourt Floor", text = "2", };

        //    var GetLocDDList = new List<SelectModel>();
        //    GetLocDDList.Add(select1);
        //    GetLocDDList.Add(select2);
        //    GetLocDDList.Add(select3);
        //    GetLocDDList.Add(select4);

        //    return GetLocDDList;
        //}
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
//var result = string.Empty;Employee employeeaa
//var result2 = string.Empty;
//var queres = (from a_loginuser in context.Employees select a_loginuser);

//using (var dc = new DatabaseProjectDataContext())
//{
//    var user = queres.Where(a => a.Email.Equals(email) && a.Password.Equals(password)).FirstOrDefault();
//    //if (user != null)
//    return Ok(user);
//    //return Ok(result + result2);
//}
//var result = string.Empty;
//using (var dc = new DatabaseProjectDataContext())
//{
//    var user = (from a_user in context.Employees
//                join a_division in context.Divisions
//                on a_user.StaffID equals Id
//                select new LoginUser
//                {
//                    Division_Name = a_division.Division_Name
//                });
//    if (user != null)
//        result = user.ToString();
//    return Ok(result);