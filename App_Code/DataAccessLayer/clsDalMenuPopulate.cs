using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;



/// <summary>
/// Summary description for clsDalMenuPopulate
/// </summary>
/// 

namespace DAL
{
    public class clsDalMenuPopulate
    {
        DataTable m_data_table = new DataTable();
        string m_LocalSql;

        public clsDalMenuPopulate()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        ~clsDalMenuPopulate()
        {
            ((IDisposable)m_data_table).Dispose();
        }
                        


        //----------------------------------
        public void PopulateMenu(Menu p_Menu)
        {
            string sql;
            string m_str_user_id;
            string m_str_module_id;

            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();

            try
            {
                m_str_user_id = (string)HttpContext.Current.Session["G_USER_ID"];
                m_str_module_id = (string)HttpContext.Current.Session["G_MODULE_ID"];

                m_clsDalDataHandle.ResetSpParam();
                m_clsDalDataHandle.AddSqlParameter("p_company_id", SqlDbType.Int, 0, 1);
                m_clsDalDataHandle.AddSqlParameter("p_user_id", SqlDbType.Int, 0, m_str_user_id);
                m_clsDalDataHandle.AddSqlParameter("p_module_id", SqlDbType.Int, 0, m_str_module_id);
                m_clsDalDataHandle.GetDataTable(ref m_data_table, "PROC_GET_USER_WISE_MENU");


                PopulateParentNode( p_Menu);
            }
            catch (Exception ex)
            {
            }
            finally
            {
                m_clsDalDataHandle = null;
            }

        }
        //-------------------------------

        //-------------------------------
        private void PopulateParentNode(Menu p_Menu)
        {
            string m_ChildMenuId;
            string m_MenuUrl;
            long nParentRow;
            DataRow[] m_ParentDataRow;
            m_LocalSql = "menu_nGroupCode" + "=0";
            m_ParentDataRow = m_data_table.Select(m_LocalSql);


            for (nParentRow = 0; nParentRow < m_ParentDataRow.Length; nParentRow++)
            {
                MenuItem m_ParentMenuItem = new MenuItem();

    

                m_ParentMenuItem.Text = (string)m_ParentDataRow[nParentRow]["menu_sName"];
                m_ChildMenuId = (string)m_ParentDataRow[nParentRow]["menu_nMenuCode"].ToString();
                m_MenuUrl = (string)m_ParentDataRow[nParentRow]["menu_sUrl"];
                //m_ParentMenuItem.Value = m_ChildMenuId;
                m_ParentMenuItem.Value = m_MenuUrl;

                PopulateChildNode( m_ParentMenuItem, m_ChildMenuId);
                p_Menu.Items.Add(m_ParentMenuItem);
                m_ParentMenuItem = null;
            }
            

        }
        //-------------------------------
        private void PopulateChildNode(MenuItem p_MenuItem,string p_menuId)
        {


            string m_ChildMenuId;
            string m_MenuGroupType;
            string m_MenuUrl;

            long nChildRow;
            DataRow[] m_ChildDataRow;
            m_LocalSql = "menu_nGroupCode" + "=" + p_menuId;
            m_ChildDataRow = m_data_table.Select(m_LocalSql);


            for (nChildRow = 0; nChildRow < m_ChildDataRow.Length; nChildRow++)
            {
                MenuItem m_ChildMenuItem = new MenuItem();



                m_ChildMenuItem.Text = (string)m_ChildDataRow[nChildRow]["menu_sName"];
                m_ChildMenuId = (string)m_ChildDataRow[nChildRow]["menu_nMenuCode"].ToString();
                m_MenuGroupType = (string)m_ChildDataRow[nChildRow]["menu_sGroupType"]; 
                m_MenuUrl = (string)m_ChildDataRow[nChildRow]["menu_sUrl"]; 

                if (m_MenuGroupType == "N")
                {
                    m_ChildMenuItem.Value = m_MenuUrl;
                }
                else
                {
                    m_ChildMenuItem.Value = m_MenuUrl;
                }
                PopulateChildNode( m_ChildMenuItem, m_ChildMenuId);
                p_MenuItem.ChildItems.Add(m_ChildMenuItem);
                m_ChildMenuItem = null;
            }

        }
        //------------------------------

    }
}