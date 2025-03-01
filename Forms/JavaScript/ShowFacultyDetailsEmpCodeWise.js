﻿var radio_theo_prac;
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

        document.getElementById("cmd_set_remarks_all").disabled = true;
        document.getElementById("cmd_select_all").disabled = true;
        document.getElementById("cmd_desellect_all").disabled = true;
        document.getElementById("cmd_save").disabled = true;

        ShowHideControl("div_own_att_content_block", 0);
        ShowHideControl("div_routine_content_block", 0);
        ShowHideControl("div_weekly_routine_container", 0);
        ShowHideControl("div_button_block", 0);
        ShowHideControl("div_lesson_plan_block", 0);
        ShowHideControl("div_mentor_wise_student", 0);
        ShowHideControl("div_student_attendance_content_block", 0);

        SetControlClass("cmd_routine", "btn btn-link btn-block");
        SetControlClass("cmd_own_attendance", "btn btn-link btn-block");
        SetControlClass("cmd_std_attendance", "btn btn-link btn-block");
        SetControlClass("cmd_lesson_plan", "btn btn-link btn-block");
        SetControlClass("cmd_mentor_detail", "btn btn-link btn-block");

        if (p_flag == 1) {
            ShowHideControl("div_routine_content_block", 1);
            ShowHideControl("div_button_block", 1);
            ShowHideControl("div_own_att_content_block", 0);
            ShowHideControl("div_weekly_routine_container", 0);
            ShowHideControl("div_student_attendance_content_block", 0);
            ShowHideControl("div_lesson_plan_block", 0);
            ShowHideControl("div_mentor_wise_student", 0);
            SetControlClass("cmd_routine", "btn btn-link btn-block active");
            DynamicHtmlTemplate_DeleteAllControl('m_key_populate_student_detail');
            DynamicHtmlTemplate_DeleteAllControl('m_key_populate_assosiated_period');
        }
        else if (p_flag == 2) {
            ShowHideControl("div_own_att_content_block", 1);
            ShowHideControl("div_routine_content_block", 0);
            ShowHideControl("div_button_block", 0);
            ShowHideControl("div_weekly_routine_container", 0);
            ShowHideControl("div_student_attendance_content_block", 0);
            ShowHideControl("div_lesson_plan_block", 0);
            ShowHideControl("div_mentor_wise_student", 0);
            SetControlClass("cmd_own_attendance", "btn btn-link btn-block active");
            DynamicHtmlTemplate_DeleteAllControl('m_key_populate_student_detail');
            DynamicHtmlTemplate_DeleteAllControl('m_key_populate_assosiated_period');
        }

        else if (p_flag == 3) {
            ShowHideControl("div_student_attendance_content_block", 1);
            ShowHideControl("div_weekly_routine_container", 0);
            ShowHideControl("div_own_att_content_block", 0);
            ShowHideControl("div_routine_content_block", 0);
            ShowHideControl("div_button_block", 0);
            ShowHideControl("div_mentor_wise_student", 0);
            SetControlClass("cmd_std_attendance", "btn btn-link btn-block active");
            SetControlClass("cmd_lesson_plan", "btn btn-link btn-block");
        }

        else if (p_flag == 4) {

            ShowHideControl("div_weekly_routine_container", 0);
            ShowHideControl("div_routine_content_block", 1);
            ShowHideControl("div_button_block", 1);
            ShowHideControl("div_student_attendance_content_block", 0);
            ShowHideControl("div_own_att_content_block", 0);
            ShowHideControl("div_mentor_wise_student", 0);
            SetControlClass("cmd_routine", "btn btn-link btn-block active");

        }

        else if (p_flag == 5) {
            ShowHideControl("div_routine_content_block", 1);
            ShowHideControl("div_date_wise_routine_container", 1);
            ShowHideControl("div_button_block", 1);
            ShowHideControl("div_own_att_content_block", 0);
            ShowHideControl("div_weekly_routine_container", 0);
            ShowHideControl("div_student_attendance_content_block", 0);
            ShowHideControl("div_mentor_wise_student", 0);
            SetControlClass("cmd_routine", "btn btn-link btn-block active");
            ShowHideControl("div_date_wise_routine_container_calender", 0);

        }
        else if (p_flag == 6) {
            ShowHideControl("div_lesson_plan_block", 1);
            ShowHideControl("div_button_block", 1);
            ShowHideControl("div_own_att_content_block", 0);
            ShowHideControl("div_weekly_routine_container", 0);
            ShowHideControl("div_student_attendance_content_block", 0);
            ShowHideControl("div_mentor_wise_student", 0);
            SetControlClass("cmd_lesson_plan", "btn btn-link btn-block active");
            DynamicHtmlTemplate_DeleteAllControl('m_key_populate_student_detail');
            DynamicHtmlTemplate_DeleteAllControl('m_key_populate_assosiated_period');

        }

        else if (p_flag == 7) {
            ShowHideControl("div_mentor_wise_student", 1);
            ShowHideControl("div_lesson_plan_block", 0);
            ShowHideControl("div_button_block", 1);
            ShowHideControl("div_own_att_content_block", 0);
            ShowHideControl("div_weekly_routine_container", 0);
            ShowHideControl("div_student_attendance_content_block", 0);
            SetControlClass("cmd_mentor_detail", "btn btn-link btn-block active");
            DynamicHtmlTemplate_DeleteAllControl('m_key_populate_student_detail');
            DynamicHtmlTemplate_DeleteAllControl('m_key_populate_assosiated_period');

        }

    }
    catch (err) {
        alert("ShowHidePanel() - JScript Error");
    }
}


function SetPeriodRowEvent() {
    try {

        SetAllCheckBoxStatus("m_grid_assosiated_period", "APP");
        AddCtrlEvent("m_grid_assosiated_period", "APP", "onclick", "SetCheckBoxValue(this);SaveperiodId(this);");


    }
    catch (err) {
        alert("SetRowEvent() - jScript Error");
    }
}

