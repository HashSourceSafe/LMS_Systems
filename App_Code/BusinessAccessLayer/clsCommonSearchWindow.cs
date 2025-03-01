using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Collections;
using System.Xml.Linq;
using BAL;
using DAL;
using BO;

/// <summary>
/// Summary description for clsCommonSearchWindow
/// </summary>
/// 
namespace BAL
{
    public class clsCommonSearchWindow
    {
        public DataTable m_MasterDataTable;
        public DataView m_DataView;
        public int m_IsGridpopulateOnLoad; 

        public string m_strFieldName;
        public string m_strColumnName;
        public string m_strIsVisible;
        public string m_strColumnWidth;
        public string m_strParentWindowControlId;
        public string[] m_DataKeyNames;
        public string m_strGetFieldName;
        public string m_DefaultSearchField;
        public string m_AutoPostBackControl;







 
        public clsCommonSearchWindow()
        {
            m_IsGridpopulateOnLoad = 0;
            m_AutoPostBackControl = "NA";
        }

        ~clsCommonSearchWindow()
        {
        }
    }
}