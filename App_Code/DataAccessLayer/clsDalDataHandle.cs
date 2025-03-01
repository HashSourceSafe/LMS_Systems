using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.UI.WebControls;
using System.Collections;
using System.Xml.Linq;


/// <summary>
/// Summary description for clsDalDataHandle
/// </summary>
/// 

namespace DAL
{
    public class clsDalDataHandle
    {
        private ArrayList p_ParamName;
        private ArrayList p_ParamDataType;
        private ArrayList p_ParamValue;
        private ArrayList p_ParamDataLength;

        //----------------------
        public clsDalDataHandle()
        {
            //
            // TODO: Add constructor logic here
            //

            p_ParamName = null;
            p_ParamDataType = null;
            p_ParamValue = null;
            p_ParamDataLength = null;
        }
        //---------------------

        ~clsDalDataHandle()
        {
            p_ParamName = null;
            p_ParamDataType = null;
            p_ParamValue = null;
            p_ParamDataLength = null;
        }




        //---------------------------
        public string GetValueFromDataTable(DataTable p_DataTable, int p_Row, string p_FieldName,int p_IsReturnAsString=1)
        {
            string m_str_ret_val;

            try
            {
                m_str_ret_val = Convert.ToString(p_DataTable.Rows[p_Row][p_FieldName]);
            }
            catch (Exception ex)
            {
                if (p_IsReturnAsString == 0)
                {
                    m_str_ret_val = "-1";
                }
                else if (p_IsReturnAsString == 1)
                {
                    m_str_ret_val = "DATA NOT FOUND";
                }
                else 
                {
                    m_str_ret_val = "DATA NOT FOUND";
                }

            }
            finally
            {
            }

            return m_str_ret_val;
        }
        //---------------------------


        //-------for populating combo box-----------
        public void PopulateComboBox(DropDownList p_DropDown, string p_ValueField, string m_DisplayField, string p_QueryString)
        {
            string m_StrConn = ConfigurationManager.ConnectionStrings["ErpConnectionString"].ToString();
            SqlConnection m_TempConn = new SqlConnection(m_StrConn);
            SqlCommand m_sql_command = new SqlCommand();
            SqlDataReader m_sql_data_reader;


            try
            {
                m_TempConn.Open();

                m_sql_command.CommandText = p_QueryString;
                m_sql_command.Connection = m_TempConn;
                m_sql_command.CommandType = CommandType.Text;
                m_sql_data_reader = m_sql_command.ExecuteReader();

                p_DropDown.DataTextField = m_DisplayField;
                p_DropDown.DataValueField = p_ValueField;
                p_DropDown.DataSource = m_sql_data_reader;
                p_DropDown.DataBind();

                p_DropDown.Items.Insert(0, new ListItem("<--SELECT-->", "0"));


                m_sql_data_reader.Close();
                m_TempConn.Close();
            }
            catch (Exception ex)
            {
                p_DropDown.BackColor = System.Drawing.Color.Red;
            }
            finally
            {
                ((IDisposable)m_TempConn).Dispose();
                ((IDisposable)m_sql_command).Dispose();
            }

        }
        //------------------------


        //-------for populating combo box-----------
        public void PopulateComboBox(DropDownList p_DropDown, string p_ValueField, string m_DisplayField, DataTable p_DataTable)
        {
            try
            {
                p_DropDown.DataValueField = p_ValueField;
                p_DropDown.DataTextField = m_DisplayField;
                p_DropDown.DataSource = p_DataTable;
                p_DropDown.DataBind();

                p_DropDown.Items.Insert(0, new ListItem("<--SELECT-->", "0"));
            }
            catch (Exception ex)
            {
                p_DropDown.BackColor = System.Drawing.Color.Red;
            }
            finally
            {
            }

        }
        //------------------------


        public string GetSessionValueInStr(string p_SessionName)
        {
            string m_SesVal = "ERROR";

            try
            {
                m_SesVal=(string)HttpContext.Current.Session[p_SessionName];
            }
            catch (Exception ex)
            {
                m_SesVal = "ERROR";
            }
            finally
            {
            }

            return m_SesVal;
        }

