using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BAL;

/// <summary>
/// Summary description for WebServiceCoPoSetting
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
 [System.Web.Script.Services.ScriptService]
public class WebServiceCoPoSetting : System.Web.Services.WebService {

    public WebServiceCoPoSetting () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }


    [WebMethod(EnableSession = true)]
    public int SaveQuestionMaster( string p_PeriodId,
                            string p_CourseId,
                            string p_ExamMainId,
                            string p_ExamDetailId,
                            string p_QuestionId,
                            string p_SubjectId,
                            string p_SemNo,
                            string p_QuestionNo,
                            string p_QuestionDet,
                            string p_CoId,
                            string p_BloomId,
                            string p_Marks
 
                          )
    {

        int m_RetVal = 0;
        clsBalCoPoSetting m_clsBalCoPoSetting = new clsBalCoPoSetting();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();


        try
        {


            m_RetVal = m_clsBalCoPoSetting.SaveQuestionMaster(
                             p_PeriodId,
                             p_CourseId,
                             p_ExamMainId,
                             p_ExamDetailId,
                             p_QuestionId,
                             p_SubjectId,
                             p_SemNo,
                             p_QuestionNo,
                             p_QuestionDet,
                             p_CoId,
                             p_BloomId,
                             p_Marks);
 
        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsBalCoPoSetting = null;
        }
        return m_RetVal;
    }


    [WebMethod(EnableSession = true)]
    public int SavePoCoMarks(string p_CourseId,
                            string p_StreamId,
                            string p_PeriodId,
                            string p_SubjectId,
                            string p_SemNo,                 
                            string p_ExamMainId,
                            string p_ExamDetailId,
                            string[][] p_MainData,
                            string[][] p_DetData
                          )
    {

        int m_RetVal = 0;
        clsBalCoPoSetting m_clsBalCoPoSetting = new clsBalCoPoSetting();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();


        try
        {
            m_RetVal = m_clsBalCoPoSetting.SavePoCoMarks(
                             p_CourseId,
                             p_StreamId,
                             p_PeriodId,
                             p_SubjectId,
                             p_SemNo,
                             p_ExamMainId,
                             p_ExamDetailId,
                             p_MainData,
                             p_DetData
                            );

        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsBalCoPoSetting = null;
        }
        return m_RetVal;
    }



    [WebMethod(EnableSession = true)]
    public int SaveProgramOutcomeMst(string p_PeriodId,
                            string p_CourseId,
                            string p_PoTypeId,
                            string p_ProgId,
                            string p_Sl,
                            string p_Desp,
                            string p_Det

                          )
    {

        int m_RetVal = 0;
        clsBalCoPoSetting m_clsBalCoPoSetting = new clsBalCoPoSetting();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();


        try
        {


            m_RetVal = m_clsBalCoPoSetting.SaveProgramOutcomeMst(
                             p_PeriodId,
                             p_CourseId,
                             p_PoTypeId,
                             p_ProgId,
                             p_Sl,
                             p_Desp,
                             p_Det);

        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsBalCoPoSetting = null;
        }
        return m_RetVal;
    }


    [WebMethod(EnableSession = true)]
    public int SaveCourseOutcomeMst(string p_PeriodId,
                            string p_SubjecteId,
                            string p_co_id,
                            string p_Sl,
                            string p_Det

                          )
    {

        int m_RetVal = 0;
        clsBalCoPoSetting m_clsBalCoPoSetting = new clsBalCoPoSetting();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();


        try
        {


            m_RetVal = m_clsBalCoPoSetting.SaveCourseOutcomeMst(
                             p_PeriodId,
                             p_SubjecteId,
                             p_co_id,
                             p_Sl,
                             p_Det);

        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsBalCoPoSetting = null;
        }
        return m_RetVal;
    }



    [WebMethod(EnableSession = true)]
    public int SaveSubjectWiseCoPoMapping(string p_PeriodId,
                            string p_CourseId,
                            string p_SubjectId,
                            string[][] p_DetData
                          )
    {

        int m_RetVal = 0;
        clsBalCoPoSetting m_clsBalCoPoSetting = new clsBalCoPoSetting();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();


        try
        {
            m_RetVal = m_clsBalCoPoSetting.SaveSubjectWiseCoPoMapping(
                             p_PeriodId,
                             p_CourseId,
                             p_SubjectId,
                             p_DetData
                            );

        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsBalCoPoSetting = null;
        }
        return m_RetVal;
    }



    [WebMethod(EnableSession = true)]
    public int SaveSyllabus(string p_PeriodId,
                            string p_SubjectId,
                            string p_lecture,
                            string p_tutorial,
                            string p_practical,
                            string p_total_contact,
                            string p_credit,
                            string p_module_id,
                            string p_sub_module_id,
                            string p_sub_module_sl,
                            string p_topic,
                            string p_details,
                            string p_class_count
                          )
    {

        int m_RetVal = 0;
        clsBalCoPoSetting m_clsBalCoPoSetting = new clsBalCoPoSetting();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();


        try
        {
            m_RetVal = m_clsBalCoPoSetting.SaveSyllabus(
                             p_PeriodId,
                             p_SubjectId,
                             p_lecture,
                             p_tutorial,
                             p_practical,
                             p_total_contact,
                             p_credit,
                             p_module_id,
                             p_sub_module_id,
                             p_sub_module_sl,
                             p_topic,
                             p_details,
                             p_class_count
                            );

        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsBalCoPoSetting = null;
        }
        return m_RetVal;
    }



    [WebMethod(EnableSession = true)]
    public int RemoveSyllabusModule(string p_PeriodId,
                            string p_SubjectId,
                            string p_module_id,
                            string p_sub_module_id
                          )
    {

        int m_RetVal = 0;
        clsBalCoPoSetting m_clsBalCoPoSetting = new clsBalCoPoSetting();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();


        try
        {
            m_RetVal = m_clsBalCoPoSetting.RemoveSyllabusModule(
                             p_PeriodId,
                             p_SubjectId,
                             p_module_id,
                             p_sub_module_id
                            );

        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsBalCoPoSetting = null;
        }
        return m_RetVal;
    }

    [WebMethod(EnableSession = true)]
    public int GetSyllabusFromExcel(string p_file_name,int p_sheet_no)
    {

        int m_RetVal = 0;
        clsBalCoPoSetting m_clsBalCoPoSetting = new clsBalCoPoSetting();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();


        try
        {
            m_RetVal = m_clsBalCoPoSetting.GetSyllabusFromExcel(
                             p_file_name,
                             p_sheet_no
                            );

        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsBalCoPoSetting = null;
        }
        return m_RetVal;
    }



    [WebMethod(EnableSession = true)]
    public int SaveModuleDetExcel(string p_PeriodId,string p_SubjectId)
    {

        int m_RetVal = 0;
        clsBalCoPoSetting m_clsBalCoPoSetting = new clsBalCoPoSetting();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();


        try
        {
            m_RetVal = m_clsBalCoPoSetting.SaveModuleDetExcel(p_PeriodId,p_SubjectId);

        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsBalCoPoSetting = null;
        }
        return m_RetVal;
    }



    [WebMethod(EnableSession = true)]
    public int SaveCourseOutcomeMstExcel(string p_PeriodId, string p_SubjectId)
    {

        int m_RetVal = 0;
        clsBalCoPoSetting m_clsBalCoPoSetting = new clsBalCoPoSetting();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();


        try
        {
            m_RetVal = m_clsBalCoPoSetting.SaveCourseOutcomeMstExcel(p_PeriodId, p_SubjectId);

        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsBalCoPoSetting = null;
        }
        return m_RetVal;
    }

    
    [WebMethod(EnableSession = true)]
    public int SaveSubjectWiseCoPoMappingExcel(string p_branch_id, string p_course_id, string p_PeriodId, string p_SubjectId)
    {

        int m_RetVal = 0;
        clsBalCoPoSetting m_clsBalCoPoSetting = new clsBalCoPoSetting();
        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();


        try
        {
            m_RetVal = m_clsBalCoPoSetting.SaveSubjectWiseCoPoMappingExcel(p_branch_id, p_course_id, p_PeriodId, p_SubjectId);

        }
        catch
        {
            m_RetVal = 1;
        }
        finally
        {
            m_clsBalCommonLib = null;
            m_clsBalCoPoSetting = null;
        }
        return m_RetVal;
    }
//--------------------------------------------------
    
}
