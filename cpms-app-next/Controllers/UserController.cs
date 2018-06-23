using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace cpms_app_next.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        public List<AppUser> users;

        public UserController()
        {
            this.users = new List<AppUser>();
            this.users.Add(new AppUser { Id = 1, FirstName = "Jitendra", LastName = "Prajapati", UserName = "prajapatijv", Password = "test0000", Role = "Admin" });
            this.users.Add(new AppUser { Id = 2, FirstName = "Sandip", LastName = "Shah", UserName = "shahsandip", Password = "test0001", Role = "Admin" });
            this.users.Add(new AppUser { Id = 3, FirstName = "Manish", LastName = "Mistry", UserName = "manish", Password = "test0002", Role = "Operator" });
        }

        [HttpGet("[action]")]
        public IEnumerable<AppUser> GetUsers()
        {
            return this.users;
        }

        public class AppUser
        {
            public int Id { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string UserName { get; set; }
            public string Password { get; set; }
            public string Role { get; set; }
        }
    }
}