//----------------------------------
function SaveperiodId(p_curr_ctrl) {
    try {

        m_period_id_ctrl = ParseGridControlNameToUpper(p_curr_ctrl, "APP", "PeriodId");

        m_app = p_curr_ctrl.value;
        m_perid_id = m_period_id_ctrl.value;

        ShowWaitMsgWnd("Please Wait");

        WebServiceShowFacultyDetailsEmpCodeWise.SavePeriodId(m_app,
                                            m_perid_id,
                                            OnCompleteDynamicHtmlTemplate_SaveperiodId,
                                            OnErrorDynamicHtmlTemplate_SaveperiodId,
                                            OnTimeOutDynamicHtmlTemplate_SaveperiodId
                                            );


    }
    catch (err) {
        alert("SaveperiodId() - jScript Error");
    }
}
function OnCompleteDynamicHtmlTemplate_SaveperiodId(arg) {
    DestroyWaitMsgWnd();
    if (arg > 0) {
        ShowMsgWnd("Error in Data Saving");
    }

}
function OnErrorDynamicHtmlTemplate_SaveperiodId(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutDynamicHtmlTemplate_SaveperiodId(arg) {
    alert("Time Out");
}
//----------------------------------

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


/*-------------------------------------------------------------------*/

function RemoveFacultyMonthlyMatrix() {
    try {

        m_div_monthly_attendance = document.getElementById("div_monthly_attendance");

        while (m_div_monthly_attendance.hasChildNodes()) {
            m_div_monthly_attendance.removeChild(m_div_monthly_attendance.firstChild);
        }
    }
    catch (err) {
    }
}


//--------------------------------------------------------------------

function RemoveDateWiseRoutineCalender(p_day_id) {
    try {

        m_div_name = "div_class_routine_" + p_day_id.toString();

        m_div_routine_container = document.getElementById(m_div_name);

        while (m_div_routine_container.hasChildNodes()) {
            m_div_routine_container.removeChild(m_div_routine_container.firstChild);
        }
    }
    catch (err) {
    }
}

function SetStudentRowEvent() {
    try {

        SetAllCheckBoxStatus("m_grid_student_detail", "APP");
        AddCtrlEvent("m_grid_student_detail", "APP", "onclick", "SetCheckBoxValue(this);SaveStudentId(this);");
        AddCtrlEvent("m_grid_student_detail", "Remarks", "onblur", "SaveStudentId(this);");

    }
    catch (err) {
        alert("SetStudentRowEvent() - jScript Error");
    }
}

//----------------------------------
function SaveStudentId(p_curr_ctrl_ref) {
    try {

        //        m_student_id_ctrl = ParseGridControlNameToUpper(p_curr_ctrl, "APP", "StudentId");

        //        m_app = p_curr_ctrl.value;
        //        m_student_id = m_student_id_ctrl.value;

        ShowWaitMsgWnd("Please Wait");

        /*=============================================*/
        m_session_var_name = "S_POPULATE_STUDENT_DETAIL";
        m_AllItemData = new Array;
        m_ItemRowKeyDataItem = new Array;

        m_grid_student_detail = window.document.getElementById('m_grid_student_detail');
        if (m_grid_student_detail == null) {
            ShowMsgWnd("Error In Updateing - create Error");
            return;
        }
        nCurrIndex = GetCurrentRowIndex(p_curr_ctrl_ref);
        app_ref = ComposeHtmlCtrlRef('m_grid_student_detail', 'APP', nCurrIndex);
        studentId_ref = ComposeHtmlCtrlRef('m_grid_student_detail', 'StudentId', nCurrIndex);
        m_Remarks = ComposeHtmlCtrlRef('m_grid_student_detail', 'Remarks', nCurrIndex);

        m_ItemRowKeyDataItem.push(studentId_ref.value);

        m_ColData = new Array;
        m_ColData.push(GetFieldValArr('App', app_ref.value));
        m_ColData.push(GetFieldValArr('Remarks', m_Remarks.value));

        m_AllItemData.push(m_ColData);
        WebServiceShowFacultyDetailsEmpCodeWise.SaveStudentId(m_session_var_name, m_AllItemData, m_ItemRowKeyDataItem, OnCompleteDynamicHtmlTemplate_SaveStudentId, OnErrorDynamicHtmlTemplate_SaveStudentId, OnTimeOutDynamicHtmlTemplate_SaveStudentId);
        //        WebServiceShowFacultyDetailsEmpCodeWise.SaveStudentId(m_app,
        //                                            m_student_id,
        //                                            OnCompleteDynamicHtmlTemplate_SaveStudentId,
        //                                            OnErrorDynamicHtmlTemplate_SaveStudentId,
        //                                            OnTimeOutDynamicHtmlTemplate_SaveStudentId
        //                                            );


    }
    catch (err) {
        alert("SaveperiodId() - jScript Error");
    }
}
function OnCompleteDynamicHtmlTemplate_SaveStudentId(arg) {
    DestroyWaitMsgWnd();
    if (arg > 0) {
        ShowMsgWnd("Error in Data Saving");
    }

}
function OnErrorDynamicHtmlTemplate_SaveStudentId(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutDynamicHtmlTemplate_SaveStudentId(arg) {
    alert("Time Out");
}
//----------------------------------

function Init() {
    try {
        SetAutoCompleteOff();
        SetFocusOffByTagName("DIV");
        //SetDateEventByTagName();

        GetConsolidateAttendance();
        ShowHidePanel('1');


        //=======Populate Order By===========
        m_session_var_name = "S_POPULATE_ORDER_BY";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_order_by", "m_grid_populate_order_by", "div_PopulateOrderBy", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("OrderById,OrderByName");
        DynamicHtmlTemplate_SetControlName("cntxt_order_by_id,ctxt_order_by");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("PopulateStudentDetails();");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("OrderById,OrderById,hidden_textbox,R,10px");
        m_field_arr.push("OrderByName,Order By,read_only_textbox,L,15px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Populate Routine Disp Type===========
        m_session_var_name = "S_POPULATE_ROUTINE_DISP_TYPE";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_routine_disp_type", "m_grid_populate_routine_disp_type", "div_routine_disp_type", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("DispTypeId,DispTypeName");
        DynamicHtmlTemplate_SetControlName("cntxt_routine_disp_by_id,ctxt_routine_disp_type");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("ViewDateWiseRoutine();");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("DispTypeId,DispId,hidden_textbox,R,10px");
        m_field_arr.push("DispTypeName,Display Type,read_only_textbox,L,15px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================


        //=======Display Student===========
        m_session_var_name = "S_POPULATE_STUDENT_DETAIL";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_student_detail", "m_grid_student_detail", "m_panel_student_att", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("AttendanceId,StudentId");
        DynamicHtmlTemplate_SetControlName("cntxt_Attendance_Id,cntxt_student_id");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("SetStudentRowEvent();SetControllEnabaled();");

        var m_field_arr = new Array();

        m_field_arr.push("APP,Select,read_only_textbox,C,2px");
        m_field_arr.push("AttendanceId,AttendanceId,hidden_textbox,L,20px");
        m_field_arr.push("StudentId,STUDENT ID,hidden_textbox,L,20px");

        m_field_arr.push("Student_College_Roll,College Roll,read_only_textbox,L,12px");
        m_field_arr.push("Student_Name,Name,read_only_textbox,L,18px");
        m_field_arr.push("Student_Unv_roll,University Roll,read_only_textbox,L,12px");
        m_field_arr.push("Student_Roll,Student_Roll,hidden_textbox,L,5px");
        m_field_arr.push("Penalty,Penalty,hidden_textbox,L,3px");
        m_field_arr.push("Remarks,Remarks,enable_textbox,L,5px");

        m_field_arr.push("BatchId,BatchId,hidden_textbox,L,20px");

        m_field_arr.push("CourseId,CourseId,hidden_textbox,L,10px");
        m_field_arr.push("CourseName,Course,read_only_textbox,L,5px");

        m_field_arr.push("StreamId,StreamId,hidden_textbox,L,15px");
        m_field_arr.push("StreamName,Stream,read_only_textbox,L,5px");

        m_field_arr.push("SemesterId,SemesterId,hidden_textbox,L,5px");
        m_field_arr.push("SemesterName,Semester,read_only_textbox,L,10px");

        m_field_arr.push("SectionId,SectionId,hidden_textbox,L,10px");
        m_field_arr.push("SectionName,Section,read_only_textbox,L,3px");

        m_field_arr.push("GroupId,GroupId,hidden_textbox,L,15px");
        m_field_arr.push("GroupName,Group,read_only_textbox,L,4px");

        m_field_arr.push("PeriodId,PeriodId,hidden_textbox,L,40px");
        m_field_arr.push("SubjectId,SubjectId,hidden_textbox,L,20px");
        m_field_arr.push("SubjectCode,Subject,read_only_textbox,L,5px");

        m_field_arr.push("is_applicable,is_applicable,hidden_textbox,L,15px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //==============================================


        //=======Display Associated Periods===========
        m_session_var_name = "S_POPULATE_ASSOSIATED_PERIOD";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_assosiated_period", "m_grid_assosiated_period", "m_panel_associated_periods", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("");
        DynamicHtmlTemplate_SetControlName("");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("SetPeriodRowEvent();PopulateStudentDetails();");

        var m_field_arr = new Array();
        m_field_arr.push("APP,Select,read_only_textbox,C,5px");
        m_field_arr.push("PeriodId,PeriodId,hidden_textbox,L,5px");
        m_field_arr.push("Period_Name,Period,read_only_textbox,L,8px");
        m_field_arr.push("Trans_Id,Trans_Id,hidden_textbox,L,10px");
        m_field_arr.push("Attendance_Taken,Status,read_only_textbox,L,7px");


        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //===========================================================


        //======= (Own Attendance) Populate Percentage of Attendance and taken,pending Classes faculty wise ===========
        m_session_var_name = "S_POPULATE_ATTENDANCE_PERCENTAGE";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_attendance_percent_fac_wise", "m_grid_populate_attendance_percent_fac_wise", "div_monthly_attendance_date", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(7);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_attendance_percent_fac_wise', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_attendance_percent_fac_wise', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_attendance_percent_fac_wise');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("DAY_ID,DAY_ID,hidden_textbox,L,5px");
        m_field_arr.push("DAY_NAME,Day,read_only_textbox,L,8px");
        m_field_arr.push("DAY_DATE,DATE,read_only_textbox,L,8px");
        m_field_arr.push("TOTAL_CLASSES,Tot Class,read_only_textbox,R,5px");
        m_field_arr.push("ATTEND_CLASSES,Attd Class,read_only_textbox,R,5px");
        m_field_arr.push("PERCENTAGE,%,read_only_textbox,R,5px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //======= Populate Faculty Day Period Details ===========
        m_session_var_name = "S_POPULATE_FACULTY_DAY_PERIOD_DET";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_faculty_day_period_det", "m_grid_populate_faculty_day_period_det", "div_get_faculty_day_period_det", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_faculty_day_period_det');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("Period_id,Period_id,hidden_textbox,L,5px");
        m_field_arr.push("period_name,PERIOD,read_only_textbox,L,8px");
        m_field_arr.push("is_class,CLASS EXIST,read_only_textbox,L,10px");
        m_field_arr.push("is_present,CLASS TAKEN,read_only_textbox,L,10px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //======= Populate  classes  Details for lesson plan ===========
        m_session_var_name = "S_POPULATE_CLASSES_DET";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_classes_det", "m_grid_populate_classes_det", "m_panel_classes_det", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("DAY_ID,DAY_NAME,DAY_DATE,PERIOD_ID,SUBJECT_ID,BATCH,COURSE_ID,STREAM_ID,SECTION_ID,SEMESTER_ID,GROUP_ID,IS_RECESS,FACULTY_CODE,FACULTY_NAME,FACULTY_SHORT_NAME,FACULTY_nKEY_ID,COLLEGE_ID,IS_ACTIVE,IS_ACTIVE_DESP,Topic");
        DynamicHtmlTemplate_SetControlName("cntxt_day_id,ctxt_day,ctxt_date,cntxt_period_id,cntxt_subject_id,ctxt_batch,cntxt_course_id,cntxt_stream_id,cntxt_section_id,cntxt_semester_id,cntxt_group_id,cntxt_is_recess,ctxt_emph_code,ctxt_emph_name,ctxt_emph_short_name,cntxt_faculty_key_id,cntxt_college_id,cntxt_is_active,ctxt_is_s_active,ctxt_topic");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();

        m_field_arr.push("DAY_ID,day_id,hidden_textbox,L,5px");
        m_field_arr.push("DAY_NAME,day,read_only_textbox,L,8px");
        m_field_arr.push("DAY_DATE,Date,read_only_textbox,L,10px");

        m_field_arr.push("PERIOD_ID,period_id,hidden_textbox,L,10px");
        m_field_arr.push("PERIOD_DESP,Period,read_only_textbox,L,10px");
        m_field_arr.push("SUBJECT_ID,Subject_id,hidden_textbox,L,10px");
        m_field_arr.push("SUBJECT_CODE,Subject_name,read_only_textbox,L,10px");
        m_field_arr.push("BATCH,batch,hidden_textbox,L,10px");
        m_field_arr.push("COURSE_ID,course_id,hidden_textbox,L,10px");
        m_field_arr.push("STREAM_ID,Stream_id,hidden_textbox,L,10px");
        m_field_arr.push("SECTION_ID,Section_id,hidden_textbox,L,10px");
        m_field_arr.push("SEMESTER_ID,Semeste_id,hidden_textbox,L,10px");
        m_field_arr.push("GROUP_ID,Group_id,hidden_textbox,L,10px");
        m_field_arr.push("IS_RECESS,Is_recess_id,hidden_textbox,L,10px");
        m_field_arr.push("FACULTY_CODE,faculty_code,hidden_textbox,L,10px");
        m_field_arr.push("FACULTY_NAME,faculty_name,hidden_textbox,L,10px");
        m_field_arr.push("FACULTY_SHORT_NAME,faculty_name,hidden_textbox,L,10px");
        m_field_arr.push("FACULTY_nKEY_ID,faculty_nkey_id,hidden_textbox,L,10px");
        m_field_arr.push("IS_ACTIVE,Is active,hidden_textbox,L,10px");
        m_field_arr.push("IS_ACTIVE_DESP,is active desp,hidden_textbox,L,10px");
        m_field_arr.push("Topic,Topic,enable_textbox_multiline,L,50px")

        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //========================Mentor Wise Student===================================//
        m_session_var_name = "S_POPULATE_MENTOR_WISE_STUDENT";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_mentor_wise_student", "m_grid_populate_mentor_wise_student", "m_panel_Student_list_mentor", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("student_id,semester_id,batch_id");
        DynamicHtmlTemplate_SetControlName("cntxt_student_id,cntxt_semester_id,cntxt_batch_id");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(20);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("SetAction();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_student', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_student', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_student');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("Click_Here,Select,read_only_textbox,C,5px");
        m_field_arr.push("student_id,STUDENT ID,hidden_textbox,R,10px");
        m_field_arr.push("student_name,STUDENT NAME,read_only_textbox,L,30px");
        m_field_arr.push("university_roll,UNIVERSITY ROLL,read_only_textbox,L,20px");
        m_field_arr.push("college_roll,STUDENT ROLL,read_only_textbox,L,20px");
        m_field_arr.push("stream_id,stream ID,hidden_textbox,R,10px");
        m_field_arr.push("semester_id,semester ID,hidden_textbox,R,10px");
        m_field_arr.push("batch_id,batch ID,hidden_textbox,R,10px");
        m_field_arr.push("batch_name,BATCH NAME,read_only_textbox,L,50px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);



        //========================Populate Syllabus===================================//
        m_session_var_name = "S_POPULATE_SYLLABUS";
        DynamicHtmlTemplate_AddKeyName("m_key_syllabus", "m_grid_syllabus", "div_syllabus", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("SubModuleId,ModuleDetail,Topic,Lecture");
        DynamicHtmlTemplate_SetControlName("cntxt_syllabus_id,ctxt_syllabus_details,ctxt_syllabus_topic,cntxt_max_lecture_count");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_syllabus', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_syllabus', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_syllabus');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("SubModuleId,SubModuleId,hidden_textbox,R,10px");
        m_field_arr.push("Lecture,Lecture,hidden_textbox,R,10px");

        m_field_arr.push("ModuleDetail,Module Details,read_only_textbox,L,30px");
        m_field_arr.push("Topic,Topic,read_only_textbox,L,20px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);


        //========================Populate Resource Type===================================//
        m_session_var_name = "S_RESOURCE_TYPE";
        DynamicHtmlTemplate_AddKeyName("m_key_resource_type", "m_grid_resource_type", "div_resource_type", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("resource_type_id,resource_type_name,is_upload");
        DynamicHtmlTemplate_SetControlName("ctxt_resource_type_id,ctxt_resource_type,cntxt_is_upload");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("LockResourceCtrl();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_resource_type', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_resource_type', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_resource_type');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("resource_type_id,resource_type_id,hidden_textbox,R,10px");
        m_field_arr.push("is_upload,is_upload,hidden_textbox,R,10px");

        m_field_arr.push("resource_type_name,Name,read_only_textbox,L,30px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);


        //========================Populate Saved Resource===================================//
        m_session_var_name = "S_RESOURCE_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_resource_list", "m_grid_resource_list", "m_panel_classes_det", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("UniqueKeyId,ResourceTypeId,ResourceTypeName,Desp,Link,is_upload");
        DynamicHtmlTemplate_SetControlName("ctxt_resource_unique_key_id,ctxt_resource_type_id,ctxt_resource_type,ctxt_resource_desp,ctxt_resource_link,cntxt_is_upload");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("EditResource();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_resource_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_resource_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
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



        //-------Adding Colour Code
        AddColourCode();

    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}

function SetControllEnabaled() {


    //    m_grid_student_detailnull = window.document.getElementById("m_grid_student_detail");

    //    if (m_grid_student_detailnull == null) {
    //        ShowMsgWnd("Can't Save - Select Faculty");
    //        LockControl("cmd_set_remarks_all123", 1);
    //        return false;
    //    }

    //    m_grid_student_detail = GetIdFromGrid("m_grid_student_detail", "StudentId", "StudentId");
    //    if (GetStringLength(m_grid_student_detail)< 0) {
    //        ShowMsgWnd("Can't Save - Select Faculty");
    //        LockControl("cmd_set_remarks_all", 1);
    //        return false;
    //    }

    try {

        var m_grid_student_detail_rowcount = window.document.getElementById('m_grid_student_detail').rows.length;
        if (m_grid_student_detail_rowcount <= 1) {
            alert("Can't take attendance, student list not created");
            document.getElementById("cmd_set_remarks_all").disabled = true;
            document.getElementById("cmd_select_all").disabled = true;
            document.getElementById("cmd_desellect_all").disabled = true;
            document.getElementById("cmd_save").disabled = true;
        }
        else {
            document.getElementById("cmd_set_remarks_all").disabled = false;
            document.getElementById("cmd_select_all").disabled = false;
            document.getElementById("cmd_desellect_all").disabled = false;
            document.getElementById("cmd_save").disabled = false;
        }
    }
    catch (err) {
        alert("Cancle() - JScript Error");
    }


}

function AddColourCode() {
    try {
        m_array_colour_code.push("btn-red")
        m_array_colour_code.push("btn-teal");
        m_array_colour_code.push("btn-yellow");
        m_array_colour_code.push("btn-green");
        m_array_colour_code.push("btn-brown");
        m_array_colour_code.push("btn-aqua");
        m_array_colour_code.push("btn-lime");
        m_array_colour_code.push("btn-purple");
        m_array_colour_code.push("btn-leaf");
        m_array_colour_code.push("btn-pink");
        m_array_colour_code.push("btn-dirtygreen");
        m_array_colour_code.push("btn-blue");
        m_array_colour_code.push("btn-amber");
        m_array_colour_code.push("btn-black");
        m_array_colour_code.push("btn-soundcloud");
        m_array_colour_code.push("btn-adn");
        m_array_colour_code.push("btn-twitter");
        m_array_colour_code.push("btn-vimeo");
        m_array_colour_code.push("btn-vk");
        m_array_colour_code.push("btn-yahoo");


    }
    catch (err) {
        alert("AddColourCode() - JScript Error");
    }
}

function ViewDateWiseRoutine() {
    try {
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
        m_disp_type = GetValueByCtrlName("cntxt_routine_disp_by_id");

        WebServiceShowFacultyDetailsEmpCodeWise.DispDateWiseRoutine(ctxt_emph_code,
                                                    dtp_from_date,
                                                    dtp_to_date,
                                                    m_disp_type,
                                                    OnCompleteViewDateWiseRoutine,
                                                    OnErrorViewDateWiseRoutine,
                                                    OnTimeOutViewDateWiseRoutine);
    }
    catch (err) {
        alert("ViewDateWiseRoutine() - JScript Error" + err);
    }
}
function OnCompleteViewDateWiseRoutine(arg) {
    if (arg.m_RetVal > 0) {
        alert('Error in WebMethod');
    }
    else {

        m_disp_type = GetValueByCtrlName("cntxt_routine_disp_by_id");

        m_array_routine_header = arg.m_routine_header;
        m_array_routine_data = arg.m_routine_data;

        if (m_disp_type == 0) {
            ShowHideControl("div_date_wise_routine_container", 0);
            ShowHideControl("div_date_wise_routine_container_calender", 1);

            CreateDateWiseRoutineCalender(arg.m_routine_data_mon, 2);
            CreateDateWiseRoutineCalender(arg.m_routine_data_tue, 3);
            CreateDateWiseRoutineCalender(arg.m_routine_data_wed, 4);
            CreateDateWiseRoutineCalender(arg.m_routine_data_thur, 5);
            CreateDateWiseRoutineCalender(arg.m_routine_data_fri, 6);
            CreateDateWiseRoutineCalender(arg.m_routine_data_sat, 7);

        }
        else if (m_disp_type == 1) {
            ShowHideControl("div_date_wise_routine_container_calender", 0);
            ShowHideControl("div_date_wise_routine_container", 1);
            CreateDateWiseRoutineMatrix();
        }
    }
}
function OnErrorViewDateWiseRoutine(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutViewDateWiseRoutine(arg) {
    alert("Time Out");
}
//-------------------------------------------



function ViewWeeklyRoutine() {
    try {

        ShowHidePanel('5');
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_academic_session = GetValueByCtrlName("cntxt_academic_session");

        if (GetValueByCtrlName("ctxt_sem_type") == "0") {
            m_sem_type = "E";
        }
        else {
            m_sem_type = "O";
        }
        m_disp_type = "1";
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");



        WebServiceShowFacultyDetailsEmpCodeWise.CreateWeeklyRoutine(cntxt_college_id,
                                                    cntxt_academic_session,
                                                    m_sem_type,
                                                    m_disp_type,
                                                    ctxt_emph_code,
                                                    OnCompleteViewWeeklyRoutine,
                                                    OnErrorViewWeeklyRoutine,
                                                    OnTimeOutViewWeeklyRoutine);

    }
    catch (err) {
    }
}
function OnCompleteViewWeeklyRoutine(arg) {
    if (arg.m_RetVal > 0) {
        alert('No Routine Found');
    }
    else {
        m_array_routine_header = arg.m_routine_header;
        m_array_routine_data = arg.m_routine_data;

        CreateWeklyRoutineMatrix();
    }
}
function OnErrorViewWeeklyRoutine(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutViewWeeklyRoutine(arg) {
    alert("Time Out");
}
//-------------------------------------------

function CreateWeklyRoutineMatrix() {
    try {
        RemoveDateWiseRoutineMatrix();

        div_date_wise_routine_container = document.getElementById("div_date_wise_routine_container");


        var m_master_table = document.createElement('table');
        m_master_table.setAttribute('class', "table table-bordered table-striped table-vertical-middle routine");

        /*********Create Heading***********/
        var m_table_header = document.createElement('thead');
        var m_table_row = document.createElement('tr');

        for (iCtr = 0; iCtr <= m_array_routine_header.length - 1; iCtr++) {
            var m_table_col = document.createElement('th');
            m_table_col.innerHTML = m_array_routine_header[iCtr];
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
                m_current_val = m_array_routine_data[iCtr][iCol];

                if (iCol <= 0) { /*Day Name*/
                    m_table_col.innerHTML = m_current_val;
                    m_table_row.appendChild(m_table_col);
                }
                else {
                    m_current_arr1 = m_current_val.split("|");
                    var m_inner_table = document.createElement('table');
                    m_inner_table.setAttribute('class', "tablechild fullwidth");


                    var m_inner_body = document.createElement('tbody');

                    for (ArrCtr = 0; ArrCtr <= m_current_arr1.length - 1; ArrCtr++) {
                        if (m_current_arr1[ArrCtr] != "") {

                            var m_inner_row = document.createElement('tr');
                            var m_inner_col = document.createElement('td');
                            if (m_current_arr1[0] != "") {
                                m_inner_col.innerHTML = m_current_arr1[ArrCtr];
                                //                                m_str_subject = m_current_arr1[1].substr(0, m_current_arr1[1].search("{"));
                                //                                SetRoutineBackColour(m_str_subject, m_inner_col);
                            }
                            m_inner_row.appendChild(m_inner_col);
                            m_inner_body.appendChild(m_inner_row);
                        }
                    }

                    m_inner_table.appendChild(m_inner_body);

                    m_table_col.appendChild(m_inner_table);
                    m_table_row.appendChild(m_table_col);


                }


            }
            m_table_body.appendChild(m_table_row);

        }
        m_master_table.appendChild(m_table_body);

        div_date_wise_routine_container.appendChild(m_master_table);

    }
    catch (err) {
        alert("CreateWeklyRoutineMatrix() - JScript Error");
    }
}


//***************************************************************

function CreateDateWiseRoutineMatrix() {
    try {


        RemoveDateWiseRoutineMatrix();

        div_date_wise_routine_container = document.getElementById("div_date_wise_routine_container");


        var m_master_table = document.createElement('table');
        m_master_table.setAttribute('class', "table table-bordered table-striped table-vertical-middle");



        /*********Create Heading***********/
        var m_table_header = document.createElement('thead');
        var m_table_row = document.createElement('tr');
        m_table_row.setAttribute("class", "btn-black");
        for (iCtr = 0; iCtr <= m_array_routine_header.length - 1; iCtr++) {
            var m_table_col = document.createElement('th');
            m_table_col.innerHTML = m_array_routine_header[iCtr];
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
                m_current_val = m_array_routine_data[iCtr][iCol];

                if (iCol <= 1) { /*Day Name*/
                    m_table_col.innerHTML = m_current_val;
                    m_table_row.appendChild(m_table_col);
                }
                else {
                    m_current_arr1 = m_current_val.split("|");
                    var m_inner_table = document.createElement('table');
                    m_inner_table.setAttribute('class', "tablechild fullwidth");


                    var m_inner_body = document.createElement('tbody');


                    for (ArrCtr = 0; ArrCtr <= m_current_arr1.length - 1; ArrCtr++) {
                        if (m_current_arr1[ArrCtr] != "") {
                            var m_inner_row = document.createElement('tr');
                            var m_inner_col = document.createElement('td');
                            m_current_arr2 = m_current_arr1[ArrCtr].split("<>");
                            m_param1 = m_current_arr2[1];

                            m_str_subject = m_current_arr2[0].substr(0, m_current_arr2[0].search("{"));
                            m_function = "onclick=\"GetStudentDetails('" + m_param1 + "');\"";
                            m_function_lesson_plan = "onclick=\"GetDetailsForLessonPlan('" + m_param1 + "','" + m_str_subject + "');\"";


                            if (m_current_arr2[0] != "") {
                                m_function = m_function.replace(/ /g, "#");
                                m_function_lesson_plan = m_function_lesson_plan.replace(/ /g, "#");

                                m_span = "<u " + m_function + "><div class='float-left click-btn'><img data-toggle='tooltip' title='Click to Record Class Attendance' src='assets-new/images/attendance-icon.png'/></div></u> ";
                                m_span_lesson_plan = " <u " + m_function_lesson_plan + "><div class='float-left click-btn'><img data-toggle='tooltip' title='Click to Create Lesson Plan' src='assets-new/images/task-edit-icon.png' /></div></u> ";
                                m_inner_col.innerHTML = m_span + m_span_lesson_plan + m_current_arr2[0];


                                //m_str_subject = m_current_arr2[0].substr(0, m_current_arr2[0].search("{"));

                                SetRoutineBackColour(m_str_subject, m_inner_col);
                            }


                            m_inner_row.appendChild(m_inner_col);
                            m_inner_body.appendChild(m_inner_row);
                        }
                    }

                    m_inner_table.appendChild(m_inner_body);

                    m_table_col.appendChild(m_inner_table);
                    m_table_row.appendChild(m_table_col);


                }


            }
            m_table_body.appendChild(m_table_row);

        }
        m_master_table.appendChild(m_table_body);

        div_date_wise_routine_container.appendChild(m_master_table);

    }
    catch (err) {
        alert("CreateDateWiseRoutineMatrix() - JScript Error");
    }
}


//***************************************************************

function CreateDateWiseRoutineCalender(p_data_arr, p_day_id) {
    try {


        RemoveDateWiseRoutineCalender(p_day_id);

        m_div_name = "div_class_routine_" + p_day_id.toString();
        m_div_class_routine = document.getElementById(m_div_name);


        var value;

        var m_master_hedding = document.createElement('div');
        m_master_hedding.setAttribute('class', "panel-heading");
        var m_master_span = document.createElement('span');
        m_master_span.setAttribute('class', "elipsis");
        var m_master_strong = document.createElement('strong');

        var m_master_hedding_date = document.createElement('div');
        m_master_hedding_date.setAttribute('class', "options pull-right list-inline");



        m_master_strong.innerHTML = p_data_arr[0][0];
        m_master_hedding_date.innerHTML = p_data_arr[0][1];

        m_master_span.appendChild(m_master_strong);
        m_master_hedding.appendChild(m_master_span);
        m_master_hedding.appendChild(m_master_hedding_date);
        m_div_class_routine.appendChild(m_master_hedding);


        var m_master_table_main = document.createElement('div');
        m_master_table_main.setAttribute('class', "panel-body nopadding");


        var m_master_table_main_inner = document.createElement('div');
        m_master_table_main_inner.setAttribute('class', "table-responsive");

        var m_master_table = document.createElement('table');
        m_master_table.setAttribute('class', "table table-bordered table-vertical-middle nomargin");
        /*********Create details***********/
        var m_table_body = document.createElement('tbody');


        for (iCtr = 0; iCtr <= p_data_arr.length - 1; iCtr++) {
            var m_table_row = document.createElement('tr');

            for (iCol = 2; iCol <= p_data_arr[iCtr].length - 1; iCol++) {

                var m_table_col = document.createElement('td');
                m_current_val = p_data_arr[iCtr][iCol];

                m_current_arr1 = m_current_val.split("|");
                var m_inner_table = document.createElement('table');
                m_inner_table.setAttribute('class', "tablechild fullwidth");


                var m_inner_body = document.createElement('tbody');


                for (ArrCtr = 0; ArrCtr <= m_current_arr1.length - 1; ArrCtr++) {
                    if (m_current_arr1[ArrCtr] != "") {
                        var m_inner_row = document.createElement('tr');
                        var m_inner_col = document.createElement('td');
                        m_current_arr2 = m_current_arr1[ArrCtr].split("<>");
                        m_param1 = m_current_arr2[1];

                        m_function = "onclick=GetStudentDetails('" + m_param1 + "');";

                        if (m_current_arr2[0] != "") {
                            m_function = m_function.replace(/ /g, "#");
                            m_span = "<u " + m_function + "><span class='label label-success padding-0'><i class='fa fa-check size-15'></i></span></u> ";
                            m_inner_col.innerHTML = m_span + m_current_arr2[0];
                        }

                        m_inner_row.appendChild(m_inner_col);
                        m_inner_body.appendChild(m_inner_row);
                    }

                    m_inner_table.appendChild(m_inner_body);

                    m_table_col.appendChild(m_inner_table);
                    m_table_row.appendChild(m_table_col);


                }


            }
            m_table_body.appendChild(m_table_row);

        }


        m_master_table.appendChild(m_table_body);

        m_master_table_main_inner.appendChild(m_master_table);
        m_master_table_main.appendChild(m_master_table_main_inner);
        m_div_class_routine.appendChild(m_master_table_main);

    }
    catch (err) {
        alert("CreateDateWiseRoutineCalender() - JScript Error");
    }
}


//***************************************************************

function GetStudentDetails(p_param1) {
    try {
        m_param1 = p_param1.split("_");

        SetValue("cntxt_selected_period_id", m_param1[0]); //Period
        SetValue("cntxt_subject_id", m_param1[1]); //Subject
        SetValue("cntxt_course_id", m_param1[2]); //Course
        SetValue("cntxt_stream_id", m_param1[3]); //Stream
        SetValue("cntxt_section_id", m_param1[4]); //Section
        SetValue("cntxt_semester_id", m_param1[5]); //semester
        SetValue("cntxt_group_id", m_param1[6]); //group
        SetValue("cntxt_batch_id", m_param1[7]); //batch
        SetValue("ctxt_att_date", m_param1[8]); //date


        cntxt_Attendance_Id = GetValueByCtrlName("cntxt_Attendance_Id");
        SetValue("ctxt_emph_code", ctxt_emph_code); //Emph

        ctxt_current_date = GetValueByCtrlName("ctxt_current_date"); //current date
        ctxt_att_date = GetValueByCtrlName("ctxt_att_date"); //Attendance date

        if (GetdateYyyyMmDd(ctxt_att_date) > GetdateYyyyMmDd(ctxt_current_date)) {
            alert("Attendance date can not be greater than today's date.");
            return false;
        }
        else {
            ShowHideControl("div_student_attendance_content_block", 1);
            ShowHideControl("div_own_att_content_block", 0);
            ShowHideControl("div_routine_content_block", 0);
            SetControlClass("cmd_std_attendance", "btn btn-link btn-block active");
            SetControlClass("cmd_routine", "btn btn-link btn-block");
            SetControlClass("cmd_own_attendance", "btn btn-link btn-block");

            PopulateAssociatedPeriod();
        }

    }
    catch (err) {
        alert("GetStudentDetails() - JScript Error");
    }
}

function PopulateStudentDetails() {
    try {

        // var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
        ctxt_att_date = GetValueByCtrlName("ctxt_att_date");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_selected_period_id = GetValueByCtrlName("cntxt_selected_period_id");
        cntxt_order_by_id = GetValueByCtrlName("cntxt_order_by_id");
        disp_type = "3";




        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_faculty_code,VARCHAR," + ctxt_emph_code);
        m_sp_param.push("@p_date,DATETIME," + ctxt_att_date);
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_section_id,INT," + cntxt_section_id);
        m_sp_param.push("@p_semester_id,INT," + cntxt_semester_id);
        m_sp_param.push("@p_group_id,INT," + cntxt_group_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);
        m_sp_param.push("@p_period_id,INT," + cntxt_selected_period_id);
        m_sp_param.push("@p_order_by,INT," + cntxt_order_by_id);
        m_sp_param.push("@p_disp,INT," + disp_type);



        DynamicHtmlTemplate_DeleteAllControl('m_key_populate_student_detail');
        DynamicHtmlTemplate_PopulateGrid("m_key_populate_student_detail", m_sp_param, "Proc_Get_Student_Data_For_Attendance");


        m_lesson_plan_function = setInterval(function () { DisplayLessonPlanTopic(); }, 1000);

    }
    catch (err) {
        alert('PopulateStudentDetails() - Error In JScript');
    }
}


function PopulateAssociatedPeriod() {
    try {

        // var unicode = event.keyCode ? event.keyCode : event.charCode;


        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
        ctxt_att_date = GetValueByCtrlName("ctxt_att_date");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_selected_period_id = GetValueByCtrlName("cntxt_selected_period_id");

        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_faculty_code,VARCHAR," + ctxt_emph_code);
        m_sp_param.push("@p_date,DATETIME," + ctxt_att_date);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);
        m_sp_param.push("@p_period_id,INT," + cntxt_selected_period_id);

        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_section_id,INT," + cntxt_section_id);
        m_sp_param.push("@p_semester_id,INT," + cntxt_semester_id);
        m_sp_param.push("@p_group_id,INT," + cntxt_group_id);
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);


        DynamicHtmlTemplate_PopulateGrid("m_key_populate_assosiated_period", m_sp_param, "Proc_Get_Associated_period");
        //        DynamicHtmlTemplate_PopulateGrid("m_key_populate_assosiated_period", m_sp_param, "Proc_Get_Associated_period_test");



    }
    catch (err) {
        alert('PopulateAssociatedPeriod() - Error In JScript');
    }
}


function PopulateOrderBy(event) {
    try {

        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_order_by = GetValueByCtrlName("ctxt_order_by") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_orderby,VARCHAR," + ctxt_order_by);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_order_by",
                                             m_sp_param,
                                             "Proc_Get_OrderBy",
                                             ctxt_order_by,
                                             0);
    }
    catch (err) {
        alert('PopulateOrderBy() - Error In JScript');
    }
}


function PopulateRoutineDispType(event) {
    try {


        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_routine_disp_type = GetValueByCtrlName("ctxt_routine_disp_type") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_disp_type,VARCHAR," + ctxt_routine_disp_type);


        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_routine_disp_type",
                                             m_sp_param,
                                             "Proc_Get_Display_Type",
                                             ctxt_routine_disp_type,
                                             0);
    }
    catch (err) {
        alert('PopulateRoutineDispType() - Error In JScript');
    }
}

function SaveStudentAttendance() {
    try {

        /*if (ValidateSave() == false) {
        return;
        }*/

        debugger
        var m_HeaderArray = new Array();
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_att_date = GetValueByCtrlName("ctxt_att_date");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
        chk_gen_qrcode = GetCheckBoxValue("chk_gen_qrcode");
        ctxt_topic_delivered = GetValueByCtrlName("ctxt_topic_delivered");
        ctxt_topic = GetValueByCtrlName("ctxt_topic");
        ctxt_topic_delivered = GetValueByCtrlName("ctxt_topic_delivered");
        cntxt_sub_type = GetValueByCtrlName("cntxt_sub_type");


        //Checking lesson plan for Lab & Theory.
        if (parseFloat(cntxt_sub_type) == 0 || parseFloat(cntxt_sub_type) == 1) {
            if (GetStringLength(ctxt_topic) <= 4) {
                ShowMsgWnd("No Lesson plan Exist - Create Lesson Plan");
                return;
            }

            if (GetStringLength(ctxt_topic_delivered) <= 0) {
                ShowMsgWnd("Enter details of Topic devivered");
                return;
            }
        }


        if (chk_gen_qrcode == true) {
            chk_gen_qrcode = "1";
        }
        else {
            chk_gen_qrcode = "0";
        }

        m_HeaderArray.push(GetFieldValArr('cntxt_college_id', cntxt_college_id));
        m_HeaderArray.push(GetFieldValArr('ctxt_att_date', ctxt_att_date));
        m_HeaderArray.push(GetFieldValArr('cntxt_batch_id', cntxt_batch_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_course_id', cntxt_course_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_stream_id', cntxt_stream_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_semester_id', cntxt_semester_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_section_id', cntxt_section_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_group_id', cntxt_group_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_subject_id', cntxt_subject_id));
        m_HeaderArray.push(GetFieldValArr('ctxt_emph_code', ctxt_emph_code));
        m_HeaderArray.push(GetFieldValArr('chk_gen_qrcode', chk_gen_qrcode));
        m_HeaderArray.push(GetFieldValArr('ctxt_topic_delivered', ctxt_topic_delivered));



        ShowWaitMsgWnd("Please Wait");
        WebServiceShowFacultyDetailsEmpCodeWise.SaveStudentAttendance(m_HeaderArray, OnComplete_SaveStudentAttendance, OnError_SaveStudentAttendance, OnTimeOut_SaveStudentAttendance);
    }
    catch (err) {
        alert("SaveStudentAttendance() - JScript Error");
    }
}
function OnComplete_SaveStudentAttendance(arg) {
debugger

document.getElementById("dvLoader").style.display="block";

     var result=generateAssignment();
    DestroyWaitMsgWnd();
    ClearDataAfterSave();

    if (GetCheckBoxValue("chk_gen_qrcode") == true) {
        window.open("frmQRcodeStdAttd.aspx", "_blank");
    }
    else {
        ShowMsgWnd(arg + " and Assignment Generated for students");
    }

}
function OnError_SaveStudentAttendance(arg) {
    alert("error : " + argmessage);
    ClearDataAfterSave();
}
function OnTimeOut_SaveStudentAttendance(arg) {
    alert("Time Out");
}
function ClearDataAfterSave() {
    try {
        ShowHidePanel('4');
        DynamicHtmlTemplate_DeleteAllControl('m_key_populate_student_detail');
        DynamicHtmlTemplate_DeleteAllControl('m_key_populate_assosiated_period');

        SetValue("ctxt_remarks", "");
        SetValue("ctxt_topic", "");
        SetValue("ctxt_topic_delivered", "");

    }
    catch (err) {
        alert("ClearDataAfterSave() - JScript Error");
    }
}

async function generateAssignment() {
debugger
    let cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
    let ctxt_att_date = GetValueByCtrlName("ctxt_att_date");
    let cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
    let cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
    let cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
    let cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
    let cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
    let cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
    let cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
    let ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
    let chk_gen_qrcode = GetCheckBoxValue("chk_gen_qrcode");
    let ctxt_topic_delivered = GetValueByCtrlName("ctxt_topic_delivered");
    let cntxt_sub_type = GetValueByCtrlName("cntxt_sub_type");
    let cntxt_selected_period_id = GetValueByCtrlName("cntxt_selected_period_id");
    let  cntxt_branch_id=GetValueByCtrlName("cntxt_branch_id");

    // Ensure proper declaration of `url`
const url = "http://122.252.249.26:5063/api/Assignment/generate"; 
// const url = "https://localhost:7295/api/Assignment/generate"; 

    const requestData = {
        module: ctxt_topic_delivered,
        collegeId: cntxt_college_id,
        batchId: cntxt_batch_id,
        courseId: cntxt_course_id,
        streamId: cntxt_stream_id,
        semesterId: cntxt_semester_id,
        sectionId: cntxt_section_id,
        groupId: cntxt_group_id,
        subjectId: cntxt_subject_id,
        facultyCode: ctxt_emph_code, 
        periodId: cntxt_selected_period_id,
        facultyDate: ConvertdateYyyyMmDd(ctxt_att_date),
        branchId: cntxt_branch_id.toString()

    };

    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error('HTTP error! Status: ${response.status}');
        }

        const result = await response.json();
       
        console.log("Assignment Created:", result);
    } catch (error) {
        console.error("Error:", error);
    }
    finally
    {
        document.getElementById("dvLoader").style.display="none";
    }
}




function SelectAll() {
    try {
        m_filter = "NA";
        var m_ItemRowKeyDataItem;
        m_session_var_name = "S_POPULATE_STUDENT_DETAIL";


        WebServiceMasters.SaveSelectAll(m_session_var_name);
        DynamicHtmlTemplate_PopulateGridFromDataTable("m_key_populate_student_detail", m_session_var_name, m_filter);
    }
    catch (err) {
        alert(err + "  SelectAll() - jScript Error");
    }
}


function DeSelectAll() {
    try {

        m_filter = "NA";
        var m_ItemRowKeyDataItem;
        m_session_var_name = "S_POPULATE_STUDENT_DETAIL";


        WebServiceMasters.SaveDeSelectAll(m_session_var_name);
        DynamicHtmlTemplate_PopulateGridFromDataTable("m_key_populate_student_detail", m_session_var_name, m_filter);

    }
    catch (err) {
        alert("DeSelectAll() - jScript Error");
    }
}

function ResetAll() {
    try {

        SetValue("cntxt_batch_id", "0");
        SetValue("cntxt_course_id", "0");
        SetValue("cntxt_stream_id", "0");
        SetValue("cntxt_semester_id", "0");
        SetValue("cntxt_section_id", "0");
        SetValue("cntxt_subject_id", "0");
        SetValue("cntxt_group_id", "0");

        ClearDataAfterSave();
    }
    catch (err) {
        alert(err + "ResetAll() - JScript Error");
    }
}


function SetRemarksToAll() {
    try {
        if (SelectionWindow() == false) {
            return;
        }


        m_remarks = GetValueByCtrlName("ctxt_remarks");


        ShowWaitMsgWnd("Please Wait");
        WebServiceShowFacultyDetailsEmpCodeWise.SetRemarksToAll(m_remarks,
                                   OnComplete_SetRemarksToAll,
                                   OnError_SetRemarksToAll,
                                   OnTimeOut_SetRemarksToAll);

    }
    catch (err) {
        alert("SetRemarksToAll()- Error In JScript");
    }
}
function OnComplete_SetRemarksToAll(arg) {
    DestroyWaitMsgWnd();
    if (arg == 0) {
        DynamicHtmlTemplate_PopulateGridFromDataTable("m_key_populate_student_detail", "S_POPULATE_STUDENT_DETAIL", "NA");
        //ShowMsgWnd("Data Set Successfully.");
    }
    else {
        ShowMsgWnd("Error In Data Set");
    }
}
function OnError_SetRemarksToAll(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SetRemarksToAll(arg) {
    alert("Time Out");
}


function SetRoutineBackColour(p_subject, p_ref) {
    try {
        return;

        m_IsFound = 0;

        for (iSubCtr = 0; iSubCtr < m_array_subject_temp.length; iSubCtr++) {
            if (m_array_subject_temp[iSubCtr] == p_subject) {
                m_IsFound = 1;
                break
            }
        }

        if (m_IsFound == 0) {
            m_array_subject_temp.push(p_subject);
        }

        if (iSubCtr <= 19) {
            p_ref.setAttribute('class', m_array_colour_code[iSubCtr]);
        }

    }
    catch (err) {
        alert("SetRoutineBackColour() - JScript Error");
    }
}

//=========================================== OWN ATTENDANCE TAB===========================================================

function Previous() {
    try {
        dtp_att_view_from_date = GetValueByCtrlName("dtp_att_view_from_date");
        var dtp_att_view_from_date = dtp_att_view_from_date.split("/").reverse().join("-");

        var from_date = new Date(dtp_att_view_from_date);
        var One_Months_FromDate = new Date(new Date(from_date).setMonth(from_date.getMonth() - 1));

        var today = new Date(One_Months_FromDate);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        var One_Months_FromDate = dd + '/' + mm + '/' + yyyy
        SetValue("dtp_att_view_from_date", One_Months_FromDate);
        //-------------------------------------------------------------------------

        dtp_att_view_from_date = GetValueByCtrlName("dtp_att_view_from_date");
        var dtp_att_view_from_date = dtp_att_view_from_date.split("/").reverse().join("-");
        var PrevDay = new Date(dtp_att_view_from_date);
        var lastDayOfMonth = new Date(PrevDay.getFullYear(), PrevDay.getMonth() + 1, 0);

        var lastDayOfMonth = new Date(lastDayOfMonth);
        var dd = lastDayOfMonth.getDate();
        var mm = lastDayOfMonth.getMonth() + 1; //January is 0!

        var yyyy = lastDayOfMonth.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        var lastDayOfMonth = dd + '/' + mm + '/' + yyyy
        SetValue("dtp_att_view_to_date", lastDayOfMonth);
        //----------------------------------------------------------------

        var dt = new Date(dtp_att_view_from_date);
        yer = dt.getFullYear();
        mnt = dt.getMonth() + 1;

        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        window.document.getElementById('Label_month').innerText = month[mnt - 1];
        window.document.getElementById('Label_year').innerText = yer;
        ViewOwnAttendance();
    }
    catch (err) {
    }
}

function Next() {
    try {

        dtp_att_view_from_date = GetValueByCtrlName("dtp_att_view_from_date");
        var dtp_att_view_from_date = dtp_att_view_from_date.split("/").reverse().join("-");

        var from_date = new Date(dtp_att_view_from_date);
        var One_Months_FromDate = new Date(new Date(from_date).setMonth(from_date.getMonth() + 1));
        var today = new Date(One_Months_FromDate);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        var One_Months_FromDate = dd + '/' + mm + '/' + yyyy

        SetValue("dtp_att_view_from_date", One_Months_FromDate);
        //-------------------Get--Last---date-of-month --------------------------------------------------

        dtp_att_view_from_date = GetValueByCtrlName("dtp_att_view_from_date");
        var dtp_att_view_from_date = dtp_att_view_from_date.split("/").reverse().join("-");
        var PrevDay = new Date(dtp_att_view_from_date);

        var lastDayOfMonth = new Date(PrevDay.getFullYear(), PrevDay.getMonth() + 1, 0);

        var lastDayOfMonth = new Date(lastDayOfMonth);
        var dd = lastDayOfMonth.getDate();
        var mm = lastDayOfMonth.getMonth() + 1; //January is 0!

        var yyyy = lastDayOfMonth.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        var lastDayOfMonth = dd + '/' + mm + '/' + yyyy
        SetValue("dtp_att_view_to_date", lastDayOfMonth);
        //--------------------------Set--Month-Name-and-Year-in---control----------------------------------------

        var dt = new Date(dtp_att_view_from_date);
        yer = dt.getFullYear();
        mnt = dt.getMonth() + 1;

        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        window.document.getElementById('Label_month').innerText = month[mnt - 1];
        window.document.getElementById('Label_year').innerText = yer;
        ViewOwnAttendance();
    }
    catch (err) {
    }
}
//-------------------------------Added Functionality on 26/12/2016 -----------------------------------------------------------------
//----------------- (Own Attendance) Populate Percentage of Attendance and taken,pending Classes faculty wise ---------------------

function ViewOwnAttendance() {
    PopulateStudentAttendCalendarGrid();  //-------------------------------------------------- CALL (OWN ATTENDANCE) Attendance Percent Grid
    m_FacultyAttendPercent = setInterval(function () { PopulateFacultyAttendPercentGrid(); }, 1000);
}

function PopulateFacultyAttendPercentGrid() {
    try {
        clearInterval(m_FacultyAttendPercent);
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
        dtp_att_view_from_date = GetValueByCtrlName("dtp_att_view_from_date");
        dtp_att_view_to_date = GetValueByCtrlName("dtp_att_view_to_date");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_COLLEGE_ID,INT," + cntxt_college_id);
        m_sp_param.push("@P_FACULTY_CODE,VARCHAR," + ctxt_emph_code);
        m_sp_param.push("@P_FROM_DT,DATETIME," + dtp_att_view_from_date);
        m_sp_param.push("@P_TO_DT,DATETIME," + dtp_att_view_to_date);
        m_sp_param.push("@P_SUBJECT_ID,INT," + 0);

        DynamicHtmlTemplate_PopulateGrid("m_key_populate_attendance_percent_fac_wise", m_sp_param, "Proc_Attendence_percentage_Faculty_Wise");

    }
    catch (err) {
        alert('PopulateFacultyAttendPercentGrid() - Error In JScript');
    }
}


//function PopulateStudentAttendCalendarGrid() {
//    try {
//        dtp_att_view_from_date = GetValueByCtrlName("dtp_att_view_from_date");
//        dtp_att_view_to_date = GetValueByCtrlName("dtp_att_view_to_date");

//        var m_sp_param = new Array();
//        m_sp_param.push("@P_FROM_DT,DATETIME," + dtp_att_view_from_date);
//        m_sp_param.push("@P_TO_DT,DATETIME," + dtp_att_view_to_date);

//        DynamicHtmlTemplate_PopulateGrid("m_key_populate_student_calendar", m_sp_param, "Proc_Attendance_Student_Calendar");
//    }
//    catch (err) {
//        alert('PopulateStudentAttendCalendarGrid() - Error In JScript');
//    }
//}


function PopulateStudentAttendCalendarGrid() {
    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        dtp_att_view_to_date = GetValueByCtrlName("dtp_att_view_to_date");
        dtp_att_view_from_date = GetValueByCtrlName("dtp_att_view_from_date");
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");

        ShowWaitMsgWnd("Please Wait");
        WebServiceShowFacultyDetailsEmpCodeWise.PopulateStudentAttendCalendarGrid(cntxt_college_id,
                                                                                dtp_att_view_from_date,
                                                                                dtp_att_view_to_date,
                                                                                ctxt_emph_code,
                                                                                OnComplete_PopulateStudentAttendCalendarGrid,
                                                                                OnError_PopulateStudentAttendCalendarGrid,
                                                                                OnTimeOut_PopulateStudentAttendCalendarGrid);
    }
    catch (err) {
        alert('PopulateStudentAttendCalendarGrid() - Error In JScript');
    }
}

function OnComplete_PopulateStudentAttendCalendarGrid(arg) {
    DestroyWaitMsgWnd();
    if (arg.m_RetVal > 0) {
        alert('Error in WebMethod');
    }
    else {
        m_array_calender_header = arg.m_calender_header;
        m_array_calender_data = arg.m_calender_data;

        CreateMonthlyMatrix();
    }
}
function OnError_PopulateStudentAttendCalendarGrid(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_PopulateStudentAttendCalendarGrid(arg) {
    alert("Time Out");
}

//--------------------------------------------------------
function CreateMonthlyMatrix() {
    try {


        RemoveFacultyMonthlyMatrix();

        div_monthly_attendance = document.getElementById("div_monthly_attendance");


        var m_master_table = document.createElement('table');
        m_master_table.setAttribute('class', "table table-bordered table-striped table-vertical-middle");



        /*********Create Heading***********/
        var m_table_header = document.createElement('thead');
        var m_table_row = document.createElement('tr');

        m_table_row.setAttribute("class", "btn-black");

        for (iCtr = 0; iCtr <= m_array_calender_header.length - 1; iCtr++) {
            var m_table_col = document.createElement('th');

            m_table_col.style.fontSize = "15px";
            m_table_col.style.textAlign = "center";

            m_table_col.innerHTML = m_array_calender_header[iCtr];
            m_table_row.appendChild(m_table_col);
            if (iCtr == 0) {
                m_table_col.setAttribute("class", "btn-red");
            }

        }
        m_table_header.appendChild(m_table_row);
        m_master_table.appendChild(m_table_header);

        /*********Create details***********/
        var m_table_body = document.createElement('tbody');


        for (iCtr = 0; iCtr <= m_array_calender_data.length - 1; iCtr++) {
            var m_table_row = document.createElement('tr');
            for (iCol = 0; iCol <= m_array_calender_data[iCtr].length - 1; iCol++) {

                var m_table_col = document.createElement('td');
                m_table_col.style.fontSize = "15px";
                m_table_col.style.textAlign = "center";

                m_current_val = m_array_calender_data[iCtr][iCol];

                if (GetStringLength(m_current_val) <= 2) { //Only date
                    m_table_col.innerHTML = m_current_val;
                    //m_table_col.setAttribute("class", "btn-leaf");
                }
                else { //With Val
                    m_arr = m_current_val.split("|");

                    m_val_day = m_arr[0];
                    m_val_class = m_arr[1];

                    m_table_col.innerHTML = m_val_day + "<BR>" + m_val_class + "</BR>";
                    m_function = "GetPeriodDetails('" + m_arr[2] + "');";
                    m_table_col.setAttribute("onclick", m_function);

                    m_class_arr = m_val_class.split("/");
                    m_tot_class_atten = m_class_arr[0];
                    m_tot_class = m_class_arr[1];

                    if (m_tot_class_atten == m_tot_class) {
                        m_table_col.setAttribute("class", "btn-success");
                    }

                    if (m_tot_class_atten < m_tot_class && m_tot_class_atten > 0) {
                        m_table_col.setAttribute("class", "btn-yellow");
                    }
                    if (m_tot_class_atten < m_tot_class && m_tot_class_atten == 0) {
                        m_table_col.setAttribute("class", "alert-success");
                    }

                }

                if (iCol == 0) {
                    m_table_col.setAttribute("class", "btn-red");
                }


                m_table_row.appendChild(m_table_col);

            }
            m_table_body.appendChild(m_table_row);

        }
        m_master_table.appendChild(m_table_body);

        div_monthly_attendance.appendChild(m_master_table);

    }
    catch (err) {
        alert("CreateMonthlyMatrix() - JScript Error");
    }
}

function LogOut() {
    try {
        WebServiceMasters.RemoveSessionAllVar(OnCompleteLogOutWindow, OnErrorLogOutWindow, OnTimeOutLogOutWindow);
    }
    catch (err) {
        alert('ExitWindow() - Error In JScript');
    }
}
function OnCompleteLogOutWindow(arg) {
    if (arg > 0) {
        alert('Error in WebMethod');
        window.open("frmLogin.aspx", "_self");
    }
    else {
        window.open("frmLogin.aspx", "_self");
    }
}
function OnErrorLogOutWindow(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutLogOutWindow(arg) {
    alert("Time Out");
}

function ChangePassword() {
    window.open("frmChangePassword.aspx?type=F", "_blank");
}

function GetPeriodDetails(p_date) {
    try {
        //var unicode = event.keyCode ? event.keyCode : event.charCode;


        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");


        var m_sp_param = new Array();
        m_sp_param.push("@p_date,DATETIME," + p_date);
        m_sp_param.push("@p_faculty_code,VARCHAR," + ctxt_emph_code);
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);

        DynamicHtmlTemplate_PopulateGrid("m_key_populate_faculty_day_period_det", m_sp_param, "Proc_Get_Faculty_DayPeriod_Details");

    }
    catch (err) {
        alert('GetPeriodDetails() - Error In JScript');
    }
}

function View_Date_Wise_class() {
    try {
        //        clearInterval(m_FacultyClasses);
        //var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_subject_code = GetValueByCtrlName("ctxt_subject_code");

        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
        dtp_from_date_class = GetValueByCtrlName("dtp_from_date_class");
        dtp_to_date_class = GetValueByCtrlName("dtp_to_date_class");


        var m_sp_param = new Array();
        m_sp_param.push("@P_subject_code,VARCHAR," + ctxt_subject_code);
        m_sp_param.push("@P_FACULTY_CODE,VARCHAR," + ctxt_emph_code);
        m_sp_param.push("@P_FROM_DT,DATETIME," + dtp_from_date_class);
        m_sp_param.push("@P_TO_DT,DATETIME," + dtp_to_date_class);


        DynamicHtmlTemplate_PopulateGrid("m_key_populate_classes_det", m_sp_param, "Proc_Get_Faculty_Date_Wise_Routine_LP");

    }
    catch (err) {
        alert('View_Date_Wise_class() - Error In JScript');
    }
}

function Save_Lesson_Plan() {

    try {

        var m_DetailArray = new Array();
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
        m_grid_populate_classes_det = window.document.getElementById("m_grid_populate_classes_det");

        for (iRow = 0; iRow < m_grid_populate_classes_det.rows.length - 1; iRow++) {
            DAY_ID = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'DAY_ID', iRow);
            DAY_DATE = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'DAY_DATE', iRow);
            PERIOD_ID = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'PERIOD_ID', iRow);
            SUBJECT_ID = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'SUBJECT_ID', iRow);
            BATCH = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'BATCH', iRow);
            COURSE_ID = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'COURSE_ID', iRow);
            STREAM_ID = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'STREAM_ID', iRow);
            SECTION_ID = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'SECTION_ID', iRow);
            SEMESTER_ID = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'SEMESTER_ID', iRow);
            GROUP_ID = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'GROUP_ID', iRow);
            IS_RECESS = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'IS_RECESS', iRow);
            FACULTY_NAME = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'FACULTY_NAME', iRow);
            FACULTY_nKEY_ID = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'FACULTY_nKEY_ID', iRow);
            IS_ACTIVE = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'IS_ACTIVE', iRow);
            IS_ACTIVE_DESP = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'IS_ACTIVE_DESP', iRow);
            Topic = ComposeHtmlCtrlRef('m_grid_populate_classes_det', 'Topic', iRow);

            if (FACULTY_nKEY_ID != null) {

                DAY_ID_val = DAY_ID.value;
                DAY_DATE_val = DAY_DATE.value;
                PERIOD_ID_val = PERIOD_ID.value;
                SUBJECT_ID_val = SUBJECT_ID.value;
                BATCH_val = BATCH.value;
                COURSE_ID_val = COURSE_ID.value;
                STREAM_ID_val = STREAM_ID.value;
                SECTION_ID_val = SECTION_ID.value;
                SEMESTER_ID_val = SEMESTER_ID.value;
                GROUP_ID_val = GROUP_ID.value;
                IS_RECESS_val = IS_RECESS.value;
                FACULTY_NAME_val = FACULTY_NAME.value;
                FACULTY_nKEY_ID_val = FACULTY_nKEY_ID.value;
                IS_ACTIVE_val = IS_ACTIVE.value;
                IS_ACTIVE_DESP_val = IS_ACTIVE_DESP.value;
                Topic_val = Topic.value;

                m_ColData = new Array;
                m_ColData.push(GetFieldValArr('DAY_ID', DAY_ID_val));
                m_ColData.push(GetFieldValArr('DAY_DATE', DAY_DATE_val));
                m_ColData.push(GetFieldValArr('PERIOD_ID', PERIOD_ID_val));
                m_ColData.push(GetFieldValArr('SUBJECT_ID', SUBJECT_ID_val));
                m_ColData.push(GetFieldValArr('BATCH', BATCH_val));
                m_ColData.push(GetFieldValArr('COURSE_ID', COURSE_ID_val));
                m_ColData.push(GetFieldValArr('STREAM_ID', STREAM_ID_val));
                m_ColData.push(GetFieldValArr('SECTION_ID', SECTION_ID_val));
                m_ColData.push(GetFieldValArr('SEMESTER_ID', SEMESTER_ID_val));
                m_ColData.push(GetFieldValArr('GROUP_ID', GROUP_ID_val));
                m_ColData.push(GetFieldValArr('IS_RECESS', IS_RECESS_val));
                m_ColData.push(GetFieldValArr('FACULTY_NAME', FACULTY_NAME_val));
                m_ColData.push(GetFieldValArr('FACULTY_nKEY_ID', FACULTY_nKEY_ID_val));
                m_ColData.push(GetFieldValArr('IS_ACTIVE', IS_ACTIVE_val));
                m_ColData.push(GetFieldValArr('IS_ACTIVE_DESP', IS_ACTIVE_DESP_val));
                m_ColData.push(GetFieldValArr('Topic', Topic_val));

            }
            m_DetailArray.push(m_ColData);
        }

        WebServiceShowFacultyDetailsEmpCodeWise.Save_Lesson_Plan(ctxt_emph_code, m_DetailArray,
                      OnComplete_Save_Lesson_Plan, OnError_Save_Lesson_Plan,
                       OnTimeOut_Save_Lesson_Plan);
    }

    catch (err) {
        alert("Save_Lesson_Plan()- Error In JScript");
    }
}

