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
using System.Net.Mail;
using System.Net.Mime;
using System.IO;



/// <summary>
/// Summary description for clsBalSaveReport
/// </summary>
public class clsBalSaveReport
{
    public clsBalSaveReport()
	{
		//
		// TODO: Add constructor logic here
		//
	}

    public int SaveReportInPdf(string p_SaveFileName)
    {
        int m_RetVal = 0;
        clsBoCrystalReport m_clsBoCrystalReport = new clsBoCrystalReport();
        ReportDocument m_RptObj = new ReportDocument();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        TableLogOnInfo m_TableLogOnInfo = new TableLogOnInfo();
        int nRow = 0;
        string[] m_StrArr;
        string m_file_path;
        try
        {
            m_clsBoCrystalReport = (clsBoCrystalReport)HttpContext.Current.Session["S_CRYSTAL_REPORT_CLASS"];
            m_RptObj.Load(HttpContext.Current.Server.MapPath(m_clsBoCrystalReport.p_ReportFileName));


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
                        m_RptObj.SetParameterValue(m_StrArr[0], m_clsBalCommonLib.StringToDate(m_StrArr[1]));
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

 


            if (m_clsBoCrystalReport.p_FormatType == "PDF")
            {
                m_file_path = HttpContext.Current.Server.MapPath("~") + "//download//" + p_SaveFileName;
                if (System.IO.File.Exists(m_file_path))
                {
                    System.IO.File.Delete(m_file_path);
                }
                m_RptObj.ExportToDisk(ExportFormatType.PortableDocFormat, m_file_path);
            }

            //----------------------------------------------------
        }
        catch (Exception ex)
        {
            m_RetVal = 1;
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

            HttpContext.Current.Session.Remove("S_CRYSTAL_REPORT_CLASS");
            GC.Collect();
        }

        return m_RetVal;
    }

    public string SendEmail(string[] p_file_name, string p_email_to, string p_email_subject, string p_email_body)
    {
        string m_file_path;
        string m_RetVal = "Mail Send Successfully....";


        MailMessage mail = new MailMessage();
        SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

        try
        {
            mail.From = new MailAddress("animesh@hashtechnologies.com");

            for(int i=0;i<p_file_name.Count();i++)
            {
                m_file_path = HttpContext.Current.Server.MapPath("~") + "//download//" + p_file_name[i].ToString();
                Attachment data = new Attachment(m_file_path, MediaTypeNames.Application.Octet);
                mail.Attachments.Add(data);
                data = null;
            }

            mail.To.Add(p_email_to);
            mail.CC.Add("noreply.hash@gmail.com");

            mail.Subject = p_email_subject;
            mail.Body = p_email_body;
            mail.IsBodyHtml = true;

            SmtpServer.Port = 587;
            SmtpServer.UseDefaultCredentials = false;
            SmtpServer.Credentials = new System.Net.NetworkCredential("animesh@hashtechnologies.com", "animesh99");
            SmtpServer.EnableSsl = true;
            SmtpServer.Send(mail);

            SmtpServer.Dispose();
            mail.Dispose();

           

            
        }
        catch (Exception ex)
        {
            m_RetVal = "ERROR IN Mail Sending: " + ex.Message;
        }
        finally
        {
            SmtpServer.Dispose();
            mail.Dispose();

        }

        return m_RetVal;
    }


}