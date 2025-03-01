using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for clsBoShowFacultyDetailsEmpCodeWise
/// </summary>
public class clsBoShowFacultyDetailsEmpCodeWise
{
	public clsBoShowFacultyDetailsEmpCodeWise()
	{
		//
		// TODO: Add constructor logic here
		//
	}
    public int m_RetVal;
    public string[] m_routine_header;
    public string[][] m_routine_data;

    public string[][] m_routine_data_mon;
    public string[][] m_routine_data_tue;
    public string[][] m_routine_data_wed;
    public string[][] m_routine_data_thur;
    public string[][] m_routine_data_fri;
    public string[][] m_routine_data_sat;

    public string m_attendance_date = "01/01/1900";
    public string m_batch_id = "0";
    public string m_course_id = "0";
    public string m_stream_id = "0";
    public string m_semester_id = "0";
    public string m_section_id = "0";
    public string m_group_id = "0";
    public string m_subject_id = "0";
    public string m_faculty_code = "";

    public string m_college_id = "0";
    public string m_is_gen_qr_code = "0";
    public string m_topic_delivered = "";


    public string[] m_calender_header;
    public string[][] m_calender_data;
}