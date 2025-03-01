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
/// Summary description for clsBalAddSpecialClassDateWise
/// </summary>
namespace BAL
{
    public class clsBalAddSpecialClassDateWise
    {
        clsBalCommonLib m_clsBalCommonLib;
        public clsBalAddSpecialClassDateWise()
        {
            m_clsBalCommonLib = new clsBalCommonLib();
        }

        ~clsBalAddSpecialClassDateWise()
        {
            m_clsBalCommonLib = null;
        }
        public int SaveData(clsBoAddSpecialClassDateWise p_clsBoAddSpecialClassDateWise)
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
                    m_clsDalDataHandle.AddSqlParameter("@p_College_Id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoAddSpecialClassDateWise.m_college_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_Date", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_clsBoAddSpecialClassDateWise.m_selected_date));
                    m_clsDalDataHandle.AddSqlParameter("@p_Batch_Id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoAddSpecialClassDateWise.m_batch_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoAddSpecialClassDateWise.m_course_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_stream_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoAddSpecialClassDateWise.m_stream_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_section_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoAddSpecialClassDateWise.m_section_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_Semester_Id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoAddSpecialClassDateWise.m_semester_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_Period_Id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoAddSpecialClassDateWise.m_selected_period_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_Day_Id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoAddSpecialClassDateWise.m_selected_day_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_Subject_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoAddSpecialClassDateWise.m_subject_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_Group_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoAddSpecialClassDateWise.m_group_id));

                    m_clsDalDataHandle.AddSqlParameter("@p_Faculty_Code", SqlDbType.VarChar, 0,(p_clsBoAddSpecialClassDateWise.m_faculty_code));
                    m_clsDalDataHandle.AddSqlParameter("@p_Faculty_Name", SqlDbType.VarChar, 0,(p_clsBoAddSpecialClassDateWise.m_faculty_name));
                    m_clsDalDataHandle.AddSqlParameter("@p_Faculty_Sh_Name", SqlDbType.VarChar, 0,(p_clsBoAddSpecialClassDateWise.m_facul_sh_name));

                    m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Add_Special_Class", 0);

                    if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no")) >= 1)
                    {
                        p_clsBoAddSpecialClassDateWise.m_err_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_mesg");
                        m_RetVal = 1;
                    }
                    else
                    {
                        p_clsBoAddSpecialClassDateWise.m_err_msg = ("SAVED SUCCESSFULLY");
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