using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BAL;

public partial class Forms_frmLMsFacutlyWiseSTDAttendance : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

        if (IsPostBack == false)
        {
          //  clsBalGetExamParam m_clsBalGetExamParam = new clsBalGetExamParam();
          //  m_clsBalGetExamParam.GetCurrentExamParam();

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
            Response.Redirect("frmLoginBackOffice.aspx");
        }
    }

    private void InitPage()
    {
        try
        {


            cntxt_nCollegeId.Value =Session["G_COLLEGE_ID"].ToString(); ;

          


        }
        catch (Exception ex)
        {
        }
        finally
        {
        }
    }
     protected void cmd_back_Click(object sender, EventArgs e)
    {
        Response.Redirect("frmBackOfficeMenu.aspx");
    }

}