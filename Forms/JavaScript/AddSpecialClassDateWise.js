var radio_theo_prac;
var chk_is_sub_active;
var m_student_function;

var m_array_subject_temp = new Array();
var m_array_colour_code = new Array();

function RightMouseClick(event) {
    if (event.which == 3) {
        alert(window.document.nodeName);
        event.preventDefault();
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

//function ShowHidePanel(p_flag) {
//    try {

//        if (p_flag == 1) {
//            document.getElementById("cmd_save").disabled = true;
//            document.getElementById("cmd_selectall").disabled = true;
//            document.getElementById("cmd_deselectall").disabled = true;

//            ShowHideControl("m_DivPanelHeader", 1);
//            ShowHideControl("m_DivPanelSearchStudent", 0);
//            ShowHideControl("m_DivPanelSearchSubjecta", 0);
//        }
//        else if (p_flag == 2) {
//            ShowHideControl("m_DivPanelSearchSubjecta", 1);
//            ShowHideControl("m_DivPanelSearchStudent", 0);
//        }
//        else if (p_flag == 3) {
//            ShowHideControl("m_DivPanelSearchStudent", 1);
//            ShowHideControl("m_DivPanelSearchSubjecta", 1);
//        }
//        else if (p_flag == 4) {
//            ShowHideControl("m_DivPanelSearchStudent", 0);

//        }
//    }
//    catch (err) {
//        alert("ShowHidePanel() - JScript Error");
//    }
//}

function Init() {
    try {
        SetAutoCompleteOff();
        SetFocusOffByTagName("DIV");
        SetDateEventByTagName();
        // ShowHidePanel('1');

        //=======populate Course ===========
        m_session_var_name = "S_POPULATE_COURSE";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_course", "m_grid_populate_course", "div_course_name", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("CourseId,CourseName");
        DynamicHtmlTemplate_SetControlName("cntxt_course_id,ctxt_course_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_course', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_course', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_course');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("CourseId,CourseId,hidden_textbox,R,10px");
        m_field_arr.push("CourseName,Course Name,read_only_textbox,L,15px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======populate Starting Batch ===========
        m_session_var_name = "S_POPULATE_BATCH";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_starting_batch", "m_grid_populate_batch", "div_StartingBatch", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("batch_id,batch_year"); // value and text both are sem
        DynamicHtmlTemplate_SetControlName("cntxt_batch_id,ctxt_batch");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_starting_batch', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_starting_batch', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_starting_batch');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("batch_id,BatchId,hidden_textbox,R,10px");
        m_field_arr.push("batch_year,Batch,read_only_textbox,L,15px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //=======Populate Group===========
        m_session_var_name = "S_POPULATE_GROUP";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_group", "m_grid_populate_group", "div_group", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_GroupId,m_GroupName");
        DynamicHtmlTemplate_SetControlName("cntxt_group_id,ctxt_group_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_group', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_group', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_group');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("m_GroupId,Group Id,hidden_textbox,R,10px");
        m_field_arr.push("m_GroupName,GROUP ID,read_only_textbox,L,20px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Display Subject===========
        m_session_var_name = "S_POPULATE_STREAM_WISE_SUBJECT";
        DynamicHtmlTemplate_AddKeyName("m_populate_stream_wise_subject", "m_grid_stream_wise_subject", "m_panel_stream_wise_subject", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("SubjectId");
        DynamicHtmlTemplate_SetControlName("cntxt_subject_id");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_populate_stream_wise_subject', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_populate_stream_wise_subject', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_populate_stream_wise_subject');");
        DynamicHtmlTemplate_EventAfterPostPopulation("SetSubjectRowEvent();");

        var m_field_arr = new Array();
        m_field_arr.push("APP,Select,read_only_textbox,C,5px");
        m_field_arr.push("SubjectId,SubjectId,hidden_textbox,L,15%");
        m_field_arr.push("SubjectCode,SUBJECT CODE,read_only_textbox,C,30%");
        m_field_arr.push("SubjectName,SUBJECT NAME,read_only_textbox,L,70%");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //=================================

        //===SEARCH====POPULATE_BATCH_COURSE_WISE_SEM_STREAM_SETTING_GRID===========
        m_session_var_name = "S_POPULATE_BATCH_COURSE_WISE_SEM_STREAM_SECTION_GRID";
        DynamicHtmlTemplate_AddKeyName("m_key_BatchCourseWiseStreamSemSectionSearch", "m_grid_BatchCourseSemStreamWiseSection", "div_search", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("CourseId,CourseName,StreamId,StreamName,sem_type_id,sem_type,SemesterId,SemesterName,SectionId,SectionName");
        DynamicHtmlTemplate_SetControlName("cntxt_course_id,ctxt_course_name,cntxt_stream_id,ctxt_stream_name,cntxt_semester_type_id,ctxt_semester_type,cntxt_semester_id,ctxt_semester_name,cntxt_section_id,ctxt_section_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_BatchCourseWiseStreamSemSectionSearch', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_BatchCourseWiseStreamSemSectionSearch', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_BatchCourseWiseStreamSemSectionSearch');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("CourseId,CourseId,hidden_textbox,L,50%");
        m_field_arr.push("CourseName,COURSE NAME,read_only_textbox,L,20%");

        m_field_arr.push("StreamId,StreamId,hidden_textbox,L,10%");
        m_field_arr.push("StreamName,STREAM NAME,read_only_textbox,L,30%");

        m_field_arr.push("sem_type_id,sem_type_id,hidden_textbox,L,15%");
        m_field_arr.push("sem_type,SEMESTER TYPE,read_only_textbox,L,20%");

        m_field_arr.push("SemesterId,SemesterId,hidden_textbox,L,10%");
        m_field_arr.push("SemesterName,SEMESTER NAME,read_only_textbox,L,30%");

        m_field_arr.push("SectionId,SectionId,hidden_textbox,L,15%");
        m_field_arr.push("SectionName,SECTION NAME,read_only_textbox,L,20%");

        m_field_arr.push("sem_no,sem_no,hidden_textbox,L,15%");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //=======populate Faculty Department ===========
        m_session_var_name = "S_POPULATE_DEPARTMENT";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_department", "m_grid_populate_department", "div_from_faculty_dept", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("dept_id,dept_name");
        DynamicHtmlTemplate_SetControlName("cntxt_from_faculty_dept_id,ctxt_from_faculty_dept");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_department', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_department', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_department');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("dept_id,DeptId,hidden_textbox,R,10px");
        m_field_arr.push("dept_name,Department,read_only_textbox,L,15px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //=======POPULATE_FACULTY===========
        m_session_var_name = "S_POPULATE_FACULTY_NAME";
        DynamicHtmlTemplate_AddKeyName("m_populate_faculty_name", "m_grid_populate_faculty_name", "div_from_faculty_name", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_Emph_code,m_Emph_Name,m_Emph_Name_Code,m_Emph_Sh_Name");
        DynamicHtmlTemplate_SetControlName("ctxt_from_emph_code,ctxt_from_emph_name,ctxt_from_faculty,ctxt_fac_sh_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_populate_faculty_name', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_populate_faculty_name', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_populate_faculty_name');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("m_Emph_code,m_Emph_code,hidden_textbox,L,50%");
        m_field_arr.push("m_Emph_Name,m_Emph_Name,hidden_textbox,L,10%");
        m_field_arr.push("m_Emph_Name_Code,Employee Name,read_only_textbox,L,50%");
        m_field_arr.push("m_Emph_Sh_Name,Employee Sh Name,read_only_textbox,L,50%");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Subject===========
        m_session_var_name = "S_SUBJECT";
        DynamicHtmlTemplate_AddKeyName("m_key_subject", "m_grid_subject", "div_subject", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_subjectId,m_subjectCode");
        DynamicHtmlTemplate_SetControlName("cntxt_subject_id,ctxt_subject");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_subject', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_subject', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_subject');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("m_subjectId,m_subjectId,hidden_textbox,R,10px");
        m_field_arr.push("m_subjectName,Name,read_only_textbox,L,50px");
        m_field_arr.push("m_subjectCode,Code,read_only_textbox,L,15px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======POPULATE_FROM_PERIOD===========
        m_session_var_name = "S_POPULATE_PERIOD";
        DynamicHtmlTemplate_AddKeyName("m_populate_period", "m_grid_populate_period", "div_populate_period", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("period_id,period_sDisplay");
        DynamicHtmlTemplate_SetControlName("cntxt_period_id,ctxt_period_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_populate_period', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_populate_period', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_populate_period');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("period_id,period_id,hidden_textbox,L,5%");
        m_field_arr.push("Period_start_time,Period_start_time,hidden_textbox,L,10%");
        m_field_arr.push("Period_end_time,Period_end_time,hidden_textbox,L,10%");
        m_field_arr.push("period_sDisplay,PERIOD,read_only_textbox,L,22%");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================================================
        AddColourCode();

        LoadMenu();
    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}

function SearchCourse(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        m_course_name = GetValueByCtrlName("ctxt_course_name") + "%";
        m_college_id = GetValueByCtrlName("cntxt_college_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_Course_name,VARCHAR," + m_course_name);
        m_sp_param.push("@p_College_id,INT," + m_college_id);


        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_course",
                                             m_sp_param,
                                             "Proc_Get_stf_Course",
                                             m_course_name,
                                             0);
    }
    catch (err) {
        alert('SearchCourse() - Error In JScript');
    }
}

function PopulateStartingBatch(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_batch = GetValueByCtrlName("ctxt_batch") + "%";
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_batch_year,VARCHAR," + ctxt_batch);
        m_sp_param.push("@p_College_id,INT," + cntxt_college_id);


        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_starting_batch",
                                             m_sp_param,
                                             "Proc_Get_stf_BatchYear",
                                             ctxt_batch,
                                             0);
    }
    catch (err) {
        alert('PopulateStartingBatch() - Error In JScript');
    }
}

function BatchCourseWiseStreamAndSemSectionSearch() {
    try {
        if (GetValueByCtrlName('ctxt_batch') == "") {
            SetValue("cntxt_batch_id", "0");
            ShowMsgWnd('Select Batch');
            return false;
        }
        if (GetValueByCtrlName('ctxt_course_name') == "") {
            SetValue("cntxt_course_id", "0");
            ShowMsgWnd('Select Course');
            return false;
        }
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + 0);
        m_sp_param.push("@p_semester_id,INT," + 0);
        m_sp_param.push("@p_section_id,INT," + 0);

        DynamicHtmlTemplate_PopulateGrid("m_key_BatchCourseWiseStreamSemSectionSearch", m_sp_param, "Proc_Get_Batch_Course_Stream_Semester_Wise_Section");
    }
    catch (err) {
        alert('PopulateBatchCourseSemStreamWiseSection() - Error In JScript');
    }
}

function PopulateGroup(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_group_name = GetValueByCtrlName("ctxt_group_name") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_Group_name,VARCHAR," + ctxt_group_name);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_group",
                                             m_sp_param,
                                             "Proc_Get_Group",
                                             ctxt_group_name,
                                             0);
    }
    catch (err) {
        alert('PopulateSection() - Error In JScript');
    }
}
//-----------------------------Populate Department------------------------------
function PopulateFromFacultyDept(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_from_faculty_dept = GetValueByCtrlName("ctxt_from_faculty_dept") + "%";


        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_dept_name,VARCHAR," + ctxt_from_faculty_dept);


        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_department",
                                             m_sp_param,
                                             "Proc_Get_Faculty_Department",
                                             ctxt_from_faculty_dept,
                                             0);

    }
    catch (err) {
        alert('PopulateFromFacultyDept() - Error In JScript');
    }
}
//-----------------------------Populate Faculty------------------------------
function PopulateFromFaculty(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_from_faculty_dept_id = GetValueByCtrlName("cntxt_from_faculty_dept_id");
        ctxt_from_faculty = GetValueByCtrlName("ctxt_from_faculty") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_department_id,INT," + cntxt_from_faculty_dept_id);
        m_sp_param.push("@p_empolyee_name,VARCHAR," + ctxt_from_faculty);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_populate_faculty_name",
                                             m_sp_param,
                                             "Proc_Get_Faculty_Name",
                                             ctxt_from_faculty,
                                             0);

    }
    catch (err) {
        alert('PopulateFromFaculty() - Error In JScript');
    }
}

function PopulateSubject(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        ctxt_subject = GetValueByCtrlName("ctxt_subject") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_sem_id,INT," + cntxt_semester_id);
        m_sp_param.push("@p_sub_name,VARCHAR," + ctxt_subject);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_subject",
                                             m_sp_param,
                                             "Proc_Get_Batch_Course_Stream_Sem_Wise_Subject",
                                             ctxt_subject,
                                             0);
    }
    catch (err) {
        alert('PopulateSubject() - Error In JScript');
    }
}

function PopulatePeriod(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_date = GetValueByCtrlName("ctxt_date");
        ctxt_from_emph_code = GetValueByCtrlName("ctxt_from_emph_code");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_date,DATETIME," + ctxt_date);
        m_sp_param.push("@p_faculty_code,VARCHAR," + ctxt_from_emph_code);
        m_sp_param.push("@P_BATCH_ID,INT," + cntxt_batch_id);
        m_sp_param.push("@P_COURSE_ID,INT," + cntxt_course_id);
        m_sp_param.push("@P_STREAM_ID,INT," + cntxt_stream_id);
        m_sp_param.push("@P_SECTION_ID,INT," + cntxt_section_id);
        m_sp_param.push("@P_SEMESTER_ID,INT," + cntxt_semester_id);
        m_sp_param.push("@P_GROUP_ID,INT," + cntxt_group_id);


        // DynamicHtmlTemplate_PopulateGrid("m_populate_period",m_sp_param,"Proc_Get_Free_Period_DateWise_Routine");
        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_populate_period",
                                             m_sp_param,
                                             "Proc_Get_Free_Period_DateWise_Routine",
                                             '',
                                             0);
    }
    catch (err) {
        alert('PopulatePeriod() - Error In JScript');
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
//-------------------------------------------------------------------------------------------------
function ViewDateWiseRoutine() {
    try {
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");
        ctxt_from_emph_code = GetValueByCtrlName("ctxt_from_emph_code");

        WebServiceAddSpecialClassDateWise.DispDateWiseRoutine(ctxt_from_emph_code,
                                                                dtp_from_date,
                                                                dtp_to_date,
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
        m_array_routine_header = arg.m_routine_header;
        m_array_routine_data = arg.m_routine_data;
        CreateDateWiseRoutineMatrix();
    }
}
function OnErrorViewDateWiseRoutine(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutViewDateWiseRoutine(arg) {
    alert("Time Out");
}
//-------------------------------------------
function CreateDateWiseRoutineMatrix() {
    try {


        RemoveDateWiseRoutineMatrix();

        div_date_wise_routine_container = document.getElementById("div_date_wise_routine_container");
        var m_master_table = document.createElement('table');
        m_master_table.setAttribute('class', "table table-bordered table-striped table-vertical-middle");
        m_master_table.style.width = "200%";


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

                if (iCol <= 1) { /*Day Name*/
                    m_table_col.innerHTML = m_current_val;
                    m_table_row.appendChild(m_table_col);
                }
                else {
                    m_current_arr0 = m_current_val.split("#");

                    for (Arri = 0; Arri <= m_current_arr0.length - 1; Arri++) {
                        //m_param1 = m_current_arr0[0].substr(0, m_current_arr0[0].search("NA_"));

                        m_param1 = m_current_arr0[0].slice(3);

                       // = m_current_arr0[0];
                        m_current_arr1 = m_current_arr0[1].split("|");
                        var m_inner_table = document.createElement('table');
                        m_inner_table.setAttribute('class', "tablechild fullwidth");

                        var m_inner_body = document.createElement('tbody');


                        for (ArrCtr = 0; ArrCtr <= m_current_arr1.length - 1; ArrCtr++) {
                            if (m_current_arr1[ArrCtr] != "") {
                                var m_inner_row = document.createElement('tr');
                                var m_inner_col = document.createElement('td');
                                m_current_arr2 = m_current_arr1[ArrCtr].split("<>");
                                if (m_current_arr2[1] != "") {
                                    m_span = "<u><span class='label label-success padding-0'></span></u> ";
                                    m_inner_col.innerHTML = m_span + m_current_arr2[0];

                                    m_str_subject = m_current_arr2[0].substr(0, m_current_arr2[0].search("{"));
                                    SetRoutineBackColour(m_str_subject, m_inner_col);
                                }
                                m_inner_row.appendChild(m_inner_col);
                                m_inner_body.appendChild(m_inner_row);
                            }
                        }
                    }

                    /**/

                    var m_inner_row = document.createElement('tr');
                    var m_inner_col = document.createElement('td');
                    m_inner_col.setAttribute('class', "addrow");
                    m_function = "onclick=SelectRoutineColumn('" + m_param1 + "');";

                    m_span = "<a class='btn btn-3d btn-xs btn-reveal btn-default margin-top-6 fullwidth' " + m_function + "><i class='fa fa-plus size-10'></i><span>Add New</span></a> ";
                    m_inner_col.innerHTML = m_span;
                    m_inner_row.appendChild(m_inner_col);
                    m_inner_body.appendChild(m_inner_row);
                    //=======================================================
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
        alert("CreateDateWiseRoutineMatrix() - JScript Error" + err);
    }
}
//--------------------------------------------------------------------------
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

function SetRoutineBackColour(p_subject, p_ref) {
    try {

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
//------------------------------------------------------------------
function Show() {
    ctxt_from_faculty = GetValueByCtrlName("ctxt_from_faculty");
    ctxt_from_emph_code = GetValueByCtrlName("ctxt_from_emph_code");
    dtp_from_date = GetValueByCtrlName("dtp_from_date");
    dtp_to_date = GetValueByCtrlName("dtp_to_date");
    if (ctxt_from_faculty == "") {
        ShowMsgWnd("Select Faculty");
        return false;
    }
    if (ctxt_from_emph_code == "0") {
        ShowMsgWnd("Select Faculty");
        return false;
    }
    if (dtp_from_date == "") {
        ShowMsgWnd("Select From Date");
        return false;
    }
    if (dtp_to_date == "") {
        ShowMsgWnd("Select To Date");
        return false;
    }
    ViewDateWiseRoutine();
}


function SelectRoutineColumn(p_param1) {
    try {
        m_param1 = p_param1.split("_");

        SetValue("cntxt_selected_day_id", m_param1[0]); //---------Day
        SetValue("cntxt_selected_period_id", m_param1[1]); //--------Period
        SetValue("ctxt_selected_date", m_param1[2]); //-------------Date

        if (ValidateSave() == false) {
            return;
        }
        
        ValidateSpecialClass();
    }
    catch (err) {
        alert("SelectRoutineColumn() - JScript Error");
    }
}
//---------------------------------------------------------------------------------------
function ValidateSpecialClass() {
    try {

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_selected_date = GetValueByCtrlName("ctxt_selected_date");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_selected_period_id = GetValueByCtrlName("cntxt_selected_period_id");
        cntxt_selected_day_id = GetValueByCtrlName("cntxt_selected_day_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        ctxt_from_emph_code = GetValueByCtrlName("ctxt_from_emph_code");
        ctxt_from_emph_name = GetValueByCtrlName("ctxt_from_emph_name");
        ctxt_fac_sh_name = GetValueByCtrlName("ctxt_fac_sh_name");

        var m_HeaderArray = new Array();
        m_HeaderArray.push(GetFieldValArr('cntxt_college_id', cntxt_college_id));
        m_HeaderArray.push(GetFieldValArr('ctxt_selected_date', ctxt_selected_date)); //-------------selected date
        m_HeaderArray.push(GetFieldValArr('cntxt_batch_id', cntxt_batch_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_course_id', cntxt_course_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_stream_id', cntxt_stream_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_section_id', cntxt_section_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_semester_id', cntxt_semester_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_selected_period_id', cntxt_selected_period_id)); //------------Selected Period
        m_HeaderArray.push(GetFieldValArr('cntxt_selected_day_id', cntxt_selected_day_id)); //---------------Select Day id
        m_HeaderArray.push(GetFieldValArr('cntxt_subject_id', cntxt_subject_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_group_id', cntxt_group_id));
        m_HeaderArray.push(GetFieldValArr('ctxt_from_emph_code', ctxt_from_emph_code));
        m_HeaderArray.push(GetFieldValArr('ctxt_from_emph_name', ctxt_from_emph_name));
        m_HeaderArray.push(GetFieldValArr('ctxt_fac_sh_name', ctxt_fac_sh_name));

        WebServiceAddSpecialClassDateWise.ValidateSpecialClass(m_HeaderArray, OnComplete_ValidateSpecialClass, OnError_ValidateSpecialClass, OnTimeOut_ValidateSpecialClass);

    }
    catch (err) {
        alert("ValidateSpecialClass() - JScript Error");
    }
}
function OnComplete_ValidateSpecialClass(arg) {
    if ((arg.m_err_no) == 0) {
        SaveSpecialClass();
    }
    else {
        ShowMsgWnd(arg.m_err_msg);
    }
}
function OnError_ValidateSpecialClass(arg) {
    alert("error : " + argmessage);
    // ClearDataAfterSave();
}
function OnTimeOut_ValidateSpecialClass(arg) {
    alert("Time Out");
}
//---------------------------------------------------------------------------------------
function SaveSpecialClass() {
    try {
        if (SelectionWindow() == false) {
            return;
        }

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_selected_date = GetValueByCtrlName("ctxt_selected_date");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_selected_period_id = GetValueByCtrlName("cntxt_selected_period_id");
        cntxt_selected_day_id = GetValueByCtrlName("cntxt_selected_day_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        ctxt_from_emph_code = GetValueByCtrlName("ctxt_from_emph_code");
        ctxt_from_emph_name = GetValueByCtrlName("ctxt_from_emph_name");
        ctxt_fac_sh_name = GetValueByCtrlName("ctxt_fac_sh_name");

        var m_HeaderArray = new Array();
        m_HeaderArray.push(GetFieldValArr('cntxt_college_id', cntxt_college_id));
        m_HeaderArray.push(GetFieldValArr('ctxt_selected_date', ctxt_selected_date)); //-------------selected date
        m_HeaderArray.push(GetFieldValArr('cntxt_batch_id', cntxt_batch_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_course_id', cntxt_course_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_stream_id', cntxt_stream_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_section_id', cntxt_section_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_semester_id', cntxt_semester_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_selected_period_id', cntxt_selected_period_id)); //------------Selected Period
        m_HeaderArray.push(GetFieldValArr('cntxt_selected_day_id', cntxt_selected_day_id)); //---------------Select Day id
        m_HeaderArray.push(GetFieldValArr('cntxt_subject_id', cntxt_subject_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_group_id', cntxt_group_id));
        m_HeaderArray.push(GetFieldValArr('ctxt_from_emph_code', ctxt_from_emph_code));
        m_HeaderArray.push(GetFieldValArr('ctxt_from_emph_name', ctxt_from_emph_name));
        m_HeaderArray.push(GetFieldValArr('ctxt_fac_sh_name', ctxt_fac_sh_name));

        WebServiceAddSpecialClassDateWise.SaveData(m_HeaderArray, OnComplete_SaveSpecialClass, OnError_SaveSpecialClass, OnTimeOut_SaveSpecialClass);

    }
    catch (err) {
        alert("SaveSpecialClass() - JScript Error");
    }
}
function OnComplete_SaveSpecialClass(arg) {
    ShowMsgWnd(arg);
    ViewDateWiseRoutine();
}
function OnError_SaveSpecialClass(arg) {
    alert("error : " + argmessage);
   // ClearDataAfterSave();
}
function OnTimeOut_SaveSpecialClass(arg) {
    alert("Time Out");
}

function ValidateSave() {
    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_batch = GetValueByCtrlName("ctxt_batch");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        ctxt_from_emph_code = GetValueByCtrlName("ctxt_from_emph_code");

        if (ctxt_from_emph_code == "0") {
            ShowMsgWnd("Can't Save - Select Faculty");
            return false;
        }

        if (GetValueByCtrlName('ctxt_batch') == "") {
            ShowMsgWnd('Select Batch');
            return false;
        }
        if (parseFloat(cntxt_course_id) == 0) {
            ShowMsgWnd("Can't Save - Select Course");
            return false;
        }
        if (parseFloat(cntxt_stream_id) == 0) {
            ShowMsgWnd("Can't Save - Select Stream");
            return false;
        }
        if (parseFloat(cntxt_semester_id) == 0) {
            ShowMsgWnd("Can't Save - Select Sem");
            return false;
        }
        if (parseFloat(cntxt_section_id) == 0) {
            ShowMsgWnd("Can't Save - Select Section");
            return false;
        } 
        if (parseFloat(cntxt_group_id) == 0) {
            ShowMsgWnd("Can't Save - Select Subject Group");
            return false;
        }
        if (parseFloat(cntxt_subject_id) == 0) {
            ShowMsgWnd("Can't Save - Select Subject");
            return false;
        }
        

        return true;

    }
    catch (err) {
        alert("ValidateSave() - JScript Error");
    }
}

function Reset() {
    try {
        SetValue("ctxt_from_faculty_dept", "");
        SetValue("ctxt_from_faculty", "");
        SetValue("dtp_from_date", "");
        SetValue("dtp_to_date", "");
        SetValue("ctxt_batch", "");
        SetValue("ctxt_course_name", "");
        SetValue("ctxt_stream_name", "");
        SetValue("ctxt_semester_type", "");
        SetValue("ctxt_semester_name", "");
        SetValue("ctxt_section_name", "");
        SetValue("ctxt_group_name", "");
        SetValue("ctxt_subject", "");
        SetValue("ctxt_semester_type", "");
        SetValue("ctxt_semester_name", "");
        SetValue("ctxt_section_name", "");

        SetValue("cntxt_course_id", "0");
        SetValue("cntxt_batch_id", "0");
        SetValue("cntxt_stream_id", "0");
        SetValue("cntxt_semester_id", "0");
        SetValue("cntxt_subject_id", "0");
        SetValue("cntxt_semester_type_id", "0");
        SetValue("cntxt_section_id", "0");
        SetValue("cntxt_group_id", "0");
        SetValue("cntxt_from_faculty_dept_id", "0");
        SetValue("ctxt_from_emph_code", "");
        SetValue("cntxt_period_id", "0");
        SetValue("cntxt_selected_period_id", "0");
        SetValue("cntxt_selected_day_id", "0");
        SetValue("ctxt_selected_date", "");
        SetValue("ctxt_fac_sh_name", "");
        RemoveDateWiseRoutineMatrix();
    }
    catch (err) {
        alert("Cancel() - JScript Error");
    }
}