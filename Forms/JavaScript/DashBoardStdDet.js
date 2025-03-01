
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

        //=======STUDENT WISE SUMM SCREEN===========
        m_session_var_name = "S_SEARCH_STUDENT_SUMMARY_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_search_student_summary_list", "m_grid_search_student_summary_list", "m_panel_main_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("std_name");
        DynamicHtmlTemplate_SetControlName("ctxt_student_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("DisplayData('1','0');");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_student_summary_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_student_summary_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");


        var m_field_arr = new Array();
        m_field_arr.push("BatchId,BatchId,hidden_textbox,L,5px");
        m_field_arr.push("CourseId,CourseId,hidden_textbox,L,5px");
        m_field_arr.push("StreamId,StreamId,hidden_textbox,L,5px");
        m_field_arr.push("SemesterId,SemesterId,hidden_textbox,L,5px");


        m_field_arr.push("course_name,Course,read_only_textbox,L,25px");
        m_field_arr.push("stream_name,Stream,read_only_textbox,L,25px");
        m_field_arr.push("sem_no,Sem,read_only_textbox,L,5px");
        m_field_arr.push("sec,Sec,read_only_textbox,L,10px");
        m_field_arr.push("std_name,Student,read_only_textbox,L,15px");
        m_field_arr.push("Attd Entered By Faculty(%),Attd Entered(%),read_only_textbox,L,12px");
        m_field_arr.push("Student Attd Schedule(%),Attd(%)/Sch,read_only_textbox,L,12px");
        m_field_arr.push("Student Attd Actual(%),Attd(%)/Data Entered,read_only_textbox,L,15px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //====================================================


        

        //=======BATCH WISE SCREEN===========
        m_session_var_name = "S_SEARCH_BATCH_SUMMARY_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_search_batch_summary_list", "m_grid_search_batch_summary_list", "m_panel_main_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_batch_summary_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_batch_summary_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");


        var m_field_arr = new Array();
        m_field_arr.push("BatchId,BatchId,hidden_textbox,L,5px");
        m_field_arr.push("CourseId,CourseId,hidden_textbox,L,5px");
        m_field_arr.push("StreamId,StreamId,hidden_textbox,L,5px");
        m_field_arr.push("SemesterId,SemesterId,hidden_textbox,L,5px");


        m_field_arr.push("course_name,Course,read_only_textbox,L,25px");
        m_field_arr.push("stream_name,Stream,read_only_textbox,L,25px");
        m_field_arr.push("sem_no,Sem,read_only_textbox,L,5px");
        m_field_arr.push("sec,Sec,read_only_textbox,L,10px");
        m_field_arr.push("Attd Entered By Faculty(%),Attd Entered(%),read_only_textbox,L,12px");
        m_field_arr.push("Student Attd Schedule(%),Attd(%)/Sch,read_only_textbox,L,12px");
        m_field_arr.push("Student Attd Actual(%),Attd(%)/Data Entered,read_only_textbox,L,15px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //====================================================





        //=======STUDENT DETAIL SCREEN===========
        m_session_var_name = "S_SEARCH_DETAIL_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_search_detail_list", "m_grid_detail_list", "m_panel_main_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_detail_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_detail_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");


        var m_field_arr = new Array();
        m_field_arr.push("student_id,student_id,hidden_textbox,L,5px");

        m_field_arr.push("str_dt,Date,read_only_textbox,L,10px");
        m_field_arr.push("course_name,Course,read_only_textbox,L,15px");
        m_field_arr.push("stream_name,Stream,read_only_textbox,L,15px");
        m_field_arr.push("sem_no,Sem,read_only_textbox,L,5px");
        m_field_arr.push("sec,Sec,read_only_textbox,L,10px");
        m_field_arr.push("std_code,Code,read_only_textbox,L,12px");
        m_field_arr.push("std_name,Name,read_only_textbox,L,25px");
        m_field_arr.push("period_Id,Period,read_only_textbox,L,5px");
        m_field_arr.push("sub_name,Subject,read_only_textbox,L,25px");
        m_field_arr.push("remarks,Remarks,read_only_textbox,L,20px");
        m_field_arr.push("fac_name,Faculty,read_only_textbox,L,25px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //====================================================

        //=======STUDENT SINGLE SCREEN===========
        m_session_var_name = "S_SEARCH_SINGLE_STUDENT";
        DynamicHtmlTemplate_AddKeyName("m_key_search_single_student", "m_grid_single_student", "m_div_single_student", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_single_student', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_single_student', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_single_student');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");


        var m_field_arr = new Array();
        m_field_arr.push("student_id,student_id,hidden_textbox,L,5px");

        m_field_arr.push("str_dt,Date,read_only_textbox,L,10px");
        m_field_arr.push("std_code,Code,read_only_textbox,L,12px");
        m_field_arr.push("std_name,Name,read_only_textbox,L,25px");
        m_field_arr.push("period_Id,Period,read_only_textbox,L,5px");
        m_field_arr.push("sub_name,Subject,read_only_textbox,L,25px");
        m_field_arr.push("remarks,Remarks,read_only_textbox,L,20px");
        m_field_arr.push("fac_name,Faculty,read_only_textbox,L,25px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //====================================================




        SetReportType();
        DisplayData('0','0');

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
    DisplayData('0','0');
}


function DisplayData(p_flag,p_export) {
    try {

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");


        cntxt_course_id = "0";
        cntxt_stream_id = "0";
        cntxt_sem_id = "0";
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");

        ctxt_course = GetValueByCtrlName("ctxt_course") + "%";
        ctxt_stream = GetValueByCtrlName("ctxt_stream") + "%";
        cntxt_sem = GetValueByCtrlName("cntxt_sem");
        ctxt_student_name = GetValueByCtrlName("ctxt_student_name") + "%";
        ctxt_subject = "%" +GetValueByCtrlName("ctxt_subject") + "%";
        ctxt_faculty = GetValueByCtrlName("ctxt_faculty") + "%";
        cntxt_from_val = GetValueByCtrlName("cntxt_from_val");
        cntxt_to_val = GetValueByCtrlName("cntxt_to_val");

        if (GetRadioButStat("radio_sort_on_0") == true) {
            radio_sort_on = 0;
        }
        else if (GetRadioButStat("radio_sort_on_1") == true) {

            radio_sort_on = 1;
        }
        else if (GetRadioButStat("radio_sort_on_2") == true) {

            radio_sort_on = 2;
        }


        if (GetRadioButStat("radio_report_type_0") == true) { //Student Summ
            radio_report_type = 1;
        }
        else if (GetRadioButStat("radio_report_type_1") == true) { //Batch Summ

            radio_report_type = 2;
        }
        else if (GetRadioButStat("radio_report_type_2") == true) { //Student Det

            radio_report_type = 3;
            radio_sort_on = 0;
        }

        if (p_flag == "1") {
            radio_report_type = "3";
            radio_sort_on = 0;
            SetValue("ctxt_student_name", "");
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

        m_sp_param.push("@p_std_name,VARCHAR," + ctxt_student_name);
        m_sp_param.push("@p_sub_name,VARCHAR," + ctxt_subject);
        m_sp_param.push("@p_fac_name,VARCHAR," + ctxt_faculty);
        m_sp_param.push("@p_course_name,VARCHAR," + ctxt_course);
        m_sp_param.push("@p_stream_name,VARCHAR," + ctxt_stream);

        m_sp_param.push("@p_sem_no,int," + cntxt_sem);
        m_sp_param.push("@p_filter_on,int," + "0");
        m_sp_param.push("@p_from_val,int," + cntxt_from_val);
        m_sp_param.push("@p_to_val,int," + cntxt_to_val);
        m_sp_param.push("@p_order_type,int," + radio_sort_on);
        m_sp_param.push("@p_branch_id,int," + cntxt_branch_id);

//        if (p_export == 0) {
//            m_sp_param.push("@p_branch_id,int," + cntxt_branch_id);
//        }




        /*Removing data from panel*/
        if (p_flag == "0" && p_export=="0") {
            DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_student_summary_list');");
            DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_batch_summary_list');");
            DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_detail_list');");

            m_panel_main_list = document.getElementById("m_panel_main_list");
            while (m_panel_main_list.hasChildNodes()) {
                m_panel_main_list.removeChild(m_panel_main_list.firstChild);
            }
        }

        if (p_export == "0") {
            if (radio_report_type == "1") {
                DynamicHtmlTemplate_PopulateGrid_FromMasterDb("m_key_search_student_summary_list", m_sp_param, "Proc_Get_Student_Attd_Percentage_New");
            }
            else if (radio_report_type == "2") {
                DynamicHtmlTemplate_PopulateGrid_FromMasterDb("m_key_search_batch_summary_list", m_sp_param, "Proc_Get_Student_Attd_Percentage_New");
            }
            else if (radio_report_type == "3") {
                if (p_flag == "0") {
                    DynamicHtmlTemplate_PopulateGrid_FromMasterDb("m_key_search_detail_list", m_sp_param, "Proc_Get_Student_Attd_Percentage_New");
                }
                else {
                    DynamicHtmlTemplate_PopulateGrid_FromMasterDb("m_key_search_single_student", m_sp_param, "Proc_Get_Student_Attd_Percentage_New");
                }
            }
        }
        else {
            if (radio_report_type == "1") {
                m_field_name = "course_name|stream_name|sem_no|sec|std_name|Attd Entered By Faculty(%)|Student Attd Schedule(%)|Student Attd Actual(%)";
                m_col_name = "Course|Stream|Sem|Sec|Student Name|Attd Entered By Faculty(%)|Student Attd Schedule(%)|Student Attd Actual(%)";
                Jf_ExportToExcel("StudentSummary.xls", m_sp_param, "Proc_Get_Student_Attd_Percentage_New", m_col_name, m_field_name, 0);
            }
            else if (radio_report_type == "2") {
                m_field_name = "course_name|stream_name|sem_no|sec|Attd Entered By Faculty(%)|Student Attd Schedule(%)|Student Attd Actual(%)";
                m_col_name = "Course|Stream|Sem|Sec|Attd Entered By Faculty(%)|Student Attd Schedule(%)|Student Attd Actual(%)";
                Jf_ExportToExcel("CourseStreamSummary.xls", m_sp_param, "Proc_Get_Student_Attd_Percentage_New", m_col_name, m_field_name, 0);
            }
            else if (radio_report_type == "3") {
                m_field_name = "str_dt|course_name|stream_name|sem_no|sec|std_code|std_name|period_Id|sub_name|remarks|fac_name";
                m_col_name = "Date|Course|Stream|Sem|Sec|Code|Name|Period|Subject|remarks|Faculty";
                Jf_ExportToExcel("StudentDetails.xls", m_sp_param, "Proc_Get_Student_Attd_Percentage_New", m_col_name, m_field_name, 0);
            }
        }



    }
    catch (err) {
        alert('DisplayData() - Error In JScript');
    }
}


function SetReportType() {
    LockControl("ctxt_student_name", true);
    LockControl("ctxt_subject", true);
    LockControl("ctxt_faculty", true);
    LockControl("cntxt_from_val", true);
    LockControl("cntxt_to_val", true);
    LockControl("radio_sort_on", true);


    if (GetRadioButStat("radio_report_type_0") == true) { //Student Summ
        LockControl("ctxt_student_name", false);
        LockControl("cntxt_from_val", false);
        LockControl("cntxt_to_val", false);
        LockControl("radio_sort_on", false);
    }
    else if (GetRadioButStat("radio_report_type_1") == true) { //Batch Summ
        LockControl("cntxt_from_val", false);
        LockControl("cntxt_to_val", false);
        LockControl("radio_sort_on", false);
    }
    else if (GetRadioButStat("radio_report_type_2") == true) { //Student Det
        LockControl("ctxt_student_name", false);
        LockControl("ctxt_subject", false);
        LockControl("ctxt_faculty", false);
    }
}

function Reset() {
    SetValue("ctxt_course", "");
    SetValue("ctxt_stream", "");
    SetValue("cntxt_sem", "0");
    SetValue("ctxt_student_name", "");
    SetValue("ctxt_subject", "");
    SetValue("ctxt_faculty", "");
    SetValue("cntxt_from_val", "0");
    SetValue("cntxt_to_val", "100");
}