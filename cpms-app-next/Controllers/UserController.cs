using cpms.Core;
using cpms.Models;
using cpms.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace cpms.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserRepository _repository;

        public UserController(IUserRepository repository)
        {
            _repository = repository;
        }

        [HttpGet()]
        public IQueryable<User> Get()
        {
            return _repository.GetAll();        
        }

        [HttpPost()]
        [ValidateModel]
        public IEnumerable<User> Post([FromBody] User user)
        {
            _repository.Create(user);
            return _repository.GetAll();
        }

        [HttpPut()]
        [ValidateModel]
        public IEnumerable<User> Put([FromBody] User user)
        {
            _repository.Update(user.Id, user);
            return _repository.GetAll();
        }

        [HttpDelete()]
        [ValidateModel]
        public IEnumerable<User> Delete([FromBody] User user)
        {
            _repository.Delete(user.Id);
            return _repository.GetAll();
        }
    }
}
