using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BAL;
using DAL;
using BO;
using System.Data;


/// <summary>
/// Summary description for WebServiceManageUser
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebServiceManageUser : System.Web.Services.WebService
{

    public WebServiceManageUser()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }
    [WebMethod(EnableSession = true)]
    public string SaveData(string[][] p_ValArr)
    {

        string m_RetVal = "ERROR";
        clsBalManageUser m_clsBalManageUser = new clsBalManageUser();
        clsBoManageUser m_clsBoManageUser = new clsBoManageUser();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            m_clsBoManageUser.m_college_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_college_id");
            m_clsBoManageUser.m_user_name = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_user_name");
            m_clsBoManageUser.m_pass = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_password");
            m_clsBoManageUser.m_dept_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_faculty_dept_id");
            m_clsBoManageUser.m_is_active_value = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_is_active");

            if (m_clsBalManageUser.SaveData(m_clsBoManageUser) > 0)
            {
                m_RetVal = "ERROR: " + m_clsBoManageUser.m_err_msg;
            }
            else
            {
                m_RetVal = m_clsBoManageUser.m_err_msg;
            }

        }
        catch
        {
            m_RetVal = "ERROR";
        }
        finally
        {
            m_clsBoManageUser = null;
            m_clsBalCommonLib = null;
            m_clsBalManageUser = null;
        }
        return m_RetVal;
    }
}
