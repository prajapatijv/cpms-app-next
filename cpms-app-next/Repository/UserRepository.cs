using cpms.Core;
using cpms.EF;
using cpms.Models;

namespace cpms.Repository
{
    public interface IUserRepository : IGenericRepository<User>
    {
    }

    public class UserRepository : GenericRepository<User> , IUserRepository
    {
        public UserRepository(CPMSDbContext dbContext) 
            : base(dbContext)
        {
        }
    }
}
