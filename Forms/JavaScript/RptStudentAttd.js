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


        //=======populate Course ===========
        m_session_var_name = "S_POPULATE_COURSE";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_course", "m_grid_populate_course", "div_course_name", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("CourseId,CourseName");
        DynamicHtmlTemplate_SetControlName("cntxt_course_id,ctxt_course_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_course', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_course', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_course');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("CourseId,CourseId,hidden_textbox,R,10px");
        m_field_arr.push("CourseName,Course Name,read_only_textbox,L,100px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Batch year Course ===========
        m_session_var_name = "S_BATCH_YEAR";
        DynamicHtmlTemplate_AddKeyName("m_key_batch_year", "m_grid_batch_year", "div_batch_year", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("batch_id,batch_year");
        DynamicHtmlTemplate_SetControlName("cntxt_batch_year,ctxt_batch_year");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_batch_year', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_batch_year', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_batch_year');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("batch_id,batch_id,hidden_textbox,R,10px");
        m_field_arr.push("batch_year,Batch Year,read_only_textbox,L,50px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================





        //=======Subject===========
        m_session_var_name = "S_SUBJECT";
        DynamicHtmlTemplate_AddKeyName("m_key_subject", "m_grid_subject", "div_subject", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_subjectId,m_subjectCode");
        DynamicHtmlTemplate_SetControlName("cntxt_subject_id,ctxt_subject");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_subject', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_subject', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_subject');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("m_subjectId,m_subjectId,hidden_textbox,R,10px");
        m_field_arr.push("m_subjectCode,Code,read_only_textbox,L,15px");
        m_field_arr.push("m_subjectName,Name,read_only_textbox,L,50px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================



        //=======Student===========
        m_session_var_name = "S_STUDENT_NAME";
        DynamicHtmlTemplate_AddKeyName("m_key_student", "m_grid_student", "div_student", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("student_id,student_name");
        DynamicHtmlTemplate_SetControlName("cntxt_student_id,ctxt_student");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_student', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_student', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_student');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("student_id,student_id,hidden_textbox,R,10px");

        m_field_arr.push("student_name,Student Name,read_only_textbox,L,20px");
        m_field_arr.push("batch_name,Batch,read_only_textbox,L,25px");
        m_field_arr.push("student_name,Student Name,read_only_textbox,L,20px");
        m_field_arr.push("student_roll,Id,read_only_textbox,L,20px");
        m_field_arr.push("student_college_roll,College Roll,read_only_textbox,L,20px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================




        //=======Search Window===========
        m_session_var_name = "S_SEARCH_WINDOW";
        DynamicHtmlTemplate_AddKeyName("m_key_search_window", "m_grid_search_window", "div_course_name", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("StreamId,StreamName,SemesterId,SemesterName,SectionId,SectionName,sem_type_id,sem_type");
        DynamicHtmlTemplate_SetControlName("cntxt_stream_id,ctxt_stream,cntxt_semester_id,ctxt_semester,cntxt_section_id,ctxt_section,cntxt_sem_type_id,ctxt_sem_type");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_window', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_window', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_window');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("StreamId,StreamId,hidden_textbox,R,10px");
        m_field_arr.push("SemesterId,SemesterId,hidden_textbox,R,10px");
        m_field_arr.push("SectionId,SectionId,hidden_textbox,R,10px");
        m_field_arr.push("sem_type_id,sem_type_id,hidden_textbox,R,10px");

        m_field_arr.push("StreamName,Stream,read_only_textbox,L,30px");
        m_field_arr.push("SemesterName,Semester,read_only_textbox,L,30px");
        m_field_arr.push("SectionName,Section,read_only_textbox,L,30px");
        m_field_arr.push("sem_type,Semtype,read_only_textbox,L,30px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================
		
		LoadMenu();




    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}


function PopulateCourse(event) {
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


function PopulateBatch(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        m_batch = GetValueByCtrlName("ctxt_batch_year") + "%";
        m_college_id = GetValueByCtrlName("cntxt_college_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_College_id,INT," + m_college_id);
        m_sp_param.push("@p_batch_year,VARCHAR," + m_batch);


        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_batch_year",
                                             m_sp_param,
                                             "Proc_Get_stf_BatchYear",
                                             m_batch,
                                             0);
    }
    catch (err) {
        alert('PopulateBatch() - Error In JScript');
    }
}




function ShowRoutine() {
    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_sem_type_id = GetValueByCtrlName("cntxt_sem_type_id");
        cntxt_sem_type_id = "-1";

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_year);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + "0");
        m_sp_param.push("@p_semester_id,INT," + "0");
        m_sp_param.push("@p_section_id,INT," + "0");
        m_sp_param.push("@p_sem_type,INT," + cntxt_sem_type_id);


        DynamicHtmlTemplate_PopulateGrid("m_key_search_window", m_sp_param, "Proc_Get_Batch_Course_Stream_Semester_Wise_Section");
    }
    catch (err) {
        alert("ShowRoutine() - JScript Error");
    }
}




function PopulateSubject(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;


        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        ctxt_subject = GetValueByCtrlName("ctxt_subject") + "%";


        var m_sp_param = new Array();
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_year);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_sem_id,INT," + cntxt_semester_id);
        m_sp_param.push("@p_sub_name,VARCHAR," + ctxt_subject);



        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_subject",
                                             m_sp_param,
                                             "Proc_Get_Batch_Course_Stream_Sem_Wise_Subject",
                                             ctxt_subject,
                                             0);
    }
    catch (err) {
        alert('PopulateSubject() - Error In JScript');
    }
}

function PrintAttd() {

    if (GetRadioButStat("radio_type_0") == true) {
        PrintStudentAttd();
    }
    else if (GetRadioButStat("radio_type_1") == true) {
        PeriodWiseAttSum();
    }
    else if (GetRadioButStat("radio_type_2") == true) {
        PeriodWiseAttDet();
    }
    else if (GetRadioButStat("radio_type_3") == true) {
        PrintStudentAttdSumm();
    }
    else if (GetRadioButStat("radio_type_4") == true) {
        ExportStudentAttdMatrix();
    }

}

function PrintStudentAttd() {
    try {
        if (GetRadioButStat("radio_pdf_xls_0") == true) {
            m_format = "PDF"
        }
        else if (GetRadioButStat("radio_pdf_xls_1") == true) {
            m_format = "XLS"
        }



        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_student_id = GetValueByCtrlName("cntxt_student_id");
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");


        //======================================================================
        var m_SpParam = new Array;
        m_SpParam.push(CreateParam("@p_college_id", cntxt_college_id, "INT"))
        m_SpParam.push(CreateParam("@p_student_id", cntxt_student_id, "INT"))
        m_SpParam.push(CreateParam("@p_from_date", dtp_from_date, "DATETIME"))
        m_SpParam.push(CreateParam("@p_to_date", dtp_to_date, "DATETIME"))
        m_SpParam.push(CreateParam("@p_batch_year", cntxt_batch_year, "INT"))
        m_SpParam.push(CreateParam("@p_course_id", cntxt_course_id, "INT"))
        m_SpParam.push(CreateParam("@p_stream_id", cntxt_stream_id, "INT"))
        m_SpParam.push(CreateParam("@p_sem_id", cntxt_semester_id, "INT"))
        m_SpParam.push(CreateParam("@p_sub_id", cntxt_subject_id, "INT"))
        m_SpParam.push(CreateParam("@p_is_only_absent", "0", "INT"))


        m_head1 = "Student Wise Attendance From " + dtp_from_date + " To " + dtp_to_date;
        var m_FormulaList = new Array;
        m_FormulaList.push(CreateFormula("m_college", GetValueByCtrlName("ctxt_college_name")));
        m_FormulaList.push(CreateFormula("m_head1", m_head1));


        GenerateReport("rptStudentWiseAttdDet.rpt",
                        m_SpParam,
                        m_FormulaList,
                        null,
                        m_format);

    }
    catch (err) {
        alert('PrintStudentAttd() - Error In JScript');
    }
}




function ResetAll() {
    try {

        SetValue("cntxt_batch_year", "0");
        SetValue("cntxt_course_id", "0");
        SetValue("cntxt_stream_id", "0");
        SetValue("cntxt_semester_id", "0");
        SetValue("cntxt_subject_id", "0");
        SetValue("cntxt_sem_type_id", "0");
        SetValue("cntxt_student_id", "0");
        SetValue("cntxt_section_id", "0");


        SetValue("ctxt_batch_year", "");
        SetValue("ctxt_course_name", "");
        SetValue("ctxt_stream", "");
        SetValue("ctxt_sem_type", "");
        SetValue("ctxt_semester", "");
        SetValue("ctxt_subject", "");
        SetValue("ctxt_dept", "");
        SetValue("ctxt_student", "");
        SetValue("ctxt_section", "");

    }
    catch (err) {
        alert("ResetAll() - JScript Error");
    }
}


function PopulateStudent(event) {
    debugger
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ResetNameCodeControl("ctxt_student", "cntxt_student_id")

        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");

        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        ctxt_student = GetValueByCtrlName("ctxt_student") + "%";


        var m_sp_param = new Array();
        m_sp_param.push("@p_branch_id,INT," + cntxt_branch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);


        m_sp_param.push("@p_batch_year,INT," + cntxt_batch_year);
        m_sp_param.push("@p_batch_id,INT," + "0");
        m_sp_param.push("@p_category_id,INT," + "0");
        m_sp_param.push("@p_active_stat,VARCHAR," + "%");
        m_sp_param.push("@p_hostel_stat,VARCHAR," + "%");
        m_sp_param.push("@p_year_lag_stat,VARCHAR," + "%");
        m_sp_param.push("@p_student_name,VARCHAR," + ctxt_student);
        m_sp_param.push("@p_student_code,VARCHAR," + "%");
        m_sp_param.push("@p_scholarship_id,INT," + "0");

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_student",
                                             m_sp_param,
                                             "Proc_Disp_Student_List",
                                             ctxt_student,
                                             0);
    }
    catch (err) {
        alert('PopulateStudent() - Error In JScript');
    }
}



