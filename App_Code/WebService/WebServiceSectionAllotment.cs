using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BAL;
using BO;
using DAL;
using System.Data;

/// <summary>
/// Summary description for WebServiceSectionAllotment
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebServiceSectionAllotment : System.Web.Services.WebService
{

    public WebServiceSectionAllotment()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod(EnableSession = true)]
    public int SaveSectionData(string p_SessionVarName, string[][][] p_ItemArr, string[] p_ItemKeyArr)
    {
        int m_RetVal = 0;
        int iRow;
        clsDalEditInDataTable m_clsDalEditInDataTable = new clsDalEditInDataTable();
        string m_Filter;
        DataTable m_DataTable;

        try
        {

            m_DataTable = (DataTable)Session[p_SessionVarName];

            for (iRow = 0; iRow < p_ItemKeyArr.Count(); iRow++)
            {
                m_Filter = "m_studentId=" + p_ItemKeyArr[iRow];
                if (m_clsDalEditInDataTable.Init(ref m_DataTable, m_Filter, 2) == 0)
                {

                    m_clsDalEditInDataTable.BeginEdit();
                    m_RetVal = m_RetVal + m_clsDalEditInDataTable.SetArrayData(p_ItemArr[iRow]);
                    m_clsDalEditInDataTable.EndEdit();
                }
                else
                {
                    m_RetVal++;
                }

            }
            Session.Remove(p_SessionVarName);
            Session[p_SessionVarName] = m_DataTable;

            m_RetVal = 0;

        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsDalEditInDataTable = null;
            m_DataTable = null;
        }
        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public string SaveData(string[][] p_ValArr)
    {

        string m_RetVal = "ERROR";
        clsBalSectionAllotment m_clsBalSectionAllotment = new clsBalSectionAllotment();
        clsBoSectionAllotment m_clsBoSectionAllotment = new clsBoSectionAllotment();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            m_clsBoSectionAllotment.m_semester_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_semester_id");
            m_clsBoSectionAllotment.m_batch_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_batch_id");
            m_clsBoSectionAllotment.m_course_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_course_id");
            m_clsBoSectionAllotment.m_stream_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_stream_id");
            m_clsBoSectionAllotment.m_section_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_section_id");
            m_clsBoSectionAllotment.m_batch_change_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_is_batch_change");


            if (m_clsBalSectionAllotment.SaveData(m_clsBoSectionAllotment) > 0)
            {
                m_RetVal = "ERROR: " + m_clsBoSectionAllotment.m_student_id;
            }
            else
            {
                m_RetVal = " Data Saved:" + m_clsBoSectionAllotment.m_student_id;
            }

        }
        catch
        {
            m_RetVal = "ERROR";
        }
        finally
        {
            m_clsBoSectionAllotment = null;
            m_clsBalCommonLib = null;
            m_clsBalSectionAllotment = null;
        }
        return m_RetVal;
    }

   


}