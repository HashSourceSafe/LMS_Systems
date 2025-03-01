
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
        document.getElementById("cmd_confirm").disabled = true;
        document.getElementById("cmd_save").disabled = true;
        document.getElementById("cmd_cancel").disabled = false;
        document.getElementById("cmd_reject").disabled = true;

        document.getElementById("ctxt_from_faculty_dept").disabled = false;
        document.getElementById("ctxt_to_faculty_dept").disabled = false;
        document.getElementById("ctxt_from_faculty").disabled = false;
        document.getElementById("ctxt_to_faculty").disabled = false;
        document.getElementById("dtp_from_date").disabled = false;
        document.getElementById("dtp_to_date").disabled = false;
        document.getElementById("ctxt_from_period").disabled = false;
        document.getElementById("ctxt_to_period").disabled = false;
        if (p_flag == 1) { //------------------------------------------------------------------------------------------------Default 

            ShowHideControl("div_textbox_from_faculty_dept", 0);
            ShowHideControl("div_textbox_from_faculty", 0);
            ShowHideControl("div_textbox_from_date", 0);
            ShowHideControl("ctxt_from_period", 0);
            ShowHideControl("ctxt_from_class_status", 0);
            ShowHideControl("div_textbox_remarks", 0);
            ShowHideControl("div_textbox_to_faculty_dept", 0);
            ShowHideControl("div_textbox_to_faculty", 0);
            ShowHideControl("div_textbox_to_date", 0);
            ShowHideControl("div_textbox_to_period", 0);
            ShowHideControl("div_textbox_to_class_status", 0);
            ShowHideControl("div_reject", 0);

            ShowHideControl("m_div_from_period_grid", 0);
            ShowHideControl("m_div_to_period_grid", 0);

            cntxt_change_status_type = GetValueByCtrlName("cntxt_change_status_type");
            ShowHideControl("m_div_to_faculty_Det_panel", 1);
            if (cntxt_change_status_type == '2') {   //---------------------------------------------------------------------Approval User
                ShowHideControl("m_div_to_faculty_Det_panel", 1);
                ShowHideControl("m_panel_from_faculty", 1);
                ShowHideControl("m_div_to_period_grid", 1);
                ShowHideControl("m_div_from_period_grid", 0);
                ShowHideControl("m_div_to_period_grid", 0);
                ShowHideControl("div_show", 0);
                ShowHideControl("cmd_confirm", 0);
                ShowHideControl("div_reject", 1);
                document.getElementById("ctxt_routine_action_name").disabled = true;
                document.getElementById("cmd_reject").disabled = true;
                document.getElementById("cmd_cancel").disabled = false;

            }
        }
        if (p_flag == 2) { // ------------------------------------------------------Remove_class
            ShowHidePanel("1");
            ShowHideControl("div_textbox_from_faculty", 1);
            ShowHideControl("div_textbox_from_faculty_dept", 1);
            ShowHideControl("div_textbox_from_date", 1);
            ShowHideControl("div_textbox_remarks", 1);
        }
        if (p_flag == 3) { //---------------------------------------------------------CLass_Shifting
            ShowHidePanel("1");
            ShowHideControl("div_textbox_from_faculty", 1);
            ShowHideControl("div_textbox_from_faculty_dept", 1);
            ShowHideControl("ctxt_to_period", 1);
            ShowHideControl("m_div_to_faculty", 1);
            ShowHideControl("div_textbox_to_date", 1);
            ShowHideControl("div_textbox_from_date", 1);
            ShowHideControl("div_textbox_remarks", 1);
        }
        if (p_flag == 4) { //----------------------------------------------------------Class_Extension
            ShowHidePanel("1");
            ShowHideControl("m_div_to_faculty_contain", 1);
            ShowHideControl("m_div_to_faculty_Det_panel", 1);
            ShowHideControl("div_textbox_from_faculty_dept", 1);
            ShowHideControl("div_textbox_from_faculty", 1);
            ShowHideControl("div_textbox_from_date", 1);
            ShowHideControl("m_div_to_faculty", 1);
            ShowHideControl("div_textbox_remarks", 1);
        }
        if (p_flag == 5) { //---------------------------------------------------------Class_Inter_Change
            ShowHidePanel("1");
            ShowHideControl("div_textbox_to_faculty", 1);
            ShowHideControl("div_textbox_from_faculty", 1);
            ShowHideControl("div_textbox_from_faculty_dept", 1);
            ShowHideControl("ctxt_to_period", 1);
            ShowHideControl("m_div_to_faculty", 1);
            ShowHideControl("div_textbox_to_date", 1);
            ShowHideControl("div_textbox_from_date", 1);
            ShowHideControl("div_textbox_remarks", 1);
        }
        if (p_flag == 6) { //-------------------------------------------------------Faculty_Change
            ShowHidePanel("1");
            ShowHideControl("div_textbox_to_faculty", 1);
            ShowHideControl("div_textbox_from_faculty", 1);
            ShowHideControl("div_textbox_from_faculty_dept", 1);
            ShowHideControl("ctxt_to_period", 1);
            ShowHideControl("m_div_to_faculty", 1);
            ShowHideControl("div_textbox_from_date", 1);
            ShowHideControl("div_textbox_remarks", 1);
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
        //SetDateEventByTagName();
        ShowHidePanel('1');
        m_ShowApprovalList = setInterval(function () { ShowApprovalList(); }, 1000);


        //=======Populate Routine Activity ===========
        m_session_var_name = "S_POPULATE_ROUTINE_ACTIVITY";
        DynamicHtmlTemplate_AddKeyName("m_key_PopulateRoutineActivity", "m_grid_PopulateRoutineActivity", "div_PopulateRoutineActivity", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("routine_action_value,routine_action_name");
        DynamicHtmlTemplate_SetControlName("cntxt_action_value,ctxt_routine_action_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("RotineActivity_Wise_ShowHideControl();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_PopulateRoutineActivity', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_PopulateRoutineActivity', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_PopulateRoutineActivity');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("routine_action_value,routine_action_value,hidden_textbox,R,10px");
        m_field_arr.push("routine_action_name,Temp Routine Change Action,read_only_textbox,L,35px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //=======populate From Faculty Department ===========
        m_session_var_name = "S_POPULATE_FROM_DEPARTMENT";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_from_department", "m_grid_populate_from_department", "div_from_faculty_dept", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("dept_id,dept_name");
        DynamicHtmlTemplate_SetControlName("cntxt_from_faculty_dept_id,ctxt_from_faculty_dept");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_from_department', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_from_department', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_from_department');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("dept_id,DeptId,hidden_textbox,R,10px");
        m_field_arr.push("dept_name,Department,read_only_textbox,L,40px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======populate To Faculty Department ===========
        m_session_var_name = "S_POPULATE_TO_DEPARTMENT";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_to_department", "m_grid_populate_to_department", "div_to_faculty_dept", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("dept_id,dept_name");
        DynamicHtmlTemplate_SetControlName("cntxt_to_faculty_dept_id,ctxt_to_faculty_dept");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_to_department', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_to_department', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_to_department');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("dept_id,DeptId,hidden_textbox,R,10px");
        m_field_arr.push("dept_name,Department,read_only_textbox,L,40px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======POPULATE_FROM_FACULTY===========
        m_session_var_name = "S_POPULATE_FROM_FACULTY_NAME";
        DynamicHtmlTemplate_AddKeyName("m_populate_from_faculty_name", "m_grid_populate_from_faculty_name", "div_from_faculty_name", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_Emph_code,m_Emph_Name,m_Emph_Name_Code");
        DynamicHtmlTemplate_SetControlName("ctxt_from_emph_code,ctxt_from_emph_name,ctxt_from_faculty");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_populate_from_faculty_name', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_populate_from_faculty_name', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_populate_from_faculty_name');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("m_Emph_code,m_Emph_code,hidden_textbox,L,50%");
        m_field_arr.push("m_Emph_Name,m_Emph_Name,hidden_textbox,L,10%");
        m_field_arr.push("m_Emph_Name_Code,Employee Name,read_only_textbox,L,50%");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //=======POPULATE_TO_FACULTY===========
        m_session_var_name = "S_POPULATE_TO_FACULTY_NAME";
        DynamicHtmlTemplate_AddKeyName("m_populate_to_faculty_name", "m_grid_populate_to_faculty_name", "div_to_faculty_name", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_Emph_code,m_Emph_Name,m_Emph_Name_Code");
        DynamicHtmlTemplate_SetControlName("ctxt_to_emph_code,ctxt_to_emph_name,ctxt_to_faculty");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_populate_to_faculty_name', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_populate_to_faculty_name', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_populate_to_faculty_name');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("m_Emph_code,m_Emph_code,hidden_textbox,L,50%");
        m_field_arr.push("m_Emph_Name,m_Emph_Name,hidden_textbox,L,10%");
        m_field_arr.push("m_Emph_Name_Code,Employee Name,read_only_textbox,L,50%");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //=======POPULATE_FROM_PERIOD===========
        m_session_var_name = "S_POPULATE_FROM_PERIOD";
        DynamicHtmlTemplate_AddKeyName("m_populate_from_period", "m_grid_populate_from_period", "m_panel_from_faculty", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("period_id,period_sDisplay,batch_year,subject_id,course_id,stream_id,sem_id,section_id,group_id,day_id,faculty_sht_name,is_taken");
        DynamicHtmlTemplate_SetControlName("cntxt_from_period_id,ctxt_from_period,cntxt_batch_id,cntxt_from_subject_id,cntxt_from_course_id,cntxt_from_stream_id,cntxt_from_sem_id,cntxt_from_section_id,cntxt_from_group_id,cntxt_from_day_id,ctxt_from_faculty_shrt_name,cntxt_is_class_taken");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("NA");
        DynamicHtmlTemplate_SetEventFunction("setHideSaveBtn();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_populate_from_period', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_populate_from_period', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("SetFromFacultyRowEvent();");

        var m_field_arr = new Array();
        m_field_arr.push("period_id,period_id,hidden_textbox,L,10%");
        m_field_arr.push("is_taken,is_taken,hidden_textbox,L,10%");
        m_field_arr.push("subject_id,subject_id,hidden_textbox,L,10%");
        m_field_arr.push("course_id,course_id,hidden_textbox,L,10%");
        m_field_arr.push("stream_id,stream_id,hidden_textbox,L,10%");
        m_field_arr.push("sem_id,sem_id,hidden_textbox,L,10%");
        m_field_arr.push("section_id,section_id,hidden_textbox,L,10%");
        m_field_arr.push("group_id,group_id,hidden_textbox,L,10%");
        m_field_arr.push("day_id,day_id,hidden_textbox,L,10%");

        m_field_arr.push("period_sDisplay,PERIOD,read_only_textbox,L,18%");
        m_field_arr.push("batch_year,BATCH,read_only_textbox,L,5%");
        m_field_arr.push("subject_code,SUBJECT,read_only_textbox,L,10%");
        m_field_arr.push("stream_name,STREAM,read_only_textbox,L,15%");
        m_field_arr.push("sem_name,SEMESTER,read_only_textbox,L,15%");
        m_field_arr.push("section_name,SECTION,read_only_textbox,L,5%");
        m_field_arr.push("group_name,GROUP,read_only_textbox,L,10%");
        m_field_arr.push("class_status,STATUS,read_only_textbox,L,5%");

        m_field_arr.push("faculty_code,FACULTY CODE,hidden_textbox,L,10%");
        m_field_arr.push("faculty_sht_name,FACULTY SH. NAME,hidden_textbox,L,15%");
        m_field_arr.push("faculty_name,FACULTY NAME,hidden_textbox,L,30%");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //=======POPULATE_TO_PERIOD===========
        m_session_var_name = "S_POPULATE_TO_PERIOD";
        DynamicHtmlTemplate_AddKeyName("m_populate_to_period", "m_grid_populate_to_period", "m_panel_to_faculty", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("period_id,period_sDisplay,batch_year,subject_id,course_id,stream_id,sem_id,section_id,group_id,day_id,faculty_sht_name");
        DynamicHtmlTemplate_SetControlName("cntxt_to_period_id,ctxt_to_period,cntxt_to_batch_id,cntxt_to_subject_id,cntxt_to_course_id,cntxt_to_stream_id,cntxt_to_sem_id,cntxt_to_section_id,cntxt_to_group_id,cntxt_to_day_id,ctxt_to_faculty_shrt_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("NA");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_populate_to_period', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_populate_to_period', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("SetToFacultyRowEvent();");

        var m_field_arr = new Array();

        m_field_arr.push("period_sDisplay,PERIOD,read_only_textbox,L,24%");
        m_field_arr.push("class_status,Status,read_only_textbox,L,12");

        m_field_arr.push("period_id,period_id,hidden_textbox,L,10%");
        m_field_arr.push("subject_id,subject_id,hidden_textbox,L,10%");
        m_field_arr.push("course_id,course_id,hidden_textbox,L,10%");
        m_field_arr.push("stream_id,stream_id,hidden_textbox,L,10%");
        m_field_arr.push("sem_id,sem_id,hidden_textbox,L,10%");
        m_field_arr.push("section_id,section_id,hidden_textbox,L,10%");
        m_field_arr.push("group_id,group_id,hidden_textbox,L,10%");
        m_field_arr.push("day_id,day_id,hidden_textbox,L,10%");

        m_field_arr.push("batch_year,BATCH,read_only_textbox,L,5%");
        m_field_arr.push("subject_code,SUBJECT,read_only_textbox,L,10%");
        m_field_arr.push("stream_name,STREAM,read_only_textbox,L,10%");
        m_field_arr.push("sem_name,SEMESTER,hidden_textbox,L,10%");
        m_field_arr.push("section_name,SECTION,hidden_textbox,L,10%");
        m_field_arr.push("group_name,GROUP,hidden_textbox,L,10%");

        m_field_arr.push("faculty_code,FACULTY CODE,hidden_textbox,L,10%");
        m_field_arr.push("faculty_sht_name,FACULTY SH. NAME,hidden_textbox,L,15%");
        m_field_arr.push("faculty_name,FACULTY NAME,hidden_textbox,L,30%");
        m_field_arr.push("class_status,CLASS STATUS,hidden_textbox,L,10%");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //=======POPULATE_APPROVAL_LIST===========
        m_session_var_name = "S_POPULATE_APPROVAL_LIST";
        DynamicHtmlTemplate_AddKeyName("m_populate_approval_list", "m_grid_populate_approval_list", "m_panel_populate_approval_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("REQUEST_nDocId,REQUEST_nAction_id,REQUEST_sFromFacultyCode,REQUEST_sToFacultyCode,REQUEST_dFromDate,REQUEST_dToDate,REQUEST_nFromPeriodId,REQUEST_nToPeriodId,REQUEST_sRemarks,REQUEST_dEntryDate,REQUEST_sToFacultyName,REQUEST_sToFacultyShortName,REQUEST_sFromFacultyName");
        DynamicHtmlTemplate_SetControlName("cntxt_doc_id,cntxt_action_value,ctxt_from_emph_code,ctxt_to_emph_code,dtp_from_date,dtp_to_date,cntxt_from_period_id,cntxt_to_period_id,ctxt_remarks,ctxt_entry_date,ctxt_to_emph_name,ctxt_to_faculty_shrt_name,ctxt_from_emph_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("NA");
        DynamicHtmlTemplate_SetEventFunction("PopulateApprovalFacultyDetails_HiddenGrid();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_populate_approval_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_populate_approval_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_populate_approval_list');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("REQUEST_dEntryDate,ENTRY DATE,read_only_textbox,L,10%");
        m_field_arr.push("REQUEST_sRemarks,REMARKES,read_only_textbox,L,15%");

        m_field_arr.push("REQUEST_nDocId,DOC ID,hidden_textbox,L,10%");

        m_field_arr.push("REQUEST_nAction_id,ACTION ID,hidden_textbox,L,10%");
        m_field_arr.push("REQUEST_sAction_Name,ACTION NAME,read_only_textbox,L,10%");

        m_field_arr.push("REQUEST_sFromFacultyCode,FROM FACULTY CODE,hidden_textbox,L,10%");
        m_field_arr.push("REQUEST_sFromFacultyName,FROM FACULTY NAME,read_only_textbox,L,20%");

        m_field_arr.push("REQUEST_sToFacultyCode,TO FACULTY CODE,hidden_textbox,L,10%");
        m_field_arr.push("REQUEST_sToFacultyName,TO FACULTY NAME,read_only_textbox,L,20%");
        m_field_arr.push("REQUEST_sToFacultyShortName,TO FACULTY SH. NAME,hidden_textbox,L,12%");

        m_field_arr.push("REQUEST_dFromDate,FROM DATE,read_only_textbox,L,10%");
        m_field_arr.push("REQUEST_dToDate,TO DATE,read_only_textbox,L,10%");

        m_field_arr.push("REQUEST_nFromPeriodId,FROM PERIOD ID,hidden_textbox,L,10%");
        m_field_arr.push("REQUEST_sFromPeriodName,FROM PERIOD,read_only_textbox,L,12%");

        m_field_arr.push("REQUEST_nToPeriodId,TO PERIOD ID,hidden_textbox,L,10%");
        m_field_arr.push("REQUEST_sToPeriodName,TO PERIOD,read_only_textbox,L,12%");

        m_field_arr.push("REQUEST_nUserId,USER ID,hidden_textbox,L,30%");
        m_field_arr.push("REQUEST_sUserName,USER NAME,read_only_textbox,L,10%");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //=======POPULATE_PERIOD_Det_Hedden_grid_For_Approval===========
        m_session_var_name = "S_POPULATE_APPROVAL_PERIOD_DET_GRID";
        DynamicHtmlTemplate_AddKeyName("m_populate_approval_period_det_grid", "m_grid_populate_approval_period_det_grid", "m_panel_from_faculty", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("period_id,period_name,batch_year,subject_id,course_id,stream_id,sem_id,section_id,group_id,day_id,faculty_sht_name");
        DynamicHtmlTemplate_SetControlName("cntxt_from_period_id,ctxt_from_period,cntxt_batch_id,cntxt_from_subject_id,cntxt_from_course_id,cntxt_from_stream_id,cntxt_from_sem_id,cntxt_from_section_id,cntxt_from_group_id,cntxt_from_day_id,ctxt_from_faculty_shrt_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("NA");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_populate_approval_period_det_grid', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_populate_approval_period_det_grid', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("SetApprovalPeriodRowEvent();");

        var m_field_arr = new Array();
        //m_field_arr.push("APP,Select,read_only_textbox,C,5%");
        m_field_arr.push("period_id,period_id,hidden_textbox,L,10%");
        m_field_arr.push("subject_id,subject_id,hidden_textbox,L,10%");
        m_field_arr.push("course_id,course_id,hidden_textbox,L,10%");
        m_field_arr.push("stream_id,stream_id,hidden_textbox,L,10%");
        m_field_arr.push("sem_id,sem_id,hidden_textbox,L,10%");
        m_field_arr.push("section_id,section_id,hidden_textbox,L,10%");
        m_field_arr.push("group_id,group_id,hidden_textbox,L,10%");
        m_field_arr.push("day_id,day_id,hidden_textbox,L,10%");

        m_field_arr.push("batch_year,BATCH,read_only_textbox,L,5%");
        m_field_arr.push("period_name,PERIOD,read_only_textbox,L,22%");
        m_field_arr.push("subject_code,SUBJECT,read_only_textbox,L,10%");
        m_field_arr.push("stream_name,STREAM,read_only_textbox,L,10%");
        m_field_arr.push("sem_name,SEMESTER,read_only_textbox,L,10%");
        m_field_arr.push("section_name,SECTION,read_only_textbox,L,10%");
        m_field_arr.push("group_name,GROUP,read_only_textbox,L,10%");
        m_field_arr.push("class_status,Status,read_only_textbox,L,10%");

        m_field_arr.push("faculty_code,FACULTY CODE,read_only_textbox,L,10%");
        m_field_arr.push("faculty_sht_name,FACULTY SH. NAME,read_only_textbox,L,15%");
        m_field_arr.push("faculty_name,FACULTY NAME,read_only_textbox,L,30%");
        m_field_arr.push("class_status,CLASS STATUS,read_only_textbox,L,10%");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //=======POPULATE_TO_PERIOD_Det_For_Approval===========
        m_session_var_name = "S_POPULATE_APPROVAL_TO_PERIOD_DET_GRID";
        DynamicHtmlTemplate_AddKeyName("m_populate_approval_to_period_det_grid", "m_grid_populate_populate_approval_to_period_det_grid", "m_panel_to_faculty", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("period_id,period_name,batch_year,subject_id,course_id,stream_id,sem_id,section_id,group_id,day_id,faculty_sht_name");
        DynamicHtmlTemplate_SetControlName("cntxt_from_period_id,ctxt_from_period,cntxt_batch_id,cntxt_from_subject_id,cntxt_from_course_id,cntxt_from_stream_id,cntxt_from_sem_id,cntxt_from_section_id,cntxt_from_group_id,cntxt_from_day_id,ctxt_from_faculty_shrt_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("NA");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_populate_approval_to_period_det_grid', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_populate_approval_to_period_det_grid', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("SetApproval_To_PeriodRowEvent();");

        var m_field_arr = new Array();
        //m_field_arr.push("APP,Select,read_only_textbox,C,5%");
        m_field_arr.push("period_id,period_id,hidden_textbox,L,10%");
        m_field_arr.push("subject_id,subject_id,hidden_textbox,L,10%");
        m_field_arr.push("course_id,course_id,hidden_textbox,L,10%");
        m_field_arr.push("stream_id,stream_id,hidden_textbox,L,10%");
        m_field_arr.push("sem_id,sem_id,hidden_textbox,L,10%");
        m_field_arr.push("section_id,section_id,hidden_textbox,L,10%");
        m_field_arr.push("group_id,group_id,hidden_textbox,L,10%");
        m_field_arr.push("day_id,day_id,hidden_textbox,L,10%");

        m_field_arr.push("batch_year,BATCH,read_only_textbox,L,5%");
        m_field_arr.push("period_name,PERIOD,read_only_textbox,L,22%");
        m_field_arr.push("subject_code,SUBJECT,read_only_textbox,L,10%");
        m_field_arr.push("stream_name,STREAM,read_only_textbox,L,10%");
        m_field_arr.push("sem_name,SEMESTER,read_only_textbox,L,10%");
        m_field_arr.push("section_name,SECTION,read_only_textbox,L,10%");
        m_field_arr.push("group_name,GROUP,read_only_textbox,L,10%");
        m_field_arr.push("class_status,Status,read_only_textbox,L,10%");

        m_field_arr.push("faculty_code,FACULTY CODE,read_only_textbox,L,10%");
        m_field_arr.push("faculty_sht_name,FACULTY SH. NAME,read_only_textbox,L,15%");
        m_field_arr.push("faculty_name,FACULTY NAME,read_only_textbox,L,30%");
        m_field_arr.push("class_status,CLASS STATUS,read_only_textbox,L,10%");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);


      //  LoadMenu();
    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}
//-----------------------------Rotine Activity_Wise_ShowHide Control --------------------------------------------------------------------------------------
function RotineActivity_Wise_ShowHideControl() {
    try {
        cntxt_action_value = GetValueByCtrlName("cntxt_action_value");
        if (cntxt_action_value == '1') {   //--------------------------------------------------------------------Remove_class
            SetNull();
            ShowHidePanel('2');
        }
        else if (cntxt_action_value == '2') {    //------------------------------------------------------------- CLass_Shifting
            SetNull();
            ShowHidePanel('3');
        }
        else if (cntxt_action_value == '3') {   //-------------------------------------------------------------- Class_Extension
            SetNull();
            ShowHidePanel('4');
        }
        else if (cntxt_action_value == '4') {   //-------------------------------------------------------------- Class_Inter_change
            SetNull();
            ShowHidePanel('5');
        }
        else if (cntxt_action_value == '5') {   //-------------------------------------------------------------- Faculty_Change
            SetNull();
            ShowHidePanel('6');
        }
    }
    catch (err) {
        alert("RotineActivity_Wise_ShowHideControl() - JScript Error");
    }
}
//----------------------------This function use for overcome wrong entry by user--------------------------------------------------
function setHideSaveBtn() {
    document.getElementById("cmd_save").disabled = true; cntxt_to_period_id
    SetValue("cntxt_to_period_id", 0);
}
//--------------------------------populate routine activity---------------------------
function PopulateRoutineActivity(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_routine_action_name = GetValueByCtrlName("ctxt_routine_action_name") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@P_routine_action_name,VARCHAR," + ctxt_routine_action_name);


        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_PopulateRoutineActivity",
                                             m_sp_param,
                                             "Proc_Populate_Routine_Acitivity",
                                             ctxt_from_faculty_dept,
                                             0);

    }
    catch (err) {
        alert('PopulateRoutineActivity() - Error In JScript');
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
                                             "m_key_populate_from_department",
                                             m_sp_param,
                                             "Proc_Get_Faculty_Department",
                                             ctxt_from_faculty_dept,
                                             0);

    }
    catch (err) {
        alert('PopulateFromFacultyDept() - Error In JScript');
    }
}

function PopulateToFacultyDept(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_to_faculty_dept = GetValueByCtrlName("ctxt_to_faculty_dept") + "%";


        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_dept_name,VARCHAR," + ctxt_to_faculty_dept);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_to_department",
                                             m_sp_param,
                                             "Proc_Get_Faculty_Department",
                                             ctxt_to_faculty_dept,
                                             0);
    }
    catch (err) {
        alert('PopulateToFacultyDept() - Error In JScript');
    }
}
//-----------------------------Populate Faculty------------------------------
function PopulateFromFaculty(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_from_faculty_dept_id = GetValueByCtrlName("cntxt_from_faculty_dept_id");
        ctxt_from_faculty = "%" + GetValueByCtrlName("ctxt_from_faculty") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_department_id,INT," + cntxt_from_faculty_dept_id);
        m_sp_param.push("@p_empolyee_name,VARCHAR," + ctxt_from_faculty);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_populate_from_faculty_name",
                                             m_sp_param,
                                             "Proc_Get_Faculty_Name",
                                             ctxt_from_faculty,
                                             0);

    }
    catch (err) {
        alert('PopulateFromFaculty() - Error In JScript');
    }
}

function PopulateToFaculty(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_to_faculty_dept_id = GetValueByCtrlName("cntxt_to_faculty_dept_id");
        ctxt_to_faculty = "%" + GetValueByCtrlName("ctxt_to_faculty") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_department_id,INT," + cntxt_to_faculty_dept_id);
        m_sp_param.push("@p_empolyee_name,VARCHAR," + ctxt_to_faculty);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_populate_to_faculty_name",
                                             m_sp_param,
                                             "Proc_Get_Faculty_Name",
                                             ctxt_to_faculty,
                                             0);
    }
    catch (err) {
        alert('PopulateToFaculty() - Error In JScript');
    }
}
//------------------------------Populate FROM and TO grid-------call By Show() ----------------------
function PopulateFromPeriod() {
    try {
        ShowHideControl("m_div_from_period_grid", 1);
        ctxt_from_emph_name = GetValueByCtrlName("ctxt_from_emph_name");
        SetValue("head_from_faculty", "Period Details Of- " + ctxt_from_emph_name);

        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        cntxt_from_period_id = GetValueByCtrlName("cntxt_from_period_id");
        ctxt_from_emph_code = GetValueByCtrlName("ctxt_from_emph_code");
        var m_sp_param = new Array();
        m_sp_param.push("@p_date,DATETIME," + dtp_from_date);
        m_sp_param.push("@p_faculty_code,VARCHAR," + ctxt_from_emph_code);
        m_sp_param.push("@p_period_id,INT," + cntxt_from_period_id);

        DynamicHtmlTemplate_PopulateGrid("m_populate_from_period", m_sp_param, "proc_get_faculty_date_day_routine_new");

    }
    catch (err) {
        alert('PopulateFromPeriod() - Error In JScript');
    }
}

function PopulateToPeriod() {
    try {
        ShowHideControl("m_div_to_period_grid", 1);
        var m_allow_empty = 2;
        cntxt_action_value = GetValueByCtrlName("cntxt_action_value");
        if (cntxt_action_value == '4') {
            clearInterval(m_ToPeriod_det);
            m_allow_empty = 0;
        }
        ctxt_to_emph_name = GetValueByCtrlName("ctxt_to_emph_name");
        SetValue("head_to_faculty", "Period Details Of- " + ctxt_to_emph_name);

        dtp_to_date = GetValueByCtrlName("dtp_to_date");
        ctxt_to_emph_code = GetValueByCtrlName("ctxt_to_emph_code");
        cntxt_to_period_id = GetValueByCtrlName("cntxt_to_period_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_from_course_id = GetValueByCtrlName("cntxt_from_course_id");
        cntxt_from_stream_id = GetValueByCtrlName("cntxt_from_stream_id");
        cntxt_from_section_id = GetValueByCtrlName("cntxt_from_section_id");
        cntxt_from_sem_id = GetValueByCtrlName("cntxt_from_sem_id");
        cntxt_from_group_id = GetValueByCtrlName("cntxt_from_group_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_date,DATETIME," + dtp_to_date);
        m_sp_param.push("@p_faculty_code,VARCHAR," + ctxt_to_emph_code);
        m_sp_param.push("@p_period_id,INT," + cntxt_to_period_id);
        m_sp_param.push("@p_allow_empty,INT," + m_allow_empty);
        m_sp_param.push("@P_BATCH_ID, INT," + cntxt_batch_id);
        m_sp_param.push("@P_COURSE_ID,INT," + cntxt_from_course_id);
        m_sp_param.push("@P_STREAM_ID,INT," + cntxt_from_stream_id);
        m_sp_param.push("@P_SECTION_ID,INT," + cntxt_from_section_id);
        m_sp_param.push("@P_SEMESTER_ID,INT," + cntxt_from_sem_id);
        m_sp_param.push("@P_GROUP_ID,INT," + cntxt_from_group_id);


        DynamicHtmlTemplate_PopulateGrid("m_populate_to_period", m_sp_param, "proc_get_faculty_date_day_routine_new");
    }
    catch (err) {
        alert('PopulateToPeriod() - Error In JScript');
    }
}
//-------------------------------From Grid Colore Event----------------------------
function SetFromFacultyRowEvent() {
    try {

        AddCtrlEvent("m_grid_populate_from_period", "period_sDisplay", "ondblclick", "SetFromFacultyRowColor(this);");
        AddCtrlEvent("m_grid_populate_from_period", "batch_year", "ondblclick", "SetFromFacultyRowColor(this);");
        AddCtrlEvent("m_grid_populate_from_period", "subject_code", "ondblclick", "SetFromFacultyRowColor(this);");
        AddCtrlEvent("m_grid_populate_from_period", "stream_name", "ondblclick", "SetFromFacultyRowColor(this);");
        AddCtrlEvent("m_grid_populate_from_period", "sem_name", "ondblclick", "SetFromFacultyRowColor(this);");
        AddCtrlEvent("m_grid_populate_from_period", "section_name", "ondblclick", "SetFromFacultyRowColor(this);");
        AddCtrlEvent("m_grid_populate_from_period", "group_name", "ondblclick", "SetFromFacultyRowColor(this);");
    }
    catch (err) {
        alert("SetFromFacultyRowEvent() - jScript Error");
    }
}
function SetFromFacultyRowColor(p_curr_ctrl_ref) {
    FromPeriodAction();
    nIndex = GetCurrentRowIndex(p_curr_ctrl_ref);
    period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'period_sDisplay', nIndex);
    period_sDisplay.style.backgroundColor = "#F0A5F7";

    period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'batch_year', nIndex);
    period_sDisplay.style.backgroundColor = "#F0A5F7";

    period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'subject_code', nIndex);
    period_sDisplay.style.backgroundColor = "#F0A5F7";

    period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'stream_name', nIndex);
    period_sDisplay.style.backgroundColor = "#F0A5F7";

    period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'sem_name', nIndex);
    period_sDisplay.style.backgroundColor = "#F0A5F7";

    period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'section_name', nIndex);
    period_sDisplay.style.backgroundColor = "#F0A5F7";

    period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'group_name', nIndex);
    period_sDisplay.style.backgroundColor = "#F0A5F7";

    period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'subject_code', nIndex);
    period_sDisplay.style.backgroundColor = "#F0A5F7";

    for (iRow = 0; iRow < m_grid_populate_from_period.rows.length; iRow++) {
        if (nIndex != iRow) {
            period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'period_sDisplay', iRow);
            period_sDisplay.style.backgroundColor = "#FFFFFF";

            period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'batch_year', iRow);
            period_sDisplay.style.backgroundColor = "#FFFFFF";

            period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'subject_code', iRow);
            period_sDisplay.style.backgroundColor = "#FFFFFF";

            period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'stream_name', iRow);
            period_sDisplay.style.backgroundColor = "#FFFFFF";

            period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'sem_name', iRow);
            period_sDisplay.style.backgroundColor = "#FFFFFF";

            period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'section_name', iRow);
            period_sDisplay.style.backgroundColor = "#FFFFFF";

            period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_from_period', 'group_name', iRow);
            period_sDisplay.style.backgroundColor = "#FFFFFF";
        }
    }

}
//---------------------After From Grid Click-------PopulateToPeriod(); call ----------------------------------------------------------------------------------------------------
function FromPeriodAction() {
    cntxt_action_value = GetValueByCtrlName("cntxt_action_value");
    if (cntxt_action_value == '2') {
        PopulateToPeriod();
    }
    if (cntxt_action_value == '3') {
        PopulateToPeriod();
    }
}
//---------------------------------To Grid Colore Event-----------------------------------------------
function SetToFacultyRowEvent() {
    try {

        AddCtrlEvent("m_grid_populate_to_period", "period_sDisplay", "ondblclick", "SetRowColor(this);");
        AddCtrlEvent("m_grid_populate_to_period", "class_status", "ondblclick", "SetRowColor(this);");
    }
    catch (err) {
        alert("SetToFacultyRowEvent() - jScript Error");
    }
}
function SetRowColor(p_curr_ctrl_ref) {
    nIndex = GetCurrentRowIndex(p_curr_ctrl_ref);

    period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_to_period', 'period_sDisplay', nIndex);
    period_sDisplay.style.backgroundColor = "#F0A5F7";

    class_status = ComposeHtmlCtrlRef('m_grid_populate_to_period', 'class_status', nIndex);
    class_status.style.backgroundColor = "#F0A5F7";
    Validation('2');
    for (iRow = 0; iRow < m_grid_populate_to_period.rows.length; iRow++) {
        if (nIndex != iRow) {
            period_sDisplay = ComposeHtmlCtrlRef('m_grid_populate_to_period', 'period_sDisplay', iRow);
            period_sDisplay.style.backgroundColor = "#FFFFFF";
            class_status = ComposeHtmlCtrlRef('m_grid_populate_to_period', 'class_status', iRow);
            class_status.style.backgroundColor = "#FFFFFF";
        }
    }
}
//--------------------------------Save Preparation----call by Conferm()------------------------
function SaveDataPreparation() {
    try {
        var m_HeaderArray = new Array();
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_user_id = GetValueByCtrlName("cntxt_user_id");
        cntxt_g_dept_id = GetValueByCtrlName("cntxt_g_dept_id");
        cntxt_action_value = GetValueByCtrlName("cntxt_action_value");
        ctxt_from_emph_code = GetValueByCtrlName("ctxt_from_emph_code");
        ctxt_to_emph_code = GetValueByCtrlName("ctxt_to_emph_code");
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");
        cntxt_from_period_id = GetValueByCtrlName("cntxt_from_period_id");
        cntxt_to_period_id = GetValueByCtrlName("cntxt_to_period_id");
        ctxt_remarks = GetValueByCtrlName("ctxt_remarks");
        //Entry_date is field by Sql Server 


        m_HeaderArray.push(GetFieldValArr('cntxt_college_id', cntxt_college_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_user_id', cntxt_user_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_g_dept_id', cntxt_g_dept_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_action_value', cntxt_action_value));
        m_HeaderArray.push(GetFieldValArr('ctxt_from_emph_code', ctxt_from_emph_code));
        m_HeaderArray.push(GetFieldValArr('ctxt_to_emph_code', ctxt_to_emph_code));
        m_HeaderArray.push(GetFieldValArr('dtp_from_date', dtp_from_date));
        m_HeaderArray.push(GetFieldValArr('dtp_to_date', dtp_to_date));
        m_HeaderArray.push(GetFieldValArr('cntxt_from_period_id', cntxt_from_period_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_to_period_id', cntxt_to_period_id));
        m_HeaderArray.push(GetFieldValArr('ctxt_remarks', ctxt_remarks));
        m_HeaderArray.push(GetFieldValArr('cntxt_change_status_type', 1));

        //SetButtonBorder("cmd_save", "3px", "green");
        WebServiceTemporaryDateWiseRoutineCahnge.SaveDataPreparation(m_HeaderArray,
                                OnComplete_SaveDataPreparation, OnError_SaveDataPreparation, OnTimeOut_SaveDataPreparation);
    }
    catch (err) {
        alert('SaveDataPreparation() - Error In JScript');
    }
}
function OnComplete_SaveDataPreparation(arg) {
    ShowMsgWnd(arg);
    SetNull();
    ShowHidePanel('1');
    SetValue("ctxt_routine_action_name", "");

}
function OnError_SaveDataPreparation(arg) {
    alert("error : " + argmessage);
}
function OnTimeOut_SaveDataPreparation(arg) {
    alert("Time Out");
}
//-------------------------------Checking Privious Entry------Call by Save click--------------------------------------------------
function CheckingPreviousEntry(p_flag_Valid) {
    try {
        if (Validation(p_flag_Valid) == false) {
            return;
        }

        var m_HeaderArray = new Array();
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_from_emph_code = GetValueByCtrlName("ctxt_from_emph_code");
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        cntxt_from_period_id = GetValueByCtrlName("cntxt_from_period_id");

        m_HeaderArray.push(GetFieldValArr('cntxt_college_id', cntxt_college_id));
        m_HeaderArray.push(GetFieldValArr('ctxt_from_emph_code', ctxt_from_emph_code));
        m_HeaderArray.push(GetFieldValArr('dtp_from_date', dtp_from_date));
        m_HeaderArray.push(GetFieldValArr('cntxt_from_period_id', cntxt_from_period_id));
        //SetButtonBorder("cmd_save", "3px", "green");
        WebServiceTemporaryDateWiseRoutineCahnge.CheckingPreviousEntry(cntxt_college_id, ctxt_from_emph_code, dtp_from_date, cntxt_from_period_id,
                                OnComplete_CheckingPreviousEntry, OnError_CheckingPreviousEntry, OnTimeOut_CheckingPreviousEntry);

    }
    catch (err) {
        alert("CheckingPreviousEntry() - JScript Error");
    }
}
function OnComplete_CheckingPreviousEntry(arg) {
    if ((arg.m_error_no) == 0) {
        SetValue("cntxt_check_prv_entry_stat", arg.m_error_no);
        ShowMsgWnd(arg.m_error_msg);
        document.getElementById("cmd_save").disabled = false;
    }
    else {
        SetValue("cntxt_check_prv_entry_stat", 1);
        document.getElementById("cmd_save").disabled = true;
        ShowMsgWnd(arg.m_error_msg);
    }
}
function OnError_CheckingPreviousEntry(arg) {
    alert("error : " + argmessage);
}
function OnTimeOut_CheckingPreviousEntry(arg) {
    alert("Time Out");
}
//------------------------------------------------------------------------------------------------------------------------
function Validation(p_flag) {
    try {
        cntxt_action_value = GetValueByCtrlName("cntxt_action_value");
        ctxt_to_emph_code = GetValueByCtrlName('ctxt_to_emph_code');
        ctxt_from_emph_code = GetValueByCtrlName('ctxt_from_emph_code');

        if (p_flag == 1) {   //----------------------------------------------------------Common Validation and Class Remove part-1
            if ((GetValueByCtrlName('cntxt_action_value') == "0") || (GetValueByCtrlName('cntxt_action_value') == " ")) {
                ShowMsgWnd('Select Routine Change Activity');
                return false;
            }
            if (GetValueByCtrlName('cntxt_college_id') == "0") {
                ShowMsgWnd('College id not valid');
                return false;
            }
            if (GetValueByCtrlName('ctxt_from_faculty') == "") {
                ShowMsgWnd('Select Facaulty');
                return false;
            }
            if (GetValueByCtrlName('dtp_from_date') == "") {
                ShowMsgWnd('Enter From Date');
                return false;
            }
            //            if (GetValueByCtrlName('ctxt_remarks') == "") {
            //                ShowMsgWnd('Write Remarks');
            //                return false;
            //            }

        }
        else if (p_flag == 2) {//---------------------------------------------Class Shifting part-1
            Validation('1');
            if (GetValueByCtrlName('dtp_to_date') == "") {
                ShowMsgWnd('Enter To Date');
                return false;
            }
        }
        else if (p_flag == 4) {//---------------------------------------------Class Interchange part-1
            Validation('1');
            if (GetValueByCtrlName('dtp_to_date') == "") {
                ShowMsgWnd('Enter To Date');
                return false;
            }
            if (GetValueByCtrlName('ctxt_to_faculty') == "") {
                ShowMsgWnd('Select To Facaulty');
                return false;
            }
        }
        else if (p_flag == 5) {//---------------------------------------------Faculty Change Part-1
            Validation('1');
            if (GetValueByCtrlName('ctxt_to_faculty') == "") {
                ShowMsgWnd('Select To Facaulty');
                return false;
            }
        }
        else if (p_flag == 11) {//---------------------------------------------Class Remove part-2/ faculty Change part-2
            if (GetValueByCtrlName('ctxt_from_period') == "") {
                ShowMsgWnd('Double click on From Period');
                return false;
            }
            var rowscount = window.document.getElementById('m_grid_populate_from_period').rows.length;
            if (rowscount <= 2) {
                ShowMsgWnd('Error in population Data');
                return false;
            }
        }
        else if (p_flag == 22) {//---------------------------------------------Class Shifting part-2 / Class Extention part-2/ Class InterChange part-2

            var rowscount = window.document.getElementById('m_grid_populate_from_period').rows.length;
            if (rowscount <= 2) {
                ShowMsgWnd('Error in population Data');
                return false;
            }

            if (GetValueByCtrlName('ctxt_from_period') == "") {
                ShowMsgWnd('Double click on From Period');
                return false;
            }
            if (GetValueByCtrlName('ctxt_to_period') == "") {
                ShowMsgWnd('Double click on To Period');
                return false;
            }
            var rowscount = window.document.getElementById('m_grid_populate_to_period').rows.length;
            if (rowscount <= 2) {
                ShowMsgWnd('Error in population Data');
                return false;
            }
        }

        document.getElementById("cmd_confirm").disabled = false;
        document.getElementById("cmd_cancel").disabled = false;

        return true;
    }
    catch (err) {
        alert('ValidateSave - Error In JScript');
        return false;
    }
}
//-------------------------------------------------------------------------
function Show() {
    try {
        SetValue("cntxt_from_period_id", "0");
        SetValue("cntxt_to_period_id", "0");
        SetValue("cntxt_batch_id", "0");
        SetValue("cntxt_from_course_id", "0");
        SetValue("cntxt_from_stream_id", "0");
        SetValue("cntxt_from_section_id", "0");
        SetValue("cntxt_from_sem_id", "0");
        SetValue("cntxt_from_group_id", "0");

        if (Validation('1') == false) {
            return;
        }


        cntxt_action_value = GetValueByCtrlName("cntxt_action_value");
        if (cntxt_action_value == '1') {   //--------------------------------------------------------------------Remove_class
            if (Validation('1') == false) {
                return;
            }
            SetValue("ctxt_to_emph_code", '');
            SetValue("cntxt_to_period_id", '0');
            SetValue("dtp_to_date", '');
            PopulateFromPeriod();
        }
        else if (cntxt_action_value == '2') {    //------------------------------------------------------------- CLass_Shifting

            if (Validation('2') == false) {
                return;
            }
            ctxt_from_emph_code = GetValueByCtrlName("ctxt_from_emph_code");
            SetValue("ctxt_to_emph_code", ctxt_from_emph_code);
            PopulateFromPeriod();
        }
        else if (cntxt_action_value == '3') {   //-------------------------------------------------------------- Class_Extension
            if (Validation('1') == false) {
                return;
            }
            ctxt_from_emph_code = GetValueByCtrlName("ctxt_from_emph_code");
            dtp_from_date = GetValueByCtrlName("dtp_from_date");
            SetValue("ctxt_to_emph_code", ctxt_from_emph_code);
            SetValue("dtp_to_date", dtp_from_date);
            PopulateFromPeriod();
        }
        else if (cntxt_action_value == '4') {   //-------------------------------------------------------------- Class_InterChange
            if (Validation('4') == false) {
                return;
            }
            PopulateFromPeriod();
            m_ToPeriod_det = setInterval(function () { PopulateToPeriod(); }, 1000);

        }
        else if (cntxt_action_value == '5') { //---------------------------------------------------------------- Faculty_Change
            if (Validation('5') == false) {
                return;
            }
            SetValue("cntxt_to_period_id", '0');
            SetValue("dtp_to_date", '');
            PopulateFromPeriod();
        }
        document.getElementById("ctxt_from_faculty_dept").disabled = true;
        document.getElementById("ctxt_to_faculty_dept").disabled = true;
        document.getElementById("ctxt_from_faculty").disabled = true;
        document.getElementById("ctxt_to_faculty").disabled = true;
        document.getElementById("dtp_from_date").disabled = true;
        document.getElementById("dtp_to_date").disabled = true;
        document.getElementById("ctxt_from_period").disabled = true;
        document.getElementById("ctxt_to_period").disabled = true;
    }
    catch (err) {
        alert("Show() - JScript Error");
    }
}
//-----------------------------------------------------------
function Confirm() {
    try {
        cntxt_action_value = GetValueByCtrlName("cntxt_action_value");
        cntxt_is_class_taken = GetValueByCtrlName("cntxt_is_class_taken");
        if (cntxt_is_class_taken == "0") {
            if (cntxt_action_value == '1') { //--------------------------------class Remove
                if (Validation('11') == false) {
                    return;
                }
                CheckingPreviousEntry();
            }
            else if (cntxt_action_value == '2') { //--------------------------------class Shifting
                if (Validation('22') == false) {
                    return;
                }
                CheckingPreviousEntry('2');
            }
            else if (cntxt_action_value == '3') {//--------------------------------class Extention
                if (Validation('22') == false) {
                    return;
                }
                CheckingPreviousEntry('2');
            }
            else if (cntxt_action_value == '4') {//--------------------------------class Interchange
                if (Validation('22') == false) {
                    return;
                }
                CheckingPreviousEntry('4');
            }
            else if (cntxt_action_value == '5') {//--------------------------------faculty Change
                if (Validation('11') == false) {
                    return;
                }
                CheckingPreviousEntry('5');
            }
        }
        else {
            ShowMsgWnd("Class Already Taken");
            return;
        }
    }
    catch (err) {
        alert(" Confirm() - JScript Error");
    }
}
//--------------------------------Delete---call by Save()------------------------------------------------------------------------------------
function DeleteMainPeriod(p_flag) {
    try {
        if (p_flag == "1") {
            var m_HeaderArray = new Array();
            dtp_from_date = GetValueByCtrlName("dtp_from_date");
            cntxt_from_period_id = GetValueByCtrlName("cntxt_from_period_id");

            m_HeaderArray.push(GetFieldValArr('dtp_from_date', dtp_from_date));
            m_HeaderArray.push(GetFieldValArr('cntxt_from_period_id', cntxt_from_period_id));
            m_HeaderArray.push(GetFieldValArr('p_flag', 1));
        }
        else if (p_flag == '2') {
            var m_HeaderArray = new Array();
            dtp_to_date = GetValueByCtrlName("dtp_to_date");
            cntxt_to_period_id = GetValueByCtrlName("cntxt_to_period_id");

            m_HeaderArray.push(GetFieldValArr('dtp_from_date', dtp_to_date));
            m_HeaderArray.push(GetFieldValArr('cntxt_from_period_id', cntxt_to_period_id));
            m_HeaderArray.push(GetFieldValArr('p_flag', 2));
        }
        WebServiceTemporaryDateWiseRoutineCahnge.DeleteMainPeriod(m_HeaderArray, OnComplete_DeleteMainPeriod, OnError_DeleteMainPeriod, OnTimeOut_DeleteMainPeriod);
    }
    catch (err) {
        alert('DeleteMainPeriod() - Error In JScript');
    }
}
function OnComplete_DeleteMainPeriod(arg) {
    SetValue("cntxt_error_value", arg.m_error_no);

    cntxt_action_value = GetValueByCtrlName("cntxt_action_value");
    cntxt_save_ctr = GetValueByCtrlName("cntxt_save_ctr");

    if (cntxt_action_value == '1') {//--------------------------------------------------------------------REmove class
        ShowMsgWnd(arg.m_error_msg);
        interval_UpdateBtnActionValue();
    }
    else if (cntxt_action_value == '2') {//--------------------------------------------------------------------Class Shifting
        AddFacultyPeriod();
    }
    else if (cntxt_action_value == '4') {//--------------------------------------------------------------------Class Inter-Change
        if (cntxt_save_ctr == "1") {
            DeleteMainPeriod("2");
            SetValue("cntxt_save_ctr", "2");
        }
        else if (cntxt_save_ctr == "2") {
            AddFacultyPeriod();
        }
    }
    else if (cntxt_action_value == '5') { //--------------------------------------------------------------------faculty Change
        AddFacultyPeriod();
    }


}
function OnError_DeleteMainPeriod(arg) {
    alert("error : " + argmessage);
}
function OnTimeOut_DeleteMainPeriod(arg) {
    alert("Time Out");
}
//-------------------------------------------------------------------------------------------------------------------------------------------
function AddFacultyPeriod() {
    try {
        //clearInterval(m_AddFacultyPeriod);

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");
        cntxt_to_period_id = GetValueByCtrlName("cntxt_to_period_id");
        cntxt_to_day_id = GetDayOfWeek(dtp_to_date);
        cntxt_doc_id = GetValueByCtrlName("cntxt_doc_id");

        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        cntxt_from_day_id = GetDayOfWeek(dtp_from_date);
        cntxt_from_period_id = GetValueByCtrlName("cntxt_from_period_id");
        cntxt_action_value = GetValueByCtrlName("cntxt_action_value");

        //------------------for fACULTY cHANGE------------------------------------------
        ctxt_to_emph_code = GetValueByCtrlName("ctxt_to_emph_code");
        ctxt_to_faculty_shrt_name = GetValueByCtrlName("ctxt_to_faculty_shrt_name");
        ctxt_to_faculty = GetValueByCtrlName("ctxt_to_emph_name");



        var m_HeaderArray = new Array();
        m_HeaderArray.push(GetFieldValArr('cntxt_college_id', cntxt_college_id));
        m_HeaderArray.push(GetFieldValArr('ctxt_date', dtp_to_date));
        m_HeaderArray.push(GetFieldValArr('cntxt_period_id', cntxt_to_period_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_day_id', cntxt_to_day_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_doc_id', cntxt_doc_id));
        m_HeaderArray.push(GetFieldValArr('dtp_from_date', dtp_from_date));
        m_HeaderArray.push(GetFieldValArr('cntxt_from_period_id', cntxt_from_period_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_from_day_id', cntxt_from_day_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_action_value', cntxt_action_value));
        m_HeaderArray.push(GetFieldValArr('ctxt_to_emph_code', ctxt_to_emph_code));
        m_HeaderArray.push(GetFieldValArr('ctxt_to_faculty_shrt_name', ctxt_to_faculty_shrt_name));
        m_HeaderArray.push(GetFieldValArr('ctxt_to_faculty', ctxt_to_faculty));

        WebServiceTemporaryDateWiseRoutineCahnge.AddFacultyPeriod(m_HeaderArray,
                                OnComplete_AddMainPeriod, OnError_AddMainPeriod, OnTimeOut_AddMainPeriod);
    }
    catch (err) {
        alert('AddMainPeriod() - Error In JScript');
    }
}
function OnComplete_AddMainPeriod(arg) {
    SetValue("cntxt_error_value", arg.m_error_no);
    ShowMsgWnd(arg.m_error_msg);
    interval_UpdateBtnActionValue();
}
function OnError_AddMainPeriod(arg) {
    alert("error : " + argmessage);
}
function OnTimeOut_AddMainPeriod(arg) {
    alert("Time Out");
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
function SaveData() {
    try {
        SetValue("cntxt_save_ctr", "0");
        SetValue("cntxt_btn_action_value", "2"); //---------------------------------------its a flag use for pending,acept,reject
        cntxt_action_value = GetValueByCtrlName("cntxt_action_value");
        cntxt_change_status_type = GetValueByCtrlName("cntxt_change_status_type"); //----approval user or preparation user
        cntxt_check_prv_entry_stat = GetValueByCtrlName("cntxt_check_prv_entry_stat"); //cntxt_check_prv_entry_stat=='0' prv entry checking successful



        if (cntxt_check_prv_entry_stat == '0') {
            if (cntxt_action_value == '1') {//--------------------------------------------------------------------REmove class
                if (cntxt_change_status_type == '1') {  //preparation user
                    if (GetValueByCtrlName('ctxt_remarks') == "") {
                        ShowMsgWnd('Write Remarks');
                        return false;
                    }
                    SaveDataPreparation();
                }
                else if (cntxt_change_status_type == '2') {  // approval user 
                    DeleteMainPeriod('1');
                    //m_BtnActionValue = setInterval(function () { interval_UpdateBtnActionValue(); }, 1000);
                }
            }
            if (cntxt_action_value == '2') {//--------------------------------------------------------------------Class Shifting
                if (cntxt_change_status_type == '1') {  //preparation user
                    if (GetValueByCtrlName('ctxt_remarks') == "") {
                        ShowMsgWnd('Write Remarks');
                        return false;
                    }
                    SaveDataPreparation();
                }
                else if (cntxt_change_status_type == '2') {  // approval user 
                    DeleteMainPeriod("1");
                    //m_AddFacultyPeriod = setInterval(function () { AddFacultyPeriod(); }, 1000);
                    //m_BtnActionValue = setInterval(function () { interval_UpdateBtnActionValue(); }, 1000);
                }
            }
            if (cntxt_action_value == '3') {//-------------------------------------------------------------------Class Extention
                if (cntxt_change_status_type == '1') {  //preparation user
                    if (GetValueByCtrlName('ctxt_remarks') == "") {
                        ShowMsgWnd('Write Remarks');
                        return false;
                    }
                    SaveDataPreparation();
                }
                else if (cntxt_change_status_type == '2') {  // approval user 
                    cntxt_from_period_id = GetValueByCtrlName("cntxt_from_period_id");
                    var from_period_id = parseInt(cntxt_from_period_id);

                    cntxt_to_period_id = GetValueByCtrlName("cntxt_to_period_id");
                    var to_period_id = parseInt(cntxt_to_period_id);

                    if (from_period_id < to_period_id) {
                        /*for (var i = from_period_id + 1; i <= to_period_id; i++) {
                        SetValue("cntxt_to_period_id", i);
                        m_AddFacultyPeriod = setInterval(function () { AddFacultyPeriod(); }, 1000);
                        }*/

                        SetValue("cntxt_to_period_id", to_period_id);
                        AddFacultyPeriod();

                        //m_AddFacultyPeriod = setInterval(function () { AddFacultyPeriod(); }, 1000);
                        //m_BtnActionValue = setInterval(function () { interval_UpdateBtnActionValue(); }, 1000);
                    }
                    else
                        ShowMsgWnd('Check Period');
                }
            }
            if (cntxt_action_value == '4') {//--------------------------------------------------------------------Class Inter-Change
                if (cntxt_change_status_type == '1') {  //------------preparation user
                    if (GetValueByCtrlName('ctxt_remarks') == "") {
                        ShowMsgWnd('Write Remarks');
                        return false;
                    }
                    SaveDataPreparation();
                }
                else if (cntxt_change_status_type == '2') {  //-------approval user
                    SetValue("cntxt_save_ctr", "1");
                    DeleteMainPeriod("1");
                    //DeleteMainPeriod("2");
                    //m_AddFacultyPeriod = setInterval(function () { AddFacultyPeriod(); }, 1000);
                    //m_BtnActionValue = setInterval(function () { interval_UpdateBtnActionValue(); }, 1000);
                }
            }
            if (cntxt_action_value == '5') {//--------------------------------------------------------------------faculty Change
                if (cntxt_change_status_type == '1') {  //preparation user
                    if (GetValueByCtrlName('ctxt_remarks') == "") {
                        ShowMsgWnd('Write Remarks');
                        return false;
                    }
                    SaveDataPreparation();
                }
                else if (cntxt_change_status_type == '2') {  // approval user 
                    DeleteMainPeriod("1");
                    //m_AddFacultyPeriod = setInterval(function () { AddFacultyPeriod(); }, 1000);
                    //m_BtnActionValue = setInterval(function () { interval_UpdateBtnActionValue(); }, 1000);
                }
            }
        }
    }
    catch (err) {
        alert("SaveData() - JScript Error");
    }
}

//------------------------------------Time Table Status update-----like peding,acept/save,reject--- + After save ++ Approval List refress and call setnull()--------------------------------------------------------------------------
function UpdateBtnActionValue() {
    try {

        cntxt_btn_action_value = GetValueByCtrlName("cntxt_btn_action_value");
        cntxt_doc_id = GetValueByCtrlName("cntxt_doc_id");

        WebServiceTemporaryDateWiseRoutineCahnge.UpdateBtnActionValue(cntxt_btn_action_value, cntxt_doc_id, OnComplete_UpdateBtnActionValue,
        OnError_UpdateBtnActionValue, OnTimeOut_UpdateBtnActionValue);

    }
    catch (err) {
        alert("UpdateBtnActionValue() - JScript Error");
    }
    finally {

    }
}
function OnComplete_UpdateBtnActionValue(arg) {
    //ShowApprovalList();
    SetNull();
    m_ShowApprovalList = setInterval(function () { ShowApprovalList(); }, 1000);
}
function OnError_UpdateBtnActionValue(arg) {
    alert("error : " + argmessage);
}
function OnTimeOut_UpdateBtnActionValue(arg) {
    alert("Time Out");
}



function interval_UpdateBtnActionValue() {
    cntxt_error_value = GetValueByCtrlName("cntxt_error_value");
    //clearInterval(m_BtnActionValue);
    if (cntxt_error_value == '0') {
        UpdateBtnActionValue();
    }
}
//------------------------------------Pending Approval Grid--------------------------------------------------------------------------------------------------------------
function ShowApprovalList() {
    try {
        clearInterval(m_ShowApprovalList);

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        //cntxt_g_dept_id = GetValueByCtrlName("cntxt_g_dept_id");
        cntxt_change_status_type = GetValueByCtrlName("cntxt_change_status_type");
        if (cntxt_change_status_type == "2") {//------------------------------------approval user
            var m_sp_param = new Array();
            m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
            //m_sp_param.push("@p_dept_id,INT," + cntxt_g_dept_id);
            m_sp_param.push("@p_stat,INT," + 1);
            DynamicHtmlTemplate_PopulateGrid("m_populate_approval_list", m_sp_param, "proc_get_routine_change_req_new");
        }
    }
    catch (err) {
        alert("ShowApprovalList() - JScript Error");
    }
}
//-------------------------------------(Approval Page) Call APPROVAL_FROM_Period_Grid and APPROVAL_FROM_Period_Grid----------------------------------------------------------------------------------------------------------
function PopulateApprovalFacultyDetails_HiddenGrid() {
    try {
        cntxt_action_value = GetValueByCtrlName("cntxt_action_value");
        if (cntxt_action_value == '1') {
            SetValue("ctxt_routine_action_name", "Remove Class");
            ApprovalFormGrid();
        }
        else if (cntxt_action_value == '2') {
            SetValue("ctxt_routine_action_name", "Class Shifting");
            ApprovalFormGrid();
        }
        else if (cntxt_action_value == '3') {
            SetValue("ctxt_routine_action_name", "Class Extension");
            ApprovalFormGrid();
        }
        else if (cntxt_action_value == '4') {
            SetValue("ctxt_routine_action_name", "Class Inter Change");
            ApprovalFormGrid();
            m_ToPeriod_Approval = setInterval(function () { ApprovalToGrid(); }, 1000);
        }
        else if (cntxt_action_value == '5') {
            SetValue("ctxt_routine_action_name", "Faculty Change");
            ApprovalFormGrid();
        }
    }
    catch (err) {
        alert('PopulateApprovalFacultyDetails_HiddenGrid() - Error In JScript');
    }
}
//----------------------------------APPROVAL--FROM--Period--Grid------------------------------------------------
function ApprovalFormGrid() {
    ShowHideControl("m_div_from_period_grid", 1);
    ctxt_from_emph_name = GetValueByCtrlName("ctxt_from_emph_name");
    SetValue("head_from_faculty", "Period Details Of- " + ctxt_from_emph_name);

    dtp_from_date = GetValueByCtrlName("dtp_from_date");
    cntxt_from_period_id = GetValueByCtrlName("cntxt_from_period_id");
    ctxt_from_emph_code = GetValueByCtrlName("ctxt_from_emph_code");

    var m_sp_param = new Array();
    m_sp_param.push("@p_date,DATETIME," + dtp_from_date);
    m_sp_param.push("@p_period_id,INT," + cntxt_from_period_id);
    m_sp_param.push("@p_faculty_code,VARCHAR," + ctxt_from_emph_code);

    DynamicHtmlTemplate_PopulateGrid("m_populate_approval_period_det_grid", m_sp_param, "proc_get_faculty_date_day_routine");
    document.getElementById("cmd_save").disabled = false;
    document.getElementById("cmd_reject").disabled = false;
    //  cntxt_action_value = GetValueByCtrlName("cntxt_action_value"); //---------------------remove/class shifting/
    //    if (cntxt_action_value == '4') {
    //        ShowHideControl("m_div_to_period_grid", 1);
    //    }
    //    else {
    ShowHideControl("m_div_to_period_grid", 0);
    //}
}
function SetApprovalPeriodRowEvent() {
    try {

        SetAllCheckBoxStatus("m_grid_populate_approval_period_det_grid", "APP");
        AddCtrlEvent("m_grid_populate_approval_period_det_grid", "APP", "onclick", "SetCheckBoxValue(this); UpdateData(this);");

    }
    catch (err) {
        alert("SetStudentRowEvent() - jScript Error");
    }
}
function UpdateData(p_curr_ctrl_ref) {
    try {
        m_session_var_name = "S_POPULATE_APPROVAL_PERIOD_DET_GRID";

        m_AllItemData = new Array;
        m_ItemRowKeyDataItem = new Array;

        m_grid_populate_approval_period_det_grid = window.document.getElementById('m_grid_populate_approval_period_det_grid');
        if (m_grid_populate_approval_period_det_grid == null) {
            ShowMsgWnd("Error In Updateing - create Error");
            return;
        }
        var DataTableField = "stream_id=";
        nCurrIndex = GetCurrentRowIndex(p_curr_ctrl_ref);
        app_ref = ComposeHtmlCtrlRef('m_grid_populate_approval_period_det_grid', 'APP', nCurrIndex);
        SubjectId_ref = ComposeHtmlCtrlRef('m_grid_populate_approval_period_det_grid', 'stream_id', nCurrIndex);
        m_ItemRowKeyDataItem.push(SubjectId_ref.value);
        m_ColData = new Array;
        m_ColData.push(GetFieldValArr('APP', app_ref.value));
        m_AllItemData.push(m_ColData);

        WebServiceTemporaryDateWiseRoutineCahnge.SetApprovalPeriodRowEvent(m_session_var_name, m_AllItemData, m_ItemRowKeyDataItem, DataTableField,
        OnComplete_UpdateData, OnError_UpdateData, OnTimeOut_UpdateData);

    }
    catch (err) {
        alert("UpdateData()- Error In JScript");
    }
}
function OnComplete_UpdateData(arg) {
    cntxt_subject_id.value = GetIdFromGrid("m_grid_populate_approval_period_det_grid", "APP", "subject_id");
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

//----------------------------------APPROVAL--TO--Period--Grid-----------------------------------------------
function ApprovalToGrid() {
    clearInterval(m_ToPeriod_Approval);
    ctxt_to_emph_name = GetValueByCtrlName("ctxt_to_emph_name");
    SetValue("head_to_faculty", "Period Details Of- " + ctxt_to_emph_name);
    ShowHideControl("m_div_to_period_grid", 1);

    dtp_to_date = GetValueByCtrlName("dtp_to_date");
    cntxt_to_period_id = GetValueByCtrlName("cntxt_to_period_id");
    ctxt_to_emph_code = GetValueByCtrlName("ctxt_to_emph_code");

    var m_sp_param = new Array();
    m_sp_param.push("@p_date,DATETIME," + dtp_to_date);
    m_sp_param.push("@p_period_id,INT," + cntxt_to_period_id);
    m_sp_param.push("@p_faculty_code,VARCHAR," + ctxt_to_emph_code);

    DynamicHtmlTemplate_PopulateGrid("m_populate_approval_to_period_det_grid", m_sp_param, "proc_get_faculty_date_day_routine");
}

function SetApproval_To_PeriodRowEvent() {
    try {

        SetAllCheckBoxStatus("m_grid_populate_populate_approval_to_period_det_grid", "APP");
        AddCtrlEvent("m_grid_populate_populate_approval_to_period_det_grid", "APP", "onclick", "SetCheckBoxValue(this); UpdateData(this);");

    }
    catch (err) {
        alert("SetStudentRowEvent() - jScript Error");
    }
}

function ToPeriodUpdateData(p_curr_ctrl_ref) {
    try {
        m_session_var_name = "S_POPULATE_APPROVAL_TO_PERIOD_DET_GRID";

        m_AllItemData = new Array;
        m_ItemRowKeyDataItem = new Array;

        m_grid_populate_approval_period_det_grid = window.document.getElementById('m_grid_populate_populate_approval_to_period_det_grid');
        if (m_grid_populate_approval_period_det_grid == null) {
            ShowMsgWnd("Error In Updateing - create Error");
            return;
        }
        var DataTableField = "stream_id=";
        nCurrIndex = GetCurrentRowIndex(p_curr_ctrl_ref);
        app_ref = ComposeHtmlCtrlRef('m_grid_populate_populate_approval_to_period_det_grid', 'APP', nCurrIndex);
        SubjectId_ref = ComposeHtmlCtrlRef('m_grid_populate_populate_approval_to_period_det_grid', 'stream_id', nCurrIndex);
        m_ItemRowKeyDataItem.push(SubjectId_ref.value);
        m_ColData = new Array;
        m_ColData.push(GetFieldValArr('APP', app_ref.value));
        m_AllItemData.push(m_ColData);

        WebServiceTemporaryDateWiseRoutineCahnge.SetApprovalPeriodRowEvent(m_session_var_name, m_AllItemData, m_ItemRowKeyDataItem, DataTableField,
        OnComplete_ToPeriodUpdateData, OnError_ToPeriodUpdateData, OnTimeOut_ToPeriodUpdateData);

    }
    catch (err) {
        alert("UpdateData()- Error In JScript");
    }
}
function OnComplete_ToPeriodUpdateData(arg) {
    cntxt_subject_id.value = GetIdFromGrid("m_grid_populate_populate_approval_to_period_det_grid", "APP", "subject_id");
    DestroyWaitMsgWnd();
    if (arg == 1) {

        ShowMsgWnd("Error In Navigation");
    }
}
function OnError_ToPeriodUpdateData(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_ToPeriodUpdateData(arg) {
    alert("Time Out");
}

function SetNull() {
    try {
        // document.getElementById("cmd_show").disabled = false;

        SetValue("ctxt_from_faculty_dept", "");
        SetValue("ctxt_from_faculty", "");
        SetValue("ctxt_to_faculty", "");
        SetValue("dtp_from_date", "");
        SetValue("dtp_to_date", "");
        SetValue("ctxt_remarks", "");
        SetValue("ctxt_to_faculty_shrt_name", "");
        SetValue("ctxt_from_faculty_shrt_name", "");
        SetValue("ctxt_to_emph_name", "");
        //SetValue("ctxt_routine_action_name", ""); 

        SetValue("cntxt_from_faculty_dept_id", "0");
        SetValue("ctxt_from_emph_code", "0");
        SetValue("ctxt_to_emph_code", "0");
        SetValue("cntxt_from_period_id", "0");
        SetValue("cntxt_to_period_id", "0");
        SetValue("cntxt_batch_id", "0");
        SetValue("cntxt_to_batch_id", "0");
        SetValue("cntxt_doc_id", "0");
        SetValue("cntxt_error_value", "1");
        //SetValue("cntxt_action_value", "1"); 
        SetValue("head_from_faculty", "");
        SetValue("head_to_faculty", "");

        DynamicHtmlTemplate_DeleteAllControl('m_populate_from_period'); //-----------------------preparation user
        DynamicHtmlTemplate_DeleteAllControl('m_populate_to_period'); //------------------------preparation user

        DynamicHtmlTemplate_DeleteAllControl('m_populate_approval_period_det_grid'); //---------Approval user
        DynamicHtmlTemplate_DeleteAllControl('m_populate_approval_to_period_det_grid'); //------Approval user
        document.getElementById("cmd_confirm").disabled = true;

        cntxt_change_status_type = GetValueByCtrlName("cntxt_change_status_type");
        ShowHideControl("m_div_to_faculty_Det_panel", 1);
        if (cntxt_change_status_type == '2') {
            SetValue("ctxt_routine_action_name", "");
            SetValue("cntxt_action_value", "1");
        }
    }
    catch (err) {
        alert("SetNull() - JScript Error");
    }
}
//-----------------------------------------------------------
function Cancel() {
    try {
        DynamicHtmlTemplate_DeleteAllControl('m_populate_from_period'); //-----------------------preparation user
        DynamicHtmlTemplate_DeleteAllControl('m_populate_to_period'); //------------------------preparation user

        DynamicHtmlTemplate_DeleteAllControl('m_populate_approval_period_det_grid'); //---------Approval user
        DynamicHtmlTemplate_DeleteAllControl('m_populate_approval_to_period_det_grid'); //------Approval user

        ShowHidePanel();

    }
    catch (err) {
        alert(err + " Cancel() - JScript Error");
    }
}
//-----------------------------------------------------------
function Reject() {
    SetValue("cntxt_btn_action_value", "3"); //----------------------------flag use for pending,acept,reject
    UpdateBtnActionValue();
}

