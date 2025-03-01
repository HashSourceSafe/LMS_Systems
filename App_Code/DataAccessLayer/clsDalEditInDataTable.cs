using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using BAL;
/// <summary>
/// Summary description for clsDalEditInDataTable
/// </summary>
/// 
namespace DAL
{
    public class clsDalEditInDataTable
    {
        private DataRow[] m_edit_data_row;
        DataRow m_new_data_row;

        private int m_AddEditDelFlag; //1->Add,2->Edit,3->Del
        int m_ErrorCount;

        public clsDalEditInDataTable()
        {
            //
            // TODO: Add constructor logic here
            //
            m_AddEditDelFlag = 0;
            m_ErrorCount = 0;
        }

        ~clsDalEditInDataTable()
        {
            m_edit_data_row = null;
            m_new_data_row = null;
        }

        public int Init(ref DataTable pDataTable, string pFilter, int p_AddEditDelFlag)
        {
            int m_RetVal = 0;
            m_AddEditDelFlag = p_AddEditDelFlag;
            try
            {
                m_edit_data_row = null;
                m_new_data_row = null;

                if (m_AddEditDelFlag == 1) //Add
                {
                    m_new_data_row = pDataTable.NewRow();
                }
                else if (m_AddEditDelFlag == 2) //2->Edit 
                {
                    m_edit_data_row = pDataTable.Select(pFilter);
                    if (m_edit_data_row.Length == 0)
                    {
                        m_RetVal = 1;
                        m_ErrorCount++;
                    }
                    else if (m_edit_data_row.Length > 1)
                    {
                        m_RetVal = 1;
                    }
                }
                else if (m_AddEditDelFlag == 3) //3->del
                {
                    m_edit_data_row = pDataTable.Select(pFilter);
                    if (m_edit_data_row.Length == 0)
                    {
                        m_RetVal = 1;
                        m_ErrorCount++;
                    }
                }
            }
            catch (Exception ex)
            {
                m_RetVal = 1;
                m_ErrorCount++;
            }
            finally
            {
            }

            return m_RetVal;
        }

        public int SynchroniseTaxTable(string pItemTable, string pTaxTable)
        {
            int m_RetVal = 0;
            int m_cnt = 0;
            string m_Filter;
            clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

            DataTable m_DataTableItem = new DataTable();
            DataTable m_DataTableTax = new DataTable();
            m_DataTableItem = (DataTable)HttpContext.Current.Session[pItemTable];
            m_DataTableTax = (DataTable)HttpContext.Current.Session[pTaxTable];
            try
            {

                for (m_cnt = 0; m_cnt <= m_DataTableItem.Rows.Count - 1; m_cnt++)
                {
                    if (m_clsBalCommonLib.ConvertDouble(m_DataTableItem.Rows[m_cnt]["curr_po_qty"]) <= 0)
                    {


                        m_Filter = "item_id=" + m_clsBalCommonLib.ConvertLong(m_DataTableItem.Rows[m_cnt]["item_id"])
                               + " AND item_row_no='" + m_DataTableItem.Rows[m_cnt]["item_row_no"] + "'";

                        if (Init(ref m_DataTableTax, m_Filter, 3) == 0)
                        {

                            BeginEdit();
                            m_RetVal = m_RetVal + DeleteRow(ref m_DataTableTax);
                            EndEdit();
                        }
                        else
                        {
                            m_RetVal++;
                        }


                    }
                }
                HttpContext.Current.Session.Remove(pTaxTable);
                HttpContext.Current.Session[pTaxTable] = m_DataTableTax;

            }
            catch (Exception ex)
            {
                m_RetVal = 1;
                m_ErrorCount++;
            }
            finally
            {
                m_clsBalCommonLib = null;
            }

            return m_RetVal;
        }


        public int BeginEdit()
        {
            int m_RetVal = 0;

            try
            {
                if (m_AddEditDelFlag == 1) //Add
                {
                    m_new_data_row.BeginEdit();
                }
                else if (m_AddEditDelFlag == 2) //Edit
                {
                    m_edit_data_row[0].BeginEdit();
                }
            }
            catch (Exception ex)
            {
                m_RetVal = 1;
                m_ErrorCount++;
            }
            finally
            {
            }
            return m_RetVal;
        }

        public int EndEdit()
        {
            int m_RetVal = 0;

            try
            {
                if (m_AddEditDelFlag == 1) //Add
                {
                    m_new_data_row.EndEdit();
                }
                else if (m_AddEditDelFlag == 2) //Edit
                {
                    m_edit_data_row[0].EndEdit();
                }
            }
            catch (Exception ex)
            {
                m_RetVal = 1;
                m_ErrorCount++;
            }
            finally
            {
            }


            return m_RetVal;
        }

        public int SetData(string p_Fieldname, object p_Value)
        {
            int m_RetVal = 0;

            try
            {
                if (m_AddEditDelFlag == 1) //Add
                {
                    m_new_data_row[p_Fieldname] = p_Value;
                }
                else if (m_AddEditDelFlag == 2) //Edit
                {
                    m_edit_data_row[0][p_Fieldname] = p_Value;
                }
            }
            catch (Exception ex)
            {
                m_RetVal = 1;
                m_ErrorCount++;
            }
            finally
            {
            }


            return m_RetVal;
        }

        public int AddRow(ref DataTable pDataTable)
        {
            int m_RetVal = 0;
            try
            {
                if (m_AddEditDelFlag == 1) //Add
                {
                    pDataTable.Rows.Add(m_new_data_row);
                }
                else if (m_AddEditDelFlag == 2 || m_AddEditDelFlag==3) 
                {
                    m_RetVal =  1; //Error
                }
            }
            catch (Exception ex)
            {
                m_RetVal = 1;
                m_ErrorCount++;
            }
            finally
            {
            }

            return m_RetVal;

        }


        public int DeleteRow(ref DataTable pDataTable)
        {
            int m_RetVal = 0;
            int nRow;
            try
            {
                if (m_AddEditDelFlag == 3) //Delete
                {
                    for (nRow=0; nRow < m_edit_data_row.Length; nRow++)
                    {
                        m_edit_data_row[nRow].Delete();
                    }
                    pDataTable.AcceptChanges();

                }
                else if (m_AddEditDelFlag == 1 || m_AddEditDelFlag == 2)
                {
                    m_RetVal = 1; //Error
                    m_ErrorCount++;
                }
            }
            catch (Exception ex)
            {
                m_RetVal = 1;
                m_ErrorCount++;
            }
            finally
            {
            }

            return m_RetVal;

        }

        public int SetArrayData(string [][]p_Array)
        {
            int m_RetVal = 0;

            try
            {
                for (int iCol = 0; iCol < p_Array.Count(); iCol++)
                {
                    m_RetVal=m_RetVal+SetData(p_Array[iCol][0], p_Array[iCol][1]);
                }
            }
            catch
            {
                m_RetVal=1;
                m_ErrorCount++;
            }
            finally
            {
            }

            return m_RetVal;
        }

        public int GetErrorCount()
        {
            return m_ErrorCount;
        }

        public object GetValue(string p_Field)
        {
            object m_RetStr = "0";
            try
            {
                m_RetStr = m_edit_data_row[0][p_Field];
            }
            catch
            {
                m_RetStr = "0";
            }
            finally
            {
            }
            return m_RetStr;
        }

    }
}