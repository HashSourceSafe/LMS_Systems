
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

        m_today = GetDateToday();
        SetValue("dtp_from_date", GetFirstDateOfMonth(GetYear(m_today), GetMonth(m_today)));
        SetValue("dtp_to_date", GetLastDateOfMonth(GetYear(m_today), GetMonth(m_today)));

        LoadMenu();


    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}


function PrintFacultyAttdSumm() {
    
    try {
        if (GetRadioButStat("radio_pdf_xls_0") == true) {
            m_format = "PDF"
        }
        else if (GetRadioButStat("radio_pdf_xls_1") == true) {
            m_format = "XLS"
        }
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");
        ctxt_department_name = GetValueByCtrlName("ctxt_department_name")+"%";
        cntxt_from_val = GetValueByCtrlName("cntxt_from_val");
        cntxt_to_val = GetValueByCtrlName("cntxt_to_val");
        cntxt_sem_id = GetValueByCtrlName("cntxt_sem_id");
        cntxt_access_id = GetValueByCtrlName("cntxt_access_id");

        //======================================================================
        var m_SpParam = new Array;
        m_SpParam.push(CreateParam("@p_college_id", cntxt_college_id, "INT"))
        m_SpParam.push(CreateParam("@p_from_date", dtp_from_date, "DATETIME"))
        m_SpParam.push(CreateParam("@p_to_date", dtp_to_date, "DATETIME"))
        m_SpParam.push(CreateParam("@p_dept_name", ctxt_department_name, "TEXT"))
        m_SpParam.push(CreateParam("@p_is_summ", "1", "INT"))
        m_SpParam.push(CreateParam("@p_from_percent", cntxt_from_val, "INT"))
        m_SpParam.push(CreateParam("@p_to_percent", cntxt_to_val, "INT"))


        m_head1 = "Faculty Wise Attendance Summary From " + dtp_from_date + " To " + dtp_to_date;
        var m_FormulaList = new Array;
        m_FormulaList.push(CreateFormula("m_college", GetValueByCtrlName("ctxt_college_name")));
        m_FormulaList.push(CreateFormula("m_head1", m_head1));


        GenerateReport("rptFacultyWiseAttdSummary.rpt",
                        m_SpParam,
                        m_FormulaList,
                        null,
                        m_format);

    }
    catch (err) {
        alert('PrintRoutine() - Error In JScript');
    }
}


function PrintFacultyAttdMatrix() {

    try {
        if (GetRadioButStat("radio_pdf_xls_0") == true) {
            m_format = "PDF"
        }
        else if (GetRadioButStat("radio_pdf_xls_1") == true) {
            m_format = "XLS"
        }

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");
       // ctxt_department_name = GetValueByCtrlName("ctxt_department_name") + "%";
        cntxt_from_val = GetValueByCtrlName("cntxt_from_val");
        cntxt_to_val = GetValueByCtrlName("cntxt_to_val");
        cntxt_sem_id = GetValueByCtrlName("cntxt_sem_id");
        cntxt_access_id = GetValueByCtrlName("cntxt_access_id");

        //======================================================================
        var m_SpParam = new Array;
        m_SpParam.push(CreateParam("@p_college_id", cntxt_college_id, "INT"))
        m_SpParam.push(CreateParam("@p_from_date", dtp_from_date, "DATETIME"))
        m_SpParam.push(CreateParam("@p_to_date", dtp_to_date, "DATETIME"))
      //  m_SpParam.push(CreateParam("@p_dept_name", ctxt_department_name, "TEXT"))
        m_SpParam.push(CreateParam("@p_course_id", "0", "INT"))
        m_SpParam.push(CreateParam("@p_stream_id", "0", "INT"))
        m_SpParam.push(CreateParam("@p_sem_id", "0", "INT"))
       
     //   m_SpParam.push(CreateParam("@p_dept_id", "0", "INT"))
        m_SpParam.push(CreateParam("@p_faculty_code", "%", "TEXT"))



        m_head1 = "Faculty Wise Attendance Matrix From " + dtp_from_date + " To " + dtp_to_date;
        var m_FormulaList = new Array;
        m_FormulaList.push(CreateFormula("m_college", GetValueByCtrlName("ctxt_college_name")));
        m_FormulaList.push(CreateFormula("m_head1", m_head1));


        GenerateReport("rptFacultyWiseAttdPeriodMatrix.rpt",
                        m_SpParam,
                        m_FormulaList,
                        null,
                        m_format);

    }
    catch (err) {
        alert('PrintFacultyAttdMatrix() - Error In JScript');
    }
}