
function RightMouseClick(event) {
    if (event.which == 3) {
        alert("Enjoy Your Work");
    }
}


function CheckKeyUp(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        m_curr_ctrl = document.activeElement;
    }
    catch (err) {
        alert("CheckKeyUp() - JScript Error");
    }
}


function CheckKeyDown(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;


        m_curr_ctrl = document.activeElement;
        if (m_curr_ctrl != null && unicode == 9) {
            m_curr_ctrl.style.outline = "0px solid #77e5ff";
        }

        //Enter,PageUp,PageDown,F2 key code
        if (unicode == 13 || unicode == 33 || unicode == 34 || unicode == 112 || unicode == 113) {
            event.preventDefault();
        }

    }
    catch (err) {
        alert("CheckKeyDown() - JScript Error");
    }
}


function Init() {
    try {
        SetAutoCompleteOff();
        SetFocusOffByTagName("DIV");
        SetDateEventByTagName();
        SetNull();



        //-------Course--------------
        m_session_var_name = "S_COURSE_COMBO";
        DynamicHtmlTemplate_AddKeyName("ctxt_course", "m_grid_course", "div_ctxt_course", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("STD_COURSE_MASTER_nID,STD_COURSE_MASTER_sNAME");
        DynamicHtmlTemplate_SetControlName("cntxt_course_id,ctxt_course");
        DynamicHtmlTemplate_AllowSelection("T");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('ctxt_course', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('ctxt_course', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('ctxt_course');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");



        var m_field_arr = new Array();
        m_field_arr.push("STD_COURSE_MASTER_sNAME,Course,read_only_textbox,L,60px");
        m_field_arr.push("STD_COURSE_MASTER_nID,Acc Id,hidden_textbox,R,10px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //-----------------------------------------

        //-------stram--------------
        m_session_var_name = "S_STREAM_COMBO";
        DynamicHtmlTemplate_AddKeyName("ctxt_stream", "m_grid_stream", "div_ctxt_stream", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("STD_STREAM_MASTER_nID,STD_STREAM_MASTER_sNAME");
        DynamicHtmlTemplate_SetControlName("cntxt_stream_id,ctxt_stream");
        DynamicHtmlTemplate_AllowSelection("T");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('ctxt_stream', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('ctxt_stream', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('ctxt_stream');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");



        var m_field_arr = new Array();
        m_field_arr.push("STD_STREAM_MASTER_sNAME,Stream,read_only_textbox,L,60px");
        m_field_arr.push("STD_STREAM_MASTER_nID,Acc Id,hidden_textbox,R,10px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //-----------------------------------------

        //-------batch--------------
        m_session_var_name = "S_BATCH_COMBO";
        DynamicHtmlTemplate_AddKeyName("ctxt_batch", "m_grid_batch", "div_ctxt_batch", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("STD_STUDENT_BATCH_nBatchId,STD_STUDENT_BATCH_sBatchName");
        DynamicHtmlTemplate_SetControlName("cntxt_batch_id,ctxt_batch");
        DynamicHtmlTemplate_AllowSelection("T");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('ctxt_batch', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('ctxt_batch', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('ctxt_batch');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");



        var m_field_arr = new Array();
        m_field_arr.push("STD_STUDENT_BATCH_sBatchName,Batch,read_only_textbox,L,60px");
        m_field_arr.push("STD_STUDENT_BATCH_nBatchId,Acc Id,hidden_textbox,R,10px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //-----------------------------------------

        //=======Category===========
        m_session_var_name = "S_CATEGORY_NAME_SCH";
        DynamicHtmlTemplate_AddKeyName("ctxt_category_name", "m_grid_category_name", "div_category_name_combo", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("category_name,category_id");
        DynamicHtmlTemplate_SetControlName("ctxt_category_name,cntxt_category_id");
        DynamicHtmlTemplate_AllowSelection("T");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('ctxt_category_name', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('ctxt_category_name', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('ctxt_category_name');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");



        var m_field_arr = new Array();
        m_field_arr.push("category_name,Category Name,read_only_textbox,L,30px");
        m_field_arr.push("category_id,Category Id,hidden_textbox,R,10px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //-------Semester Master--------------
        DynamicHtmlTemplate_AddKeyName("ctxt_semester_name", "m_grid_semester", "div_semester_combo", "NA");
        DynamicHtmlTemplate_GetControlName("semester_name,semester_id");
        DynamicHtmlTemplate_SetControlName("ctxt_semester_name,cntxt_nSemesterId");
        DynamicHtmlTemplate_AllowSelection("T");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('ctxt_semester_name');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");



        var m_field_arr = new Array();
        m_field_arr.push("semester_name,Semester,read_only_textbox,L,40px");
        m_field_arr.push("semester_id,semester_id,hidden_textbox,L,10px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //-----------------------------------------



        //=======Student List===========
        m_session_var_name = "S_STUDENT_MASTER_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_student_list", "m_grid_student_list", "m_panel_student_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_student_list', 'PREV')");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_student_list', 'NEXT')");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("AddStdCurrentTextBoxEvent();");



        var m_field_arr = new Array();
        m_field_arr.push("student_roll,Std Id,read_only_textbox,L,10px");
        m_field_arr.push("student_college_roll,College Roll,read_only_textbox,L,10px");
        m_field_arr.push("student_name,Student Name,read_only_textbox,L,30px");
        m_field_arr.push("category_name,Fees Category,read_only_textbox,L,20px");
        m_field_arr.push("curr_sem_name,Current Semester,read_only_textbox,L,30px");
        m_field_arr.push("active_status,Status,read_only_textbox,L,10px");
        m_field_arr.push("hostel_stat,Hostel,read_only_textbox,L,10px");
        m_field_arr.push("year_lag,Year Lag,read_only_textbox,L,10px");
        m_field_arr.push("batch_name,Batch,read_only_textbox,L,30px");



        m_field_arr.push("student_id,student_id,hidden_textbox,R,10px");
        m_field_arr.push("category_id,category_id,hidden_textbox,R,10px");
        m_field_arr.push("curr_sem_id,curr_sem_id,hidden_textbox,R,10px");
        m_field_arr.push("active_status_flag,active_status_flag,hidden_textbox,R,10px");
        m_field_arr.push("hostel_stat_flag,hostel_stat_flag,hidden_textbox,R,10px");
        m_field_arr.push("year_lag_flag,year_lag_flag,hidden_textbox,R,10px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //===========================





        ShowHidePanel(1);
    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}


//--------------------------------
function SetNull() {
    try {
        ShowWaitMsgWnd("Please Wait");

        var m_ArrSes = new Array();
        m_session_var_name = "S_STUDENT_MASTER_LIST";
        m_ArrSes.push(m_session_var_name);


        WebServiceMasters.ResetSessionDataTable(m_ArrSes,
                                                OnComplete_SetNull,
                                                OnError_SetNull,
                                                OnTimeOut_SetNull);
    }
    catch (err) {
        alert("SetNull() - JScript Error");
    }
}
function OnComplete_SetNull(arg) {
    if (arg > 0) {
        DestroyWaitMsgWnd();
        alert('Error in WebMethod - SetNull()');
    }
    else {
        SetValue("ctxt_course", "");
        SetValue("ctxt_stream", "");
        SetValue("ctxt_batch", "");
        SetValue("ctxt_category_name", "");


        SetValue("cntxt_course_id", "0");
        SetValue("cntxt_stream_id", "0");
        SetValue("cntxt_batch_id", "0");
        SetValue("cntxt_year", "0");
        SetValue("cntxt_category_id", "0");
        SetValue("cntxt_curr_row", "-1");

        SetValue("cntxt_student_id", "0");
        SetValue("cntxt_edit_status", "0");

        SetValue("cntxt_nSemesterId", "0");
        SetValue("ctxt_semester_name", "");
        


        DynamicHtmlTemplate_DeleteAllControl('m_key_student_list');
        DestroyWaitMsgWnd();
    }
}
function OnError_SetNull(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SetNull(arg) {
    alert("Time Out");
}

//--------------------------------


//------------------------------
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


function PrintReport() {
    try {
        PrintStudentReport();

    }
    catch (err) {
        alert("PrintReport() - JScript Error");
    }
}

//--------------------------------------
function PrintStudentReport() {
    try {
        if (GetRadioButStat("radio_pdf_xls_0") == true) {
            m_format = "PDF"
        }
        else if (GetRadioButStat("radio_pdf_xls_1") == true) {
            m_format = "XLS"
        }


        m_BranchId = GetValueByCtrlName("cntxt_nBranchId");
        m_course_id = GetValueByCtrlName("cntxt_course_id");
        m_stream_id = GetValueByCtrlName("cntxt_stream_id");
        m_year = GetValueByCtrlName("cntxt_year");
        m_batch_id = GetValueByCtrlName("cntxt_batch_id");
        m_category_id = GetValueByCtrlName("cntxt_category_id");

        if (GetRadioButStat("radio_disp_type_0") == true) {
            m_active_stat = "%";
        }
        else if (GetRadioButStat("radio_disp_type_1") == true) {
            m_active_stat = "N";
        }
        else if (GetRadioButStat("radio_disp_type_2") == true) {
            m_active_stat = "Y";
        }
        else if (GetRadioButStat("radio_disp_type_3") == true) {
            m_active_stat = "P";
        }

        if (GetRadioButStat("radio_std_type_0") == true) {
            m_hostel_stat = "%";
        }
        else if (GetRadioButStat("radio_std_type_1") == true) {
            m_hostel_stat = "Y";
        }
        else if (GetRadioButStat("radio_std_type_2") == true) {
            m_hostel_stat = "N";
        }

        if (GetRadioButStat("radio_year_lag_0") == true) {
            m_year_lag_stat = "%";
        }
        else if (GetRadioButStat("radio_year_lag_1") == true) {
            m_year_lag_stat = "N";
        }
        else if (GetRadioButStat("radio_year_lag_2") == true) {
            m_year_lag_stat = "Y";
        }

        m_student_name = "%";
        m_student_code = "%";

        var m_SpParam = new Array;
        m_SpParam.push(CreateParam("@p_branch_id", m_BranchId, "INT"))
        m_SpParam.push(CreateParam("@p_course_id", m_course_id, "INT"))
        m_SpParam.push(CreateParam("@p_stream_id", m_stream_id, "INT"))
        m_SpParam.push(CreateParam("@p_batch_year", m_year, "INT"))
        m_SpParam.push(CreateParam("@p_batch_id", m_batch_id, "INT"))
        m_SpParam.push(CreateParam("@p_category_id", m_category_id, "INT"))
        m_SpParam.push(CreateParam("@p_active_stat", m_active_stat, "VARCHAR"))
        m_SpParam.push(CreateParam("@p_hostel_stat", m_hostel_stat, "VARCHAR"))
        m_SpParam.push(CreateParam("@p_year_lag_stat", m_year_lag_stat, "VARCHAR"))
        m_SpParam.push(CreateParam("@p_student_name", m_student_name, "VARCHAR"))
        m_SpParam.push(CreateParam("@p_student_code", m_student_code, "VARCHAR"))



        m_heading = "Student List - " + GetValueByCtrlName("ctxt_branch_name");

        var m_FormulaList = new Array;
        m_FormulaList.push(CreateFormula("m_company", GetValueByCtrlName("ctxt_branch_name")));
        m_FormulaList.push(CreateFormula("m_company_add", GetValueByCtrlName("ctxt_branch_add")));
        m_FormulaList.push(CreateFormula("m_phone", GetValueByCtrlName("ctxt_branch_phone")));
        m_FormulaList.push(CreateFormula("m_head_1", m_heading));


        GenerateReport("rptStudentList.rpt",
                        m_SpParam,
                        m_FormulaList,
                        null,
                        m_format);

    }
    catch (err) {
        alert("PrintStudentReport() - JScript Error");
    }
}
//--------------------------------------


function PopulateCourse(event) {
    try {

        var unicode = event.keyCode ? event.keyCode : event.charCode;

        m_name = GetValueByCtrlName("ctxt_course") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_name,VARCHAR," + m_name);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "ctxt_course",
                                             m_sp_param,
                                             "Proc_Get_Course",
                                             m_name,
                                             1);


    }
    catch (err) {
        alert(err.Message);
        alert("PopulateCourse()- Error In JScript");
    }
}

function PopulateStream(event) {
    try {

        var unicode = event.keyCode ? event.keyCode : event.charCode;

        m_name = GetValueByCtrlName("ctxt_stream") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_name,VARCHAR," + m_name);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "ctxt_stream",
                                             m_sp_param,
                                             "Proc_Get_Stream",
                                             m_name,
                                             1);


    }
    catch (err) {
        alert(err.Message);
        alert("PopulateStream()- Error In JScript");
    }
}

function PopulateBatch(event) {
    try {

        var unicode = event.keyCode ? event.keyCode : event.charCode;

        m_course_id = GetValueByCtrlName("cntxt_course_id");
        m_stream_id = GetValueByCtrlName("cntxt_stream_id");
        m_year = GetValueByCtrlName("cntxt_year");
        m_name = GetValueByCtrlName("ctxt_batch") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_course_id,INT," + m_course_id);
        m_sp_param.push("@p_stream_id,INT," + m_stream_id);
        m_sp_param.push("@p_year,INT," + m_year);
        m_sp_param.push("@p_name,VARCHAR," + m_name);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "ctxt_batch",
                                             m_sp_param,
                                             "Proc_Get_Student_Batch",
                                             m_name,
                                             1);


    }
    catch (err) {
        alert(err.Message);
        alert("PopulateBatch()- Error In JScript");
    }
}


function SetFeesRowEvent() {
    try {

        AddCtrlClass("m_grid_fees", "APP", "cmd_button_check_box_on");
        AddCtrlEvent("m_grid_fees", "APP", "onclick", "SetCheckBoxValue(this);");
    }
    catch (err) {
        alert("SetFeesRowEvent() - jScript Error");
    }
}


function PopulateBillCategory(event) {
    try {

        var unicode = event.keyCode ? event.keyCode : event.charCode;

        m_category_name = GetValueByCtrlName("ctxt_category_name");

        var m_sp_param = new Array();
        m_sp_param.push("@NA,NA,1");

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "ctxt_category_name",
                                             m_sp_param,
                                             "Proc_Get_Student_Bill_Category",
                                             m_category_name,
                                             0);


    }
    catch (err) {
        alert(err.Message);
        alert("PopulateBillCategory()- Error In JScript");
    }
}


function ShowHidePanel(p_flag) {

    ShowHideControl('m_UpdatePanelHeader', '0');
    ShowHideControl('m_UpdatePanelStudentList', '0');
    SetControlClass("cmd_filter", "tab_un_selected");
    SetControlClass("cmd_std_list", "tab_un_selected");


    if (p_flag == 1) { //Search tab
        ShowHideControl('m_UpdatePanelHeader', '1');
        SetControlClass("cmd_filter", "tab_selected");
    }
    else if (p_flag == 2) {
        ShowHideControl('m_UpdatePanelStudentList', '1');
        SetControlClass("cmd_std_list", "tab_selected");
    }
}


function DisplayList() {
    try {
        m_BranchId = GetValueByCtrlName("cntxt_nBranchId");
        m_course_id = GetValueByCtrlName("cntxt_course_id");
        m_stream_id = GetValueByCtrlName("cntxt_stream_id");
        m_year = GetValueByCtrlName("cntxt_year");
        m_batch_id = GetValueByCtrlName("cntxt_batch_id");
        m_category_id = "0";
        m_active_stat = "%";
        m_hostel_stat = "%";
        m_year_lag_stat = "%";
        m_student_name = "%";
        m_student_code = "%";

        if (parseFloat(m_batch_id) <= 0) {
            ShowMsgWnd("Select Batch");
            return false;
        }


        var m_SpParam = new Array;
        m_SpParam.push("@p_branch_id,INT," + m_BranchId);
        m_SpParam.push("@p_course_id,INT," + m_course_id);
        m_SpParam.push("@p_stream_id,INT," + m_stream_id);
        m_SpParam.push("@p_batch_year,INT," + m_year);
        m_SpParam.push("@p_batch_id,INT," + m_batch_id);
        m_SpParam.push("@p_category_id,INT," + m_category_id);
        m_SpParam.push("@p_active_stat,VARCHAR," + m_active_stat);
        m_SpParam.push("@p_hostel_stat,VARCHAR," + m_hostel_stat);
        m_SpParam.push("@p_year_lag_stat,VARCHAR," + m_year_lag_stat);
        m_SpParam.push("@p_student_name,VARCHAR," + m_student_name);
        m_SpParam.push("@p_student_code,VARCHAR," + m_student_code);

        DynamicHtmlTemplate_PopulateGrid("m_key_student_list", m_SpParam, "Proc_Disp_Student_List");

        ShowHidePanel(2);
    }
    catch (err) {
        alert("DisplayList()- Error In JScript");
    }
}

function AddStdCurrentTextBoxEvent() {
    try {

        AddCtrlEvent("m_grid_student_list", "category_name", "onclick", "SaveStatus(this)");
        AddCtrlEvent("m_grid_student_list", "curr_sem_name", "onclick", "SaveStatus(this)");
        AddCtrlEvent("m_grid_student_list", "active_status", "onclick", "SaveStatus(this)");
        AddCtrlEvent("m_grid_student_list", "hostel_stat", "onclick", "SaveStatus(this);");
        AddCtrlEvent("m_grid_student_list", "year_lag", "onclick", "SaveStatus(this);");
    }
    catch (err) {
        alert("AddStdCurrentTextBoxEvent()- Error In JScript");
    }
}

function SaveStatus(p_curr_ctrl_ref) {
    try {

        SetValue("cntxt_curr_row", GetCurrentRowIndex(p_curr_ctrl_ref));
        m_curr_student_id = ComposeHtmlCtrlRef("m_grid_student_list", "student_id", GetCurrentRowIndex(p_curr_ctrl_ref));

        SetValue("cntxt_student_id", m_curr_student_id.value);

        m_curr_ctrl_id = p_curr_ctrl_ref.id;
        if (m_curr_ctrl_id.search('CATEGORY_NAME') > -1) {
            SetValue("cntxt_edit_status", "1");
        }
        else if (m_curr_ctrl_id.search('CURR_SEM_NAME') > -1) {
            SetValue("cntxt_edit_status", "2");
        }
        else if (m_curr_ctrl_id.search('ACTIVE_STATUS') > -1) {
            SetValue("cntxt_edit_status", "3");
        }
        else if (m_curr_ctrl_id.search('HOSTEL_STAT') > -1) {
            SetValue("cntxt_edit_status", "4");
        }
        else if (m_curr_ctrl_id.search('YEAR_LAG') > -1) {
            SetValue("cntxt_edit_status", "5");
        }
        else {
            ShowMsgWnd("Please Click On Proper Column");
        }

        UpdateStatus();
    }
    catch (err) {
        alert("SaveStatus()- Error In JScript");
    }
}


//---------------------------------
function UpdateStatus() {
    try {

        m_edit_status = GetValueByCtrlName("cntxt_edit_status");
        if (m_edit_status == 1) { //Fees category
            m_edit_id = GetValueByCtrlName("cntxt_category_id");
            m_edit_name = GetValueByCtrlName("ctxt_category_name");

            if (parseFloat(m_edit_id) <= 0) {
                ShowMsgWnd("Select Fees Category From Perv Window");
                return;
            }

            m_edit_ctrl_id = ComposeHtmlCtrlRef("m_grid_student_list", "category_id", GetValueByCtrlName("cntxt_curr_row"));
            m_edit_ctrl_name = ComposeHtmlCtrlRef("m_grid_student_list", "category_name", GetValueByCtrlName("cntxt_curr_row"));

            m_edit_ctrl_id.value = m_edit_id;
            m_edit_ctrl_name.value = m_edit_name;
        }
        else if (m_edit_status == 2) { //Semester
            m_edit_id = GetValueByCtrlName("cntxt_nSemesterId");
            m_edit_name = GetValueByCtrlName("ctxt_semester_name");

            if (parseFloat(m_edit_id) <= 0) {
                ShowMsgWnd("Select Semester From Perv Window");
                return;
            }

            m_edit_ctrl_id = ComposeHtmlCtrlRef("m_grid_student_list", "curr_sem_id", GetValueByCtrlName("cntxt_curr_row"));
            m_edit_ctrl_name = ComposeHtmlCtrlRef("m_grid_student_list", "curr_sem_name", GetValueByCtrlName("cntxt_curr_row"));

            m_edit_ctrl_id.value = m_edit_id;
            m_edit_ctrl_name.value = m_edit_name;
        }
        else if (m_edit_status == 3) { //Active Stat
            if (GetRadioButStat("radio_disp_type_0") == true) {
                ShowMsgWnd("Select Proper Active Status");
                return;
            }
            else if (GetRadioButStat("radio_disp_type_1") == true) {
                m_edit_id = "N";
                m_edit_name = "Active"
            }
            else if (GetRadioButStat("radio_disp_type_2") == true) {
                m_edit_id = "Y";
                m_edit_name = "Left"
            }
            else if (GetRadioButStat("radio_disp_type_3") == true) {
                m_edit_id = "P";
                m_edit_name = "Passed"
            }


            m_edit_ctrl_id = ComposeHtmlCtrlRef("m_grid_student_list", "active_status_flag", GetValueByCtrlName("cntxt_curr_row"));
            m_edit_ctrl_name = ComposeHtmlCtrlRef("m_grid_student_list", "active_status", GetValueByCtrlName("cntxt_curr_row"));

            m_edit_ctrl_id.value = m_edit_id;
            m_edit_ctrl_name.value = m_edit_name;
        }
        else if (m_edit_status == 4) { //Hostel Stat
            if (GetRadioButStat("radio_std_type_0") == true) {
                ShowMsgWnd("Select Proper Hostel Status");
                return;
            }
            else if (GetRadioButStat("radio_std_type_1") == true) {
                m_edit_id = "Y";
                m_edit_name = "Yes"
            }
            else if (GetRadioButStat("radio_std_type_2") == true) {
                m_edit_id = "N";
                m_edit_name = "No"
            }


            m_edit_ctrl_id = ComposeHtmlCtrlRef("m_grid_student_list", "hostel_stat_flag", GetValueByCtrlName("cntxt_curr_row"));
            m_edit_ctrl_name = ComposeHtmlCtrlRef("m_grid_student_list", "hostel_stat", GetValueByCtrlName("cntxt_curr_row"));

            m_edit_ctrl_id.value = m_edit_id;
            m_edit_ctrl_name.value = m_edit_name;
        }
        else if (m_edit_status == 5) { //year Lag
            if (GetRadioButStat("radio_year_lag_0") == true) {
                ShowMsgWnd("Select Proper Year Lag Status");
                return;
            }
            else if (GetRadioButStat("radio_year_lag_1") == true) {
                m_edit_id = "N";
                m_edit_name = "No"
            }
            else if (GetRadioButStat("radio_year_lag_2") == true) {
                m_edit_id = "Y";
                m_edit_name = "Yes"
            }


            m_edit_ctrl_id = ComposeHtmlCtrlRef("m_grid_student_list", "year_lag_flag", GetValueByCtrlName("cntxt_curr_row"));
            m_edit_ctrl_name = ComposeHtmlCtrlRef("m_grid_student_list", "year_lag", GetValueByCtrlName("cntxt_curr_row"));

            m_edit_ctrl_id.value = m_edit_id;
            m_edit_ctrl_name.value = m_edit_name;
        }

        ShowWaitMsgWnd("Please Wait");
        
        m_curr_student_id = GetValueByCtrlName("cntxt_student_id");


        WebServiceStudentMaster.SaveStatus(m_curr_student_id,
                                           m_edit_status,
                                           m_edit_id,
                                           m_edit_name,
                                           OnComplete_UpdateStatus,
                                           OnError_UpdateStatus,
                                           OnTimeOut_UpdateStatus);


    }
    catch (err) {
        alert("SaveStatus()- Error In JScript");
    }
}
function OnComplete_UpdateStatus(arg) {
    DestroyWaitMsgWnd();
    if (arg > 0) {
        ShowMsgWnd('Error in Saving');
    }
}
function OnError_UpdateStatus(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_UpdateStatus(arg) {
    alert("Time Out");
}

//---------------------------------


function ValidateSave() {
    try {
        m_grid_student_list = window.document.getElementById("m_grid_student_list");
        if (m_grid_student_list == null) {
            ShowMsgWnd('Select Batch - Press Display For Edit Button');
            return false;
        }

        if (m_grid_student_list.rows.length<3) {
            ShowMsgWnd('Select Batch - Press Display For Edit Button');
            return false;
        }

        m_batch_id = GetValueByCtrlName("cntxt_batch_id");
        if (parseFloat(m_batch_id) <= 0) {
            ShowMsgWnd('Select Batch - Press Display For Edit Button');
            return false;
        }

        return true;
    }
    catch (err) {
        alert("ValidateSave() - JScript Error");
        return false;
    }
}


//-------------------------------------------
function SaveData() {
    try {

        if (ValidateSave() == false) {
            return;
        }


        if (SelectionWindow() == false) {
            return;
        }
        ShowWaitMsgWnd("Please Wait");
        WebServiceStudentMaster.SaveAllStdData(
                                   OnComplete_SaveData,
                                   OnError_SaveData,
                                   OnTimeOut_SaveData);


    }
    catch (err) {
        alert("SaveData()- Error In JScript");
    }
}
function OnComplete_SaveData(arg) {
    DestroyWaitMsgWnd();
    if (arg == 0) {
        ShowMsgWnd("Data Saved Successfully.");
    }
    else {
        ShowMsgWnd("Error In Data Saving");
    }
}
function OnError_SaveData(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SaveData(arg) {
    alert("Time Out");
}

//-------------------------------------------


function PopulateSemester(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;




        m_semester_name = "%";
        m_batch_id = GetValueByCtrlName("cntxt_batch_id");
        if (parseFloat(m_batch_id) <= 0) {
            ShowMsgWnd('Select Batch - Press Display For Edit Button');
            return false;
        }


        var m_sp_param = new Array();
        m_sp_param.push("@p_batch_id,INT," + m_batch_id);


        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "ctxt_semester_name",
                                             m_sp_param,
                                             "Proc_Get_Semester",
                                             m_semester_name,
                                             0);




    }
    catch (err) {
        alert(err.Message);
        alert("PopulateSemester()- Error In JScript");
    }
}


//-------------------------
function SetCatSemToAll(p_Flag) {
    try {
        if (SelectionWindow() == false) {
            return;
        }

        if (p_Flag == "SEM") {
            m_edit_id = GetValueByCtrlName("cntxt_nSemesterId");
            m_edit_name = GetValueByCtrlName("ctxt_semester_name");
        }
        else if (p_Flag == "CAT") {
            m_edit_id = GetValueByCtrlName("cntxt_category_id");
            m_edit_name = GetValueByCtrlName("ctxt_category_name");
        }

        if (parseFloat(m_edit_id) <= 0) {
            ShowMsgWnd('Select ' + p_Flag);
            return false;
        }

        ShowWaitMsgWnd("Please Wait");
        WebServiceStudentMaster.SetCatSemToAll(p_Flag,m_edit_id,m_edit_name,
                                   OnComplete_SetCatSemToAll,
                                   OnError_SetCatSemToAll,
                                   OnTimeOut_SetCatSemToAll);

    }
    catch (err) {
        alert("SetCatSemToAll()- Error In JScript");
    }
}
function OnComplete_SetCatSemToAll(arg) {
    DestroyWaitMsgWnd();
    if (arg == 0) {
        DynamicHtmlTemplate_PopulateGridFromDataTable("m_key_student_list", "S_STUDENT_MASTER_LIST", "NA");
        ShowMsgWnd("Data Saved Successfully.");
    }
    else {
        ShowMsgWnd("Error In Data Saving");
    }
}
function OnError_SetCatSemToAll(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SetCatSemToAll(arg) {
    alert("Time Out");
}

//-------------------------