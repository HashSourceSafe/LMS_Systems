using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BAL;

public partial class Forms_frmErrorList : System.Web.UI.Page
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
            Response.Redirect("frmIndex.aspx");
        }

        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        m_clsBalCommonLib.IsSessionRunning();
        m_clsBalCommonLib = null;
    }

    private void InitPage()
    {
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        //clsBalBranchDetails m_clsBalBranchDetails = new clsBalBranchDetails();

        try
        {
            cntxt_nBranchId.Value = m_clsBalCommonLib.GetBranchId();
            cntxt_nFinYearId.Value = m_clsBalCommonLib.GetFinYearId();

            ctxt_branch_name.Value = "";
            ctxt_branch_add.Value = "";
            ctxt_branch_phone.Value = "Phone";
        }
        catch
        {
        }
        finally
        {
            m_clsBalCommonLib = null;
        }

    }

}