using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for clsBoDateWiseRoutineAllocation
/// </summary>
namespace BO
{
    public class clsBoDateWiseRoutineAllocation
    {
        public clsBoDateWiseRoutineAllocation()
        {

        }
        public string m_college_id = "0";
        public string m_from_date = "0";
        public string m_to_date = "0";
        public string m_semester_id = "0";
        public string m_batch_id = "0";
        public string m_course_id = "0";
        public string m_stream_id = "0";
        public string m_section_id = "0";
        public string m_group_id = "0";
        public string m_subject_id = "0";
        public string m_err_msg = "";
        public string m_from_year = "";
        public string m_to_year = "";
        public string m_from_month = "";
        public string m_to_month = "";
        public string m_last_attendance_date = "";

        public int m_RetVal;
        public string[] m_routine_header;
        public string[][] m_routine_data;

        public string m_start_year_month="0";
        public string m_end_year_month="0";
        

        
    }
}