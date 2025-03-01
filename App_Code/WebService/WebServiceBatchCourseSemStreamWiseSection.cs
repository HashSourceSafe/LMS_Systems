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
/// Summary description for WebServiceBatchCourseSemStreamWiseSection
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebServiceBatchCourseSemStreamWiseSection : System.Web.Services.WebService {

    public WebServiceBatchCourseSemStreamWiseSection () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod(EnableSession = true)]
    public string SaveData(string[][] p_ValArr)
    {

        string m_RetVal = "ERROR";
        clsBalBatchCourseSemStreamWiseSection m_clsBalBatchCourseSemStreamWiseSection = new clsBalBatchCourseSemStreamWiseSection();
        clsBoBatchCourseSemStreamWiseSection m_clsBoBatchCourseSemStreamWiseSection = new clsBoBatchCourseSemStreamWiseSection();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();

        try
        {
            m_clsBoBatchCourseSemStreamWiseSection.m_college_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_college_id");
            m_clsBoBatchCourseSemStreamWiseSection.m_batch_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_batch_id");
            m_clsBoBatchCourseSemStreamWiseSection.m_course_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_course_id");
            m_clsBoBatchCourseSemStreamWiseSection.m_stream_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_stream_id");
            m_clsBoBatchCourseSemStreamWiseSection.m_semester_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_semester_id");
            m_clsBoBatchCourseSemStreamWiseSection.m_section_id = m_clsBalCommonLib.GetDataFrom2DArray(p_ValArr, 0, 1, "cntxt_section_id");


            if (m_clsBalBatchCourseSemStreamWiseSection.SaveData(m_clsBoBatchCourseSemStreamWiseSection) > 0)
            {
                m_RetVal =m_clsBoBatchCourseSemStreamWiseSection.m_error_msg;
            }
            else
            {
                m_RetVal = m_clsBoBatchCourseSemStreamWiseSection.m_error_msg;
            }

        }
        catch
        {
            m_RetVal = "ERROR";
        }
        finally
        {
            m_clsBoBatchCourseSemStreamWiseSection = null;
            m_clsBalCommonLib = null;
            m_clsBalBatchCourseSemStreamWiseSection = null;
        }
        return m_RetVal;
    }
    
}