function PeriodWiseAttSum() {
    try {
        if (GetRadioButStat("radio_pdf_xls_0") == true) {
            m_format = "PDF"
        }
        else if (GetRadioButStat("radio_pdf_xls_1") == true) {
            m_format = "XLS"
        }

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");


        //======================================================================
        var m_SpParam = new Array;
        m_SpParam.push(CreateParam("@p_college_id", cntxt_college_id, "INT"))
        m_SpParam.push(CreateParam("@p_batch_year", cntxt_batch_year, "INT"))
        m_SpParam.push(CreateParam("@p_course_id", cntxt_course_id, "INT"))
        m_SpParam.push(CreateParam("@p_stream_id", cntxt_stream_id, "INT"))
        m_SpParam.push(CreateParam("@p_semester_id", cntxt_semester_id, "INT"))
        m_SpParam.push(CreateParam("@p_from_date", dtp_from_date, "DATETIME"))
        m_SpParam.push(CreateParam("@p_to_date", dtp_to_date, "DATETIME"))
        m_SpParam.push(CreateParam("@_section_id", cntxt_section_id, "INT"))
        m_SpParam.push(CreateParam("@_group_id", "0", "INT"))


        m_head1 = "Period Wise Attendance (Summary) From " + dtp_from_date + " To " + dtp_to_date;
        var m_FormulaList = new Array;
        m_FormulaList.push(CreateFormula("m_college", GetValueByCtrlName("ctxt_college_name")));
        m_FormulaList.push(CreateFormula("m_head1", m_head1));


        GenerateReport("rptPeriodWiseAttdSummary.rpt",
                        m_SpParam,
                        m_FormulaList,
                        null,
                        m_format);

    }
    catch (err) {
        alert('PeriodWiseAttSum() - Error In JScript');
    }
}



