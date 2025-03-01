using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Web;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using DAL;


/// <summary>
/// Summary description for clsBalCommonLib
/// </summary>
/// 

namespace BAL
{
    public class clsBalCommonLib
    {
        public clsBalCommonLib()
        {
            //
            // TODO: Add constructor logic here
            //
            //CheckSession();
        }

        public void CheckSession()
        {
            try
            {

                if (HttpContext.Current.Session["G_SESSION_ID"] == null)
                {
                    HttpContext.Current.Response.Redirect("frmIndex.aspx");
                }
            }
            catch
            {
                HttpContext.Current.Response.Redirect("frmIndex.aspx");
            }
            finally
            {
            }
        }



        //---------------------------------
        //it will display the value of passed
        //row & col index of gridview if the column
        //is set visible true in design mode
        //---------------------------------
        public string GetValueFromGridView(GridView p_GridView, int p_RowIndex, int p_ColIndex)
        {
            string m_StrValue = "";


            GridViewRow m_GridRow;

            try
            {
                m_GridRow = p_GridView.Rows[p_RowIndex];
                m_StrValue = m_GridRow.Cells[p_ColIndex].Text;
            }
            catch (Exception ex)
            {
                m_StrValue = "Error";
            }
            finally
            {

            }


            return m_StrValue;
        }
        //---------------------------------

        //---------------------------------
        //it will display the value of selected
        //row where DataKeyNames set in design 
        //mode
        //---------------------------------

        public string GetValueFromGridView(GridView p_GridView, int p_RowIndex, string m_KeyName)
        {
            DataKey m_DataKey;
            string m_StrValue = "";
            try
            {
                m_DataKey = p_GridView.DataKeys[p_RowIndex];
                m_StrValue = m_DataKey[m_KeyName].ToString();
            }
            catch (Exception ex)
            {
                m_StrValue = "Error";
            }
            finally
            {
                m_DataKey = null;
            }

            return m_StrValue;
        }


        public string GetSelectedValueFromGridView(GridView p_GridView, string m_KeyName)
        {

            DataKey m_DataKey;
            string m_StrValue = "";
            try
            {
                m_DataKey = p_GridView.DataKeys[p_GridView.SelectedIndex];
                m_StrValue = m_DataKey[m_KeyName].ToString();
            }
            catch (Exception ex)
            {
                m_StrValue = "Error";
            }
            finally
            {
                m_DataKey = null;
            }

            return m_StrValue;
        }
        //---------------------------------

        //---------------------------------
        public string OpenUrl(string p_Url, bool p_Flag = true)
        {
            string m_Url = "#";
            string m_Param;
            //m_Param = "height=768,width=1024,location=0,menubar=0,resizable=0,status=0,titlebar=0,menubar=0,scrollbars=1";
            m_Param = "location=0,menubar=0,resizable=0,status=0,titlebar=0,menubar=0,scrollbars=1";
            try
            {
                m_Url = "<script type='text/javascript'>\n";
                if (p_Flag == true)
                {
                    m_Url = m_Url + "window.open('" + p_Url + "','_blank','" + m_Param + "')\n";
                }
                else
                {
                    m_Url = m_Url + "window.open('" + p_Url + "','_self','" + m_Param + "')\n";
                }
                m_Url = m_Url + "</script>";
            }
            catch (Exception ex)
            {
                m_Url = "#";
            }
            finally
            {
            }


            return m_Url;
        }

        //---------------------------------

        //----------------------------
        public void IsSessionRunning()
        {
            /*bool m_Value = false;
            string m_current_session_id;
            string m_hold_session_id;
            long m_current_user_id;
            
            int m_RetVal;
            clsDalLogin m_clsDalLogin = new clsDalLogin();
            string m_user_name;
            string m_pass_word;


            try
            {
                m_user_name = (string)HttpContext.Current.Session["G_USER_NAME"].ToString();
                m_pass_word = (string)HttpContext.Current.Session["G_PASS_WORD"].ToString();

                m_current_session_id = HttpContext.Current.Session.SessionID;
                m_hold_session_id = (string)HttpContext.Current.Session["G_SESSION_ID"].ToString();
                
                

                m_current_user_id =Convert.ToInt64( (string)HttpContext.Current.Session["G_MAIN_USER_ID"].ToString());

                if (m_current_session_id == m_hold_session_id && m_current_user_id>0)
                {
                    m_Value = true;
                }
                else
                {
                    m_Value = false;
                }

                m_RetVal = m_clsDalLogin.GetLoginInfo(m_user_name, m_pass_word);
                if (m_RetVal == 0)
                {
                    m_Value = true;
                }
                else
                {
                    m_Value = false;
                }


            }
            catch (Exception ex)
            {
                m_Value = false;
            }
            finally
            {
                m_clsDalLogin = null;
                if (m_Value == false)
                {
                    HttpContext.Current.Response.Redirect("frmIndex.aspx");
                }
            }*/
        }
        //---------------------------

