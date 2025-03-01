
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

//            ShowHideControl("m_DivPanelHeader", 1);
//            ShowHideControl("m_Divpanel_populate_period", 1);
//            ShowHideControl("m_divPanelButton", 1);
//            ShowHideControl("m_DivPanelHiddenField", 0);
//        }
//        else if (p_flag == 2) {
//            ShowHideControl("m_DivPanelHeader", 1);
//            ShowHideControl("m_divPanelButton", 1);
//            ShowHideControl("m_Divpanel_populate_batch_wise_stream", 1);
//            ShowHideControl("m_Divpanel_populate_period", 1);
//            ShowHideControl("m_DivPanelHiddenField", 0);
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
        DispMaxEmployeCode();
        document.getElementById("ctxt_last_facultyCode").disabled = true;

        //=======Populate Visiting Faculty Details===========
        m_session_var_name = "S_POPULATE_VISITING_FACULTY_DETAILS";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_visiting_faculty_details", "m_grid_populate_visiting_faculty_details", "m_panel_visiting_faculty_details", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_Emph_code,m_Emph_Name,m_Emph_Sh_Name,m_dept_id,m_dept_name,m_Emph_Desig");
        DynamicHtmlTemplate_SetControlName("ctxt_faculty_code,ctxt_faculty_name,ctxt_faculty_short_name,cntxt_department_id,ctxt_department,ctxt_desingation");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("SetEditMode();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_visiting_faculty_details', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_visiting_faculty_details', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_visiting_faculty_details');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("App,Action,read_only_textbox,L,5px");
        m_field_arr.push("m_Emph_code,Visiting Faculty Code,read_only_textbox,L,15px");
        m_field_arr.push("m_Emph_Name,Visiting Faculty Name,read_only_textbox,L,40px");
        m_field_arr.push("m_Emph_Desig,Faculty Designation,read_only_textbox,L,15px");
        m_field_arr.push("m_Emph_Category,Category,read_only_textbox,L,15px");
        m_field_arr.push("m_Emph_Sh_Name,Faculty Sh Name,read_only_textbox,L,15px");
        m_field_arr.push("m_dept_name,Dept,read_only_textbox,L,15px");
        m_field_arr.push("m_dept_id,m_dept_id,hidden_textbox,L,15px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Populate designation===========
        m_session_var_name = "S_POPULATE_DESIGNATION";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_designation", "m_grid_populate_designation", "div_designation", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("designation_id,designation_name");
        DynamicHtmlTemplate_SetControlName("cntxt_designation_id,ctxt_desingation");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_designation', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_designation', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_designation');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("designation_id,designation id,hidden_textbox,L,5px");
        m_field_arr.push("designation_name,designation Name,read_only_textbox,L,40px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //==========================POPULATE DEPARTMENT===========================================
        m_session_var_name = "S_POPULATE_DEPARTMENT";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_department", "m_grid_populate_department", "div_department", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("dept_id,dept_name");
        DynamicHtmlTemplate_SetControlName("cntxt_department_id,ctxt_department");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_department', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_department', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_department');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("dept_id,department id,hidden_textbox,L,5px");
        m_field_arr.push("dept_name,department Name,read_only_textbox,L,40px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);


        LoadMenu();
    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}
function DispMaxEmployeCode() {
    cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
    WebServiceAddVisitingFaculty.DispMaxEmployeCode(cntxt_college_id,OnComplete_DispMaxEmployeCode, OnError_DispMaxEmployeCode, OnTimeOut_DispMaxEmployeCode);
}

function OnComplete_DispMaxEmployeCode(arg) {
    if (arg.m_RetVal > 0) {
        alert('Error in WebMethod');
    }
    else {
        SetInnerHtml("ctxt_last_facultyCode", arg.m_max_faculty_code);
       
    }
}
function OnError_DispMaxEmployeCode(arg) {
    alert("error : " + argmessage);
    //ClearDataAfterSave();
}
function OnTimeOut_DispMaxEmployeCode(arg) {
    alert("Time Out");
}
//---------------------------------------------------------------------------
function PopulateVisitingFacultyDetails() {
    try {
        DispMaxEmployeCode();
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_faculty_code = GetValueByCtrlName("ctxt_faculty_code") + "%";
        ctxt_faculty_short_name = GetValueByCtrlName("ctxt_faculty_short_name") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@P_College_Id,INT," + cntxt_college_id);
        m_sp_param.push("@P_Visit_Faculty_Code,VARCHAR," + ctxt_faculty_code);
        m_sp_param.push("@P_Visit_Faculty_Sh_Name,VARCHAR," + ctxt_faculty_short_name);

        DynamicHtmlTemplate_PopulateGrid("m_key_populate_visiting_faculty_details", m_sp_param, "Proc_Get_Visiting_Faculty_details");
    }
    catch (err) {
        alert('PopulateVisitingFacultyDetails() - Error In JScript');
    }
}
//--------------------------------------------------------------------------
//--------------------designation master--------------------------------------

function Populate_designation(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_desingation = GetValueByCtrlName("ctxt_desingation") + '%';


        var m_sp_param = new Array();
        m_sp_param.push("@p_designation,VARCHAR," + ctxt_desingation);


        DynamicHtmlTemplate_PopulateGrid("m_key_populate_designation", m_sp_param, "Proc_get_designation");
    }
    catch (err) {
        alert('Populate_designation() - Error In JScript');
    }
}
//---------------------------------------------------------------------------------

//--------------------department master--------------------------------------

function Populate_department(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_department = GetValueByCtrlName("ctxt_department") + '%';


        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_dept_name,VARCHAR," + ctxt_department);


        DynamicHtmlTemplate_PopulateGrid("m_key_populate_department", m_sp_param, "Proc_get_faculty_department");
    }
    catch (err) {
        alert('Populate_designation() - Error In JScript');
    }
}
//---------------------------------------------------------------------------------
function SaveData() {
    try {
        if (ValidateSave() == false) {
            return;
        }

        var m_HeaderArray = new Array();

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_faculty_code = GetValueByCtrlName("ctxt_faculty_code");
        ctxt_faculty_name = GetValueByCtrlName("ctxt_faculty_name");
        ctxt_faculty_short_name = GetValueByCtrlName("ctxt_faculty_short_name");
        cntxt_department_id = GetValueByCtrlName("cntxt_department_id");
        cntxt_designation_id = GetValueByCtrlName("cntxt_designation_id");
        cntxt_is_edit = GetValueByCtrlName("cntxt_is_edit");

        m_HeaderArray.push(GetFieldValArr('cntxt_college_id', cntxt_college_id));
        m_HeaderArray.push(GetFieldValArr('ctxt_faculty_code', ctxt_faculty_code)); 
        m_HeaderArray.push(GetFieldValArr('ctxt_faculty_name', ctxt_faculty_name));
        m_HeaderArray.push(GetFieldValArr('ctxt_faculty_short_name', ctxt_faculty_short_name));
        m_HeaderArray.push(GetFieldValArr('cntxt_department_id', cntxt_department_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_designation_id', cntxt_designation_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_is_edit', cntxt_is_edit));

        SetButtonBorder("cmd_save", "3px", "green");
        WebServiceAddVisitingFaculty.SaveData(m_HeaderArray, OnComplete_SaveData, OnError_SaveData, OnTimeOut_SaveData);

    }
    catch (err) {
        alert("SaveData() - JScript Error");
    } 
}

function OnComplete_SaveData(arg) {
    ShowMsgWnd(arg);
    ClearDataAfterSave();
    PopulateVisitingFacultyDetails();
}
function OnError_SaveData(arg) {
    alert("error : " + argmessage);
    //ClearDataAfterSave();
}
function OnTimeOut_SaveData(arg) {
    alert("Time Out");
}
//----------------------------------------------------------------------------------------------------


function ValidateSave() {
    try {

        if (GetValueByCtrlName('ctxt_faculty_code') == "") {
            ShowMsgWnd('Can not Save- Enter Faculty Code');
            return false;
        }
//        if (GetValueByCtrlName('div_textbox_faculty_code') == GetValueByCtrlName('ctxt_last_facultyCode')) {
//            ShowMsgWnd('Can not Save- Enter Faculty Code');
//            return false;
//        }
        if (GetValueByCtrlName('ctxt_faculty_name') == "") {
            ShowMsgWnd('Can not Save- Enter Faculty Name');
            return false;
        }
        if (GetValueByCtrlName('ctxt_faculty_short_name') == "") {
            ShowMsgWnd('Can not Save- Enter Faculty Short Name');
            return false;
        }

        return true;

    }
    catch (err) {
        alert('ValidateSave - Error In JScript');
        return false;
    }
}



function ClearDataAfterSave() {
    try {
        SetValue("ctxt_faculty_code", "");
        SetValue("ctxt_faculty_name", "");
        SetValue("ctxt_faculty_short_name", "");
        SetValue("ctxt_department", "");
        SetValue("ctxt_desingation", "");
        LockControl("ctxt_faculty_code", false);
        PopulateVisitingFacultyDetails();
        SetValue("cntxt_is_edit", "0");

    }
    catch (err) {
        alert("ClearDataAfterSave() - JScript Error");
    }
}

//-------------------------------
function Cancel() {
    try {
        ClearDataAfterSave();
    }
    catch (err) {
        alert("Cancle() - JScript Error");
    }
}

function SetEditMode() {
    LockControl('ctxt_faculty_code', true);
    SetValue("cntxt_is_edit", "1");
}