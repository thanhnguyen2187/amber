using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace EndUserView.Pages
{
    public class Home : PageModel
    {
        public void OnGet()
        {
            Response.Redirect(
                location: "./",
                permanent: true
            );
        }
    }
}