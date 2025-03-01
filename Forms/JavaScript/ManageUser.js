
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
        

        //=======populate Faculty Department ===========
        m_session_var_name = "S_POPULATE_DEPARTMENT";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_department", "m_grid_populate_department", "div_from_faculty_dept", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("dept_id,dept_name");
        DynamicHtmlTemplate_SetControlName("cntxt_faculty_dept_id,ctxt_faculty_dept");
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

        //=======Populate Visiting Faculty Details===========
        m_session_var_name = "S_POPULATE_USER_DETAILS";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_user_details", "m_grid_populate_user_details", "m_panel_user_details", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_user_Name,m_password,m_is_active_value,m_dept_id,m_dept_name");
        DynamicHtmlTemplate_SetControlName("ctxt_user_name,ctxt_password,cntxt_is_active,cntxt_faculty_dept_id,ctxt_faculty_dept");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("SetChackBox();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_user_details', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_user_details', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_user_details');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("App,Action,read_only_textbox,L,5px");
        m_field_arr.push("m_user_Name,User Name,read_only_textbox,L,25px");
        m_field_arr.push("m_password,Password,read_only_textbox,L,25px");
        m_field_arr.push("m_dept_id,Dept_id,hidden_textbox,L,15px");
        m_field_arr.push("m_dept_name,Department Name,read_only_textbox,L,10px");
        m_field_arr.push("m_is_active_value,Faculty Designation,hidden_textbox,L,15px");
        m_field_arr.push("m_active,Is User Active,read_only_textbox,L,10px");
        m_field_arr.push("m_user_id,User id,hidden_textbox,L,10px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //=======================================================

        LoadMenu();

    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}

//-----------------------------Populate Department-------------------------------
function PopulateFacultyDept(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_faculty_dept = GetValueByCtrlName("ctxt_faculty_dept") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_dept_name,VARCHAR," + ctxt_faculty_dept);


        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_department",
                                             m_sp_param,
                                             "Proc_Get_Faculty_Department",
                                             ctxt_faculty_dept,
                                             0);
    }
    catch (err) {
        alert('PopulateFacultyDept() - Error In JScript');
    }
}

//---------------------------------------------------------------------------------
function PopulateUserDetails() {
    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");

        var m_sp_param = new Array();
        m_sp_param.push("@P_College_Id,INT," + cntxt_college_id);

        DynamicHtmlTemplate_PopulateGrid("m_key_populate_user_details", m_sp_param, "Proc_Get_User_details");
    }
    catch (err) {
        alert('PopulateUserDetails() - Error In JScript');
    }
}
//---------------------------------------------------------------------------------
function SetChackBox() {
    try {
        document.getElementById("ctxt_user_name").disabled = true;
        cntxt_is_active = GetValueByCtrlName("cntxt_is_active");
        document.getElementById("chk_is_user_active").checked = true

        if (cntxt_is_active == 1) {

            document.getElementById("chk_is_user_active").checked = true
        }
        else {
            document.getElementById("chk_is_user_active").checked = false
        }

    }
    catch (err) {
        alert("SetChackBox() - jScript Error");
    }
}
//--------------------------------------------------------------------------------
function SaveData() {
    try {
        if (ValidateSave() == false) {
            return;
        }

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_user_name = GetValueByCtrlName("ctxt_user_name");
        ctxt_password = GetValueByCtrlName("ctxt_password");
        cntxt_is_active = GetValueByCtrlName("cntxt_is_active");
        cntxt_faculty_dept_id = GetValueByCtrlName("cntxt_faculty_dept_id");

        if (GetCheckBoxValue("chk_is_user_active") == true) {
            cntxt_is_active = 1;
        }
        else if (GetCheckBoxValue("chk_is_user_active") == false) {
            cntxt_is_active = 0;
        }

        var m_HeaderArray = new Array();
        m_HeaderArray.push(GetFieldValArr('cntxt_college_id', cntxt_college_id));
        m_HeaderArray.push(GetFieldValArr('ctxt_user_name', ctxt_user_name));
        m_HeaderArray.push(GetFieldValArr('ctxt_password', ctxt_password));
        m_HeaderArray.push(GetFieldValArr('cntxt_faculty_dept_id', cntxt_faculty_dept_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_is_active', cntxt_is_active));
        
        SetButtonBorder("cmd_save", "3px", "green");
        WebServiceManageUser.SaveData(m_HeaderArray, OnComplete_SaveData, OnError_SaveData, OnTimeOut_SaveData);
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
    //ClearDataAfterSave();
}
function OnTimeOut_SaveData(arg) {
    alert("Time Out");
}
//----------------------------------------------------------------------------------------------------


function ValidateSave() {
    try {

        if (GetValueByCtrlName('ctxt_user_name') == "") {
            ShowMsgWnd('Can not Save- Enter User');
            return false;
        }
        if (GetValueByCtrlName('ctxt_password') == "") {
            ShowMsgWnd('Can not Save- Enter Password');
            return false;
        }
        if (GetValueByCtrlName('cntxt_faculty_dept_id') == "0") {
            ShowMsgWnd('Can not Save- Select Department');
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
        document.getElementById("ctxt_user_name").disabled = false;
        SetValue("cntxt_faculty_dept_id", "0");
        SetValue("ctxt_faculty_dept", "");
        SetValue("ctxt_user_name", "");
        SetValue("ctxt_password", "");
        PopulateUserDetails();
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

