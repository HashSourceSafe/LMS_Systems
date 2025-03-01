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
/// Summary description for clsBalBackOfficeMenuRights
/// </summary>
public class clsBalBackOfficeMenuRights
{
	public clsBalBackOfficeMenuRights()
	{
		//
		// TODO: Add constructor logic here
		//
	}

    public int SaveData(clsBoBackOfficeMenuRights p_clsBoBackOfficeMenuRights)
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
                
                m_clsDalDataHandle.AddSqlParameter("@p_College_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoBackOfficeMenuRights.m_college_id));
                m_clsDalDataHandle.AddSqlParameter("@p_user_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoBackOfficeMenuRights.m_user_id));
                m_clsDalDataHandle.AddSqlParameter("@p_module_id", SqlDbType.Int, 0, Convert.ToInt16(p_clsBoBackOfficeMenuRights.m_module_id));
                m_clsDalDataHandle.AddSqlParameter("@p_user_login_name", SqlDbType.VarChar, 0, p_clsBoBackOfficeMenuRights.m_user_login_name);
                m_clsDalDataHandle.AddSqlParameter("@p_menu_det_xml", SqlDbType.Xml, 0, m_xmlDetail.ToString());

                m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_STD_AFF_Backoffice_MenuRights", 0);

                if (Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no")) >= 1)
                {
                    p_clsBoBackOfficeMenuRights.m_menu_id = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_mesg");
                    m_RetVal = 1;
                }
                else
                {
                    p_clsBoBackOfficeMenuRights.m_menu_id = ("SAVED SUCCESSFULLY");
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
        clsXmlBackOfficeMenuRights m_clsXmlBackOfficeMenuRights = new clsXmlBackOfficeMenuRights();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable;
        int nRow;
        try
        {
            string m_Session = "S_POPULATE_MENU";
            m_DataTable = (DataTable)HttpContext.Current.Session[m_Session];

            if (m_DataTable.Rows.Count > 0)
            {
                for (nRow = 0; nRow < m_DataTable.Rows.Count; nRow++)
                {
                    if (Convert.ToDouble(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "APP", 0)) > 0)
                    {
                        m_clsXmlBackOfficeMenuRights.AddBlankRow();
                        m_clsXmlBackOfficeMenuRights.UpdateData("m_menu_is_sel", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "APP", 0));
                        m_clsXmlBackOfficeMenuRights.UpdateData("m_menu_id", m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, nRow, "menu_id", 0));
                    }

                }
            }
            else
            {
                m_clsXmlBackOfficeMenuRights.AddBlankRow();
            }


            p_xmlDetail = m_clsXmlBackOfficeMenuRights.GetXml();
            m_RetVal = m_clsXmlBackOfficeMenuRights.GetErrorNo();
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsXmlBackOfficeMenuRights = null;
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }

        return m_RetVal;
    }
}