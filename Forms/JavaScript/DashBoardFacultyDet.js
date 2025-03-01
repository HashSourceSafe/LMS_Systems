
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

        //=======Faculty WISE SUMM SCREEN===========
        m_session_var_name = "S_SEARCH_FACULTY_SUMMARY_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_search_faculty_summary_list", "m_grid_search_faculty_summary_list", "m_panel_main_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_faculty_summary_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_faculty_summary_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");


        var m_field_arr = new Array();
        m_field_arr.push("fac_dept,Department,read_only_textbox,L,20px");
        m_field_arr.push("fac_code,Code,read_only_textbox,L,15px");
        m_field_arr.push("fac_name,Name,read_only_textbox,L,30px");
        m_field_arr.push("class_count,Sch. Class,read_only_textbox,L,12px");
        m_field_arr.push("attd_given,Attd Given,read_only_textbox,L,12px");
        m_field_arr.push("attd_pending,Pending,read_only_textbox,L,12px");
        m_field_arr.push("attd_enter%,Attd Entered(%),read_only_textbox,L,12px");
        m_field_arr.push("present%,Std. Present(%),read_only_textbox,L,12px");
        m_field_arr.push("absent%,Std. Absent(%),read_only_textbox,L,12px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //====================================================

        //=======Course+Faculty+Subject Wise Summary===========
        m_session_var_name = "S_SEARCH_COURSE_SUMMARY_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_search_course_summary_list", "m_grid_search_course_summary_list", "m_panel_main_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_course_summary_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_course_summary_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");


        var m_field_arr = new Array();
        m_field_arr.push("fac_dept,Department,read_only_textbox,L,10px");
        m_field_arr.push("fac_code,Code,read_only_textbox,L,10px");
        m_field_arr.push("fac_name,Name,read_only_textbox,L,20px");
        m_field_arr.push("sub_name,Subject,read_only_textbox,L,25px");
        m_field_arr.push("class_count,Sch. Class,read_only_textbox,L,10px");
        m_field_arr.push("attd_given,Attd Given,read_only_textbox,L,10px");
        m_field_arr.push("attd_pending,Pending,read_only_textbox,L,10px");
        m_field_arr.push("attd_enter%,Attd Entered(%),read_only_textbox,L,10px");
        m_field_arr.push("present%,Std. Present(%),read_only_textbox,L,10px");
        m_field_arr.push("absent%,Std. Absent(%),read_only_textbox,L,10px");
        m_field_arr.push("course_name,Course,read_only_textbox,L,10px");
        m_field_arr.push("stream_name,Stream,read_only_textbox,L,10px");
        m_field_arr.push("sem_no,Sem,read_only_textbox,L,10px");
        m_field_arr.push("sec_name,Sec,read_only_textbox,L,10px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //====================================================

        //=======Faculty+Subject Wise Summary===========
        m_session_var_name = "S_SEARCH_FACULTY_SUB_SUMMARY_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_search_faculty_sub_summary_list", "m_grid_search_faculty_sub_summary_list", "m_panel_main_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_faculty_sub_summary_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_faculty_sub_summary_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");


        var m_field_arr = new Array();
        m_field_arr.push("fac_dept,Department,read_only_textbox,L,10px");
        m_field_arr.push("fac_code,Code,read_only_textbox,L,10px");
        m_field_arr.push("fac_name,Name,read_only_textbox,L,25px");
        m_field_arr.push("sub_name,Subject,read_only_textbox,L,40px");
        m_field_arr.push("class_count,Sch. Class,read_only_textbox,L,10px");
        m_field_arr.push("attd_given,Attd Given,read_only_textbox,L,10px");
        m_field_arr.push("attd_pending,Pending,read_only_textbox,L,10px");
        m_field_arr.push("attd_enter%,Attd Entered(%),read_only_textbox,L,10px");
        m_field_arr.push("present%,Std. Present(%),read_only_textbox,L,10px");
        m_field_arr.push("absent%,Std. Absent(%),read_only_textbox,L,10px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //====================================================

        //=======Faculty dept Summary===========
        m_session_var_name = "S_SEARCH_FACULTY_DEPT_SUMMARY_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_search_faculty_dept_summary_list", "m_grid_search_faculty_dept_summary_list", "m_panel_main_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_faculty_dept_summary_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_faculty_dept_summary_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");


        var m_field_arr = new Array();
        m_field_arr.push("fac_dept,Department,read_only_textbox,L,20px");
        m_field_arr.push("class_count,Sch. Class,read_only_textbox,L,15px");
        m_field_arr.push("attd_given,Attd Given,read_only_textbox,L,15px");
        m_field_arr.push("attd_pending,Pending,read_only_textbox,L,15px");
        m_field_arr.push("attd_enter%,Attd Entered(%),read_only_textbox,L,15px");
        m_field_arr.push("present%,Std. Present(%),read_only_textbox,L,15px");
        m_field_arr.push("absent%,Std. Absent(%),read_only_textbox,L,15px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //====================================================

        //=======Faculty Wise Det===========
        m_session_var_name = "S_SEARCH_FACULTY_DETAIL_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_search_faculty_detail_list", "m_grid_search_faculty_detail_list", "m_panel_main_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_faculty_detail_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_faculty_detail_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");


        var m_field_arr = new Array();
        m_field_arr.push("str_dt,Date,read_only_textbox,L,10px");
        m_field_arr.push("fac_dept,Department,read_only_textbox,L,10px");
        m_field_arr.push("fac_code,Code,read_only_textbox,L,10px");
        m_field_arr.push("fac_name,Name,read_only_textbox,L,20px");
        m_field_arr.push("sub_name,Subject,read_only_textbox,L,25px");
        m_field_arr.push("remarks,Remarks,read_only_textbox,L,10px");
        m_field_arr.push("std_count,Std. Nos,read_only_textbox,L,10px");
        m_field_arr.push("present,Std. Present,read_only_textbox,L,10px");
        m_field_arr.push("present%,Std. Present(%),read_only_textbox,L,10px");
        m_field_arr.push("course_name,Course,read_only_textbox,L,10px");
        m_field_arr.push("stream_name,Stream,read_only_textbox,L,10px");
        m_field_arr.push("sem_no,Sem,read_only_textbox,L,10px");
        m_field_arr.push("sec_name,Sec,read_only_textbox,L,10px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //====================================================


        SetReportType();
        DisplayData('0');

        disp_type = GetValueByCtrlName("disp_type");
        if (disp_type != "MNG") {
            LoadMenu();
        }



    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}

