using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Linq;
using BAL;

/// <summary>
/// Summary description for clsDalGenerateXml
/// </summary>
/// 

namespace DAL
{
    public class clsDalGenerateXml
    {
        XElement m_RootTag;
        XElement m_RowTag;
        XElement m_DataTag;
        clsBalCommonLib m_clsBalCommonLib;

        public clsDalGenerateXml()
        {
            //
            // TODO: Add constructor logic here
            //
            m_clsBalCommonLib = new clsBalCommonLib();
        }

        ~clsDalGenerateXml()
        {
            m_RootTag=null;
            m_RowTag=null;
            m_DataTag=null;
            m_clsBalCommonLib = null;
        }

        public void CreateXmlRoot(string p_RootName="ROOT")
        {
            try
            {
                if (m_RootTag == null)
                {
                    m_RootTag = new XElement(p_RootName);
                }
            }
            catch (Exception ex)
            {
            }
            finally
            {
            }
        }

        public void StartXmlRow(string p_RowName = "ROW")
        {
            try
            {
                if (m_RowTag == null)
                {
                    m_RowTag = new XElement(p_RowName);
                }
                else
                {
                }
            }
            catch (Exception ex)
            {
            }
            finally
            {
            }
        }

        public void EndXmlRow()
        {
            try
            {
                if (m_RowTag != null)
                {
                    m_RootTag.Add(m_RowTag);
                    m_RowTag = null;
                }
                else
                {
                }
            }
            catch (Exception ex)
            {
            }
            finally
            {
            }
        }

        public void AddXmlColumn(string p_ColumnName,object p_Object)
        {
            try
            {
                m_DataTag = null;
                m_DataTag = new XElement(p_ColumnName, p_Object);
                m_RowTag.Add(m_DataTag);
                m_DataTag = null;
            }
            catch (Exception ex)
            {
            }
            finally
            {
                m_DataTag = null;
            }
        }

        public XElement GetXml()
        {
            return m_RootTag;
        }


    }
}