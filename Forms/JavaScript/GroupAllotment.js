
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

function ShowHidePanel(p_flag) {
    try {

        if (p_flag == 1) {
            document.getElementById("cmd_save").disabled = true;
            document.getElementById("cmd_selectall").disabled = true;
            document.getElementById("cmd_deselectall").disabled = true;

            document.getElementById("ctxt_stream_name").disabled = true;
            document.getElementById("ctxt_semester_type").disabled = true;
            document.getElementById("ctxt_semester_name").disabled = true;
            document.getElementById("ctxt_section_name").disabled = true;

            ShowHideControl("m_DivPanelHeader", 1);
            ShowHideControl("m_DivPanelSearchStudent", 0);
            ShowHideControl("m_DivPanelSearchSubjecta", 0);
        }
        else if (p_flag == 2) {
            ShowHideControl("m_DivPanelSearchSubjecta", 1);
            ShowHideControl("m_DivPanelSearchStudent", 0);
        }
        else if (p_flag == 3) {
            ShowHideControl("m_DivPanelSearchStudent", 1);
            ShowHideControl("m_DivPanelSearchSubjecta", 1);
        }
        else if (p_flag == 4) {
            ShowHideControl("m_DivPanelSearchStudent", 0);
        
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

        ShowHidePanel('1');

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
        m_field_arr.push("CourseName,Course Name,read_only_textbox,L,50px");

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
        m_field_arr.push("batch_year,Batch,read_only_textbox,L,50px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================



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
        m_field_arr.push("m_GroupName,GROUP ID,read_only_textbox,L,50px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Display Subject===========
        m_session_var_name = "S_POPULATE_STREAM_WISE_SUBJECT";
        DynamicHtmlTemplate_AddKeyName("m_populate_stream_wise_subject", "m_grid_stream_wise_subject", "m_panel_stream_wise_subject", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("SubjectId");
        DynamicHtmlTemplate_SetControlName("cntxt_subject_id");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_populate_stream_wise_subject', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_populate_stream_wise_subject', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('NA');");
        DynamicHtmlTemplate_EventAfterPostPopulation("SetSubjectRowEvent();");

        var m_field_arr = new Array();
//        m_field_arr.push("APP,Select,read_only_textbox,C,5px");
        m_field_arr.push("SubjectId,SubjectId,hidden_textbox,L,15%");
        m_field_arr.push("SubjectCode,SUBJECT CODE,read_only_textbox,L,25%");
        m_field_arr.push("SubjectName,SUBJECT NAME,read_only_textbox,L,70%");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //=================================


        //=======Display BatchCourseSemStreamSection_Wise_Student===========
        m_session_var_name = "S_POPULATE_SECTION_WISE_STUDENT_GRID";
        DynamicHtmlTemplate_AddKeyName("m_populate_section_wise_student", "m_grid_section_wise_student", "m_panel_section_wise_student", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("StudentId");
        DynamicHtmlTemplate_SetControlName("cntxt_student_id");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_populate_section_wise_student', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_populate_section_wise_student', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_populate_section_wise_student');");
        DynamicHtmlTemplate_EventAfterPostPopulation("SetStudentRowEvent();Open_LockButton();");

        var m_field_arr = new Array();
        m_field_arr.push("APP,Select,read_only_textbox,C,5px");
        m_field_arr.push("StudentId,StudentId,hidden_textbox,L,15%");
        m_field_arr.push("StudentName,STUDENT NAME,read_only_textbox,L,60%");
        m_field_arr.push("StudentRoll,STUDENT ID,read_only_textbox,L,20%");
        m_field_arr.push("CollegeRoll,COLLEGE ROLL,read_only_textbox,L,12%");
        m_field_arr.push("UniversityRoll,UNIVERSITY ROLL,read_only_textbox,L,12%");
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
        DynamicHtmlTemplate_SetEventFunction("PopulateStreamWiseSubject();");
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
        m_field_arr.push("sem_type,SEMESTER TYPE,read_only_textbox,L,15%");

        m_field_arr.push("SemesterId,SemesterId,hidden_textbox,L,10%");
        m_field_arr.push("SemesterName,SEMESTER NAME,read_only_textbox,L,15%");

        m_field_arr.push("SectionId,SectionId,hidden_textbox,L,15%");
        m_field_arr.push("SectionName,SECTION NAME,read_only_textbox,L,12%");

        m_field_arr.push("sem_no,sem_no,hidden_textbox,L,15%");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);


        //=======Display Subject Group Wise Student Count===========
        m_session_var_name = "S_POPULATE_SUBJECT_GROUP_WISE_STUDENT";
        DynamicHtmlTemplate_AddKeyName("m_populate_subject_group_wise_std", "m_grid_subject_group_wise_std", "m_panel_subject_group_wise_std", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("Group_Id,Group_Name");
        DynamicHtmlTemplate_SetControlName("cntxt_group_id,ctxt_group_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("PopulateSectionWiseStudent();");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        //        m_field_arr.push("APP,Select,read_only_textbox,C,5px");
        m_field_arr.push("Group_Id,SubjectId,hidden_textbox,L,15%");
        m_field_arr.push("Group_Name,GROUP NAME,read_only_textbox,L,15%");
        m_field_arr.push("Student_Allotted,STUDENT ALLOTTED,read_only_textbox,C,15%");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //=================================

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
        cntxt_sem_no = GetValueByCtrlName("cntxt_sem_no");

        if (isNaN(cntxt_sem_no) == true) {
            cntxt_sem_no = "0";
        }

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + 0);
        m_sp_param.push("@p_semester_id,INT," + 0);
        m_sp_param.push("@p_section_id,INT," + 0);
        m_sp_param.push("@p_sem_type,INT," + "-1");
        m_sp_param.push("@p_sem_no,INT," + cntxt_sem_no);

        DynamicHtmlTemplate_PopulateGrid("m_key_BatchCourseWiseStreamSemSectionSearch", m_sp_param, "Proc_Get_Batch_Course_Stream_Semester_Wise_Section");
    }
    catch (err) {
        alert('PopulateBatchCourseSemStreamWiseSection() - Error In JScript');
    }
}

//function PopulateStream(event) {
//    try {
//        var unicode = event.keyCode ? event.keyCode : event.charCode;

//        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
//        ctxt_stream_name = GetValueByCtrlName("ctxt_stream_name") + "%";

//        var m_sp_param = new Array();
//        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
//        m_sp_param.push("@p_stream_name,VARCHAR," + ctxt_stream_name);

//        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
//                                             "m_key_populate_stream",
//                                             m_sp_param,
//                                             "Proc_STF_Get_Stream",
//                                             ctxt_stream_name,
//                                             0);
//    }
//    catch (err) {
//        alert('PopulateStream() - Error In JScript');
//    }
//}

//function PopulateSemesterType(event) {
//    try {
//        var unicode = event.keyCode ? event.keyCode : event.charCode;

//        ctxt_semester_type = GetValueByCtrlName("ctxt_semester_type") + "%";

//        var m_sp_param = new Array();
//        m_sp_param.push("@p_name,VARCHAR," + ctxt_semester_type);

//        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
//                                             "m_key_populate_semester_type",
//                                             m_sp_param,
//                                             "Proc_Get_Sem_Type",
//                                             ctxt_semester_type,
//                                             0);
//    }
//    catch (err) {
//        alert('PopulateSemesterType() - Error In JScript');
//    }
//}

//function PopulateSemester(event) {
//    try {
//        var unicode = event.keyCode ? event.keyCode : event.charCode;

//        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
//        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
//        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
//        cntxt_semester_type_id = GetValueByCtrlName("cntxt_semester_type_id");
//        ctxt_semester_name = GetValueByCtrlName("ctxt_semester_name") + "%";

//        var m_sp_param = new Array();
//        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
//        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);
//        m_sp_param.push("@p_College_id,INT," + cntxt_college_id);
//        if (cntxt_semester_type_id == 0) {
//            m_sp_param.push("@p_semester_type,VARCHAR," + 'E');
//        }
//        else if (cntxt_semester_type_id == 1) {
//            m_sp_param.push("@p_semester_type,VARCHAR," + 'O');

//        }
//        m_sp_param.push("@p_sem_name,VARCHAR," + ctxt_semester_name);

//        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
//                                             "m_key_populate_semester",
//                                             m_sp_param,
//                                             "Proc_Get_stf_Semester",
//                                             ctxt_semester_name,
//                                             0);
//    }
//    catch (err) {
//        alert('PopulateSemester() - Error In JScript');
//    }
//}

//function PopulateSection(event) {
//    try {
//        var unicode = event.keyCode ? event.keyCode : event.charCode;

//        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
//        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
//        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
//        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
//        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
//        ctxt_section_name = GetValueByCtrlName("ctxt_section_name") + "%";

//        var m_sp_param = new Array();
//        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
//        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);
//        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
//        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
//        m_sp_param.push("@p_semester_id,INT," + cntxt_semester_id);
//        m_sp_param.push("@p_section_name,VARCHAR," + ctxt_section_name);

//        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
//                                             "m_key_populate_section",
//                                             m_sp_param,
//                                             "Proc_Get_stf_Linked_Section",
//                                             ctxt_section_name,
//                                             0);
//    }
//    catch (err) {
//        alert('PopulateSection() - Error In JScript');
//    }
//}

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


function PopulateStreamWiseSubject() {
    try {

       ShowHidePanel('2');

        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_sem_id,INT," + cntxt_semester_id);

        DynamicHtmlTemplate_PopulateGrid("m_populate_stream_wise_subject", m_sp_param, "Proc_Get_BatchCourseSemStream_Wise_Subject");
    }
    catch (err) {
        alert('ProcessData() - Error In JScript');
    }
}
//-------------------------------------------
//function SetSubjectRowEvent() {
//    try {

//        SetAllCheckBoxStatus("m_grid_stream_wise_subject", "APP");
//        AddCtrlEvent("m_grid_stream_wise_subject", "APP", "onclick", "SetCheckBoxValue(this); UpdateData(this);");

//    }
//    catch (err) {
//        alert("SetStudentRowEvent() - jScript Error");
//    }
//}

//function UpdateData(p_curr_ctrl_ref) {
//    try {
//        m_session_var_name = "S_POPULATE_STREAM_WISE_SUBJECT";

//        m_AllItemData = new Array;
//        m_ItemRowKeyDataItem = new Array;

//        m_grid_stream_wise_subject = window.document.getElementById('m_grid_stream_wise_subject');
//        if (m_grid_stream_wise_subject == null) {
//            ShowMsgWnd("Error In Updateing - create Error");
//            return;
//        }
//        var DataTableField = "SubjectId=";
//        nCurrIndex = GetCurrentRowIndex(p_curr_ctrl_ref);
//        app_ref = ComposeHtmlCtrlRef('m_grid_stream_wise_subject', 'APP', nCurrIndex);
//        SubjectId_ref = ComposeHtmlCtrlRef('m_grid_stream_wise_subject', 'SubjectId', nCurrIndex);
//        m_ItemRowKeyDataItem.push(SubjectId_ref.value);
//        m_ColData = new Array;
//        m_ColData.push(GetFieldValArr('APP', app_ref.value));
//        m_AllItemData.push(m_ColData);

//        WebServiceGroupAllotment.SaveCheckData(m_session_var_name, m_AllItemData, m_ItemRowKeyDataItem, DataTableField, OnComplete_UpdateData, OnError_UpdateData, OnTimeOut_UpdateData);

//    }
//    catch (err) {
//        alert("UpdateData()- Error In JScript");
//    }
//}
//function OnComplete_UpdateData(arg) {
//    cntxt_subject_id.value = GetIdFromGrid("m_grid_stream_wise_subject", "APP", "SubjectId");
//    DestroyWaitMsgWnd();
//    if (arg == 1) {

//        ShowMsgWnd("Error In Navigation");
//    }
//}
//function OnError_UpdateData(arg) {
//    alert("error has occured: " + arg._message);
//}
//function OnTimeOut_UpdateData(arg) {
//    alert("Time Out");
//}
//----------------------------------------------
function PopulateSectionWiseStudent() {
    try {
    if (ValidateSave() == false) {
        return;
    }
        ShowHidePanel('3');
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_semester_id,INT," + cntxt_semester_id);
        m_sp_param.push("@p_section_id,INT," + cntxt_section_id);
        m_sp_param.push("@p_group_id,INT," + cntxt_group_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);


        DynamicHtmlTemplate_PopulateGrid("m_populate_section_wise_student", m_sp_param, "Proc_Get_BatchCourseSemStreamSection_Wise_Student");
    }
    catch (err) {
        alert('ProcessData() - Error In JScript');
    }
}

function SetStudentRowEvent() {
    try {

        SetAllCheckBoxStatus("m_grid_section_wise_student", "APP");
        AddCtrlEvent("m_grid_section_wise_student", "APP", "onclick", "SetCheckBoxValue(this);UpdateDataStudent(this);");
    }
    catch (err) {
        alert("SetStudentRowEvent() - jScript Error");
    }
}

function UpdateDataStudent(p_curr_ctrl_ref) {
    try {

        SetValue("cntxt_allow_save", "1");

        ShowWaitMsgWnd("Please Wait");
        m_session_var_name = "S_POPULATE_SECTION_WISE_STUDENT_GRID";

        m_AllItemData = new Array;
        m_ItemRowKeyDataItem = new Array;

        m_grid_section_wise_student = window.document.getElementById('m_grid_section_wise_student');
        if (m_grid_section_wise_student == null) {
            ShowMsgWnd("Error In Updateing - create Error");
            return;
        }
        var DataTableField = "StudentId=";
        nCurrIndex = GetCurrentRowIndex(p_curr_ctrl_ref);
        app_ref = ComposeHtmlCtrlRef('m_grid_section_wise_student', 'APP', nCurrIndex);
        SubjectId_ref = ComposeHtmlCtrlRef('m_grid_section_wise_student', 'StudentId', nCurrIndex);
        m_ItemRowKeyDataItem.push(SubjectId_ref.value);
        m_ColData = new Array;
        m_ColData.push(GetFieldValArr('APP', app_ref.value));
        m_AllItemData.push(m_ColData);

        WebServiceGroupAllotment.SaveCheckData(m_session_var_name, m_AllItemData, m_ItemRowKeyDataItem, DataTableField, OnComplete_UpdateData, OnError_UpdateData, OnTimeOut_UpdateData);

    }
    catch (err) {
        alert("UpdateDataStudent()- Error In JScript");
    }
}

function OnComplete_UpdateData(arg) {
    DestroyWaitMsgWnd();
    if (arg == 1) {
        ShowMsgWnd("Error In Navigation");
    }
}
function OnError_UpdateData(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_UpdateData(arg) {
    alert("Time Out");
}

//------------------------------------------------

function SelectAll() {
    try {
        SetValue("cntxt_allow_save", "1");
        m_filter = "NA";
        var m_ItemRowKeyDataItem;
        m_session_var_name = "S_POPULATE_SECTION_WISE_STUDENT_GRID";

        WebServiceMasters.SaveSelectAll(m_session_var_name);
        DynamicHtmlTemplate_PopulateGridFromDataTable("m_populate_section_wise_student", m_session_var_name, m_filter);
    }
    catch (err) {
        alert(err + "  SelectAll() - jScript Error");
    }
}

function DeSelectAll() {
    try {
        SetValue("cntxt_allow_save", "1");

        m_filter = "NA";
        var m_ItemRowKeyDataItem;
        m_session_var_name = "S_POPULATE_SECTION_WISE_STUDENT_GRID";


        WebServiceMasters.SaveDeSelectAll(m_session_var_name);
        DynamicHtmlTemplate_PopulateGridFromDataTable("m_populate_section_wise_student", m_session_var_name, m_filter);

    }
    catch (err) {
        alert("DeSelectAll() - jScript Error");
    }
}

function Match() {
    try {

        m_session_var_name = "S_POPULATE_SECTION_WISE_STUDENT_GRID";
        m_ItemRowKeyDataItem = new Array;
        m_filter = "NA";
        SetValue("cntxt_allow_save", "1");

        ctxt_copy_student = GetValueByCtrlName("ctxt_copy_student");
        var m_ItemRowKeyDataItem = ctxt_copy_student.split("\n");
        var DataTableField = "CollegeRoll=";
        WebServiceMasters.SaveMatchData(m_session_var_name, m_ItemRowKeyDataItem, DataTableField);
        DynamicHtmlTemplate_PopulateGridFromDataTable("m_populate_section_wise_student", m_session_var_name, m_filter);
    }

    catch (err) {
        alert(err + " Match() - JScript Error");
    }
}

function Reset() {
    try {
        SetValue("ctxt_copy_student", "");
        //ShowHidePanel('1');
    }

    catch (err) {
        alert(err + " Reset() - JScript Error");
    }
}
//-----------------------------------------------------
function ValidateSave() {
    try {

        if (GetValueByCtrlName('ctxt_batch') == "") {
            ShowMsgWnd('Select Batch');
            return false;
        }
        if (GetValueByCtrlName('ctxt_course_name') == "") {
            ShowMsgWnd('Select Course');
            return false;
        }
        if (GetValueByCtrlName('ctxt_stream_name') == "") {
            ShowMsgWnd('Click on Search Button and Select');
            return false;
        }
        if (GetValueByCtrlName('ctxt_semester_type') == "") {
            ShowMsgWnd('Click on Search Button and Select Semester Type');
            return false;
        }
        if (GetValueByCtrlName('ctxt_semester_name') == "") {
            ShowMsgWnd('Click on Search Button and Select Semester');
            return false;
        }
        if (GetValueByCtrlName('ctxt_section_name') == "") {
            ShowMsgWnd('Click on Search Button and Select Section');
            return false;
        }
        if (GetValueByCtrlName('ctxt_group_name') == "") {
            ShowMsgWnd('Select Group');
            return false;
        }

        if (GetValueByCtrlName('cntxt_subject_id') == "0") {
            ShowMsgWnd('Double Click On Subject');
            return false;
        }

//        cntxt_subject_id = GetIdFromGrid("m_grid_stream_wise_subject", "APP", "SubjectId");
//        if (GetStringLength(cntxt_subject_id) <= 0) {
//            ShowMsgWnd("Select Subject");
//            return false;
        //        }


        return true;
    }
    catch (err) {
        alert('ValidateSave - Error In JScript');
        return false;
    }
}
//-----------------------------
function SaveData() {
    try {

        if (ValidateSave() == false) {
            return;
        }

        cntxt_allow_save = GetValueByCtrlName("cntxt_allow_save");
        if (parseFloat(cntxt_allow_save) == 0) {
            ShowMsgWnd('Select Subject & Group properly');
            return false;
        }


        var m_HeaderArray = new Array();
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");

        m_HeaderArray.push(GetFieldValArr('cntxt_batch_id', cntxt_batch_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_course_id', cntxt_course_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_stream_id', cntxt_stream_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_semester_id', cntxt_semester_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_section_id', cntxt_section_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_group_id', cntxt_group_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_subject_id', cntxt_subject_id));

        ShowWaitMsgWnd("Please Wait");
        WebServiceGroupAllotment.SaveData(m_HeaderArray, OnComplete_SaveData, OnError_SaveData, OnTimeOut_SaveData);

    }
    catch (err) {
        alert("SaveData() - JScript Error");
    }
}
function OnComplete_SaveData(arg) {
    DestroyWaitMsgWnd();
    ShowMsgWnd(arg);
    ClearDataAfterSave();
}
function OnError_SaveData(arg) {
    alert("error : " + argmessage);
    ClearDataAfterSave();
}
function OnTimeOut_SaveData(arg) {
    alert("Time Out");
}

//-----------------------------------------------
function ClearDataAfterSave() {
    try {
//        if (P_Flag == '1') {
//            SetValue("ctxt_stream_name", "");
//            SetValue("ctxt_semester_type", "");
//            SetValue("ctxt_semester_name", "");
//            SetValue("ctxt_section_name", "");
//            SetValue("ctxt_group_name", "");

//            SetValue("cntxt_stream_id", "0");
//            SetValue("cntxt_semester_id", "0");
//            SetValue("cntxt_group_id", "0");
//            SetValue("cntxt_section_id", "0");
//            SetValue("cntxt_subject_id", "0");
//            SetValue("ctxt_copy_student", "");
//            DynamicHtmlTemplate_DeleteAllControl('m_populate_stream_wise_subject');
//            DynamicHtmlTemplate_DeleteAllControl('m_populate_section_wise_student');
//            ShowHidePanel('1');
//        }
            SetValue("ctxt_group_name", "");
            SetValue("cntxt_group_id", "0");
            SetValue("cntxt_allow_save", "0");


            DynamicHtmlTemplate_DeleteAllControl('m_populate_section_wise_student');
            ShowHideControl("m_DivPanelSearchStudent", 0);
            
            PopulateSubjectGroupWiseStudent();

    }
    catch (err) {
        alert("ClearDataAfterSave() - JScript Error");
    }
}

//-----------------------------------------------------
function Cancle() {
    try {
        SetValue("ctxt_copy_student", "");
        ClearDataAfterSave();
    }
    catch (err) {
        alert("Cancle() - JScript Error");
    }
}
//-------------------------------------------------------------------
function Open_LockButton() {
    try {

        var rowscount = window.document.getElementById('m_grid_section_wise_student').rows.length;
        if (rowscount <= 2) {
            ShowHidePanel('4');
            alert("Student data not available");
            document.getElementById("cmd_save").disabled = true;
            document.getElementById("cmd_selectall").disabled = true;
            document.getElementById("cmd_deselectall").disabled = true;

        }
        else {
            document.getElementById("cmd_save").disabled = false;
            document.getElementById("cmd_selectall").disabled = false;
            document.getElementById("cmd_deselectall").disabled = false;
        }
    }
    catch (err) {
        alert("Cancle() - JScript Error");
    }
}
//---------------------------------------------------------

//-------------------------------Subject Grid Colore Event----------------------------
function SetSubjectRowEvent() {
    try {

        AddCtrlEvent("m_grid_stream_wise_subject", "SubjectCode", "ondblclick", "SetSubjectRowEventRowColor(this);");
        AddCtrlEvent("m_grid_stream_wise_subject", "SubjectName", "ondblclick", "SetSubjectRowEventRowColor(this);");
    }
    catch (err) {
        alert("SetFromFacultyRowEvent() - jScript Error");
    }
}

function SetSubjectRowEventRowColor(p_curr_ctrl_ref) {
    DynamicHtmlTemplate_DeleteAllControl('m_populate_section_wise_student');
    ShowHideControl("m_DivPanelSearchStudent", 0);
    SetValue("cntxt_allow_save", "0");

    PopulateSubjectGroupWiseStudent();

    nIndex = GetCurrentRowIndex(p_curr_ctrl_ref);
    SubjectCode = ComposeHtmlCtrlRef('m_grid_stream_wise_subject', 'SubjectCode', nIndex);
    SubjectCode.style.backgroundColor = "#F0A5F7";

    SubjectName = ComposeHtmlCtrlRef('m_grid_stream_wise_subject', 'SubjectName', nIndex);
    SubjectName.style.backgroundColor = "#F0A5F7";

    for (iRow = 0; iRow < m_grid_stream_wise_subject.rows.length; iRow++) {
        if (nIndex != iRow) {
            SubjectCode = ComposeHtmlCtrlRef('m_grid_stream_wise_subject', 'SubjectCode', iRow);
            SubjectCode.style.backgroundColor = "#FFFFFF";

            SubjectName = ComposeHtmlCtrlRef('m_grid_stream_wise_subject', 'SubjectName', iRow);
            SubjectName.style.backgroundColor = "#FFFFFF";
        }
    }

}


function PopulateSubjectGroupWiseStudent() {
    try {

        cntxt_academic_session_id = GetValueByCtrlName("cntxt_academic_session_id");
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");

        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");


        var m_sp_param = new Array();
        m_sp_param.push("@p_academic_session,INT," + cntxt_academic_session_id);
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_sec_id,INT," + cntxt_section_id);
        m_sp_param.push("@p_sem_id,INT," + cntxt_semester_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);

        DynamicHtmlTemplate_PopulateGrid("m_populate_subject_group_wise_std", m_sp_param, "Proc_Get_Subject_Group_Wise_Student");
    }
    catch (err) {
        alert('PopulateSubjectGroupWiseStudent() - Error In JScript');
    }
}


//----------------------------------------------
function CopySaveData() {
    try {
        if (GetValueByCtrlName('ctxt_batch') == "") {
            ShowMsgWnd('Select Batch');
            return false;
        }
        if (GetValueByCtrlName('ctxt_course_name') == "") {
            ShowMsgWnd('Select Course');
            return false;
        }
        if (GetValueByCtrlName('ctxt_stream_name') == "") {
            ShowMsgWnd('Click on Search Button and Select');
            return false;
        }
        if (GetValueByCtrlName('ctxt_semester_type') == "") {
            ShowMsgWnd('Click on Search Button and Select Semester Type');
            return false;
        }
        if (GetValueByCtrlName('ctxt_semester_name') == "") {
            ShowMsgWnd('Click on Search Button and Select Semester');
            return false;
        }
        if (GetValueByCtrlName('ctxt_section_name') == "") {
            ShowMsgWnd('Click on Search Button and Select Section');
            return false;
        }
        if (GetValueByCtrlName('ctxt_group_name') == "") {
            ShowMsgWnd('Select Group');
            return false;
        }

        SetValue("cntxt_allow_save", "1");


        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_semester_id,INT," + cntxt_semester_id);
        m_sp_param.push("@p_section_id,INT," + cntxt_section_id);
        m_sp_param.push("@p_group_id,INT," + cntxt_group_id);


        DynamicHtmlTemplate_PopulateGrid("m_populate_section_wise_student", m_sp_param, "Proc_Copy_BatchCourseSemStreamSection_Wise_Student");
    }
    catch (err) {
        alert('ProcessData() - Error In JScript');
    }
}