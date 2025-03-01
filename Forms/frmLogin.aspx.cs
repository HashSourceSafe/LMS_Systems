using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BAL;
using DAL;

public partial class frmLogin : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
            Session.RemoveAll();
            Session["G_IS_AUTO_LOGIN"] = "N";
            Initpage();    
        }
    }

    

    protected void cmd_login_Click(object sender, EventArgs e)
    {
        clsBalLogin m_clsBalLogin = new clsBalLogin();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        clsDalLogin m_clsDalLogin=new clsDalLogin();
        try
        {
            //ctxt_user_id.Text="admin-nps";
            //ctxt_pass_word.Text = "adm@nps";

            ctxt_error_mesg.Visible = true;

            Session["G_ACADEMIC_SESSION_ID"] = cntxt_academic_session_id.Value;
            Session["G_ACADEMIC_SESSION_NAME"] = ctxt_academic_session.Text;

            if (cntxt_academic_session_id.Value == "0" || ctxt_academic_session.Text == "")
            {
                ctxt_error_mesg.Text = "Select Session.....";
                return;
            }


            if (m_clsBalLogin.ValidateLogin(ctxt_user_id.Text, ctxt_pass_word.Text) == 1)
            {
                   
                if (Convert.ToInt64(HttpContext.Current.Session["G_ERROR_NO"]) < 0)
                {
                    ctxt_error_mesg.Text = "Error In Login, Invalid Details..";
                }
                else
                {
                    ctxt_error_mesg.Text = HttpContext.Current.Session["G_ERROR_MSG"].ToString();
                }
            }
            else
            {
                if (Session["G_DISPLAY_TYPE"].ToString() == "BO")
                {
                    ctxt_error_mesg.Visible = false;
                    Response.Redirect("frmRoutineMasterPage.aspx");

                }
                else if (Session["G_DISPLAY_TYPE"].ToString() == "F")
                {
                    ctxt_error_mesg.Visible = false;
                    Response.Redirect("frmShowFacultyDetailsEmpCodeWise.aspx?code=" + Session["G_USER_ID"].ToString());
                }
                else if (Session["G_DISPLAY_TYPE"].ToString() == "S")
                {
                    ctxt_error_mesg.Visible = false;
                    Response.Redirect("frmStudentDashBoard.aspx?code=" + Session["G_USER_ID"].ToString());
                }
                else if (Session["G_DISPLAY_TYPE"].ToString() == "PRIN" || Session["G_DISPLAY_TYPE"].ToString() == "MNG")
                {
                    ctxt_error_mesg.Visible = false;
                    Response.Redirect("frmDashBoard.aspx?college_id=0&is_call_from_mis=0");
                }
                else
                {
                    ctxt_error_mesg.Visible = false;
                    //Response.Redirect("frmRoutineMasterPage.aspx");
                }
            }
        }
        catch
        {
        }
        finally
        {
            m_clsBalLogin = null;
            m_clsBalCommonLib = null;
        }
            


    }


    private void Initpage()
    {
        //Random rnd = new Random();
        //int no1;
        //int no2;

        clsBalLogin m_clsBalLogin = new clsBalLogin();


        try
        {

            m_clsBalLogin.SetCurrentAcademicSession();

            cntxt_academic_session_id.Value = Session["G_ACADEMIC_SESSION_ID"].ToString();
            ctxt_academic_session.Text = Session["G_ACADEMIC_SESSION_NAME"].ToString();


            //no1 = rnd.Next(1, 10);
            //no2 = rnd.Next(1, 10);
            //cntxt_tot_sum.Value = (no1 + no2).ToString();

            //ctxt_no.Text = "Enter Sum Below " + no1.ToString() + " + " + no2.ToString();
            ctxt_hash.Text = "Developed By Hash Technologies (P) Ltd.";

            ctxt_user_id.Focus();
        }
        catch
        {
        }
        finally
        {
            m_clsBalLogin = null;
        }
    }
}

