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
/// Summary description for clsBalAddVisitingFaculty
/// </summary>
namespace BAL
{
    public class clsBalAddVisitingFaculty
    {
        clsBalCommonLib m_clsBalCommonLib;
        public clsBalAddVisitingFaculty()
        {
            m_clsBalCommonLib = new clsBalCommonLib();
        }

        ~clsBalAddVisitingFaculty()
        {
            m_clsBalCommonLib = null;
        }
        public int SaveData(clsBoAddVisitingFaculty p_clsBoAddVisitingFaculty)
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
                    m_clsDalDataHandle.AddSqlParameter("@p_College_Id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoAddVisitingFaculty.m_college_id));
                    m_clsDalDataHandle.AddSqlParameter("@P_Faculty_Code", SqlDbType.VarChar, 0, (p_clsBoAddVisitingFaculty.m_faculty_code));
                    m_clsDalDataHandle.AddSqlParameter("@p_Faculty_Name", SqlDbType.VarChar, 0, (p_clsBoAddVisitingFaculty.m_faculty_name));
                    m_clsDalDataHandle.AddSqlParameter("@p_Faculty_Sh_Name", SqlDbType.VarChar, 0, (p_clsBoAddVisitingFaculty.m_facul_sh_name));
                    m_clsDalDataHandle.AddSqlParameter("@p_Dept_Id", SqlDbType.Int, 0, (p_clsBoAddVisitingFaculty.m_dept_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_Faculty_Category", SqlDbType.VarChar, 0, "VISITING FACULTY");
                    m_clsDalDataHandle.AddSqlParameter("@p_Faculty_Password", SqlDbType.VarChar, 0, (p_clsBoAddVisitingFaculty.m_faculty_code));
                    m_clsDalDataHandle.AddSqlParameter("@p_Faculty_Desig", SqlDbType.VarChar, 0, (p_clsBoAddVisitingFaculty.m_designation_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_is_edit", SqlDbType.Int, 0, (p_clsBoAddVisitingFaculty.m_is_edit));


                    m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Visiting_Faculty", 0);

                    if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no")) >= 1)// err_no=2 Faculty data allready Exists
                    {
                        p_clsBoAddVisitingFaculty.m_err_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg");
                        p_clsBoAddVisitingFaculty.m_err_no = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no");
                        m_RetVal = 1;
                    }
                    else
                    {
                        p_clsBoAddVisitingFaculty.m_err_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_msg");
                        p_clsBoAddVisitingFaculty.m_err_no = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no");
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