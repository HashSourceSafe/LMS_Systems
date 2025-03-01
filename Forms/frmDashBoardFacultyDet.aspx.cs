using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Forms_frmDashBoardFacultyDet : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
            CheckUrl();
            InitPage();
        }
    }

    private void CheckUrl()
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
        cntxt_college_id.Value = Session["G_COLLEGE_ID"].ToString();
        cntxt_branch_id.Value = Session["G_BRANCH_ID"].ToString();
        ctxt_college_name.Value = Session["G_COLLEGE_NAME"].ToString();

        dtp_from_date.Text = Request.QueryString["date"];
        dtp_to_date.Text = Request.QueryString["date"];
        disp_type.Value = Session["G_DISPLAY_TYPE"].ToString();

    }

}