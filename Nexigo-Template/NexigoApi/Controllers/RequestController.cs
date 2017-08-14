using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using NexigoApi.Models;

namespace NexigoApi.Controllers
{
    public class GetItem
    {
        //public List<SelectItem> data { get; set;
        //public List<SelectItems> data { get; set; }
        public List<SelectRequest> data { get; set; }
        public int total { get; set; }
    }

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RequestController : ApiController
    {
        [HttpGet]
        public string GetText()
        {
            return "IDR";
        }
        
        private DatabaseProjectDataContext context = null;

        public RequestController()
        {
            context = new DatabaseProjectDataContext();
        }

        [HttpPost]
        public List<SelectModel> GetLocation()
        {
            var select1 = new SelectModel
            { text = "First Floor", value = "First Floor", };

            var select2 = new SelectModel
            { text = "Second Floor", value = "First Floor", };

            var select3 = new SelectModel
            { text = "Third Floor", value = "First Floor", };

            var select4 = new SelectModel
            { text = "Fourt Floor", value = "First Floor", };

            var GetLocDDList = new List<SelectModel>();
            GetLocDDList.Add(select1);
            GetLocDDList.Add(select2);
            GetLocDDList.Add(select3);
            GetLocDDList.Add(select4);

            return GetLocDDList;
        }

        public IHttpActionResult MaterialGroupList()
        {
            var result = new List<SelectResult>();
            using (var dc = new DatabaseProjectDataContext())
            {
                var comp = dc.Material_Groups.Where(o => o.Id != 8).ToList();

                foreach (var m in comp)
                {
                    result.Add(new SelectResult()
                    {
                        text = m.Name,
                        value = m.Id.ToString(),
                    });
                }
            }
            return Ok(result);
        }

        public IHttpActionResult ReviewerList()
        {
            var result = new List<SelectResult>();
            using (var dc = new DatabaseProjectDataContext())
            {
                var comp = dc.Reviewers.Where(o => o.Id != 8).ToList();

                foreach (var m in comp)
                {
                    result.Add(new SelectResult()
                    {
                        text = m.Name_Reviewer,
                        value = m.Id.ToString(),
                    });
                }
            }
            return Ok(result);
        }

        public IHttpActionResult ItemList()
        {
            var result = new List<SelectResult>();
            using (var dc = new DatabaseProjectDataContext())
            {
                var comp = dc.Materials.Where(o => o.Id != 80).ToList();

                foreach (var m in comp)
                {
                    result.Add(new SelectResult()
                    {
                        text = m.Name,
                        value = m.Id.ToString(),
                    });
                }
            }
            return Ok(result);
        }

        //[HttpGet]
        public IHttpActionResult MaterialListItem(string name)
        {
            try
            {
                if (name != null)
                {
                    var result = new List<SelectResult>();
                    using (var db=new DatabaseProjectDataContext())
                    {
                        List<MaterialModel> materialList = new List<MaterialModel>();

                        //var data = db.Material_Groups.FirstOrDefault(o => o.Name == material);
                        //var comp = dc.Materials.Where(o => o.Id != 80).ToList();
                        var MaterialGroup = db.Material_Groups.FirstOrDefault(o => o.Name == name);

                        var item = (from a_item in context.Materials
                                        //           //join a_material in context.Material_Groups
                                        //           //on a_item.Group_Id equals a_material.Id
                                        //           //where a_material.Name.Equals(name)
                                    select new MaterialModel
                                    {
                                        Item_Id = a_item.Id,
                                        Item_Name = a_item.Name,
                                        Group_Name=MaterialGroup.Name
                                    }).FirstOrDefault();

                        //materialList = item.ToList();

                        //foreach (var m in materialList)
                        //{
                        //    result.Add(new SelectResult()
                        //    {
                        //        text = m.Item_Name,
                        //        value = m.Item_Id.ToString()
                        //    });
                        //}
                        return Ok(item);
                    }
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

        [HttpPost]
        public IHttpActionResult Create([FromBody] ItemRequest itemreq )
        {
            var result = new List<SelectItem>();
            using (var db = new DatabaseProjectDataContext())
            {
                var item = new ItemRequest()
                {
                    Id=itemreq.Id,
                    Quantity=itemreq.Quantity,
                    Estimate_Price=itemreq.Estimate_Price,
                    Total_Estimate_Price=itemreq.Total_Estimate_Price,

                    Material_Group=itemreq.Material_Group,
                    Item=itemreq.Item,
                    Description=itemreq.Description,
                    Sources=itemreq.Sources
                };
                db.ItemRequests.InsertOnSubmit(item);
                db.SubmitChanges();
            }
            return Ok(result);
        }

        //[HttpPost]
        //public GetItem ReadItemAll()
        //{
        //    var query = from a_item in context.ItemRequests
        //                //join a_source in context.Budget_Sources
        //                //on a_item.Sources equals a_source.Id
        //                select new SelectItem
        //                {
        //                    Id=a_item.Id,
        //                    Material_Group = a_item.Material_Group,
        //                    Item = a_item.Item,
        //                    Description = a_item.Description,
        //                    Quantity = a_item.Quantity,
        //                    Estimate_Price=a_item.Estimate_Price,
        //                    Total_Estimate_Price=a_item.Total_Estimate_Price,
        //                    Sources = a_item.Sources,
        //                    //Source_Name =a_source.Field_Name
        //                };

        //    GetItem getitem = new GetItem
        //    {
        //        data=query.ToList(),
        //        total=query.ToList().Count
        //    };
        //    return getitem;
        //}

        public IHttpActionResult UpdateItem([FromBody] ItemRequest itemreq)
        {
            try
            {
                if (itemreq != null)
                {
                    using (var db= new DatabaseProjectDataContext())
                    {
                        var item = db.ItemRequests.FirstOrDefault(o => o.Material_Group == itemreq.Material_Group);
                        item.Material_Group = itemreq.Material_Group;
                        item.Item = itemreq.Item;
                        item.Quantity = itemreq.Quantity;
                        item.Estimate_Price = itemreq.Estimate_Price;
                        item.Total_Estimate_Price = itemreq.Total_Estimate_Price;
                        item.Description = itemreq.Description;
                        item.Sources = itemreq.Sources;

                        db.SubmitChanges();
                        return Ok(item);
                    }
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

        public IHttpActionResult DeleteItem([FromBody] ItemRequest itemreq)
        {
            try
            {
                if (itemreq != null)
                {
                    using (var db = new DatabaseProjectDataContext())
                    {
                        var item = db.ItemRequests.FirstOrDefault(o => o.Item == itemreq.Item);
                        item.Item = itemreq.Item;

                        db.ItemRequests.DeleteOnSubmit(item);
                        db.SubmitChanges();
                        return Ok(item);
                    }
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


        [HttpPost]
        public IHttpActionResult CreateItem([FromBody] RequestProcess itemreq)
        {
            var result = new List<SelectItems>();
            using (var db = new DatabaseProjectDataContext())
            {
                var ITEM = db.Materials.FirstOrDefault(o => o.Id == int.Parse(itemreq.Item));
                var BUDGETSOURCE = db.Budget_Sources.FirstOrDefault(o => o.Id == int.Parse(itemreq.BudgetSource));
                var MaterialGroup= db.Material_Groups.FirstOrDefault(o => o.Id == int.Parse(itemreq.Material_Group));
                var BudgetSourcesS= db.Budget_Sources.FirstOrDefault(o => o.Field_Name == itemreq.BudgetSources);
                var Reviewer = db.Reviewers.FirstOrDefault(o => o.Id == int.Parse(itemreq.Reviewer_Code));

                var item = new RequestProcess()
                {
                    Id = itemreq.Id,
                    Requester_Name = itemreq.Requester_Name,
                    Requester_Position = itemreq.Requester_Position,
                    Divison = itemreq.Divison,
                    Currency=itemreq.Currency,
                    Expected_Date=itemreq.Expected_Date,
                    Location=itemreq.Location,
                    BudgetSource=BUDGETSOURCE.Field_Name,
                    Justification=itemreq.Justification,
                    Material_Group = MaterialGroup.Name,
                    Item = ITEM.Name,
                    Description = itemreq.Description,
                    Quantity=itemreq.Quantity,
                    Estimate_Price = itemreq.Estimate_Price,
                    Total_Estimate_Price = itemreq.Total_Estimate_Price,
                    BudgetSources= BudgetSourcesS.Owner,
                    MaterialPicture=itemreq.MaterialPicture,
                    Reviewer_Code =Reviewer.Name_Reviewer
                };
                db.RequestProcesses.InsertOnSubmit(item);
                db.SubmitChanges();
            }
            return Ok(result);
        }

        [HttpPost]
        public GetItem ReadAllItem()
        {
            var query = from a_item in context.RequestProcesses
                            //join a_source in context.Budget_Sources
                            //on a_item.Sources equals a_source.Id
                        select new SelectRequest
                        {
                            Id = a_item.Id,
                            Requester_Name = a_item.Requester_Name,
                            Requester_Position = a_item.Requester_Position,
                            Divison = a_item.Divison,
                            Currency = a_item.Currency,
                            Expected_Date = (DateTime)a_item.Expected_Date,
                            Location = a_item.Location,
                            BudgetSource = a_item.BudgetSource,
                            Justification = a_item.Justification,
                            Material_Group = a_item.Material_Group,
                            Item = a_item.Item,
                            Description = a_item.Description,
                            Quantity = (int)a_item.Quantity,
                            Estimate_Price = (int)a_item.Estimate_Price,
                            Total_Estimate_Price = (int)a_item.Total_Estimate_Price,
                            BudgetSources = a_item.BudgetSources,
                            MaterialPicture = a_item.MaterialPicture
                        };

            GetItem getitem = new GetItem
            {
                data = query.ToList(),
                total = query.ToList().Count
            };
            return getitem;
        }
    }
}



//using (var dc = new DatabaseProjectDataContext())
//{
//    List<MaterialModel> materialList = new List<MaterialModel>();

//var comp = (from a_M in context.Materials
//            join a_MG in context.Material_Groups
//            on a_M.Group_Id equals a_MG.Id
//            where a_M.Group_Id.Equals(material)
//            select new MaterialModel
//            {
//                Group_Name = a_M.Name
//            });

//    materialList = comp.ToList();

//foreach (var m in materialList)
//{
//    result.Add(new SelectResult()
//    {
//        text = m.Name,
//        value = m.ID.ToString(),
//    });
//}
//}
//return Ok(result);