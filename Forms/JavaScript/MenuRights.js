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

        //=======Populate User===========
        m_session_var_name = "S_POPULATE_USER";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_user", "m_grid_populate_user", "div_Select_User", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_user_Name,m_user_id");
        DynamicHtmlTemplate_SetControlName("ctxt_user_name,cntxt_back_office_user_id");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("PopulateMenu();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_user', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_user', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_user');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        //m_field_arr.push("App,Action,hidden_textbox,L,5px");
        m_field_arr.push("m_user_Name,User Name,read_only_textbox,L,25px");
        m_field_arr.push("m_password,Password,hidden_textbox,L,25px");
        m_field_arr.push("m_dept_id,Dept_id,hidden_textbox,L,15px");
        m_field_arr.push("m_dept_name,Department Name,hidden_textbox,L,10px");
        m_field_arr.push("m_is_active_value,Faculty Designation,hidden_textbox,L,15px");
        m_field_arr.push("m_active,Is User Active,hidden_textbox,L,10px");
        m_field_arr.push("m_user_id,User id,hidden_textbox,L,10px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);


        //=======Populate Menu===========
        m_session_var_name = "S_POPULATE_MENU";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_menu", "m_grid_populate_menu", "m_panel_menu_details", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("menu_id");
        DynamicHtmlTemplate_SetControlName("cntxt_menu_id");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(500);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("SetMenuRowEvent();");

        var m_field_arr = new Array();
        //m_field_arr.push("App,Select,read_only_textbox,L,5px");
        m_field_arr.push("menu_id,Menu Id,hidden_textbox,L,25px");
        m_field_arr.push("menu_name,Menu Name,read_only_textbox,L,50px");
        m_field_arr.push("parent_id,parent_id,hidden_textbox,L,10px");
        m_field_arr.push("APP,Select,read_only_textbox,C,8px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //=======================================================

        LoadMenu();

    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}

//---------------------------------------------------------------------------------
function PopulateUserDetails(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_user_name = GetValueByCtrlName("ctxt_user_name") +'%';

        var m_sp_param = new Array();
        m_sp_param.push("@P_College_Id,INT," + cntxt_college_id);
        m_sp_param.push("@p_User_Name,VARCHAR," + ctxt_user_name);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_user",
                                             m_sp_param,
                                             "Proc_Get_User_details",
                                             ctxt_user_name,
                                             0);
    }
    catch (err) {
        alert('PopulateUserDetails() - Error In JScript');
   
    }
} 
//---------------------------------------------------------------------------
function PopulateMenu() {
    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_back_office_user_id = GetValueByCtrlName("cntxt_back_office_user_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_user_id,INT," + cntxt_back_office_user_id);

        DynamicHtmlTemplate_PopulateGrid("m_key_populate_menu", m_sp_param, "Proc_Get_Std_Aff_User_Wise_Menu");
    }
    catch (err) {
        alert('PopulateMenu() - Error In JScript');
    }
}
//---------------------------------------------------------------------------------


function SetMenuRowEvent() {
    try {

        SetAllCheckBoxStatus("m_grid_populate_menu", "APP");
        AddCtrlEvent("m_grid_populate_menu", "APP", "onclick", "SetCheckBoxValue(this); UpdateData(this);");

    }
    catch (err) {
        alert("SetMenuRowEvent() - jScript Error");
    }
}

function UpdateData(p_curr_ctrl_ref) {
    try {

        //ShowWaitMsgWnd("Please Wait");
        m_session_var_name = "S_POPULATE_MENU";

        m_AllItemData = new Array;
        m_ItemRowKeyDataItem = new Array;

        m_grid_populate_menu = window.document.getElementById('m_grid_populate_menu');
        if (m_grid_populate_menu == null) {
            ShowMsgWnd("Error In Updateing - create Error");
            return;
        }
        nCurrIndex = GetCurrentRowIndex(p_curr_ctrl_ref);
        app_ref = ComposeHtmlCtrlRef('m_grid_populate_menu', 'APP', nCurrIndex);
        menuid_ref = ComposeHtmlCtrlRef('m_grid_populate_menu', 'menu_id', nCurrIndex);

        m_ItemRowKeyDataItem.push(menuid_ref.value);

        m_ColData = new Array;
        m_ColData.push(GetFieldValArr('APP', app_ref.value));


        m_AllItemData.push(m_ColData);

        WebServiceBackOfficeMenuRights.SaveMenuData(m_session_var_name, m_AllItemData, m_ItemRowKeyDataItem, OnComplete_UpdateData, OnError_UpdateData, OnTimeOut_UpdateData);

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


function SaveData() {
    try {

        var m_HeaderArray = new Array();

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_back_office_user_id = GetValueByCtrlName("cntxt_back_office_user_id");
        cntxt_module_id = GetValueByCtrlName("cntxt_module_id");
        ctxt_user_name = GetValueByCtrlName("ctxt_user_name");

        m_HeaderArray.push(GetFieldValArr('cntxt_college_id', cntxt_college_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_back_office_user_id', cntxt_back_office_user_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_module_id', cntxt_module_id));
        m_HeaderArray.push(GetFieldValArr('ctxt_user_name', ctxt_user_name));



        WebServiceBackOfficeMenuRights.SaveData(m_HeaderArray, OnComplete_SaveData, OnError_SaveData, OnTimeOut_SaveData);

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
//        ShowHidePanel('1');
//        SetValue("ctxt_batch", "");
//        SetValue("ctxt_course_name", "");
//        SetValue("ctxt_stream_name", "");
//        SetValue("cntxt_semester_no", "");
//        SetValue("cntxt_course_id", "0");
//        SetValue("cntxt_batch_id", "0");
//        SetValue("cntxt_stream_id", "0");
//        SetValue("cntxt_period_id", "0");
//        DynamicHtmlTemplate_DeleteAllControl('m_populate_period');
        //        DynamicHtmlTemplate_DeleteAllControl('m_populate_batch_wise_stream');
  
    }
    catch (err) {
        alert("ClearDataAfterSave() - JScript Error");
    }
}