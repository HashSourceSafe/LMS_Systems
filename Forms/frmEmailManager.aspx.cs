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
using System.IO;

public partial class Forms_frmEmailManager : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
            InitPage();
        }
    }

    private void InitPage()
    {
        dtp_from_date.Text = DateTime.Now.ToString("dd/MM/yyyy");
        dtp_to_date.Text = DateTime.Now.ToString("dd/MM/yyyy");

        ctxt_email_to.Text = "md_reports@jisgroup.org";
        ctxt_email_subject.Text = "Faculty attendance details on " + DateTime.Now.ToString("dd/MM/yyyy");
        ctxt_email_body.Text = "Dear Sir, <BR> Faculty attendance details on " + DateTime.Now.ToString("dd/MM/yyyy")+"<BR>Regards";

        string m_college_id = "3";

        if (m_college_id == "0")
        {
            cntxt_college_id.Value = Session["G_COLLEGE_ID"].ToString();
        }
        else
        {
            cntxt_college_id.Value = m_college_id;
        }

 


        if (cntxt_college_id.Value == "7") //dsc
        {
            Session["G_COLLEGE_ID"] = "7";
            Session["G_BRANCH_ID"] = "100";
            Session["G_COLLEGE_NAME"] = "Dr.Sudhir Chandra Sur Engineering Degree College";
        }
        else if (cntxt_college_id.Value == "2") //nit
        {
            Session["G_COLLEGE_ID"] = "2";
            Session["G_BRANCH_ID"] = "3";
            Session["G_COLLEGE_NAME"] = "NARULA INSTITUTE OF TECHNOLOGY";
        }
        else if (cntxt_college_id.Value == "3") //gnit
        {
            Session["G_COLLEGE_ID"] = "3";
            Session["G_BRANCH_ID"] = "6";
            Session["G_COLLEGE_NAME"] = "GURUNANAK INSTITUTE OF TECHNOLOGY";
        }
        else if (cntxt_college_id.Value == "1") //jis
        {
            Session["G_COLLEGE_ID"] = "1";
            Session["G_BRANCH_ID"] = "4";
            Session["G_COLLEGE_NAME"] = "JIS COLLEGE OF ENGINEERING";
        }
        else if (cntxt_college_id.Value == "10") //poly
        {
            Session["G_COLLEGE_ID"] = "10";
            Session["G_BRANCH_ID"] = "20";
            Session["G_COLLEGE_NAME"] = "Jis School Of Polytechnic";
        }
        else if (cntxt_college_id.Value == "500") //jisu
        {
            Session["G_COLLEGE_ID"] = "500";
            Session["G_BRANCH_ID"] = "500";
            Session["G_COLLEGE_NAME"] = "JIS UNIVERSITY";
        }
        else if (cntxt_college_id.Value == "5") //GNIPST
        {
            Session["G_COLLEGE_ID"] = "5";
            Session["G_BRANCH_ID"] = "9";
            Session["G_COLLEGE_NAME"] = "GNIPST";
        }
        else if (cntxt_college_id.Value == "4") //GNDSR
        {
            Session["G_COLLEGE_ID"] = "4";
            Session["G_BRANCH_ID"] = "7";
            Session["G_COLLEGE_NAME"] = "GNIDSR";
        }
        else if (cntxt_college_id.Value == "6") //GNHM
        {
            Session["G_COLLEGE_ID"] = "6";
            Session["G_BRANCH_ID"] = "8";
            Session["G_COLLEGE_NAME"] = "GNIHM";
        }

        cntxt_branch_id.Value = Session["G_BRANCH_ID"].ToString();
        ctxt_college_name.Value = Session["G_COLLEGE_NAME"].ToString();

    }
    protected void cmd_del_pdf_Click(object sender, EventArgs e)
    {
        DeletePdfFile();
    }

    void DeletePdfFile()
    {

        long nCtr;
        string[] m_TempArr;
        string m_html = "";

        try
        {
            m_TempArr = Directory.GetFiles(Server.MapPath("~/download"), "*.pdf");
            for (nCtr = 0; nCtr < m_TempArr.Length; nCtr++)
            {
                m_html = m_html + m_TempArr[nCtr].ToString() + "<br>";
                File.Delete(m_TempArr[nCtr].ToString());
            }
            ctxt_html.Text = m_html;
            ctxt_message.Text = "Done.";
        }
        catch (Exception ex)
        {
            ctxt_message.Text = ex.Message.ToString();
        }
        finally
        {
        }
    }
}