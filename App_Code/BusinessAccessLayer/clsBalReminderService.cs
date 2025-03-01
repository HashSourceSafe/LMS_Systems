using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BAL;
using DAL;
using XMLOBJ;
using System.Data;


/// <summary>
/// Summary description for clsBalReminderService
/// </summary>
/// 
namespace BAL
{
    public class clsBalReminderService
    {
        public clsBalReminderService()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public string GetMessageBody(string p_mesg_id)
        {
            string m_RetVal = "OK";
            DataTable m_DataTable;
            clsDalEditInDataTable m_clsDalEditInDataTable = new clsDalEditInDataTable();
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            int m_ErrNo = 0;
             
            try
            {
                m_DataTable=(DataTable)HttpContext.Current.Session["S_INBOX_LIST"];
                string m_Filter="message_id=" + p_mesg_id;

                m_ErrNo = m_ErrNo + m_clsDalEditInDataTable.Init(ref m_DataTable, m_Filter, 2);
                m_ErrNo = m_ErrNo + m_clsDalEditInDataTable.BeginEdit();
                m_ErrNo = m_ErrNo + m_clsDalEditInDataTable.SetData("status", 1);
                m_ErrNo = m_ErrNo + m_clsDalEditInDataTable.EndEdit();

                if (m_ErrNo > 0)
                {
                    m_RetVal = "ERROR";
                }
                else
                {
                    m_DataTable = null;
                    m_DataTable = new DataTable();
                    m_clsDalDataHandle.ResetSpParam();
                    m_clsDalDataHandle.AddSqlParameter("@p_Key_Id", SqlDbType.Float, 0, p_mesg_id);
                    m_clsDalDataHandle.AddSqlParameter("@p_user_id", SqlDbType.Float, 0, m_clsDalDataHandle.GetMainUserId());
                    m_ErrNo = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Show_Message_Body", 1);
                    if (m_ErrNo > 0)
                    {
                        m_RetVal = "ERROR";
                    }
                    else
                    {
                        m_RetVal = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable,0, "mesg_body", 1);
                    }

                }
            }
            catch
            {
                m_RetVal = "ERROR";
            }
            finally
            {
                m_DataTable = null;
                m_clsDalEditInDataTable = null;
                m_clsDalDataHandle = null;
            }

            return m_RetVal;
        }

        public int SaveUserMessage(string p_mail_to_id, string p_subject, string p_body,string p_mesg_type)
        {
            int m_RetVal = 0;
            DataTable m_DataTable=new DataTable();
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();

            try
            {
                m_clsDalDataHandle.ResetSpParam();
                m_clsDalDataHandle.AddSqlParameter("@p_user_id", SqlDbType.Float, 0, m_clsDalDataHandle.GetMainUserId());
                m_clsDalDataHandle.AddSqlParameter("@p_to_user_id", SqlDbType.VarChar, 0, p_mail_to_id);
                m_clsDalDataHandle.AddSqlParameter("@p_header_text", SqlDbType.VarChar, 0, p_subject);
                m_clsDalDataHandle.AddSqlParameter("@p_body_text", SqlDbType.VarChar, 0, p_body);
                m_clsDalDataHandle.AddSqlParameter("@p_mesg_type", SqlDbType.Int, 0, p_mesg_type);
                m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Reminder_To_User", 1);
                if (m_RetVal == 0)
                {
                    m_RetVal = System.Convert.ToInt16( m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no", 0));
                }
            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {
                m_DataTable = null;
                m_clsDalDataHandle = null;
            }

            return m_RetVal;
        }

        public int SaveActivityStatus(string p_mesg_id, string p_stat, string p_remarks)
        {
            int m_RetVal = 0;
            DataTable m_DataTable=new DataTable();
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();

            try
            {
                    m_clsDalDataHandle.ResetSpParam();
                    m_clsDalDataHandle.AddSqlParameter("@p_Key_Id", SqlDbType.Float, 0, p_mesg_id);
                    m_clsDalDataHandle.AddSqlParameter("@p_user_id", SqlDbType.Float, 0, m_clsDalDataHandle.GetMainUserId());
                    m_clsDalDataHandle.AddSqlParameter("@p_remarks", SqlDbType.VarChar, 0, p_remarks);
                    m_clsDalDataHandle.AddSqlParameter("@p_stat", SqlDbType.Int, 0, p_stat);

                    m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Message_Stat", 1);
                    if (m_RetVal == 0)
                    {
                        m_RetVal =Convert.ToInt16( m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no", 0));                            
                    }
                
            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {
                m_DataTable = null;
                m_clsDalDataHandle = null;
            }

            return m_RetVal;
        }


    }
}