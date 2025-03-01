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
/// Summary description for clsBalTemporaryDateWiseRoutineCahnge
/// </summary>
namespace BAL
{
    public class clsBalTemporaryDateWiseRoutineCahnge
    {
        clsBalCommonLib m_clsBalCommonLib;
        public clsBalTemporaryDateWiseRoutineCahnge()
        {
            m_clsBalCommonLib = new clsBalCommonLib();
        }
        ~clsBalTemporaryDateWiseRoutineCahnge()
        {
            m_clsBalCommonLib = null;
        }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
        public int SaveDataPreparation(clsBoTemporaryDateWiseRoutineCahnge p_clsBoTemporaryDateWiseRoutineCahnge)
        {
            int m_RetVal = 0;
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable = new DataTable();

            try
            {
               
                if (m_RetVal == 0)
                {
                    //Creating Store Proc
                    m_clsDalDataHandle.ResetSpParam();
                    m_clsDalDataHandle.AddSqlParameter("@P_COLLEGE_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_college_id));
                    m_clsDalDataHandle.AddSqlParameter("@P_USER_ID", SqlDbType.VarChar, 0, (p_clsBoTemporaryDateWiseRoutineCahnge.m_user_id));
                    m_clsDalDataHandle.AddSqlParameter("@P_DEPT_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_g_dept_id));
                    m_clsDalDataHandle.AddSqlParameter("@P_ACTION_VALUE", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_action_value));
                    m_clsDalDataHandle.AddSqlParameter("@P_FROM_FACAULTY_CODE", SqlDbType.VarChar, 0, (p_clsBoTemporaryDateWiseRoutineCahnge.m_from_emph_code));
                    m_clsDalDataHandle.AddSqlParameter("@P_TO_FACAULTY_CODE", SqlDbType.VarChar, 0, (p_clsBoTemporaryDateWiseRoutineCahnge.m_to_emph_code));
                    m_clsDalDataHandle.AddSqlParameter("@P_FROM_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_clsBoTemporaryDateWiseRoutineCahnge.m_from_date));
                    m_clsDalDataHandle.AddSqlParameter("@P_TO_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_clsBoTemporaryDateWiseRoutineCahnge.m_to_date));
                    m_clsDalDataHandle.AddSqlParameter("@P_FROM_PERIOD_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_from_period_id));
                    m_clsDalDataHandle.AddSqlParameter("@P_TO_PERIOD_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_to_period_id));
                    m_clsDalDataHandle.AddSqlParameter("@P_REMARKS", SqlDbType.VarChar, 0, (p_clsBoTemporaryDateWiseRoutineCahnge.m_remarks));
                    m_clsDalDataHandle.AddSqlParameter("@P_STATUS_TYPE", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_change_status_type));

                    m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Temporary_Routine_Change_Preparation", 0);

                    if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no")) > 0)
                    {
                        p_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg");
                        m_RetVal = 1;
                    }
                    else
                    {
                        p_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg");
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
//---------------------------------------------------------------------------------------------------------------------------------------------------
        public int DeleteMainPeriod(clsBoTemporaryDateWiseRoutineCahnge p_clsBoTemporaryDateWiseRoutineCahnge)
        {
            int m_RetVal = 0;
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable = new DataTable();
            XElement m_xmlDeletePeriodDetail = null;
            try
            {
                if (p_clsBoTemporaryDateWiseRoutineCahnge.m_flag == "1")
                {
                    if (CreateDeletePeriodDetailXml(ref m_xmlDeletePeriodDetail) > 0)
                    {
                        m_RetVal++;
                    }
                }
                else if (p_clsBoTemporaryDateWiseRoutineCahnge.m_flag == "2")
                {
                    if (CreateToDeletePeriodDetailXml(ref m_xmlDeletePeriodDetail) > 0)
                    {
                        m_RetVal++;
                    }
                }
                if (m_RetVal == 0)
                {
                    m_clsDalDataHandle.ResetSpParam();
                    m_clsDalDataHandle.AddSqlParameter("@P_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_clsBoTemporaryDateWiseRoutineCahnge.m_from_date));
                    m_clsDalDataHandle.AddSqlParameter("@P_PERIOD_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_from_period_id));
                    m_clsDalDataHandle.AddSqlParameter("@P_FROM_PERIOD_DET_XML", SqlDbType.Xml, 0, m_xmlDeletePeriodDetail.ToString());

                    m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Delete_Period_Main_Detail_Temporary_Routine", 0);

                    if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no")) > 0)
                    {
                        p_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg");
                        p_clsBoTemporaryDateWiseRoutineCahnge.m_error_no = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no");
                        m_RetVal = 1;
                    }
                    else
                    {
                        p_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg");
                        p_clsBoTemporaryDateWiseRoutineCahnge.m_error_no = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no");
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

        private int CreateDeletePeriodDetailXml(ref XElement m_xmlDeletePeriodDetail)
        {
            int m_RetVal = 0;
            clsXmlTempRoutineChagDeletePeriod m_clsXmlTempRoutineChagDeletePeriod = new clsXmlTempRoutineChagDeletePeriod();
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable;
            int nRow;
            try
            {
                string m_Session = "S_POPULATE_APPROVAL_PERIOD_DET_GRID";
                m_DataTable = (DataTable)HttpContext.Current.Session[m_Session];

                if (m_DataTable.Rows.Count > 0)
                {
                    for (nRow = 0; nRow < m_DataTable.Rows.Count; nRow++)
                    {
                        if (Convert.ToDouble(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "APP", 0)) > 0)
                        {
                            m_clsXmlTempRoutineChagDeletePeriod.AddBlankRow();

                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_batch_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "batch_year", 0));
                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_course_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "course_id", 0));
                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_stream_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "stream_id", 0));
                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_section_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "section_id", 0));
                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_semester_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "sem_id", 0));
                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_subject_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "subject_id", 0));
                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_group_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "group_id", 0));
                            
                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_faculty_code", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "faculty_code", 0));
                           
                        }

                    }
                }
                else
                {
                    m_clsXmlTempRoutineChagDeletePeriod.AddBlankRow();
                }


                m_xmlDeletePeriodDetail = m_clsXmlTempRoutineChagDeletePeriod.GetXml();
                m_RetVal = m_clsXmlTempRoutineChagDeletePeriod.GetErrorNo();
            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsXmlTempRoutineChagDeletePeriod = null;
                m_clsDalDataHandle = null;
                m_DataTable = null;
            }

