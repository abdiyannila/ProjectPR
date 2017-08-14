using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NexigoApi.Models
{
    public class ProcessModel
    {
        public string Requester_Name { get; set; }
        public string Requester_Position { get; set; }
        public string Divison { get; set; }
        public string Currency { get; set; }
        public DateTime Expected_Date { get; set; }
        public string Location { get; set; }
        public string BudgetSource { get; set; }
        public string Justification { get; set; }
        public string Material_Group { get; set; }
        public string Item { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public int Estimate_Price { get; set; }
        public int Total_Estimate_Price { get; set; }
        public string BudgetSources { get; set; }
        public string MaterialPicture { get; set; }
        public string Reviewer { get; set; }
        public string Manager { get; set; }
        public string ProcessId { get; set; }
        public string Comment { get; set; }
        public string Action { get; set; }
        public string ActionBy { get; set; }
    }

    public class LastActivityModel
    {
        public string ActivityName { get; set; }
        public string Participant { get; set; }
    }
    public class CommentHistoryModel
    {
        public string Date { get; set; }
        public string Name { get; set; }
        public string Comment { get; set; }
        public string Action { get; set; }
    }
}