function Refresh() {
    DisplayData('0');
}




function SetReportType() {

    LockControl("ctxt_dept_name", false);
    LockControl("ctxt_subject", false);
    LockControl("ctxt_faculty", false);
    LockControl("cntxt_from_val", false);
    LockControl("cntxt_to_val", false);

    LockControl("ctxt_course", false);
    LockControl("ctxt_stream", false);
    LockControl("ctxt_dept_name", false);
    LockControl("cntxt_from_val", false);
    LockControl("cntxt_to_val", false);
    
    LockControl("cmd_refresh", false);
    

    if (GetRadioButStat("radio_report_type_0") == true) { //Faculty wise Summ
        LockControl("ctxt_subject", true);
    }
    else if (GetRadioButStat("radio_report_type_3") == true) { //Faculty Dept Wise Summary
        LockControl("ctxt_dept_name", true);
        LockControl("ctxt_subject", true);
        LockControl("ctxt_faculty", true);
    }
    else if (GetRadioButStat("radio_report_type_5") == true) { //Dept+Faculty+ Sub Wise det
        LockControl("ctxt_dept_name", true);
        LockControl("cmd_refresh", true);

        LockControl("ctxt_course", true);
        LockControl("ctxt_stream", true);
        LockControl("ctxt_dept_name", true);
        LockControl("cntxt_from_val", true);
        LockControl("cntxt_to_val", true);

    }
}


