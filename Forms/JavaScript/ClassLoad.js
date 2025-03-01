var m_arr;

function RightMouseClick(event) {
    if (event.which == 3) {
        alert(window.document.nodeName);
        event.preventDefault();
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
    try {
        SetAutoCompleteOff();
        SetFocusOffByTagName("DIV");
        SetDateEventByTagName();

        SetInnerHtml("m_college_name", GetValueByCtrlName("ctxt_college_name"));

        //=======Populate SemesterType===========
        m_session_var_name = "S_POPULATE_SEMESTER_TYPE";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_semester_type", "m_grid_populate_semester_type", "div_semester_type", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("sem_type_id,sem_type_name");
        DynamicHtmlTemplate_SetControlName("cntxt_semester_type_id,ctxt_semester_type");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_semester_type', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_semester_type', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_semester_type');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("sem_type_id,sem_type_id,hidden_textbox,R,10px");
        m_field_arr.push("sem_type_name,SEMESTER TYPE,read_only_textbox,L,50px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================


        //=======Populate Subject Type===========
        m_session_var_name = "S_POPULATE_SUBJECT_TYPE";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_subject_type", "m_grid_populate_subject_type", "div_subject_type", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("sub_type_id,sub_type_name");
        DynamicHtmlTemplate_SetControlName("cntxt_subject_type_id,ctxt_subject_type");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_subject_type', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_subject_type', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_subject_type');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("sub_type_id,sub_type_id,hidden_textbox,R,10px");
        m_field_arr.push("sub_type_name,Subject TYPE,read_only_textbox,L,50px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================


        //=======Subject Type Wise Class Load===========
        m_session_var_name = "S_SUB_TYPE_WISE_CLASS_LOAD";
        DynamicHtmlTemplate_AddKeyName("m_key_sub_type_wise_class_load", "m_grid_sub_type_wise_class_load", "m_panel_main_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_sub_type_wise_class_load', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_sub_type_wise_class_load', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");


        var m_field_arr = new Array();
        m_field_arr.push("dept_name,Dept,read_only_textbox,L,15px");
        m_field_arr.push("fac_name,Name,read_only_textbox,L,15px");
        m_field_arr.push("fac_category,cat,read_only_textbox,L,10px");
        m_field_arr.push("desg,desg,read_only_textbox,L,5px");
        m_field_arr.push("stream_name,Stream,read_only_textbox,L,10px");
        m_field_arr.push("theory_code,Theory,read_only_textbox,L,5px");
        m_field_arr.push("theory_count,Load,read_only_textbox,L,5px");
        m_field_arr.push("lab_code,Lab,read_only_textbox,L,5px");
        m_field_arr.push("lab_count,Load,read_only_textbox,L,5px");
        m_field_arr.push("tutorial_code,Tuto.,read_only_textbox,L,5px");
        m_field_arr.push("tutorial_count,load,read_only_textbox,L,5px");
        m_field_arr.push("seminar_code,Seminar,read_only_textbox,L,5px");
        m_field_arr.push("seminar_count,Load,read_only_textbox,L,5px");
        m_field_arr.push("project_code,Project,read_only_textbox,L,5px");
        m_field_arr.push("project_count,Load,read_only_textbox,L,5px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //====================================================

        //=======Week day Wise Class Load===========
        m_session_var_name = "S_WEEK_DAY_WISE_CLASS_LOAD";
        DynamicHtmlTemplate_AddKeyName("m_key_week_day_wise_class_load", "m_grid_week_day_wise_class_load", "m_panel_main_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_week_day_wise_class_load', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_week_day_wise_class_load', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");


        var m_field_arr = new Array();
        m_field_arr.push("dept_name,Dept,read_only_textbox,L,15px");
        m_field_arr.push("fac_name,Name,read_only_textbox,L,15px");
        m_field_arr.push("fac_category,cat,read_only_textbox,L,10px");
        m_field_arr.push("desg,desg,read_only_textbox,L,5px");
        m_field_arr.push("stream_name,Stream,read_only_textbox,L,10px");
        m_field_arr.push("sub_code,Subject,read_only_textbox,L,10px");
        m_field_arr.push("sub_type,Type,read_only_textbox,L,10px");

        m_field_arr.push("mon,Mon,read_only_textbox,L,5px");
        m_field_arr.push("tue,Tue,read_only_textbox,L,5px");
        m_field_arr.push("wed,Wed,read_only_textbox,L,5px");
        m_field_arr.push("thu,Thu,read_only_textbox,L,5px");
        m_field_arr.push("fri,Fri,read_only_textbox,L,5px");
        m_field_arr.push("sat,Sat,read_only_textbox,L,5px");
        m_field_arr.push("day_total,Total,read_only_textbox,L,5px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //====================================================


        //=======Lesson Plan Status===========
        m_session_var_name = "S_LESSON_PLAN";
        DynamicHtmlTemplate_AddKeyName("m_key_lesson_plan", "m_grid_lesson_plan", "m_panel_main_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_lesson_plan', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_lesson_plan', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");


        var m_field_arr = new Array();
        m_field_arr.push("dept_name,Dept,read_only_textbox,L,15px");
        m_field_arr.push("fac_name,Name,read_only_textbox,L,15px");
        m_field_arr.push("fac_category,Cat,read_only_textbox,L,10px");

        m_field_arr.push("period_str_date,Date,read_only_textbox,L,10px");
        m_field_arr.push("sub_code,Subject,read_only_textbox,L,10px");
        m_field_arr.push("sub_type,Type,read_only_textbox,L,10px");
        m_field_arr.push("course_name,Course,read_only_textbox,L,10px");
        m_field_arr.push("stream_name,Stream,read_only_textbox,L,10px");
        m_field_arr.push("attd_stat,Attd Stat,read_only_textbox,L,10px");
        m_field_arr.push("topic,Topic Planed,read_only_textbox,L,20px");
        m_field_arr.push("topic_delivered,Topic Delivered,read_only_textbox,L,20px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //====================================================

        LockControl("dtp_from_date", true);
        LockControl("dtp_to_date", true);


        Reset();

        SetInnerHtml("ctxt_sel_college_name", "Class Load/Conduction - " + GetValueByCtrlName("ctxt_college_name"));
    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}

function Refresh() {
    DisplayData('0');
}


function DisplayData(p_export) {
    try {

        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_session_id = GetValueByCtrlName("cntxt_session_id");
        cntxt_semester_type_id= GetValueByCtrlName("cntxt_semester_type_id");
        m_sem_type = "O";
        if (cntxt_semester_type_id == 0) {
            m_sem_type = "E";
        }
        else if (cntxt_semester_type_id == 1) {
            m_sem_type = "O";
        }
        cntxt_subject_type_id = GetValueByCtrlName("cntxt_subject_type_id");
        cntxt_sem = GetValueByCtrlName("cntxt_sem");
        ctxt_stream = GetValueByCtrlName("ctxt_stream") + "%";
        ctxt_dept_name = GetValueByCtrlName("ctxt_dept_name") + "%";
        ctxt_faculty = GetValueByCtrlName("ctxt_faculty") + "%";
        ctxt_faculty_desg = "%" + GetValueByCtrlName("ctxt_faculty_desg") + "%";
        ctxt_faculty_categoty = GetValueByCtrlName("ctxt_faculty_categoty") + "%";
        ctxt_subject = "%" + GetValueByCtrlName("ctxt_subject") + "%";




        if (GetRadioButStat("radio_report_type_0") == true) { //Sub Type Wise
            radio_report_type = 1;
        }
        else if (GetRadioButStat("radio_report_type_1") == true) { //Day Wise

            radio_report_type = 2;
        }
        else if (GetRadioButStat("radio_report_type_2") == true) { //Conduction

            radio_report_type = 3;

            if (dtp_from_date == "") {
                ShowMsgWnd("Enter From Date");
                return;
            }
            if (dtp_to_date == "") {
                ShowMsgWnd("Enter To Date");
                return;
            }

        }
        else if (GetRadioButStat("radio_report_type_3") == true) { //Lesson Plan
            radio_report_type = 4;

            if (dtp_from_date == "") {
                ShowMsgWnd("Enter From Date");
                return;
            }
            if (dtp_to_date == "") {
                ShowMsgWnd("Enter To Date");
                return;
            }
        }



        var m_sp_param = new Array();
        if (radio_report_type == 1 || radio_report_type == 2) {
            m_sp_param.push("@p_college_id,int," + cntxt_college_id);
            m_sp_param.push("@p_ses_id,int," + cntxt_session_id);
            m_sp_param.push("@p_sem_type,VARCHAR," + m_sem_type);
            m_sp_param.push("@p_sub_type,int," + cntxt_subject_type_id);
            m_sp_param.push("@p_sem_no,int," + cntxt_sem);
            m_sp_param.push("@p_stream_name,VARCHAR," + ctxt_stream);
            m_sp_param.push("@p_dept_name,VARCHAR," + ctxt_dept_name);
            m_sp_param.push("@p_fac_name,VARCHAR," + ctxt_faculty);
            m_sp_param.push("@p_desg,VARCHAR," + ctxt_faculty_desg);
            m_sp_param.push("@p_category,VARCHAR," + ctxt_faculty_categoty);
            m_sp_param.push("@p_sub_code,VARCHAR," + ctxt_subject);
        }
        else if (radio_report_type == 3) {
            m_sp_param.push("@p_college_id,int," + cntxt_college_id);
            m_sp_param.push("@p_session_id,int," + cntxt_session_id);
            m_sp_param.push("@p_from_date,DATETIME," + dtp_from_date);
            m_sp_param.push("@p_to_date,DATETIME," + dtp_to_date);
            m_sp_param.push("@p_sem_no,int," + cntxt_sem);
            m_sp_param.push("@p_sub_code,VARCHAR," + ctxt_subject);
            m_sp_param.push("@p_faculty_name,VARCHAR," + ctxt_faculty);

        }
        else if (radio_report_type == 4) {
            m_sp_param.push("@p_college_id,int," + cntxt_college_id);
            m_sp_param.push("@p_from_date,DATETIME," + dtp_from_date);
            m_sp_param.push("@p_to_date,DATETIME," + dtp_to_date);
            m_sp_param.push("@p_sem_no,int," + cntxt_sem);
            m_sp_param.push("@p_dept_name,VARCHAR," + ctxt_dept_name);
            m_sp_param.push("@p_fac_name,VARCHAR," + ctxt_faculty);
            m_sp_param.push("@p_course_name,VARCHAR," + "%");
            m_sp_param.push("@p_stream_name,VARCHAR," + ctxt_stream);
            m_sp_param.push("@p_sub_code,VARCHAR," + ctxt_subject);
        }


        if (p_export == "0") {
            /*Removing data from panel*/
            DynamicHtmlTemplate_DeleteAllControl('m_key_sub_type_wise_class_load');
            DynamicHtmlTemplate_DeleteAllControl('m_key_week_day_wise_class_load');
            DynamicHtmlTemplate_DeleteAllControl('m_key_lesson_plan');
        }
 



        if (p_export == "0") {
            if (radio_report_type == "1") {
                DynamicHtmlTemplate_PopulateGrid("m_key_sub_type_wise_class_load", m_sp_param, "Proc_disp_faculty_subject_wise_weekly_load");
            }
            else if (radio_report_type == "2") {

                DynamicHtmlTemplate_PopulateGrid("m_key_week_day_wise_class_load", m_sp_param, "Proc_disp_faculty_subject_day_wise_weekly_load");
            }
            else if (radio_report_type == "4") {

                DynamicHtmlTemplate_PopulateGrid("m_key_lesson_plan", m_sp_param, "Proc_disp_faculty_subject_wise_lesson_plan_status");
            }
        }
        else {
            if (radio_report_type == "1") {
                m_field_name = "dept_name|fac_name|fac_category|desg|stream_name|theory_code|theory_count|lab_code|lab_count|tutorial_code|tutorial_count|seminar_code|seminar_count|project_code|project_count";
                m_col_name   = "Department|Faculty Name|Category|Designation|Stream|Theory|Load|Lab|Load|Tutorial|Load|Seminar|Load|Project|Load";
                Jf_ExportToExcel("SubTypeWise-ClassLoad.xls", m_sp_param, "Proc_disp_faculty_subject_wise_weekly_load", m_col_name, m_field_name, 0);
            }
            else if (radio_report_type == "2") {
                m_field_name = "dept_name|fac_name|fac_category|desg|stream_name|sub_code|sub_type|mon|tue|wed|thu|fri|sat|day_total";
                m_col_name = "Department|Faculty Name|Category|Designation|Stream|Subject|Type|Mon|Tue|Wed|Thu|Fri|Sat|Total";

                Jf_ExportToExcel("DayWise-ClassLoad.xls", m_sp_param, "Proc_disp_faculty_subject_day_wise_weekly_load", m_col_name, m_field_name, 0);
            }
            else if (radio_report_type == "3") {
                m_field_name = "NA";
                m_col_name = "NA";
                Jf_ExportToExcel("Class-Conduction.xls", m_sp_param, "Proc_disp_class_conduction_report", m_col_name, m_field_name, 0);
            }
            else if (radio_report_type == "4") {
                m_field_name = "dept_name|fac_name|fac_category|period_str_date|sub_code|sub_type|course_name|stream_name|attd_stat|topic|topic_delivered";
                m_col_name = "Dept|Faculty|Category|Date|Subject|Type|Course|Stream|Attd Stat|Topic Planed|Topic Delivered";
                Jf_ExportToExcel("LessonPlanStat.xls", m_sp_param, "Proc_disp_faculty_subject_wise_lesson_plan_status", m_col_name, m_field_name, 0);
            }
        }
    }
    catch (err) {
        alert('DisplayData() - Error In JScript');
    }
}

function PopulateSemesterType(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_semester_type = GetValueByCtrlName("ctxt_semester_type") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_name,VARCHAR," + ctxt_semester_type);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_semester_type",
                                             m_sp_param,
                                             "Proc_Get_Sem_Type",
                                             ctxt_semester_type,
                                             0);
    }
    catch (err) {
        alert('PopulateSemesterType() - Error In JScript');
    }
}

function Reset() {
    SetValue("cntxt_semester_type_id", "1");
    SetValue("ctxt_semester_type", "Odd Semester");

    SetValue("cntxt_subject_type_id", "-1");
    SetValue("ctxt_subject_type", "All");

    SetValue("cntxt_sem", "0");
    SetValue("ctxt_stream", "");
    SetValue("ctxt_dept_name", "");
    SetValue("ctxt_faculty", "");
    SetValue("ctxt_faculty_desg", "");
    SetValue("ctxt_faculty_categoty", "");
    SetValue("ctxt_subject", "");


}


function PopulateSubjectType(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_subject_type = GetValueByCtrlName("ctxt_subject_type") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_name,VARCHAR," + ctxt_semester_type);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_subject_type",
                                             m_sp_param,
                                             "Proc_Get_Sub_Type",
                                             ctxt_subject_type,
                                             0);
    }
    catch (err) {
        alert('PopulateSubjectType() - Error In JScript');
    }
}

function SetReportType() {
    LockControl("dtp_from_date", true);
    LockControl("dtp_to_date", true);

    LockControl("ctxt_semester_type", false);
    LockControl("ctxt_subject_type", false);
    LockControl("ctxt_stream", false);
    LockControl("ctxt_dept_name", false);
    LockControl("ctxt_faculty_categoty", false);
    LockControl("ctxt_faculty_desg", false);
    LockControl("cmd_refresh", false);
    LockControl("cmd_print", false);
    

    if (GetRadioButStat("radio_report_type_2") == true) { //Conduction
        LockControl("dtp_from_date", false);
        LockControl("dtp_to_date", false);

        LockControl("ctxt_semester_type", true);
        LockControl("ctxt_subject_type", true);
        LockControl("ctxt_stream", true);
        LockControl("ctxt_dept_name", true);
        LockControl("ctxt_faculty_categoty", true);
        LockControl("ctxt_faculty_desg", true);
        LockControl("cmd_refresh", true);
        LockControl("cmd_print", true);
    }
    if (GetRadioButStat("radio_report_type_3") == true) { //Lesson Plan
        LockControl("dtp_from_date", false);
        LockControl("dtp_to_date", false);

        LockControl("ctxt_semester_type", true);
        LockControl("ctxt_subject_type", true);
        LockControl("ctxt_faculty_categoty", true);
        LockControl("ctxt_faculty_desg", true);
    }
}


function PrintFacultyLoad() {
    try {


        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_session_id = GetValueByCtrlName("cntxt_session_id");
        cntxt_semester_type_id = GetValueByCtrlName("cntxt_semester_type_id");
        cntxt_subject_type_id = GetValueByCtrlName("cntxt_subject_type_id");
        cntxt_sem = GetValueByCtrlName("cntxt_sem");
        ctxt_stream = GetValueByCtrlName("ctxt_stream") + "%";
        ctxt_dept_name = GetValueByCtrlName("ctxt_dept_name") + "%";
        ctxt_faculty = GetValueByCtrlName("ctxt_faculty") + "%";
        ctxt_faculty_desg = "%" + GetValueByCtrlName("ctxt_faculty_desg") + "%";
        ctxt_faculty_categoty = GetValueByCtrlName("ctxt_faculty_categoty") + "%";
        ctxt_subject = "%" + GetValueByCtrlName("ctxt_subject") + "%";



        m_sem_type = "O";

        if (GetRadioButStat("radio_report_type_0") == true || GetRadioButStat("radio_report_type_1") == true) {
            if (cntxt_semester_type_id == 0) {
                m_sem_type = "E";
                m_heading = "Class Load For Even Semester";
            }
            else if (cntxt_semester_type_id == 1) {
                m_sem_type = "O";
                m_heading = "Class Load For Odd Semester";
            }
        }
        else if (GetRadioButStat("radio_report_type_3") == true) {
            m_heading = "Lesson Plan status from " + dtp_from_date + " to " + dtp_to_date;
        }




        if (GetRadioButStat("radio_report_type_0") == true) { //Sub Type Wise
            m_report_file = "rptFacultySubjectWiseWeeklyLoad.rpt";
            m_heading = m_heading + " (Subject Type Wise)";
        }
        else if (GetRadioButStat("radio_report_type_1") == true) { //Day Wise
            m_report_file = "rptFacultyDayWiseWeeklyLoad.rpt";
            m_heading = m_heading + " (Day Wise)";
        }
        else if (GetRadioButStat("radio_report_type_3") == true) { //Day Wise
            m_report_file = "rptFacultyWiseLessonPlanStat.rpt";
        }




        //======================================================================
        var m_SpParam = new Array;
        if (GetRadioButStat("radio_report_type_0") == true || GetRadioButStat("radio_report_type_1") == true) {
            m_SpParam.push(CreateParam("@p_college_id", cntxt_college_id, "INT"))
            m_SpParam.push(CreateParam("@p_ses_id", cntxt_session_id, "INT"))
            m_SpParam.push(CreateParam("@p_sem_type", m_sem_type, "INT"))
            m_SpParam.push(CreateParam("@p_sub_type", cntxt_subject_type_id, "INT"))
            m_SpParam.push(CreateParam("@p_sem_no", cntxt_sem, "INT"))
            m_SpParam.push(CreateParam("@p_stream_name", ctxt_stream, "VARCHAR"))
            m_SpParam.push(CreateParam("@p_dept_name", ctxt_dept_name, "VARCHAR"))
            m_SpParam.push(CreateParam("@p_fac_name", ctxt_faculty, "VARCHAR"))
            m_SpParam.push(CreateParam("@p_desg", ctxt_faculty_desg, "VARCHAR"))
            m_SpParam.push(CreateParam("@p_category", ctxt_faculty_categoty, "VARCHAR"))
            m_SpParam.push(CreateParam("@p_sub_code", ctxt_subject, "VARCHAR"))
        }
        else if (GetRadioButStat("radio_report_type_3") == true) {
            m_SpParam.push(CreateParam("@p_college_id", cntxt_college_id, "INT"))
            m_SpParam.push(CreateParam("@p_from_date", dtp_from_date, "DATETIME"))
            m_SpParam.push(CreateParam("@p_to_date", dtp_to_date, "DATETIME"))
            m_SpParam.push(CreateParam("@p_sem_no", cntxt_sem, "INT"))
            m_SpParam.push(CreateParam("@p_dept_name", ctxt_dept_name, "VARCHAR"))
            m_SpParam.push(CreateParam("@p_fac_name", ctxt_faculty, "VARCHAR"))
            m_SpParam.push(CreateParam("@p_course_name", "%", "VARCHAR"))
            m_SpParam.push(CreateParam("@p_stream_name", ctxt_stream, "VARCHAR"))
            m_SpParam.push(CreateParam("@p_sub_code", ctxt_subject, "VARCHAR"))
        }

        var m_FormulaList = new Array;


        m_FormulaList.push(CreateFormula("m_college", GetValueByCtrlName("ctxt_college_name")));
        m_FormulaList.push(CreateFormula("m_heading", m_heading));





        GenerateReport(m_report_file,
                        m_SpParam,
                        m_FormulaList,
                        null,
                        "PDF");

    }
    catch (err) {
        alert('PrintFacultyLoad() - Error In JScript');
    }
}
