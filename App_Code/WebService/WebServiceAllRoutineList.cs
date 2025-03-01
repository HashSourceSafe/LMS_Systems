using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.IO;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections;
using BAL;
using DAL;
using BO;
using System.Data;

/// <summary>
/// Summary description for WebServiceAllRoutineList
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebServiceAllRoutineList : System.Web.Services.WebService {

    public WebServiceAllRoutineList () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
        
    }

    [WebMethod(EnableSession = true)]
    public void SessionAndRedirect(string cntxt_college_id,
                                    string cntxt_course_id,
                                    string cntxt_semester_type_id,
                                    string cntxt_batch_id, 
                                    string cntxt_stream_id, 
                                    string cntxt_section_id, 
                                    string cntxt_sem_id)
    {
        Session["cntxt_batch_id"] = cntxt_batch_id;
        Session["cntxt_course_id"] = cntxt_course_id;
        Session["cntxt_stream_id"] = cntxt_stream_id;
        Session["cntxt_section_id"] = cntxt_section_id;
        Session["cntxt_sem_id"] = cntxt_sem_id;
    }
    
}
