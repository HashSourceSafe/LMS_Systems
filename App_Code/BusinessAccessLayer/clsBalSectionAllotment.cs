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
/// Summary description for clsBalSectionAllotment
/// </summary>
namespace BAL
{
    public class clsBalSectionAllotment
    {
        clsBalCommonLib m_clsBalCommonLib;
        public clsBalSectionAllotment()
        {
            m_clsBalCommonLib = new clsBalCommonLib();
            // TODO: Add constructor logic here
            //
        }
        ~clsBalSectionAllotment()
        {
            m_clsBalCommonLib = null;
        }
        public int SaveData(clsBoSectionAllotment p_clsBoSectionAllotment)
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
                    m_clsDalDataHandle.AddSqlParameter("@p_Batch_Id", SqlDbType.VarChar, 0, p_clsBoSectionAllotment.m_batch_id);
                    m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.VarChar, 0, (p_clsBoSectionAllotment.m_course_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_stream_id", SqlDbType.VarChar, 0, p_clsBoSectionAllotment.m_stream_id);
                    m_clsDalDataHandle.AddSqlParameter("@p_Semester_Id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoSectionAllotment.m_semester_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_section_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoSectionAllotment.m_section_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_batch_change_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoSectionAllotment.m_batch_change_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_SectionAllotment_det_xml", SqlDbType.Xml, 0, m_xmlDetail.ToString());

                    m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_SectionAllotment", 0);

                    if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no")) >= 1)
                    {
                        p_clsBoSectionAllotment.m_student_id = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_mesg");
                        m_RetVal = 1;
                    }
                    else
                    {
                        p_clsBoSectionAllotment.m_student_id = ("SAVED SUCCESSFULLY");
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
            clsXmlSectionAllotmentDet m_clsXmlSectionAllotmentDet = new clsXmlSectionAllotmentDet();
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable;
            int nRow;
            try
            {
                string m_Session = "S_POPULATE_STUDENT_SECTION_ALLOTMENT";
                m_DataTable = (DataTable)HttpContext.Current.Session[m_Session];

                if (m_DataTable.Rows.Count > 0)
                {
                    for (nRow = 0; nRow < m_DataTable.Rows.Count; nRow++)
                    {
                        if (Convert.ToDouble(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "APP", 0)) > 0)
                        {
                            m_clsXmlSectionAllotmentDet.AddBlankRow();
                            m_clsXmlSectionAllotmentDet.UpdateData("m_is_selected", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "APP", 0));
                            m_clsXmlSectionAllotmentDet.UpdateData("m_student_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "m_studentid", 0));
                        }

                    }
                }
                else
                {
                    m_clsXmlSectionAllotmentDet.AddBlankRow();
                }


                p_xmlDetail = m_clsXmlSectionAllotmentDet.GetXml();
                m_RetVal = m_clsXmlSectionAllotmentDet.GetErrorNo();
            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsXmlSectionAllotmentDet = null;
                m_clsDalDataHandle = null;
                m_DataTable = null;
            }

            return m_RetVal;
        }
    }
}