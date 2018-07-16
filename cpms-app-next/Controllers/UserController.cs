using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cpms_app_next.EF;
using Microsoft.AspNetCore.Mvc;

namespace cpms_app_next.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        public UserController()
        {
        }

        [HttpGet()]
        public IEnumerable<User> Get()
        {
            using (var db = new cpms_app_next.EF.CPMSDbContext())
            {
                return db.Users.ToList();
            }
        }

        [HttpPost()]
        public IEnumerable<User> Post([FromBody] User user)
        {
            using (var db = new cpms_app_next.EF.CPMSDbContext())
            {
                db.Users.Add(user);
                db.SaveChanges();

                return Get();
            }
        }

        [HttpDelete()]
        public IEnumerable<User> Delete([FromBody] User user)
        {
            using (var db = new cpms_app_next.EF.CPMSDbContext())
            {
                db.Users.Remove(user);
                db.SaveChanges();

                return Get();
            }
        }
    }
}
