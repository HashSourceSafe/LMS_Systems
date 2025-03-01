using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BAL;
using BO;
using DAL;
using System.Data;

/// <summary>
/// Summary description for WebServiceBackOfficeMenuRights
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
 [System.Web.Script.Services.ScriptService]
public class WebServiceBackOfficeMenuRights : System.Web.Services.WebService {

    public WebServiceBackOfficeMenuRights () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod(EnableSession = true)]
    public int SaveMenuData(string p_SessionVarName, string[][][] p_ItemArr, string[] p_ItemKeyArr)
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
                m_Filter = "menu_id=" + p_ItemKeyArr[iRow];
                if (m_clsDalEditInDataTable.Init(ref m_DataTable, m_Filter, 2) == 0)
                {

                    m_clsDalEditInDataTable.BeginEdit();
                    m_RetVal = m_RetVal + m_clsDalEditInDataTable.SetArrayData(p_ItemArr[iRow]);
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
    public string SaveData(string[][] p_ValArr)
    {
        string m_RetVal = "ERROR";
        clsBalBackOfficeMenuRights m_clsBalBackOfficeMenuRights = new clsBalBackOfficeMenuRights();
        clsBoBackOfficeMenuRights m_clsBoBackOfficeMenuRights = new clsBoBackOfficeMenuRights();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            m_clsBoBackOfficeMenuRights.m_college_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_college_id");
            m_clsBoBackOfficeMenuRights.m_user_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_back_office_user_id");
            m_clsBoBackOfficeMenuRights.m_module_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_module_id");
            m_clsBoBackOfficeMenuRights.m_user_login_name = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_user_name");



            if (m_clsBalBackOfficeMenuRights.SaveData(m_clsBoBackOfficeMenuRights) > 0)
            {
                m_RetVal = "ERROR: " + m_clsBoBackOfficeMenuRights.m_menu_id;
            }
            else
            {
                m_RetVal = " Data Saved:" + m_clsBoBackOfficeMenuRights.m_menu_id;
            }

        }
        catch
        {
            m_RetVal = "ERROR";
        }
        finally
        {
            m_clsBoBackOfficeMenuRights = null;
            m_clsBalCommonLib = null;
            m_clsBalBackOfficeMenuRights = null;
        }
        return m_RetVal;
    }
    
}
