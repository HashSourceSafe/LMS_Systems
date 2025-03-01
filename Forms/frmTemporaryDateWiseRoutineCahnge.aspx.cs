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

    clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
    DateTime m_current_from_date;
    DateTime m_current_to_date;
    DateTime m_current_date;

    DateTime m_current_firstfrom_date;
    DateTime m_current_firstto_date;

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
           // ctxt_emph_code.Value = Request.QueryString["code"].ToString();
            cntxt_college_id.Value = Session["G_COLLEGE_ID"].ToString();
            cntxt_user_id.Value = Session["G_USER_ID"].ToString();
            cntxt_user_name.Value = Session["G_USER_NAME"].ToString();
            cntxt_g_dept_id.Value = Session["G_DEPT_ID"].ToString();

     



        




           // ctxt_emph_code.Value = Request.QueryString["code"].ToString();
          //  cntxt_college_id.Value = Session["G_COLLEGE_ID"].ToString();
            cntxt_branch_id.Value = Session["G_BRANCH_ID"].ToString();
             ctxt_sem_type.Value = Session["G_CURRENT_SEM_TYPE"].ToString();
             cntxt_academic_session.Value = Session["G_ACADEMIC_SESSION_ID"].ToString();


     

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