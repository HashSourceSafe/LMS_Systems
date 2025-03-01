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
/// Summary description for clsBalManageUser
/// </summary>
namespace BAL
{
    public class clsBalManageUser
    {
        clsBalCommonLib m_clsBalCommonLib;
        public clsBalManageUser()
        {
            m_clsBalCommonLib = new clsBalCommonLib();
        }

        ~clsBalManageUser()
        {
            m_clsBalCommonLib = null;
        }
        public int SaveData(clsBoManageUser p_clsBoManageUser)
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
                    m_clsDalDataHandle.AddSqlParameter("@p_College_Id", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoManageUser.m_college_id));
                    m_clsDalDataHandle.AddSqlParameter("@P_User_Name", SqlDbType.VarChar, 0, (p_clsBoManageUser.m_user_name));
                    m_clsDalDataHandle.AddSqlParameter("@p_Password", SqlDbType.VarChar, 0, (p_clsBoManageUser.m_pass));
                    m_clsDalDataHandle.AddSqlParameter("@p_Dept_Id", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoManageUser.m_dept_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_Is_Active", SqlDbType.Int, 0, Convert.ToInt32(p_clsBoManageUser.m_is_active_value));
                    m_clsDalDataHandle.AddSqlParameter("@p_User_type", SqlDbType.Int, 0, 1);

                    m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_User", 0);

                    if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no")) >= 1)// err_no=2 Faculty data allready Exists
                    {
                        p_clsBoManageUser.m_err_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg");
                        p_clsBoManageUser.m_err_no = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no");
                        m_RetVal = 1;
                    }
                    else
                    {
                        p_clsBoManageUser.m_err_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg");
                        p_clsBoManageUser.m_err_no = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no");
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