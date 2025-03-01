using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BAL;
using BO;
using CrystalDecisions.CrystalReports.Engine;
using CrystalDecisions.Shared;


public partial class Forms_frmCrystalReportViewer : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
            CheckSession();
        }
    }


    private void CheckSession()
    {
        string m_url;
        m_url = Request.ServerVariables["HTTP_REFERER"];
        if (m_url == null)
        {
            Response.Redirect("frmIndex.aspx");
        }

        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        m_clsBalCommonLib.IsSessionRunning();
        m_clsBalCommonLib = null;
    }
   

    public void GenerateReport()
    {
        


        clsBoCrystalReport m_clsBoCrystalReport = new clsBoCrystalReport();
        ReportDocument m_RptObj = new ReportDocument();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        TableLogOnInfo m_TableLogOnInfo = new TableLogOnInfo();
        int nRow=0;
        string[] m_StrArr; 
        try
        {
            m_clsBoCrystalReport = (clsBoCrystalReport)Session["S_CRYSTAL_REPORT_CLASS"];
            m_RptObj.Load(Server.MapPath(m_clsBoCrystalReport.p_ReportFileName));


            //Selection Formula
            if (m_clsBoCrystalReport.p_SelectionFormula != null)
            {
                Response.Write("<BR> null 2");
            }

            //Formula Field
            if (m_clsBoCrystalReport.p_FormulaField != null)
            {
                for (nRow = 0; nRow < m_clsBoCrystalReport.p_FormulaField.Length; nRow++)
                {
                    m_StrArr = m_clsBoCrystalReport.p_FormulaField[nRow].Split('~'); //1st Name, 2nd Value
                    m_RptObj.DataDefinition.FormulaFields[m_StrArr[0]].Text = "'" + m_StrArr[1] + "'";
                }

            }


            //Store proc param
            if (m_clsBoCrystalReport.p_SpParameterField != null)
            {
                for (nRow = 0; nRow < m_clsBoCrystalReport.p_SpParameterField.Length; nRow++)
                {
                    m_StrArr = m_clsBoCrystalReport.p_SpParameterField[nRow].Split('~'); //1st->Param Name,2nd Param value,3rd ->Data Type
                    if (m_StrArr[2].ToUpper() == "DATE" || m_StrArr[2].ToUpper() == "DATETIME")
                    {
                        m_RptObj.SetParameterValue(m_StrArr[0],m_clsBalCommonLib.StringToDate( m_StrArr[1]));
                    }
                    else
                    {
                        m_RptObj.SetParameterValue(m_StrArr[0], m_StrArr[1]);
                    }
                }
            }



            //---------Creating Report Details--------------------
            string[] m_StrRepArr;

            if (m_clsBoCrystalReport.p_IsMainDB == Convert.ToString('Y'))
            {
                m_StrRepArr = m_clsBalCommonLib.GetReportConnectionMain();
            }
            else
            {
                m_StrRepArr = m_clsBalCommonLib.GetReportConnection();
            }

            foreach (CrystalDecisions.CrystalReports.Engine.Table table in m_RptObj.Database.Tables)
            {
                m_TableLogOnInfo = table.LogOnInfo;
                m_TableLogOnInfo.ConnectionInfo.ServerName = m_StrRepArr[2];
                m_TableLogOnInfo.ConnectionInfo.DatabaseName = m_StrRepArr[3];
                m_TableLogOnInfo.ConnectionInfo.UserID = m_StrRepArr[0];
                m_TableLogOnInfo.ConnectionInfo.Password = m_StrRepArr[1];
                table.ApplyLogOnInfo(m_TableLogOnInfo);
                table.Location = m_StrRepArr[3] + ".dbo." + table.Name;
            }

            Response.Buffer = false;
            Response.ClearContent();
            Response.ClearHeaders();
            Response.ContentType = "application/pdf";


            if (m_clsBoCrystalReport.p_FormatType == "PDF")
            {
                m_RptObj.ExportToHttpResponse(ExportFormatType.PortableDocFormat, Response, false, m_clsBoCrystalReport.p_ReportFileName);
            }
            else if (m_clsBoCrystalReport.p_FormatType == "XLS")
            {
                //m_RptObj.ExportToHttpResponse(ExportFormatType.ExcelWorkbook, Response, true, m_clsBoCrystalReport.p_ReportFileName);
                m_RptObj.ExportToHttpResponse(ExportFormatType.ExcelRecord, Response, true, m_clsBoCrystalReport.p_ReportFileName);
            }
            else if (m_clsBoCrystalReport.p_FormatType == "EXCEL_WORK_BOOK")
            {
                m_RptObj.ExportToHttpResponse(ExportFormatType.Excel, Response, true, m_clsBoCrystalReport.p_ReportFileName);
            }
            else
            {
                m_RptObj.ExportToHttpResponse(ExportFormatType.PortableDocFormat, Response, false, m_clsBoCrystalReport.p_ReportFileName);
            }



            Response.Flush();
            Response.Clear();
            Response.Close();
            Response.End();



            //----------------------------------------------------
        }
        catch(Exception ex)
        {
            Response.Write("ERROR IN REPORT GENERATION: " + ex.Message);
        }
        finally
        {
            m_clsBoCrystalReport = null;

            //m_RptObj = null;
            m_RptObj.Close();
            m_RptObj.Dispose();
            m_RptObj = null;

            m_clsBalCommonLib = null;
            m_TableLogOnInfo = null;

            Session.Remove("S_CRYSTAL_REPORT_CLASS");
            GC.Collect();
        }
    }

    protected void cmd_gen_report_Click(object sender, EventArgs e)
    {
        GenerateReport();
    }
}