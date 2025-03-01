
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
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_course', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_course', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_course');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("CourseId,CourseId,hidden_textbox,R,10px");
        m_field_arr.push("CourseName,Course Name,read_only_textbox,L,15px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);


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
        m_field_arr.push("sem_type_name,SEMESTER TYPE,read_only_textbox,L,15px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);


        //=======Populate SemesterType===========
        m_session_var_name = "S_DISPLAY_ROUTINE_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_display_routine_list", "m_grid_display_routine_list", "m_panel_display_routine_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("TIME_TABLE_TEMPLATE_DRAFT_nBatch,TIME_TABLE_TEMPLATE_DRAFT_nCourseId,TIME_TABLE_TEMPLATE_DRAFT_nStreamId,TIME_TABLE_TEMPLATE_DRAFT_nSectionId,TIME_TABLE_TEMPLATE_DRAFT_nAcaSess,TIME_TABLE_TEMPLATE_DRAFT_nSemesterId,STD_SEMESTER_sSemesterName,STD_SECTION_MASTER_sName,STD_STREAM_MASTER_sNAME");
        DynamicHtmlTemplate_SetControlName("cntxt_batch_id,cntxt_course_id,cntxt_stream_id,cntxt_section_id,cntxt_access_id,cntxt_sem_id,ctxt_sem_name,ctxt_sec_name,ctxt_stream_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("PrintRoutine();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_display_routine_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_display_routine_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("TIME_TABLE_TEMPLATE_DRAFT_nStreamId,stream_id,hidden_textbox,L,10px");
        m_field_arr.push("TIME_TABLE_TEMPLATE_DRAFT_nSectionId,section_id,hidden_textbox,L,15px");
        m_field_arr.push("TIME_TABLE_TEMPLATE_DRAFT_nSemesterId,Semester_id,hidden_textbox,L,10px");
        m_field_arr.push("STD_COURSE_MASTER_nCollegeID,CollegeID,hidden_textbox,L,15px");
        m_field_arr.push("TIME_TABLE_TEMPLATE_DRAFT_nCourseId,Course Id,hidden_textbox,L,20px");
        m_field_arr.push("TIME_TABLE_TEMPLATE_DRAFT_nAcaSess,sem_type_id,hidden_textbox,R,10px");

        m_field_arr.push("TIME_TABLE_TEMPLATE_DRAFT_nBatch,Batch,read_only_textbox,L,5px");
        m_field_arr.push("STD_COURSE_MASTER_sNAME,Course Name,read_only_textbox,L,25px");
        m_field_arr.push("STD_SECTION_MASTER_sName,Section,read_only_textbox,L,5px");
        m_field_arr.push("STD_SEMESTER_sSemesterName,Semester,read_only_textbox,L,25px");
        m_field_arr.push("STD_STREAM_MASTER_sNAME,Streame,read_only_textbox,L,20px");
        m_field_arr.push("STD_SEMESTER_nSemNo,Sem No,read_only_textbox,L,5px");
        m_field_arr.push("STD_SEMESTER_sType,Type,read_only_textbox,L,5px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);

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

function PopulateRoutineList() {
    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_semester_type_id = GetValueByCtrlName("cntxt_semester_type_id");
//        cntxt_access_id = GetValueByCtrlName("cntxt_access_id");
        cntxt_sem_no = GetValueByCtrlName("cntxt_sem_no");


        if (parseFloat(cntxt_course_id) == 0 || parseFloat(cntxt_semester_type_id) == -1) {
            ShowMsgWnd("Select Course/Sem Type");
            return;
        }

        if (isNaN(cntxt_sem_no) == true) {
            cntxt_sem_no = "0";
        }
        

        var m_sp_param = new Array();
        m_sp_param.push("@P_College_Id,INT," + cntxt_college_id);
        m_sp_param.push("@p_Sem_Type_Id,INT," + cntxt_semester_type_id);
        m_sp_param.push("@p_Course_Id,INT," + cntxt_course_id);
        m_sp_param.push("@p_session_id,INT," + cntxt_access_id);
//        m_sp_param.push("@p_sem_no,INT," + cntxt_sem_no);

        DynamicHtmlTemplate_PopulateGrid("m_key_display_routine_list", m_sp_param, "Proc_Get_Display_Routine");
    }
    catch (err) {
        alert('PopulateRoutineList() - Error In JScript');
    }
}

function Cancle() {
    try {
        SetValue("cntxt_course_id", "0");
        SetValue("cntxt_semester_type_id", "-1");
        SetValue("ctxt_course_name", "");
        SetValue("ctxt_semester_type", "");
        DynamicHtmlTemplate_DeleteAllControl('m_key_display_routine_list');
    }
    catch (err) {
        alert('Cancle() - Error In JScript');
    }
}

function PrintRoutine() {
 try {
    cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
    cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
    cntxt_semester_type_id = GetValueByCtrlName("cntxt_semester_type_id");
    cntxt_batch_id= GetValueByCtrlName("cntxt_batch_id");
    cntxt_stream_id =  GetValueByCtrlName("cntxt_stream_id");
    cntxt_section_id =  GetValueByCtrlName("cntxt_section_id");
    cntxt_sem_id = GetValueByCtrlName("cntxt_sem_id");
    cntxt_access_id = GetValueByCtrlName("cntxt_access_id");

    //======================================================================
    var m_SpParam = new Array;
    m_SpParam.push(CreateParam("@P_COLLEGE_ID", cntxt_college_id, "INT"))
    m_SpParam.push(CreateParam("@P_BATCH_ID", cntxt_batch_id, "INT"))
    m_SpParam.push(CreateParam("@P_COURSE_ID", cntxt_course_id, "INT"))
    m_SpParam.push(CreateParam("@P_STREAM_ID", cntxt_stream_id, "INT"))
    m_SpParam.push(CreateParam("@P_SEMESTER_ID", cntxt_sem_id, "INT"))
    m_SpParam.push(CreateParam("@P_SECTION_ID", cntxt_section_id, "INT"))
    m_SpParam.push(CreateParam("@P_ACADEMIC_SESSION_ID", cntxt_access_id, "INT"))

    //GetValueByCtrlName("ctxt_course_name")

    var m_FormulaList = new Array;
    m_course_stream = GetValueByCtrlName("ctxt_course_name") + " - " + GetValueByCtrlName("ctxt_stream_name");

    m_FormulaList.push(CreateFormula("m_course", m_course_stream));
    m_FormulaList.push(CreateFormula("m_sem", GetValueByCtrlName("ctxt_sem_name")));
    m_FormulaList.push(CreateFormula("m_batch_year", "Batch Year: "+cntxt_batch_id));
    m_FormulaList.push(CreateFormula("m_section", GetValueByCtrlName("ctxt_sec_name")));
    m_FormulaList.push(CreateFormula("m_college", GetValueByCtrlName("ctxt_college_name")));

    m_format_id = "1";
    m_format_id = prompt("Enter [1]PDF, [2]Excel", m_format_id);
    if (m_format_id == "1") {
        m_format = "PDF";
    }
    else {
        m_format = "EXCEL_WORK_BOOK";
    }



    GenerateReport("rptPrintClassRoutine.rpt",
                        m_SpParam,
                        m_FormulaList,
                        null,
                        m_format);

    }
    catch (err) {
        alert('PrintRoutine() - Error In JScript');
    }
}


function PrintFacultyLoad() {
    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        m_link = "frmClassLoad.aspx?college_id=" + cntxt_college_id + "&is_call_from_mis=0";
        window.open(m_link, "_blank");

    }
    catch (err) {
        alert('PrintFacultyLoad() - Error In JScript');
    }
}
