using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace exercice7.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        

        [HttpGet("[action]")]
        public IEnumerable<User> Users()
        {
            List<User> userlist = new List<User>();
            userlist.Add(new User() { FirstName = "zekiri", LastName = "Abdelali" });
            userlist.Add(new User() { FirstName = "111", LastName = "2222" });
            userlist.Add(new User() { FirstName = "3333", LastName = "4444" });
            userlist.Add(new User() { FirstName = "55", LastName = "55555" });

            return userlist;
            
        }

        public class User
        {
            public string FirstName { get; set; }
            public string LastName { get; set; }

        }
    }
}
