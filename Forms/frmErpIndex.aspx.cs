using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BAL;

public partial class Forms_frmErpIndex : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
            InitPage();
        }
    }

    private void InitPage()
    {
        HttpContext.Current.Response.Cache.SetExpires(DateTime.UtcNow.AddDays(-1));
        HttpContext.Current.Response.Cache.SetValidUntilExpires(false);
        HttpContext.Current.Response.Cache.SetRevalidation(HttpCacheRevalidation.AllCaches);
        HttpContext.Current.Response.Cache.SetCacheability(HttpCacheability.NoCache);
        HttpContext.Current.Response.Cache.SetNoStore(); 


        if (Session.Count > 0)
        {
            Response.Redirect("frmPageUnderCons.aspx");
        }

        Session.RemoveAll();
        Session["G_SESSION_ID"] = Session.SessionID;
        ctxt_pass_key.Text = Session.SessionID;
       

    }

    protected void cmd_go_Click(object sender, EventArgs e)
    {
        ValidateMacId();
    }

 
    protected void cmd_direct_user_Click(object sender, EventArgs e)
    {
        ctxt_erp_act_key.Text = "11111111";
        ValidateMacId();
    }

    void ValidateMacId()
    {
        clsBalErpIndex m_clsBalErpIndex = new clsBalErpIndex();
        try
        {
            if (m_clsBalErpIndex.Validate(ctxt_erp_act_key.Text) == 0)
            {
                Response.Redirect("frmIndex.aspx");
            }
            else
            {
                ctxt_erp_act_key.BackColor = System.Drawing.Color.Red;
                ctxt_erp_act_key.Text = "Error In Access Key";
            }
        }
        catch
        {
        }
        finally
        {
            m_clsBalErpIndex = null;
        }
    }
}