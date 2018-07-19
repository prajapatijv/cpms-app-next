using cpms.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cpms.Repository
{
    public interface IRepostiory<T>
    {
        IEnumerable<T> GetAll();
        IEnumerable<T> Insert(T entity);
        IEnumerable<T> Update(T entity);
        IEnumerable<T> Delete(T entity);
    }

    public class BaseRepository<T> : IRepostiory<T>
    {
        public IEnumerable<T> Delete(T entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> GetAll()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> Insert(T entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> Update(T entity)
        {
            throw new NotImplementedException();
        }
    }

    public class UserRepository : BaseRepository<User>
    {

    }
}
