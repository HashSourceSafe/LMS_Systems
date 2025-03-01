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

public partial class Forms_frmShowFacultyDetailsEmpCodeWise : System.Web.UI.Page
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
            ctxt_emph_code.Value = Request.QueryString["code"].ToString();
            cntxt_college_id.Value = Session["G_COLLEGE_ID"].ToString();
            cntxt_branch_id.Value = Session["G_BRANCH_ID"].ToString();
                

            ctxt_sem_type.Value = Session["G_CURRENT_SEM_TYPE"].ToString();

            lbl_user_name.Text = Session["G_USER_NAME"].ToString();
            

            cntxt_routine_disp_by_id.Value = "1";
            ctxt_routine_disp_type.Text = "Vertical";

            cntxt_order_by_id.Value = "2";
            ctxt_order_by.Text = "By Name";

            m_current_from_date = DateTime.Today.AddDays(-(int)(DateTime.Today.DayOfWeek)+1);
            m_current_to_date = m_current_from_date.AddDays(7).AddSeconds(-1);
            m_current_date = DateTime.Now;

            //dtp_from_date.Enabled = false;
            //dtp_to_date.Enabled = true;

            dtp_from_date.Text = m_current_from_date.ToString("dd/MM/yyyy", CultureInfo.InvariantCulture);
            dtp_to_date.Text = m_current_to_date.ToString("dd/MM/yyyy", CultureInfo.InvariantCulture);
            ctxt_current_date.Value = m_current_date.ToString("dd/MM/yyyy", CultureInfo.InvariantCulture);

            m_current_firstfrom_date = GetFirstDateOfMonth(DateTime.Now,0);
            m_current_firstto_date = GetLastDateOfMonth(DateTime.Now,0);

            dtp_att_view_from_date.Enabled = false;
            dtp_att_view_to_date.Enabled = false;

            dtp_att_view_from_date.Text = m_current_firstfrom_date.ToString("dd/MM/yyyy", CultureInfo.InvariantCulture);
            dtp_att_view_to_date.Text = m_current_firstto_date.ToString("dd/MM/yyyy", CultureInfo.InvariantCulture);
            cntxt_academic_session.Value = Session["G_ACADEMIC_SESSION_ID"].ToString();
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

    public DateTime GetFirstDateOfMonth(DateTime p_date,int prev)
    {
        DateTime m_Date;
        try
        {
            //if (prev == 0)
            //{
                m_Date = new DateTime(p_date.Year, p_date.Month, 1);
                Label_month.Text = m_Date.ToString("MMMM", CultureInfo.InvariantCulture);
                Label_year.Text = m_Date.ToString("yyyy", CultureInfo.InvariantCulture);
            //}
            //else
            //{
            //    m_Date = new DateTime(p_date.Year, p_date.Month, 1);
            //    m_Date = m_Date.AddMonths(-1);
            //    Label_month.Text = m_Date.ToString("MMMM", CultureInfo.InvariantCulture);
            //    Label_year.Text = m_Date.ToString("yyyy", CultureInfo.InvariantCulture);
            //}

        }
        catch
        {
            m_Date = Convert.ToDateTime("01/01/1900");
        }
        finally
        {
        }

        return m_Date;
    }

    public DateTime GetLastDateOfMonth(DateTime p_date,int next)
    {
        DateTime m_Date;
        DateTime m_first_Date;
        try
        {

            //if (next == 0)
            //{
                m_first_Date = new DateTime(p_date.Year, p_date.Month, 1);
                m_Date = m_first_Date.AddMonths(1).AddDays(-1);
                Label_month.Text = m_Date.ToString("MMMM", CultureInfo.InvariantCulture);
                Label_year.Text = m_Date.ToString("yyyy", CultureInfo.InvariantCulture);
            //}
            //else
            //{
            //    m_first_Date = new DateTime(p_date.Year, p_date.Month, 1);
            //    m_Date = m_first_Date.AddMonths(1).AddDays(-1);
            //    m_Date = m_Date.AddMonths(1);
            //    Label_month.Text = m_Date.ToString("MMMM", CultureInfo.InvariantCulture);
            //    Label_year.Text = m_Date.ToString("yyyy", CultureInfo.InvariantCulture);
            //}
        }
        catch
        {
            m_Date = Convert.ToDateTime("01/01/1900");
        }
        finally
        {
        }

        return m_Date;
    }

}