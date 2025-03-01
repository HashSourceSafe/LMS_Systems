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
/// Summary description for WebServiceAddSpecialClassDateWise
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebServiceAddSpecialClassDateWise : System.Web.Services.WebService {

    public WebServiceAddSpecialClassDateWise () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod(EnableSession = true)]
    public clsBoAddSpecialClassDateWise DispDateWiseRoutine(string p_emph_code, string p_from_date, string p_to_date)
    {

        clsBoAddSpecialClassDateWise m_clsBoAddSpecialClassDateWise = new clsBoAddSpecialClassDateWise();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable = new DataTable();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        try
        {
            m_clsBoAddSpecialClassDateWise.m_RetVal = 0;

            m_clsDalDataHandle.ResetSpParam();
            m_clsDalDataHandle.AddSqlParameter("@P_FACULTY_CODE", SqlDbType.VarChar, 0, p_emph_code);
            m_clsDalDataHandle.AddSqlParameter("@P_FROM_DT", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_from_date));
            m_clsDalDataHandle.AddSqlParameter("@P_TO_DT", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_to_date));
            m_clsDalDataHandle.AddSqlParameter("@P_TYPE", SqlDbType.Int, 0, 1);

            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_Faculty_Date_Wise_Routine");
            if (m_DataTable.Rows.Count > 0)
            {
                m_clsBoAddSpecialClassDateWise.m_routine_header = new string[m_DataTable.Columns.Count];
                for (int nCtr = 0; nCtr < m_DataTable.Columns.Count; nCtr++)
                {
                    m_clsBoAddSpecialClassDateWise.m_routine_header[nCtr] = m_DataTable.Columns[nCtr].ColumnName;
                }

                if (m_clsDalDataHandle.DataTableToArray(m_DataTable, ref m_clsBoAddSpecialClassDateWise.m_routine_data, m_clsBoAddSpecialClassDateWise.m_routine_header, 0, m_DataTable.Rows.Count) > 0)
                {
                    m_clsBoAddSpecialClassDateWise.m_RetVal = 1;
                }
            }
            else
            {
                m_clsBoAddSpecialClassDateWise.m_RetVal = 1;
            }
        }
        catch
        {
            m_clsBoAddSpecialClassDateWise.m_RetVal = 1;
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_clsBoAddSpecialClassDateWise;

    }

    [WebMethod(EnableSession = true)]
    public string SaveData(string[][] p_ValArr)
    {

        string m_RetVal = "ERROR";
        clsBalAddSpecialClassDateWise m_clsBalAddSpecialClassDateWise = new clsBalAddSpecialClassDateWise();
        clsBoAddSpecialClassDateWise m_clsBoAddSpecialClassDateWise = new clsBoAddSpecialClassDateWise();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            m_clsBoAddSpecialClassDateWise.m_college_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_college_id");
            m_clsBoAddSpecialClassDateWise.m_selected_date = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_selected_date");
            m_clsBoAddSpecialClassDateWise.m_batch_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_batch_id");
            m_clsBoAddSpecialClassDateWise.m_course_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_course_id");
            m_clsBoAddSpecialClassDateWise.m_stream_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_stream_id");
            m_clsBoAddSpecialClassDateWise.m_section_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_section_id");
            m_clsBoAddSpecialClassDateWise.m_semester_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_semester_id");
            m_clsBoAddSpecialClassDateWise.m_selected_period_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_selected_period_id");
            m_clsBoAddSpecialClassDateWise.m_selected_day_id= m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_selected_day_id");
            m_clsBoAddSpecialClassDateWise.m_subject_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_subject_id");
            m_clsBoAddSpecialClassDateWise.m_group_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_group_id");
            m_clsBoAddSpecialClassDateWise.m_faculty_code = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_from_emph_code");
            m_clsBoAddSpecialClassDateWise.m_faculty_name = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_from_emph_name");
            m_clsBoAddSpecialClassDateWise.m_facul_sh_name = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_fac_sh_name");
            m_clsBoAddSpecialClassDateWise.m_active_flag = "A";
            if (m_clsBalAddSpecialClassDateWise.SaveData(m_clsBoAddSpecialClassDateWise) > 0)
            {
                m_RetVal = "ERROR: " + m_clsBoAddSpecialClassDateWise.m_err_msg;
            }
            else
            {
                m_RetVal = m_clsBoAddSpecialClassDateWise.m_err_msg;
            }

        }
        catch
        {
            m_RetVal = "ERROR";
        }
        finally
        {
            m_clsBoAddSpecialClassDateWise = null;
            m_clsBalCommonLib = null;
            m_clsBalAddSpecialClassDateWise = null;
        }
        return m_RetVal;
    }


    [WebMethod(EnableSession = true)]
    public clsBoAddSpecialClassDateWise ValidateSpecialClass(string[][] p_ValArr)
    {
        clsBoAddSpecialClassDateWise m_clsBoAddSpecialClassDateWise = new clsBoAddSpecialClassDateWise();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable = new DataTable();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            m_clsDalDataHandle.ResetSpParam();
            m_clsDalDataHandle.AddSqlParameter("@p_College_Id", SqlDbType.Int, 0, Convert.ToInt16( m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_college_id")));
            m_clsDalDataHandle.AddSqlParameter("@p_Date", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_selected_date")));
            m_clsDalDataHandle.AddSqlParameter("@p_Batch_Id", SqlDbType.Int, 0, Convert.ToInt16(m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_batch_id")));
            m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.Int, 0, Convert.ToInt16(m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_course_id")));
            m_clsDalDataHandle.AddSqlParameter("@p_stream_id", SqlDbType.Int, 0, Convert.ToInt16(m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_stream_id")));
            m_clsDalDataHandle.AddSqlParameter("@p_section_id", SqlDbType.Int, 0, Convert.ToInt16(m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_section_id")));
            m_clsDalDataHandle.AddSqlParameter("@p_Semester_Id", SqlDbType.Int, 0, Convert.ToInt16(m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_semester_id")));
            m_clsDalDataHandle.AddSqlParameter("@p_Period_Id", SqlDbType.Int, 0, Convert.ToInt16(m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_selected_period_id")));
            m_clsDalDataHandle.AddSqlParameter("@p_Day_Id", SqlDbType.Int, 0, Convert.ToInt16(m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_selected_day_id")));
            m_clsDalDataHandle.AddSqlParameter("@p_Subject_id", SqlDbType.Int, 0, Convert.ToInt16(m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_subject_id")));
            m_clsDalDataHandle.AddSqlParameter("@p_Group_id", SqlDbType.Int, 0, Convert.ToInt16(m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_group_id")));

            m_clsDalDataHandle.AddSqlParameter("@p_Faculty_Code", SqlDbType.VarChar, 0, (m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_from_emph_code")));
            m_clsDalDataHandle.AddSqlParameter("@p_Faculty_Name", SqlDbType.VarChar, 0, (m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_from_emph_name")));
            m_clsDalDataHandle.AddSqlParameter("@p_Faculty_Sh_Name", SqlDbType.VarChar, 0, (m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_fac_sh_name")));

            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Validate_Add_Special_Class", 0);

            if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no")) >= 1)
            {
                m_clsBoAddSpecialClassDateWise.m_err_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg");
                m_clsBoAddSpecialClassDateWise.m_err_no = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no");
            }
            else
            {
                m_clsBoAddSpecialClassDateWise.m_err_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg");
                m_clsBoAddSpecialClassDateWise.m_err_no = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no");
            }

        }
        catch
        {
            m_clsBoAddSpecialClassDateWise.m_RetVal = 1;
        }
        finally
        {
            
            m_clsBalCommonLib = null;
            
        }
        return m_clsBoAddSpecialClassDateWise;
    }
}
