using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DAL;
using System.Data;

/// <summary>
/// Summary description for clsBalLogin
/// </summary>
/// 

namespace BAL
{
    public class clsBalLogin
    {
        //-------constructor----------
        public clsBalLogin()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        //-----------------

        //-------destructor----------
        ~clsBalLogin()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        //-----------------

        public int ValidateLogin(string p_user_id,string p_pass_word)
        {
            int m_RetVal = 0;
            clsDalLogin m_clsDalLogin = new clsDalLogin();

            try
            {

                m_RetVal = m_clsDalLogin.GetLoginInfo(p_user_id, p_pass_word);
            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsDalLogin = null;
            }
            return m_RetVal;
        }



        public int SetCurrentAcademicSession()
        {
            int m_ReturnVal = 0;
            DataTable m_data_table = new DataTable();



            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            try
            {
                m_clsDalDataHandle.AddSqlParameter("@p_name", SqlDbType.VarChar, 0, "%");
                m_clsDalDataHandle.AddSqlParameter("@p_is_current", SqlDbType.Int, 0, 1);
                m_clsDalDataHandle.GetDataTable(ref m_data_table, "Proc_Get_Academic_Session", 1);

                HttpContext.Current.Session["G_ACADEMIC_SESSION_ID"] = m_clsDalDataHandle.GetValueFromDataTable(m_data_table, 0, "Academic_Session_Id", 0);
                HttpContext.Current.Session["G_ACADEMIC_SESSION_NAME"] = m_clsDalDataHandle.GetValueFromDataTable(m_data_table, 0, "Academic_Session_Name", 0);
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