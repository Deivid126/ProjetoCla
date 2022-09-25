using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Linq;
using System.Data;
using System.Security.Cryptography.X509Certificates;

namespace APIWEB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class User : ControllerBase
    {
       private readonly IConfiguration _configuration;

       public User(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("login")]
        public  async Task<IActionResult> Authentication(Usuario usuario)
        {
            
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("ServerConnection").ToString());
            SqlDataAdapter adapter = new SqlDataAdapter("Select * From Usuario where Login = '" + usuario.Login + "' and PasswordHash = '" + usuario.PasswordHash + "'", con);
            DataTable dataTable = new DataTable();
            adapter.Fill(dataTable);
            if (dataTable.Rows.Count > 0)
            {
                return Ok(true);
            }
            else
            {
                return Ok(false);
            }
        }
    }
}
