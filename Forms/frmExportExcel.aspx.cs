using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BAL;
using System.Data;
using System.Collections;


public partial class Forms_frmExportExcel : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        CheckSession();
        CreateReport();
    }

    private void CheckSession()
    {
        string m_url;
        m_url = Request.ServerVariables["HTTP_REFERER"];
        if (m_url == null)
        {
            Response.Redirect("frmIndex.aspx");
        }

        //clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        //m_clsBalCommonLib.IsSessionRunning();
        //m_clsBalCommonLib = null;
    }

    private void CreateReport()
    {
        DataTable m_DataTable;
        try
        {
            m_DataTable = (DataTable)Session["S_EXCEL_DATA_TABLE"];
            string m_FileName = (string)Session["S_EXCEL_FILE_NAME"];
            string m_ColName = (string)Session["S_EXCEL_COL_NAME"];
            string m_FiledName = (string)Session["S_EXCEL_FIELD_NAME"];

            ArrayList m_ArrayCol = new ArrayList();
            ArrayList m_ArrayField = new ArrayList();

            string[] m_arrColName = m_ColName.Split('|');
            string[] m_arrFiledName = m_FiledName.Split('|');

            m_ArrayCol.AddRange(m_arrColName);
            m_ArrayField.AddRange(m_arrFiledName);

            int nCol;
            
            

            string attach = "attachment;filename=" + m_FileName;
            Response.ClearContent();
            Response.AddHeader("content-disposition", attach);
            Response.ContentType = "application/ms-excel";

            //Column Print
            if (m_DataTable != null)
            {
                if (m_ColName == "NA")
                {
                    foreach (DataColumn dc in m_DataTable.Columns)
                    {
                        Response.Write(dc.ColumnName + "\t");
                    }
                }
                else
                {
                    if (m_ArrayCol.Count > 0)
                    {
                        for (nCol = 0; nCol < m_ArrayCol.Count; nCol++)
                        {
                            Response.Write(m_ArrayCol[nCol].ToString() + "\t");
                        }
                    }
                }

                Response.Write(System.Environment.NewLine);

                //Row Data print
                foreach (DataRow dr in m_DataTable.Rows)
                {
                    if (m_ColName == "NA")
                    {
                        for (int i = 0; i < m_DataTable.Columns.Count; i++)
                        {
                            Response.Write(dr[i].ToString() + "\t");
                        }
                    }
                    else
                    {
                        if (m_ArrayField.Count > 0)
                        {
                            for (nCol = 0; nCol < m_ArrayField.Count; nCol++)
                            {
                                m_FiledName = (string)m_ArrayField[nCol];
                                Response.Write(dr[m_FiledName] + "\t");
                            }
                        }
                    }

                    
                    Response.Write("\n");
                }
            }
            Response.End();

        }
        catch(Exception ex)
        {
            //Response.Write("ERROR IN REPORT GENERATION: " + ex.Message);
        }
        finally
        {
            Session.Remove("S_EXCEL_DATA_TABLE");
            Session.Remove("S_EXCEL_FILE_NAME");
            Session.Remove("S_EXCEL_COL_NAME");
            Session.Remove("S_EXCEL_FIELD_NAME");
            m_DataTable = null;
        }
    }

    private void ShowMesg(string pMesg)
    {
        try
        {
            string m_Meag = "alert('" + pMesg + "');";
            System.Web.UI.ScriptManager.RegisterStartupScript(Page, Page.GetType(), "key_mesg", m_Meag, true);
        }
        catch
        {
        }
        finally
        {
        }
    }
}