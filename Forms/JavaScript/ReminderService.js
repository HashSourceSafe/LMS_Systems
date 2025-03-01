function CheckKeyUp(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        m_curr_ctrl = document.activeElement;



        if (m_curr_ctrl != null && unicode == 9 && m_curr_ctrl.tagName != "DIV") {
            m_curr_ctrl.style.outline = "3px solid #77e5ff";
            m_curr_ctrl.focus();
        }

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
        if (unicode == 13 || unicode == 33 || unicode == 34 || unicode == 113) {
            if (m_curr_ctrl.id == "ctxt_mesg_body" || m_curr_ctrl.id == "ctxt_email_body") {

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
        m_ArrSes = new Array;

        m_session_var_name = "S_INBOX_LIST";
        m_ArrSes.push(m_session_var_name);

        m_session_var_name = "S_ACTIVITY_STAT_LIST";
        m_ArrSes.push(m_session_var_name);


        WebServiceMasters.RemoveSessionVar(m_ArrSes, OnCompleteExitWindow, OnErrorExitWindow, OnTimeOutExitWindow);
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

//----------------

function ShowHidePanel(p_flag) {
    if (p_flag == 1) {
        ShowHideControl('m_update_panel_inbox', '1');
        ShowHideControl('m_UpdatePanelCompose', '0');
        ShowHideControl('div_activity_update', '0');
        ShowHideControl('m_UpdatePanelActStat', '0');


        SetControlClass("cmd_inbox", "tab_selected");
        SetControlClass("cmd_compose", "tab_un_selected");
        SetControlClass("cmd_activity_stat", "tab_un_selected");
        SetControlClass("cmd_job_assigen_stat", "tab_un_selected");
        SetControlClass("cmd_act_statistics", "tab_un_selected");


        SetValue("cntxt_nActivityFlag", "0");
        RefreshInbox("1");
    }
    else if (p_flag == 2) {
        ShowHideControl('m_update_panel_inbox', '0');
        ShowHideControl('m_UpdatePanelCompose', '1');
        ShowHideControl('div_activity_update', '0');
        ShowHideControl('m_UpdatePanelActStat', '0');

        SetControlClass("cmd_inbox", "tab_un_selected");
        SetControlClass("cmd_compose", "tab_selected");
        SetControlClass("cmd_activity_stat", "tab_un_selected");
        SetControlClass("cmd_job_assigen_stat", "tab_un_selected");
        SetControlClass("cmd_act_statistics", "tab_un_selected");

        SetValue("cntxt_nActivityFlag", "0");
    }
    else if (p_flag == 3) {
        ShowHideControl('m_update_panel_inbox', '1');
        ShowHideControl('m_UpdatePanelCompose', '0');
        ShowHideControl('div_activity_update', '1');
        ShowHideControl('m_UpdatePanelActStat', '0');

        SetControlClass("cmd_inbox", "tab_un_selected");
        SetControlClass("cmd_compose", "tab_un_selected");
        SetControlClass("cmd_activity_stat", "tab_selected");
        SetControlClass("cmd_job_assigen_stat", "tab_un_selected");
        SetControlClass("cmd_act_statistics", "tab_un_selected");

        SetValue("cntxt_nActivityFlag", "2");
        RefreshInbox("2");
    }
    else if (p_flag == 4) {
        ShowHideControl('m_update_panel_inbox', '1');
        ShowHideControl('m_UpdatePanelCompose', '0');
        ShowHideControl('div_activity_update', '1');
        ShowHideControl('m_UpdatePanelActStat', '0');

        SetControlClass("cmd_inbox", "tab_un_selected");
        SetControlClass("cmd_compose", "tab_un_selected");
        SetControlClass("cmd_activity_stat", "tab_un_selected");
        SetControlClass("cmd_job_assigen_stat", "tab_selected");
        SetControlClass("cmd_act_statistics", "tab_un_selected");

        SetValue("cntxt_nActivityFlag", "3");
        RefreshInbox("3");
    }
    else if (p_flag == 5) {
        ShowHideControl('m_update_panel_inbox', '0');
        ShowHideControl('m_UpdatePanelCompose', '0');
        ShowHideControl('div_activity_update', '0');
        ShowHideControl('m_UpdatePanelActStat', '1');

        SetControlClass("cmd_inbox", "tab_un_selected");
        SetControlClass("cmd_compose", "tab_un_selected");
        SetControlClass("cmd_activity_stat", "tab_un_selected");
        SetControlClass("cmd_job_assigen_stat", "tab_un_selected");
        SetControlClass("cmd_act_statistics", "tab_selected");

        SetValue("cntxt_nActivityFlag", "0");
    }
}



function Init() {
    try {


        SetAutoCompleteOff();
        SetFocusOffByTagName("DIV");
        SetNull();

        //=======Inbox Listing===========
        m_session_var_name = "S_INBOX_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_inbox_list", "m_grid_inbox_list", "m_panel_inbox_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("message_id,status");
        DynamicHtmlTemplate_SetControlName("cntxt_nMessageId,cntxt_status");
        DynamicHtmlTemplate_AllowSelection("T");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("GetMessageBody();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_inbox_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_inbox_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("SetReadStatus();");



        var m_field_arr = new Array();
        m_field_arr.push("from_user_name,From,read_only_textbox,L,10px");
        m_field_arr.push("header,Subject,read_only_textbox,L,70px");
        m_field_arr.push("create_str_date,Received,read_only_textbox,L,10px");
        m_field_arr.push("remarks,remarks,read_only_textbox,L,40px");
        m_field_arr.push("message_id,message_id,hidden_textbox,R,10px");
        m_field_arr.push("status,status,hidden_textbox,R,10px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======User Name===========
        m_session_var_name = "NA";
        DynamicHtmlTemplate_AddKeyName("m_key_user_list", "m_grid_user_list", "div_combo_mail_to_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("SetUserWiseEvent();");



        var m_field_arr = new Array();
        m_field_arr.push("app,Select,read_only_textbox,L,3px");
        m_field_arr.push("user_full_name,User Name,read_only_textbox,L,30px");
        m_field_arr.push("user_key_name,User Id,read_only_textbox,L,30px");
        m_field_arr.push("branch_name,Branch,read_only_textbox,L,10px");
        m_field_arr.push("dept_name,Department,read_only_textbox,L,15px");
        m_field_arr.push("user_key_id,user_key_id,hidden_textbox,R,10px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Activity Stat Listing===========
        m_session_var_name = "S_ACTIVITY_STAT_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_activity_stat_list", "m_grid_activity_stat_list", "m_panel_activity_stat_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_activity_stat_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_activity_stat_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");



        var m_field_arr = new Array();
        m_field_arr.push("to_user_name,User,read_only_textbox,L,10px");
        m_field_arr.push("create_str_date,Date,read_only_textbox,L,8px");
        m_field_arr.push("header,Subject,read_only_textbox,L,30px");
        m_field_arr.push("view_day,View Date,read_only_textbox,L,15px");
        m_field_arr.push("action_day,Action Date,read_only_textbox,L,15px");
        m_field_arr.push("close_day,Close Date,read_only_textbox,L,15px");
        m_field_arr.push("remarks,remarks,read_only_textbox,L,15px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================



        ShowHidePanel('1');
    }
    catch (err) {
        alert('Init() - Error In JScript');
    }
}

function SetNull() {
    try {
        SetValue("cntxt_nMessageId", "0");
        SetValue("cntxt_status", "0");
        SetValue("cntxt_nMailToUserId", "0");

        SetValue("ctxt_search_name", "");
        SetValue("ctxt_mesg_body", "");

        SetValue("ctxt_search_user_name", "");
        SetValue("ctxt_mail_to", "");
        SetValue("ctxt_subject", "");
        SetValue("ctxt_email_body", "");

        SetValue("cntxt_nActivityFlag", "0");


    }
    catch (err) {
        alert('SetNull() - Error In JScript');
    }
}

function RefreshInbox(p_flag) {
    try {
        m_user_name = GetValueByCtrlName("ctxt_search_name") + "%";
        m_from_date = GetValueByCtrlName("dtp_search_from_date");
        m_to_date = GetValueByCtrlName("dtp_search_to_date");
        if (GetCheckBoxValue("chk_allow_date_search") == true) {
            m_is_date_filter = 1;
        }
        else {
            m_is_date_filter = 0;
        }


        var m_sp_param = new Array();
        m_sp_param.push("1,USERTYPEMAIN,1");
        m_sp_param.push("@p_sender_name,VARCHAR," + m_user_name);
        m_sp_param.push("@p_from_date,DATETIME," + m_from_date);
        m_sp_param.push("@p_to_date,DATETIME," + m_to_date);
        m_sp_param.push("@p_filter_on_date,INT," + m_is_date_filter);
        if (p_flag == "1") {
            m_sp_param.push("@p_status,INT,-1");
        }
        else if (p_flag == "2") {
            m_sp_param.push("@p_status,INT,1");
        }
        else if (p_flag == "3") {
            m_sp_param.push("@p_status,INT,2");
        }

        DynamicHtmlTemplate_PopulateGrid_FromMasterDb("m_key_inbox_list", m_sp_param, "Proc_Get_User_Inbox");


    }
    catch (err) {
        alert('RefreshInbox() - Error In JScript');
    }
}


function SetReadStatus() {
    try {
        m_grid_ctrl_ref = window.document.getElementById("m_grid_inbox_list");
        if (m_grid_ctrl_ref == null) {
            alert("Grid Error: m_grid_inbox_list");
            return;
        }

        for (iRow = 0; iRow < m_grid_ctrl_ref.rows.length; iRow++) {
            m_ctrl_stat_ref = ComposeHtmlCtrlRef("m_grid_inbox_list", "status", iRow);
            m_ctrl_from_user_name_ref = ComposeHtmlCtrlRef("m_grid_inbox_list", "from_user_name", iRow);
            m_ctrl_header_ref = ComposeHtmlCtrlRef("m_grid_inbox_list", "header", iRow);
            m_ctrl_create_str_date_ref = ComposeHtmlCtrlRef("m_grid_inbox_list", "create_str_date", iRow);

            if (m_ctrl_stat_ref != null) {
                if (m_ctrl_stat_ref.value == 0) {
                    m_ctrl_from_user_name_ref.style.fontWeight = 'bold';
                    m_ctrl_header_ref.style.fontWeight = 'bold';
                    m_ctrl_create_str_date_ref.style.fontWeight = 'bold';
                }
                else {
                    m_ctrl_from_user_name_ref.style.fontWeight = 'normal';
                    m_ctrl_header_ref.style.fontWeight = 'normal';
                    m_ctrl_create_str_date_ref.style.fontWeight = 'normal';
                }
            }
        }

    }
    catch (err) {
        alert('SetReadStatus() - Error In JScript');
    }
}


//--------------------------------------
function GetMessageBody() {
    try {

        m_curr_row = GetCurrentRowIndex(document.activeElement);
        if (m_curr_row < 0) {
            ShowMsgWnd("Inval Selection");
            return;
        }

        m_ctrl_stat_ref = ComposeHtmlCtrlRef("m_grid_inbox_list", "status", m_curr_row);
        m_ctrl_stat_ref.value = 1;


        m_mesg_id = GetValueByCtrlName("cntxt_nMessageId");

        WebServiceReminderService.GetMessageBody(m_mesg_id,
                                           OnComplete_GetMessageBody,
                                           OnError_GetMessageBody,
                                           OnTimeOut_GetMessageBody);

    }
    catch (err) {
        alert('GetMessageBody() - Error In JScript');
    }
}
function OnComplete_GetMessageBody(arg) {
    SetValue("ctxt_mesg_body", arg);
    SetReadStatus();
}
function OnError_GetMessageBody(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_GetMessageBody(arg) {
    alert("Time Out");
}

//--------------------------------------


function ShowUser(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;
        if (unicode == "0") {
            if (window.document.getElementById("m_grid_user_list") != null) {
                DynamicHtmlTemplate_DeleteAllControl('m_key_user_list');
                return;
            }
        }

        
        var m_sp_param = new Array();
        m_user_name = GetValueByCtrlName("ctxt_search_user_name") + "%";

        m_sp_param.push("@p_user_name,VARCHAR," + m_user_name);
        m_sp_param.push("@p_user_code,VARCHAR,%");
        m_sp_param.push("@p_dept_id,INT,0");
        m_sp_param.push("@p_branch_id,INT,0");
        m_sp_param.push("@p_is_active,INT,0");

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,"m_key_user_list",m_sp_param,"Proc_Get_User_Details",m_user_name,0,"MASTER");

    }
    catch (err) {
        alert("ShowUser() - JScript error");
    }
}

function Validate() {
    try {
        m_mail_to_name = GetValueByCtrlName("ctxt_mail_to");
        m_subject = GetValueByCtrlName("ctxt_subject");
        m_body = GetValueByCtrlName("ctxt_email_body");

        if (m_mail_to_name.length == 0) {
            ShowMsgWnd("Please select user.");
            return false;
        }

        if (m_subject.length == 0) {
            ShowMsgWnd("Please enter subject.");
            return false;
        }

        if (m_body.length == 0) {
            ShowMsgWnd("Please enter message details.");
            return false;
        }
    }
    catch (err) {
        alert('Validate() - Error In JScript');
        return false;    
    }
}

//--------------------------------------
function SaveUserMessage() {
    try {


        if (Validate() == false) {
            return;
        }
        m_mail_to_id = GetValueByCtrlName("cntxt_nMailToUserId");
        m_subject = GetValueByCtrlName("ctxt_subject");
        m_body = GetValueByCtrlName("ctxt_email_body");
        if (GetRadioButtonValue("m_mesg_radio_0") == true) {
            m_mesg_type = "0";
        }
        else {
            m_mesg_type = "1";
        }



        WebServiceReminderService.SaveUserMessage(m_mail_to_id,
                                           m_subject,
                                           m_body,
                                           m_mesg_type,
                                           OnComplete_SaveUserMessage,
                                           OnError_SaveUserMessage,
                                           OnTimeOut_SaveUserMessage);

    }
    catch (err) {
        alert('GetMessageBody() - Error In JScript');
    }
}
function OnComplete_SaveUserMessage(arg) {
    if (arg == 0) {
        ShowMsgWnd("Message Send Successfully");
        SetNull();
    }
    else {
        ShowMsgWnd("Error In Message Sending");
    }
}
function OnError_SaveUserMessage(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SaveUserMessage(arg) {
    alert("Time Out");
}

//--------------------------------------


function SetUserWiseEvent() {
    try {
        SetAllCheckBoxStatus("m_grid_user_list", "app");
        AddCtrlEvent("m_grid_user_list", "app", "onclick", "SetCheckBoxValue(this); GetUserSelectStat();");
        CheckUserSelectStat();

    }
    catch (err) {
        alert('SetUserWiseEvent() - Error In JScript');
    }
}

function GetUserSelectStat() {
    try {

        m_value = GetIdFromGrid("m_grid_user_list", "app", "user_key_name");
        SetValue("ctxt_mail_to", m_value);

        m_value = GetIdFromGrid("m_grid_user_list", "app", "user_key_id");
        SetValue("cntxt_nMailToUserId", m_value);
    }
    catch (err) {
        alert('GetUserSelectStat() - Error In JScript');
    }
}


function CheckUserSelectStat() {
    try {
        m_grid_ctrl_ref = window.document.getElementById("m_grid_user_list");
        if (m_grid_ctrl_ref == null) {
            alert("Grid Error: m_grid_user_list");
            return;
        }

        m_mail_to = GetValueByCtrlName("ctxt_mail_to");

        for (iRow = 0; iRow < m_grid_ctrl_ref.rows.length; iRow++) {
            m_ctrl_app_ref = ComposeHtmlCtrlRef("m_grid_user_list", "app", iRow);
            m_ctrl_user_key_name_ref = ComposeHtmlCtrlRef("m_grid_user_list", "user_key_name", iRow);

            if (m_ctrl_user_key_name_ref != null) {
                m_user_id = m_ctrl_user_key_name_ref.value;
                nIndex = m_mail_to.indexOf(m_user_id);

                if (nIndex > -1) {
                    SetCheckBoxValue(m_ctrl_app_ref);
                }
                else {
                }
            }
        }

    }
    catch (err) {
        alert('CheckUserSelectStat() - Error In JScript');
    }
}


//---------------------------------
function SaveActivityStatus() {
    try {
        m_mesg_id = GetValueByCtrlName("cntxt_nMessageId");
        m_activity_flag = GetValueByCtrlName("cntxt_nActivityFlag");
        m_remarks = GetValueByCtrlName("ctxt_activity_remarks");

        if (parseFloat(m_mesg_id) == 0) {
            ShowMsgWnd("Select Message");
            return;
        }

        if (m_activity_flag == "2" && m_remarks.length==0) {
            ShowMsgWnd("Enter Remarks");
            return;
        }

        WebServiceReminderService.SaveActivityStatus(m_mesg_id,
                                                     m_activity_flag,
                                                     m_remarks,
                                                     OnComplete_SaveActivityStatus,
                                                     OnError_SaveActivityStatus,
                                                     OnTimeOut_SaveActivityStatus);
    }
    catch (err) {
        alert('SaveActivityStatus() - Error In JScript');
    }
}
function OnComplete_SaveActivityStatus(arg) {
    if(arg==0){
        ShowMsgWnd("Data Saved Successfully.");
        SetValue("cntxt_nMessageId","0");
        SetValue("ctxt_activity_remarks","");
        SetValue("ctxt_mesg_body","");
    }
    else{
        ShowMsgWnd("Error In Saving");
    }
}
function OnError_SaveActivityStatus(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SaveActivityStatus(arg) {
    alert("Time Out");
}

//---------------------------------


function ShowActivityStat() {
    try {
        m_user_name = GetValueByCtrlName("ctxt_search_name") + "%";
        m_from_date = GetValueByCtrlName("dtp_search_from_date");
        m_to_date = GetValueByCtrlName("dtp_search_to_date");
        m_branch_name = GetValueByCtrlName("ctxt_stat_branch") + "%";
        m_dept_name = GetValueByCtrlName("ctxt_stat_dept") + "%";


        var m_sp_param = new Array();
        m_sp_param.push("1,USERTYPEMAIN,1");
        m_sp_param.push("@p_from_date,DATETIME," + m_from_date);
        m_sp_param.push("@p_to_date,DATETIME," + m_to_date);
        m_sp_param.push("@p_to_user_name,VARCHAR," + m_user_name);
        m_sp_param.push("@p_branch_name,VARCHAR," + m_branch_name);
        m_sp_param.push("@p_dept_name,VARCHAR," + m_dept_name);

        DynamicHtmlTemplate_PopulateGrid_FromMasterDb("m_key_activity_stat_list", m_sp_param, "Proc_Get_User_Activity_Stat");

    }
    catch (err) {
        ShowActivityStat("Error In Saving");
    }
}