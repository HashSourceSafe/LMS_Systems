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
/// Summary description for clsBalGroupAllotment
/// </summary>
namespace BAL
{
    public class clsBalGroupAllotment
    {
        clsBalCommonLib m_clsBalCommonLib;
        public clsBalGroupAllotment()
        {
            m_clsBalCommonLib = new clsBalCommonLib();
        }
        ~clsBalGroupAllotment()
        {
            m_clsBalCommonLib = null;
        }
        public int SaveData(clsBoGroupAllotment clsBoGroupAllotment)
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
                    m_clsDalDataHandle.AddSqlParameter("@p_batch_id", SqlDbType.Int, 0, Convert.ToInt16(clsBoGroupAllotment.m_batch_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.Int, 0, Convert.ToInt16(clsBoGroupAllotment.m_course_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_stream_id", SqlDbType.Int, 0, Convert.ToInt16(clsBoGroupAllotment.m_stream_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_semester_id", SqlDbType.Int, 0, Convert.ToInt16(clsBoGroupAllotment.m_semester_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_section_id", SqlDbType.Int, 0, Convert.ToInt16(clsBoGroupAllotment.m_section_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_group_id", SqlDbType.Int, 0, Convert.ToInt16(clsBoGroupAllotment.m_group_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_subject_id", SqlDbType.Int, 0, Convert.ToInt16(clsBoGroupAllotment.m_subject_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_GroupWiseStudent_det_xml", SqlDbType.Xml, 0, m_xmlDetail.ToString());

                    m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_GroupAllotment", 0);

                    if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no")) >= 1)
                    {
                        clsBoGroupAllotment.m_err_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_mesg");
                        m_RetVal = 1;
                    }
                    else
                    {
                        clsBoGroupAllotment.m_err_msg= ("SAVED SUCCESSFULLY");
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
            clsXmlGroupAllotmentDet m_clsXmlGroupAllotmentDet = new clsXmlGroupAllotmentDet();
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable;
            int nRow;
            try
            {
                string m_Session = "S_POPULATE_SECTION_WISE_STUDENT_GRID";
                m_DataTable = (DataTable)HttpContext.Current.Session[m_Session];

                if (m_DataTable.Rows.Count > 0)
                {
                    for (nRow = 0; nRow < m_DataTable.Rows.Count; nRow++)
                    {
                        if (Convert.ToDouble(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "APP", 0)) > 0)
                        {
                            m_clsXmlGroupAllotmentDet.AddBlankRow();
                            m_clsXmlGroupAllotmentDet.UpdateData("m_is_selected", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "APP", 0));
                            m_clsXmlGroupAllotmentDet.UpdateData("m_student_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "StudentId", 0));
                        }

                    }
                }
                else
                {
                    m_clsXmlGroupAllotmentDet.AddBlankRow();
                }


                p_xmlDetail = m_clsXmlGroupAllotmentDet.GetXml();
                m_RetVal = m_clsXmlGroupAllotmentDet.GetErrorNo();
            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsXmlGroupAllotmentDet = null;
                m_clsDalDataHandle = null;
                m_DataTable = null;
            }

            return m_RetVal;
        }
    }
}