        //-------for populating combo box-----------
        public void PopulateComboBox(DropDownList p_DropDown, string p_ValueField, string m_DisplayField, DataTable p_DataTable, string p_Filter = "", string p_Sort = "")
        {
            DataView m_DataView;
            try
            {
                m_DataView = new DataView(p_DataTable);
                m_DataView.RowFilter = p_Filter;
                m_DataView.Sort = p_Sort;

                p_DropDown.DataValueField = p_ValueField;
                p_DropDown.DataTextField = m_DisplayField;
                p_DropDown.DataSource = m_DataView;
                p_DropDown.DataBind();

                p_DropDown.Items.Insert(0, new ListItem("<--SELECT-->", "0"));
            }
            catch (Exception ex)
            {
                p_DropDown.BackColor = System.Drawing.Color.Red;
            }
            finally
            {
                m_DataView = null;
            }

        }
        //------------------------




        public DateTime StringToDate(string p_date)
        {
            int dd;
            int mm;
            int yyyy;
            DateTime dt;
            try
            {
                //0123456789
                //dd/mm/yyyy
                dd = Convert.ToInt16(p_date.Substring(0, 2));
                mm = Convert.ToInt16(p_date.Substring(3, 2));
                yyyy = Convert.ToInt16(p_date.Substring(6, 4));
                dt = new DateTime(yyyy, mm, dd);
            }
            catch (Exception ex)
            {
                dt = new DateTime(1900, 1, 1);
            }
            finally
            {
            }
            return dt;
        }

        public string ConvertToDate(string p_date)
        {
            DateTime dt = new DateTime(1900, 1, 1);
            try
            {
                dt = Convert.ToDateTime(p_date);
            }
            catch (Exception ex)
            {
                dt = new DateTime(1900, 1, 1);
            }
            finally
            {
            }
            return dt.ToString("dd/MM/yyyy", CultureInfo.InvariantCulture);
        }


        public bool IsDate(string p_date, bool p_ChkFinYear = false)
        {
            bool m_RetFlg = true;


            try
            {

                DateTime dt = StringToDate(p_date);
                if (dt.Equals("01/01/1900") == true)
                {
                    m_RetFlg = false;
                }
            }
            catch (Exception ex)
            {
                m_RetFlg = false;
            }
            finally
            {
            }

            if (m_RetFlg == true && p_ChkFinYear == true)
            {
                try
                {
                    string m_FromFinDate;
                    string m_ToFinDate;
                    m_FromFinDate = HttpContext.Current.Session["G_FROM_FIN_YEAR_DATE"].ToString();
                    m_ToFinDate = HttpContext.Current.Session["G_TO_FIN_YEAR_DATE"].ToString();

                    DateTime m_curr_date = StringToDate(p_date);
                    DateTime m_from_date = StringToDate(m_FromFinDate);
                    DateTime m_to_date = StringToDate(m_ToFinDate);

                    if (m_curr_date.Equals("01/01/1900") == true)
                    {
                        m_RetFlg = false;
                    }

                    if (m_from_date.Equals("01/01/1900") == true)
                    {
                        m_RetFlg = false;
                    }

                    if (m_to_date.Equals("01/01/1900") == true)
                    {
                        m_RetFlg = false;
                    }

                    if (m_curr_date < m_from_date)
                    {
                        m_RetFlg = false;
                    }

                    if (m_curr_date > m_to_date)
                    {
                        m_RetFlg = false;
                    }
                }
                catch (Exception ex)
                {
                    m_RetFlg = false;
                }
                finally
                {
                }
            }

            return m_RetFlg;
        }