function Reset() {
    SetValue("ctxt_course", "");
    SetValue("ctxt_stream", "");
    SetValue("cntxt_sem", "0");
    SetValue("ctxt_dept_name", "");
    SetValue("ctxt_subject", "");
    SetValue("ctxt_faculty", "");
    SetValue("cntxt_from_val", "0");
    SetValue("cntxt_to_val", "100");
}


function DisplayData(p_export) {
    try {

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_id = "0";
        cntxt_course_id = "0";
        cntxt_stream_id = "0";
        cntxt_sem_id = "0";
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");

        ctxt_course = GetValueByCtrlName("ctxt_course") + "%";
        ctxt_stream = GetValueByCtrlName("ctxt_stream") + "%";
        cntxt_sem = GetValueByCtrlName("cntxt_sem");
        ctxt_dept_name = GetValueByCtrlName("ctxt_dept_name") + "%";
        ctxt_subject = "%" + GetValueByCtrlName("ctxt_subject") + "%";
        ctxt_faculty = GetValueByCtrlName("ctxt_faculty") + "%";
        cntxt_from_val = GetValueByCtrlName("cntxt_from_val");
        cntxt_to_val = GetValueByCtrlName("cntxt_to_val");
        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");

        if (GetRadioButStat("radio_sort_on_0") == true) {
            radio_sort_on = 0;
        }
        else if (GetRadioButStat("radio_sort_on_1") == true) {

            radio_sort_on = 1;
        }
        else if (GetRadioButStat("radio_sort_on_2") == true) {

            radio_sort_on = 2;
        }


        if (GetRadioButStat("radio_report_type_0") == true) { //fac Summ
            radio_report_type = 2;
        }
        else if (GetRadioButStat("radio_report_type_1") == true) { //Course+Faculty+Subject Wise Summary

            radio_report_type = 3;
        }
        else if (GetRadioButStat("radio_report_type_2") == true) { //Faculty+Subject Wise Summary&nbsp&nbsp

            radio_report_type = 4;
        }
        else if (GetRadioButStat("radio_report_type_3") == true) { //Faculty Dept Wise Summary&nbsp&nbsp

            radio_report_type = 5;
        }
        else if (GetRadioButStat("radio_report_type_4") == true) { //Faculty details

            radio_report_type = 1;
        }
        else if (GetRadioButStat("radio_report_type_5") == true) { //Dept+Faculty details
            PrintDeptFacDetails();
            return;
        }

 


        var m_sp_param = new Array();
        m_sp_param.push("@p_disp_type,int," + radio_report_type);
        m_sp_param.push("@P_COLLEGE_ID,int," + cntxt_college_id);
        m_sp_param.push("@P_FROM_DATE,DATETIME," + dtp_from_date);
        m_sp_param.push("@P_TO_DATE,DATETIME," + dtp_to_date);
        m_sp_param.push("@P_batch_ID,int," + cntxt_batch_id);
        m_sp_param.push("@P_COURSE_ID,int," + cntxt_course_id);
        m_sp_param.push("@P_STREAM_ID,int," + cntxt_stream_id);
        m_sp_param.push("@P_SEM_ID,int," + cntxt_sem_id);

        m_sp_param.push("@p_sub_name,VARCHAR," + ctxt_subject);
        m_sp_param.push("@p_fac_dept,VARCHAR," + ctxt_dept_name);
        m_sp_param.push("@p_fac_name,VARCHAR," + ctxt_faculty);
        m_sp_param.push("@p_course_name,VARCHAR," + ctxt_course);
        m_sp_param.push("@p_stream_name,VARCHAR," + ctxt_stream);

        m_sp_param.push("@p_sem_no,int," + cntxt_sem);
        m_sp_param.push("@p_filter_on,int," + "0");
        m_sp_param.push("@p_from_val,int," + cntxt_from_val);
        m_sp_param.push("@p_to_val,int," + cntxt_to_val);
        m_sp_param.push("@p_order_type,int," + radio_sort_on);
        m_sp_param.push("@p_branch_id,int," + cntxt_branch_id);
//        if (p_export == "0") {
//            m_sp_param.push("@p_branch_id,int," + cntxt_branch_id);
//        }

        

        if (p_export == "0") {
            /*Removing data from panel*/
            DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_grid_search_faculty_summary_list');");
            DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_course_summary_list');");
            DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_faculty_sub_summary_list');");
            DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_faculty_dept_summary_list');");
            DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_faculty_detail_list');");

            m_panel_main_list = document.getElementById("m_panel_main_list");
            while (m_panel_main_list.hasChildNodes()) {
                m_panel_main_list.removeChild(m_panel_main_list.firstChild);
            }
        }


        if (p_export == "0") {
            if (radio_report_type == "1") {
                DynamicHtmlTemplate_PopulateGrid_FromMasterDb("m_key_search_faculty_detail_list", m_sp_param, "Proc_Get_Faculty_Attd_Percentage_New");
            }
            else if (radio_report_type == "2") {

                DynamicHtmlTemplate_PopulateGrid_FromMasterDb("m_key_search_faculty_summary_list", m_sp_param, "Proc_Get_Faculty_Attd_Percentage_New");
            }
            else if (radio_report_type == "3") {
                DynamicHtmlTemplate_PopulateGrid_FromMasterDb("m_key_search_course_summary_list", m_sp_param, "Proc_Get_Faculty_Attd_Percentage_New");
            }
            else if (radio_report_type == "4") {
                DynamicHtmlTemplate_PopulateGrid_FromMasterDb("m_key_search_faculty_sub_summary_list", m_sp_param, "Proc_Get_Faculty_Attd_Percentage_New");
            }
            else if (radio_report_type == "5") {
                DynamicHtmlTemplate_PopulateGrid_FromMasterDb("m_key_search_faculty_dept_summary_list", m_sp_param, "Proc_Get_Faculty_Attd_Percentage_New");
            }
        }
        else {
            if (radio_report_type == "1") {
                m_field_name = "str_dt|fac_dept|fac_code|fac_name|sub_name|remarks|std_count|present|present%|course_name|stream_name|sem_no|sec_name";
                m_col_name = "Date|Dept|Code|Faculty Name|Subject|Remarks|Student No(s)|Present|%|Course|Stream|Sem|Sec";
                Jf_ExportToExcel("FacultyDetails.xls", m_sp_param, "Proc_Get_Faculty_Attd_Percentage_New", m_col_name, m_field_name, 0);
            }
            else if (radio_report_type == "2") {
                m_field_name = "date|fac_dept|fac_code|fac_name|class_count|attd_given|attd_pending|attd_enter%|present%|absent%";
                m_col_name   = "Period|Dept|Code|Faculty Name|Sch Class|Attd Given|Attd Pending|Attd Entered(%)|Std. Present(%)|Std. Absent(%)";


                Jf_ExportToExcel("FacultyWiseSummary.xls", m_sp_param, "Proc_Get_Faculty_Attd_Percentage_New", m_col_name, m_field_name, 0);
            }
            else if (radio_report_type == "3") {
                m_field_name = "date|fac_dept|fac_code|fac_name|sub_name|class_count|attd_given|attd_pending|attd_enter%|present%|absent%|course_name|stream_name|sem_no|sec_name";
                m_col_name = "Period|Dept|Code|Faculty|Subject|Sch. Class|Attd Given|Attd Pending|Attd Entered(%)|Std. Present(%)|Std. Absent(%)|Course|Stream|Sem|Sec";
                Jf_ExportToExcel("CourseFacultySubject.xls", m_sp_param, "Proc_Get_Faculty_Attd_Percentage_New", m_col_name, m_field_name, 0);
            }
            else if (radio_report_type == "4") {
                m_field_name = "date|fac_dept|fac_code|fac_name|sub_name|class_count|attd_given|attd_pending|attd_enter%|present%|absent%";
                m_col_name = "Period|Dept|Code|Faculty|Subject|Sch. Class|Attd Given|Attd Pending|Attd Entered(%)|Std. Present(%)|Std. Absent(%)";
                Jf_ExportToExcel("FacultySubject.xls", m_sp_param, "Proc_Get_Faculty_Attd_Percentage_New", m_col_name, m_field_name, 0);
            }
            else if (radio_report_type == "5") {
                m_field_name = "date|fac_dept|class_count|attd_given|attd_pending|attd_enter%|present%|absent%";
                m_col_name = "Period|Dept|Sch. Class|Attd Given|Attd Pending|Attd Entered(%)|Std. Present(%)|Std. Absent(%)";
                Jf_ExportToExcel("FacultyDept.xls", m_sp_param, "Proc_Get_Faculty_Attd_Percentage_New", m_col_name, m_field_name, 0);
            }
        }
    }
    catch (err) {
        alert('DisplayData() - Error In JScript');
    }
}


