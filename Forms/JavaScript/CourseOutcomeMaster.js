
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



function Init() {
    try {
        SetAutoCompleteOff();
        SetFocusOffByTagName("DIV");
        SetDateEventByTagName();

        //=======populate period ===========
        m_session_var_name = "S_POPULATE_PERIOD";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_period", "m_grid_populate_period", "div_period", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("period_id,period_name");
        DynamicHtmlTemplate_SetControlName("cntxt_period_id,ctxt_period");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_period', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_period', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_period');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("period_id,period_id,hidden_textbox,R,10px");
        m_field_arr.push("period_name,Period Name,read_only_textbox,L,40px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================


        //=======Populate Subject===========
        m_session_var_name = "S_POPULATE_SUBJECT";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_subject", "m_grid_populate_subject", "div_subject", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("SubjectId,subject_name_code");
        DynamicHtmlTemplate_SetControlName("cntxt_subject_id,ctxt_subject");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("DispCoList();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_subject', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_subject', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_subject');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("SubjectId,SubjectId,hidden_textbox,R,10px");
        m_field_arr.push("subject_name_code,Subject,read_only_textbox,L,25px");
        m_field_arr.push("CourseName,Course,read_only_textbox,L,15px");
        m_field_arr.push("StreamName,Stream,read_only_textbox,L,15px");
        m_field_arr.push("SemNo,Sem,read_only_textbox,L,5px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================
 


        //=======Search CO===========
        m_session_var_name = "S_SEARCH_PO";
        DynamicHtmlTemplate_AddKeyName("m_key_search_co", "m_grid_search_co", "m_UpdatePanelSearchCo", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("co_rowId,co_no,co_details");
        DynamicHtmlTemplate_SetControlName("cntxt_co_key_id,ctxt_co_sl,ctxt_details");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_co', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_co', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("co_rowId,co_rowId,hidden_textbox,R,10px");


        m_field_arr.push("co_no,SL,read_only_textbox,L,5px");
        m_field_arr.push("co_details,Details,read_only_textbox,L,100px");



        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        SetNull();

        LoadMenu();
    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}


function SearchPeriod(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_period = GetValueByCtrlName("ctxt_period") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_name,VARCHAR," + ctxt_period);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_period",
                                             m_sp_param,
                                             "Proc_Get_Poco_Period",
                                             ctxt_period,
                                             0);
    }
    catch (err) {
        alert('SearchPeriod() - Error In JScript');
    }
}


function PopulateSubject(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_subject = GetValueByCtrlName("ctxt_subject") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_Sub_code,VARCHAR," + ctxt_subject);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_subject",
                                             m_sp_param,
                                             "Proc_Get_Subject_details",
                                             ctxt_subject,
                                             0);
    }
    catch (err) {
        alert('PopulateSubject() - Error In JScript');
    }
}


function SetNull() {

    SetValue("cntxt_co_key_id", "0");

    SetValue("ctxt_co_sl", "");
    SetValue("ctxt_details", "");

    DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_co');");
}



function DispCoList() {
    try {
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_co');");

        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");




        var m_sp_param = new Array();
        m_sp_param.push("@p_period_id,INT," + cntxt_period_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);
        m_sp_param.push("@p_name,VARCHAR," + "%");



        DynamicHtmlTemplate_PopulateGrid("m_key_search_co", m_sp_param, "Proc_Get_Poco_Course_Outcome");
    }
    catch (err) {
        alert('DispCoList() - Error In JScript');
    }
}



//--------------------------------------
function SaveCourseOutcomeMst() {
    try {

        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_co_key_id = GetValueByCtrlName("cntxt_co_key_id");

        ctxt_co_sl = GetValueByCtrlName("ctxt_co_sl");
        ctxt_details = GetValueByCtrlName("ctxt_details");


        if (parseFloat(cntxt_subject_id) <= 0) {
            alert("Select Subject");
            return;
        }




        if (ctxt_co_sl.length < 2) {
            alert("Enter Sl");
            return;
        }


        if (ctxt_details.length < 2) {
            alert("Enter Details");
            return;
        }

        if (SelectionWindow() == false) {
            return;
        }



        ShowWaitMsgWnd("Please Wait");
        WebServiceCoPoSetting.SaveCourseOutcomeMst(cntxt_period_id, cntxt_subject_id,cntxt_co_key_id,
                                           ctxt_co_sl, ctxt_details,
                                           OnComplete_SaveCourseOutcomeMst,
                                           OnError_SaveCourseOutcomeMst,
                                           OnTimeOut_SaveCourseOutcomeMst);
    }
    catch (err) {
        alert('SaveCourseOutcomeMst() - Error In JScript');
    }

}
function OnComplete_SaveCourseOutcomeMst(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg) == 0) {
        alert("Data Saved....");
        SetNull();
        DispCoList();
    }
    else {
        alert("Error in Saving....");
    }
}
function OnError_SaveCourseOutcomeMst(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SaveCourseOutcomeMst(arg) {
    alert("Time Out");
}

//--------------------------------------