        public long GetSessionValueInInt(string p_SessionName)
        {
            long m_SesVal = 0;

            try
            {
                m_SesVal =Convert.ToInt64( (string)HttpContext.Current.Session[p_SessionName]);
            }
            catch (Exception ex)
            {
                m_SesVal = 0;
            }
            finally
            {
            }

            return m_SesVal;
        }

        //--------------
        public void ResetSpParam()
        {
            p_ParamName = null;
            p_ParamDataType = null;
            p_ParamDataLength = null;
            p_ParamValue = null;
        }

        public void AddSqlParameter(string pParamName, SqlDbType pParamDataType,int pParamDataLength, object pParamVal)
        {

            try
            {
                if (p_ParamName == null)
                {
                    p_ParamName = new ArrayList();
                    p_ParamDataType = new ArrayList();
                    p_ParamDataLength = new ArrayList();
                    p_ParamValue = new ArrayList();
                }
                p_ParamName.Add(pParamName);
                p_ParamDataType.Add(pParamDataType);
                p_ParamDataLength.Add(pParamDataLength);
                p_ParamValue.Add(pParamVal);
            }
            catch (Exception ex)
            {
            }
            finally
            {
            }

        }

        public string GetDataConnStr()
        {
            string m_RetVal="ERROR";
            try
            {
                long m_BranchId = GetBranchId(); //Retuening College Id

                if (m_BranchId == 3 || m_BranchId == 6 || m_BranchId == 4 || m_BranchId==5)
                {
                    m_RetVal = "ErpConnectionString_Gnit";
                }
                else if (m_BranchId >= 500 && m_BranchId<=503)
                {
                    m_RetVal = "ErpConnectionString_jisu";
                }
                else if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "3" && m_BranchId == 2)
                {
                    m_RetVal = "ErpConnectionString_Nit";
                }
                else if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "4" &&  m_BranchId == 1)
                {
                    m_RetVal = "ErpConnectionString_jis";
                }
                else if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "102" && m_BranchId == 102)
                {
                    m_RetVal = "ErpConnectionString_jis";
                }