function OnComplete_Save_Lesson_Plan(arg) {
    if (arg == 0) {
        ShowMsgWnd("Data Saved....");
    }
    else {
        ShowMsgWnd("Error in Data Saving");
    }
}
function OnError_Save_Lesson_Plan(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_Save_Lesson_Plan(arg) {
    alert("Time Out");
}

function PopulateMentorWiseStudentGrid() {
    try {
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
        var m_sp_param = new Array();
        m_sp_param.push("@P_Faculty_Code,VARCHAR," + ctxt_emph_code);
        DynamicHtmlTemplate_PopulateGrid("m_key_populate_mentor_wise_student", m_sp_param, "proc_get_Student_under_mentorship");
    }
    catch (err) {
        alert('PopulateStudentGrid() - Error In JScript');
    }
}

//===================================Open Student wise cutomized data================================//

function SetAction() {

    cntxt_student_id = GetValueByCtrlName("cntxt_student_id");

    window.open("frmOpenStudentDetailsPage.aspx?std_id=" + cntxt_student_id, "toolbar=yes,scrollbars=yes,resizable=yes");
}

//-----------------------------------------------
function DisplayLessonPlanTopic() {
    try {
        m_grid_student_detail = window.document.getElementById("m_grid_student_detail");
        if (m_grid_student_detail == null) {
            return;
        }
        clearInterval(m_lesson_plan_function);

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
        ctxt_att_date = GetValueByCtrlName("ctxt_att_date");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_selected_period_id = GetValueByCtrlName("cntxt_selected_period_id");


        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_faculty_code,VARCHAR," + ctxt_emph_code);
        m_sp_param.push("@p_date,DATETIME," + ctxt_att_date);
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_section_id,INT," + cntxt_section_id);
        m_sp_param.push("@p_semester_id,INT," + cntxt_semester_id);
        m_sp_param.push("@p_group_id,INT," + cntxt_group_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);
        m_sp_param.push("@p_period_id,INT," + cntxt_selected_period_id);

        var m_field_arr = new Array();
        m_field_arr.push("topic");
        m_field_arr.push("topic_delivered");
        m_field_arr.push("sub_type");



        ShowWaitMsgWnd("Please Wait..");

        WebServiceMasters.GetData("NA",
                                  m_field_arr,
                                  m_sp_param,
                                  "Proc_Get_Delivered_Topic",
                                  1,
                                   OnCompleteDisplayLessonPlanTopic,
                                   OnErrorDisplayLessonPlanTopic,
                                   OnTimeOutDisplayLessonPlanTopic);


    }
    catch (err) {
        alert('DisplayLessonPlanTopic() - Error In JScript');
    }
}
function OnCompleteDisplayLessonPlanTopic(arg) {
    //DynamicHtmlTemplate_CreateColumn(arg.m_List, arg.m_Count, g_DynamicHtmlTemplate_KeyName);
    DestroyWaitMsgWnd();

    if (parseFloat(arg.m_Count) > -1) {
        SetValue("ctxt_topic", arg.m_List[0][0])
        SetValue("ctxt_topic_delivered", arg.m_List[0][1])
        SetValue("cntxt_sub_type", arg.m_List[0][2])
    }
}
function OnErrorDisplayLessonPlanTopic(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutDisplayLessonPlanTopic(arg) {
    alert("Time Out");
}
//-----------------------------------------------



function GetDetailsForLessonPlan(p_param1, p_curr_subject) {
    try {
        m_param1 = p_param1.split("_");

        p_curr_subject = p_curr_subject.replace(/#/g, " ");


        SetValue("cntxt_selected_period_id", m_param1[0]); //Period
        SetValue("cntxt_subject_id", m_param1[1]); //Subject
        SetValue("cntxt_course_id", m_param1[2]); //Course
        SetValue("cntxt_stream_id", m_param1[3]); //Stream
        SetValue("cntxt_section_id", m_param1[4]); //Section
        SetValue("cntxt_semester_id", m_param1[5]); //semester
        SetValue("cntxt_group_id", m_param1[6]); //group
        SetValue("cntxt_batch_id", m_param1[7]); //batch
        SetValue("ctxt_att_date", m_param1[8]); //date

        m_sel_date = m_param1[8];

        SetValue("ctxt_subject_code", p_curr_subject); //Subject
        SetValue("dtp_from_date_class", m_sel_date); //date
        SetValue("dtp_to_date_class", m_sel_date); //date
        SetValue("ctxt_emph_code", ctxt_emph_code); //Emph

        SetValue("ctxt_resource_unique_key_id", "0");
        SetValue("ctxt_resource_type_id", "0");
        SetValue("ctxt_resource_type", "");
        SetValue("ctxt_resource_desp", "");
        SetValue("ctxt_resource_link", "");
        ShowHideControl("btn_upload_file_id", 0);

        ShowHidePanel('6');

        GetSavedLessonPlan();
    }
    catch (err) {
        alert("GetDetailsForLessonPlan() - JScript Error");
    }
}





function PopulateSyllabus(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_syllabus_details = GetValueByCtrlName("ctxt_syllabus_details") + "%";
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);
        m_sp_param.push("@p_module,VARCHAR," + ctxt_syllabus_details);



        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_syllabus",
                                             m_sp_param,
                                             "Proc_Get_Poco_Batch_Subject_Wise_Syllabus_Main_Detail",
                                             ctxt_syllabus_details,
                                             0);
    }
    catch (err) {
        alert('PopulateSyllabus() - Error In JScript');
    }
}


