var radio_theo_prac;
var chk_is_sub_active;

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


        //=======populate Course ===========
        m_session_var_name = "S_POPULATE_COURSE";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_course", "m_grid_populate_course", "div_course_name", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("CourseId,CourseName");
        DynamicHtmlTemplate_SetControlName("cntxt_course_id,ctxt_course_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("DisplaySubjectDet();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_course', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_course', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_course');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");
        
        var m_field_arr = new Array();
        m_field_arr.push("CourseId,CourseId,hidden_textbox,R,10px");
        m_field_arr.push("CourseName,Course Name,read_only_textbox,L,40px");
                
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================


        //=======Populate Stream===========
        m_session_var_name = "S_POPULATE_STREAM";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_stream", "m_grid_populate_stream", "div_stream_name", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("STD_STREAM_MASTER_nID,STD_STREAM_MASTER_sNAME"); 
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

         //=======SUBJECT_DETAILS===========
        m_session_var_name = "S_SEARCH_SUBJECT_DETAILS";
        DynamicHtmlTemplate_AddKeyName("m_key_search_subject", "m_grid_search_subj", "m_panel_subject_det_search_window", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("SubjectId,SubjectName,SubjectShortName,SubjectCode,CourseId,CourseName,SubjectIsTheory,IsActive,StreamName,SemNo,StreamId");
        DynamicHtmlTemplate_SetControlName("cntxt_subject_id,ctxt_subject_name,ctxt_sub_short_name,ctxt_subject_code,cntxt_course_id,ctxt_course_name,cntxt_is_theory,cntxt_is_active,ctxt_stream_name,cntxt_sem,cntxt_stream_id");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("TT");
        DynamicHtmlTemplate_SetEventFunction("SetRadioButton();SetChackBox();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_subject', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_subject', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_subject');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

       
        var m_field_arr = new Array();
        m_field_arr.push("SubjectId,SubjectId,hidden_textbox,L,30px");
        m_field_arr.push("SubjectName,SUBJECT NAME,read_only_textbox,L,45px");
        m_field_arr.push("SubjectShortName,SUBJECT SHORT NAME,read_only_textbox,L,45px");
        m_field_arr.push("SubjectCode,SUBJECT CODE,read_only_textbox,L,10px");
        m_field_arr.push("SubjectIsTheory,SubjectIsTheory,hidden_textbox,L,10px");
        m_field_arr.push("SubjectIsTheoryDes,IS THEORY,read_only_textbox,L,12px");
        m_field_arr.push("CourseId,CourseId,hidden_textbox,L,30px");
        m_field_arr.push("CourseName,COURSE NAME,read_only_textbox,L,28px");
        m_field_arr.push("StreamName,STREAM NAME,read_only_textbox,L,28px");
        m_field_arr.push("SemNo,SEM,read_only_textbox,L,5px");


        m_field_arr.push("IsActive,select,hidden_textbox,L,16px");
        m_field_arr.push("StreamId,StreamId,hidden_textbox,L,16px");



        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //====================================================


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

function DisplaySubjectDet() {
    try {
        //var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_subject_code = GetValueByCtrlName("ctxt_subject_code") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_Sub_code,VARCHAR," + ctxt_subject_code);


        DynamicHtmlTemplate_PopulateGrid("m_key_search_subject", m_sp_param, "Proc_Get_Subject_details");
    }
    catch (err) {
        alert('DisplaySubjectDet() - Error In JScript');
    }
}

function SetRadioButton() {
    try {

        cntxt_is_theory = GetValueByCtrlName("cntxt_is_theory");

        document.getElementById("radio_theo_prac_0").checked = true;
        document.getElementById("radio_theo_prac_1").checked = false;
        document.getElementById("radio_theo_prac_2").checked = false;
        document.getElementById("radio_theo_prac_3").checked = false;
        document.getElementById("radio_theo_prac_4").checked = false;



        if (cntxt_is_theory == 0) { //Lab
            document.getElementById("radio_theo_prac_0").checked = false;
            document.getElementById("radio_theo_prac_1").checked = true;
            document.getElementById("radio_theo_prac_2").checked = false;
            document.getElementById("radio_theo_prac_3").checked = false;
            document.getElementById("radio_theo_prac_4").checked = false;
        }
        else if (cntxt_is_theory == 1) { //Lec
            document.getElementById("radio_theo_prac_0").checked = true;
            document.getElementById("radio_theo_prac_1").checked = false;
            document.getElementById("radio_theo_prac_2").checked = false;
            document.getElementById("radio_theo_prac_3").checked = false;
            document.getElementById("radio_theo_prac_4").checked = false;
        }
        else if (cntxt_is_theory == 2) { //Tui
            document.getElementById("radio_theo_prac_0").checked = false;
            document.getElementById("radio_theo_prac_1").checked = false;
            document.getElementById("radio_theo_prac_2").checked = true;
            document.getElementById("radio_theo_prac_3").checked = false;
            document.getElementById("radio_theo_prac_4").checked = false;
        }
        else if (cntxt_is_theory == 3) { //Seminar
            document.getElementById("radio_theo_prac_0").checked = false;
            document.getElementById("radio_theo_prac_1").checked = false;
            document.getElementById("radio_theo_prac_2").checked = false;
            document.getElementById("radio_theo_prac_3").checked = true;
            document.getElementById("radio_theo_prac_4").checked = false;
        }
        else if (cntxt_is_theory == 4) { //Project
            document.getElementById("radio_theo_prac_0").checked = false;
            document.getElementById("radio_theo_prac_1").checked = false;
            document.getElementById("radio_theo_prac_2").checked = false;
            document.getElementById("radio_theo_prac_3").checked = false;
            document.getElementById("radio_theo_prac_4").checked = true;
        }


    }
    catch (err) {
        alert("SetChackRedio() - jScript Error");
    }
}
function SetChackBox() {
    try {

        cntxt_is_active = GetValueByCtrlName("cntxt_is_active");
        document.getElementById("chk_is_sub_active").checked = true

        if (cntxt_is_active == 1) {

            document.getElementById("chk_is_sub_active").checked = true
        }
        else {
            document.getElementById("chk_is_sub_active").checked = false
        }

    }
    catch (err) {
        alert("SetChackRedio() - jScript Error");
    }
}

function ValidateSave() {
    try {
        if (GetValueByCtrlName('ctxt_subject_code') == "") {
            ShowMsgWnd('Enter Subject Code');
            return false;
        }

        if (GetValueByCtrlName('ctxt_subject_name') == "") {
            ShowMsgWnd('Enter Subject Name');
            return false;
        }

        if (GetValueByCtrlName('ctxt_sub_short_name') == "") {
            ShowMsgWnd('Enter Subject Short Name');
            return false;
        }

        if (GetValueByCtrlName('ctxt_course_name') == "") {
            SetValue("cntxt_course_id", "0");
            var strconfirm = confirm("This Subject will be, Under The Common Group");
            if (strconfirm == true) {
                return true;
            }
            else {
                return false;
            }
        }

        if (GetValueByCtrlName('ctxt_stream_name') == "") {
            SetValue("cntxt_stream_id", "0");
            var strconfirm = confirm("This Subject will be, Under The Common Stream");
            if (strconfirm == true) {
                return true;
            }
            else {
                return false;
            }
        }

        cntxt_sem = parseFloat(GetValueByCtrlName('cntxt_sem'));
        if (cntxt_sem < 0) {
            alert("Enter Semester [0 - 8]");
            return false;
        }
        if (cntxt_sem > 10) {
            alert("Enter Semester [0 - 8]");
            return false;
        }

        if (cntxt_sem==0) {
            var strconfirm = confirm("This Subject will be, Under The Common Semester");
            if (strconfirm == true) {
                return true;
            }
            else {
                return false;
            }
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
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        ctxt_subject_name = GetValueByCtrlName("ctxt_subject_name");
        ctxt_sub_short_name = GetValueByCtrlName("ctxt_sub_short_name");
        ctxt_subject_code = GetValueByCtrlName("ctxt_subject_code");

        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_sem = GetValueByCtrlName("cntxt_sem");


        if (GetRadioButStat("radio_theo_prac_0") == true) { //Theory
            radio_theo_prac = 1;
        }
        else if (GetRadioButStat("radio_theo_prac_1") == true) { //Lab

            radio_theo_prac = 0;
        }
        else if (GetRadioButStat("radio_theo_prac_2") == true) { //Tutorial

            radio_theo_prac = 2;
        }
        else if (GetRadioButStat("radio_theo_prac_3") == true) { //Seminar

            radio_theo_prac = 3;
        }
        else if (GetRadioButStat("radio_theo_prac_4") == true) { //Project

            radio_theo_prac = 4;
        }


        UnitFactor = 0;
        MaxScore = 0;
        CreditPoint = 0;
        if (GetCheckBoxValue("chk_is_sub_active") == true) {
            chk_is_sub_active = 1;
        }
        else if (GetCheckBoxValue("chk_is_sub_active") == false) {
            chk_is_sub_active = 0;
        }

        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");

        m_HeaderArray.push(GetFieldValArr('cntxt_subject_id', cntxt_subject_id));
        m_HeaderArray.push(GetFieldValArr('ctxt_subject_name', ctxt_subject_name));
        m_HeaderArray.push(GetFieldValArr('ctxt_sub_short_name', ctxt_sub_short_name));
        m_HeaderArray.push(GetFieldValArr('ctxt_subject_code', ctxt_subject_code));
        m_HeaderArray.push(GetFieldValArr('radio_theo_prac', radio_theo_prac));
        m_HeaderArray.push(GetFieldValArr('UnitFactor', UnitFactor));
        m_HeaderArray.push(GetFieldValArr('MaxScore', MaxScore));
        m_HeaderArray.push(GetFieldValArr('CreditPoint', CreditPoint));
        m_HeaderArray.push(GetFieldValArr('chk_is_sub_active', chk_is_sub_active));
        m_HeaderArray.push(GetFieldValArr('cntxt_course_id', cntxt_course_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_stream_id', cntxt_stream_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_sem', cntxt_sem));


        //SetButtonBorder("cmd_save", "3px", "green");
        WebServiceSubjectMaster.SaveData(m_HeaderArray, OnComplete_SaveData, OnError_SaveData, OnTimeOut_SaveData);

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
        SetValue("cntxt_subject_id", "0");
        SetValue("ctxt_subject_name", "");
        SetValue("ctxt_sub_short_name", "");
        SetValue("ctxt_subject_code", "");
        SetValue("ctxt_search_subject_code", "");
        SetValue("ctxt_search_subject_name", "");

        DisplaySubjectDet();
    }
    catch (err) {
        alert("ClearDataAfterSave() - JScript Error");
    }
}

function Cancel() {
    try {
        SetValue("ctxt_course_name", "");
        SetValue("cntxt_course_id", "0");

        SetValue("ctxt_stream_name", "0");
        SetValue("cntxt_stream_id", "0");

        SetValue("cntxt_sem", "0");


        DynamicHtmlTemplate_DeleteAllControl('m_key_search_subject');
        ClearDataAfterSave();
    }
    catch (err) {
        alert("Cancel() - JScript Error");
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


