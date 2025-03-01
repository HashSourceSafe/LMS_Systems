using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Forms_frmRptStudentAttd : System.Web.UI.Page
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
        try
        {
            cntxt_college_id.Value = Session["G_COLLEGE_ID"].ToString();
            cntxt_academic_ses_id.Value = Session["G_ACADEMIC_SESSION_ID"].ToString();
            cntxt_sem_type_id.Value = Session["G_CURRENT_SEM_TYPE"].ToString();

            ctxt_college_name.Value = Session["G_COLLEGE_NAME"].ToString();
            cntxt_branch_id.Value = Session["G_BRANCH_ID"].ToString();


        }
        catch
        {
        }
        finally
        {
        }
    }

}