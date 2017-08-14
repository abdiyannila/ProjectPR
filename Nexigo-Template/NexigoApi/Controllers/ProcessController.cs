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
    public class ProcessController : ApiController
    {
        private DatabaseProjectDataContext context = null;

        public ProcessController()
        {
            context = new DatabaseProjectDataContext();
        }

        [HttpPost]
        public IHttpActionResult CreateRequestItem([FromBody] RequestProcess req)
        {
            TaskItemResult taskItemResult;
            var errorMessage = string.Empty;

            var nf = new FlowQuestWorkflowServiceClient();
            nf.CreateProcessInstance(8, "PROJECTMAKERS4", req.Requester_ID, out taskItemResult, out errorMessage);

            using (var db=new DatabaseProjectDataContext())
            {
                var data = new Submition()
                {
                    Requester_Name = req.Requester_Name,
                    Requester_ID=req.Requester_ID,
                    CreateDate = DateTime.Now,
                    SubmittedDate=DateTime.Now,
                    Status="Draft",
                    Reviewer_Code=req.Reviewer_Code,
                };
                data.ProcessID = taskItemResult.ProcessId;

                db.Submitions.InsertOnSubmit(data);
                db.SubmitChanges();
            }


            using (var db = new DatabaseProjectDataContext())
            {
                var maker = new RequestProcess()
                {
                    Requester_ID=req.Requester_ID,
                    Requester_Name = req.Requester_Name,
                    Requester_Position = req.Requester_Position,
                    Divison = req.Divison,
                    Currency = req.Currency,
                    Expected_Date = req.Expected_Date,
                    Location = req.Location,
                    BudgetSource = req.BudgetSource,
                    Justification = req.Justification,
                    Material_Group = req.Material_Group,
                    Item = req.Item,
                    Description = req.Description,
                    Quantity = req.Quantity,
                    Estimate_Price = req.Estimate_Price,
                    Total_Estimate_Price = req.Total_Estimate_Price,
                    BudgetSources = req.BudgetSources,
                    MaterialPicture = req.MaterialPicture,
                    Reviewer_Code = req.Reviewer_Code,
                    ProcessId=taskItemResult.ProcessId.ToString(),
                    CreatedDate=DateTime.Now,
                    SubmittedDate=DateTime.Now,
                    Status="Draft"
                };

                db.RequestProcesses.InsertOnSubmit(maker);
                db.SubmitChanges();

                nf.ExecActionInCurrentActv(8, taskItemResult.ProcessId, "Submit", req.Requester_ID, null, null, "", false, out errorMessage);
            }
            return Ok();
        }
    }
}
//[HttpPost]
//public IHttpActionResult ApproveRequestItem([FromBody] ProcessModel data)
//{
//    using(var db=new DatabaseProjectDataContext())
//    {
//        var maker = db.RequestProcesses.Where(o => o.ProcessId == int.Parse(data.ProcessId)).SingleOrDefault();
//        if (maker != null)
//        {
//            maker.
//        }
//    }
//}                var dat = db.UserMasters.FirstOrDefault(o => o.StaffID == req.Reviewer_Code);
//Status = "Draft",
//SubmittedDate=DateTime.Now,
//CreatedDate = DateTime.Now,