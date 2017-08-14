using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NexigoApi.Models
{
    public class MaterialModel
    {
        public int ID { get; set; }
        public string Name { get; set; }

        public int Group_Id { get; set; }
        public string Group_Name { get; set; }

        public int Item_Id { get; set; }
        public string Item_Name { get; set; }
    }
}