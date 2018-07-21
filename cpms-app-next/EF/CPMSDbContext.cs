using cpms.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace cpms.EF
{
    public class CPMSDbContext : DbContext
    {
        public CPMSDbContext(DbContextOptions<CPMSDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }

    public class User : IEntity
    {
        public int Id { get; set; }

        [Required, MaxLength(50)]
        public string FirstName { get; set; }

        [Required, MaxLength(50)]
        public string LastName { get; set; }

        [Required, MaxLength(30)]
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string FullName {
            get
            {
                return this.FirstName + " " + this.LastName;
            }
        }
    }
}
