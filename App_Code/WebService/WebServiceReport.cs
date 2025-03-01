using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BO;


/// <summary>
/// Summary description for WebServiceReport
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
 [System.Web.Script.Services.ScriptService]
public class WebServiceReport : System.Web.Services.WebService {

    public WebServiceReport () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }


    [WebMethod(EnableSession = true)]
    public int SetReportParam(string p_ReportFileName,
                              string[] p_SpParam=null,
                              string[] p_FormulaList=null, 
                              string p_SelectionFormula=null,
                              string p_FormatType="PDF")
    {
        int m_RetVal = 0;
        clsBoCrystalReport m_clsBoCrystalReport = new clsBoCrystalReport();
        try
        {
            m_clsBoCrystalReport.p_ReportFileName = p_ReportFileName;
            m_clsBoCrystalReport.p_SpParameterField = p_SpParam;
            m_clsBoCrystalReport.p_FormulaField = p_FormulaList;
            m_clsBoCrystalReport.p_SelectionFormula = p_SelectionFormula;
            m_clsBoCrystalReport.p_FormatType = p_FormatType;

            HttpContext.Current.Session.Remove("S_CRYSTAL_REPORT_CLASS");
            HttpContext.Current.Session["S_CRYSTAL_REPORT_CLASS"] = m_clsBoCrystalReport;
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBoCrystalReport = null;
        }
        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public int SetReportParamMain(string p_ReportFileName,
                              string[] p_SpParam = null,
                              string[] p_FormulaList = null,
                              string p_SelectionFormula = null,
                              string p_FormatType = "PDF")
    {
        int m_RetVal = 0;
        clsBoCrystalReport m_clsBoCrystalReport = new clsBoCrystalReport();
        try
        {
            m_clsBoCrystalReport.p_ReportFileName = p_ReportFileName;
            m_clsBoCrystalReport.p_SpParameterField = p_SpParam;
            m_clsBoCrystalReport.p_FormulaField = p_FormulaList;
            m_clsBoCrystalReport.p_SelectionFormula = p_SelectionFormula;
            m_clsBoCrystalReport.p_FormatType = p_FormatType;
            m_clsBoCrystalReport.p_IsMainDB = "Y";

            HttpContext.Current.Session.Remove("S_CRYSTAL_REPORT_CLASS");
            HttpContext.Current.Session["S_CRYSTAL_REPORT_CLASS"] = m_clsBoCrystalReport;
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBoCrystalReport = null;
        }
        return m_RetVal;
    }


    [WebMethod(EnableSession = true)]
    public int SaveReportInPdf(string p_SaveFileName,string p_college_id,string p_branch_id,string p_college_name)
    {
        int m_RetVal = 0;
        clsBalSaveReport m_clsBalSaveReport = new clsBalSaveReport();
        try
        {
            Session["G_COLLEGE_ID"] = p_college_id;
            Session["G_BRANCH_ID"] = p_branch_id;
            Session["G_COLLEGE_NAME"] = p_college_name;


            m_RetVal = m_clsBalSaveReport.SaveReportInPdf(p_SaveFileName);
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalSaveReport = null;
        }
        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public string SendEmail(string[] p_file_name,string p_email_to,string p_email_subject,string p_email_body)
    {
        string m_RetVal = "OK";
        clsBalSaveReport m_clsBalSaveReport = new clsBalSaveReport();
        try
        {
            m_RetVal = m_clsBalSaveReport.SendEmail(p_file_name, p_email_to, p_email_subject, p_email_body);
        }
        catch (Exception ex)
        {
            m_RetVal = "ERROR";
        }
        finally
        {
            m_clsBalSaveReport = null; 
        }
        return m_RetVal;
    }


    
}
