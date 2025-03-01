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
            event.preventDefault();
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
    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}

//------------------------------
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


function ExportMisMatchDoc() {
    try {
        m_fin_year_id = GetValueByCtrlName('cntxt_nFinYearId');
        m_branch_id = GetValueByCtrlName('cntxt_nBranchId');



        var m_sp_param = new Array();
        m_sp_param.push("@p_fin_year_id,INT," + m_fin_year_id);
        m_sp_param.push("@p_branch_id,INT," + m_branch_id);

        m_col_name = "doc_id|doc_date|doc_no|dr_amt|cr_amt|narr";
        m_field_name = "doc_id|doc_date|doc_no|dr_amt|cr_amt|narr";

        Jf_ExportToExcel("MisMatchDoc.xls", m_sp_param, "Proc_Mis_Match_Voucher_List", m_col_name, m_field_name, 0);

    }
    catch (err) {
        alert("ExportMisMatchDoc() - JScript Error");
    }
}

function ExportMisMatchLedger() {
    try {
        m_fin_year_id = GetValueByCtrlName('cntxt_nFinYearId');
        m_branch_id = GetValueByCtrlName('cntxt_nBranchId');



        var m_sp_param = new Array();
        m_sp_param.push("@p_fin_year_id,INT," + m_fin_year_id);
        m_sp_param.push("@p_branch_id,INT," + m_branch_id);

        m_col_name = "doc_id,doc_str_date,doc_no,ledger_id,ledger_name,amt,dr_cr_flag,is_error,is_branch,doc_flag";
        m_field_name = "doc_id,doc_str_date,doc_no,ledger_id,ledger_name,amt,dr_cr_flag,is_error,is_branch,doc_flag";

        Jf_ExportToExcel("MisMatchLedger.xls", m_sp_param, "Proc_Mis_Match_Ledger_Head_List", m_col_name, m_field_name, 0);

    }
    catch (err) {
        alert("ExportMisMatchLedger() - JScript Error");
    }
}

function ExportMisMatchHeader() {
    try {
        m_fin_year_id = GetValueByCtrlName('cntxt_nFinYearId');
        m_branch_id = GetValueByCtrlName('cntxt_nBranchId');



        var m_sp_param = new Array();
        m_sp_param.push("@p_fin_year_id,INT," + m_fin_year_id);
        m_sp_param.push("@p_branch_id,INT," + m_branch_id);

        m_col_name = "doc_id|doc_date|doc_str_date|doc_no|header_acc_id|header_acc_code|header_acc_name|line_no|max_line_no|cross_acc_id|cross_acc_code|cross_acc_name|is_error|doc_type";
        m_field_name = "doc_id|doc_date|doc_str_date|doc_no|header_acc_id|header_acc_code|header_acc_name|line_no|max_line_no|cross_acc_id|cross_acc_code|cross_acc_name|is_error|doc_type";

        Jf_ExportToExcel("MisMatchHeader.xls", m_sp_param, "Proc_Mis_Match_Header_Acc", m_col_name, m_field_name, 0);

    }
    catch (err) {
        alert("ExportMisMatchLedger() - JScript Error");
    }
}