//-------------------------------------

function Save_Lesson_Plan_New() {

    try {

        ctxt_att_date = GetValueByCtrlName("ctxt_att_date");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_selected_period_id = GetValueByCtrlName("cntxt_selected_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_syllabus_topic = GetValueByCtrlName("ctxt_syllabus_topic");
        cntxt_syllabus_id = GetValueByCtrlName("cntxt_syllabus_id");
        cntxt_lecture_no = GetValueByCtrlName("cntxt_lecture_no");

        WebServiceShowFacultyDetailsEmpCodeWise.Save_Lesson_Plan_New(ctxt_att_date,
                                                                    cntxt_batch_id,
                                                                    cntxt_course_id,
                                                                    cntxt_stream_id,
                                                                    cntxt_section_id,
                                                                    cntxt_semester_id,
                                                                    cntxt_selected_period_id,
                                                                    cntxt_subject_id,
                                                                    cntxt_group_id,
                                                                    ctxt_emph_code,
                                                                    cntxt_college_id,
                                                                    ctxt_syllabus_topic,
                                                                    cntxt_syllabus_id,
                                                                    cntxt_lecture_no,
                      OnComplete_Save_Lesson_Plan_New, OnError_Save_Lesson_Plan_New,
                       OnTimeOut_Save_Lesson_Plan_New);
    }

    catch (err) {
        alert("Save_Lesson_Plan_New()- Error In JScript");
    }
}

function OnComplete_Save_Lesson_Plan_New(arg) {
    if (arg == 0) {
        ShowMsgWnd("Data Saved....");
    }
    else {
        ShowMsgWnd("Error in Data Saving");
    }
}
function OnError_Save_Lesson_Plan_New(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_Save_Lesson_Plan_New(arg) {
    alert("Time Out");
}
//-------------------------------------------



//-------------------------------------------
function GetSavedLessonPlan() {
    try {
        FieldArray = [];
        FieldArray.push("module_id");
        FieldArray.push("sub_module_id");
        FieldArray.push("sub_module_sl");
        FieldArray.push("ModuleDetail");
        FieldArray.push("topic");
        FieldArray.push("lecture");
        FieldArray.push("max_lecture");

        ctxt_att_date = GetValueByCtrlName("ctxt_att_date");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_selected_period_id = GetValueByCtrlName("cntxt_selected_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");



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
        m_sp_param.push("@p_FacultyCode,VARCHAR," + ctxt_emph_code);
        m_sp_param.push("@p_CollegeId,INT," + cntxt_college_id);

        ShowWaitMsgWnd("Please Wait");
        WebServiceMasters.GetData("NA", FieldArray, m_sp_param,
                                  "Proc_Get_Faculty_Wise_Lesson_plan_Main", 0,
                                   OnComplete_GetSavedLessonPlan,
                                   OnError_GetSavedLessonPlan,
                                   OnTimeOut_GetSavedLessonPlan);

    }
    catch (err) {
        alert('GetSavedLessonPlan() - Error In JScript');
    }
}
function OnComplete_GetSavedLessonPlan(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg.m_Count) > -1) {
        SetValue("ctxt_syllabus_topic", arg.m_List[0][GetArrayRowIndex(FieldArray, "topic")]);
        SetValue("cntxt_syllabus_id", arg.m_List[0][GetArrayRowIndex(FieldArray, "sub_module_id")]);
        SetValue("cntxt_lecture_no", arg.m_List[0][GetArrayRowIndex(FieldArray, "lecture")]);
        SetValue("ctxt_syllabus_details", arg.m_List[0][GetArrayRowIndex(FieldArray, "ModuleDetail")]);
        SetValue("cntxt_max_lecture_count", arg.m_List[0][GetArrayRowIndex(FieldArray, "max_lecture")]);


    }
    else {
        SetValue("ctxt_syllabus_topic", "");
        SetValue("cntxt_syllabus_id", "0");
        SetValue("cntxt_lecture_no", "0");
        SetValue("ctxt_syllabus_details", "");
        SetValue("cntxt_max_lecture_count", "0");

    }

    DisplayLessonPlanResourseList();

}
function OnError_GetSavedLessonPlan(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_GetSavedLessonPlan(arg) {
    alert("Time Out");
}
//-------------------------------Rima------------




//function UploadDocFile() {
//    try {


//        if (document.getElementById("upload_file_id").files.length <= 0) {
//            ShowMsgWnd("Select File....");
//            return;
//        }



//        var fileUpload = $("#upload_file_id").get(0);
//        var size = parseFloat(fileUpload.files[0].size / 1024).toFixed(2);
//        var m_file = fileUpload.files[0].name;

//        var files = fileUpload.files;
//        var m_data = new FormData();

//        m_data.append("selected_file", files[0]);
//        m_data.append("file_name", m_file);
//        m_data.append("doc_type", "1"); //Lesson Plan Doc

//        SetValue("ctxt_resource_link", m_file);

//        ShowWaitMsgWnd("Please Wait");

//        $.ajax({
//            url: "FileUploadHandler.ashx",
//            type: "POST",
//            contentType: false,
//            processData: false,
//            data: m_data,
//            // dataType: "json",
//            xhr: function () {
//                var xhr = $.ajaxSettings.xhr();
//                xhr.upload.onprogress = function (data) {
//                    var perc = Math.round((data.loaded / data.total) * 100);
//                    SetInnerHtml("cmd_progress_bar", perc.toString() + "%");
//                };

//                return xhr;
//            },
//            success: function (result) {
//                DestroyWaitMsgWnd();

//                if (result == "SUCCESS") {
//                    alert("File Uploaded Successfully");
//                }
//                else if (result == "DUPLICATE") {
//                    alert("Duplicate File");
//                }
//                else {
//                    alert("Error in File Uploading");
//                }


//                document.getElementById("upload_file_id").value = "";
//            },
//            error: function (err) {
//                DestroyWaitMsgWnd();
//                alert(err.statusText);
//            }
//        });


//    }
//    catch (err) {
//        alert('UploadDocFile() - Error In JScript');
//    }

//}
//===========================Rima====================

function UploadDocFile() {
    try {
        var fileInput = document.getElementById("upload_file_id");

        if (fileInput.files.length <= 0) {
            ShowMsgWnd("Select a file....");
            return;
        }

        var fileUpload = fileInput.files[0];
        var fileName = fileUpload.name;
        var fileSize = parseFloat(fileUpload.size / 1024).toFixed(2); // KB

        // Get the file extension
        var fileExtension = fileName.split('.').pop().toLowerCase();

        // Blocked video file extensions
        var blockedExtensions = ["mp4", "avi", "mov", "mkv", "flv", "wmv", "webm", "m4v"];

        // If the file is a blocked video format, show an alert and reset input
        if (blockedExtensions.includes(fileExtension)) {
            alert("Video files (." + fileExtension + ") are not allowed!");
            fileInput.value = ""; // Clear file selection
            return;
        }

        var formData = new FormData();
        formData.append("selected_file", fileUpload);
        formData.append("file_name", fileName);
        formData.append("doc_type", "1"); // Lesson Plan Doc

        SetValue("ctxt_resource_link", fileName);

        ShowWaitMsgWnd("Please Wait");

        $.ajax({
            url: "FileUploadHandler.ashx",
            type: "POST",
            contentType: false,
            processData: false,
            data: formData,
            xhr: function () {
                var xhr = $.ajaxSettings.xhr();
                xhr.upload.onprogress = function (data) {
                    var perc = Math.round((data.loaded / data.total) * 100);
                    SetInnerHtml("cmd_progress_bar", perc.toString() + "%");
                };
                return xhr;
            },
            success: function (result) {
                DestroyWaitMsgWnd();

                if (result === "SUCCESS") {
                    alert("File Uploaded Successfully");
                } else if (result === "DUPLICATE") {
                    alert("Duplicate File");
                } else {
                    alert("Error in File Uploading");
                }

                fileInput.value = ""; // Reset the file input
            },
            error: function (err) {
                DestroyWaitMsgWnd();
                alert(err.statusText);
            }
        });
    } catch (err) {
        alert('UploadDocFile() - Error in JavaScript');
    }
}





function PopulateResourceType(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_resource_type = GetValueByCtrlName("ctxt_resource_type") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_name,VARCHAR," + ctxt_resource_type);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_resource_type",
                                             m_sp_param,
                                             "Proc_Get_Poco_Resource_Type",
                                             ctxt_resource_type,
                                             0);
    }
    catch (err) {
        alert('PopulateResourceType() - Error In JScript');
    }
}

