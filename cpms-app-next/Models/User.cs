using cpms.Core;
using System.ComponentModel.DataAnnotations;

namespace cpms.Models
{
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

        public string FullName
        {
            get
            {
                return this.FirstName + " " + this.LastName;
            }
        }
    }
}