function PeriodWiseAttDet() {
    try {
        if (GetRadioButStat("radio_pdf_xls_0") == true) {
            m_format = "PDF"
        }
        else if (GetRadioButStat("radio_pdf_xls_1") == true) {
            m_format = "XLS"
        }

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");


        //======================================================================
        var m_SpParam = new Array;
        m_SpParam.push(CreateParam("@p_college_id", cntxt_college_id, "INT"))
        m_SpParam.push(CreateParam("@p_batch_year", cntxt_batch_year, "INT"))
        m_SpParam.push(CreateParam("@p_course_id", cntxt_course_id, "INT"))
        m_SpParam.push(CreateParam("@p_stream_id", cntxt_stream_id, "INT"))
        m_SpParam.push(CreateParam("@p_semester_id", cntxt_semester_id, "INT"))
        m_SpParam.push(CreateParam("@p_from_date", dtp_from_date, "DATETIME"))
        m_SpParam.push(CreateParam("@p_to_date", dtp_to_date, "DATETIME"))
        m_SpParam.push(CreateParam("@p_disp_type", "0", "INT"))


        m_head1 = "Period Wise Attendance (Details) From " + dtp_from_date + " To " + dtp_to_date;
        var m_FormulaList = new Array;
        m_FormulaList.push(CreateFormula("m_college", GetValueByCtrlName("ctxt_college_name")));
        m_FormulaList.push(CreateFormula("m_head1", m_head1));


        GenerateReport("rptPeriodWiseAttdDet.rpt",
                        m_SpParam,
                        m_FormulaList,
                        null,
                        m_format);

    }
    catch (err) {
        alert('PeriodWiseAttDet() - Error In JScript');
    }
}