function LockResourceCtrl() {
    try {
        cntxt_is_upload = GetValueByCtrlName("cntxt_is_upload");

        //  LockControl("ctxt_resource_link", true);
        LockControl("upload_file_id", true);
        ShowHideControl("btn_upload_file_id", 0);
        ShowHideControl("cmd_progress_bar", 0);

        if (parseInt(cntxt_is_upload) == 0) {
            LockControl("ctxt_resource_link", false);
        }
        else {
            LockControl("upload_file_id", false);
            ShowHideControl("btn_upload_file_id", 1);
            ShowHideControl("cmd_progress_bar", 1);
        }


    }
    catch (err) {
        alert('LockResourceCtrl() - Error In JScript');
    }
}


//-------------------------------------

function SaveLessonPlanResource() {

    try {

        ctxt_att_date = GetValueByCtrlName("ctxt_att_date");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_selected_period_id = GetValueByCtrlName("cntxt_selected_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");

        ctxt_resource_unique_key_id = GetValueByCtrlName("ctxt_resource_unique_key_id");
        ctxt_resource_type_id = GetValueByCtrlName("ctxt_resource_type_id");
        ctxt_resource_desp = GetValueByCtrlName("ctxt_resource_desp");
        ctxt_resource_link = GetValueByCtrlName("ctxt_resource_link");

        // Validation checks for null
        if (!ctxt_resource_desp || ctxt_resource_desp.trim() === "") {
            alert("Resource description cannot be empty.");
            return;
        }

        if (!ctxt_resource_link || ctxt_resource_link.trim() === "") {
            alert("Resource link cannot be empty.");
            return;
        }

        WebServiceShowFacultyDetailsEmpCodeWise.SaveLessonPlanResource(ctxt_resource_unique_key_id,
                                                                    ctxt_att_date,
                                                                    cntxt_batch_id,
                                                                    cntxt_course_id,
                                                                    cntxt_stream_id,
                                                                    cntxt_section_id,
                                                                    cntxt_semester_id,
                                                                    cntxt_selected_period_id,
                                                                    cntxt_subject_id,
                                                                    cntxt_group_id,
                                                                    ctxt_emph_code,
                                                                    cntxt_college_id,
                                                                    ctxt_resource_type_id,
                                                                    ctxt_resource_desp,
                                                                    ctxt_resource_link,
                      OnComplete_SaveLessonPlanResource, OnError_SaveLessonPlanResource,
                       OnTimeOut_SaveLessonPlanResource);
    }

    catch (err) {
        alert("SaveLessonPlanResource()- Error In JScript");
    }
}

