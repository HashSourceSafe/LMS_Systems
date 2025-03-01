using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Web.UI.WebControls;
using BAL;
using DAL;
using BO;

using System.Xml.Linq;
using System.Collections;
using System.Web.UI;

/// <summary>
/// Summary description for clsBalDateWiseRoutineAllocation
/// </summary>
namespace BAL
{
    public class clsBalDateWiseRoutineAllocation
    {
        clsBalCommonLib m_clsBalCommonLib;
        public clsBalDateWiseRoutineAllocation()
        {
            m_clsBalCommonLib = new clsBalCommonLib();
        }
        ~clsBalDateWiseRoutineAllocation()
        {
            m_clsBalCommonLib = null;
        }
        public int SaveData(clsBoDateWiseRoutineAllocation p_clsBoDateWiseRoutineAllocation)
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
                    m_clsDalDataHandle.AddSqlParameter("@P_COLLEGE_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoDateWiseRoutineAllocation.m_college_id));
                    m_clsDalDataHandle.AddSqlParameter("@P_FROM_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_clsBoDateWiseRoutineAllocation.m_from_date));
                    m_clsDalDataHandle.AddSqlParameter("@P_TO_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_clsBoDateWiseRoutineAllocation.m_to_date));
                    m_clsDalDataHandle.AddSqlParameter("@P_BATCH", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoDateWiseRoutineAllocation.m_batch_id));
                    m_clsDalDataHandle.AddSqlParameter("@P_COURSE_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoDateWiseRoutineAllocation.m_course_id));
                    m_clsDalDataHandle.AddSqlParameter("@P_STREAM_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoDateWiseRoutineAllocation.m_stream_id));
                    m_clsDalDataHandle.AddSqlParameter("@P_SEMESTER_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoDateWiseRoutineAllocation.m_semester_id));
                    m_clsDalDataHandle.AddSqlParameter("@P_SECTION_ID", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoDateWiseRoutineAllocation.m_section_id));
                    m_clsDalDataHandle.AddSqlParameter("@P_START_YR_MONTH", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoDateWiseRoutineAllocation.m_start_year_month));
                    m_clsDalDataHandle.AddSqlParameter("@P_END_YR_MONTH", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoDateWiseRoutineAllocation.m_end_year_month));
                    m_clsDalDataHandle.AddSqlParameter("@P_LAST_ATTENDANCE_DATE", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_clsBoDateWiseRoutineAllocation.m_last_attendance_date));

                    m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Date_Wise_Routine_Allotment", 0);

                    if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no")) > 0)
                    {
                        p_clsBoDateWiseRoutineAllocation.m_err_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg");
                        m_RetVal = 1;
                    }
                    else
                    {
                        p_clsBoDateWiseRoutineAllocation.m_err_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg");
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