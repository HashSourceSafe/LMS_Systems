using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BAL;
using DAL;


public partial class Forms_frmCommonSearchWindow : System.Web.UI.Page
{
    string m_SortField="";

    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
            CheckSession();
            CreateGridColumn();
        }

    }

    private void CreateGridColumn()
    {

        ArrayList m_ArrayFieldName = new ArrayList();
        ArrayList m_ArrayColumnName = new ArrayList();
        ArrayList m_ArrayIsVisible = new ArrayList();
        ArrayList m_ArrayColumnWidth = new ArrayList();


        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        clsCommonSearchWindow m_clsCommonSearchWindow;
        m_clsCommonSearchWindow = (clsCommonSearchWindow)Session["s_clsCommonSearchWindow"];
        try
        {
            //-------------------------------
            string[] m_temp_str;

            //Field name
            m_temp_str = m_clsCommonSearchWindow.m_strFieldName.Split(',');
            foreach (string m_str_val in m_temp_str)
            {
                m_ArrayFieldName.Add(m_str_val);
            }

            //Column name
            m_temp_str = null;
            m_temp_str = m_clsCommonSearchWindow.m_strColumnName.Split(',');
            foreach (string m_str_val in m_temp_str)
            {
                m_ArrayColumnName.Add(m_str_val);
            }

            //Column Visible
            m_temp_str = null;
            m_temp_str = m_clsCommonSearchWindow.m_strIsVisible.Split(',');
            foreach (string m_str_val in m_temp_str)
            {
                m_ArrayIsVisible.Add(m_str_val);
            }

            //Column width
            m_temp_str = null;
            m_temp_str = m_clsCommonSearchWindow.m_strColumnWidth.Split(',');
            foreach (string m_str_val in m_temp_str)
            {
                m_ArrayColumnWidth.Add(m_str_val);
            }

            m_temp_str = null;

            //-------------------------------

            m_grid.DataKeyNames = m_clsCommonSearchWindow.m_DataKeyNames;

            //Adding Dynamic Column
            int iColCount;
            int iComboIndex=0 ;
            for (iColCount = 0; iColCount < m_ArrayFieldName.Count; iColCount++)
            {
                ButtonField m_BoundField = new ButtonField();
                m_BoundField.HeaderText =(string) m_ArrayColumnName[iColCount];
                m_BoundField.DataTextField = (string)m_ArrayFieldName[iColCount];
                m_BoundField.CommandName = "select";
                m_BoundField.SortExpression = (string)m_ArrayFieldName[iColCount]; 
                if ((string)m_ArrayIsVisible[iColCount] == "T")
                {
                    m_BoundField.Visible = true;
                    m_BoundField.HeaderStyle.Width = System.Web.UI.WebControls.Unit.Percentage(Convert.ToInt32(m_ArrayColumnWidth[iColCount]));
                    m_BoundField.ItemStyle.Width = System.Web.UI.WebControls.Unit.Percentage(Convert.ToInt32(m_ArrayColumnWidth[iColCount]));
                    m_BoundField.FooterStyle.Width = System.Web.UI.WebControls.Unit.Percentage(Convert.ToInt32(m_ArrayColumnWidth[iColCount]));

                    
                    cmb_search_list.Items.Insert(iComboIndex, new ListItem((string)m_ArrayColumnName[iColCount], (string)m_ArrayFieldName[iColCount]));
                    iComboIndex++;
                }
                else
                {
                    m_BoundField.Visible = false;
                }


                m_grid.Columns.Add(m_BoundField);
                m_BoundField = null;

                cmb_search_list.SelectedValue = m_clsCommonSearchWindow.m_DefaultSearchField;

            } 
            if (m_clsCommonSearchWindow.m_IsGridpopulateOnLoad == 1)
            {
                m_grid.DataSource = m_clsCommonSearchWindow.m_MasterDataTable;
                m_grid.DataBind();
            }
 
            
            
        }
        catch (Exception ex)
        {
            m_clsBalCommonLib.ShowMessage(m_UpdatePanelHeader, ex.Message);
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsCommonSearchWindow = null;
        }

    }
    protected void cmd_search_Click(object sender, EventArgs e)
    {
        SearchInGrid(false);
    }

    private void SearchInGrid(bool pIsSearchOnKey=false)
    {
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        clsCommonSearchWindow m_clsCommonSearchWindow;
        m_clsCommonSearchWindow = (clsCommonSearchWindow)Session["s_clsCommonSearchWindow"];

        try
        {
            DataView m_data_view = new DataView(m_clsCommonSearchWindow.m_MasterDataTable);

            if (pIsSearchOnKey == false)
            {
                m_data_view.RowFilter = cmb_search_list.SelectedValue + " like '" + ctxt_search.Text + "%'";
            }
            else
            {
                m_data_view.RowFilter = cmb_search_list.SelectedValue + " like '%" + ctxt_search.Text + "%'";
            }
            if (m_SortField == "")
            {
                m_SortField = cmb_search_list.SelectedValue;
            }

            m_data_view.Sort =m_SortField+  " asc";

            //m_grid.PageIndex = 0;
            //m_grid.DataSource = m_data_view;
            m_clsCommonSearchWindow.m_DataView = m_data_view;
            //m_grid.DataBind();
            cntxt_page_no.Value = "0";
            PagingData();

            m_data_view = null;
        }
        catch (Exception ex)
        {
            m_clsBalCommonLib.ShowMessage(m_UpdatePanelGrid, "Error In Filter/Sorting");
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsCommonSearchWindow = null;
        }
        
    }


    protected void cmd_search_key_Click(object sender, EventArgs e)
    {
        SearchInGrid(true);
    }
    protected void m_grid_SelectedIndexChanged(object sender, EventArgs e)
    {
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        clsCommonSearchWindow m_clsCommonSearchWindow;
        m_clsCommonSearchWindow = (clsCommonSearchWindow)Session["s_clsCommonSearchWindow"];
        string m_script="";
        string[] m_temp_str;
        string m_SelVal = "";


        try
        {
            //Field name
            m_temp_str = m_clsCommonSearchWindow.m_strGetFieldName.Split(',');
            foreach (string m_key_val in m_temp_str)
            {
                m_SelVal = m_SelVal + m_clsBalCommonLib.GetSelectedValueFromGridView(m_grid, m_key_val) + ",";
            }
            m_SelVal = m_SelVal.Substring(0, m_SelVal.Length - 1);
            m_script = "SetValueInControl('" + m_clsCommonSearchWindow.m_strParentWindowControlId + "','" + m_SelVal + "','" + m_clsCommonSearchWindow.m_AutoPostBackControl+ "');";
        }
        catch (Exception ex)
        {
            m_script = "window.close();";
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsCommonSearchWindow = null;
        }



        Session.Remove("s_clsCommonSearchWindow");
        System.Web.UI.ScriptManager.RegisterStartupScript(Page, Page.GetType(), "key001", m_script, true);
    }
    protected void m_grid_Sorting(object sender, GridViewSortEventArgs e)
    {
        m_SortField = e.SortExpression;
        SearchInGrid(false);
    }

    private void CheckSession()
    {
        string m_url;
        m_url = Request.ServerVariables["HTTP_REFERER"];
        if (m_url == null)
        {
            Response.Redirect("frmIndex.aspx");
        }
    }

    protected void m_grid_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        clsCommonSearchWindow m_clsCommonSearchWindow;
        try
        {
            m_clsCommonSearchWindow= (clsCommonSearchWindow)Session["s_clsCommonSearchWindow"];
            m_grid.PageIndex = e.NewPageIndex;
            m_grid.DataSource = m_clsCommonSearchWindow.m_DataView;
            m_grid.DataBind();
        }
        catch
        {
        }
        finally
        {
            m_clsCommonSearchWindow=null;
        }

    }
    protected void cmd_close_Click(object sender, EventArgs e)
    {
        Session.Remove("s_clsCommonSearchWindow");
        System.Web.UI.ScriptManager.RegisterStartupScript(Page, Page.GetType(), "key001", "window.close();", true);

    }

    private void PagingData()
    {
        clsCommonSearchWindow m_clsCommonSearchWindow;
        DataTable m_DataTable = new DataTable();
        int MAX_RECORD;
        int nPageNo;
        int nFromRecNo;
        int nToRecNo;
        int nRow = 0;

      
        


        try
        {
            m_clsCommonSearchWindow = (clsCommonSearchWindow)Session["s_clsCommonSearchWindow"];
            MAX_RECORD = m_clsCommonSearchWindow.m_DataView.Count;
            m_DataTable = m_clsCommonSearchWindow.m_MasterDataTable.Clone();

            nPageNo = Convert.ToInt32(cntxt_page_no.Value);
            nFromRecNo = (nPageNo * 10) + 1;
            nToRecNo = nFromRecNo + (10-1);
            if (nToRecNo > MAX_RECORD)
            {
                nToRecNo = MAX_RECORD;
            }
            for (nRow = nFromRecNo; nRow <= nToRecNo; nRow++)
            {
                m_DataTable.Rows.Add(m_clsCommonSearchWindow.m_DataView[nRow-1].Row.ItemArray);
            }

            m_grid.DataSource = m_DataTable;
            m_grid.DataBind();
        }
        catch(Exception ex)
        {
            ctxt_search.Text = ex.Message;
        }
        finally
        {
            m_clsCommonSearchWindow = null;
            m_DataTable = null;
        }
       
    }
    protected void cmd_show_prev_Click(object sender, EventArgs e)
    {
        cntxt_page_no.Value =Convert.ToString( Convert.ToInt32(cntxt_page_no.Value) - 1);
        if (Convert.ToInt32(cntxt_page_no.Value) < 0)
        {
            cntxt_page_no.Value = "0";
        }
        PagingData();
    }
    protected void cmd_show_next_Click(object sender, EventArgs e)
    {
        cntxt_page_no.Value = Convert.ToString(Convert.ToInt32(cntxt_page_no.Value) + 1);
        PagingData();
    }
}   