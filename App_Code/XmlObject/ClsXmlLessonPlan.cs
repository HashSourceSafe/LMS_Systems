using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Web;
using BAL;

/// <summary>
/// Summary description for ClsXmlLessonPlan
/// </summary>
/// 
namespace XMLOBJ
{

    public class ClsXmlLessonPlan
    {
        XElement m_XmlRoot;
        XElement m_RowXml;
        int m_ErrorNo;
        public ClsXmlLessonPlan()
        {
            //
            // TODO: Add constructor logic here
            //

            m_XmlRoot = new XElement("Lesson_plan_det");
            m_ErrorNo = 0;
        }

        ~ClsXmlLessonPlan()
        {
            m_XmlRoot = null;
            m_RowXml = null;
        }
        public void AddBlankRow()
        {
            clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
            m_RowXml = null;
            m_RowXml = new XElement("RECORD");

            try
            {
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "DAY_ID", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "DAY_DATE", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "PERIOD_ID", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "SUBJECT_ID", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "BATCH", "");
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "COURSE_ID", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "STREAM_ID", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "SECTION_ID", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "SEMESTER_ID", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "GROUP_ID", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "IS_RECESS", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "FACULTY_NAME", "");
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "FACULTY_nKEY_ID", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "IS_ACTIVE", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "IS_ACTIVE_DESP", "");
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "Topic", "");

                m_XmlRoot.Add(m_RowXml);
            }
            catch (Exception ex)
            {
                m_ErrorNo++;
            }
            finally
            {
                m_clsBalCommonLib = null;
            }
        }

        public void UpdateData(string p_FieldName, object p_Value)
        {
            try
            {
                m_RowXml.Element(p_FieldName).SetValue(p_Value);
            }
            catch (Exception ex)
            {
                m_ErrorNo++;
            }
            finally
            {
            }
        }

        public XElement GetXml()
        {
            return m_XmlRoot;
        }

        public int GetErrorNo()
        {
            return m_ErrorNo;
        }
    }

}