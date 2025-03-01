using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Forms_frmRoutineMasterPage : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
            Initpage();
            CheckSession();
        }

    }
    private void CheckSession()
    {
        string m_url;
        m_url = Request.ServerVariables["HTTP_REFERER"];
        if (m_url == null)
        {
            Response.Redirect("frmLogin.aspx");
        }
    }
    private void Initpage()
    {
        
        try
        {
            //ctxt_user_name.InnerText = Session["G_USER_NAME"].ToString().ToUpper();
            cntxt_academic_session_id.Value = Session["G_ACADEMIC_SESSION_ID"].ToString();
            cntxt_college_id.Value = Session["G_COLLEGE_ID"].ToString();
            cntxt_user_id.Value = Session["G_USER_ID"].ToString();
        }
        catch (Exception ex)
        {
        }
        finally
        {
           
        }


    }

}