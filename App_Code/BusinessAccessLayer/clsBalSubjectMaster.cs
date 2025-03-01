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
/// Summary description for clsBalSubjectMaster
/// </summary>
namespace BAL
{
    public class clsBalSubjectMaster
    {
        clsBalCommonLib m_clsBalCommonLib;
        public clsBalSubjectMaster()
        {
            m_clsBalCommonLib = new clsBalCommonLib();
            // TODO: Add constructor logic here
            //
        }
        ~clsBalSubjectMaster()
        {
            m_clsBalCommonLib = null;
        }
        public int SaveData(clsBoSubjectMaster p_clsBoSubjectMaster)
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
                    m_clsDalDataHandle.AddSqlParameter("@p_SubjectId", SqlDbType.Decimal, 0, Convert.ToInt16(p_clsBoSubjectMaster.m_subject_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_SubjectName", SqlDbType.VarChar, 0, p_clsBoSubjectMaster.m_subject_name);
                    m_clsDalDataHandle.AddSqlParameter("@p_SubjectShortName", SqlDbType.VarChar, 0, (p_clsBoSubjectMaster.m_sub_short_name));
                    m_clsDalDataHandle.AddSqlParameter("@p_SubjectCode", SqlDbType.VarChar, 0, p_clsBoSubjectMaster.m_subject_code);
                    m_clsDalDataHandle.AddSqlParameter("@p_SubjectIsTheory", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoSubjectMaster.m_redio_theo_prac));
                    m_clsDalDataHandle.AddSqlParameter("@p_UnitFactor", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoSubjectMaster.m_UnitFactor));
                    m_clsDalDataHandle.AddSqlParameter("@p_MaxScore", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoSubjectMaster.m_MaxScore));
                    m_clsDalDataHandle.AddSqlParameter("@p_CreditPoint", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoSubjectMaster.m_CreditPoint));
                    m_clsDalDataHandle.AddSqlParameter("@p_IsActive", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoSubjectMaster.m_is_sub_activ));
                    m_clsDalDataHandle.AddSqlParameter("@p_CourseId", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoSubjectMaster.m_course_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_StreamId", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoSubjectMaster.m_stream_id));
                    m_clsDalDataHandle.AddSqlParameter("@p_SemNo", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoSubjectMaster.m_sem_no));

                    m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Subject_master", 0);

                    if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no")) >= 1)
                    {
                        p_clsBoSubjectMaster.m_err_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_mesg");
                        m_RetVal = 1;
                    }
                    else
                    {
                        p_clsBoSubjectMaster.m_err_msg = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_mesg"); ;
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