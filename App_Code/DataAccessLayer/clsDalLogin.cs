using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Collections;
using DAL;


/// <summary>
/// Summary description for clsDalLogin
/// </summary>
/// 

namespace DAL
{
    public class clsDalLogin
    {
        //------------------
        public string display_type;
        public clsDalLogin()
        {
             
            // TODO: Add constructor logic here
            //
        }
        //----------------




        public  int GetLoginInfo(string p_user_id, string p_pass_word)
        {
            int m_ReturnVal=0;
            int m_ErrorNo =0;
            DataTable m_data_table = new DataTable();



            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            try
            {
                m_clsDalDataHandle.AddSqlParameter("@p_User", SqlDbType.VarChar, 250, p_user_id);
                m_clsDalDataHandle.AddSqlParameter("@p_Pass", SqlDbType.VarChar, 250, p_pass_word);
                m_clsDalDataHandle.GetDataTable(ref m_data_table, "Proc_Get_STD_Affairs_User_new", 1);

                HttpContext.Current.Session["G_USER_ID"] = m_clsDalDataHandle.GetValueFromDataTable(m_data_table, 0, "UserId", 0);
                HttpContext.Current.Session["G_USER_NAME"] = m_clsDalDataHandle.GetValueFromDataTable(m_data_table, 0, "UserName", 0);
                HttpContext.Current.Session["G_DEPT_ID"] = m_clsDalDataHandle.GetValueFromDataTable(m_data_table, 0, "DeptId", 0);
                HttpContext.Current.Session["G_DISPLAY_TYPE"] = m_clsDalDataHandle.GetValueFromDataTable(m_data_table, 0, "DisplayType", 0);

                HttpContext.Current.Session["G_COLLEGE_ID"] = m_clsDalDataHandle.GetValueFromDataTable(m_data_table, 0, "CollegeId", 0);
                HttpContext.Current.Session["G_BRANCH_ID"] = m_clsDalDataHandle.GetValueFromDataTable(m_data_table, 0, "Branch_Id", 0);
                HttpContext.Current.Session["G_COLLEGE_NAME"] = m_clsDalDataHandle.GetValueFromDataTable(m_data_table, 0, "CollegeName", 0);

                m_ErrorNo =Convert.ToInt32(m_clsDalDataHandle.GetValueFromDataTable(m_data_table, 0, "err_no", 0));
                HttpContext.Current.Session["G_ERROR_MSG"] = m_clsDalDataHandle.GetValueFromDataTable(m_data_table, 0, "err_mesg", 0);
                HttpContext.Current.Session["G_CURRENT_SEM_TYPE"] = m_clsDalDataHandle.GetValueFromDataTable(m_data_table, 0, "curr_sem_type", 0);

                HttpContext.Current.Session["G_ERROR_NO"] = m_ErrorNo;

                    if (m_ErrorNo == 0)
                    {
                        m_ReturnVal = 0;
                    }
                    else
                    {
                        m_ReturnVal = 1;
                    }
            }
            catch (Exception ex)
            {
                m_ReturnVal = 1;
            }
            finally
            {
                ((IDisposable)m_data_table).Dispose();
            }
            return m_ReturnVal;
        }

        

    }
}