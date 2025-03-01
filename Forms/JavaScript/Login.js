function RightMouseClick(event) {
    if (event.which == 3) {
        alert("Enjoy Your Work");
    }
}


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




//------------------------------
function ExitWindow() {
    try {
        if (SelectionWindow() == false) {
            return;
        }
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


function Init() {
    try {
        SetAutoCompleteOff();
        SetFocusOffByTagName("DIV");
        //SetDateEventByTagName();
        //SetNumericEventByTagName();




        //=======For Academic Session ===========
        m_session_var_name = "S_ACADEMIC_SESSION";
        DynamicHtmlTemplate_AddKeyName("ctxt_academic_session", "m_grid_academic_session", "div_academic_session_combo", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("Academic_Session_Id,Academic_Session_Name");
        DynamicHtmlTemplate_SetControlName("cntxt_academic_session_id,ctxt_academic_session");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(5);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");


        var m_field_arr = new Array();
        m_field_arr.push("Academic_Session_Name,Year,read_only_textbox,L,90%");
        m_field_arr.push("Academic_Session_Id,Fin_id,hidden_textbox,L,10%");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //======================================

    }
    catch (err) {
        alert('Init() - Error In JScript');
    }
}

//=========================== 
function SearchAcademicSession(event) {
    try {


        
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        //ResetNameCodeControl("ctxt_FinYear", "cntxt_nFinId");

        m_academic_session = GetValueByCtrlName("ctxt_academic_session") + "%";
        var m_sp_param = new Array();
        m_sp_param.push("@p_name,VARCHAR," + m_academic_session);
       
        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                                "ctxt_academic_session",
                                                m_sp_param,
                                                "Proc_Get_Academic_Session",
                                                m_academic_session,
                                                1,
                                                "MASTER");


    }
    catch (err) {
        alert('SearchAcademicSession() - Error In JScript');
    }
}