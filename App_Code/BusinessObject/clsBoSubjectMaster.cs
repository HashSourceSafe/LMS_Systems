using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;
using System.Collections;

/// <summary>
/// Summary description for clsBoSubjectMaster
/// </summary>
namespace BO
{
    public class clsBoSubjectMaster
    {
        public clsBoSubjectMaster()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        public string m_subject_id = "0";
        public string m_subject_name = "";
        public string m_subject_code = "";
        public string m_sub_short_name = "";
        public string m_redio_theo_prac = "0";
        public string m_is_sub_activ = "0";
        public string m_course_id = "0";
        public string m_UnitFactor = "0";
        public string m_MaxScore = "0";
        public string m_CreditPoint = "0";
        public string m_err_msg = "";

        public string m_stream_id = "0";
        public string m_sem_no = "0";


    }
}