function PrintDeptFacDetails() {
    try {
        m_format_type = "1";
        m_format_type = prompt("Enter 1 for PDF, 2 for EXCEL", m_format_type);
        if (parseFloat(m_format_type) <= 0 || parseFloat(m_format_type) > 2) {
            m_format_type = "1";
        }

        if (m_format_type == "1") {
            m_format = "PDF"
        }
        else if (m_format_type=="2") {
            m_format = "XLS"
        }



        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_id = "0";
        cntxt_course_id = "0";
        cntxt_stream_id = "0";
        cntxt_sem_id = "0";
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");

        ctxt_course = GetValueByCtrlName("ctxt_course") + "%";
        ctxt_stream = GetValueByCtrlName("ctxt_stream") + "%";
        cntxt_sem = GetValueByCtrlName("cntxt_sem");
        ctxt_dept_name = GetValueByCtrlName("ctxt_dept_name") + "%";
        ctxt_subject = "%" + GetValueByCtrlName("ctxt_subject") + "%";
        ctxt_faculty = GetValueByCtrlName("ctxt_faculty") + "%";
        cntxt_from_val = GetValueByCtrlName("cntxt_from_val");
        cntxt_to_val = GetValueByCtrlName("cntxt_to_val");

        //======================================================================
        var m_SpParam = new Array;
        m_SpParam.push(CreateParam("@p_college_id", cntxt_college_id, "INT"))
        m_SpParam.push(CreateParam("@p_session_id", "0", "INT"))
        m_SpParam.push(CreateParam("@p_from_date", dtp_from_date, "DATETIME"))
        m_SpParam.push(CreateParam("@p_to_date", dtp_to_date, "DATETIME"))
        m_SpParam.push(CreateParam("@p_sem_no", cntxt_sem, "INT"))
        m_SpParam.push(CreateParam("@p_sub_code", ctxt_subject, "VARCHAR"))
        m_SpParam.push(CreateParam("@p_faculty_name", ctxt_faculty, "VARCHAR"))

        m_head1 = "Faculty Wise Attendance From " + dtp_from_date + " To " + dtp_to_date;
        var m_FormulaList = new Array;
        m_FormulaList.push(CreateFormula("m_college", GetValueByCtrlName("ctxt_college_name")));
        m_FormulaList.push(CreateFormula("m_head1", m_head1));

        GenerateReport("frmDeptFacultyWiseDailyClassAttd.rpt",
                        m_SpParam,
                        m_FormulaList,
                        null,
                        m_format);

    }
    catch (err) {
        alert('PrintDeptFacDetails() - Error In JScript');
    }

}