            return m_RetVal;
        }

        private int CreateToDeletePeriodDetailXml(ref XElement m_xmlDeletePeriodDetail)
        {
            int m_RetVal = 0;
            clsXmlTempRoutineChagDeletePeriod m_clsXmlTempRoutineChagDeletePeriod = new clsXmlTempRoutineChagDeletePeriod();
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable;
            int nRow;
            try
            {
                string m_Session = "S_POPULATE_APPROVAL_TO_PERIOD_DET_GRID";
                m_DataTable = (DataTable)HttpContext.Current.Session[m_Session];

                if (m_DataTable.Rows.Count > 0)
                {
                    for (nRow = 0; nRow < m_DataTable.Rows.Count; nRow++)
                    {
                        if (Convert.ToDouble(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "APP", 0)) > 0)
                        {
                            m_clsXmlTempRoutineChagDeletePeriod.AddBlankRow();

                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_batch_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "batch_year", 0));
                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_course_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "course_id", 0));
                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_stream_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "stream_id", 0));
                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_section_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "section_id", 0));
                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_semester_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "sem_id", 0));
                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_subject_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "subject_id", 0));
                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_group_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "group_id", 0));

                            m_clsXmlTempRoutineChagDeletePeriod.UpdateData("m_faculty_code", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "faculty_code", 0));

                        }

                    }
                }
                else
                {
                    m_clsXmlTempRoutineChagDeletePeriod.AddBlankRow();
                }


                m_xmlDeletePeriodDetail = m_clsXmlTempRoutineChagDeletePeriod.GetXml();
                m_RetVal = m_clsXmlTempRoutineChagDeletePeriod.GetErrorNo();
            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsXmlTempRoutineChagDeletePeriod = null;
                m_clsDalDataHandle = null;
                m_DataTable = null;
            }

            return m_RetVal;
        }