                else if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "20" && m_BranchId == 10)
                {
                    m_RetVal = "ErpConnectionString_jis";
                }
                else if (m_BranchId == 7 || m_BranchId == 101)
                {
                    m_RetVal = "ErpConnectionString_surermath";
                }
                else if (m_BranchId == 627)
                {
                    m_RetVal = "ErpConnectionString_Nps";
                }
                else if (m_BranchId == 401)
                
                {
                    m_RetVal = "ErpConnectionString_Asansole";
                }
                else if (m_BranchId >= 610 && m_BranchId<=615)
                {
                    m_RetVal = "ErpConnectionString_Jharkhand";
                }

                //For Abacus
                if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "51" && m_BranchId == 1) //abacus
                {
                    m_RetVal = "ErpConnectionString_Abacus";
                }
                else if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "61" && m_BranchId == 1) //gkc
                {
                    m_RetVal = "ErpConnectionString_Gkcem";
                }
                else if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "62" && m_BranchId == 2) //GMIT
                {
                    m_RetVal = "ErpConnectionString_Gkcem";
                }
                else if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "64" && m_BranchId == 64) //GMIT
                {
                    m_RetVal = "ErpConnectionString_Gkcem";
                }
            }
            catch
            {
                m_RetVal = "ERROR";
            }
            finally
            {
            }
            return m_RetVal;
        }

        //------------------------
        public int GetDataTable(ref DataTable p_DataTable,string p_SpName,int p_IsConnectToMasterDb=0)
        {
            int m_RetVal = 0;
            string m_ConnStrVar="";

            if (p_IsConnectToMasterDb == 1)
            {
                m_ConnStrVar = "ErpConnectionString";
            }
            else
            {
               // m_ConnStrVar = "JisMainUserDBConnectionString"; //GetDataConnStr();
                m_ConnStrVar =GetDataConnStr();
            }

            string m_StrConn = ConfigurationManager.ConnectionStrings[m_ConnStrVar].ToString();
            SqlConnection m_TempConn = new SqlConnection(m_StrConn);
            SqlDataReader m_sql_data_reader;
            SqlCommand m_sql_command = new SqlCommand();
            int iParamCtr;
            try
            {
                m_sql_command.CommandType = CommandType.StoredProcedure;
                m_sql_command.CommandText = p_SpName;
                m_sql_command.CommandTimeout = 300;
                if (p_ParamName != null)
                {
                    for (iParamCtr = 0; iParamCtr < p_ParamName.Count; iParamCtr++)
                    {
                        m_sql_command.Parameters.Add((string)p_ParamName[iParamCtr], (SqlDbType)p_ParamDataType[iParamCtr], (int)p_ParamDataLength[iParamCtr]).Value = p_ParamValue[iParamCtr];
                    }
                }

                
                m_TempConn.Open();
                m_sql_command.Connection = m_TempConn;
                m_sql_data_reader = m_sql_command.ExecuteReader();
                p_DataTable.Clear();
                p_DataTable.Load(m_sql_data_reader);
                m_sql_data_reader.Close();
                m_RetVal = 0;
            }
            catch (Exception ex)
            {
                m_RetVal=1;
            }
            finally
            {
                ((IDisposable)m_TempConn).Dispose();
                ((IDisposable)m_sql_command).Dispose();
                if (m_TempConn.State == ConnectionState.Open)
                {
                    m_TempConn.Close();
                }
                p_ParamName = null;
                p_ParamDataType = null;
                p_ParamValue = null;
                p_ParamDataLength = null;
                m_sql_data_reader = null;
                GC.Collect();
            }
            return m_RetVal;
        }
        //-------------------------

        public void PopulateComboBoxFromSp(DropDownList p_DropDown, string p_ValueField, string m_DisplayField, string p_SpName)
        {
            DataTable m_data_table = new DataTable();

            try
            {
                GetDataTable(ref m_data_table, p_SpName);
                PopulateComboBox(p_DropDown, p_ValueField, m_DisplayField, m_data_table);
            }
            catch (Exception ex)
            {
            }
            finally
            {
                m_data_table = null;
            }
        }

        //-----------
        public int SetButtonRight(ArrayList p_ButArray)
        {
            int m_RetVal = 0;
            DataTable m_UserTable = new DataTable();
            DataRow[] m_UserRow;
            string m_Filter;
            string m_ButId;
            Button m_But;
            
            

            try
            {
                ResetSpParam();
                AddSqlParameter("@p_branch_id", SqlDbType.Int, 0, GetSessionValueInStr("G_BRANCH_ID"));
                AddSqlParameter("@p_module_id", SqlDbType.Int, 0, GetSessionValueInStr("G_MODULE_ID"));
                AddSqlParameter("@p_USER_id", SqlDbType.Float, 0, GetSessionValueInStr("G_MAIN_USER_ID"));
                GetDataTable(ref m_UserTable, "PROC_GET_USER_BUTTON_RIGHTS", 1);

                if (p_ButArray != null)
                {
                    for (int nButRow = 0; nButRow < p_ButArray.Count; nButRow++)
                    {
                        m_But = (Button)p_ButArray[nButRow];
                        m_ButId = m_But.ID.ToString();

                        m_Filter = "but_id='" + m_ButId + "'";
                        m_UserRow = m_UserTable.Select(m_Filter);
                        if (m_UserRow.Length > -1)
                        {
                            if (Convert.ToInt64(m_UserRow[0]["is_app"]) == 1)
                            {
                                m_But.Enabled = true;
                                m_But.CssClass = "cmd_button";
                            }
                            else
                            {
                                m_But.Enabled = false;
                                m_But.CssClass = "cmd_button_disable";
                            }

                            if (GetFinYearId() <= 8)
                            {
                                m_But.Enabled = false;
                                m_But.CssClass = "cmd_button_disable";
                            }
                        }
                        m_But = null;
                    }
                    m_RetVal = 0;
                }
                else
                {
                    m_RetVal = 1;
                }


            }
            catch (Exception ex)
            {
                m_RetVal = 0;
            }
            finally
            {
                m_UserRow = null;
                m_UserTable = null;
                m_But = null;
            }
            return m_RetVal;
        }
        //-----------

        public long GetFinYearId()
        {
            long m_fin_year_id;
            try
            {
                m_fin_year_id = GetSessionValueInInt("G_COMPANY_FIN_YEAR_ID");
            }
            catch
            {
                m_fin_year_id = -1;
            }
            finally
            {
            }

            
            return m_fin_year_id;
        }


        public long GetBranchId()
        {
            long m_branch_id;
            try
            {
                m_branch_id = GetSessionValueInInt("G_COLLEGE_ID");
            }
            catch
            {
                m_branch_id = -1;
            }
            finally
            {
            }


            return m_branch_id;
        }


        public DateTime GetDateYYYYMMDD(string pDate)
        {
            DateTime m_dt_Date = DateTime.Parse("1900/01/01"); 
            string m_str_Date;
            try
            {
                m_dt_Date = DateTime.Parse(pDate);
                m_str_Date = m_dt_Date.ToString("yyyy/MM/dd");
                m_dt_Date = DateTime.Parse(m_str_Date);
            }
            catch
            {
                m_dt_Date = DateTime.Parse("1900/01/01"); 
            }
            finally
            {
            }
            return m_dt_Date;
        }

        public long GetUserId()
        {
            long m_user_id;
            try
            {
                m_user_id = GetSessionValueInInt("G_USER_ID");
            }
            catch
            {
                m_user_id = -1;
            }
            finally
            {
            }

            return m_user_id;
        }

        public long GetMainUserId()
        {
            long m_user_id;
            try
            {
                m_user_id = GetSessionValueInInt("G_MAIN_USER_ID");
            }
            catch
            {
                m_user_id = -1;
            }
            finally
            {
            }

            return m_user_id;
        }


        public int Execute(string p_SpName, int p_IsConnectToMasterDb = 0)
        {
            int m_RetVal = 0;
            string m_ConnStrVar = "";
            if (p_IsConnectToMasterDb == 1)
            {
                m_ConnStrVar = "ErpConnectionString";
            }
            else
            {
                //m_ConnStrVar = "ErpConnectionString"; //GetDataConnStr();
                m_ConnStrVar =GetDataConnStr();
            }


            string m_StrConn = ConfigurationManager.ConnectionStrings[m_ConnStrVar].ToString();
            SqlConnection m_TempConn = new SqlConnection(m_StrConn);
            SqlCommand m_sql_command = new SqlCommand();
            int iParamCtr;
            try
            {
                m_sql_command.CommandType = CommandType.StoredProcedure;
                m_sql_command.CommandText = p_SpName;
                if (p_ParamName != null)
                {
                    for (iParamCtr = 0; iParamCtr < p_ParamName.Count; iParamCtr++)
                    {
                        m_sql_command.Parameters.Add((string)p_ParamName[iParamCtr], (SqlDbType)p_ParamDataType[iParamCtr], (int)p_ParamDataLength[iParamCtr]).Value = p_ParamValue[iParamCtr];
                    }
                }


                m_TempConn.Open();
                m_sql_command.Connection = m_TempConn;
                m_sql_command.ExecuteNonQuery();
                m_RetVal = 0;
            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {
                ((IDisposable)m_TempConn).Dispose();
                ((IDisposable)m_sql_command).Dispose();
                p_ParamName = null;
                p_ParamDataType = null;
                p_ParamValue = null;
                p_ParamDataLength = null;
            }
            return m_RetVal;
        }

        public int DataTableToArray(DataTable p_DataTable, ref string[][] p_Arr, string[] p_field, int p_PageNo, int p_RecCount = 5)
        {
            int m_RetVal = 0;
            int nRow, nCol;
            int nCurrRecCount = 0;
            try
            {
                if (p_DataTable.Rows.Count > 0 && p_DataTable.Columns.Count > 0)
                {
                    p_Arr = new string[p_RecCount][];
                    for (nRow = (p_PageNo * p_RecCount); nRow < p_DataTable.Rows.Count && nCurrRecCount < p_RecCount; nRow++)
                    {
                        //p_Arr[nRow - (p_PageNo * p_RecCount)] = new string[p_DataTable.Columns.Count];
                        p_Arr[nRow - (p_PageNo * p_RecCount)] = new string[p_field.Count()];
                        for (nCol = 0; nCol < p_field.Count(); nCol++)
                        {
                            p_Arr[nRow - (p_PageNo * p_RecCount)][nCol] = Convert.ToString(p_DataTable.Rows[nRow][p_field[nCol]]);
                        }
                        nCurrRecCount++;
                    }

                    for (nRow = nCurrRecCount; nCurrRecCount < p_RecCount; nRow++)
                    {
                        //p_Arr[nRow] = new string[p_DataTable.Columns.Count];
                        p_Arr[nRow] = new string[p_field.Count()];
                        for (nCol = 0; nCol < p_field.Count(); nCol++)
                        {
                            p_Arr[nRow][nCol] = "----";
                        }
                        nCurrRecCount++;
                    }
                }

            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {

            }
            return m_RetVal;
        }

        public int CreateBlankArray(ref string[][] p_Arr,int p_Row,int p_col)
        {
            int m_RetVal = 0;
            int nRow, nCol;
            int nCurrRecCount = 0;
            try
            {
                p_Arr = new string[p_Row][];
                for (nRow = 0; nCurrRecCount < p_Row; nRow++)
                {
                    p_Arr[nRow] = new string[p_col];
                    for (nCol = 0; nCol < p_col; nCol++)
                    {
                        p_Arr[nRow][nCol] = "----";
                    }
                }

            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {

            }
            return m_RetVal;
        }


        public int SaveRecordInDataTable(string p_SessionVarName, string[] p_FilterArr, string[][][] p_RecordArr)
        {
            int m_RetVal = 0;
            int iRow;
            clsDalEditInDataTable m_clsDalEditInDataTable = new clsDalEditInDataTable();
            string m_Filter;
            DataTable m_DataTable;


            try
            {
                m_DataTable = (DataTable) HttpContext.Current.Session[p_SessionVarName];

                for (iRow = 0; iRow < p_FilterArr.Count(); iRow++)
                {
                    m_Filter = p_FilterArr[iRow];

                    if (m_clsDalEditInDataTable.Init(ref m_DataTable, m_Filter, 2) == 0)
                    {

                        m_clsDalEditInDataTable.BeginEdit();
                        m_RetVal = m_RetVal + m_clsDalEditInDataTable.SetArrayData(p_RecordArr[iRow]);
                        m_clsDalEditInDataTable.EndEdit();
                    }
                    else
                    {
                        m_RetVal++;
                    }
                }

            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {
                m_DataTable = null;
                m_clsDalEditInDataTable = null;
            }

            return m_RetVal;
        }

        public int DeleteRecordInDataTable(string p_SessionVarName, string[] p_FilterArr)
        {
            int m_RetVal = 0;
            int iRow;
            clsDalEditInDataTable m_clsDalEditInDataTable = new clsDalEditInDataTable();
            string m_Filter;
            DataTable m_DataTable;


            try
            {
                m_DataTable = (DataTable)HttpContext.Current.Session[p_SessionVarName];


                for (iRow = 0; iRow < p_FilterArr.Count(); iRow++)
                {
                    m_Filter = p_FilterArr[iRow];


                    if (m_clsDalEditInDataTable.Init(ref m_DataTable, m_Filter, 3) == 0)
                    {

                        m_clsDalEditInDataTable.BeginEdit();
                        m_RetVal = m_RetVal + m_clsDalEditInDataTable.DeleteRow(ref m_DataTable);
                        m_clsDalEditInDataTable.EndEdit();
                    }
                    else
                    {
                        m_RetVal++;
                    }
                }

            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {
                m_DataTable = null;
                m_clsDalEditInDataTable = null;
            }

            return m_RetVal;
        }


        //=======================================
    }
}