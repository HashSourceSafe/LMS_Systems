using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Forms_frmChangePassword : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
            CheckSession();
            InitPage();
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
    private void InitPage()
    {
        ctxt_type.Value = Request.QueryString["type"].ToString();
        cntxt_college_id.Value = Session["G_COLLEGE_ID"].ToString();

    }
}