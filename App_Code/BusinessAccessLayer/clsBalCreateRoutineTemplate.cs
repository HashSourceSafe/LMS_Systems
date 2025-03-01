using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Web.UI.WebControls;
using System.Xml.Linq;
using System.Collections;
using BAL;
using DAL;
using BO;
using XMLOBJ;
using System.Web.UI;


/// <summary>
/// Summary description for clsBalCreateRoutineTemplate
/// </summary>
/// 
namespace BAL
{
    public class clsBalCreateRoutineTemplate
    {
        public clsBalCreateRoutineTemplate()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public int Init()
        {
            int m_RetVal = 0;
            DataTable m_DataTable = new DataTable();
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            try
            {

                //faculty
                m_clsDalDataHandle.ResetSpParam();
                m_clsDalDataHandle.AddSqlParameter("@p_college_id", SqlDbType.Int, 0, -1);
                m_clsDalDataHandle.AddSqlParameter("@p_emph_name", SqlDbType.VarChar, 0, "ZZZZZZZ");
                m_clsDalDataHandle.AddSqlParameter("@p_dept_name", SqlDbType.VarChar, 0, "ZZZZZZZ");
                m_RetVal = m_RetVal + m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_Faculty");

                HttpContext.Current.Session["S_SEL_FACULTY"] = m_DataTable;

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

        public int AddFaculty(string p_faculty_code, string p_faculty_name, string p_faculty_short_name,string p_dept)
        {
            int m_RetVal = 0;
            clsDalEditInDataTable m_clsDalEditInDataTable = new clsDalEditInDataTable();
            clsDalDataTableFilter m_clsDalDataTableFilter = new clsDalDataTableFilter();
            DataTable m_DataTable;

            try
            {
                m_DataTable = (DataTable)HttpContext.Current.Session["S_SEL_FACULTY"];

                m_clsDalDataTableFilter.p_Filter = "m_emph_code='" + p_faculty_code +"'";
                if (m_clsDalDataTableFilter.GetDataView(m_DataTable).Count == 0)
                {
                    if (m_clsDalEditInDataTable.Init(ref m_DataTable, "", 1) == 0)
                    {
                        m_clsDalEditInDataTable.BeginEdit();
                        m_clsDalEditInDataTable.SetData("m_sel", "Remove");
                        m_clsDalEditInDataTable.SetData("m_emph_code", p_faculty_code);
                        m_clsDalEditInDataTable.SetData("m_emph_name", p_faculty_name);
                        m_clsDalEditInDataTable.SetData("m_emph_ShortName", p_faculty_short_name);
                        m_clsDalEditInDataTable.SetData("m_emph_dept_name", p_dept);
                        m_clsDalEditInDataTable.SetData("App", 1);
                        m_clsDalEditInDataTable.EndEdit();
                        m_clsDalEditInDataTable.AddRow(ref m_DataTable);
                        HttpContext.Current.Session["S_SEL_FACULTY"] = m_DataTable;
                    }
                }

            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsDalEditInDataTable = null;
                m_clsDalDataTableFilter = null;
                m_DataTable = null;
            }

            return m_RetVal;
        }

        public int RemoveFaculty(string p_faculty_code)
        {
            int m_RetVal = 0;
            string m_Filter;
            clsDalEditInDataTable m_clsDalEditInDataTable = new clsDalEditInDataTable();
            clsDalDataTableFilter m_clsDalDataTableFilter = new clsDalDataTableFilter();
            DataTable m_DataTable;

            try
            {
                m_DataTable = (DataTable)HttpContext.Current.Session["S_SEL_FACULTY"];

                m_Filter = "m_emph_code='" + p_faculty_code + "'";
                m_clsDalDataTableFilter.p_Filter = m_Filter;
                if (m_clsDalDataTableFilter.GetDataView(m_DataTable).Count > 0)
                {
                    if (m_clsDalEditInDataTable.Init(ref m_DataTable, m_Filter, 3) == 0)
                    {
                        m_RetVal = m_RetVal + m_clsDalEditInDataTable.DeleteRow(ref m_DataTable);
                        HttpContext.Current.Session["S_SEL_FACULTY"] = m_DataTable;
                    }
                }

            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsDalEditInDataTable = null;
                m_clsDalDataTableFilter = null;
                m_DataTable = null;
            }

            return m_RetVal;
        }


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
            int nRow;

            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            clsXmlCreateRoutineTemplate m_clsXmlCreateRoutineTemplatePeriod = new clsXmlCreateRoutineTemplate();
            clsXmlCreateRoutineTemplate m_clsXmlCreateRoutineTemplateFaculty = new clsXmlCreateRoutineTemplate();
            DataTable m_DataTableFaculty = new DataTable();
            DataTable m_DataTable = new DataTable();

            try
            {
                //--Routine+period XML
                m_clsXmlCreateRoutineTemplatePeriod.AddBlankRow();
                m_clsXmlCreateRoutineTemplatePeriod.UpdateData("PeriodId", p_period_id);
                m_clsXmlCreateRoutineTemplatePeriod.UpdateData("PeriodName", "-");
                m_RetVal = m_RetVal + m_clsXmlCreateRoutineTemplatePeriod.GetErrorNo();


                //--faculty XML
                m_DataTableFaculty = (DataTable)HttpContext.Current.Session["S_SEL_FACULTY"];
                if (m_DataTableFaculty.Rows.Count > 0)
                {
                    for (nRow = 0; nRow < m_DataTableFaculty.Rows.Count; nRow++)
                    {
                        m_clsXmlCreateRoutineTemplateFaculty.AddBlankRow();
                        m_clsXmlCreateRoutineTemplateFaculty.UpdateData("PeriodId", p_period_id);
                        m_clsXmlCreateRoutineTemplateFaculty.UpdateData("FacultyCode", m_clsDalDataHandle.GetValueFromDataTable(m_DataTableFaculty, nRow, "m_emph_code", 0));
                        m_clsXmlCreateRoutineTemplateFaculty.UpdateData("FacultyName", m_clsDalDataHandle.GetValueFromDataTable(m_DataTableFaculty, nRow, "m_emph_name", 0));
                        m_clsXmlCreateRoutineTemplateFaculty.UpdateData("FacultyShortName", m_clsDalDataHandle.GetValueFromDataTable(m_DataTableFaculty, nRow, "m_emph_ShortName", 0));
                    }
                    m_RetVal = m_RetVal + m_clsXmlCreateRoutineTemplateFaculty.GetErrorNo();
                }
                else
                {
                    m_RetVal = 1;
                }

 
                //Saving Data
                if (m_RetVal == 0)
                {
                    //Creating Store Proc
                    m_clsDalDataHandle.ResetSpParam();

                    m_clsDalDataHandle.AddSqlParameter("@p_CollegeId", SqlDbType.Int, 0, p_college_id);
                    m_clsDalDataHandle.AddSqlParameter("@p_Accademic_Session", SqlDbType.Int, 0, p_academic_ses_id);
                    m_clsDalDataHandle.AddSqlParameter("@p_BatchId", SqlDbType.Int, 0, p_batch_year);
                    m_clsDalDataHandle.AddSqlParameter("@p_CourseId", SqlDbType.Int, 0, p_course_id);
                    m_clsDalDataHandle.AddSqlParameter("@p_StreamId", SqlDbType.Int, 0, p_stream_id);
                    m_clsDalDataHandle.AddSqlParameter("@p_SectionId", SqlDbType.Int, 0, p_section_id);
                    m_clsDalDataHandle.AddSqlParameter("@p_SemesterId", SqlDbType.Int, 0, p_semester_id);
                    m_clsDalDataHandle.AddSqlParameter("@p_DayId", SqlDbType.Int, 0, p_day_id);
                    m_clsDalDataHandle.AddSqlParameter("@p_GroupId", SqlDbType.Int, 0, p_group_id);
                    m_clsDalDataHandle.AddSqlParameter("@p_SubjectId", SqlDbType.Int, 0, p_subject_id);
                    m_clsDalDataHandle.AddSqlParameter("@p_IsRecess", SqlDbType.Int, 0, p_IsRecess);
                    m_clsDalDataHandle.AddSqlParameter("@p_RoomNo", SqlDbType.VarChar, 0, p_room_no);
                    m_clsDalDataHandle.AddSqlParameter("@p_IsNew", SqlDbType.Int, 0, p_IsNew);
                    m_clsDalDataHandle.AddSqlParameter("@p_ChkSemester", SqlDbType.Int, 0, p_sem_type_id);
                    m_clsDalDataHandle.AddSqlParameter("@p_period_xml", SqlDbType.Xml, 0, m_clsXmlCreateRoutineTemplatePeriod.GetXml().ToString());
                    m_clsDalDataHandle.AddSqlParameter("@p_faculty_xml", SqlDbType.Xml, 0, m_clsXmlCreateRoutineTemplateFaculty.GetXml().ToString());

                    m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Routine_Template", 0);
                    if (m_RetVal== 0)
                    {
                            m_RetVal=Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
                    }
                }
            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsXmlCreateRoutineTemplatePeriod = null;
                m_clsXmlCreateRoutineTemplateFaculty = null;
                m_clsDalDataHandle = null;
                m_DataTable = null;
                m_DataTableFaculty = null;
            
            }

            return m_RetVal;
        }


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

            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable = new DataTable();

            try
            {
                //Creating Store Proc
                m_clsDalDataHandle.ResetSpParam();

                m_clsDalDataHandle.AddSqlParameter("@p_CollegeId", SqlDbType.Int, 0, p_college_id);
                m_clsDalDataHandle.AddSqlParameter("@p_Accademic_Session", SqlDbType.Int, 0, p_academic_ses_id);
                m_clsDalDataHandle.AddSqlParameter("@p_BatchId", SqlDbType.Int, 0, p_batch_year);
                m_clsDalDataHandle.AddSqlParameter("@p_CourseId", SqlDbType.Int, 0, p_course_id);
                m_clsDalDataHandle.AddSqlParameter("@p_StreamId", SqlDbType.Int, 0, p_stream_id);
                m_clsDalDataHandle.AddSqlParameter("@p_SectionId", SqlDbType.Int, 0, p_section_id);
                m_clsDalDataHandle.AddSqlParameter("@p_SemesterId", SqlDbType.Int, 0, p_semester_id);
                m_clsDalDataHandle.AddSqlParameter("@p_DayId", SqlDbType.Int, 0, p_day_id);
                m_clsDalDataHandle.AddSqlParameter("@p_PeriodId", SqlDbType.Int, 0, p_period_id);
                m_clsDalDataHandle.AddSqlParameter("@p_SubjectId", SqlDbType.Int, 0, p_subject_id);
                m_clsDalDataHandle.AddSqlParameter("@p_GroupId", SqlDbType.Int, 0, p_group_id);
                m_clsDalDataHandle.AddSqlParameter("@p_FacultyCode", SqlDbType.VarChar, 0, p_faculty_code);


                m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Delete_Routine_Template", 0);
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

            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable = new DataTable();

            try
            {
                //Creating Store Proc
                m_clsDalDataHandle.ResetSpParam();

                m_clsDalDataHandle.AddSqlParameter("@p_CollegeId", SqlDbType.Int, 0, p_college_id);
                m_clsDalDataHandle.AddSqlParameter("@p_Accademic_Session", SqlDbType.Int, 0, p_academic_ses_id);
                m_clsDalDataHandle.AddSqlParameter("@p_BatchId", SqlDbType.Int, 0, p_batch_year);
                m_clsDalDataHandle.AddSqlParameter("@p_CourseId", SqlDbType.Int, 0, p_course_id);
                m_clsDalDataHandle.AddSqlParameter("@p_StreamId", SqlDbType.Int, 0, p_stream_id);
                m_clsDalDataHandle.AddSqlParameter("@p_SectionId", SqlDbType.Int, 0, p_section_id);
                m_clsDalDataHandle.AddSqlParameter("@p_SemesterId", SqlDbType.Int, 0, p_semester_id);
                m_clsDalDataHandle.AddSqlParameter("@p_DayId", SqlDbType.Int, 0, p_day_id);
                m_clsDalDataHandle.AddSqlParameter("@p_PeriodId", SqlDbType.Int, 0, p_period_id);
                m_clsDalDataHandle.AddSqlParameter("@p_SubjectId", SqlDbType.Int, 0, p_subject_id);
                m_clsDalDataHandle.AddSqlParameter("@p_GroupId", SqlDbType.Int, 0, p_group_id);
                m_clsDalDataHandle.AddSqlParameter("@p_room_no", SqlDbType.VarChar, 0, p_room_no);


                m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Update_Room_No", 0);
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


    }

}