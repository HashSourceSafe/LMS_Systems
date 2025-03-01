//-------------------------------------------------------------
function GenerateReport(p_ReportFileName, p_SpParam, p_FormulaList, p_SelectionFormula, p_FormatType) {
    try {
        WebServiceReport.SetReportParam(p_ReportFileName,
                                        p_SpParam,
                                        p_FormulaList,
                                        p_SelectionFormula,
                                        p_FormatType,
                                        OnComplete_GenerateReport,
                                        OnError_GenerateReport,
                                        OnTimeOut_GenerateReport);
    }
    catch (err) {
        alert("GenerateReport() - JScript Error");
    }
}
function OnComplete_GenerateReport(arg) {
    if (arg > 0) {
        alert('Error in Report - WebMethod');
    }
    else {
        m_Param = "location=0,menubar=0,resizable=0,status=0,titlebar=0,menubar=0,scrollbars=1";
        window.open("frmCrystalReportViewer.aspx", "_blank", m_Param);
    }
}
function OnError_GenerateReport(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_GenerateReport(arg) {
    alert("Time Out");
}

//-------------------------------------------------------------





function CreateParam(p_ParamName,p_Value,p_Dataype) {
    try {
        return p_ParamName + "~" + p_Value + "~" + p_Dataype;
    }
    catch (err) {
        alert("CreateParam() - JScript Error");
    }
}

function CreateFormula(p_FormulaName, p_Value) {
    try {
        return p_FormulaName + "~" + p_Value ;
    }
    catch (err) {
        alert("CreateFormula() - JScript Error");
    }
}

function GenerateReportMain(p_ReportFileName, p_SpParam, p_FormulaList, p_SelectionFormula, p_FormatType) {
    try {
        WebServiceReport.SetReportParamMain(p_ReportFileName,
                                        p_SpParam,
                                        p_FormulaList,
                                        p_SelectionFormula,
                                        p_FormatType,
                                        OnComplete_GenerateReportMain,
                                        OnError_GenerateReportMain,
                                        OnTimeOut_GenerateReportMain);
    }
    catch (err) {
        alert("GenerateReportMain() - JScript Error");
    }
}
function OnComplete_GenerateReportMain(arg) {
    if (arg > 0) {
        alert('Error in Report - WebMethod');
    }
    else {
        m_Param = "location=0,menubar=0,resizable=0,status=0,titlebar=0,menubar=0,scrollbars=1";
        window.open("frmCrystalReportViewer.aspx", "_self", m_Param);
    }
}
function OnError_GenerateReportMain(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_GenerateReportMain(arg) {
    alert("Time Out");
}




function GenerateReportMainNewWnd(p_ReportFileName, p_SpParam, p_FormulaList, p_SelectionFormula, p_FormatType) {
    try {
        WebServiceReport.SetReportParamMain(p_ReportFileName,
                                        p_SpParam,
                                        p_FormulaList,
                                        p_SelectionFormula,
                                        p_FormatType,
                                        OnComplete_GenerateReportMainNewWnd,
                                        OnError_GenerateReportMainNewWnd,
                                        OnTimeOut_GenerateReportMainNewWnd);
    }
    catch (err) {
        alert("GenerateReportMain() - JScript Error");
    }
}
function OnComplete_GenerateReportMainNewWnd(arg) {
    if (arg > 0) {
        alert('Error in Report - WebMethod');
    }
    else {
        m_Param = "location=0,menubar=0,resizable=0,status=0,titlebar=0,menubar=0,scrollbars=1";
        window.open("frmCrystalReportViewer.aspx", "_blank", m_Param);
    }
}
function OnError_GenerateReportMainNewWnd(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_GenerateReportMainNewWnd(arg) {
    alert("Time Out");
}
