using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BAL;
using DAL;
using System.Data;

/// <summary>
/// Summary description for WebServiceMasters
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
 [System.Web.Script.Services.ScriptService]
public class WebServiceMasters : System.Web.Services.WebService {

    public WebServiceMasters () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }



    [WebMethod(EnableSession = true)]
    public int RemoveSessionVar(string[] p_SessionArr)
    {
        int m_RetVal = 0;
        try
        {
            for (int iRow = 0; iRow < p_SessionArr.Count(); iRow++)
            {
                Session.Remove(p_SessionArr[iRow]);
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

    [WebMethod(EnableSession = true)]
    public int RemoveSessionAllVar()
    {
        int m_RetVal = 0;
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        try
        {
            m_clsBalCommonLib.DeleteAllLocalSessionVar();
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCommonLib = null;
        }
        return m_RetVal;
    }


    [WebMethod(EnableSession = true)]
    public int ResetSessionDataTable(string[] p_SessionArr)
    {
        int m_RetVal = 0;
        DataTable m_DataTable;
        try
        {
            for (int iRow = 0; iRow < p_SessionArr.Count(); iRow++)
            {
                m_DataTable=(DataTable) Session[p_SessionArr[iRow]];
                if (m_DataTable != null)
                {
                    m_DataTable.Clear();
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
        }
        return m_RetVal;
    }



    public class ReturnList
    {
        public string[][] m_List;
        public string m_Count;

        public ReturnList()
        {
            m_List = null;
            m_Count = "-1";
        }

        ~ReturnList()
        {
            m_List = null;
            m_Count = null;
        }

    }


    public class ReturnListWithField
    {
        public string[][] m_List;
        public string[] m_Field;
        public string m_Count;

        public ReturnListWithField()
        {
            m_List = null;
            m_Field = null;
            m_Count = "-1";
        }

        ~ReturnListWithField()
        {
            m_List = null;
            m_Field = null;
            m_Count = null;
        }
    }


    [WebMethod(EnableSession = true)]
    public ReturnList NavigateList(string p_session_var_name, int p_PageNo, string[] p_field, int p_NoOfRec = 5)
    {
        ReturnList m_clsReturnList = new ReturnList();
        m_clsReturnList.m_List = null;
        m_clsReturnList.m_Count = "0";

        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        DataTable m_DataTable = new DataTable();

        try
        {
            m_DataTable = (DataTable)Session[p_session_var_name];

            if (m_DataTable.Rows.Count > 0)
            {
                if (p_NoOfRec == 0)
                {
                    p_NoOfRec = m_DataTable.Rows.Count;
                }
                else
                {
                    if (p_PageNo == -1) //First Page
                    {
                        p_PageNo = 1;
                    }
                    else if (p_PageNo == -2) //Last Page
                    {
                        p_PageNo = m_DataTable.Rows.Count / p_NoOfRec;
                    }
                }
            }


            if (m_clsDalDataHandle.DataTableToArray(m_DataTable, ref m_clsReturnList.m_List, p_field, p_PageNo, p_NoOfRec) == 0 && m_DataTable.Rows.Count > 0)
            {
                Session[p_session_var_name] = m_DataTable;
                m_clsReturnList.m_Count = m_clsBalCommonLib.ConvertString(m_DataTable.Rows.Count);
            }
            else
            {
                m_clsDalDataHandle.CreateBlankArray(ref m_clsReturnList.m_List, 1, p_field.Count());
            }

        }
        catch
        {
            m_clsDalDataHandle.CreateBlankArray(ref m_clsReturnList.m_List, 1, p_field.Count());
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_clsReturnList;
    }



    [WebMethod(EnableSession = true)]
    public ReturnList GetData(string p_session_var_name, string[] p_field, string[] p_ParamList,string p_sp_name,int p_NoOfRec=5)
    {
        ReturnList m_ReturnList = new ReturnList();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        DataTable m_DataTable = new DataTable();
        string m_str_param;
        string[] m_arr_param;
        string p_sp_param;
        string p_param_data_type;
        string p_param_value;


        try
        {
            

            m_clsDalDataHandle.ResetSpParam();

            for(int nParamCtr=0;nParamCtr<p_ParamList.Count();nParamCtr++)
            {
                m_str_param=p_ParamList[nParamCtr];
                m_arr_param=m_str_param.Split(',');

                p_sp_param=m_arr_param[0].ToUpper();
                p_param_data_type=m_arr_param[1].ToUpper();
                p_param_value=m_arr_param[2].ToUpper();
                p_param_value=p_param_value.Replace("<>", ",");


                if(p_param_data_type=="VARCHAR")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.VarChar, 0, p_param_value);
                }
                else if(p_param_data_type=="INT")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.Int, 0,m_clsBalCommonLib.ConvertLong(p_param_value));
                }
                else if(p_param_data_type=="DATETIME")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_param_value));
                }
                else if(p_param_data_type=="FLOAT")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.Float, 0,m_clsBalCommonLib.ConvertDouble(p_param_value));
                }
                else if (p_param_data_type == "USERTYPE")
                {
                    m_clsDalDataHandle.AddSqlParameter("p_user_id", SqlDbType.Float, 0, m_clsDalDataHandle.GetUserId());
                }
                else if (p_param_data_type == "USERTYPEMAIN")
                {
                    m_clsDalDataHandle.AddSqlParameter("p_user_id", SqlDbType.Float, 0, m_clsDalDataHandle.GetMainUserId());
                }

            }
            int m_ErrVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, p_sp_name);

            if (m_ErrVal == 0 && m_DataTable.Rows.Count > 0)
            {
                if (p_NoOfRec == 0)
                {
                    p_NoOfRec = m_DataTable.Rows.Count;
                }
            }

            if (m_clsDalDataHandle.DataTableToArray(m_DataTable, ref m_ReturnList.m_List, p_field, 0, p_NoOfRec) == 0 && m_ErrVal == 0 && m_DataTable.Rows.Count > 0)
            {
                m_ReturnList.m_Count = m_clsBalCommonLib.ConvertString(m_DataTable.Rows.Count);
                if (p_session_var_name != "NA")
                {
                    Session.Remove(p_session_var_name);
                    Session[p_session_var_name] = m_DataTable;
                }
            }
            else
            {
                m_clsDalDataHandle.CreateBlankArray(ref m_ReturnList.m_List, 1, p_field.Count());
                m_ReturnList.m_Count = "-1";
            }

        }
        catch
        {
            m_clsDalDataHandle.CreateBlankArray(ref m_ReturnList.m_List, 1, p_field.Count());
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_ReturnList;
    }

    [WebMethod(EnableSession = true)]
    public ReturnList GetDataFromDataTable(string p_master_session_var_name,string p_session_var_name, string[] p_field,string p_Filter="NA",  int p_NoOfRec = 5)
    {
        ReturnList m_ReturnList = new ReturnList();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        DataTable m_MasterDataTable;
        DataTable m_DataTable;


        try
        {
            m_MasterDataTable = (DataTable)Session[p_master_session_var_name];

            if (p_Filter == "NA")
            {
                m_DataTable = m_MasterDataTable.Copy();
            }
            else
            {
                m_DataTable = m_MasterDataTable.Select(p_Filter).CopyToDataTable();
            }
            

            if (p_session_var_name != "NA")
            {
                Session.Remove(p_session_var_name);
                Session[p_session_var_name] = m_DataTable;
            }


            if (m_DataTable.Rows.Count > 0)
            {
                if (p_NoOfRec == 0)
                {
                    p_NoOfRec = m_DataTable.Rows.Count;
                }
            }

            if (m_clsDalDataHandle.DataTableToArray(m_DataTable, ref m_ReturnList.m_List, p_field, 0, p_NoOfRec) == 0  && m_DataTable.Rows.Count > 0)
            {
                m_ReturnList.m_Count = m_clsBalCommonLib.ConvertString(m_DataTable.Rows.Count);
            }
            else
            {
                m_clsDalDataHandle.CreateBlankArray(ref m_ReturnList.m_List, 1, p_field.Count());
                m_ReturnList.m_Count = "-1";
            }

        }
        catch
        {
            m_clsDalDataHandle.CreateBlankArray(ref m_ReturnList.m_List, 1, p_field.Count());
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsDalDataHandle = null;
            m_DataTable = null;
            m_MasterDataTable = null;

        }
        return m_ReturnList;
    }



    [WebMethod(EnableSession = true)]
    public ReturnList GetDataFromMasterDb(string p_session_var_name, string[] p_field, string[] p_ParamList, string p_sp_name, int p_NoOfRec = 5)
    {
        ReturnList m_ReturnList = new ReturnList();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        DataTable m_DataTable = new DataTable();
        string m_str_param;
        string[] m_arr_param;
        string p_sp_param;
        string p_param_data_type;
        string p_param_value;


        try
        {


            m_clsDalDataHandle.ResetSpParam();

            for (int nParamCtr = 0; nParamCtr < p_ParamList.Count(); nParamCtr++)
            {
                m_str_param = p_ParamList[nParamCtr];
                m_arr_param = m_str_param.Split(',');

                p_sp_param = m_arr_param[0].ToUpper();
                p_param_data_type = m_arr_param[1].ToUpper();
                p_param_value = m_arr_param[2].ToUpper();
                p_param_value = p_param_value.Replace("<>", ",");


                if (p_param_data_type == "VARCHAR")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.VarChar, 0, p_param_value);
                }
                else if (p_param_data_type == "INT")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.Int, 0, m_clsBalCommonLib.ConvertLong(p_param_value));
                }
                else if (p_param_data_type == "DATETIME")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_param_value));
                }
                else if (p_param_data_type == "FLOAT")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.Float, 0, m_clsBalCommonLib.ConvertDouble(p_param_value));
                }
                else if (p_param_data_type == "USERTYPE")
                {
                    m_clsDalDataHandle.AddSqlParameter("p_user_id", SqlDbType.Float, 0, m_clsDalDataHandle.GetUserId());
                }
                else if (p_param_data_type == "USERTYPEMAIN")
                {
                    m_clsDalDataHandle.AddSqlParameter("p_user_id", SqlDbType.Float, 0, m_clsDalDataHandle.GetMainUserId());
                }
            }
            int m_ErrVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, p_sp_name,1);

            if (m_ErrVal == 0 && m_DataTable.Rows.Count > 0)
            {
                if (p_NoOfRec == 0)
                {
                    p_NoOfRec = m_DataTable.Rows.Count;
                }
            }

            if (m_clsDalDataHandle.DataTableToArray(m_DataTable, ref m_ReturnList.m_List, p_field, 0, p_NoOfRec) == 0 && m_ErrVal == 0 && m_DataTable.Rows.Count > 0)
            {
                m_ReturnList.m_Count = m_clsBalCommonLib.ConvertString(m_DataTable.Rows.Count);
                if (p_session_var_name != "NA")
                {
                    Session.Remove(p_session_var_name);
                    Session[p_session_var_name] = m_DataTable;
                }
            }
            else
            {
                m_clsDalDataHandle.CreateBlankArray(ref m_ReturnList.m_List, 1, p_field.Count());
                m_ReturnList.m_Count = "-1";
            }

        }
        catch
        {
            m_clsDalDataHandle.CreateBlankArray(ref m_ReturnList.m_List, 1, p_field.Count());
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_ReturnList;
    }


    [WebMethod(EnableSession = true)]
    public int SelectCollege( string p_main_college_id, string p_college_name)
    {
        int m_RetVal = 0;
        int m_xx;
        string xx;
        try
        {
            //Session["G_VIRTUAL_COLLEGE_ID"] = p_virtual_college_id;
            Session["G_MAIN_COLLEGE_ID"] = p_main_college_id;
            Session["G_COLLEGE_NAME"] = p_college_name;
            xx = (string) HttpContext.Current.Session["G_COMPANY_FIN_YEAR_ID"];
            if(Convert.ToInt32(xx)>0)
                m_RetVal = 2;
               
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

    [WebMethod(EnableSession = true)]
    public int SelectFinYear(string p_fin_FinYearId, string p_fin_from_date, string p_fin_to_date)
    {
        int m_RetVal = 0;
        string xx;
        try
        {
            if (Convert.ToUInt64(p_fin_FinYearId) > 0)
            {
                HttpContext.Current.Session["G_COMPANY_FIN_YEAR_ID"] = p_fin_FinYearId;
                HttpContext.Current.Session["G_FROM_FIN_YEAR_DATE"] = Convert.ToDateTime(p_fin_from_date).ToString("dd/MM/yyyy", System.Globalization.CultureInfo.InvariantCulture);
                HttpContext.Current.Session["G_TO_FIN_YEAR_DATE"] = Convert.ToDateTime(p_fin_to_date).ToString("dd/MM/yyyy", System.Globalization.CultureInfo.InvariantCulture);
                m_RetVal = 0;
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

    [WebMethod(EnableSession = true)]
    public void SelectModule(string p_page_name)
    {
        
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        try
        {
                switch (p_page_name) 
                { 
                    case "mms":
                        Session["G_MODULE_ID"] = "3";
                        break ;
                    case "mis":
                        Session["G_MODULE_ID"] = "30";
                        break; 
                    case "fms":
                        Session["G_MODULE_ID"] = "6";
                        break;
                }
        }
        catch(Exception)
        {
            
        }
        finally
        {
        }

    }

    [WebMethod(EnableSession = true)]
    public string[] GetUserRight(string p_MenuUnqCode)
    {
        string []m_RetVal=new string[2];
        DataTable m_DataTable=new DataTable();
        clsDalDataHandle m_clsDalDataHandle=new clsDalDataHandle();
        try
        {
            m_clsDalDataHandle.ResetSpParam();
            m_clsDalDataHandle.AddSqlParameter("@p_module_id", SqlDbType.Int, 0, (string)Session["G_MODULE_ID"]);
            m_clsDalDataHandle.AddSqlParameter("@p_user_id", SqlDbType.Float, 0, (string)Session["G_MAIN_USER_ID"]);
            m_clsDalDataHandle.AddSqlParameter("@p_branch_id", SqlDbType.Int, 0, (string)Session["G_BRANCH_ID"]);
            m_clsDalDataHandle.AddSqlParameter("@p_unq_menu_code", SqlDbType.Float, 0, p_MenuUnqCode);
            if (m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_User_Wise_Page_Rights", 1) == 0)
            {
                m_RetVal[0] = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no", 0);
                m_RetVal[1] = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "page_name", 0);
            }
            else
            {
                m_RetVal[0] = "1";
                m_RetVal[1] = "ERROR";
            }
        }
        catch
        {
            m_RetVal[0] = "1";
            m_RetVal[1] = "ERROR";
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_RetVal;
    }


    [WebMethod(EnableSession = true)]
    public int PopulateDataTable(string p_session_var_name, string[] p_ParamList, string p_sp_name, int p_IsConnectToMasterDb = 0)
    {
        int m_RetVal = 0;
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        DataTable m_DataTable = new DataTable();
        string m_str_param;
        string[] m_arr_param;
        string p_sp_param;
        string p_param_data_type;
        string p_param_value;


        try
        {


            m_clsDalDataHandle.ResetSpParam();

            for (int nParamCtr = 0; nParamCtr < p_ParamList.Count(); nParamCtr++)
            {
                m_str_param = p_ParamList[nParamCtr];
                m_arr_param = m_str_param.Split(',');

                p_sp_param = m_arr_param[0].ToUpper();
                p_param_data_type = m_arr_param[1].ToUpper();
                p_param_value = m_arr_param[2].ToUpper();
                p_param_value = p_param_value.Replace("<>", ",");


                if (p_param_data_type == "VARCHAR")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.VarChar, 0, p_param_value);
                }
                else if (p_param_data_type == "INT")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.Int, 0, m_clsBalCommonLib.ConvertLong(p_param_value));
                }
                else if (p_param_data_type == "DATETIME")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_param_value));
                }
                else if (p_param_data_type == "FLOAT")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.Float, 0, m_clsBalCommonLib.ConvertDouble(p_param_value));
                }
                else if (p_param_data_type == "USERTYPE")
                {
                    m_clsDalDataHandle.AddSqlParameter("p_user_id", SqlDbType.Float, 0, m_clsDalDataHandle.GetUserId());
                }
                else if (p_param_data_type == "USERTYPEMAIN")
                {
                    m_clsDalDataHandle.AddSqlParameter("p_user_id", SqlDbType.Float, 0, m_clsDalDataHandle.GetMainUserId());
                }

            }
            m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, p_sp_name,p_IsConnectToMasterDb);
            if (m_RetVal == 0)
            {
                Session.Remove(p_session_var_name);
                Session[p_session_var_name] = m_DataTable;
            }
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public int SaveUserWiseMenuAccess(string p_MenuUnqCode)
    {
        int m_RetVal = 0;
        DataTable m_DataTable = new DataTable();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        try
        {
            m_clsDalDataHandle.ResetSpParam();
            m_clsDalDataHandle.AddSqlParameter("@p_module_id", SqlDbType.Int, 0, (string)Session["G_MODULE_ID"]);
            m_clsDalDataHandle.AddSqlParameter("@p_user_id", SqlDbType.Float, 0, (string)Session["G_MAIN_USER_ID"]);
            m_clsDalDataHandle.AddSqlParameter("@p_branch_id", SqlDbType.Int, 0, (string)Session["G_BRANCH_ID"]);
            m_clsDalDataHandle.AddSqlParameter("@p_menu_unq_id", SqlDbType.Float, 0, p_MenuUnqCode);
            if (m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_User_Access_Details", 1) == 0)
            {
                m_RetVal = 0;
            }
            else
            {
                m_RetVal = 1;
            }
        }
        catch(Exception ex)
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

    [WebMethod(EnableSession = true)]
    public string[] GetTotalFromDataTable(string[] p_FieldList, string p_SessionVar)
    {
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        string[] m_RetArr;
        int iCtr;
        double m_TotAmt = 0;
        string m_Field;
        DataTable m_DataTable;

        try
        {
            m_DataTable = (DataTable)Session[p_SessionVar];
            m_RetArr = new string[p_FieldList.Length];
            for (iCtr = 0; iCtr < p_FieldList.Length; iCtr++)
            {
                m_Field = "sum(" + p_FieldList[iCtr] + ")";
                m_TotAmt = m_clsBalCommonLib.ConvertDouble(m_DataTable.Compute(m_Field, ""));
                m_RetArr[iCtr] = m_TotAmt.ToString("#0.00");
            }


        }
        catch
        {
            m_RetArr = new string[1];
            m_RetArr[0] = "ERROR";
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_DataTable = null;
        }
        return m_RetArr;
    }

    [WebMethod(EnableSession = true)]
    public int ExportToExcel(string p_FileName, string[] p_ParamList, string p_sp_name,string p_ColName="NA",string p_FieldName="NA", int p_IsConnectToMasterDb = 0)
    {
        int m_RetVal = 0;
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        DataTable m_DataTable = new DataTable();
        string m_str_param;
        string[] m_arr_param;
        string p_sp_param;
        string p_param_data_type;
        string p_param_value;


        try
        {


            m_clsDalDataHandle.ResetSpParam();

            for (int nParamCtr = 0; nParamCtr < p_ParamList.Count(); nParamCtr++)
            {
                m_str_param = p_ParamList[nParamCtr];
                m_arr_param = m_str_param.Split(',');

                p_sp_param = m_arr_param[0].ToUpper();
                p_param_data_type = m_arr_param[1].ToUpper();
                p_param_value = m_arr_param[2].ToUpper();
                p_param_value = p_param_value.Replace("<>", ",");


                if (p_param_data_type == "VARCHAR")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.VarChar, 0, p_param_value);
                }
                else if (p_param_data_type == "INT")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.Int, 0, m_clsBalCommonLib.ConvertLong(p_param_value));
                }
                else if (p_param_data_type == "DATETIME")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_param_value));
                }
                else if (p_param_data_type == "FLOAT")
                {
                    m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.Float, 0, m_clsBalCommonLib.ConvertDouble(p_param_value));
                }
                else if (p_param_data_type == "USERTYPE")
                {
                    m_clsDalDataHandle.AddSqlParameter("p_user_id", SqlDbType.Float, 0, m_clsDalDataHandle.GetUserId());
                }
                else if (p_param_data_type == "USERTYPEMAIN")
                {
                    m_clsDalDataHandle.AddSqlParameter("p_user_id", SqlDbType.Float, 0, m_clsDalDataHandle.GetMainUserId());
                }

            }
            m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, p_sp_name, p_IsConnectToMasterDb);
            if (m_RetVal == 0)
            {
                Session.Remove("S_EXCEL_DATA_TABLE");
                Session["S_EXCEL_DATA_TABLE"] = m_DataTable;

                Session.Remove("S_EXCEL_FILE_NAME");
                Session["S_EXCEL_FILE_NAME"] = p_FileName;

                Session.Remove("S_EXCEL_COL_NAME");
                Session["S_EXCEL_COL_NAME"] = p_ColName;

                Session.Remove("S_EXCEL_FIELD_NAME");
                Session["S_EXCEL_FIELD_NAME"] = p_FieldName;
            }
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public string SaveUserPassWord(string p_OldPassWord, string p_NewPassWord)
    {
        string m_RetVal = "";
        DataTable m_DataTable = new DataTable();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        try
        {
            m_clsDalDataHandle.ResetSpParam();
            m_clsDalDataHandle.AddSqlParameter("@p_user_id", SqlDbType.BigInt, 0, (string)Session["G_USER_ID"]);
            m_clsDalDataHandle.AddSqlParameter("@p_old_password", SqlDbType.VarChar, 0, p_OldPassWord);
            m_clsDalDataHandle.AddSqlParameter("@p_new_password", SqlDbType.VarChar, 0, p_NewPassWord);
            if (m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_User_Password",0) == 0)
            {
                m_RetVal = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_mesg", 0);
            }
            else
            {
                m_RetVal = "ERROR IN DATA SAVING";
            }
        }
        catch
        {
            m_RetVal = "ERROR IN DATA SAVING";
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public string SetUniqueRowNo()
    {
        string m_RetVal = "";
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        try
        {
            m_RetVal = m_clsBalCommonLib.GetUniqueRowNo();
        }
        catch
        {
            m_RetVal = "99999999999999";
        }
        finally
        {
            m_clsBalCommonLib = null;
        }
        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public string SetUniqueRowNoFromCdgen(string p_type)
    {
        string m_RetVal = "";
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        try
        {
            m_RetVal = m_clsBalCommonLib.GetUniqueRowNoFromCdgen(p_type);
        }
        catch
        {
            m_RetVal = "99999999999999";
        }
        finally
        {
            m_clsBalCommonLib = null;
        }
        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public int UpdateCurrentValue(string p_from_date,string p_to_date)
    {
        int m_RetVal = 0;
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        clsBalCommonLib m_clsBalCommonLib=new clsBalCommonLib();
        DataTable m_DataTable = new DataTable();

        try
        {
            m_clsDalDataHandle.ResetSpParam();
            m_clsDalDataHandle.AddSqlParameter("@p_fin_id", SqlDbType.Int, 0, m_clsDalDataHandle.GetFinYearId());
            m_clsDalDataHandle.AddSqlParameter("@p_branch_id", SqlDbType.Int, 0, m_clsDalDataHandle.GetBranchId());
            m_clsDalDataHandle.AddSqlParameter("@p_from_date", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_from_date));
            m_clsDalDataHandle.AddSqlParameter("@p_to_date", SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_to_date));
            m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Within_Period_Stock_Valueation");
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_DataTable = null;
            m_clsDalDataHandle = null;
            m_clsBalCommonLib=null;
        }
        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public int UpdateLastYearAccBal()
    {
        int m_RetVal = 0;
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        DataTable m_DataTable = new DataTable();

        try
        {
            m_clsDalDataHandle.ResetSpParam();
            m_clsDalDataHandle.AddSqlParameter("@p_fin_year_id", SqlDbType.Int, 0, m_clsDalDataHandle.GetFinYearId());
            m_clsDalDataHandle.AddSqlParameter("@p_branch_id", SqlDbType.Int, 0, m_clsDalDataHandle.GetBranchId());
            m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Create_New_Year_Fms");
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_DataTable = null;
            m_clsDalDataHandle = null;
            m_clsBalCommonLib = null;
        }
        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public int UpdateLastItemBal()
    {
        int m_RetVal = 0;
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        DataTable m_DataTable = new DataTable();

        try
        {
            m_clsDalDataHandle.ResetSpParam();
            m_clsDalDataHandle.AddSqlParameter("@p_fin_year_id", SqlDbType.Int, 0, m_clsDalDataHandle.GetFinYearId());
            m_clsDalDataHandle.AddSqlParameter("@p_branch_id", SqlDbType.Int, 0, m_clsDalDataHandle.GetBranchId());
            m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Create_New_Year_Mms");
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_DataTable = null;
            m_clsDalDataHandle = null;
            m_clsBalCommonLib = null;
        }
        return m_RetVal;
    }



   [WebMethod(EnableSession = true)]
    public int SaveSelectAll(string p_SessionVarName)
    {
        DataRow[] m_edit_data_row;
        int m_RetVal = 0;
        int iRow;
        clsDalEditInDataTable m_clsDalEditInDataTable = new clsDalEditInDataTable();
        string m_Filter;
        DataTable m_DataTable;
        try
        {
            m_DataTable = (DataTable)Session[p_SessionVarName];


            m_Filter = "APP=0"  ;
            m_edit_data_row = m_DataTable.Select(m_Filter);

            for (iRow = 0; iRow<m_DataTable.Rows.Count; iRow++)
            {

                m_edit_data_row[iRow].BeginEdit();
                m_edit_data_row[iRow]["APP"] = 1;
                
                m_edit_data_row[iRow].EndEdit();
            }
            Session.Remove(p_SessionVarName);
            Session[p_SessionVarName] = m_DataTable;

            m_RetVal = 0;

        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsDalEditInDataTable = null;
            m_DataTable = null;
        }
        return m_RetVal;
    }

   [WebMethod(EnableSession = true)]
   public int SaveDeSelectAll(string p_SessionVarName)
   {
       DataRow[] m_edit_data_row;
       int m_RetVal = 0;
       int iRow;
       clsDalEditInDataTable m_clsDalEditInDataTable = new clsDalEditInDataTable();
       string m_Filter;
       DataTable m_DataTable;
       try
       {
           m_DataTable = (DataTable)Session[p_SessionVarName];


           m_Filter = "APP=1";
           m_edit_data_row = m_DataTable.Select(m_Filter);

           for (iRow = 0; iRow < m_DataTable.Rows.Count; iRow++)
           {

               m_edit_data_row[iRow].BeginEdit();
               m_edit_data_row[iRow]["APP"] = 0;

               m_edit_data_row[iRow].EndEdit();
           }
           Session.Remove(p_SessionVarName);
           Session[p_SessionVarName] = m_DataTable;

           m_RetVal = 0;

       }
       catch
       {
           m_RetVal = 1;
       }
       finally
       {
           m_clsDalEditInDataTable = null;
           m_DataTable = null;
       }
       return m_RetVal;
   }

   [WebMethod(EnableSession = true)]
   public int SaveMatchData(string p_SessionVarName, string[] p_ItemKeyArr, string DataTableField)
   {
       int m_RetVal = 0;
       int iRow;
       clsDalEditInDataTable m_clsDalEditInDataTable = new clsDalEditInDataTable();
       string m_Filter;
       DataTable m_DataTable;

       try
       {
           m_DataTable = (DataTable)Session[p_SessionVarName];

           for (iRow = 0; iRow < p_ItemKeyArr.Count(); iRow++)
           {
               m_Filter = DataTableField + "'" + p_ItemKeyArr[iRow] + "'";
               if (m_clsDalEditInDataTable.Init(ref m_DataTable, m_Filter, 2) == 0)
               {
                   m_clsDalEditInDataTable.BeginEdit();
                   m_RetVal = m_RetVal + m_clsDalEditInDataTable.SetData("APP", 1);
                   m_clsDalEditInDataTable.EndEdit();
               }
               else
               {
                   m_RetVal++;
               }

           }
           Session.Remove(p_SessionVarName);
           Session[p_SessionVarName] = m_DataTable;

           m_RetVal = 0;

       }
       catch
       {
           m_RetVal = 1;
       }
       finally
       {
           m_clsDalEditInDataTable = null;
           m_DataTable = null;
       }
       return m_RetVal;
   }


   [WebMethod(EnableSession = true)]
   public ReturnList GetBackOfficeMenuStdAff()
   {
       ReturnList m_clsReturnList = new ReturnList();
       m_clsReturnList.m_List = null;
       m_clsReturnList.m_Count = "0";

       DataTable m_DataTable = new DataTable();
       string[] m_Field = new string[] { "MenuCode", "MenuParentId", "MenuOwnId", "MenuName", "MenuURL" };
       clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
       try
       {
           m_clsDalDataHandle.ResetSpParam();
           m_clsDalDataHandle.AddSqlParameter("@p_college_id", SqlDbType.Int, 0, (string)Session["G_COLLEGE_ID"]);
           m_clsDalDataHandle.AddSqlParameter("@p_user_id", SqlDbType.Float, 0, (string)Session["G_USER_ID"]);
           m_clsDalDataHandle.AddSqlParameter("@p_menu_root_id", SqlDbType.Int, 0, 0);
           if (m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_BackOffice_Menu", 0) == 0)
           {
               if (m_clsDalDataHandle.DataTableToArray(m_DataTable, ref m_clsReturnList.m_List, m_Field, 0, m_DataTable.Rows.Count) == 0 && m_DataTable.Rows.Count > 0)
               {
                   m_clsReturnList.m_Count = "0";
               }
               else
               {
                   m_clsDalDataHandle.CreateBlankArray(ref m_clsReturnList.m_List, 1, m_Field.Length);
               }
           }
           else
           {
               m_clsReturnList.m_Count = "1";
           }
       }
       catch (Exception ex)
       {
           m_clsReturnList.m_Count = "1";
       }
       finally
       {
           m_clsDalDataHandle = null;
           m_DataTable = null;
       }
       return m_clsReturnList;
   }

   [WebMethod(EnableSession = true)]
   public string UpdateUserPassWord(int p_College_id, string p_OldPassWord, string p_NewPassWord, string p_Type)
   {
       string m_RetVal = "";
       DataTable m_DataTable = new DataTable();
       clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
       try
       {
           m_clsDalDataHandle.ResetSpParam();
           m_clsDalDataHandle.AddSqlParameter("@p_college_id", SqlDbType.Int, 0, p_College_id);
           m_clsDalDataHandle.AddSqlParameter("@p_user_id", SqlDbType.VarChar, 0, Session["G_USER_ID"]);
           m_clsDalDataHandle.AddSqlParameter("@p_old_password", SqlDbType.VarChar, 0, p_OldPassWord);
           m_clsDalDataHandle.AddSqlParameter("@p_new_password", SqlDbType.VarChar, 0, p_NewPassWord);
           m_clsDalDataHandle.AddSqlParameter("@p_type", SqlDbType.VarChar, 0, p_Type);
           if (m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Update_User_Password", 0) == 0)
           {
               m_RetVal = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_mesg", 0);
           }
           else
           {
               m_RetVal = "ERROR IN DATA SAVING";
           }
       }
       catch
       {
           m_RetVal = "ERROR IN DATA SAVING";
       }
       finally
       {
           m_clsDalDataHandle = null;
           m_DataTable = null;
       }
       return m_RetVal;
   }


   [WebMethod(EnableSession = true)]
   public ReturnListWithField GetDataAsArrayWithFieldName(string[] p_ParamList, string p_sp_name, int p_IsMainDb = 0)
   {
       ReturnListWithField m_ReturnListWithField = new ReturnListWithField();
       clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
       clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
       DataTable m_DataTable = new DataTable();
       string m_str_param;
       string[] m_arr_param;
       string p_sp_param;
       string p_param_data_type;
       string p_param_value;
       int p_NoOfRec = 0;
       string[] p_field;

       try
       {


           m_clsDalDataHandle.ResetSpParam();

           for (int nParamCtr = 0; nParamCtr < p_ParamList.Count(); nParamCtr++)
           {
               m_str_param = p_ParamList[nParamCtr];
               m_arr_param = m_str_param.Split(',');

               p_sp_param = m_arr_param[0].ToUpper();
               p_param_data_type = m_arr_param[1].ToUpper();
               p_param_value = m_arr_param[2].ToUpper();
               p_param_value = p_param_value.Replace("<>", ",");


               if (p_param_data_type == "VARCHAR")
               {
                   m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.VarChar, 0, p_param_value);
               }
               else if (p_param_data_type == "INT")
               {
                   m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.Int, 0, m_clsBalCommonLib.ConvertLong(p_param_value));
               }
               else if (p_param_data_type == "DATETIME")
               {
                   m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.DateTime, 0, m_clsBalCommonLib.StringToDate(p_param_value));
               }
               else if (p_param_data_type == "FLOAT")
               {
                   m_clsDalDataHandle.AddSqlParameter(p_sp_param, SqlDbType.Float, 0, m_clsBalCommonLib.ConvertDouble(p_param_value));
               }
               else if (p_param_data_type == "USERTYPE")
               {
                   m_clsDalDataHandle.AddSqlParameter("p_user_id", SqlDbType.Float, 0, m_clsDalDataHandle.GetUserId());
               }
               else if (p_param_data_type == "USERTYPEMAIN")
               {
                   m_clsDalDataHandle.AddSqlParameter("p_user_id", SqlDbType.Float, 0, m_clsDalDataHandle.GetMainUserId());
               }

           }
           int m_ErrVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, p_sp_name, p_IsMainDb);

           p_field = new string[m_DataTable.Columns.Count];
           m_ReturnListWithField.m_Field = new string[m_DataTable.Columns.Count];
           for (int iColCtr = 0; iColCtr < m_DataTable.Columns.Count; iColCtr++)
           {
               p_field[iColCtr] = m_DataTable.Columns[iColCtr].ToString();
               m_ReturnListWithField.m_Field[iColCtr] = m_DataTable.Columns[iColCtr].ToString();
           }

           if (m_ErrVal == 0 && m_DataTable.Rows.Count > 0)
           {
               p_NoOfRec = m_DataTable.Rows.Count;
           }

           if (m_clsDalDataHandle.DataTableToArray(m_DataTable, ref m_ReturnListWithField.m_List, p_field, 0, p_NoOfRec) == 0 && m_ErrVal == 0 && m_DataTable.Rows.Count > 0)
           {
               m_ReturnListWithField.m_Count = m_clsBalCommonLib.ConvertString(m_DataTable.Rows.Count);
           }
           else
           {
               m_clsDalDataHandle.CreateBlankArray(ref m_ReturnListWithField.m_List, 1, 1);
               m_ReturnListWithField.m_Count = "-1";
           }

       }
       catch
       {
           m_clsDalDataHandle.CreateBlankArray(ref m_ReturnListWithField.m_List, 1, 1);
       }
       finally
       {
           m_clsBalCommonLib = null;
           m_clsDalDataHandle = null;
           m_DataTable = null;
       }
       return m_ReturnListWithField;
   }



    //---------------------------------------------------------------------
   [WebMethod(EnableSession = true)]
   public int CreateSessionVar(string[] p_var_name, string[] p_var_val)
   {
       int m_RetVal = 0;

       try
       {
           for (int iRow = 0; iRow < p_var_name.Count(); iRow++)
           {
               Session[p_var_name[iRow]] = p_var_val[iRow];
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





}