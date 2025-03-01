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
/// Summary description for clsBalPeriodMaster
/// </summary>
namespace BAL
{
    public class clsBalPeriodMaster
    {
        clsBalCommonLib m_clsBalCommonLib;
        public clsBalPeriodMaster()
        {
            m_clsBalCommonLib = new clsBalCommonLib();
        }
        ~clsBalPeriodMaster()
        {
            m_clsBalCommonLib = null;
        }
        public int SaveData(clsBoPeriodMaster p_clsBoPeriodMaster)
        {
            int m_RetVal = 0;
            XElement m_xmlDetail = null;
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable = new DataTable();

            try
            {
                if (CreateDetailXml(ref m_xmlDetail) > 0)
                {
                    m_RetVal++;
                }
                if (m_RetVal == 0)
                {
                    //Creating Store Proc
                    m_clsDalDataHandle.ResetSpParam();
                    //m_clsDalDataHandle.AddSqlParameter("@p_Student_Id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoSectionAllotment.m_student_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_College_id", SqlDbType.Int,0, Convert.ToInt16(p_clsBoPeriodMaster.m_college_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_Batch_year", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoPeriodMaster.m_batch_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoPeriodMaster.m_course_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_stream_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoPeriodMaster.m_stream_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_Semester_no", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoPeriodMaster.m_semester_no));
                    m_clsDalDataHandle.AddSqlParameter("@p_Period_det_xml", SqlDbType.Xml, 0, m_xmlDetail.ToString());

                    m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Batch_Course_Stream_Sem_Wise_Period", 0);

                    if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no")) >= 1)
                    {
                        p_clsBoPeriodMaster.m_period_id = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_mesg");
                        m_RetVal = 1;
                    }
                    else
                    {
                        p_clsBoPeriodMaster.m_period_id = ("SAVED SUCCESSFULLY");
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

        private int CreateDetailXml(ref XElement p_xmlDetail)
        {
            int m_RetVal = 0;
            clsXmlPeriodMasterDet m_clsXmlPeriodMasterDet = new clsXmlPeriodMasterDet();
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable;
            int nRow;
            try
            {
                string m_Session = "S_POPULATE_PERIOD_GRID";
                m_DataTable = (DataTable)HttpContext.Current.Session[m_Session];

                if (m_DataTable.Rows.Count > 0)
                {
                    for (nRow = 0; nRow < m_DataTable.Rows.Count; nRow++)
                    {
                        if (Convert.ToDouble(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "App", 0)) > 0)
                        {
                            m_clsXmlPeriodMasterDet.AddBlankRow();
                            m_clsXmlPeriodMasterDet.UpdateData("m_PeriodId", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "Period_id", 0));
                            m_clsXmlPeriodMasterDet.UpdateData("m_PeriodStartTime", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "User_start_time", 1));
                            m_clsXmlPeriodMasterDet.UpdateData("m_PeriodEndTime", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "User_end_time", 1));
                           // m_clsXmlPeriodMasterDet.UpdateData("m_PeriodDisplay", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "m_studentid", 0));
                        }

                    }
                }
                else
                {
                    m_clsXmlPeriodMasterDet.AddBlankRow();
                }


                p_xmlDetail = m_clsXmlPeriodMasterDet.GetXml();
                m_RetVal = m_clsXmlPeriodMasterDet.GetErrorNo();
            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsXmlPeriodMasterDet = null;
                m_clsDalDataHandle = null;
                m_DataTable = null;
            }

            return m_RetVal;
        }
    }
}