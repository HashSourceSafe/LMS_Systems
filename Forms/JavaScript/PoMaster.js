
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
        m_field_arr.push("CourseName,Course Name,read_only_textbox,L,40px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================




        //=======Populate po_type ===========
        m_session_var_name = "S_PO_TYPE";
        DynamicHtmlTemplate_AddKeyName("m_key_po_type", "m_grid_po_type", "div_po_type", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("outcome_id,outcome_name");
        DynamicHtmlTemplate_SetControlName("cntxt_po_type_id,ctxt_po_type");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("DispPoList();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_po_type', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_po_type', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_po_type');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("outcome_id,outcome_id,hidden_textbox,R,10px");
        m_field_arr.push("outcome_name,Outcome Type,read_only_textbox,L,25px");


        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================



        //=======Search PO===========
        m_session_var_name = "S_SEARCH_PO";
        DynamicHtmlTemplate_AddKeyName("m_key_search_po", "m_grid_search_po", "m_UpdatePanelSearchPo", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("po_rowId,po_no,po_desp,po_details");
        DynamicHtmlTemplate_SetControlName("cntxt_po_key_id,ctxt_po_sl,ctxt_desp,ctxt_details");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_po', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_po', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("po_rowId,po_rowId,hidden_textbox,R,10px");
        

        m_field_arr.push("po_no,SL,read_only_textbox,L,5px");
        m_field_arr.push("po_desp,Description,read_only_textbox,L,25px");
        m_field_arr.push("po_details,Details,read_only_textbox,L,100px");



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


function SetNull() {

    SetValue("cntxt_po_key_id", "0");

    SetValue("ctxt_po_sl", "");
    SetValue("ctxt_desp", "");
    SetValue("ctxt_details", "");

    DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_po');");
}



function DispPoList() {
    try {
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_po');");

        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_po_type_id = GetValueByCtrlName("cntxt_po_type_id");




        var m_sp_param = new Array();
        m_sp_param.push("@p_period_id,INT," + cntxt_period_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_type_id,INT," + cntxt_po_type_id);
        m_sp_param.push("@p_name,VARCHAR," + "%");



        DynamicHtmlTemplate_PopulateGrid("m_key_search_po", m_sp_param, "Proc_Get_Poco_Prog_Outcome");
    }
    catch (err) {
        alert('DispPoList() - Error In JScript');
    }
}



function PopulatePoType(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;




        var m_sp_param = new Array();
        m_sp_param.push("@p_name,VARCHAR," + "%");

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_po_type",
                                             m_sp_param,
                                             "Proc_Get_Poco_Outcome_Type",
                                             "%",
                                             0);
    }
    catch (err) {
        alert('PopulatePoType() - Error In JScript');
    }
}



//--------------------------------------
function SaveProgramOutcomeMst() {
    try {

        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_po_type_id = GetValueByCtrlName("cntxt_po_type_id");
        cntxt_po_key_id = GetValueByCtrlName("cntxt_po_key_id");

        ctxt_po_sl = GetValueByCtrlName("ctxt_po_sl");
        ctxt_desp = GetValueByCtrlName("ctxt_desp");
        ctxt_details = GetValueByCtrlName("ctxt_details");


        if (parseFloat(cntxt_period_id) <= 0) {
            alert("Select Batch");
            return;
        }


        if (parseFloat(cntxt_course_id) <= 0) {
            alert("Select Course");
            return;
        }


        if (parseFloat(cntxt_po_type_id) <= 0) {
            alert("Select Type");
            return;
        }

        if (ctxt_po_sl.length<2) {
            alert("Enter Sl");
            return;
        }

        if (ctxt_desp.length < 2) {
            alert("Enter Description");
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
        WebServiceCoPoSetting.SaveProgramOutcomeMst(cntxt_period_id, cntxt_course_id, cntxt_po_type_id, cntxt_po_key_id,
                                           ctxt_po_sl, ctxt_desp,ctxt_details,
                                           OnComplete_SaveProgramOutcomeMst,
                                           OnError_SaveProgramOutcomeMst,
                                           OnTimeOut_SaveProgramOutcomeMst);
    }
    catch (err) {
        alert('SaveProgramOutcomeMst() - Error In JScript');
    }

}
function OnComplete_SaveProgramOutcomeMst(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg) == 0) {
        alert("Data Saved....");
        SetNull();
        DispPoList();
    }
    else {
        alert("Error in Saving....");
    }
}
function OnError_SaveProgramOutcomeMst(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SaveProgramOutcomeMst(arg) {
    alert("Time Out");
}

//--------------------------------------