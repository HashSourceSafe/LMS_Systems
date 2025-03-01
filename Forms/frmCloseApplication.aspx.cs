using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Forms_frmCloseApplication : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Session.RemoveAll();
        Session.Abandon();
        Response.Redirect("frmIndex.aspx");

        //System.Web.UI.ScriptManager.RegisterStartupScript(Page, Page.GetType(), "key001", "window.close();", true);
    }
}