function PrintStudentAttdSumm() {
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
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        m_disp_type = "1";
        cntxt_from_val = GetValueByCtrlName("cntxt_from_val");
        cntxt_to_val = GetValueByCtrlName("cntxt_to_val");



        //======================================================================
        var m_SpParam = new Array;
        m_SpParam.push(CreateParam("@p_college_id", cntxt_college_id, "INT"))
        m_SpParam.push(CreateParam("@p_from_date", dtp_from_date, "DATETIME"))
        m_SpParam.push(CreateParam("@p_to_date", dtp_to_date, "DATETIME"))
        m_SpParam.push(CreateParam("@p_batch_year", cntxt_batch_year, "INT"))
        m_SpParam.push(CreateParam("@p_course_id", cntxt_course_id, "INT"))
        m_SpParam.push(CreateParam("@p_stream_id", cntxt_stream_id, "INT"))
        m_SpParam.push(CreateParam("@p_sem_id", cntxt_semester_id, "INT"))
        m_SpParam.push(CreateParam("@p_disp_type", m_disp_type, "INT"))
        m_SpParam.push(CreateParam("@p_from_pcent", cntxt_from_val, "INT"))
        m_SpParam.push(CreateParam("@p_to_pcent", cntxt_to_val, "INT"))


        m_head1 = "Student Wise Attendance (Summary as per Attendance Entered) From " + dtp_from_date + " To " + dtp_to_date;
        var m_FormulaList = new Array;
        m_FormulaList.push(CreateFormula("m_college", GetValueByCtrlName("ctxt_college_name")));
        m_FormulaList.push(CreateFormula("m_head1", m_head1));


        GenerateReport("rptStudentWiseAttdSum.rpt",
                        m_SpParam,
                        m_FormulaList,
                        null,
                        m_format);

    }
    catch (err) {
        alert('PrintStudentAttdSumm() - Error In JScript');
    }
}


function ExportStudentAttdMatrix() {
    try {
        if (GetRadioButStat("radio_pdf_xls_0") == true) {
            m_format = "PDF"
        }
        else if (GetRadioButStat("radio_pdf_xls_1") == true) {
            m_format = "XLS"
        }

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");


        //======================================================================
        var m_sp_param = new Array;
        m_sp_param.push("@P_COLLEGE_ID,INT," + cntxt_college_id);
        m_sp_param.push("@P_FROM_DATE,DATETIME," + dtp_from_date);
        m_sp_param.push("@P_TO_DATE,DATETIME," + dtp_to_date);
        m_sp_param.push("@P_BATCH,INT," + cntxt_batch_year);
        m_sp_param.push("@P_COURSE_ID,INT," + cntxt_course_id);
        m_sp_param.push("@P_STREAM_ID,INT," + cntxt_stream_id);
        m_sp_param.push("@P_SEMESTER_ID,INT," + cntxt_semester_id);
        m_sp_param.push("@P_SECTION_ID,INT," + cntxt_section_id);

        m_col_name = "NA";
        m_field_name = "NA";
        //Jf_ExportToExcel("Attd.xls", m_sp_param, "Proc_Get_Student_Attd_Matrix", m_col_name, m_field_name, 0);
        Jf_ExportToExcel("Attd.xls", m_sp_param, "Proc_Get_Student_Attd_Matrix_New", m_col_name, m_field_name, 0);

    }
    catch (err) {
        alert('ExportStudentAttdMatrix() - Error In JScript');
    }
}

