using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cpms.EF;
using Microsoft.AspNetCore.Mvc;

namespace cpms.Controllers
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
            using (var db = new EF.CPMSDbContext())
            {
                return db.Users.ToList();
            }
        }

        [HttpPost()]
        public IEnumerable<User> Post([FromBody] User user)
        {
            using (var db = new EF.CPMSDbContext())
            {
                db.Users.Add(user);
                db.SaveChanges();

                return Get();
            }
        }

        [HttpPut()]
        public IEnumerable<User> Put([FromBody] User user)
        {
            using (var db = new EF.CPMSDbContext())
            {
                db.Attach<User>(user);
                db.Users.Update(user);
                db.SaveChanges();

                return Get();
            }
        }

        [HttpDelete()]
        public IEnumerable<User> Delete([FromBody] User user)
        {
            using (var db = new EF.CPMSDbContext())
            {
                db.Users.Remove(user);
                db.SaveChanges();

                return Get();
            }
        }
    }
}
