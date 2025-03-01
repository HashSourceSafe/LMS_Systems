var m_ctr_function;
var m_count;
var m_run_flag;
var m_college_array;


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
        SetNumericEventByTagName();

        //SendEmail();
    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}

function SendEmail() {
    GetActiveCollegeData();
}


//----------------------------------
function GetActiveCollegeData() {

    try {


        var m_sp_param = new Array();
        m_sp_param.push("@p_name,VARCHAR,%");

        var m_field = new Array();
        m_field.push("college_id");
        m_field.push("branch_id");
        m_field.push("college_name");
        m_field.push("save_file_as");

        WebServiceMasters.GetDataFromMasterDb("NA", m_field, m_sp_param, "Proc_Disp_Student_Admission_Active_College", 0,
                                   OnComplete_GetActiveCollegeData,
                                   OnError_GetActiveCollegeData,
                                   OnTimeOut_GetActiveCollegeData);
    }
    catch (err) {
        alert("GetActiveCollegeData() - JScript Error");
    }
}
function OnComplete_GetActiveCollegeData(arg) {
    DestroyWaitMsgWnd();
    if (arg.m_Count == -1) {
        alert('Error in WebMethod');
    }
    else {
        m_college_array = arg.m_List;
        m_count = 0;
        m_run_flag = 1;

        m_ctr_function = setInterval(function () { StartEmailProcess(); }, 1000);
    }
}
function OnError_GetActiveCollegeData(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_GetActiveCollegeData(arg) {
    alert("Time Out");
}
//----------------------------------



function StartEmailProcess() {
    if (m_run_flag == 0) {
        return;
    }

    if (m_count > m_college_array.length - 1) {
        SetValue("ctxt_message", "Sending Email....");
        clearInterval(m_ctr_function);
        StartSendingEmail();
        return;
    }


    SetValue("cntxt_college_id", m_college_array[m_count][0]);
    SetValue("cntxt_branch_id", m_college_array[m_count][1]);
    SetValue("ctxt_college_name", m_college_array[m_count][2]);
    SetValue("ctxt_save_file_as", m_college_array[m_count][3]);
    

    SetValue("ctxt_message", m_college_array[m_count][3]);

    m_run_flag = 0;
    PrintDeptFacDetails();
}



//---------------------------------------------------
function PrintDeptFacDetails() {
    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_branch_id");
        ctxt_college_name = GetValueByCtrlName("ctxt_college_name");
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");

        //======================================================================
        var m_SpParam = new Array;
        m_SpParam.push(CreateParam("@p_college_id", cntxt_college_id, "INT"))
        m_SpParam.push(CreateParam("@p_session_id", "0", "INT"))
        m_SpParam.push(CreateParam("@p_from_date", dtp_from_date, "DATETIME"))
        m_SpParam.push(CreateParam("@p_to_date", dtp_to_date, "DATETIME"))
        m_SpParam.push(CreateParam("@p_sem_no", "0", "INT"))
        m_SpParam.push(CreateParam("@p_sub_code", "%", "VARCHAR"))
        m_SpParam.push(CreateParam("@p_faculty_name", "%", "VARCHAR"))

        m_head1 = "Faculty Wise Attendance From " + dtp_from_date + " To " + dtp_to_date;
        var m_FormulaList = new Array;
        m_FormulaList.push(CreateFormula("m_college", GetValueByCtrlName("ctxt_college_name")));
        m_FormulaList.push(CreateFormula("m_head1", m_head1));


        ctxt_message=GetValueByCtrlName("ctxt_message") + '   Processing.........';
        SetValue("ctxt_message", ctxt_message);
        WebServiceReport.SetReportParam("frmDeptFacultyWiseDailyClassAttd.rpt",
                                        m_SpParam,
                                        m_FormulaList,
                                        null,
                                        "PDF",
                                        OnComplete_PrintDeptFacDetails,
                                        OnError_PrintDeptFacDetails,
                                        OnTimeOut_PrintDeptFacDetails);


    }
    catch (err) {
        alert('PrintDeptFacDetails() - Error In JScript');
    }
}
function OnComplete_PrintDeptFacDetails(arg) {
    if (arg > 0) {
        alert('Error in Report - WebMethod');
    }
    else {
        SaveReportInPdf();
    }
}
function OnError_PrintDeptFacDetails(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_PrintDeptFacDetails(arg) {
    alert("Time Out");
}
//---------------------------------------------------

//-------------------------------------------------------
function SaveReportInPdf() {
    try {
    ctxt_save_file_as = GetValueByCtrlName("ctxt_save_file_as");

    cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
    cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");
    ctxt_college_name = GetValueByCtrlName("ctxt_college_name");


    WebServiceReport.SaveReportInPdf(ctxt_save_file_as, 
                                     cntxt_college_id,
                                     cntxt_branch_id,
                                     ctxt_college_name,
                                     OnComplete_SendTestMail,
                                     OnError_SendTestMail,
                                     OnTimeOut_SendTestMail);
    }
    catch (err) {
        alert('SendTestMail() - Error In JScript');
    }
}
function OnComplete_SendTestMail(arg) {
    if (arg > 0) {
        alert('Error in Report - WebMethod');
    }
    else {
        m_count = m_count + 1;
        m_run_flag = 1;
    }
}
function OnError_SendTestMail(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SendTestMail(arg) {
    alert("Time Out");
}
//-------------------------------------------------------


//-------------------------------------------------------
function StartSendingEmail() {
    try {

        var m_file_name = new Array();
        for (i = 0; i < m_college_array.length; i++) {
            m_file_name.push(m_college_array[i][3]);
        }

        ctxt_email_to = GetValueByCtrlName("ctxt_email_to");
        ctxt_email_subject = GetValueByCtrlName("ctxt_email_subject");
        ctxt_email_body = GetValueByCtrlName("ctxt_email_body");



        WebServiceReport.SendEmail(m_file_name,
                                   ctxt_email_to,
                                   ctxt_email_subject,
                                   ctxt_email_body,
                                     OnComplete_StartSendingEmail,
                                     OnError_StartSendingEmail,
                                     OnTimeOut_StartSendingEmail);
    }
    catch (err) {
        alert('StartSendingEmail() - Error In JScript');
    }
}
function OnComplete_StartSendingEmail(arg) {
    SetValue("ctxt_message", arg);
}
function OnError_StartSendingEmail(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_StartSendingEmail(arg) {
    alert("Time Out");
}
//-------------------------------------------------------
