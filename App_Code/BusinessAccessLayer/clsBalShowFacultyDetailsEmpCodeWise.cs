using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Web.UI.WebControls;
using BAL;
using DAL;
using BO;
using XMLOBJ;
using System.Xml.Linq;
using System.Collections;
using System.Web.UI;

/// <summary>
/// Summary description for clsBalShowFacultyDetailsEmpCodeWise
/// </summary>
public class clsBalShowFacultyDetailsEmpCodeWise
{
	public clsBalShowFacultyDetailsEmpCodeWise()
	{
		//
		// TODO: Add constructor logic here
		//
	}

    public int SaveStudentAttendance(clsBoShowFacultyDetailsEmpCodeWise p_clsBoShowFacultyDetailsEmpCodeWise)
    {
        int m_RetVal = 0;
        XElement m_xmlStudentDetail = null;
        XElement m_xmlPeriodDetail = null;
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable = new DataTable();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        



        try
        {
            if (CreatePeriodDetailXml(ref m_xmlPeriodDetail) > 0)
            {
                m_RetVal++;
            }
            if (CreateStudentDetailXml(ref m_xmlStudentDetail) > 0)
            {
                m_RetVal++;
            }
            if (m_RetVal == 0)
            {
                //Creating Store Proc
                m_clsDalDataHandle.ResetSpParam();
                m_clsDalDataHandle.AddSqlParameter("@p_college_id", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_college_id));
                m_clsDalDataHandle.AddSqlParameter("@p_attendance_Date", SqlDbType.DateTime, 0,m_clsBalCommonLib.StringToDate(p_clsBoShowFacultyDetailsEmpCodeWise.m_attendance_date));
                m_clsDalDataHandle.AddSqlParameter("@p_attendance_BatchId", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_batch_id));
                m_clsDalDataHandle.AddSqlParameter("@p_attendance_CourseId", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_course_id));
                m_clsDalDataHandle.AddSqlParameter("@p_attendance_StreamId", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_stream_id));
                m_clsDalDataHandle.AddSqlParameter("@p_attendance_SemesterId", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_semester_id));
                m_clsDalDataHandle.AddSqlParameter("@p_attendance_SectionId", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_section_id));
                m_clsDalDataHandle.AddSqlParameter("@p_attendance_GroupId", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_group_id));
                m_clsDalDataHandle.AddSqlParameter("@p_attendance_SubjectId", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_subject_id));
                m_clsDalDataHandle.AddSqlParameter("@p_attendance_facultyCode", SqlDbType.VarChar, 0, p_clsBoShowFacultyDetailsEmpCodeWise.m_faculty_code);
                m_clsDalDataHandle.AddSqlParameter("@p_topic_delivered", SqlDbType.VarChar, 0, p_clsBoShowFacultyDetailsEmpCodeWise.m_topic_delivered);
                m_clsDalDataHandle.AddSqlParameter("@p_period_xml", SqlDbType.Xml, 0, m_xmlPeriodDetail.ToString());
                m_clsDalDataHandle.AddSqlParameter("@p_student_det_xml", SqlDbType.Xml, 0, m_xmlStudentDetail.ToString());

                m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Student_Attendance", 0);

                if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no")) >= 1)
                {
                    p_clsBoShowFacultyDetailsEmpCodeWise.m_attendance_date = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_mesg");
                    m_RetVal = 1;
                }
                else
                {
                    /*Get Id For QR Code*/
                    if (p_clsBoShowFacultyDetailsEmpCodeWise.m_is_gen_qr_code == "1")
                    {
                        m_DataTable = null;
                        m_DataTable = new DataTable();

                        m_clsDalDataHandle.ResetSpParam();
                        m_clsDalDataHandle.AddSqlParameter("@p_college_id", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_college_id));
                        m_clsDalDataHandle.AddSqlParameter("@p_attendance_Date", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_clsBoShowFacultyDetailsEmpCodeWise.m_attendance_date));
                        m_clsDalDataHandle.AddSqlParameter("@p_attendance_BatchId", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_batch_id));
                        m_clsDalDataHandle.AddSqlParameter("@p_attendance_CourseId", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_course_id));
                        m_clsDalDataHandle.AddSqlParameter("@p_attendance_StreamId", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_stream_id));
                        m_clsDalDataHandle.AddSqlParameter("@p_attendance_SemesterId", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_semester_id));
                        m_clsDalDataHandle.AddSqlParameter("@p_attendance_SectionId", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_section_id));
                        m_clsDalDataHandle.AddSqlParameter("@p_attendance_GroupId", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_group_id));
                        m_clsDalDataHandle.AddSqlParameter("@p_attendance_SubjectId", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoShowFacultyDetailsEmpCodeWise.m_subject_id));

                        if (m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_Student_Attendance_Save_Id", 0) == 0)
                        {
                            HttpContext.Current.Session["S_QR_CODE"] = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "qr_code");
                        }
                        else
                        {
                            HttpContext.Current.Session["S_QR_CODE"] = "ERROR";
                        }
                    }
                    /********************/

                    p_clsBoShowFacultyDetailsEmpCodeWise.m_attendance_date = ("SAVED SUCCESSFULLY");
                    m_RetVal = 0;


                }
            }



        }
        catch (Exception ex)
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


    private int CreatePeriodDetailXml(ref XElement P_xmlPeriodDetail)
    {
        int m_RetVal = 0;
        clsXmlShowFacultyDetailsEmpCodeWisePeriodDet m_clsXmlShowFacultyDetailsEmpCodeWisePeriodDet = new clsXmlShowFacultyDetailsEmpCodeWisePeriodDet();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable;
        int nRow;
        try
        {
            string m_Session = "S_POPULATE_ASSOSIATED_PERIOD";
            m_DataTable = (DataTable)HttpContext.Current.Session[m_Session];

            if (m_DataTable.Rows.Count > 0)
            {
                for (nRow = 0; nRow < m_DataTable.Rows.Count; nRow++)
                {
                    if (Convert.ToDouble(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "APP", 0)) > 0)
                    {
                        m_clsXmlShowFacultyDetailsEmpCodeWisePeriodDet.AddBlankRow();
                        m_clsXmlShowFacultyDetailsEmpCodeWisePeriodDet.UpdateData("m_APP", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "APP", 0));
                        m_clsXmlShowFacultyDetailsEmpCodeWisePeriodDet.UpdateData("m_PeriodId", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "PeriodId", 0));
                        m_clsXmlShowFacultyDetailsEmpCodeWisePeriodDet.UpdateData("m_Trans_Id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "Trans_Id", 0));
                    }

                }
            }
            else
            {
                m_clsXmlShowFacultyDetailsEmpCodeWisePeriodDet.AddBlankRow();
            }


            P_xmlPeriodDetail = m_clsXmlShowFacultyDetailsEmpCodeWisePeriodDet.GetXml();
            m_RetVal = m_clsXmlShowFacultyDetailsEmpCodeWisePeriodDet.GetErrorNo();
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsXmlShowFacultyDetailsEmpCodeWisePeriodDet = null;
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }

        return m_RetVal;
    }

    private int CreateStudentDetailXml(ref XElement p_xmlStudentDetail)
    {
        int m_RetVal = 0;
        clsXmlShowFacultyDetailsEmpCodeWiseStudentDet m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet = new clsXmlShowFacultyDetailsEmpCodeWiseStudentDet();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable;
        int nRow;
        try
        {
            string m_Session = "S_POPULATE_STUDENT_DETAIL";
            m_DataTable = (DataTable)HttpContext.Current.Session[m_Session];

            if (m_DataTable.Rows.Count > 0)
            {
                for (nRow = 0; nRow < m_DataTable.Rows.Count; nRow++)
                {
                    if (Convert.ToDouble(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "StudentId", 0)) > 0)
                    {
                        m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.AddBlankRow();
                        m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.UpdateData("m_StudentId", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "StudentId", 0));
                        m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.UpdateData("m_APP", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "APP", 0));
                        m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.UpdateData("m_Penalty", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "Penalty", 0));
                        m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.UpdateData("m_BatchId", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "BatchId", 0));
                        m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.UpdateData("m_CourseId", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "CourseId", 0));
                        m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.UpdateData("m_StreamId", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "StreamId", 0));
                        m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.UpdateData("m_SemesterId", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "SemesterId", 0));
                        m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.UpdateData("m_SectionId", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "SectionId", 0));
                        m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.UpdateData("m_GroupId", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "GroupId", 0));
                        m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.UpdateData("m_SubjectId", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "SubjectId", 0));
                        m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.UpdateData("m_Remarks", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "Remarks", 0));
                    }

                }
            }
            else
            {
                m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.AddBlankRow();
            }


            p_xmlStudentDetail = m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.GetXml();
            m_RetVal = m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet.GetErrorNo();
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsXmlShowFacultyDetailsEmpCodeWiseStudentDet = null;
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }

        return m_RetVal;
    }

    public int SaveLessonPlan(string p_faculty_code,string[][][] p_DataArr)
    {
        int m_RetVal = 0;
        XElement m_XmlLessonPlan = null;
        ClsXmlLessonPlan m_ClsXmlLessonPlan = new ClsXmlLessonPlan();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable = new DataTable();


        string DAY_ID ="0";
        string DAY_DATE ="0";
        string PERIOD_ID ="0";
        string SUBJECT_ID ="0";
        string BATCH = "";
        string COURSE_ID ="0";
        string STREAM_ID ="0";
        string SECTION_ID ="0";
        string SEMESTER_ID ="0";
        string GROUP_ID = "0";
        string IS_RECESS = "0";
        string FACULTY_NAME ="";
        string FACULTY_nKEY_ID ="0";
        string IS_ACTIVE ="0";
        string IS_ACTIVE_DESP ="";
        string Topic ="";


        try
        {

            for (int nRow = 0; nRow < p_DataArr.Length; nRow++)
            {
                if (DAY_ID != "----")
                {
                    DAY_ID = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"DAY_ID");
                    DAY_DATE =m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"DAY_DATE");
                    PERIOD_ID = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"PERIOD_ID");
                    SUBJECT_ID = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"SUBJECT_ID");
                    BATCH = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"BATCH");
                    COURSE_ID = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"COURSE_ID");
                    STREAM_ID = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"STREAM_ID");
                    SECTION_ID = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"SECTION_ID");
                    SEMESTER_ID = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"SEMESTER_ID");
                    GROUP_ID = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"GROUP_ID");
                    IS_RECESS = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"IS_RECESS");
                    FACULTY_NAME = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"FACULTY_NAME");
                    FACULTY_nKEY_ID = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"FACULTY_nKEY_ID");
                    IS_ACTIVE = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"IS_ACTIVE");
                    IS_ACTIVE_DESP = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"IS_ACTIVE_DESP");
                    Topic = m_clsBalCommonLib.GetDataFrom2DArray(p_DataArr[nRow], 0, 1,"Topic");


                    m_ClsXmlLessonPlan.AddBlankRow();
                    m_ClsXmlLessonPlan.UpdateData("DAY_ID",DAY_ID);
                    m_ClsXmlLessonPlan.UpdateData("DAY_DATE", m_clsBalCommonLib.StringToDate(DAY_DATE));
                    m_ClsXmlLessonPlan.UpdateData("PERIOD_ID",PERIOD_ID);
                    m_ClsXmlLessonPlan.UpdateData("SUBJECT_ID",SUBJECT_ID);
                    m_ClsXmlLessonPlan.UpdateData("BATCH",BATCH);
                    m_ClsXmlLessonPlan.UpdateData("COURSE_ID",COURSE_ID);
                    m_ClsXmlLessonPlan.UpdateData("STREAM_ID",STREAM_ID);
                    m_ClsXmlLessonPlan.UpdateData("SECTION_ID",SECTION_ID);
                    m_ClsXmlLessonPlan.UpdateData("SEMESTER_ID",SEMESTER_ID);
                    m_ClsXmlLessonPlan.UpdateData("GROUP_ID",GROUP_ID);
                    m_ClsXmlLessonPlan.UpdateData("IS_RECESS",IS_RECESS);
                    m_ClsXmlLessonPlan.UpdateData("FACULTY_NAME",FACULTY_NAME);
                    m_ClsXmlLessonPlan.UpdateData("FACULTY_nKEY_ID",FACULTY_nKEY_ID);
                    m_ClsXmlLessonPlan.UpdateData("IS_ACTIVE",IS_ACTIVE);
                    m_ClsXmlLessonPlan.UpdateData("IS_ACTIVE_DESP",IS_ACTIVE_DESP);
                    m_ClsXmlLessonPlan.UpdateData("Topic",Topic);

                }
            }
            m_XmlLessonPlan = m_ClsXmlLessonPlan.GetXml();
            m_RetVal = m_ClsXmlLessonPlan.GetErrorNo();

            if (m_RetVal == 0)
            {
                //Creating Store Proc
                m_clsDalDataHandle.ResetSpParam();
                m_clsDalDataHandle.AddSqlParameter("@p_college_id", SqlDbType.Int, 0, HttpContext.Current.Session["G_COLLEGE_ID"].ToString());
                m_clsDalDataHandle.AddSqlParameter("@p_emph_code", SqlDbType.VarChar, 0, p_faculty_code);
                m_clsDalDataHandle.AddSqlParameter("@p_det_xml", SqlDbType.Xml, 0, m_XmlLessonPlan.ToString());
                m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Lesson_plan", 0);
                if (m_RetVal == 0)
                {
                    m_RetVal = Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
                }
            }

        }
        catch (Exception ex)
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



   public int Save_Lesson_Plan_New(
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
                                    string p_syllabus_topic,
                                    string p_syllabus_id,
                                    string p_lecture_no
                                    )
    {
        int m_RetVal = 0;
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable = new DataTable();



        try
        {

            //Creating Store Proc
            m_clsDalDataHandle.ResetSpParam();

            m_clsDalDataHandle.AddSqlParameter("@p_Date", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_att_date));
            m_clsDalDataHandle.AddSqlParameter("@p_Batch", SqlDbType.Int, 0, p_batch_id);
            m_clsDalDataHandle.AddSqlParameter("@p_CourseId", SqlDbType.Int, 0, p_course_id);
            m_clsDalDataHandle.AddSqlParameter("@p_StreamId", SqlDbType.Int, 0, p_stream_id);
            m_clsDalDataHandle.AddSqlParameter("@p_SectionId", SqlDbType.Int, 0, p_section_id);
            m_clsDalDataHandle.AddSqlParameter("@p_SemesterId", SqlDbType.Int, 0, p_semester_id);
            m_clsDalDataHandle.AddSqlParameter("@p_PeriodId", SqlDbType.Int, 0, p_selected_period_id);
            m_clsDalDataHandle.AddSqlParameter("@p_SubjectId", SqlDbType.Decimal, 0, p_subject_id);
            m_clsDalDataHandle.AddSqlParameter("@p_GroupId", SqlDbType.Int, 0, p_group_id);
            m_clsDalDataHandle.AddSqlParameter("@p_FacultyCode", SqlDbType.VarChar, 0, p_emph_code);
            m_clsDalDataHandle.AddSqlParameter("@p_CollegeId", SqlDbType.Int, 0, p_college_id);
            m_clsDalDataHandle.AddSqlParameter("@p_Topic", SqlDbType.VarChar, 0, p_syllabus_topic);
            m_clsDalDataHandle.AddSqlParameter("@p_SubModuleId", SqlDbType.Decimal, 0, p_syllabus_id);
            m_clsDalDataHandle.AddSqlParameter("@p_Lecture", SqlDbType.Int, 0, p_lecture_no);


            m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Lesson_plan_New", 0);
            if (m_RetVal == 0)
            {
                m_RetVal = Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
            }
        }
        catch (Exception ex)
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
       clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
       clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
       DataTable m_DataTable = new DataTable();



       try
       {

           //Creating Store Proc
           m_clsDalDataHandle.ResetSpParam();

           m_clsDalDataHandle.AddSqlParameter("@p_UniqueKeyId", SqlDbType.Decimal, 0, p_unique_key_id);
           m_clsDalDataHandle.AddSqlParameter("@p_Date", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_att_date));
           m_clsDalDataHandle.AddSqlParameter("@p_Batch", SqlDbType.Int, 0, p_batch_id);
           m_clsDalDataHandle.AddSqlParameter("@p_CourseId", SqlDbType.Int, 0, p_course_id);
           m_clsDalDataHandle.AddSqlParameter("@p_StreamId", SqlDbType.Int, 0, p_stream_id);
           m_clsDalDataHandle.AddSqlParameter("@p_SectionId", SqlDbType.Int, 0, p_section_id);
           m_clsDalDataHandle.AddSqlParameter("@p_SemesterId", SqlDbType.Int, 0, p_semester_id);
           m_clsDalDataHandle.AddSqlParameter("@p_PeriodId", SqlDbType.Int, 0, p_selected_period_id);
           m_clsDalDataHandle.AddSqlParameter("@p_SubjectId", SqlDbType.Decimal, 0, p_subject_id);
           m_clsDalDataHandle.AddSqlParameter("@p_GroupId", SqlDbType.Int, 0, p_group_id);
           m_clsDalDataHandle.AddSqlParameter("@p_FacultyCode", SqlDbType.VarChar, 0, p_emph_code);
           m_clsDalDataHandle.AddSqlParameter("@p_CollegeId", SqlDbType.Int, 0, p_college_id);
           m_clsDalDataHandle.AddSqlParameter("@p_ResourceTypeId", SqlDbType.Int, 0, p_resource_type_id);
           m_clsDalDataHandle.AddSqlParameter("@p_Desp", SqlDbType.VarChar, 0, p_resource_desp);
           m_clsDalDataHandle.AddSqlParameter("@p_Link", SqlDbType.VarChar, 0, p_resource_link);


           m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Lesson_plan_Resource", 0);
           if (m_RetVal == 0)
           {
               m_RetVal = Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
           }
       }
       catch (Exception ex)
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



   public int DeleteLessonPlanResource(string p_unique_key_id,
                                    string p_college_id
                                    )
   {
       int m_RetVal = 0;
       clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
       clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
       DataTable m_DataTable = new DataTable();



       try
       {

           //Creating Store Proc
           m_clsDalDataHandle.ResetSpParam();

           m_clsDalDataHandle.AddSqlParameter("@p_UniqueKeyId", SqlDbType.Decimal, 0, p_unique_key_id);
           m_clsDalDataHandle.AddSqlParameter("@p_CollegeId", SqlDbType.Int, 0, p_college_id);


           m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Delete_Lesson_plan_Resource", 0);
           if (m_RetVal == 0)
           {
               m_RetVal = Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
           }
       }
       catch (Exception ex)
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
    //------------------------------------------------------------------
}