function OnComplete_SaveLessonPlanResource(arg) {
    if (arg == 0) {
        ShowMsgWnd("Data Saved....");
        SetValue("ctxt_resource_unique_key_id", "0");
        SetValue("ctxt_resource_type_id", "0");
        SetValue("ctxt_resource_type", "");
        SetValue("ctxt_resource_desp", "");
        SetValue("ctxt_resource_link", "");

        DisplayLessonPlanResourseList();

    }
    else {
        ShowMsgWnd("Error in Data Saving");
    }
}
function OnError_SaveLessonPlanResource(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SaveLessonPlanResource(arg) {
    alert("Time Out");
}
//-------------------------------------------


function DisplayLessonPlanResourseList() {
    try {


        ctxt_att_date = GetValueByCtrlName("ctxt_att_date");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_selected_period_id = GetValueByCtrlName("cntxt_selected_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");


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
        m_sp_param.push("@p_FacultyCode,VARCHAR," + ctxt_emph_code);
        m_sp_param.push("@p_CollegeId,INT," + cntxt_college_id);


        DynamicHtmlTemplate_PopulateGrid("m_key_resource_list", m_sp_param, "Proc_Get_Faculty_Wise_Lesson_plan_Resource");

    }
    catch (err) {
        alert("DisplayLessonPlanResourseList() - JScript Error");
    }
}


//-------------------------------------

function DeleteLessonPlanResource() {

    try {


        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_resource_unique_key_id = GetValueByCtrlName("ctxt_resource_unique_key_id");

        WebServiceShowFacultyDetailsEmpCodeWise.DeleteLessonPlanResource(ctxt_resource_unique_key_id,
                                                                    cntxt_college_id,
                      OnComplete_DeleteLessonPlanResource, OnError_DeleteLessonPlanResource,
                       OnTimeOut_DeleteLessonPlanResource);
    }

    catch (err) {
        alert("DeleteLessonPlanResource()- Error In JScript");
    }
}

function OnComplete_DeleteLessonPlanResource(arg) {
    if (arg == 0) {
        ShowMsgWnd("Data Saved....");

        ResetResourceCtrl();
        DisplayLessonPlanResourseList();

    }
    else {
        ShowMsgWnd("Error in Data Saving");
    }
}
function OnError_DeleteLessonPlanResource(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_DeleteLessonPlanResource(arg) {
    alert("Time Out");
}
//-------------------------------------------

function ResetResourceCtrl() {
    SetValue("ctxt_resource_unique_key_id", "0");
    SetValue("ctxt_resource_type_id", "0");
    SetValue("ctxt_resource_type", "");
    SetValue("ctxt_resource_desp", "");
    SetValue("ctxt_resource_link", "");
    SetValue("cntxt_is_upload", "");

}


function EditResource() {
    try {
        p_curr_ctrl_name = document.activeElement.id;
        m_curr_ctrl_prefix = "M_GRID_RESOURCE_LIST_CTRL_";

        if (p_curr_ctrl_name.indexOf(m_curr_ctrl_prefix + "EDIT") > -1) {
            LockResourceCtrl();
        }
        else if (p_curr_ctrl_name.indexOf(m_curr_ctrl_prefix + "LINK") > -1) {
            ctxt_resource_link = GetValueByCtrlName("ctxt_resource_link");
            cntxt_is_upload = GetValueByCtrlName("cntxt_is_upload");

            ResetResourceCtrl();
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
        alert('EditResource() - Error In JScript');
    }
}


function OpenJisResWnd() {
    cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");
    ctxt_subject_code = GetValueByCtrlName("ctxt_subject_code");

    m_link = "http://112.133.209.26:82/Forms/frmShowVideoLectureList.aspx?branch_id=" + cntxt_branch_id + "&code=" + ctxt_subject_code;
    window.open(m_link, "_blank");
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
        ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");
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
        m_sp_param.push("@P_FACULTY_CODE,VARCHAR," + ctxt_emph_code);
        m_sp_param.push("@P_SEM_TYPE,VARCHAR," + ctxt_sem_type);




        ShowWaitMsgWnd("Please Wait");
        WebServiceMasters.GetData("NA", FieldArray, m_sp_param,
                                  "Proc_Get_Attendence_percentage_For_Faculty", 0,
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

        SetInnerHtml("ctxt_cons_attd", arg.m_List[0][1]);
        SetInnerHtml("ctxt_cons_attd_total", arg.m_List[0][0]);


    }
    else {
        SetInnerHtml("ctxt_cons_attd", "");
        SetInnerHtml("ctxt_cons_attd_total", "");
    }
    ViewDateWiseRoutine();


}
function OnError_GetConsolidateAttendance(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_GetConsolidateAttendance(arg) {
    alert("Time Out");
}

function show_Faculty_Name() {

    ctxt_fac_name = GetValueByCtrlName("ctxt_fac_name");
    ctxt_emph_code = GetValueByCtrlName("ctxt_emph_code");

}

//-------------------------------------------
