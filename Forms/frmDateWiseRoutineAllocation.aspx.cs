using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections;
using BAL;
using DAL;
using BO;
using System.Data;

public partial class Forms_frmDateWiseRoutineAllocation : System.Web.UI.Page
{
    clsBoDateWiseRoutineAllocation m_clsBoDateWiseRoutineAllocation = new clsBoDateWiseRoutineAllocation();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
            CheckSession();
            InitPage();
        }
    }
    private void InitPage()
    {

        try
        {
            cntxt_college_id.Value = Session["G_COLLEGE_ID"].ToString();
            cntxt_academic_ses_id.Value = Session["G_ACADEMIC_SESSION_ID"].ToString();
            
        }
        catch
        {
        }
        finally
        {

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

        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        m_clsBalCommonLib.IsSessionRunning();
        m_clsBalCommonLib.DeleteAllLocalSessionVar();
        m_clsBalCommonLib = null;
    }
}