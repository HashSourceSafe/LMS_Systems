
function RightMouseClick(event) {
    if (event.which == 3) {
        return false;
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
function Init() {
    debugger
    try {
        SetAutoCompleteOff();
        SetFocusOffByTagName("DIV");
        SetDateEventByTagName();


        //-------Department list details popup--------------
        m_session_var_name = "S_DEPT_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_dept", "m_grid_dept", "div_dept", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("dept_name");
        DynamicHtmlTemplate_SetControlName("ctxt_deptName");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_dept', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_dept', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_dept');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();

        m_field_arr.push("dept_name,Department,read_only_textbox,L,50px");
       
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //-----------------------------------------

        LoadMenu();



    }
    catch (err) {
        alert('Init() - Error In JScript');
    }
}



function SearchDepartment(event) {
    try {
        debugger
        DynamicHtmlTemplate_DeleteAllControl("m_key_dept");

        var unicode = event.keyCode ? event.keyCode : event.charCode;
        cntxt_nCollegeId = GetValueByCtrlName("cntxt_nCollegeId");
        m_dept_name = "%" + GetValueByCtrlName("ctxt_deptName") + "%";


        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_nCollegeId);
        m_sp_param.push("@p_dept_name,VARCHAR," + m_dept_name);
       
       


        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_dept",
                                             m_sp_param,
                                             "Proc_Get_All_Department_From_EMP_VIEW",
                                             m_dept_name,
                                             0, 'ERP');

    }
    catch (err) {
        alert('SearchExam() - Error In JScript');
    }
}


function PrintTrHtml() {
    try {
        cntxt_nCollegeId = GetValueByCtrlName("cntxt_nCollegeId");
        dtpFrom = $("#dtpFrom").val();
        dtpTo = $("#dtpTo").val();
        ctxt_deptName = GetValueByCtrlName("ctxt_deptName");
        cntxt_fromPercent = "0";  //GetValueByCtrlName("cntxt_fromPercent");
        cntxt_Topercent = "100"; //  GetValueByCtrlName("cntxt_Topercent");
        

        var m_ses_var_name = new Array();
        var m_ses_var_value = new Array();


       
        m_ses_var_name.push("S_COLLEGE_ID");
        m_ses_var_name.push("S_FROM_DATE");
        m_ses_var_name.push("S_TO_DATE");
        m_ses_var_name.push("S_DEPT_NAME");
        m_ses_var_name.push("S_ISSUM");
        m_ses_var_name.push("S_FROM_PERCENT");
        m_ses_var_name.push("S_TO_PERCENT");


        m_ses_var_value.push(cntxt_nCollegeId);
        m_ses_var_value.push(dtpFrom);
        m_ses_var_value.push(dtpTo);
        m_ses_var_value.push(ctxt_deptName);
        m_ses_var_value.push("4");
        m_ses_var_value.push(cntxt_fromPercent);
        m_ses_var_value.push(cntxt_Topercent);



        WebServiceMasters.CreateSessionVar(m_ses_var_name, m_ses_var_value,
                                                OnComplete_PrintTrHtml,
                                                OnError_PrintTrHtml,
                                                OnTimeOut_PrintTrHtml);


    }
    catch (err) {
        alert("PrintTrHtml()- Error In JScript");
    }
}
function OnComplete_PrintTrHtml(arg) {
    if (arg == 0) {
        //ShowWndInMiddle("frmDocumentViewer.aspx", 1366, 768);
        window.open("frmPrintFacultyWiseAttendance.aspx");
    }
    else {
        alert("Error In Form Load");
    }

}
function OnError_PrintTrHtml(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_PrintTrHtml(arg) {
    alert("Time Out");
}
//--------------------------------
function Reset() {
    SetValue("dtpFrom", "");
    SetValue("dtpTo", "");
    SetValue("ctxt_deptName", "");
    

}
function LoadBackOffMenu() {
    try {
        window.open("frmRoutineMasterPage.aspx", "_self");
    }
    catch (err) {
        alert('ExitWindow() - Error In JScript');
    }
}