        public string GetSessionValueInStr(string p_SessionName)
        {
            string m_SesVal = "ERROR";

            try
            {
                m_SesVal = (string)HttpContext.Current.Session[p_SessionName];
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
                m_SesVal = Convert.ToInt64((string)HttpContext.Current.Session[p_SessionName]);
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

        public string GetFromFinYearDate()
        {
            string m_Date;
            try
            {
                m_Date = HttpContext.Current.Session["G_FROM_FIN_YEAR_DATE"].ToString();
            }
            catch
            {
                m_Date = "01/01/1900";
            }
            finally
            {
            }

            return m_Date;
        }

        public string GetToFinYearDate()
        {
            string m_Date;
            try
            {
                m_Date = HttpContext.Current.Session["G_TO_FIN_YEAR_DATE"].ToString();
            }
            catch
            {
                m_Date = "01/01/1900";
            }
            finally
            {
            }

            return m_Date;
        }

        public string GetDateYyyyMmDd(string p_date)
        {
            string m_str_date = "00000000";

            try
            {
                DateTime dt = StringToDate(p_date);
                m_str_date = Convert.ToString(DateTime.Now.Year).PadLeft(4, '0') +
                    Convert.ToString(DateTime.Now.Month).PadLeft(2, '0') +
                    Convert.ToString(DateTime.Now.Day).PadLeft(2, '0');

            }
            catch
            {
                m_str_date = "00000000";
            }
            finally
            {
            }

            return m_str_date;
        }

        public void ShowMessage(System.Web.UI.UpdatePanel p_Panel, string m_Mesg)
        {
            string m_script;
            m_script = "window.alert('" + m_Mesg + "');";
            System.Web.UI.ScriptManager.RegisterStartupScript(p_Panel, p_Panel.GetType(), "key001", m_script, true);
        }

        public double ConvertDouble(object m_Val)
        {
            double m_RetVal = 0;
            try
            {
                m_RetVal = Convert.ToDouble(m_Val);
            }
            catch
            {
                m_RetVal = 0;
            }
            finally
            {
            }
            return m_RetVal;
        }

        public long ConvertLong(object m_Val)
        {
            long m_RetVal = 0;
            try
            {
                m_RetVal = Convert.ToInt64(m_Val);
            }
            catch
            {
                m_RetVal = 0;
            }
            finally
            {
            }
            return m_RetVal;
        }

        public int ConvertInt(object m_Val)
        {
            int m_RetVal = 0;
            try
            {
                m_RetVal = Convert.ToInt16(m_Val);
            }
            catch
            {
                m_RetVal = 0;
            }
            finally
            {
            }
            return m_RetVal;
        }

        public string ConvertString(object m_Val)
        {
            string m_RetVal = "";
            try
            {
                m_RetVal = Convert.ToString(m_Val);
            }
            catch
            {
                m_RetVal = "";
            }
            finally
            {
            }
            return m_RetVal;
        }


        public void ShowPredefineMesg(System.Web.UI.UpdatePanel p_Panel)
        {
            string m_script;
            m_script = "ShowSearchWindow('frmMessageBox.aspx',200,400,300,300);";
            System.Web.UI.ScriptManager.RegisterStartupScript(p_Panel, p_Panel.GetType(), "key001", m_script, true);
        }

        public void ShowPredefineMesg(System.Web.UI.Page p_Page)
        {
            string m_script;
            m_script = "ShowSearchWindow('frmMessageBox.aspx',200,400,300,300);";
            System.Web.UI.ScriptManager.RegisterStartupScript(p_Page, p_Page.GetType(), "key001", m_script, true);
        }

        public void ShowCurrentMesg(System.Web.UI.UpdatePanel p_Panel, string p_Mesg)
        {
            HttpContext.Current.Session["G_MESSAGE"] = "";
            HttpContext.Current.Session["G_MESSAGE"] = p_Mesg;
            string m_script;
            m_script = "ShowSearchWindow('frmMessageBox.aspx',200,400,300,300);";
            System.Web.UI.ScriptManager.RegisterStartupScript(p_Panel, p_Panel.GetType(), "key001", m_script, true);
        }

        public void ShowCurrentMesg(System.Web.UI.Page p_Page, string p_Mesg)
        {
            HttpContext.Current.Session["G_MESSAGE"] = "";
            HttpContext.Current.Session["G_MESSAGE"] = p_Mesg;
            string m_script;
            m_script = "ShowSearchWindow('frmMessageBox.aspx',200,400,300,300);";
            System.Web.UI.ScriptManager.RegisterStartupScript(p_Page, p_Page.GetType(), "key001", m_script, true);
        }

        public string DateToString(DateTime p_Date)
        {
            string m_RetDate;
            try
            {
                m_RetDate = p_Date.ToString("dd/MM/yyyy", CultureInfo.InvariantCulture);
            }
            catch
            {
                m_RetDate = "01/01/1900";
            }
            finally
            {
            }
            return m_RetDate;
        }

        public string SetCurrentDate()
        {
            string m_RetDate;
            try
            {
                DateTime m_curr_date, m_to_fin_year_date;
                m_curr_date = StringToDate(DateTime.Now.ToString("dd/MM/yyyy"));
                m_to_fin_year_date = StringToDate(GetToFinYearDate());
                if (m_curr_date > m_to_fin_year_date)
                {
                    m_RetDate = m_to_fin_year_date.ToString("dd/MM/yyyy", CultureInfo.InvariantCulture);
                }
                else
                {
                    m_RetDate = m_curr_date.ToString("dd/MM/yyyy", CultureInfo.InvariantCulture);
                }
            }
            catch (Exception ex)
            {
                m_RetDate = "01/01/1900";
            }
            finally
            {
            }


            return m_RetDate;
        }

        public void CreateXmlElement(XElement p_ParentElement, string p_ChildName, object p_Value)
        {
            XElement m_Element;
            try
            {
                m_Element = new XElement(p_ChildName, p_Value);
                p_ParentElement.Add(m_Element);
            }
            catch (Exception ex)
            {
            }
            finally
            {
                m_Element = null;
            }
        }

        public DateTime InitDate()
        {
            return StringToDate("01/01/1900");
        }

        public void SetMessage(string p_Mesg)
        {
            try
            {
                HttpContext.Current.Session["G_MESSAGE"] = p_Mesg;
            }
            catch
            {
            }
            finally
            {
            }

        }

        public void AddMessage(string p_Mesg)
        {
            try
            {
                HttpContext.Current.Session["G_MESSAGE"] = HttpContext.Current.Session["G_MESSAGE"] + "@@" + p_Mesg;
            }
            catch
            {
            }
            finally
            {
            }

        }

        public string GetUniqueRowNo()
        {
            string m_strRow;

            try
            {
                m_strRow = Convert.ToString(DateTime.Now.Year).PadLeft(4, '0') +
                    Convert.ToString(DateTime.Now.Month).PadLeft(2, '0') +
                    Convert.ToString(DateTime.Now.Day).PadLeft(2, '0') +
                    Convert.ToString(DateTime.Now.Hour).PadLeft(2, '0') +
                    Convert.ToString(DateTime.Now.Minute).PadLeft(2, '0') +
                    Convert.ToString(DateTime.Now.Second).PadLeft(2, '0');

            }
            catch
            {
                m_strRow = "00000000000000";
            }
            finally
            {
            }
            return m_strRow;
        }

        public string GetUniqueRowNoFromCdgen(string p_type)
        {
            int m_RetVal = 0;
            string strRetVal = "";
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable = new DataTable();

            try
            {
                m_clsDalDataHandle.ResetSpParam();
                m_clsDalDataHandle.AddSqlParameter("@p_type", SqlDbType.VarChar, 50, p_type);
                m_RetVal = m_RetVal + m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_Unitque_Row");
                if (m_DataTable.Rows.Count > 0)
                {
                    strRetVal = Convert.ToString(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "row_no", 0));
                }

            }
            catch
            {
                strRetVal = "0";
            }
            finally
            {
            }
            return strRetVal;
        }

        public string GetValFromControlInGridView(GridViewRow p_Row, string p_Control_Name)
        {
            string p_Val = "ERROR";
            try
            {
                string s;
                if (p_Row.FindControl(p_Control_Name).GetType().ToString() == "System.Web.UI.WebControls.TextBox")
                {
                    TextBox p_TextBox;
                    p_TextBox = (TextBox)p_Row.FindControl(p_Control_Name);
                    p_Val = p_TextBox.Text;
                    p_TextBox = null;
                }
            }
            catch
            {
                p_Val = "ERROR";
            }
            finally
            {
            }
            return p_Val;
        }

        public int LockControlInGridView(GridViewRow p_Row, string p_Control_Name, bool p_IsEnable = false)
        {
            int m_RetVal = 0;

            try
            {
                if (p_Row.FindControl(p_Control_Name).GetType().ToString() == "System.Web.UI.WebControls.TextBox")
                {
                    TextBox p_TextBox;
                    p_TextBox = (TextBox)p_Row.FindControl(p_Control_Name);
                    p_TextBox.Enabled = p_IsEnable;
                    p_TextBox = null;
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

        public int PageNavigation(DataTable p_MasterData, ref DataTable p_ReturnData, int p_PageNo, int p_RecPerPage, ref string p_CurrPos)
        {
            int m_RetVal = 0;

            int MAX_RECORD;
            int nFromRecNo;
            int nToRecNo;
            int nRow = 0;

            try
            {
                MAX_RECORD = p_MasterData.Rows.Count;
                p_ReturnData = p_MasterData.Clone();

                if (p_PageNo < 0)
                {
                    p_PageNo = 0;
                }

                nFromRecNo = (p_PageNo * p_RecPerPage) + 1;
                nToRecNo = nFromRecNo + (p_RecPerPage - 1);
                if (nToRecNo > MAX_RECORD)
                {
                    nToRecNo = MAX_RECORD;
                }
                for (nRow = nFromRecNo; nRow <= nToRecNo; nRow++)
                {
                    p_ReturnData.Rows.Add(p_MasterData.Rows[nRow - 1].ItemArray);
                }

                p_CurrPos = Convert.ToString(nFromRecNo) + " - " + Convert.ToString(nToRecNo) + "/" + Convert.ToString(MAX_RECORD);
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

        public string GetFinYearId()
        {
            string m_RetVal = "-1";
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            try
            {
                m_RetVal = Convert.ToString(m_clsDalDataHandle.GetFinYearId());
            }
            catch
            {
                m_RetVal = "-1";
            }
            finally
            {
                m_clsDalDataHandle = null;
            }
            return m_RetVal;
        }

        public string GetBranchId()
        {
            string m_RetVal = "-1";
            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            try
            {
                m_RetVal = Convert.ToString(m_clsDalDataHandle.GetBranchId());
            }
            catch
            {
                m_RetVal = "-1";
            }
            finally
            {
                m_clsDalDataHandle = null;
            }
            return m_RetVal;
        }

        public string GetDataFrom2DArray(string[][] p_Arr, int p_SearchCol, int p_GetCol, string p_Key)
        {
            string m_RetVal = "NO DATA";
            string m_curr_val;
            try
            {
                for (int iRow = 0; iRow < p_Arr.Count(); iRow++)
                {
                    m_curr_val = p_Arr[iRow][p_SearchCol];
                    if (p_Key == m_curr_val)
                    {
                        m_RetVal = p_Arr[iRow][p_GetCol];
                        break;
                    }
                }
            }
            catch
            {
                m_RetVal = "NO DATA";
            }
            finally
            {
            }

            return m_RetVal;
        }

        public string[] GetReportConnection()
        {
            string[] m_ConnDetails = new string[4];
            string m_ConnStrVar = "";


            try
            {
               


                long m_BranchId = ConvertLong(GetBranchId());
                if (m_BranchId >= 500 && m_BranchId<=503)
                {
                    m_ConnStrVar = "ReportConn_jisu";
                }
                else if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "3" && m_BranchId == 2)
                {
                    m_ConnStrVar = "ReportConn_nit";
                }
                else if ( m_BranchId == 10)
                {
                    m_ConnStrVar = "ReportConn_jis";
                }
                else if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "4" && m_BranchId == 1)
                {
                    m_ConnStrVar = "ReportConn_jis";
                }
                else if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "102" && m_BranchId == 102)
                {
                    m_ConnStrVar = "ReportConn_jis";
                }
                else if (m_BranchId == 7 || m_BranchId == 101)
                {
                    m_ConnStrVar = "ReportConn_surermath";
                }
                else if (m_BranchId == 3 || m_BranchId == 6 || m_BranchId == 4 || m_BranchId == 5)
                {
                    m_ConnStrVar = "ReportConn_Gnit";
                }
                else if (m_BranchId == 627)
                {
                    m_ConnStrVar = "ReportConn_Nps";
                }
                else if (m_BranchId == 401)
                {
                    m_ConnStrVar = "ReportConn_Asansole";
                    
                }
                else if (m_BranchId >= 610 && m_BranchId <= 615)
                {
                    m_ConnStrVar = "ReportConn_Jharkhand";
                }
                //else if (m_BranchId == 2 || m_BranchId == 61)
                //{
                //    m_ConnStrVar = "ReportConn_Gkcem";
                //}

                //For Abacus
                if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "51" && m_BranchId == 1) //Abacus
                {
                    m_ConnStrVar = "ReportConn_Abacus";
                }
                else if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "61" && m_BranchId == 1) //Gkc
                {
                    m_ConnStrVar = "ReportConn_Gkcem";
                }
                else if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "62" && m_BranchId == 2) //GMIT
                {
                    m_ConnStrVar = "ReportConn_Gkcem";
                }
                else if (HttpContext.Current.Session["G_BRANCH_ID"].ToString() == "64" && m_BranchId == 64) //GMIT
                {
                    m_ConnStrVar = "ReportConn_Gkcem";
                }



                string m_StrConn = System.Configuration.ConfigurationManager.ConnectionStrings[m_ConnStrVar].ToString();
                m_ConnDetails = m_StrConn.Split(',');
            }
            catch
            {
                m_ConnDetails[0] = "NA";
                m_ConnDetails[1] = "NA";
                m_ConnDetails[2] = "NA";
                m_ConnDetails[3] = "NA";
            }
            finally
            {
            }
            return m_ConnDetails;
        }

