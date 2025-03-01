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
/// Summary description for WebServiceRoutineTemplate
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
 [System.Web.Script.Services.ScriptService]
public class WebServiceRoutineTemplate : System.Web.Services.WebService {

    public WebServiceRoutineTemplate () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod(EnableSession = true)]
    public clsBoCreateRoutineTemplate DispRoutine(string p_college_id,
                                                         string p_batch_year,
                                                         string p_course_id,
                                                         string p_stream_id,
                                                         string p_semester_id,
                                                         string p_section_id,
                                                         string p_academic_ses_id,
                                                         string p_disp_type
                                                         )
    {

        clsBoCreateRoutineTemplate m_clsBoCreateRoutineTemplate = new clsBoCreateRoutineTemplate();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable = new DataTable();

        try
        {
            m_clsBoCreateRoutineTemplate.m_RetVal = 0;

            m_clsDalDataHandle.ResetSpParam();
            m_clsDalDataHandle.AddSqlParameter("@P_COLLEGE_ID", SqlDbType.Int, 0, p_college_id);
            m_clsDalDataHandle.AddSqlParameter("@P_BATCH_ID", SqlDbType.Int, 0, p_batch_year);
            m_clsDalDataHandle.AddSqlParameter("@P_COURSE_ID", SqlDbType.Int, 0, p_course_id);
            m_clsDalDataHandle.AddSqlParameter("@P_STREAM_ID", SqlDbType.Int, 0, p_stream_id);
            m_clsDalDataHandle.AddSqlParameter("@P_SEMESTER_ID", SqlDbType.Int, 0, p_semester_id);
            m_clsDalDataHandle.AddSqlParameter("@P_SECTION_ID", SqlDbType.Int, 0, p_section_id);
            m_clsDalDataHandle.AddSqlParameter("@P_ACADEMIC_SESSION_ID", SqlDbType.Int, 0, p_academic_ses_id);
            m_clsDalDataHandle.AddSqlParameter("@P_DISP_TYPE", SqlDbType.Int, 0, p_disp_type);

            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Show_Routine_Template_Period_Vertical");
            if (m_DataTable.Rows.Count > 0)
            {
                m_clsBoCreateRoutineTemplate.m_routine_header = new string[m_DataTable.Columns.Count-1];
                for (int nCtr = 1; nCtr < m_DataTable.Columns.Count; nCtr++)
                {
                    m_clsBoCreateRoutineTemplate.m_routine_header[nCtr-1] = m_DataTable.Columns[nCtr].ColumnName;
                }

                if (m_clsDalDataHandle.DataTableToArray(m_DataTable, ref m_clsBoCreateRoutineTemplate.m_routine_data, m_clsBoCreateRoutineTemplate.m_routine_header, 0, m_DataTable.Rows.Count) > 0)
                {
                    m_clsBoCreateRoutineTemplate.m_RetVal = 1;
                }
            }
            else
            {
                m_clsBoCreateRoutineTemplate.m_RetVal = 1;
            }
        }
        catch
        {
            m_clsBoCreateRoutineTemplate.m_RetVal = 1;
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }

        return m_clsBoCreateRoutineTemplate;
    }


    [WebMethod(EnableSession = true)]
    public int AddFaculty(string p_faculty_code, string p_faculty_name, string p_faculty_short_name, string p_dept)
    {
        int m_RetVal = 0;
        clsBalCreateRoutineTemplate m_clsBalCreateRoutineTemplate = new clsBalCreateRoutineTemplate();

        try
        {
            m_RetVal = m_clsBalCreateRoutineTemplate.AddFaculty( p_faculty_code,  p_faculty_name,  p_faculty_short_name,  p_dept);
        }
        catch (Exception ex)
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCreateRoutineTemplate=null;
        }

        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public int RemoveFaculty(string p_faculty_code)
    {
        int m_RetVal = 0;
        clsBalCreateRoutineTemplate m_clsBalCreateRoutineTemplate = new clsBalCreateRoutineTemplate();

        try
        {
            m_RetVal = m_clsBalCreateRoutineTemplate.RemoveFaculty(p_faculty_code);
        }
        catch (Exception ex)
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCreateRoutineTemplate = null;
        }

        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public int SaveRoutineData(string p_college_id,
                               string p_academic_ses_id,
                               string p_batch_year,
                               string p_course_id,
                               string p_stream_id,
                               string p_section_id,
                               string p_semester_id,
                               string p_day_id,
                               string p_period_id,
                               string p_group_id,
                               string p_subject_id,
                               string p_sem_type_id,
                               string p_room_no,
                               string p_IsRecess,
                               string p_IsNew
                               )
    {
        int m_RetVal = 0;
        clsBalCreateRoutineTemplate m_clsBalCreateRoutineTemplate = new clsBalCreateRoutineTemplate();

        try
        {
            m_RetVal = m_clsBalCreateRoutineTemplate.SaveRoutineData(

                                p_college_id,
                                p_academic_ses_id,
                                p_batch_year,
                                p_course_id,
                                p_stream_id,
                                p_section_id,
                                p_semester_id,
                                p_day_id,
                                p_period_id,
                                p_group_id,
                                p_subject_id,
                                p_sem_type_id,
                                p_room_no,
                                p_IsRecess,
                                p_IsNew);       
        }
        catch (Exception ex)
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCreateRoutineTemplate = null;
        }

        return m_RetVal;
    }


    [WebMethod(EnableSession = true)]
    public int RemoveRoutineData(string p_college_id,
                               string p_academic_ses_id,
                               string p_batch_year,
                               string p_course_id,
                               string p_stream_id,
                               string p_section_id,
                               string p_semester_id,
                               string p_day_id,
                               string p_period_id,
                               string p_group_id,
                               string p_subject_id,
                               string p_faculty_code
                               )
    {
        int m_RetVal = 0;
        clsBalCreateRoutineTemplate m_clsBalCreateRoutineTemplate = new clsBalCreateRoutineTemplate();

        try
        {
            m_RetVal = m_clsBalCreateRoutineTemplate.RemoveRoutineData(

                                p_college_id,
                                p_academic_ses_id,
                                p_batch_year,
                                p_course_id,
                                p_stream_id,
                                p_section_id,
                                p_semester_id,
                                p_day_id,
                                p_period_id,
                                p_group_id,
                                p_subject_id,
                                p_faculty_code
                                );
        }
        catch (Exception ex)
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCreateRoutineTemplate = null;
        }

        return m_RetVal;
    }


    [WebMethod(EnableSession = true)]
    public int UpdateRoomNo(string p_college_id,
                               string p_academic_ses_id,
                               string p_batch_year,
                               string p_course_id,
                               string p_stream_id,
                               string p_section_id,
                               string p_semester_id,
                               string p_day_id,
                               string p_period_id,
                               string p_group_id,
                               string p_subject_id,
                               string p_room_no
                               )
    {
        int m_RetVal = 0;
        clsBalCreateRoutineTemplate m_clsBalCreateRoutineTemplate = new clsBalCreateRoutineTemplate();

        try
        {
            m_RetVal = m_clsBalCreateRoutineTemplate.UpdateRoomNo(

                                p_college_id,
                                p_academic_ses_id,
                                p_batch_year,
                                p_course_id,
                                p_stream_id,
                                p_section_id,
                                p_semester_id,
                                p_day_id,
                                p_period_id,
                                p_group_id,
                                p_subject_id,
                                p_room_no
                                );
        }
        catch (Exception ex)
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCreateRoutineTemplate = null;
        }

        return m_RetVal;
    }
}
