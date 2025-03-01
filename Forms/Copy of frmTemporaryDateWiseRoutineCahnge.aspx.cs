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
using System.Globalization;

public partial class Forms_frmTemporaryDateWiseRoutineCahnge : System.Web.UI.Page
{
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
            cntxt_user_id.Value = Session["G_USER_ID"].ToString();
            cntxt_user_name.Value = Session["G_USER_NAME"].ToString();
            cntxt_g_dept_id.Value = Session["G_DEPT_ID"].ToString();
            

            cntxt_change_status_type.Value = Request.QueryString["STAT"].ToString();
            if (cntxt_change_status_type.Value == "1")
            {
                lbl_document_name.Text = "Temporary Routine Change Preparation";
            }
            else
            {
                lbl_document_name.Text = "Temporary Routine Change Approval";
            }

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