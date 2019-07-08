using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace exercice.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<User> GetUsers()
        {
            List<User> users = new List<User>();
            users.Add(new User() { FirstName = "zekiri", LastName = "Abdelali" });
            users.Add(new User() { FirstName = "111", LastName = "1111" });
            users.Add(new User() { FirstName = "222", LastName = "22222" });
            users.Add(new User() { FirstName = "33", LastName = "3333333" });

            return users;
        }

        [HttpPost("[action]")]
        public void SetUser([FromBody] User newUser)
        {
            System.Diagnostics.Debug.Write(newUser.FirstName);
            System.Diagnostics.Debug.Write(newUser.LastName);
        }


        public class User
        {
            public string FirstName { get; set; }
            public string LastName { get; set; }
        }
    }
}
