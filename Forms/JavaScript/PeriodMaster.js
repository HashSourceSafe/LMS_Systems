
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

            ShowHideControl("m_DivPanelHeader", 1);
            ShowHideControl("m_Divpanel_populate_period", 1);
            ShowHideControl("m_divPanelButton", 1);
            ShowHideControl("m_DivPanelHiddenField", 0);
        }
        else if (p_flag == 2) {
            ShowHideControl("m_DivPanelHeader", 1);
            ShowHideControl("m_divPanelButton", 1);
            ShowHideControl("m_Divpanel_populate_batch_wise_stream", 1);
            ShowHideControl("m_Divpanel_populate_period", 1);
            ShowHideControl("m_DivPanelHiddenField", 0);
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
        SetNumericEventByTagName();
        SetDateEventByTagName();

        ShowHidePanel('1');

        //=======populate Batch year===========
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

        //=======populate Course ===========
        m_session_var_name = "S_POPULATE_COURSE";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_course", "m_grid_populate_course", "div_course_name", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("CourseId,CourseName");
        DynamicHtmlTemplate_SetControlName("cntxt_course_id,ctxt_course_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("PopulateBatchWiseStream();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_course', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_course', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_course');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("CourseId,CourseId,hidden_textbox,R,10px");
        m_field_arr.push("CourseName,Course Name,read_only_textbox,L,50px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================


        //=======Populate Stream===========
        m_session_var_name = "S_POPULATE_STREAM";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_stream", "m_grid_populate_stream", "div_PopulateStream", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("STD_STREAM_MASTER_nID,STD_STREAM_MASTER_sNAME"); // value and text both are sem
        DynamicHtmlTemplate_SetControlName("cntxt_stream_id,ctxt_stream_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_stream', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_stream', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_stream');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("STD_STREAM_MASTER_nID,STD_STREAM_MASTER_nID,hidden_textbox,R,10px");
        m_field_arr.push("STD_STREAM_MASTER_sNAME,STREAM NAME,read_only_textbox,L,50px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======_populate_period===========
        m_session_var_name = "S_POPULATE_PERIOD_GRID";
        DynamicHtmlTemplate_AddKeyName("m_populate_period", "m_grid_period_master", "m_panel_populate_period", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("Period_id");
        DynamicHtmlTemplate_SetControlName("cntxt_period_id");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(12);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("ShowHidePanel('2');");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("SetPeriodRowEvent();Open_Lock_Controler();");

        var m_field_arr = new Array();
        m_field_arr.push("APP,ACTION,read_only_textbox,C,3px");
        m_field_arr.push("Period_id,Period Id,hidden_textbox,L,10%");
        m_field_arr.push("Start_time,START TIME,read_only_textbox,C,8%");
        m_field_arr.push("End_time,END TIME,read_only_textbox,C,8%");
        m_field_arr.push("User_start_time,ALLOW START TIME,enable_textbox,C,15%");
        m_field_arr.push("User_end_time,ALLOW END TIME,enable_textbox,C,13%");
        m_field_arr.push("DispOrd,DispOrd,hidden_textbox,C,12%");
        m_field_arr.push("SemNo,SEMESTER,hidden_textbox,C,15%");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //=======Batch_Stream_Wise_Period_List===========
        m_session_var_name = "S_POPULATE_BATCH_WISE_STREAM";
        DynamicHtmlTemplate_AddKeyName("m_populate_batch_wise_stream", "m_grid_period_master_batch_wise_stream", "m_panel_populate_batch_wise_stream", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_populate_batch_wise_stream', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_populate_batch_wise_stream', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("Batch_Year,BATCH YEAR,read_only_textbox,L,10%");
        //m_field_arr.push("Course_Id,COURSE ID,hidden_textbox,L,10%");
        m_field_arr.push("Course_Name,COURSE NAME,read_only_textbox,L,25%");
        //m_field_arr.push("Stream_Id,STREAM ID,hidden_textbox,L,10%");
        m_field_arr.push("Stream_Name,STREAM NAME,read_only_textbox,L,20%");
        m_field_arr.push("Semester_Name,Semester No,read_only_textbox,L,10%");
        
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //========================================

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

function PopulateStream(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        ctxt_stream_name = GetValueByCtrlName("ctxt_stream_name") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_name,VARCHAR," + ctxt_stream_name);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_stream",
                                             m_sp_param,
                                             "Proc_STF_Get_Stream",
                                             ctxt_stream_name,
                                             0);
    }
    catch (err) {
        alert('PopulateStream() - Error In JScript');
    }
}

function PopulatePeriodGrid() {
    try {
        //var unicode = event.keyCode ? event.keyCode : event.charCode;
       
        if (ValidateSave() == false) {
            return;
        }
        ShowHidePanel('2');

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_no = GetValueByCtrlName("cntxt_semester_no");
       

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_batch_year,INT," + cntxt_batch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_Sem_no,INT," + cntxt_semester_no);

        DynamicHtmlTemplate_PopulateGrid("m_populate_period", m_sp_param, "Proc_batch_stream_wise_period");
    }
    catch (err) {
        alert('PopulatePeriodGrid() - Error In JScript');
    }
}

function PopulateBatchWiseStream() {
    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_batch_year,INT," + cntxt_batch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);

        DynamicHtmlTemplate_PopulateGrid("m_populate_batch_wise_stream", m_sp_param, "Proc_Get_Batch_Stream_Wise_Period_List");
    }
    catch (err) {
        alert('PopulateBatchWiseStream() - Error In JScript');
    }
}

function SetPeriodRowEvent() {
    try {

        SetAllCheckBoxStatus("m_grid_period_master", "App");
        AddCtrlEvent("m_grid_period_master", "APP", "onclick", "SetCheckBoxValue(this); UpdateData(this);");
        AddCtrlEvent("m_grid_period_master", "User_start_time", "onblur", "UpdateData(this);");
        AddCtrlEvent("m_grid_period_master", "User_end_time", "onblur", "UpdateData(this);");

    }
    catch (err) {
        alert("SetStudentRowEvent() - jScript Error");
    }
}

function UpdateData(p_curr_ctrl_ref) {
    try {

        //ShowWaitMsgWnd("Please Wait");
        m_session_var_name = "S_POPULATE_PERIOD_GRID";

        m_AllItemData = new Array;
        m_ItemRowKeyDataItem = new Array;

        m_grid_period_master = window.document.getElementById('m_grid_period_master');
        if (m_grid_period_master == null) {
            ShowMsgWnd("Error In Updateing - create Error");
            return;
        }
        nCurrIndex = GetCurrentRowIndex(p_curr_ctrl_ref);
        app_ref = ComposeHtmlCtrlRef('m_grid_period_master', 'App', nCurrIndex);
        studentId_ref = ComposeHtmlCtrlRef('m_grid_period_master', 'Period_id', nCurrIndex);
        m_User_start_time = ComposeHtmlCtrlRef('m_grid_period_master', 'User_start_time', nCurrIndex);
        m_User_end_time = ComposeHtmlCtrlRef('m_grid_period_master', 'User_end_time', nCurrIndex);

        m_ItemRowKeyDataItem.push(studentId_ref.value);

        m_ColData = new Array;
        m_ColData.push(GetFieldValArr('App', app_ref.value));
        m_ColData.push(GetFieldValArr('User_start_time', m_User_start_time.value));
        m_ColData.push(GetFieldValArr('User_end_time', m_User_end_time.value));
        
        m_AllItemData.push(m_ColData);

        WebServicePeriodMaster.SavePeriodData(m_session_var_name, m_AllItemData, m_ItemRowKeyDataItem, OnComplete_UpdateData, OnError_UpdateData, OnTimeOut_UpdateData);

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

function ValidateSave() {
    try {

        if (GetValueByCtrlName('cntxt_college_id') == "0") {
            ShowMsgWnd('College id not valid');
            return false;
        }

        if (GetValueByCtrlName('cntxt_batch_id') == "0") {
            ShowMsgWnd('Select Batch');
            return false;
        }
        if (GetValueByCtrlName('cntxt_course_id') == "0") {
            ShowMsgWnd('Select Course');
            return false;
        }
        if (GetValueByCtrlName('cntxt_stream_id') == "0") {
            ShowMsgWnd('Select Stream');
            return false;
        }
        if (GetValueByCtrlName('cntxt_semester_no') == "") {
            ShowMsgWnd('Enter Semester number');
            return false;
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
        if (ValidateSave() == false) {
            return;
        }
        
        var m_HeaderArray = new Array();

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_no = GetValueByCtrlName("cntxt_semester_no");

        m_HeaderArray.push(GetFieldValArr('cntxt_college_id', cntxt_college_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_batch_id', cntxt_batch_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_course_id', cntxt_course_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_stream_id', cntxt_stream_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_semester_no', cntxt_semester_no));

        //SetButtonBorder("cmd_save", "3px", "green");
        WebServicePeriodMaster.SaveData(m_HeaderArray, OnComplete_SaveData, OnError_SaveData, OnTimeOut_SaveData);

    }
    catch (err) {
        alert("SaveData() - JScript Error");
    }
}
function OnComplete_SaveData(arg) {
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

function ClearDataAfterSave() {
    try {
        ShowHidePanel('1');
        SetValue("ctxt_batch", "");
        SetValue("ctxt_course_name", "");
        SetValue("ctxt_stream_name", "");
        SetValue("cntxt_semester_no", "");
        SetValue("cntxt_course_id", "0");
        SetValue("cntxt_batch_id", "0");
        SetValue("cntxt_stream_id", "0");
        SetValue("cntxt_period_id", "0");
        DynamicHtmlTemplate_DeleteAllControl('m_populate_period');
        DynamicHtmlTemplate_DeleteAllControl('m_populate_batch_wise_stream');
    }
    catch (err) {
        alert("ClearDataAfterSave() - JScript Error");
    }
}

//-------------------------------
function Cancle() {
    try {
        ClearDataAfterSave();
        ShowHidePanel('1');
    }
    catch (err) {
        alert("Cancle() - JScript Error");
    }
}

function Open_Lock_Controler() {
    try {
        var rowscount = window.document.getElementById('m_grid_period_master').rows.length;
        if (rowscount <= 2) {
            document.getElementById("cmd_save").disabled = true;
        }
        else {
            document.getElementById("cmd_save").disabled = false;
        }
    }

    catch (err) {
        alert(err + " CheckingGridData () - JScript Error");
    }
}