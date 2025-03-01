using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Web;
using BAL;

/// <summary>
/// Summary description for clsXmlVerifyExamForm
/// </summary>
/// 
namespace XMLOBJ
{
    public class clsXmlVerifyExamForm
    {
        XElement m_XmlRoot;
        XElement m_RowXml;
        int m_ErrorNo;
        public clsXmlVerifyExamForm()
        {

            //
            // TODO: Add constructor logic here
            //
            m_XmlRoot = new XElement("APP_DET");
            m_ErrorNo = 0;
        }

        ~clsXmlVerifyExamForm()
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
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "std_id", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "course_id", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "stream_id", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "batch_id", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "curr_sem_id", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "class_attd", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "remarks", "");
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "is_allow", 0);
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