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
/// Summary description for WebServiceDateWiseRoutineAllocation
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebServiceDateWiseRoutineAllocation : System.Web.Services.WebService
{

    public WebServiceDateWiseRoutineAllocation()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod(EnableSession = true)]
    public clsBoDateWiseRoutineAllocation DispRoutine(string p_college_id,
                                                         string p_batch_id,
                                                         string p_course_id,
                                                         string p_stream_id,
                                                         string p_semester_id,
                                                         string p_section_id,
                                                         string p_academic_ses_id
                                                         )
    {

        clsBoDateWiseRoutineAllocation m_clsBoDateWiseRoutineAllocation = new clsBoDateWiseRoutineAllocation();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable = new DataTable();

        try
        {
            m_clsBoDateWiseRoutineAllocation.m_RetVal = 0;

            m_clsDalDataHandle.ResetSpParam();
            //----------------------------------------------------------------------------------------------------------------
            //m_clsDalDataHandle.AddSqlParameter("@P_COLLEGE_ID", SqlDbType.Int, 0, p_college_id);
            //m_clsDalDataHandle.AddSqlParameter("@P_BATCH_ID", SqlDbType.Int, 0, p_batch_id);
            //m_clsDalDataHandle.AddSqlParameter("@P_COURSE_ID", SqlDbType.Int, 0, p_course_id);
            //m_clsDalDataHandle.AddSqlParameter("@P_STREAM_ID", SqlDbType.Int, 0, p_stream_id);
            //m_clsDalDataHandle.AddSqlParameter("@P_SEMESTER_ID", SqlDbType.Int, 0, p_semester_id);
            //m_clsDalDataHandle.AddSqlParameter("@P_SECTION_ID", SqlDbType.Int, 0, p_section_id);
            //m_clsDalDataHandle.AddSqlParameter("@P_ACADEMIC_SESSION_ID", SqlDbType.Int, 0, p_academic_ses_id);

            // m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Show_Routine_Template");
            //-----------------------------------------------------------------------------------------------------------------
            m_clsDalDataHandle.AddSqlParameter("@P_BATCH_ID", SqlDbType.Int, 0, p_batch_id);
            m_clsDalDataHandle.AddSqlParameter("@P_COURSE_ID", SqlDbType.Int, 0, p_course_id);
            m_clsDalDataHandle.AddSqlParameter("@P_STREAM_ID", SqlDbType.VarChar, 0, p_stream_id);
            m_clsDalDataHandle.AddSqlParameter("@P_SEMESTER_ID", SqlDbType.Int, 0, p_semester_id);
            m_clsDalDataHandle.AddSqlParameter("@P_SECTION_ID", SqlDbType.Int, 0, p_section_id);

            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "PROC_ROUTINE_TEMPLATE_FOR_ALLOCATION");
            //------------------------------------------------------------------------------------------------------------------
            if (m_DataTable.Rows.Count > 0)
            {
                m_clsBoDateWiseRoutineAllocation.m_routine_header = new string[m_DataTable.Columns.Count];
                for (int nCtr = 0; nCtr < m_DataTable.Columns.Count; nCtr++)
                {
                    m_clsBoDateWiseRoutineAllocation.m_routine_header[nCtr] = m_DataTable.Columns[nCtr].ColumnName;
                }
                if (m_clsDalDataHandle.DataTableToArray(m_DataTable, ref m_clsBoDateWiseRoutineAllocation.m_routine_data, m_clsBoDateWiseRoutineAllocation.m_routine_header, 0, m_DataTable.Rows.Count) > 0)
                {
                    m_clsBoDateWiseRoutineAllocation.m_RetVal = 1;
                }
            }
            else
            {
                m_clsBoDateWiseRoutineAllocation.m_RetVal = 1;
            }
        }
        catch
        {
            m_clsBoDateWiseRoutineAllocation.m_RetVal = 1;
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }

        return m_clsBoDateWiseRoutineAllocation;
    }




    [WebMethod(EnableSession = true)]
    public string SaveData(string[][] p_ValArr)
    {

        string m_RetVal = "ERROR";
        clsBalDateWiseRoutineAllocation m_clsBalDateWiseRoutineAllocation = new clsBalDateWiseRoutineAllocation();
        clsBoDateWiseRoutineAllocation m_clsBoDateWiseRoutineAllocation = new clsBoDateWiseRoutineAllocation();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            m_clsBoDateWiseRoutineAllocation.m_college_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_college_id");
            m_clsBoDateWiseRoutineAllocation.m_from_date = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "dtp_from_date");
            m_clsBoDateWiseRoutineAllocation.m_to_date = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "dtp_to_date");
            m_clsBoDateWiseRoutineAllocation.m_batch_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_batch_id");
            m_clsBoDateWiseRoutineAllocation.m_course_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_course_id");
            m_clsBoDateWiseRoutineAllocation.m_stream_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_stream_id");
            m_clsBoDateWiseRoutineAllocation.m_semester_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_semester_id");
            m_clsBoDateWiseRoutineAllocation.m_section_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_section_id");
            m_clsBoDateWiseRoutineAllocation.m_start_year_month = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "start_Year_month");
            m_clsBoDateWiseRoutineAllocation.m_end_year_month = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "end_Year_month");
            m_clsBoDateWiseRoutineAllocation.m_last_attendance_date = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "dtp_last_attendance_date");

            if (m_clsBalDateWiseRoutineAllocation.SaveData(m_clsBoDateWiseRoutineAllocation) > 0)
            {
                m_RetVal = "ERROR: " + m_clsBoDateWiseRoutineAllocation.m_err_msg;
            }
            else
            {
                m_RetVal = m_clsBoDateWiseRoutineAllocation.m_err_msg;
            }

        }
        catch
        {
            m_RetVal = "ERROR";
        }
        finally
        {
            m_clsBoDateWiseRoutineAllocation = null;
            m_clsBalCommonLib = null;
            m_clsBalDateWiseRoutineAllocation = null;
        }
        return m_RetVal;
    }

    //[WebMethod(EnableSession = true)]
    //public clsBoDateWiseRoutineAllocation PopulateFromYear_ToYear(string p_college_id, string p_batch_id,string p_course_id,string p_stream_id,
    //                                                                string p_semester_id,string p_section_id)
    //    {
    //        clsBoDateWiseRoutineAllocation m_clsBoDateWiseRoutineAllocation = new clsBoDateWiseRoutineAllocation();
    //        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
    //        DataTable m_DataTable = new DataTable();
    //        try
    //        {  
    //            m_clsBoDateWiseRoutineAllocation.m_RetVal = 0;
               
    //            m_clsDalDataHandle.ResetSpParam();

    //            //-----------------------------------------------------------------------------------------------------------------
    //            m_clsDalDataHandle.AddSqlParameter("@p_college_id", SqlDbType.Int, 0, p_college_id);
    //            m_clsDalDataHandle.AddSqlParameter("@p_batch_id", SqlDbType.Int, 0, p_batch_id);
    //            m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.Int, 0, p_course_id);
    //            m_clsDalDataHandle.AddSqlParameter("@p_stream_id", SqlDbType.Int, 0, p_stream_id);
    //            m_clsDalDataHandle.AddSqlParameter("@p_Sem_id", SqlDbType.Int, 0, p_semester_id);
    //            m_clsDalDataHandle.AddSqlParameter("@p_Section_id", SqlDbType.Int, 0, p_section_id);

    //            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_From_Year_and_To_Year");

    //            if (m_DataTable.Rows.Count > 0)
    //            {
    //                m_clsBoDateWiseRoutineAllocation.m_from_year = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "m_FromYear", 0);
    //                m_clsBoDateWiseRoutineAllocation.m_to_year = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "m_ToYear", 0);
    //            }
    //            else
    //            {
    //                m_clsBoDateWiseRoutineAllocation.m_from_year = "";
    //                m_clsBoDateWiseRoutineAllocation.m_to_year = "";
    //            }
    //        }
    //        catch
    //        {
    //            m_clsBoDateWiseRoutineAllocation.m_RetVal = 1;
    //        }
    //        finally
    //        {
    //            m_clsDalDataHandle = null;
    //            m_DataTable = null;
    //        }
    //        return m_clsBoDateWiseRoutineAllocation;
            
    //    }

    //[WebMethod(EnableSession = true)]
    //public clsBoDateWiseRoutineAllocation PopulateFromMonth_ToMonth(string p_college_id, string p_batch_id, string p_course_id, string p_stream_id,
    //                                                                string p_semester_id, string p_section_id)
    //{
    //    clsBoDateWiseRoutineAllocation m_clsBoDateWiseRoutineAllocation = new clsBoDateWiseRoutineAllocation();
    //    clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
    //    DataTable m_DataTable = new DataTable();
    //    try
    //    {
    //        m_clsBoDateWiseRoutineAllocation.m_RetVal = 0;

    //        m_clsDalDataHandle.ResetSpParam();

    //        //-----------------------------------------------------------------------------------------------------------------

    //        m_clsDalDataHandle.AddSqlParameter("@p_college_id", SqlDbType.Int, 0, p_college_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_batch_id", SqlDbType.Int, 0, p_batch_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.Int, 0, p_course_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_stream_id", SqlDbType.Int, 0, p_stream_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_Sem_id", SqlDbType.Int, 0, p_semester_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_Section_id", SqlDbType.Int, 0, p_section_id);

    //        m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_From_Month_and_To_Month");

    //        if (m_DataTable.Rows.Count > 0)
    //        {
    //            m_clsBoDateWiseRoutineAllocation.m_from_month = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "m_FromMonth_Name", 0);
    //            m_clsBoDateWiseRoutineAllocation.m_to_month = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "m_ToMonth_Name", 0);
    //        }
    //        else
    //        {
    //            m_clsBoDateWiseRoutineAllocation.m_from_month = "";
    //            m_clsBoDateWiseRoutineAllocation.m_to_month = "";
    //        }
    //    }
    //    catch
    //    {
    //        m_clsBoDateWiseRoutineAllocation.m_RetVal = 1;
    //    }
    //    finally
    //    {
    //        m_clsDalDataHandle = null;
    //        m_DataTable = null;
    //    }
    //    return m_clsBoDateWiseRoutineAllocation;

    //}

    //[WebMethod(EnableSession = true)]
    //public clsBoDateWiseRoutineAllocation PopulateFromDate_ToDate(string p_college_id,string p_batch_id, string p_course_id, string p_stream_id,
    //                                                                string p_semester_id, string p_section_id)
    //{
    //    clsBoDateWiseRoutineAllocation m_clsBoDateWiseRoutineAllocation = new clsBoDateWiseRoutineAllocation();
    //    clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
    //    DataTable m_DataTable = new DataTable();
    //    try
    //    {
    //        m_clsBoDateWiseRoutineAllocation.m_RetVal = 0;

    //        m_clsDalDataHandle.ResetSpParam();

    //        //-----------------------------------------------------------------------------------------------------------------

    //        m_clsDalDataHandle.AddSqlParameter("@p_college_id", SqlDbType.Int, 0, p_college_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_batch_id", SqlDbType.Int, 0, p_batch_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.Int, 0, p_course_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_stream_id", SqlDbType.Int, 0, p_stream_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_Sem_id", SqlDbType.Int, 0, p_semester_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_Section_id", SqlDbType.Int, 0, p_section_id);

    //        m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_From_Date_and_To_Date");

    //        if (m_DataTable.Rows.Count > 0)
    //        {
    //            m_clsBoDateWiseRoutineAllocation.m_from_date = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "m_FromDate", 0);
    //            m_clsBoDateWiseRoutineAllocation.m_to_date = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "m_ToDate", 0);
    //        }
    //        else
    //        {
    //            m_clsBoDateWiseRoutineAllocation.m_from_date = "";
    //            m_clsBoDateWiseRoutineAllocation.m_to_date = "";
    //        }
    //    }
    //    catch
    //    {
    //        m_clsBoDateWiseRoutineAllocation.m_RetVal = 1;
    //    }
    //    finally
    //    {
    //        m_clsDalDataHandle = null;
    //        m_DataTable = null;
    //    }
    //    return m_clsBoDateWiseRoutineAllocation;

    //}

    //[WebMethod(EnableSession = true)]
    //public clsBoDateWiseRoutineAllocation PopulateLastAttendanceDate(string p_college_id, string p_batch_id, string p_course_id, string p_stream_id,
    //                                                                string p_semester_id, string p_section_id)
    //{
    //    clsBoDateWiseRoutineAllocation m_clsBoDateWiseRoutineAllocation = new clsBoDateWiseRoutineAllocation();
    //    clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
    //    DataTable m_DataTable = new DataTable();
    //    try
    //    {
    //        m_clsBoDateWiseRoutineAllocation.m_RetVal = 0;

    //        m_clsDalDataHandle.ResetSpParam();

    //        //-----------------------------------------------------------------------------------------------------------------

    //        m_clsDalDataHandle.AddSqlParameter("@p_college_id", SqlDbType.Int, 0, p_college_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_batch_id", SqlDbType.Int, 0, p_batch_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.Int, 0, p_course_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_stream_id", SqlDbType.Int, 0, p_stream_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_Sem_id", SqlDbType.Int, 0, p_semester_id);
    //        m_clsDalDataHandle.AddSqlParameter("@p_Section_id", SqlDbType.Int, 0, p_section_id);

    //        m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_Last_Attendance_Date_New");

    //        if (m_DataTable.Rows.Count > 0)
    //        {
    //            m_clsBoDateWiseRoutineAllocation.m_last_attendance_date = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "m_LastAttendenceDate", 0);
    //        }
    //        else
    //        {
    //            m_clsBoDateWiseRoutineAllocation.m_last_attendance_date = "01/01/1900";
    //        }
    //    }
    //    catch
    //    {
    //        m_clsBoDateWiseRoutineAllocation.m_RetVal = 1;
    //    }
    //    finally
    //    {
    //        m_clsDalDataHandle = null;
    //        m_DataTable = null;
    //    }
    //    return m_clsBoDateWiseRoutineAllocation;

    //}

    [WebMethod(EnableSession = true)]
    public clsBoDateWiseRoutineAllocation PopulateFromToDateMonthLastAttendance(string p_college_id, string p_batch_id, string p_course_id, string p_stream_id,
                                                                    string p_semester_id, string p_section_id)
    {
        clsBoDateWiseRoutineAllocation m_clsBoDateWiseRoutineAllocation = new clsBoDateWiseRoutineAllocation();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable = new DataTable();
        try
        {
            m_clsBoDateWiseRoutineAllocation.m_RetVal = 0;

            m_clsDalDataHandle.ResetSpParam();

            //-----------------------------------------------------------------------------------------------------------------

            m_clsDalDataHandle.AddSqlParameter("@p_college_id", SqlDbType.Int, 0, p_college_id);
            m_clsDalDataHandle.AddSqlParameter("@p_batch_id", SqlDbType.Int, 0, p_batch_id);
            m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.Int, 0, p_course_id);
            m_clsDalDataHandle.AddSqlParameter("@p_stream_id", SqlDbType.Int, 0, p_stream_id);
            m_clsDalDataHandle.AddSqlParameter("@p_Sem_id", SqlDbType.Int, 0, p_semester_id);
            m_clsDalDataHandle.AddSqlParameter("@p_Section_id", SqlDbType.Int, 0, p_section_id);

            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_FromTo_DateMonth_LastAttendance");

            if (m_DataTable.Rows.Count > 0)
            {
                m_clsBoDateWiseRoutineAllocation.m_from_year = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "m_FromYear", 0);
                m_clsBoDateWiseRoutineAllocation.m_to_year = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "m_ToYear", 0);

                m_clsBoDateWiseRoutineAllocation.m_from_month = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "m_FromMonth_Name", 0);
                m_clsBoDateWiseRoutineAllocation.m_to_month = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "m_ToMonth_Name", 0);

                m_clsBoDateWiseRoutineAllocation.m_from_date = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "m_FromDate", 0);
                m_clsBoDateWiseRoutineAllocation.m_to_date = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "m_ToDate", 0);

                m_clsBoDateWiseRoutineAllocation.m_last_attendance_date = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "m_LastAttendenceDate", 0);
            }
            else
            {
                m_clsBoDateWiseRoutineAllocation.m_from_year = "";
                m_clsBoDateWiseRoutineAllocation.m_to_year = "";

                m_clsBoDateWiseRoutineAllocation.m_from_month = "";
                m_clsBoDateWiseRoutineAllocation.m_to_month = "";

                m_clsBoDateWiseRoutineAllocation.m_from_date = "";
                m_clsBoDateWiseRoutineAllocation.m_to_date = "";

                m_clsBoDateWiseRoutineAllocation.m_last_attendance_date = "01/01/1900";
            }
        }
        catch
        {
            m_clsBoDateWiseRoutineAllocation.m_RetVal = 1;
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_clsBoDateWiseRoutineAllocation;

    }



    [WebMethod(EnableSession = true)]
    public string AddSingleRoutine(string p_college_id, string p_period_id, string p_Batch, string p_CourseId,
                                                                    string p_StreamId, string p_SectionId, string p_SemesterId, string p_SubjectId,
                                                                    string p_GroupId, string p_day_id, string p_faculty_code, string p_from_date, string p_to_date
                                                                    )
    {
        string m_error_mesg = "";
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        DataTable m_DataTable = new DataTable();
        try
        {

            m_clsDalDataHandle.ResetSpParam();

            //-----------------------------------------------------------------------------------------------------------------

            m_clsDalDataHandle.AddSqlParameter("@P_COLLEGE_ID", SqlDbType.Int, 0, p_college_id);
            m_clsDalDataHandle.AddSqlParameter("@P_FROM_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_from_date));
            m_clsDalDataHandle.AddSqlParameter("@P_TO_DATE ", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_to_date));
            m_clsDalDataHandle.AddSqlParameter("@P_BATCH", SqlDbType.Int, 0, p_Batch);
            m_clsDalDataHandle.AddSqlParameter("@P_COURSE_ID", SqlDbType.Int, 0, p_CourseId);
            m_clsDalDataHandle.AddSqlParameter("@P_STREAM_ID", SqlDbType.Int, 0, p_StreamId);
            m_clsDalDataHandle.AddSqlParameter("@P_SEMESTER_ID", SqlDbType.Int, 0, p_SemesterId);
            m_clsDalDataHandle.AddSqlParameter("@P_SECTION_ID", SqlDbType.Int, 0, p_SectionId);
            m_clsDalDataHandle.AddSqlParameter("@p_faculty_code", SqlDbType.VarChar, 0, p_faculty_code);
            m_clsDalDataHandle.AddSqlParameter("@p_day_id", SqlDbType.Int, 0, p_day_id);
            m_clsDalDataHandle.AddSqlParameter("@p_period_id", SqlDbType.Int, 0, p_period_id);
            m_clsDalDataHandle.AddSqlParameter("@p_sub_id", SqlDbType.Int, 0, p_SubjectId);
            m_clsDalDataHandle.AddSqlParameter("@p_group_id", SqlDbType.Int, 0, p_GroupId);
            m_clsDalDataHandle.AddSqlParameter("@p_flag", SqlDbType.Int, 0, 1);



            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Date_Wise_Routine_Allotment_Single_Faculty");

            if (m_DataTable.Rows.Count > 0)
            {
                m_error_mesg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg", 0);
            }
            else
            {
                m_error_mesg = "Error in Saving";
            }
        }
        catch
        {
            m_error_mesg = "Error in Saving";
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_error_mesg;

    }
    //-----------------
    [WebMethod(EnableSession = true)]
    public string DelSingleRoutine(string p_college_id, string p_period_id, string p_Batch, string p_CourseId,
                                                                    string p_StreamId, string p_SectionId, string p_SemesterId, string p_SubjectId,
                                                                    string p_GroupId, string p_day_id, string p_faculty_code, string p_from_date, string p_to_date
                                                                    )
    {
        string m_error_mesg = "";
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        DataTable m_DataTable = new DataTable();
        try
        {

            m_clsDalDataHandle.ResetSpParam();

            //-----------------------------------------------------------------------------------------------------------------

            m_clsDalDataHandle.AddSqlParameter("@P_COLLEGE_ID", SqlDbType.Int, 0, p_college_id);
            m_clsDalDataHandle.AddSqlParameter("@P_FROM_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_from_date));
            m_clsDalDataHandle.AddSqlParameter("@P_TO_DATE ", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_to_date));
            m_clsDalDataHandle.AddSqlParameter("@P_BATCH", SqlDbType.Int, 0, p_Batch);
            m_clsDalDataHandle.AddSqlParameter("@P_COURSE_ID", SqlDbType.Int, 0, p_CourseId);
            m_clsDalDataHandle.AddSqlParameter("@P_STREAM_ID", SqlDbType.Int, 0, p_StreamId);
            m_clsDalDataHandle.AddSqlParameter("@P_SEMESTER_ID", SqlDbType.Int, 0, p_SemesterId);
            m_clsDalDataHandle.AddSqlParameter("@P_SECTION_ID", SqlDbType.Int, 0, p_SectionId);
            m_clsDalDataHandle.AddSqlParameter("@p_faculty_code", SqlDbType.VarChar, 0, p_faculty_code);
            m_clsDalDataHandle.AddSqlParameter("@p_day_id", SqlDbType.Int, 0, p_day_id);
            m_clsDalDataHandle.AddSqlParameter("@p_period_id", SqlDbType.Int, 0, p_period_id);
            m_clsDalDataHandle.AddSqlParameter("@p_sub_id", SqlDbType.Int, 0, p_SubjectId);
            m_clsDalDataHandle.AddSqlParameter("@p_group_id", SqlDbType.Int, 0, p_GroupId);
            m_clsDalDataHandle.AddSqlParameter("@p_type", SqlDbType.Int, 0, 1);



            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Delete_Date_Wise_Routine_Allotment_Single_Faculty");

            if (m_DataTable.Rows.Count > 0)
            {
                m_error_mesg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg", 0);
            }
            else
            {
                m_error_mesg = "Error in Saving";
            }
        }
        catch
        {
            m_error_mesg = "Error in Saving";
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_error_mesg;

    }

}