using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Forms_frmDashBoardFaculty : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
            //CheckUrl();
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
        string m_college_id = Request.QueryString["college_id"];
        is_call_from_mis.Value = Request.QueryString["is_call_from_mis"];

        if (m_college_id == "0")
        {
            cntxt_college_id.Value = Session["G_COLLEGE_ID"].ToString();
            if (Session["G_BRANCH_ID"].ToString() == "61")
            {
                cntxt_college_id.Value = "61";
            }
            if (Session["G_BRANCH_ID"].ToString() == "62")
            {
                cntxt_college_id.Value = "62";
            }




            if (Session["G_BRANCH_ID"].ToString() == "51")
            {
                cntxt_college_id.Value = "51";
            }




        }
        else
        {
            cntxt_college_id.Value = m_college_id;
        }

        if (is_call_from_mis.Value == "1")
        {
            Session["G_DISPLAY_TYPE"] = "MNG";
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
        else if (cntxt_college_id.Value == "1" && Session["G_BRANCH_ID"].ToString()=="4") //jis
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
        else if (cntxt_college_id.Value == "61") //GKCEM
        {
            Session["G_COLLEGE_ID"] = "1";
            Session["G_BRANCH_ID"] = "61";
            Session["G_COLLEGE_NAME"] = "GKCEM";
            cntxt_college_id.Value = "1";
        }

        else if (cntxt_college_id.Value == "62") //GKCEM
        {
            Session["G_COLLEGE_ID"] = "2";
            Session["G_BRANCH_ID"] = "62";
            Session["G_COLLEGE_NAME"] = "GMIT";
            cntxt_college_id.Value = "2";
        }
        else if (cntxt_college_id.Value == "64") //GKCEM
        {
            Session["G_COLLEGE_ID"] = "64";
            Session["G_BRANCH_ID"] = "64";
            Session["G_COLLEGE_NAME"] = "FCP";
            cntxt_college_id.Value = "64";
        }

        else if (cntxt_college_id.Value == "51") //GKCEM
        {
            Session["G_COLLEGE_ID"] = "1";
            Session["G_BRANCH_ID"] = "51";
            Session["G_COLLEGE_NAME"] = "ABACUS";
            cntxt_college_id.Value = "51";
        }











        cntxt_branch_id.Value = Session["G_BRANCH_ID"].ToString();
        ctxt_college_name.Value = Session["G_COLLEGE_NAME"].ToString();
        disp_type.Value = Session["G_DISPLAY_TYPE"].ToString();
    }
}