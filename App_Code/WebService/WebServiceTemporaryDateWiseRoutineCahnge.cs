using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BAL;
using DAL;
using BO;
using System.Data;


/// <summary>
/// Summary description for WebServiceTemporaryDateWiseRoutineCahnge
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebServiceTemporaryDateWiseRoutineCahnge : System.Web.Services.WebService {

    public WebServiceTemporaryDateWiseRoutineCahnge () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod(EnableSession = true)]
    public string SaveDataPreparation(string[][] p_ValArr)
    {

        string m_RetVal = "ERROR";
        clsBalTemporaryDateWiseRoutineCahnge m_clsBalTemporaryDateWiseRoutineCahnge = new clsBalTemporaryDateWiseRoutineCahnge();
        clsBoTemporaryDateWiseRoutineCahnge m_clsBoTemporaryDateWiseRoutineCahnge = new clsBoTemporaryDateWiseRoutineCahnge();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            m_clsBoTemporaryDateWiseRoutineCahnge.m_college_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_college_id");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_user_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_user_id");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_g_dept_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_g_dept_id");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_action_value = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_action_value");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_from_emph_code = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_from_emph_code");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_to_emph_code = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_to_emph_code");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_from_date = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "dtp_from_date");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_to_date = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "dtp_to_date");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_from_period_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_from_period_id");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_to_period_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_to_period_id");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_remarks = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_remarks");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_change_status_type = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_change_status_type");


            if (m_clsBalTemporaryDateWiseRoutineCahnge.SaveDataPreparation(m_clsBoTemporaryDateWiseRoutineCahnge) > 0)
            {
                m_RetVal = "ERROR: " + m_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg;
            }
            else
            {
                m_RetVal = m_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg;
            }

        }
        catch
        {
            m_RetVal = "ERROR";
        }
        finally
        {
            m_clsBoTemporaryDateWiseRoutineCahnge = null;
            m_clsBalCommonLib = null;
            m_clsBalTemporaryDateWiseRoutineCahnge = null;
        }
        return m_RetVal;
    }


    [WebMethod(EnableSession = true)]
    public clsBoTemporaryDateWiseRoutineCahnge CheckingPreviousEntry(string p_college_id, string p_from_emph_code, string p_from_date, string p_from_period_id)
    {
        clsBoTemporaryDateWiseRoutineCahnge m_clsBoTemporaryDateWiseRoutineCahnge = new clsBoTemporaryDateWiseRoutineCahnge();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        DataTable m_DataTable = new DataTable();
        try
        {
            m_clsBoTemporaryDateWiseRoutineCahnge.m_RetVal = 0;

            m_clsDalDataHandle.ResetSpParam();

            m_clsDalDataHandle.AddSqlParameter("@P_COLLEGE_ID", SqlDbType.Int, 0, p_college_id);
            m_clsDalDataHandle.AddSqlParameter("@P_FROM_FACAULTY_CODE", SqlDbType.VarChar, 0, p_from_emph_code);
            m_clsDalDataHandle.AddSqlParameter("@P_FROM_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_from_date));
            m_clsDalDataHandle.AddSqlParameter("@P_FROM_PERIOD_ID", SqlDbType.Int, 0, p_from_period_id);

            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Check_Previous_Entry_For_Temporary_Routine_Change_Preparation", 0);

            if (m_DataTable.Rows.Count > 0)
            {
                m_clsBoTemporaryDateWiseRoutineCahnge.m_error_no = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no", 0);
                m_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg", 0);
            }
            else {
                m_clsBoTemporaryDateWiseRoutineCahnge.m_error_no = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no", 0);
                m_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg", 0);
            }
        }
        catch
        {
            m_clsBoTemporaryDateWiseRoutineCahnge.m_RetVal = 1;
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_clsBoTemporaryDateWiseRoutineCahnge;

    }


    [WebMethod(EnableSession = true)]
    public clsBoTemporaryDateWiseRoutineCahnge DeleteMainPeriod(string[][] p_ValArr)
    {  
        clsBalTemporaryDateWiseRoutineCahnge m_clsBalTemporaryDateWiseRoutineCahnge = new clsBalTemporaryDateWiseRoutineCahnge();
        clsBoTemporaryDateWiseRoutineCahnge m_clsBoTemporaryDateWiseRoutineCahnge = new clsBoTemporaryDateWiseRoutineCahnge();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            m_clsBoTemporaryDateWiseRoutineCahnge.m_from_date = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "dtp_from_date");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_from_period_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_from_period_id");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_flag = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "p_flag");

            if (m_clsBalTemporaryDateWiseRoutineCahnge.DeleteMainPeriod(m_clsBoTemporaryDateWiseRoutineCahnge) > 0)
            {
                m_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg = "Error: " + m_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg;
            }
            else
            {
                m_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg ="Successful" + m_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg;
                
            }

        }
        catch
        {
            m_clsBoTemporaryDateWiseRoutineCahnge.m_RetVal = 1;
        }
        finally
        {
           // m_clsBoTemporaryDateWiseRoutineCahnge = null;
            m_clsBalCommonLib = null;
            m_clsBalTemporaryDateWiseRoutineCahnge = null;
        }
        return m_clsBoTemporaryDateWiseRoutineCahnge;
    }

    [WebMethod(EnableSession = true)]
    public clsBoTemporaryDateWiseRoutineCahnge AddFacultyPeriod(string[][] p_ValArr)
    {
        clsBalTemporaryDateWiseRoutineCahnge m_clsBalTemporaryDateWiseRoutineCahnge = new clsBalTemporaryDateWiseRoutineCahnge();
        clsBoTemporaryDateWiseRoutineCahnge m_clsBoTemporaryDateWiseRoutineCahnge = new clsBoTemporaryDateWiseRoutineCahnge();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            m_clsBoTemporaryDateWiseRoutineCahnge.m_college_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_college_id");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_to_date = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_date");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_to_period_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_period_id");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_to_day_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_day_id");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_doc_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_doc_id");

            m_clsBoTemporaryDateWiseRoutineCahnge.m_from_date = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "dtp_from_date");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_from_period_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_from_period_id");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_from_day_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_from_day_id");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_action_value = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_action_value");

            m_clsBoTemporaryDateWiseRoutineCahnge.m_to_emph_code = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_to_emph_code");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_to_fac_sh_name = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_to_faculty_shrt_name");
            m_clsBoTemporaryDateWiseRoutineCahnge.m_to_fac_name = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_to_faculty");

            if (m_clsBalTemporaryDateWiseRoutineCahnge.AddFacultyPeriod(m_clsBoTemporaryDateWiseRoutineCahnge) > 0)
            {
                m_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg = "Error: " + m_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg;
            }
            else
            {
                m_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg = "Successful" + m_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg;
            }

        }
        catch
        {
            m_clsBoTemporaryDateWiseRoutineCahnge.m_RetVal = 1;
        }
        finally
        {
            //m_clsBoTemporaryDateWiseRoutineCahnge = null;
            m_clsBalCommonLib = null;
            m_clsBalTemporaryDateWiseRoutineCahnge = null;
        }
        return m_clsBoTemporaryDateWiseRoutineCahnge;
    }
    
    [WebMethod(EnableSession = true)]
    public int SetApprovalPeriodRowEvent(string p_SessionVarName, string[][][] p_ItemArr, string[] p_ItemKeyArr, string DataTableField)
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
                m_Filter = DataTableField + "'" + p_ItemKeyArr[iRow] + "'";
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
    public string UpdateBtnActionValue(string cntxt_btn_action_value, string cntxt_doc_id)
    {
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        DataTable m_DataTable = new DataTable();
        try {
            m_clsDalDataHandle.ResetSpParam();

            m_clsDalDataHandle.AddSqlParameter("@P_BTN_ACTION_VALUE", SqlDbType.Int, 0, cntxt_btn_action_value);
            m_clsDalDataHandle.AddSqlParameter("@p_DOC_ID", SqlDbType.Int, 0, cntxt_doc_id);

            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "PROC_UPDATE_TIME_TABLE_DATEWISE_CHANGE_REQUEST", 0);
        }
        catch {
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return cntxt_btn_action_value;
    }

}