//---------------------------------------------------------------------------------------------------------------------------------------------------
        public int AddFacultyPeriod(clsBoTemporaryDateWiseRoutineCahnge p_clsBoTemporaryDateWiseRoutineCahnge)
        {
            int m_RetVal = 0;
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable = new DataTable();
            XElement m_xmlAddFromPeriodDetail = null;
            XElement m_xmlAddToPeriodDetail = null;
            XElement m_xmlFacultyChangeAddFromPeriodDetail = null;
            try
            {
                if (p_clsBoTemporaryDateWiseRoutineCahnge.m_action_value == "4") //-----------------------------------Class Inter Change 
                {

                    if (CreateAddPeriodDetailXml(ref m_xmlAddFromPeriodDetail) > 0)
                    {
                        m_RetVal++;
                    }

                    if (CreateToAddPeriodDetailXml(ref m_xmlAddToPeriodDetail) > 0)
                    {
                        m_RetVal++;
                    }

                    if (m_RetVal == 0)
                    {
                        m_clsDalDataHandle.ResetSpParam();

                        m_clsDalDataHandle.AddSqlParameter("@P_COLLEGE_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_college_id));
                        m_clsDalDataHandle.AddSqlParameter("@p_ACTION_VALUE ", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_action_value));
                        m_clsDalDataHandle.AddSqlParameter("@P_TO_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_clsBoTemporaryDateWiseRoutineCahnge.m_to_date));
                        m_clsDalDataHandle.AddSqlParameter("@P_TO_DAY_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_to_day_id));
                        m_clsDalDataHandle.AddSqlParameter("@P_TO_PERIOD_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_to_period_id));
                        m_clsDalDataHandle.AddSqlParameter("@p_DOC_ID ", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_doc_id));
                        m_clsDalDataHandle.AddSqlParameter("@P_FROM_PERIOD_ID_DET_XML", SqlDbType.Xml, 0, m_xmlAddFromPeriodDetail.ToString());

                        m_clsDalDataHandle.AddSqlParameter("@P_FROM_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_clsBoTemporaryDateWiseRoutineCahnge.m_from_date));
                        m_clsDalDataHandle.AddSqlParameter("@P_FROM_DAY_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_from_day_id));
                        m_clsDalDataHandle.AddSqlParameter("@P_FROM_PERIOD_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_from_period_id));
                        m_clsDalDataHandle.AddSqlParameter("@P_TO_PERIOD_ID_DET_XML", SqlDbType.Xml, 0, m_xmlAddToPeriodDetail.ToString());
                    }

                }
                else if (p_clsBoTemporaryDateWiseRoutineCahnge.m_action_value == "5")//-----------------------Faculty Change
                {
                    if (CreateFacultyChangeAddPeriodDetailXml(p_clsBoTemporaryDateWiseRoutineCahnge,ref m_xmlFacultyChangeAddFromPeriodDetail) > 0)
                    {
                        m_RetVal++;
                    }

                    if (m_RetVal == 0)
                    {
                        m_clsDalDataHandle.ResetSpParam();

                        m_clsDalDataHandle.AddSqlParameter("@p_ACTION_VALUE ", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_action_value));
                        m_clsDalDataHandle.AddSqlParameter("@P_COLLEGE_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_college_id));
                        m_clsDalDataHandle.AddSqlParameter("@P_TO_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_clsBoTemporaryDateWiseRoutineCahnge.m_from_date));
                        m_clsDalDataHandle.AddSqlParameter("@P_TO_DAY_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_from_day_id));
                        m_clsDalDataHandle.AddSqlParameter("@P_TO_PERIOD_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_from_period_id));
                        m_clsDalDataHandle.AddSqlParameter("@p_DOC_ID ", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_doc_id));
                        m_clsDalDataHandle.AddSqlParameter("@P_FROM_PERIOD_ID_DET_XML", SqlDbType.Xml, 0, m_xmlFacultyChangeAddFromPeriodDetail.ToString());

                    }
                }
                else
                {
                    if (CreateAddPeriodDetailXml(ref m_xmlAddFromPeriodDetail) > 0)
                    {
                        m_RetVal++;
                    }

                    if (m_RetVal == 0)
                    {
                        m_clsDalDataHandle.ResetSpParam();

                        m_clsDalDataHandle.AddSqlParameter("@P_COLLEGE_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_college_id));
                        m_clsDalDataHandle.AddSqlParameter("@p_ACTION_VALUE ", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_action_value));
                        m_clsDalDataHandle.AddSqlParameter("@P_TO_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_clsBoTemporaryDateWiseRoutineCahnge.m_to_date));
                        m_clsDalDataHandle.AddSqlParameter("@P_TO_DAY_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_to_day_id));
                        m_clsDalDataHandle.AddSqlParameter("@P_TO_PERIOD_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_to_period_id));
                        m_clsDalDataHandle.AddSqlParameter("@p_DOC_ID ", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoTemporaryDateWiseRoutineCahnge.m_doc_id));
                        m_clsDalDataHandle.AddSqlParameter("@P_FROM_PERIOD_ID_DET_XML", SqlDbType.Xml, 0, m_xmlAddFromPeriodDetail.ToString());
                    }
                }
                m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Add_Period", 0);

                if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no")) > 0)
                {
                    p_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg");
                    p_clsBoTemporaryDateWiseRoutineCahnge.m_error_no = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no");
                    m_RetVal = 1;
                }
                else
                {
                    p_clsBoTemporaryDateWiseRoutineCahnge.m_error_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg");
                    p_clsBoTemporaryDateWiseRoutineCahnge.m_error_no = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no");
                    m_RetVal = 0;
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

        private int CreateAddPeriodDetailXml(ref XElement p_xmlDetail)
        {
            int m_RetVal = 0;
            clsXmlTempRoutineChagPreFromPeriod m_clsXmlTempRoutineChagPreFromPeriod = new clsXmlTempRoutineChagPreFromPeriod();
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable;
            int nRow;
            try
            {
                string m_Session = "S_POPULATE_APPROVAL_PERIOD_DET_GRID";
                m_DataTable = (DataTable)HttpContext.Current.Session[m_Session];

                if (m_DataTable.Rows.Count > 0)
                {
                    for (nRow = 0; nRow < m_DataTable.Rows.Count; nRow++)
                    {
                        if (Convert.ToDouble(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "APP", 0)) > 0)
                        {
                            m_clsXmlTempRoutineChagPreFromPeriod.AddBlankRow();

                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_batch_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "batch_year", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_course_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "course_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_stream_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "stream_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_section_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "section_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_semester_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "sem_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_subject_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "subject_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_group_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "group_id", 0));
                           
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_faculty_code", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "faculty_code", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_faculty_name", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "faculty_name", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_faculty_sh_nam", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "faculty_sht_name", 0));
                        }

                    }
                }
                else
                {
                    m_clsXmlTempRoutineChagPreFromPeriod.AddBlankRow();
                }


                p_xmlDetail = m_clsXmlTempRoutineChagPreFromPeriod.GetXml();
                m_RetVal = m_clsXmlTempRoutineChagPreFromPeriod.GetErrorNo();
            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsXmlTempRoutineChagPreFromPeriod = null;
                m_clsDalDataHandle = null;
                m_DataTable = null;
            }

            return m_RetVal;
        }
        //---------------------------------------------------------------------------------------------------------------------------------------
        private int CreateToAddPeriodDetailXml(ref XElement p_xmlDetail)
        {
            int m_RetVal = 0;
            clsXmlTempRoutineChagPreFromPeriod m_clsXmlTempRoutineChagPreFromPeriod = new clsXmlTempRoutineChagPreFromPeriod();
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable;
            int nRow;
            try
            {
                string m_Session = "S_POPULATE_APPROVAL_TO_PERIOD_DET_GRID";
                m_DataTable = (DataTable)HttpContext.Current.Session[m_Session];

                if (m_DataTable.Rows.Count > 0)
                {
                    for (nRow = 0; nRow < m_DataTable.Rows.Count; nRow++)
                    {
                        if (Convert.ToDouble(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "APP", 0)) > 0)
                        {
                            m_clsXmlTempRoutineChagPreFromPeriod.AddBlankRow();

                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_batch_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "batch_year", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_course_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "course_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_stream_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "stream_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_section_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "section_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_semester_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "sem_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_subject_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "subject_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_group_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "group_id", 0));

                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_faculty_code", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "faculty_code", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_faculty_name", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "faculty_name", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_faculty_sh_nam", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "faculty_sht_name", 0));
                        }

                    }
                }
                else
                {
                    m_clsXmlTempRoutineChagPreFromPeriod.AddBlankRow();
                }


                p_xmlDetail = m_clsXmlTempRoutineChagPreFromPeriod.GetXml();
                m_RetVal = m_clsXmlTempRoutineChagPreFromPeriod.GetErrorNo();
            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsXmlTempRoutineChagPreFromPeriod = null;
                m_clsDalDataHandle = null;
                m_DataTable = null;
            }

            return m_RetVal;
        }

        //-----------------------------------------Xml Use for Faculty Change Faculty Updated from BO------------------------------------------
        private int CreateFacultyChangeAddPeriodDetailXml(clsBoTemporaryDateWiseRoutineCahnge m_clsBoTemporaryDateWiseRoutineCahnge,ref XElement p_xmlDetail)
        {
            int m_RetVal = 0;
            clsXmlTempRoutineChagPreFromPeriod m_clsXmlTempRoutineChagPreFromPeriod = new clsXmlTempRoutineChagPreFromPeriod();
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable;
            int nRow;
            //clsBoTemporaryDateWiseRoutineCahnge m_clsBoTemporaryDateWiseRoutineCahnge = new clsBoTemporaryDateWiseRoutineCahnge();
            try
            {
                string m_Session = "S_POPULATE_APPROVAL_PERIOD_DET_GRID";
                m_DataTable = (DataTable)HttpContext.Current.Session[m_Session];

                if (m_DataTable.Rows.Count > 0)
                {
                    for (nRow = 0; nRow < m_DataTable.Rows.Count; nRow++)
                    {
                        if (Convert.ToDouble(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "APP", 0)) > 0)
                        {
                            m_clsXmlTempRoutineChagPreFromPeriod.AddBlankRow();

                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_batch_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "batch_year", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_course_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "course_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_stream_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "stream_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_section_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "section_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_semester_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "sem_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_subject_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "subject_id", 0));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_group_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "group_id", 0));

                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_faculty_code", (m_clsBoTemporaryDateWiseRoutineCahnge.m_to_emph_code));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_faculty_name", (m_clsBoTemporaryDateWiseRoutineCahnge.m_to_fac_name));
                            m_clsXmlTempRoutineChagPreFromPeriod.UpdateData("m_faculty_sh_nam", (m_clsBoTemporaryDateWiseRoutineCahnge.m_to_fac_sh_name));
                        }

                    }
                }
                else
                {
                    m_clsXmlTempRoutineChagPreFromPeriod.AddBlankRow();
                }


                p_xmlDetail = m_clsXmlTempRoutineChagPreFromPeriod.GetXml();
                m_RetVal = m_clsXmlTempRoutineChagPreFromPeriod.GetErrorNo();
            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsXmlTempRoutineChagPreFromPeriod = null;
                m_clsDalDataHandle = null;
                m_DataTable = null;
            }

            return m_RetVal;
        }
    }
}