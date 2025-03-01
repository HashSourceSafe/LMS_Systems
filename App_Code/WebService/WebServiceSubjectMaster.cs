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
/// Summary description for WebServiceSubjectMaster
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebServiceSubjectMaster : System.Web.Services.WebService {

    public WebServiceSubjectMaster () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod(EnableSession = true)]
    public string SaveData(string[][] p_ValArr)
    {

        string m_RetVal = "ERROR";
        clsBalSubjectMaster m_clsBalSubjectMaster = new clsBalSubjectMaster();
        clsBoSubjectMaster m_clsBoSubjectMaster = new clsBoSubjectMaster();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            m_clsBoSubjectMaster.m_subject_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_subject_id");
            m_clsBoSubjectMaster.m_subject_name = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_subject_name");
            m_clsBoSubjectMaster.m_sub_short_name = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_sub_short_name"); 
            m_clsBoSubjectMaster.m_subject_code = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "ctxt_subject_code");
            m_clsBoSubjectMaster.m_redio_theo_prac = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "radio_theo_prac"); 
            m_clsBoSubjectMaster.m_UnitFactor = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "UnitFactor");
            m_clsBoSubjectMaster.m_MaxScore = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "MaxScore");
            m_clsBoSubjectMaster.m_CreditPoint = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "CreditPoint");
            m_clsBoSubjectMaster.m_is_sub_activ = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "chk_is_sub_active");
            m_clsBoSubjectMaster.m_course_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_course_id");

            m_clsBoSubjectMaster.m_stream_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_stream_id");
            m_clsBoSubjectMaster.m_sem_no = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_sem");



            if (m_clsBalSubjectMaster.SaveData(m_clsBoSubjectMaster) > 0)
            {
                m_RetVal = m_clsBoSubjectMaster.m_err_msg;
            }
            else
            {
                m_RetVal = " Data Saved:" + m_clsBoSubjectMaster.m_err_msg;
            }

        }
        catch
        {
            m_RetVal = "ERROR";
        }
        finally
        {
            m_clsBoSubjectMaster = null;
            m_clsBalCommonLib = null;
            m_clsBalSubjectMaster = null;
        }
        return m_RetVal;
    }

    
    
}
