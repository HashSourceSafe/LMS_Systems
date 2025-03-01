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

public partial class Forms_frmPrintFacultyWiseAttendance : System.Web.UI.Page
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
            Response.Redirect("frmLoginBackOffice.aspx");
        }
    }

    private void InitPage()
    {
        //clsBoStdExamForm m_clsBoStdExamForm = new clsBoStdExamForm();
       // clsBalStdExamForm m_clsBalStdExamForm = new clsBalStdExamForm();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
       
        try
        {

            cntxt_nCollegeId.Value = Session["S_COLLEGE_ID"].ToString();
            ctxt_fromdate.Value = Session["S_FROM_DATE"].ToString();
            ctxt_todate.Value = Session["S_TO_DATE"].ToString();
            ctxt_deptName.Value = Session["S_DEPT_NAME"].ToString();
            cntxt_nisSum.Value = Session["S_ISSUM"].ToString();
            cntxt_nFromPercent.Value = Session["S_FROM_PERCENT"].ToString();
            cntxt_nToPercent.Value = Session["S_TO_PERCENT"].ToString();


           
        }
        catch (Exception ex)
        {
            throw ex;
        }
        finally
        {
           // m_clsBoStdExamForm = null;
           // m_clsBalStdExamForm = null;
            m_clsBalCommonLib = null;
        }
    }
}