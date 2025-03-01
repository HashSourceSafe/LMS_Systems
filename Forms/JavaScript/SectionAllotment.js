
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

        ShowHideControl("m_UpdatePanelHeader", 0);
        ShowHideControl("m_UpdatePanelSearchSubject", 0);
        ShowHideControl("m_UpdatePanelInputCollegeRoll", 0);

        if (p_flag == 1) {
            document.getElementById("ctxt_stream_name").disabled = true;
            document.getElementById("ctxt_semester_type").disabled = true;
            document.getElementById("ctxt_semester_name").disabled = true;
            document.getElementById("ctxt_section_name").disabled = true;

            document.getElementById("cmd_coppy").disabled = true;
            document.getElementById("cmd_save").disabled = true;
            document.getElementById("cmd_select_all").disabled = true;
            document.getElementById("cmd_Un_select_all").disabled = true;
            ShowHideControl("m_UpdatePanelHeader", 1);
        }
        else if (p_flag == 2) {
            ShowHideControl("m_UpdatePanelSearchSubject", 1);
        }
        else if (p_flag == 3) {
            ShowHideControl("m_UpdatePanelHeader", 1);
            ShowHideControl("m_UpdatePanelSearchSubject", 1);
        }
        else if (p_flag == 4) {
            ShowHideControl("m_UpdatePanelHeader", 1);
            ShowHideControl("m_UpdatePanelSearchSubject", 1);
            ShowHideControl("m_UpdatePanelInputCollegeRoll", 1);
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

        //        //=======Populate Stream===========
        //        m_session_var_name = "S_POPULATE_STREAM";
        //        DynamicHtmlTemplate_AddKeyName("m_key_populate_stream", "m_grid_populate_stream", "div_PopulateStream", m_session_var_name);
        //        DynamicHtmlTemplate_GetControlName("STD_STREAM_MASTER_nID,STD_STREAM_MASTER_sNAME"); // value and text both are sem
        //        DynamicHtmlTemplate_SetControlName("cntxt_stream_id,ctxt_stream_name");
        //        DynamicHtmlTemplate_AllowSelection("TT");
        //        DynamicHtmlTemplate_AddRecNoPerPage(10);
        //        DynamicHtmlTemplate_CloseWndAfterSel("T");
        //        DynamicHtmlTemplate_SetEventFunction("NA");
        //        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_stream', 'PREV');");
        //        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_stream', 'NEXT');");
        //        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_stream');");
        //        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        //        var m_field_arr = new Array();
        //        m_field_arr.push("STD_STREAM_MASTER_nID,STD_STREAM_MASTER_nID,hidden_textbox,R,10px");
        //        m_field_arr.push("STD_STREAM_MASTER_sNAME,STREAM NAME,read_only_textbox,L,15px");

        //        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //        //===========================

        //        //=======Populate SemesterType===========
        //        m_session_var_name = "S_POPULATE_SEMESTER_TYPE";
        //        DynamicHtmlTemplate_AddKeyName("m_key_populate_semester_type", "m_grid_populate_semester_type", "div_semester_type", m_session_var_name);
        //        DynamicHtmlTemplate_GetControlName("sem_type_id,sem_type_name");
        //        DynamicHtmlTemplate_SetControlName("cntxt_semester_type_id,ctxt_semester_type");
        //        DynamicHtmlTemplate_AllowSelection("TT");
        //        DynamicHtmlTemplate_AddRecNoPerPage(10);
        //        DynamicHtmlTemplate_CloseWndAfterSel("T");
        //        DynamicHtmlTemplate_SetEventFunction("NA");
        //        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_semester_type', 'PREV');");
        //        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_semester_type', 'NEXT');");
        //        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_semester_type');");
        //        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        //        var m_field_arr = new Array();
        //        m_field_arr.push("sem_type_id,sem_type_id,hidden_textbox,R,10px");
        //        m_field_arr.push("sem_type_name,SEMESTER TYPE,read_only_textbox,L,15px");

        //        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //        //===========================

        //        //=======Populate Semester===========
        //        m_session_var_name = "S_POPULATE_SEMESTER";
        //        DynamicHtmlTemplate_AddKeyName("m_key_populate_semester", "m_grid_populate_semester", "div_semester_name", m_session_var_name);
        //        DynamicHtmlTemplate_GetControlName("m_STD_SEMESTER_ID,m_STD_SEMESTER_sSemesterName");
        //        DynamicHtmlTemplate_SetControlName("cntxt_semester_id,ctxt_semester_name");
        //        DynamicHtmlTemplate_AllowSelection("TT");
        //        DynamicHtmlTemplate_AddRecNoPerPage(10);
        //        DynamicHtmlTemplate_CloseWndAfterSel("T");
        //        DynamicHtmlTemplate_SetEventFunction("NA");
        //        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_semester', 'PREV');");
        //        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_semester', 'NEXT');");
        //        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_semester');");
        //        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        //        var m_field_arr = new Array();
        //        m_field_arr.push("m_STD_SEMESTER_ID,m_STD_SEMESTER_ID,hidden_textbox,R,10px");
        //        m_field_arr.push("m_STD_SEMESTER_sSemesterName,SEMESTER NAME,read_only_textbox,L,15px");
        //        m_field_arr.push("m_STD_SEMESTER_Type,m_STD_SEMESTER_Type,hidden_textbox,L,15px");

        //        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //        //===========================

        //        //=======Populate SectionMaster===========
        //        m_session_var_name = "S_POPULATE_SECTION_MASTER";
        //        DynamicHtmlTemplate_AddKeyName("m_key_populate_section", "m_grid_populate_section", "div_section", m_session_var_name);
        //        DynamicHtmlTemplate_GetControlName("m_sectionId,m_sectionName");
        //        DynamicHtmlTemplate_SetControlName("cntxt_section_id,ctxt_section_name");
        //        DynamicHtmlTemplate_AllowSelection("TT");
        //        DynamicHtmlTemplate_AddRecNoPerPage(10);
        //        DynamicHtmlTemplate_CloseWndAfterSel("T");
        //        DynamicHtmlTemplate_SetEventFunction("NA");
        //        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_section', 'PREV');");
        //        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_section', 'NEXT');");
        //        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_section');");
        //        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        //        var m_field_arr = new Array();
        //        m_field_arr.push("m_sectionId,m_sectionId,hidden_textbox,R,10px");
        //        m_field_arr.push("m_sectionName,SECTION,read_only_textbox,L,15px");
        //       
        //        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //        //===========================

        //=======Display Student===========
        m_session_var_name = "S_POPULATE_STUDENT_SECTION_ALLOTMENT";
        DynamicHtmlTemplate_AddKeyName("m_populate_student_section_allotment", "m_grid_student_section_allotment", "m_panel_student_det_search_window", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_studentId");
        DynamicHtmlTemplate_SetControlName("cntxt_student_id");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_populate_student_section_allotment', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_populate_student_section_allotment', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('NA');");
        DynamicHtmlTemplate_EventAfterPostPopulation("SetStudentRowEvent(); CheckingGridData();");

        var m_field_arr = new Array();
        m_field_arr.push("APP,SELECT,read_only_textbox,C,5px");
        m_field_arr.push("m_student_name,STUDENT NAME,read_only_textbox,L,50%");
        m_field_arr.push("m_StudentRoll,STUDENT ID,read_only_textbox,L,30%");
        m_field_arr.push("m_studentId,m_studentId,hidden_textbox,L,30%");
        m_field_arr.push("m_college_roll,COLLEGE ROLL,read_only_textbox,L,30%");
        m_field_arr.push("m_University_Roll,UNIVERSITY ROLL,read_only_textbox,L,30%");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //==============================================================

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
        m_field_arr.push("sem_type,SEMESTER TYPE,read_only_textbox,L,10%");

        m_field_arr.push("SemesterId,SemesterId,hidden_textbox,L,10%");
        m_field_arr.push("SemesterName,SEMESTER NAME,read_only_textbox,L,10%");

        m_field_arr.push("SectionId,SectionId,hidden_textbox,L,15%");
        m_field_arr.push("SectionName,SECTION NAME,read_only_textbox,L,10%");

        m_field_arr.push("sem_no,sem_no,hidden_textbox,L,15%");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        LoadMenu();

    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}

function SearchCourse(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;


        m_college_id = GetValueByCtrlName("cntxt_college_id");
        m_course_name = GetValueByCtrlName("ctxt_course_name") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_College_id,INT," + m_college_id);
        m_sp_param.push("@p_Course_name,VARCHAR," + m_course_name);


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

//function PopulateStream(event) {
//    try {
//        var unicode = event.keyCode ? event.keyCode : event.charCode;

//        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
//        ctxt_stream_name = GetValueByCtrlName("ctxt_stream_name")+"%";

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
//        
//        var m_sp_param = new Array();
//        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
//        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);
//        m_sp_param.push("@p_College_id,INT," + cntxt_college_id);
//        if (cntxt_semester_type_id== 0) {
//            m_sp_param.push("@p_semester_type,VARCHAR," + 'E');
//        }
//        else if (cntxt_semester_type_id == 1) {
//            m_sp_param.push("@p_semester_type,VARCHAR," + 'O');
//            
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

function BatchCourseWiseStreamAndSemSectionSearch() {
    try {
        if (ValidateSave('1') == false) {
            return;
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

function ProcessData() {
    try {
        if ((ValidateSave('1') == false)||(ValidateSave('2') == false)) {
            return;
        }

        ShowHidePanel('3');

        if (GetRadioButStat("radio_order_by_0") == true) {

            radio_order_by = 1;
        }
        else if (GetRadioButStat("radio_order_by_1") == true) {

            radio_order_by = 2;
        }

        else if (GetRadioButStat("radio_order_by_2") == true) {

            radio_order_by = 3;
        }

        else if (GetRadioButStat("radio_order_by_3") == true) {

            radio_order_by = 4;
        }

       // var unicode = event.keyCode ? event.keyCode : event.charCode;
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");


        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_Batch_Id,INT," + cntxt_batch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_Semester_Id,INT," + cntxt_semester_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_section_id,INT," + cntxt_section_id);
        m_sp_param.push("@p_order_by,INT," + radio_order_by);


        DynamicHtmlTemplate_PopulateGrid("m_populate_student_section_allotment", m_sp_param, "Proc_Get_stf_student_for_SectionAllotment");
    }
    catch (err) {
        alert('ProcessData() - Error In JScript');
    }
}

function SetStudentRowEvent() {
    try {

        SetAllCheckBoxStatus("m_grid_student_section_allotment", "APP");
        AddCtrlEvent("m_grid_student_section_allotment", "APP", "onclick", "SetCheckBoxValue(this); UpdateData(this);");

    }
    catch (err) {
        alert("SetStudentRowEvent() - jScript Error");
    }
}

function UpdateData(p_curr_ctrl_ref) {
    try {

        ShowWaitMsgWnd("Please Wait");
        m_session_var_name = "S_POPULATE_STUDENT_SECTION_ALLOTMENT";

        m_AllItemData = new Array;
        m_ItemRowKeyDataItem = new Array;

        m_grid_student_section_allotment = window.document.getElementById('m_grid_student_section_allotment');
        if (m_grid_student_section_allotment == null) {
            ShowMsgWnd("Error In Updateing - create Error");
            return;
        }
        nCurrIndex = GetCurrentRowIndex(p_curr_ctrl_ref);
        app_ref = ComposeHtmlCtrlRef('m_grid_student_section_allotment', 'APP', nCurrIndex);
        studentId_ref = ComposeHtmlCtrlRef('m_grid_student_section_allotment', 'm_studentId', nCurrIndex);
        m_ItemRowKeyDataItem.push(studentId_ref.value);
        m_ColData = new Array;
        m_ColData.push(GetFieldValArr('APP', app_ref.value));
        m_AllItemData.push(m_ColData);

        WebServiceSectionAllotment.SaveSectionData(m_session_var_name, m_AllItemData, m_ItemRowKeyDataItem, OnComplete_UpdateData, OnError_UpdateData, OnTimeOut_UpdateData);

    }
    catch (err) {
        alert("UpdateData()- Error In JScript");
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


function SelectAll() {
    try {
        m_filter = "NA";
        var m_ItemRowKeyDataItem;
        m_session_var_name = "S_POPULATE_STUDENT_SECTION_ALLOTMENT";


        WebServiceMasters.SaveSelectAll(m_session_var_name);
        DynamicHtmlTemplate_PopulateGridFromDataTable("m_populate_student_section_allotment", m_session_var_name, m_filter);
    }
    catch (err) {
        alert(err + "  SelectAll() - jScript Error");
    }
}

function DeSelectAll() {
    try {

        m_filter = "NA";
        var m_ItemRowKeyDataItem;
        m_session_var_name = "S_POPULATE_STUDENT_SECTION_ALLOTMENT";


        WebServiceMasters.SaveDeSelectAll(m_session_var_name);
        DynamicHtmlTemplate_PopulateGridFromDataTable("m_populate_student_section_allotment", m_session_var_name, m_filter);

    }
    catch (err) {
        alert("DeSelectAll() - jScript Error");
    }
}

function ValidateSave(p_flag) {
    try {
        if (p_flag == 1) {

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
        }
        else if (p_flag == 2) {

            if (GetValueByCtrlName('ctxt_stream_name') == "") {
                ShowMsgWnd('Click on Search Button and Select');
                return false;
            }
            if (GetValueByCtrlName('ctxt_semester_type') == "") {
                ShowMsgWnd('Select Semester Type');
                return false;
            }
            if (GetValueByCtrlName('ctxt_semester_name') == "") {
                ShowMsgWnd('Select Semester');
                return false;
            }

            if (GetValueByCtrlName('ctxt_section_name') == "") {
                ShowMsgWnd('Select Section');
                return false;
            }
        }
        return true;
    }
    catch (err) {
        alert('ValidateSave - Error In JScript');
        return false;
    }
}

function SaveData() {
    try {

        if ((ValidateSave('1') == false) || (ValidateSave('2') == false)) {
            return;
        }

        var m_HeaderArray = new Array();
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_is_batch_change = GetValueByCtrlName("cntxt_is_batch_change");

        m_HeaderArray.push(GetFieldValArr('cntxt_semester_id', cntxt_semester_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_batch_id', cntxt_batch_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_course_id', cntxt_course_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_stream_id', cntxt_stream_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_section_id', cntxt_section_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_is_batch_change', cntxt_is_batch_change));

        ShowWaitMsgWnd("Please Wait");
        WebServiceSectionAllotment.SaveData(m_HeaderArray, OnComplete_SaveData, OnError_SaveData, OnTimeOut_SaveData);

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

function Copy() {
    try {
        ShowHidePanel('4');
    }

    catch (err) {
        alert(err + " Copy() - JScript Error");
    }
}

function Match() {
    try {

        m_session_var_name = "S_POPULATE_STUDENT_SECTION_ALLOTMENT";
        m_ItemRowKeyDataItem = new Array;
        m_filter = "NA";

        // m_grid_student_section_allotment = window.document.getElementById('m_grid_student_section_allotment');

        ctxt_copy_col_roll = GetValueByCtrlName("ctxt_copy_col_roll");
        var m_ItemRowKeyDataItem = ctxt_copy_col_roll.split("\n");
        var DataTableField = "m_college_roll=";
        WebServiceMasters.SaveMatchData(m_session_var_name, m_ItemRowKeyDataItem, DataTableField);
        DynamicHtmlTemplate_PopulateGridFromDataTable("m_populate_student_section_allotment", m_session_var_name, m_filter);
    }

    catch (err) {
        alert(err + " Match() - JScript Error");
    }
}

function Reset() {
    try {
        SetValue("ctxt_copy_col_roll", "");
        ShowHidePanel('3');
    }

    catch (err) {
        alert(err + " Reset() - JScript Error");
    }
}

function ClearDataAfterSave() {
    try {
        ShowHidePanel('1');
        SetValue("ctxt_stream_name", "");
        SetValue("ctxt_semester_name", "");
        SetValue("ctxt_section_name", "");
        SetValue("cntxt_stream_id", "0");
        SetValue("cntxt_section_id", "0");
        SetValue("cntxt_semester_id", "0");
        SetValue("cntxt_is_batch_change", "0");
        SetValue("ctxt_semester_type", "");
        SetValue("cntxt_semester_type_id", "0");
        DynamicHtmlTemplate_DeleteAllControl('m_populate_student_section_allotment');

    }
    catch (err) {
        alert("ClearDataAfterSave() - JScript Error");
    }
}

function Cancle() {
    try {
        SetValue("ctxt_batch", "");
        SetValue("ctxt_course_name", "");
        SetValue("cntxt_course_id", "0");
        SetValue("cntxt_batch_id", "0");
        ClearDataAfterSave();
    }
    catch (err) {
        alert(err + " Cancle() - JScript Error");
    }
}

function CheckingGridData() {
    try {
        var rowscount = window.document.getElementById('m_grid_student_section_allotment').rows.length;
        if (rowscount <= 2) {
            document.getElementById("cmd_coppy").disabled = true;
            document.getElementById("cmd_save").disabled = true;
            document.getElementById("cmd_select_all").disabled = true;
            document.getElementById("cmd_Un_select_all").disabled = true;

        }
        else {
            document.getElementById("cmd_coppy").disabled = false;
            document.getElementById("cmd_save").disabled = false;
            document.getElementById("cmd_select_all").disabled = false;
            document.getElementById("cmd_Un_select_all").disabled = false;
        }
    }

    catch (err) {
        alert(err + " CheckingGridData () - JScript Error");
    }
}

