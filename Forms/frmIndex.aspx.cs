using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using CrystalDecisions.CrystalReports.Engine;
using CrystalDecisions.Shared;


public partial class Forms_frmIndex : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session.Count > 3)
        {
            Response.Redirect("frmPageUnderCons.aspx");
        }

        if (IsPostBack == false)
        {
            string m_curr_session_id = (string)Session["G_SESSION_ID"];

            if (m_curr_session_id != null)
            {
                ReportDocument m_RptObj = new ReportDocument();
                m_RptObj.Load(Server.MapPath("rptBlankReport.rpt"));
                m_RptObj.ExportToStream(ExportFormatType.Xml);
                m_RptObj.Close();
                m_RptObj.Dispose();
                m_RptObj = null;
                GC.Collect();

            }
            else
            {
                Response.Redirect("frmErpIndex.aspx");
            }
        }
    }

}