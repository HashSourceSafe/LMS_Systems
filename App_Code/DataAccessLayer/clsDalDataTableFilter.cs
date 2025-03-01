using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;

/// <summary>
/// Summary description for clsDalDataTableFilter
/// </summary>
/// 
namespace DAL
{
    public class clsDalDataTableFilter
    {
        private DataView m_data_view;
        public string p_Filter;
        public string p_SortOrder;


        public clsDalDataTableFilter()
        {
            //
            // TODO: Add constructor logic here
            //

            p_Filter = "";
            p_SortOrder = "";
        }

        ~clsDalDataTableFilter()
        {
            m_data_view = null;
        }

        public DataView GetDataView(DataTable p_DataTable)
        {
            try
            {
                m_data_view = null;
                m_data_view = new DataView(p_DataTable);
                m_data_view.RowFilter = p_Filter;
                m_data_view.Sort = p_SortOrder;
                
            }
            catch
            {
                m_data_view = null;
            }
            finally
            {
            }


            return m_data_view;
        }


    }
}