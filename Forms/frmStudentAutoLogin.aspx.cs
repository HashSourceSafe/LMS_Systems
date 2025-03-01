using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BAL;


public partial class Forms_frmStudentAutoLogin : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
            Session.RemoveAll();
            Initpage();
        }
    }

    private void Initpage()
    {
        //Random rnd = new Random();
        //int no1;
        //int no2;

        string url=""; 
        clsBalLogin m_clsBalLogin = new clsBalLogin();


        try
        {
            Session["G_IS_AUTO_LOGIN"] = "Y";
            m_clsBalLogin.SetCurrentAcademicSession();

            string m_user_id = Request.Form["username"].ToString();
            string m_password = Request.Form["password"].ToString();
            string m_is_hash = Request.Form["is_hash"].ToString();
            string m_action = Request.Form["action"].ToString();




            if (m_is_hash == "yes" && m_action == "Authenticate")
            {
                if (m_clsBalLogin.ValidateLogin(m_user_id, m_password) == 1)
                {
                    Response.Write("<br>");
                    Response.Write("Error Login");

                    if (Convert.ToInt64(HttpContext.Current.Session["G_ERROR_NO"]) < 0)
                    {
                        Response.Redirect("frmLogin.aspx");
                    }
                    else
                    {
                        Response.Redirect("frmLogin.aspx");
                    }
                }
                else
                {

                    if (Session["G_DISPLAY_TYPE"].ToString() == "S")
                    {
                        url = "frmStudentDashBoard.aspx?code=" + Session["G_USER_ID"].ToString();
                        Response.Redirect(url, false);
                    }
                    else
                    {
                        Response.Redirect("frmLogin.aspx");
                    }
                }
            }

            
  
        }
        catch (Exception ex)
        {
            Response.Redirect("frmLogin.aspx");
        }
        finally
        {
            m_clsBalLogin = null;
        }
    }


}