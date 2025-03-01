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
/// Summary description for WebServiceShowFacultyDetailsEmpCodeWise
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebServiceShowFacultyDetailsEmpCodeWise : System.Web.Services.WebService
{

    public WebServiceShowFacultyDetailsEmpCodeWise()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }
    [WebMethod(EnableSession = true)]
    public clsBoShowFacultyDetailsEmpCodeWise DispDateWiseRoutine(string p_emph_code,
                                                         string p_from_date,
                                                         string p_to_date,
                                                         string p_disp_type
                                                         )
    {
        clsBoShowFacultyDetailsEmpCodeWise m_clsBoShowFacultyDetailsEmpCodeWise = new clsBoShowFacultyDetailsEmpCodeWise();



        try
        {
            if (p_disp_type == "0")
            {
                int m_RetVal = CreatePeriodCalender(ref m_clsBoShowFacultyDetailsEmpCodeWise, p_emph_code, p_from_date, p_to_date);
            }
            else if (p_disp_type == "1")
            {
                CreatePeriodVertical(ref m_clsBoShowFacultyDetailsEmpCodeWise, p_emph_code, p_from_date, p_to_date);

            }
        }
        catch
        {
        }
        finally
        {
        }
        return m_clsBoShowFacultyDetailsEmpCodeWise;

    }

    public void CreatePeriodVertical(ref clsBoShowFacultyDetailsEmpCodeWise p_clsBoShowFacultyDetailsEmpCodeWise,
                                     string p_emph_code,
                                     string p_from_date,
                                     string p_to_date
                                     )
    {

        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable = new DataTable();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            p_clsBoShowFacultyDetailsEmpCodeWise.m_RetVal = 0;

            m_clsDalDataHandle.ResetSpParam();
            m_clsDalDataHandle.AddSqlParameter("@P_FACULTY_CODE", SqlDbType.VarChar, 0, p_emph_code);
            m_clsDalDataHandle.AddSqlParameter("@P_FROM_DT", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_from_date));
            m_clsDalDataHandle.AddSqlParameter("@P_TO_DT", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_to_date));

            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_Faculty_Date_Wise_Routine");
            if (m_DataTable.Rows.Count > 0)
            {
                p_clsBoShowFacultyDetailsEmpCodeWise.m_routine_header = new string[m_DataTable.Columns.Count];
                for (int nCtr = 0; nCtr < m_DataTable.Columns.Count; nCtr++)
                {
                    p_clsBoShowFacultyDetailsEmpCodeWise.m_routine_header[nCtr] = m_DataTable.Columns[nCtr].ColumnName;
                }

                if (m_clsDalDataHandle.DataTableToArray(m_DataTable, ref p_clsBoShowFacultyDetailsEmpCodeWise.m_routine_data, p_clsBoShowFacultyDetailsEmpCodeWise.m_routine_header, 0, m_DataTable.Rows.Count) > 0)
                {
                    p_clsBoShowFacultyDetailsEmpCodeWise.m_RetVal = 1;
                }
            }
            else
            {
                p_clsBoShowFacultyDetailsEmpCodeWise.m_RetVal = 1;
            }
        }
        catch
        {
            p_clsBoShowFacultyDetailsEmpCodeWise.m_RetVal = 1;
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }


    }


    public int CreatePeriodCalender(ref clsBoShowFacultyDetailsEmpCodeWise p_clsBoShowFacultyDetailsEmpCodeWise,
                                     string p_emph_code,
                                     string p_from_date,
                                     string p_to_date)
    {
        int m_RetVal = 0;
        try
        {
            p_clsBoShowFacultyDetailsEmpCodeWise.m_RetVal = 0;

            m_RetVal = m_RetVal + CreatePeriodCalenderArray(ref p_clsBoShowFacultyDetailsEmpCodeWise.m_routine_data_mon, p_emph_code, p_from_date, p_to_date, 2);
            m_RetVal = m_RetVal + CreatePeriodCalenderArray(ref p_clsBoShowFacultyDetailsEmpCodeWise.m_routine_data_tue, p_emph_code, p_from_date, p_to_date, 3);
            m_RetVal = m_RetVal + CreatePeriodCalenderArray(ref p_clsBoShowFacultyDetailsEmpCodeWise.m_routine_data_wed, p_emph_code, p_from_date, p_to_date, 4);
            m_RetVal = m_RetVal + CreatePeriodCalenderArray(ref p_clsBoShowFacultyDetailsEmpCodeWise.m_routine_data_thur, p_emph_code, p_from_date, p_to_date, 5);
            m_RetVal = m_RetVal + CreatePeriodCalenderArray(ref p_clsBoShowFacultyDetailsEmpCodeWise.m_routine_data_fri, p_emph_code, p_from_date, p_to_date, 6);
            m_RetVal = m_RetVal + CreatePeriodCalenderArray(ref p_clsBoShowFacultyDetailsEmpCodeWise.m_routine_data_sat, p_emph_code, p_from_date, p_to_date, 7);
        }

        catch
        {
        }
        finally
        {
        }

        return m_RetVal;
    }

    public int CreatePeriodCalenderArray(ref string[][] p_Arr,
                                     string p_emph_code,
                                     string p_from_date,
                                     string p_to_date,
                                     int p_day_id)
    {
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable = new DataTable();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        int m_RetVal = 0;

        try
        {


            m_clsDalDataHandle.ResetSpParam();

            m_clsDalDataHandle.AddSqlParameter("@P_COLLEGE_ID", SqlDbType.Int, 0, HttpContext.Current.Session["G_COLLEGE_ID"]);
            m_clsDalDataHandle.AddSqlParameter("@P_FACULTY_CODE", SqlDbType.VarChar, 0, p_emph_code);
            m_clsDalDataHandle.AddSqlParameter("@P_FROM_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_from_date));
            m_clsDalDataHandle.AddSqlParameter("@P_TO_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_to_date));
            m_clsDalDataHandle.AddSqlParameter("@P_DAY_ID", SqlDbType.Int, 0, p_day_id);

            string[] m_field = new string[] { "DAY_NAME", "DAY_DATE", "PERIOD_NAME", "DETAIL_CONCAT" };

            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_Faculty_Date_Wise_Routine_Calender");
            if (m_DataTable.Rows.Count > 0)
            {

                if (m_clsDalDataHandle.DataTableToArray(m_DataTable, ref p_Arr, m_field, 0, m_DataTable.Rows.Count) > 0)
                {
                    m_RetVal = 1;
                }
            }
            else
            {
                m_RetVal = 1;
            }
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_RetVal;

    }
    [WebMethod(EnableSession = true)]
    public int SetRemarksToAll(string p_remarks)
    {
        int m_RetVal = 0;
        DataTable m_DataTable;
        string m_DbFieldId = "", m_DbFieldName = "";
        try
        {

            m_DbFieldName = "Remarks";


            m_DataTable = (DataTable)Session["S_POPULATE_STUDENT_DETAIL"];
            for (int iRow = 0; iRow < m_DataTable.Rows.Count; iRow++)
            {
                m_DataTable.Rows[iRow][m_DbFieldName] = p_remarks;
            }

        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_DataTable = null;
            GC.Collect();
        }
        return m_RetVal;
    }




    /*Save Fuction*/
    [WebMethod(EnableSession = true)]
    public string SaveStudentAttendance(string[][] p_ValArr)
    {

        string m_RetVal = "ERROR";
        clsBalShowFacultyDetailsEmpCodeWise m_clsBalShowFacultyDetailsEmpCodeWise = new clsBalShowFacultyDetailsEmpCodeWise();
        clsBoShowFacultyDetailsEmpCodeWise m_clsBoShowFacultyDetailsEmpCodeWise = new clsBoShowFacultyDetailsEmpCodeWise();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            m_clsBoShowFacultyDetailsEmpCodeWise.m_college_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_college_id");
            m_clsBoShowFacultyDetailsEmpCodeWise.m_attendance_date = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_att_date");
            m_clsBoShowFacultyDetailsEmpCodeWise.m_batch_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_batch_id");
            m_clsBoShowFacultyDetailsEmpCodeWise.m_course_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_course_id");
            m_clsBoShowFacultyDetailsEmpCodeWise.m_stream_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_stream_id");
            m_clsBoShowFacultyDetailsEmpCodeWise.m_semester_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_semester_id");
            m_clsBoShowFacultyDetailsEmpCodeWise.m_section_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_section_id");
            m_clsBoShowFacultyDetailsEmpCodeWise.m_group_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_group_id");
            m_clsBoShowFacultyDetailsEmpCodeWise.m_subject_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_subject_id");
            m_clsBoShowFacultyDetailsEmpCodeWise.m_faculty_code = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_emph_code");
            m_clsBoShowFacultyDetailsEmpCodeWise.m_is_gen_qr_code = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "chk_gen_qrcode");
            m_clsBoShowFacultyDetailsEmpCodeWise.m_topic_delivered = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_topic_delivered");
            


            if (m_clsBalShowFacultyDetailsEmpCodeWise.SaveStudentAttendance(m_clsBoShowFacultyDetailsEmpCodeWise) > 0)
            {
                m_RetVal = "ERROR: " + m_clsBoShowFacultyDetailsEmpCodeWise.m_attendance_date;
            }
            else
            {
                m_RetVal = " Data Saved:" + m_clsBoShowFacultyDetailsEmpCodeWise.m_attendance_date;
            }

        }
        catch
        {
            m_RetVal = "ERROR";
        }
        finally
        {
            m_clsBoShowFacultyDetailsEmpCodeWise = null;
            m_clsBalCommonLib = null;
            m_clsBoShowFacultyDetailsEmpCodeWise = null;
        }
        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public int SavePeriodId(string p_app, string p_period_id)
    {
        int m_RetVal = 0;
        clsDalEditInDataTable m_clsDalEditInDataTable = new clsDalEditInDataTable();
        string m_Filter;
        DataTable m_DataTable;


        try
        {
            m_Filter = "PeriodId=" + p_period_id;
            m_DataTable = (DataTable)Session["S_POPULATE_ASSOSIATED_PERIOD"];

            if (m_clsDalEditInDataTable.Init(ref m_DataTable, m_Filter, 2) == 0)
            {

                m_clsDalEditInDataTable.BeginEdit();
                m_RetVal = m_RetVal + m_clsDalEditInDataTable.SetData("APP", p_app);
                m_clsDalEditInDataTable.EndEdit();
            }
            else
            {
                m_RetVal++;
            }

            Session.Remove("S_POPULATE_ASSOSIATED_PERIOD");
            Session["S_POPULATE_ASSOSIATED_PERIOD"] = m_DataTable;

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
    public int SaveStudentId(string p_SessionVarName, string[][][] p_ItemArr, string[] p_ItemKeyArr)
    {
        int m_RetVal = 0;
        clsDalEditInDataTable m_clsDalEditInDataTable = new clsDalEditInDataTable();
        string m_Filter;
        DataTable m_DataTable;

        int iRow;


        try
        {
            m_DataTable = (DataTable)Session[p_SessionVarName];

            for (iRow = 0; iRow < p_ItemKeyArr.Count(); iRow++)
            {
                m_Filter = "StudentId=" + p_ItemKeyArr[iRow];
                //m_DataTable = (DataTable)Session["S_POPULATE_STUDENT_DETAIL"];

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
    public clsBoShowFacultyDetailsEmpCodeWise CreateWeeklyRoutine(string p_college_id,
                                                         string p_session_id,
                                                         string p_sem_type,
                                                         string p_disp_type,
                                                         string p_faculty_code
                                                         )
    {

        clsBoShowFacultyDetailsEmpCodeWise m_clsBoShowFacultyDetailsEmpCodeWise = new clsBoShowFacultyDetailsEmpCodeWise();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable = new DataTable();

        try
        {
            m_clsBoShowFacultyDetailsEmpCodeWise.m_RetVal = 0;

            m_clsDalDataHandle.ResetSpParam();




            m_clsDalDataHandle.AddSqlParameter("@p_college_id", SqlDbType.Int, 0, p_college_id);
            m_clsDalDataHandle.AddSqlParameter("@p_session_id", SqlDbType.Int, 0, p_session_id);
            m_clsDalDataHandle.AddSqlParameter("@p_sem_type", SqlDbType.VarChar, 0, p_sem_type);
            m_clsDalDataHandle.AddSqlParameter("@p_disp_type", SqlDbType.Int, 0, p_disp_type);
            m_clsDalDataHandle.AddSqlParameter("@p_faculty_code", SqlDbType.VarChar, 0, p_faculty_code);

            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_Faculty_Wise_Class");
            //------------------------------------------------------------------------------------------------------------------
            if (m_DataTable.Rows.Count > 0)
            {
                m_clsBoShowFacultyDetailsEmpCodeWise.m_routine_header = new string[m_DataTable.Columns.Count];
                for (int nCtr = 0; nCtr < m_DataTable.Columns.Count; nCtr++)
                {
                    m_clsBoShowFacultyDetailsEmpCodeWise.m_routine_header[nCtr] = m_DataTable.Columns[nCtr].ColumnName;
                }
                if (m_clsDalDataHandle.DataTableToArray(m_DataTable, ref m_clsBoShowFacultyDetailsEmpCodeWise.m_routine_data, m_clsBoShowFacultyDetailsEmpCodeWise.m_routine_header, 0, m_DataTable.Rows.Count) > 0)
                {
                    m_clsBoShowFacultyDetailsEmpCodeWise.m_RetVal = 1;
                }
            }
            else
            {
                m_clsBoShowFacultyDetailsEmpCodeWise.m_RetVal = 1;
            }
        }
        catch
        {
            m_clsBoShowFacultyDetailsEmpCodeWise.m_RetVal = 1;
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }

        return m_clsBoShowFacultyDetailsEmpCodeWise;
    }

    [WebMethod(EnableSession = true)]
    public clsBoShowFacultyDetailsEmpCodeWise PopulateStudentAttendCalendarGrid(string p_college_id, string p_from_date, string p_to_date, string p_emph_code)
    {
        clsBoShowFacultyDetailsEmpCodeWise m_clsBoShowFacultyDetailsEmpCodeWise = new clsBoShowFacultyDetailsEmpCodeWise();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable = new DataTable();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            m_clsBoShowFacultyDetailsEmpCodeWise.m_RetVal = 0;

            m_clsDalDataHandle.ResetSpParam();
            m_clsDalDataHandle.AddSqlParameter("@p_COLLEGE_ID", SqlDbType.Int, 0, m_clsBalCommonLib.ConvertInt(p_college_id));
            m_clsDalDataHandle.AddSqlParameter("@P_FROM_DT", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_from_date));
            m_clsDalDataHandle.AddSqlParameter("@P_TO_DT", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_to_date));
            m_clsDalDataHandle.AddSqlParameter("@P_FACULTY_CODE", SqlDbType.VarChar, 0, p_emph_code);

            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Disp_Faculty_Month_Wise_Matrix");
            if (m_DataTable.Rows.Count > 0)
            {
                m_clsBoShowFacultyDetailsEmpCodeWise.m_calender_header = new string[m_DataTable.Columns.Count];
                for (int nCtr = 0; nCtr < m_DataTable.Columns.Count; nCtr++)
                {
                    m_clsBoShowFacultyDetailsEmpCodeWise.m_calender_header[nCtr] = m_DataTable.Columns[nCtr].ColumnName;
                }

                if (m_clsDalDataHandle.DataTableToArray(m_DataTable, ref m_clsBoShowFacultyDetailsEmpCodeWise.m_calender_data, m_clsBoShowFacultyDetailsEmpCodeWise.m_calender_header, 0, m_DataTable.Rows.Count) > 0)
                {
                    m_clsBoShowFacultyDetailsEmpCodeWise.m_RetVal = 1;
                }
            }
            else
            {
                m_clsBoShowFacultyDetailsEmpCodeWise.m_RetVal = 1;
            }
        }
        catch
        {
            m_clsBoShowFacultyDetailsEmpCodeWise.m_RetVal = 1;
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_clsBoShowFacultyDetailsEmpCodeWise;

    }

    [WebMethod(EnableSession = true)]
    public int Save_Lesson_Plan(string p_faculty_code,string[][][] p_DetailData)
    {
        int m_RetVal = 0;
        clsBalShowFacultyDetailsEmpCodeWise m_clsBalShowFacultyDetailsEmpCodeWise = new clsBalShowFacultyDetailsEmpCodeWise();

        try
        {
            m_RetVal = m_clsBalShowFacultyDetailsEmpCodeWise.SaveLessonPlan(p_faculty_code,p_DetailData);
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalShowFacultyDetailsEmpCodeWise = null;
        }

        return m_RetVal;
    }


    
   [WebMethod(EnableSession = true)]
    public int Save_Lesson_Plan_New(string p_att_date,
                                    string p_batch_id,
                                    string p_course_id,
                                    string p_stream_id,
                                    string p_section_id,
                                    string p_semester_id,
                                    string p_selected_period_id,
                                    string p_subject_id,
                                    string p_group_id,
                                    string p_emph_code,
                                    string p_college_id,
                                    string p_syllabus_topic,
                                    string p_syllabus_id,
                                    string p_lecture_no
                                    )
    {
        int m_RetVal = 0;
        clsBalShowFacultyDetailsEmpCodeWise m_clsBalShowFacultyDetailsEmpCodeWise = new clsBalShowFacultyDetailsEmpCodeWise();

        try
        {
            m_RetVal = m_clsBalShowFacultyDetailsEmpCodeWise.Save_Lesson_Plan_New(
                                                             p_att_date,
                                                             p_batch_id,
                                                             p_course_id,
                                                             p_stream_id,
                                                             p_section_id,
                                                             p_semester_id,
                                                             p_selected_period_id,
                                                             p_subject_id,
                                                             p_group_id,
                                                             p_emph_code,
                                                             p_college_id,
                                                             p_syllabus_topic,
                                                             p_syllabus_id,
                                                             p_lecture_no                
                                                                                  );
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalShowFacultyDetailsEmpCodeWise = null;
        }

        return m_RetVal;
    }


 
   [WebMethod(EnableSession = true)]
   public int SaveLessonPlanResource(string p_unique_key_id,
                                    string p_att_date,
                                    string p_batch_id,
                                    string p_course_id,
                                    string p_stream_id,
                                    string p_section_id,
                                    string p_semester_id,
                                    string p_selected_period_id,
                                    string p_subject_id,
                                    string p_group_id,
                                    string p_emph_code,
                                    string p_college_id,
                                    string p_resource_type_id,
                                    string p_resource_desp,
                                    string p_resource_link
                                    )
    {
        int m_RetVal = 0;
        clsBalShowFacultyDetailsEmpCodeWise m_clsBalShowFacultyDetailsEmpCodeWise = new clsBalShowFacultyDetailsEmpCodeWise();

        try
        {
            m_RetVal = m_clsBalShowFacultyDetailsEmpCodeWise.SaveLessonPlanResource(p_unique_key_id,
                                                             p_att_date,
                                                             p_batch_id,
                                                             p_course_id,
                                                             p_stream_id,
                                                             p_section_id,
                                                             p_semester_id,
                                                             p_selected_period_id,
                                                             p_subject_id,
                                                             p_group_id,
                                                             p_emph_code,
                                                             p_college_id,
                                                             p_resource_type_id,
                                                             p_resource_desp,
                                                             p_resource_link                
                                                                                  );
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalShowFacultyDetailsEmpCodeWise = null;
        }

        return m_RetVal;
    }



   [WebMethod(EnableSession = true)]
   public int DeleteLessonPlanResource(string p_unique_key_id,
                                    string p_college_id
                                    )
   {
       int m_RetVal = 0;
       clsBalShowFacultyDetailsEmpCodeWise m_clsBalShowFacultyDetailsEmpCodeWise = new clsBalShowFacultyDetailsEmpCodeWise();

       try
       {
           m_RetVal = m_clsBalShowFacultyDetailsEmpCodeWise.DeleteLessonPlanResource(p_unique_key_id,
                                                            p_college_id
                                                            );
       }
       catch
       {
           m_RetVal = 1;
       }
       finally
       {
           m_clsBalShowFacultyDetailsEmpCodeWise = null;
       }

       return m_RetVal;
   }
    //---------------------------------------------
}
