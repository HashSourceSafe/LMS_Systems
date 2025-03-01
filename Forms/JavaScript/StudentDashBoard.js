var radio_theo_prac;
var chk_is_sub_active;
var m_student_function;
var m_lesson_plan_function;

var FieldArray = new Array();



var m_array_subject_temp = new Array();
var m_array_colour_code = new Array();

function RightMouseClick(event) {
    if (event.which == 3) {
        //alert(window.document.nodeName);
        //event.preventDefault();
    }
}

//---------------------------------------------
function ExitWindow() {
    try {
        WebServiceMasters.RemoveSessionAllVar(OnCompleteExitWindow, OnErrorExitWindow, OnTimeOutExitWindow);
    }
    catch (err) {
        alert('ExitWindow() - Error In JScript');
    }
}
function OnCompleteExitWindow(arg) {
    if (arg > 0) {
        alert('Error in WebMethod');
        window.close();
    }
    else {
        window.close();
    }
}
function OnErrorExitWindow(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutExitWindow(arg) {
    alert("Time Out");
}
//---------------------------------------------

function CheckKeyUp(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;
    }
    catch (err) {
        alert("CheckKeyUp() - JScript Error");
    }
}


function CheckKeyDown(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;
        m_curr_ctrl = document.activeElement;

        //Enter,PageUp,PageDown,F2 key code
        if (unicode == 13 || unicode == 33 || unicode == 34 || unicode == 113 || unicode == 112) {

            if (unicode == 13 && m_curr_ctrl.type == "textarea") {
            }
            else {
                event.preventDefault();
            }
        }

    }
    catch (err) {
        alert("CheckKeyDown() - JScript Error");
    }
}

function ShowHidePanel(p_flag) {
    try {


        ShowHideControl("div_own_att_content_block", 0);
        ShowHideControl("div_routine_content_block", 0);

        SetControlClass("cmd_routine", "btn btn-link btn-block");
        SetControlClass("cmd_own_attendance", "btn btn-link btn-block");

        if (p_flag == 1) {
            ShowHideControl("div_routine_content_block", 1);
            ShowHideControl("div_own_att_content_block", 0);
            SetControlClass("cmd_routine", "btn btn-link btn-block active");
        }
        else if (p_flag == 2) {
            ShowHideControl("div_own_att_content_block", 1);
            ShowHideControl("div_routine_content_block", 0);
            SetControlClass("cmd_own_attendance", "btn btn-link btn-block active");
        }


    }
    catch (err) {
        alert("ShowHidePanel() - JScript Error");
    }
}

