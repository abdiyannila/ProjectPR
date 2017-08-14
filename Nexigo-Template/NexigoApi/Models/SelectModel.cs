using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NexigoApi.Models
{
    public class SelectModel
    {
        public string value { get; set; }
        public string text { get; set; }
    }


    public class SelectItem
    {
        public int Id { get; set; }
        public int Estimate_Price { get; set; }
        public int Total_Estimate_Price { get; set; }
        public int Quantity { get; set; }

        public int Sources { get; set; }
        public string Source_Name { get; set; }

        public string Description { get; set; }
        public string Material_Group { get; set; }
        public string Item { get; set; }
        public string ActionLink { get; set; }
    }

    public class SelectItems
    {
        public int Id { get; set; }
        public string Requester_Name { get; set; }
        public string Requester_Position { get; set; }
        public string Company { get; set; }
        public string Division_Name { get; set; }
        public string Manager_Division { get; set; }
        public string Currenly { get; set; }
        public DateTime Expected_Date { get; set; }
        public string Material_Location { get; set; }
        public int Budget_Source { get; set; }
        public string Budge_Name { get; set; }
        public string Justification { get; set; }

        public int Estimate_Price { get; set; }
        public int Total_Estimate_Price { get; set; }
        public int Quantity { get; set; }

        public int Sources { get; set; }
        public string Source_Name { get; set; }

        public string Description { get; set; }
        public string Material_Group { get; set; }
        public string Item { get; set; }
        public string ActionLink { get; set; }
    }

    public class SelectRequest
    {
        public int Id { get; set; }
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
        public string MaterialPicture{ get; set; }
    }
}

//Id=a_item.Id,
//                            Quantity = a_item.Quantity,
//                            EstPrice=a_item.Estimate_Price,
//                            TotalPrice=a_item.Total_Estimate_Price,

//                            MaterialGroup=a_item.Material_Group,
//                            ItemDetail=a_item.Item,
//                            Description = a_item.Description,
//                            Source = a_item.Sources,
