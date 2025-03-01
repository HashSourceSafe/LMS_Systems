using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Web;
using BAL;


/// <summary>
/// Summary description for clsXmlCreateRoutineTemplate
/// </summary>
/// 
namespace XMLOBJ
{
    public class clsXmlCreateRoutineTemplate
    {
        XElement m_XmlRoot;
        XElement m_RowXml;
        int m_ErrorNo;
        
        public clsXmlCreateRoutineTemplate()
        {
            //
            // TODO: Add constructor logic here
            //
            m_XmlRoot = new XElement("ROUTINE_DRAFT");
            m_ErrorNo = 0;
        }

        ~clsXmlCreateRoutineTemplate()
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
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "PeriodId", 0);
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "PeriodName", "-");
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "FacultyCode", "");
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "FacultyName", "");
                m_clsBalCommonLib.CreateXmlElement(m_RowXml, "FacultyShortName", "");
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