function Init() {
    try {
        SetAutoCompleteOff();
        SetFocusOffByTagName("DIV");
        SetDateEventByTagName();

        //========================Populate Saved Resource===================================//
        m_session_var_name = "S_RESOURCE_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_resource_list", "m_grid_resource_list", "m_panel_resource_det", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("Link,is_upload");
        DynamicHtmlTemplate_SetControlName("ctxt_resource_link,cntxt_is_upload");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("ViewResource();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_resource_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_resource_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_resource_list');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("UniqueKeyId,UniqueKeyId,hidden_textbox,R,10px");
        m_field_arr.push("ResourceTypeId,ResourceTypeId,hidden_textbox,R,10px");
        m_field_arr.push("is_upload,is_upload,hidden_textbox,R,10px");

        m_field_arr.push("Edit,Edit,read_only_textbox,L,5px");
        m_field_arr.push("ResourceTypeName,Resource Type,read_only_textbox,L,10px");
        m_field_arr.push("Desp,Desp,read_only_textbox,L,30px");
        m_field_arr.push("Link,Link,read_only_textbox,L,20px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //========================Populate Attd===================================//
        m_session_var_name = "S_ATTD_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_attd_list", "m_grid_attd_list", "div_monthly_attendance_date", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("date");
        DynamicHtmlTemplate_SetControlName("ctxt_current_date");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("ViewOwnAttendanceDayWise();");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
 

        m_field_arr.push("date,Date,read_only_textbox,L,10px");
        m_field_arr.push("day,Day,read_only_textbox,L,10px");
        m_field_arr.push("schedule_class,Schedule Class,read_only_textbox,L,10px");
        m_field_arr.push("present,Present,read_only_textbox,L,10px");
        m_field_arr.push("percentage,Percentage,read_only_textbox,L,10px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //========================Populate Day Wise Attd===================================//
        m_session_var_name = "S_DAY_WISE_ATTD_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_day_wise_list", "m_grid_day_wise_list", "m_panel_day_wise_attd", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("concat_data");
        DynamicHtmlTemplate_SetControlName("ctxt_concat_data");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("GetDetailsForLessonPlan();");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();


        m_field_arr.push("concat_data,concat_data,hidden_textbox,L,10px");
        m_field_arr.push("subject_name,Subject,read_only_textbox,L,10px");
        m_field_arr.push("period1,Period,read_only_textbox,L,10px");
        m_field_arr.push("faculty,Faculty,read_only_textbox,L,10px");
        m_field_arr.push("stat,Attendance,read_only_textbox,L,10px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);


        ShowHidePanel('1');
        ShowHideControl("div_day_wise_attd", 0);
        GetConsolidateAttendance();
        

    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}


//---------------------------------------------------------------
function ViewAttendanceCalendar() {
    try {
        FieldArray = [];
        FieldArray.push("day1");
        FieldArray.push("day2");
        FieldArray.push("day3");
        FieldArray.push("day4");
        FieldArray.push("day5");
        FieldArray.push("day6");
        FieldArray.push("day7");


        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_year = GetValueByCtrlName("cntxt_year");
        cntxt_month = GetValueByCtrlName("cntxt_month");
        ctxt_student_code = GetValueByCtrlName("ctxt_student_code");


        m_mm_year = GetMonthName(cntxt_month) + " - " + cntxt_year
        SetInnerHtml("tabName", m_mm_year);
        

        var m_sp_param = new Array();

        m_sp_param.push("@P_COLLEGE_ID,INT," + cntxt_college_id);
        m_sp_param.push("@P_STUDENT_CODE,VARCHAR," + ctxt_student_code);
        m_sp_param.push("@P_YEAR,INT," + cntxt_year);
        m_sp_param.push("@P_MONTH,INT," + cntxt_month);



        ShowWaitMsgWnd("Please Wait");
        WebServiceMasters.GetData("NA", FieldArray, m_sp_param,
                                  "Proc_Get_Student_Date_Wise_Schedule_Vs_Attendance", 0,
                                   OnComplete_ViewAttendanceCalendar,
                                   OnError_ViewAttendanceCalendar,
                                   OnTimeOut_ViewAttendanceCalendar);


    }
    catch (err) {
        alert("ViewAttendanceCalendar() - JScript Error");
    }
}
function OnComplete_ViewAttendanceCalendar(arg) {
    DestroyWaitMsgWnd();

   

    if (parseFloat(arg.m_Count) > -1) {

        CreateDateWiseRoutineCalender(arg.m_List);
    }
    else {
        alert("Data Not Found");
    }

    //DisplayLessonPlanResourseList();

}
function OnError_ViewAttendanceCalendar(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_ViewAttendanceCalendar(arg) {
    alert("Time Out");
}
//---------------------------------------------------------------

function RemoveDateWiseRoutineMatrix() {
    try {

        m_div_routine_container = document.getElementById("div_date_wise_routine_container");

        while (m_div_routine_container.hasChildNodes()) {
            m_div_routine_container.removeChild(m_div_routine_container.firstChild);
        }
    }
    catch (err) {
    }
}



function CreateDateWiseRoutineCalender(m_array_routine_data) {
    try {
        RemoveDateWiseRoutineMatrix();

        div_date_wise_routine_container = document.getElementById("div_date_wise_routine_container");

        var m_master_table = document.createElement('table');
        m_master_table.setAttribute('class', "");

        /*********Create Heading***********/
        var m_table_header = document.createElement('thead');
        var m_table_row = document.createElement('tr');

        for (iCtr = 1; iCtr <= 7; iCtr++) {
            if (iCtr == 1) {
                m_value = "Sun";
            }
            else if (iCtr == 2) {
                m_value = "Mon";
            }
            else if (iCtr == 3) {
                m_value = "Tue";
            }
            else if (iCtr == 4) {
                m_value = "Wed";
            }
            else if (iCtr == 5) {
                m_value = "Thu";
            }
            else if (iCtr == 6) {
                m_value = "Fri";
            }
            else if (iCtr == 7) {
                m_value = "Sat";
            }


            var m_table_col = document.createElement('td');
            m_table_col.innerHTML = m_value;
            m_table_row.appendChild(m_table_col);

            
        }
        m_table_header.appendChild(m_table_row);
        m_master_table.appendChild(m_table_header);


        /*********Create details***********/
        var m_table_body = document.createElement('tbody');


        for (iCtr = 0; iCtr <= m_array_routine_data.length - 1; iCtr++) {
            var m_table_row = document.createElement('tr');


            for (iCol = 0; iCol <= m_array_routine_data[iCtr].length - 1; iCol++) {

                var m_table_col = document.createElement('td');
                m_table_col.setAttribute('class', "available");
                m_current_val = m_array_routine_data[iCtr][iCol];
                m_current_arr = m_current_val.split("<>");

                if (m_current_arr.length < 3) {
                    m_data = "";
                    m_table_col.innerHTML = m_data;
                    m_table_row.appendChild(m_table_col);
                }
                else {
                    if (m_current_arr[1] == "") {
                        m_data = m_current_arr[0];
                    }
                    else {
                        m_date = m_current_arr[2];
                        m_function_lesson_plan = "onclick=ViewOwnAttendanceDayWise('" + m_date + "');";
                        m_function_lesson_plan = m_function_lesson_plan.replace(/ /g, "#");

                        m_attd_array = m_current_arr[1].split("/");
                        if (parseFloat(m_attd_array[0]) > 0 && parseFloat(m_attd_array[0]) < parseFloat(m_attd_array[1])) {
                            m_data = m_current_arr[0] + "<br><span " + m_function_lesson_plan + " class='some-data-uplodaded'>" + m_current_arr[1] + "</span>";
                        }
                        else if (parseFloat(m_attd_array[0]) == parseFloat(m_attd_array[1])) {
                            m_data = m_current_arr[0] + "<br><span " + m_function_lesson_plan + " class='all-uplodaded'>" + m_current_arr[1] + "</span>";
                        }
                        else {
                            m_data = m_current_arr[0] + "<br><span " + m_function_lesson_plan + " class='data-not-uplodaded'>" + m_current_arr[1] + "</span>";
                        }
                    }

                    m_table_col.innerHTML = m_data;
                    m_table_row.appendChild(m_table_col);
                }




            }
            m_table_body.appendChild(m_table_row);

        }
        m_master_table.appendChild(m_table_body);

        div_date_wise_routine_container.appendChild(m_master_table);



    }
    catch (err) {
        alert("CreateDateWiseRoutineCalender() - JScript Error");
    }
}



function GetDetailsForLessonPlan() {
    try {
        $($(this).attr("exampleModalCenter")).modal("show");
        m_param1 = GetValueByCtrlName("ctxt_concat_data");

        m_param1 = m_param1.split("_");


        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");       

        cntxt_selected_period_id=m_param1[0]; //Period
        cntxt_subject_id=m_param1[1]; //Subject
        cntxt_course_id=m_param1[2]; //Course
        cntxt_stream_id=m_param1[3]; //Stream
        cntxt_section_id=m_param1[4]; //Section
        cntxt_semester_id=m_param1[5]; //semester
        cntxt_group_id=m_param1[6]; //group
        cntxt_batch_id=m_param1[7]; //batch
        ctxt_att_date=m_param1[8]; //date

        


        var m_sp_param = new Array();
        m_sp_param.push("@p_Date,DATETIME," + ctxt_att_date);
        m_sp_param.push("@p_Batch,INT," + cntxt_batch_id);
        m_sp_param.push("@p_CourseId,INT," + cntxt_course_id);
        m_sp_param.push("@p_StreamId,INT," + cntxt_stream_id);
        m_sp_param.push("@p_SectionId,INT," + cntxt_section_id);
        m_sp_param.push("@p_SemesterId,INT," + cntxt_semester_id);
        m_sp_param.push("@p_PeriodId,INT," + cntxt_selected_period_id);
        m_sp_param.push("@p_SubjectId,INT," + cntxt_subject_id);
        m_sp_param.push("@p_GroupId,INT," + cntxt_group_id);
        m_sp_param.push("@p_CollegeId,INT," + cntxt_college_id);


        DynamicHtmlTemplate_PopulateGrid("m_key_resource_list", m_sp_param, "Proc_Get_Subject_Wise_Lesson_plan_Resource");


    }
    catch (err) {
        alert("GetDetailsForLessonPlan() - JScript Error");
    }
}


function ViewResource() {
    try {
        p_curr_ctrl_name = document.activeElement.id;
        m_curr_ctrl_prefix = "M_GRID_RESOURCE_LIST_CTRL_";

        if (p_curr_ctrl_name.indexOf(m_curr_ctrl_prefix + "EDIT") > -1) {
            ctxt_resource_link = GetValueByCtrlName("ctxt_resource_link");
            cntxt_is_upload = GetValueByCtrlName("cntxt_is_upload");


            if (parseFloat(cntxt_is_upload) == 0) {
                m_link = ctxt_resource_link;
            }
            else {
                m_link = "../LmsUploadContents/" + ctxt_resource_link;
            }

            window.open(m_link, "_blank");
        }


    }
    catch (err) {
        alert('ViewResource() - Error In JScript');
    }
}

function ViewOwnAttendance() {
    try {
        dtp_att_view_from_date = GetValueByCtrlName("dtp_att_view_from_date");       
        dtp_att_view_to_date = GetValueByCtrlName("dtp_att_view_to_date");       
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");       
        ctxt_student_code = GetValueByCtrlName("ctxt_student_code");       


        var m_sp_param = new Array();
        m_sp_param.push("@P_COLLEGE_ID,INT," + cntxt_college_id);
        m_sp_param.push("@P_STUDENT_CODE,VARCHAR," + ctxt_student_code);
        m_sp_param.push("@P_FROM_DATE,DATETIME," + dtp_att_view_from_date);
        m_sp_param.push("@P_TO_DATE,DATETIME," + dtp_att_view_to_date);


        DynamicHtmlTemplate_PopulateGrid("m_key_attd_list", m_sp_param, "Proc_Get_Student_Date_Wise_Schedule_Vs_Attendance");
    }
    catch (err) {
        alert("ViewOwnAttendance() - JScript Error");
    }
}


//---------------------------------------------------------------
function ViewOwnAttendanceDayWise(p_curr_date) {
    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_student_code = GetValueByCtrlName("ctxt_student_code");


        var m_sp_param = new Array();
        m_sp_param.push("@P_COLLEGE_ID,INT," + cntxt_college_id);
        m_sp_param.push("@P_STUDENT_CODE,VARCHAR," + ctxt_student_code);
        m_sp_param.push("@P_FROM_DATE,DATETIME," + p_curr_date);
        m_sp_param.push("@P_TO_DATE,DATETIME," + p_curr_date);


        FieldArray = [];
        FieldArray.push("Period1");
        FieldArray.push("subject_name");
        FieldArray.push("faculty");
        FieldArray.push("stat");
        FieldArray.push("upload1");
        FieldArray.push("upload2");
        FieldArray.push("upload3");
        FieldArray.push("upload4");
        FieldArray.push("upload5");

        ShowWaitMsgWnd("Please Wait");
        WebServiceMasters.GetData("NA", FieldArray, m_sp_param,
                                  "Proc_Get_Student_Date_Wise_Schedule_Vs_Attendance_With_Subject", 0,
                                   OnComplete_ViewOwnAttendanceDayWise,
                                   OnError_ViewOwnAttendanceDayWise,
                                   OnTimeOut_ViewOwnAttendanceDayWise);


    }
    catch (err) {
        alert("ViewOwnAttendanceDayWise() - JScript Error");
    }
}
function OnComplete_ViewOwnAttendanceDayWise(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg.m_Count) > -1) {

        CreateDateWiseAttdTable(arg.m_List);
        
    }
    else {
        alert("Data Not Found");
    }

    //DisplayLessonPlanResourseList();

}
function OnError_ViewOwnAttendanceDayWise(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_ViewOwnAttendanceDayWise(arg) {
    alert("Time Out");
}
//---------------------------------------------------------------

function CreateDateWiseAttdTable(m_array_routine_data) {
    try {
        m_panel_day_wise_attd = document.getElementById("m_panel_day_wise_attd");

        while (m_panel_day_wise_attd.hasChildNodes()) {
            m_panel_day_wise_attd.removeChild(m_panel_day_wise_attd.firstChild);
        }

        m_panel_day_wise_attd = document.getElementById("m_panel_day_wise_attd");

        var m_master_table = document.createElement('table');
        m_master_table.setAttribute('class', "table table-bordered table-vertical-middle lacture");

        /*********Create Heading***********/
        var m_table_header = document.createElement('thead');
        var m_table_row = document.createElement('tr');

        for (iCtr = 1; iCtr <= 9; iCtr++) {
            if (iCtr == 1) {
                m_value = "Period";
            }
            else if (iCtr == 2) {
                m_value = "Subject";
            }
            else if (iCtr == 3) {
                m_value = "Faculty";
            }
            else if (iCtr == 4) {
                m_value = "Attendance";
            }
            else if (iCtr == 5) {
                m_value = "Notes/PPT";
            }
            else if (iCtr == 6) {
                m_value = "Assignment";
            }
            else if (iCtr == 7) {
                m_value = "Ext Resource";
            }
            else if (iCtr == 8) {
                m_value = "Video Lecture(Repository)";
            }
            else if (iCtr == 9) {
                m_value = "Class Lecture";
            }

            var m_table_col = document.createElement('td');
            m_table_col.innerHTML = m_value;
            m_table_row.appendChild(m_table_col);


        }
        m_table_header.appendChild(m_table_row);
        m_master_table.appendChild(m_table_header);


        /*********Create details***********/
        var m_table_body = document.createElement('tbody');


        for (iCtr = 0; iCtr <= m_array_routine_data.length - 1; iCtr++) {
            var m_table_row = document.createElement('tr');


            for (iCol = 0; iCol <= m_array_routine_data[iCtr].length - 1; iCol++) {

                var m_table_col = document.createElement('td');
                //m_table_col.setAttribute('class', "available");
                m_current_val = m_array_routine_data[iCtr][iCol];


                if (iCol < 4) {
                    m_table_col.innerHTML = m_current_val;
                    m_table_row.appendChild(m_table_col);
                }
                else {

                    m_arr_link = m_current_val.split("+++");
                    //alert(m_current_val);
                    //alert(m_arr_link);
                    m_link = "";
                    for (iLink = 0; iLink < m_arr_link.length; iLink++) {
                        if (m_arr_link[iLink].length > 0) {
                            m_func = "onclick=\"OpenResource('" + m_arr_link[iLink] + "');\"";
                            m_curr_link = "<div " + m_func + " class='handbook_botton'> <i class='fa fa-play'> </i> </div>";
                            m_link = m_link + m_curr_link;
                        }
                    }
                    m_table_col.innerHTML = m_link;
                    m_table_row.appendChild(m_table_col);
                }






            }
            m_table_body.appendChild(m_table_row);

        }
        m_master_table.appendChild(m_table_body);

        m_panel_day_wise_attd.appendChild(m_master_table);
        ShowHideControl("div_day_wise_attd", 1);

    }
    catch (err) {
        alert("Error - CreateDateWiseAttdTable()");
    }
}

function OpenResource(p_file) {
    window.open(p_file, "_blank");
}

function NavigateMonth(p_sign) {
    try {
        m_year = parseFloat(GetValueByCtrlName("cntxt_year"));
        m_month = parseFloat(GetValueByCtrlName("cntxt_month"));

        if (p_sign == "+") {
            m_month = m_month + 1;
            if (m_month > 12) {
                m_month = 1;
                m_year = m_year + 1;
            }
        }
        else {
            m_month = m_month - 1;
            if (m_month < 1) {
                m_month = 12;
                m_year = m_year - 1;
            }
        }

        SetValue("cntxt_year", m_year);
        SetValue("cntxt_month", m_month);

        SetValue("dtp_from_date", GetFirstDateOfMonth(m_year, m_month));
        SetValue("dtp_to_date", GetLastDateOfMonth(m_year, m_month));

        ViewAttendanceCalendar();
    }
    catch (err) {
        alert("Error - NavigateMonth()");
    }
}


function LogOut() {
    window.open("frmLogin.aspx", "_self");
}


//-------------------------------------------
function GetConsolidateAttendance() {
    try {
        FieldArray = [];
        FieldArray.push("total_class");
        FieldArray.push("attd");
        FieldArray.push("pcent");


        cntxt_academic_session = GetValueByCtrlName("cntxt_academic_session");
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_student_code = GetValueByCtrlName("ctxt_student_code");
        ctxt_sem_type = GetValueByCtrlName("ctxt_sem_type");

        if (ctxt_sem_type == "1") {
            ctxt_sem_type = "O";
        }
        else {
            ctxt_sem_type = "E";
        }



        var m_sp_param = new Array();

        m_sp_param.push("@P_SESSION_ID,INT," + cntxt_academic_session);
        m_sp_param.push("@p_COLLEGE_ID,INT," + cntxt_college_id);
        m_sp_param.push("@P_STUDENT_CODE,VARCHAR," + ctxt_student_code);
        m_sp_param.push("@P_SEM_TYPE,VARCHAR," + ctxt_sem_type);




        ShowWaitMsgWnd("Please Wait");
        WebServiceMasters.GetData("NA", FieldArray, m_sp_param,
                                  "Proc_Get_Attendence_percentage_For_Student", 0,
                                   OnComplete_GetConsolidateAttendance,
                                   OnError_GetConsolidateAttendance,
                                   OnTimeOut_GetConsolidateAttendance);

    }
    catch (err) {
        alert('GetConsolidateAttendance() - Error In JScript');
    }
}
function OnComplete_GetConsolidateAttendance(arg) {
    DestroyWaitMsgWnd();


    if (parseFloat(arg.m_Count) > -1) {

          SetInnerHtml("ctxt_cons_attd", arg.m_List[0][1]) ;
        SetInnerHtml("ctxt_cons_attd_total", arg.m_List[0][0]);


    }
    else {
        SetInnerHtml("ctxt_cons_attd", "");
        SetInnerHtml("ctxt_cons_attd_total", "");
    }
    ViewAttendanceCalendar();


}
function OnError_GetConsolidateAttendance(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_GetConsolidateAttendance(arg) {
    alert("Time Out");
}
//-------------------------------------------

