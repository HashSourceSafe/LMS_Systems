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
/// Summary description for clsBalBatchCourseSemStreamWiseSection
/// </summary>
namespace BAL
{
    public class clsBalBatchCourseSemStreamWiseSection
    {
        clsBalCommonLib m_clsBalCommonLib;
        public clsBalBatchCourseSemStreamWiseSection()
        {
            m_clsBalCommonLib = new clsBalCommonLib();
        }
        ~clsBalBatchCourseSemStreamWiseSection()
        {
            m_clsBalCommonLib = null;
        }
        public int SaveData(clsBoBatchCourseSemStreamWiseSection p_clsBoBatchCourseSemStreamWiseSection)
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
                    m_clsDalDataHandle.AddSqlParameter("@p_college_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoBatchCourseSemStreamWiseSection.m_college_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_batch_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoBatchCourseSemStreamWiseSection.m_batch_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoBatchCourseSemStreamWiseSection.m_course_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_stream_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoBatchCourseSemStreamWiseSection.m_stream_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_semester_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoBatchCourseSemStreamWiseSection.m_semester_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_section_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoBatchCourseSemStreamWiseSection.m_section_id));

                    m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Batch_Course_Stream_Semester_Wise_Section", 0);

                    if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "Error_No")) > 0)
                    {
                        p_clsBoBatchCourseSemStreamWiseSection.m_error_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "Error_Msg");
                        m_RetVal = 1;
                    }
                    else
                    {
                        p_clsBoBatchCourseSemStreamWiseSection.m_error_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "Error_Msg");
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
    }
}