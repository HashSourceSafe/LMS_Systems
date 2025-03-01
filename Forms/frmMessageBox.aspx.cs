using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Forms_frmMessageBox : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
            DispMesg();
        }
    }
    protected void cmd_ok_Click(object sender, EventArgs e)
    {
        System.Web.UI.ScriptManager.RegisterStartupScript(Page, Page.GetType(), "key001", "window.close();", true);
    }

    private void DispMesg()
    {
        string m_url;
        m_url = Request.ServerVariables["HTTP_REFERER"];
        if (m_url == null)
        {
            Response.Redirect("frmLogin.aspx");
        }

        string mMesg;
        mMesg = (string)Session["G_MESSAGE"];
        mMesg=mMesg.Replace("@@","<BR>");
        m_mesg.Text = mMesg;
    }
}