        public string[] GetReportConnectionMain()
        {
            string[] m_ConnDetails = new string[4];
            string m_ConnStrVar = "";

            try
            {
                m_ConnStrVar = "ReportConn";
                string m_StrConn = System.Configuration.ConfigurationManager.ConnectionStrings[m_ConnStrVar].ToString();
                m_ConnDetails = m_StrConn.Split(',');
            }
            catch
            {
                m_ConnDetails[0] = "NA";
                m_ConnDetails[1] = "NA";
                m_ConnDetails[2] = "NA";
                m_ConnDetails[3] = "NA";
            }
            finally
            {
            }
            return m_ConnDetails;

        }

        public string GetModuleId()
        {
            string m_RetVal = "-1";
            try
            {
                m_RetVal = (string)HttpContext.Current.Session["G_MODULE_ID"];
            }
            catch
            {
                m_RetVal = "-1";
            }
            finally
            {
            }
            return m_RetVal;
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

        public string DateAdd(string p_Date, double p_Day)
        {
            string m_RetDate;
            try
            {
                DateTime m_Date = StringToDate(p_Date);
                m_Date = m_Date.AddDays(p_Day);
                m_RetDate = ConvertToDate(m_Date.ToString());
            }
            catch
            {
                m_RetDate = "01/01/1900";
            }
            finally
            {
            }

            return m_RetDate;
        }

        public void DeleteAllLocalSessionVar()
        {
            int nSessionCtr;
            string m_SessionVarName;

            try
            {
                for (nSessionCtr = HttpContext.Current.Session.Count - 1; nSessionCtr >= 0; nSessionCtr--)
                {
                    m_SessionVarName = HttpContext.Current.Session.Keys[nSessionCtr].ToString();
                    if (m_SessionVarName.Substring(0, 2) != "G_")
                    {
                        HttpContext.Current.Session.Remove("m_SessionVarName");
                    }
                }
            }
            catch
            {
            }
            finally
            {
                GC.Collect();
            }
        }
        public string IncreaseRowNo(string p_item_row_no, DataTable p_DataTable, string p_FieldName)
        {
            string p_RowNo;
            string retVal = "";
            int xx = 0;
            string yy = "";

            try
            {
                if (p_DataTable.Rows.Count == 0)
                {
                    retVal = p_item_row_no + "_001";
                }
                else
                {
                    string maxValue = (string)p_DataTable.Compute("MAX([" + p_FieldName + "])", "");
                    xx = maxValue.IndexOf("_");
                    yy = maxValue.Substring(xx + 1);
                    xx = Convert.ToInt32(yy) + 1;


                    retVal = p_item_row_no + "_" + PadRight(Convert.ToString(xx), 3, "0");

                }
            }
            catch
            {
            }
            finally
            {
            }
            return retVal;

        }

        public string PadRight(string p_str, int NoOfDigit, string PadChar)
        {
            string retVal = "";
            int xx = 0;
            try
            {
                for (xx = 1; xx <= (NoOfDigit - p_str.Length); xx++)
                {
                    retVal = retVal + PadChar;
                }
                retVal = retVal + p_str;
            }
            catch
            {
            }
            finally
            {
            }
            return retVal;

        }


    }
}