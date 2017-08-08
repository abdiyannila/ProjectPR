using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NexigoApi.Models
{
    public class LoginUser
    {
        public int StaffID { get; set; }
        public string Staff_Name { get; set; }
        public string Profil_Picture { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Gender { get; set; }
        
        public string Address { get; set; }
        public DateTime Join_Date { get; set; }
        public int Expat { get; set; }
        public int Contract { get; set; }

        public int Staff_Level { get; set; }
        public string Staff_LevelName { get; set; }

        public int Division_Code { get; set; }
        public string Division_Name { get; set; }
    }
}