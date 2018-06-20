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
            this.users.Add(new AppUser { Id = 1, Name = "Jitendra Prajapati", UserID = "prajapatijv", Password = "test0000", Role = "Admin" });
            this.users.Add(new AppUser { Id = 2, Name = "Sandip Shah", UserID = "shahsandip", Password = "test0001", Role = "Admin" });
            this.users.Add(new AppUser { Id = 3, Name = "Manish Kevangi", UserID = "manish", Password = "test0002", Role = "Operator" });
        }

        [HttpGet("[action]")]
        public IEnumerable<AppUser> GetUsers()
        {
            return this.users;
        }

        public class AppUser
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string UserID { get; set; }
            public string Password { get; set; }
            public string Role { get; set; }
        }
    }
}
