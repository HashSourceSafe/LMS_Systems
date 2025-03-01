using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Web;
using BAL;
/// <summary>
/// Summary description for clsXmlBatchCourseStreamSemWiseSubjectSettingDet
/// </summary>
namespace XMLOBJ
{
    public class clsXmlBatchCourseStreamSemWiseSubjectSettingDet
    {
        XElement m_XmlRoot;
        XElement m_RowXml;
        int m_ErrorNo;
        public clsXmlBatchCourseStreamSemWiseSubjectSettingDet()
        {
            m_XmlRoot = new XElement("SUBJECTS_DET");
            m_ErrorNo = 0;
        }
        ~clsXmlBatchCourseStreamSemWiseSubjectSettingDet()
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
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "m_is_selected", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "m_subject_id", 0);
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