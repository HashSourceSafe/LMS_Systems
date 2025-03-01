using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BAL;

public partial class Forms_frmCreateRoutineTemplate : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
            CheckSession();
            Initpage();
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
        clsBalCreateRoutineTemplate m_CreateRoutineTemplate = new clsBalCreateRoutineTemplate();
        try
        {
            cntxt_college_id.Value = Session["G_COLLEGE_ID"].ToString();
            cntxt_academic_ses_id.Value = Session["G_ACADEMIC_SESSION_ID"].ToString();
            cntxt_sem_type_id.Value = Session["G_CURRENT_SEM_TYPE"].ToString();


            
            m_CreateRoutineTemplate.Init();
        }
        catch
        {
        }
        finally
        {
        }
    }


    protected void cmd_reset_subject_Click(object sender, EventArgs e)
    {

    }
}