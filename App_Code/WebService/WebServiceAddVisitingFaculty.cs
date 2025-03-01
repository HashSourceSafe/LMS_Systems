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
/// Summary description for WebServiceAddVisitingFaculty
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebServiceAddVisitingFaculty : System.Web.Services.WebService {

    public WebServiceAddVisitingFaculty () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod(EnableSession = true)]
    public string SaveData(string[][] p_ValArr)
    {

        string m_RetVal = "ERROR";
        clsBalAddVisitingFaculty m_clsBalAddVisitingFaculty = new clsBalAddVisitingFaculty();
        clsBoAddVisitingFaculty m_clsBoAddVisitingFaculty = new clsBoAddVisitingFaculty();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            m_clsBoAddVisitingFaculty.m_college_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_college_id");
            m_clsBoAddVisitingFaculty.m_faculty_code = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_faculty_code");
            m_clsBoAddVisitingFaculty.m_faculty_name = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_faculty_name");
            m_clsBoAddVisitingFaculty.m_facul_sh_name = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_faculty_short_name");
            m_clsBoAddVisitingFaculty.m_dept_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_department_id");
            m_clsBoAddVisitingFaculty.m_designation_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_designation_id");
            m_clsBoAddVisitingFaculty.m_is_edit = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_is_edit");
            

            if (m_clsBalAddVisitingFaculty.SaveData(m_clsBoAddVisitingFaculty) > 0)
            {
                m_RetVal = "ERROR: " + m_clsBoAddVisitingFaculty.m_err_msg;
            }
            else
            {
                m_RetVal = m_clsBoAddVisitingFaculty.m_err_msg;
            }

        }
        catch
        {
            m_RetVal = "ERROR";
        }
        finally
        {
            m_clsBoAddVisitingFaculty = null;
            m_clsBalCommonLib = null;
            m_clsBalAddVisitingFaculty = null;
        }
        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public clsBoAddVisitingFaculty DispMaxEmployeCode(string p_college_id)
    {
        clsBoAddVisitingFaculty m_clsBoAddVisitingFaculty = new clsBoAddVisitingFaculty();
        clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
        DataTable m_DataTable = new DataTable();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib(); 
        try
        {
            m_clsDalDataHandle.ResetSpParam();
            m_clsDalDataHandle.AddSqlParameter("@P_College_Id", SqlDbType.Int, 0, Convert.ToInt32(p_college_id));
            m_clsDalDataHandle.AddSqlParameter("@P_Dept_Id", SqlDbType.Int, 0, 100);

            m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Get_Maximum_Visiting_Faculty_Code");

            m_clsBoAddVisitingFaculty.m_max_faculty_code = m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "max_faculty_code");
            m_clsBoAddVisitingFaculty.m_err_no = "0";
        }
        catch
        {
            m_clsBoAddVisitingFaculty.m_err_msg = "Error";
            m_clsBoAddVisitingFaculty.m_err_no = "1";
        }
        finally
        {
            m_clsDalDataHandle = null;
            m_DataTable = null;
        }
        return m_clsBoAddVisitingFaculty;

    }
}
