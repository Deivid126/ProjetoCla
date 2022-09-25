using Microsoft.AspNetCore.Identity;

namespace APIWEB
{
    public class Usuario
    {
        public string Login { get; set; }

        public string PasswordHash { get; set; }
    }
}