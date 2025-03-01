var m_array_routine_header;
var m_array_routine_data;


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

function ShowHidePanel(p_flag) {
    try {

        if (p_flag == 1) {
            ShowHideControl("m_DivPanelHeader", 1);
            ShowHideControl("m_DivPanelSearchStudent", 0);
            ShowHideControl("m_DivPanelSearchSubjecta", 0);
            ShowHideControl("m_Div_RoutineAllocationDate", 0);

            document.getElementById("ctxt_stream_name").disabled = true;
            document.getElementById("ctxt_semester_type").disabled = true;
            document.getElementById("ctxt_semester_name").disabled = true;
            document.getElementById("ctxt_section_name").disabled = true;
        }
        else if (p_flag == 2) {
            ShowHideControl("m_DivPanelHeader", 1);
            ShowHideControl("m_DivPanelSearchStudent", 1);
            ShowHideControl("m_DivPanelSearchSubjecta", 1);
            ShowHideControl("m_Div_RoutineAllocationDate", 1);
        }
        else if (p_flag == 3) {
            ShowHideControl("m_DivPanelSearchStudent", 1);
            ShowHideControl("m_DivPanelSearchSubjecta", 1);
            ShowHideControl("m_Div_RoutineAllocationDate", 1);
        }


    }
    catch (err) {
        alert("ShowHidePanel() - JScript Error");
    }
}

function Init() {
    try {
        SetAutoCompleteOff();
        SetFocusOffByTagName("DIV");
        SetDateEventByTagName();

        ShowHidePanel('1');

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
        m_field_arr.push("CourseName,Course Name,read_only_textbox,L,50px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======populate Starting Batch ===========
        m_session_var_name = "S_POPULATE_BATCH";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_starting_batch", "m_grid_populate_batch", "div_StartingBatch", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("batch_id,batch_year"); // value and text both are sem
        DynamicHtmlTemplate_SetControlName("cntxt_batch_id,ctxt_batch");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_starting_batch', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_starting_batch', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_starting_batch');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("batch_id,BatchId,hidden_textbox,R,10px");
        m_field_arr.push("batch_year,Batch,read_only_textbox,L,50px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //===SEARCH====POPULATE_BATCH_COURSE_WISE_SEM_STREAM_SETTING_GRID===========
        m_session_var_name = "S_POPULATE_BATCH_COURSE_WISE_SEM_STREAM_SECTION_GRID";
        DynamicHtmlTemplate_AddKeyName("m_key_BatchCourseWiseStreamSemSectionSearch", "m_grid_BatchCourseSemStreamWiseSection", "div_search", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("CourseId,CourseName,StreamId,StreamName,sem_type_id,sem_type,SemesterId,SemesterName,SectionId,SectionName");
        DynamicHtmlTemplate_SetControlName("cntxt_course_id,ctxt_course_name,cntxt_stream_id,ctxt_stream_name,cntxt_semester_type_id,ctxt_semester_type,cntxt_semester_id,ctxt_semester_name,cntxt_section_id,ctxt_section_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_BatchCourseWiseStreamSemSectionSearch', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_BatchCourseWiseStreamSemSectionSearch', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_BatchCourseWiseStreamSemSectionSearch');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("CourseId,CourseId,hidden_textbox,L,50%");
        m_field_arr.push("CourseName,COURSE NAME,read_only_textbox,L,20%");

        m_field_arr.push("StreamId,StreamId,hidden_textbox,L,10%");
        m_field_arr.push("StreamName,STREAM NAME,read_only_textbox,L,30%");

        m_field_arr.push("sem_type_id,sem_type_id,hidden_textbox,L,15%");
        m_field_arr.push("sem_type,SEMESTER TYPE,read_only_textbox,L,15%");

        m_field_arr.push("SemesterId,SemesterId,hidden_textbox,L,10%");
        m_field_arr.push("SemesterName,SEMESTER NAME,read_only_textbox,L,15%");

        m_field_arr.push("SectionId,SectionId,hidden_textbox,L,15%");
        m_field_arr.push("SectionName,SECTION NAME,read_only_textbox,L,15%");

        m_field_arr.push("sem_no,sem_no,hidden_textbox,L,15%");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        LoadMenu();
    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}
//------------------------------------------------

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
//------------------------------------------------

function PopulateStartingBatch(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_batch = GetValueByCtrlName("ctxt_batch") + "%";
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_batch_year,VARCHAR," + ctxt_batch);
        m_sp_param.push("@p_College_id,INT," + cntxt_college_id);


        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_starting_batch",
                                             m_sp_param,
                                             "Proc_Get_stf_BatchYear",
                                             ctxt_batch,
                                             0);
    }
    catch (err) {
        alert('PopulateStartingBatch() - Error In JScript');
    }
}
//------------------------------------------------
function ValidateSave(p_flag) {
    try {


        if (p_flag == 1) {

            if (GetValueByCtrlName('ctxt_batch') == "") {
                ShowMsgWnd('Select Batch');
                return false;
            }
            if (GetValueByCtrlName('ctxt_course_name') == "") {
                ShowMsgWnd('Select Course');
                return false;
            }
        }
        else if (p_flag == 2) {

            if (GetValueByCtrlName('ctxt_stream_name') == "") {
                ShowMsgWnd('Click on Search Button and Select');
                return false;
            }
            if (GetValueByCtrlName('ctxt_semester_type') == "") {
                ShowMsgWnd('Select Semester Type');
                return false;
            }
            if (GetValueByCtrlName('ctxt_semester_name') == "") {
                ShowMsgWnd('Select Semester');
                return false;
            }
            if (GetValueByCtrlName('ctxt_section_name') == "") {
                ShowMsgWnd('Select Section');
                return false;
            }
        }
        else if (p_flag == 3) {

            if (GetValueByCtrlName('dtp_from_date') == "") {
                ShowMsgWnd('Select From Date');
                return false;
            }
            if (GetValueByCtrlName('dtp_to_date') == "") {
                ShowMsgWnd('Select To Date');
                return false;
            }
        }
        else if (p_flag == 4) {

            if ((GetValueByCtrlName("dtp_last_attendance_date") == "01/01/1900") && ((GetValueByCtrlName('dtp_from_date')) < (GetValueByCtrlName('dtp_to_date')))) {
      
            }
            else {
                alert("Error");
                return false;
            }
        }
        return true;
    }
    catch (err) {
        alert('ValidateSave - Error In JScript');
        return false;
    }
}
//--------------------------------------------
function BatchCourseWiseStreamAndSemSectionSearch() {
    try {
        if (ValidateSave('1') == false) {
            return;
        }
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_sem_no = GetValueByCtrlName("cntxt_sem_no");

        if (isNaN(cntxt_sem_no) == true) {
            cntxt_sem_no = "0";
        }

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + 0);
        m_sp_param.push("@p_semester_id,INT," + 0);
        m_sp_param.push("@p_section_id,INT," + 0);
        m_sp_param.push("@p_sem_type,INT," + "-1");
        m_sp_param.push("@p_sem_no,INT," + cntxt_sem_no);

        DynamicHtmlTemplate_PopulateGrid("m_key_BatchCourseWiseStreamSemSectionSearch", m_sp_param, "Proc_Get_Batch_Course_Stream_Semester_Wise_Section");
    }
    catch (err) {
        alert('PopulateBatchCourseSemStreamWiseSection() - Error In JScript');
    }
}
//------------------------------------------------

function PopulateRoutine() {
    try {
        if (ValidateSave('1') == false || ValidateSave('2') == false) {
            return;
        }
        ShowHidePanel('2');
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_academic_ses_id = GetValueByCtrlName("cntxt_academic_ses_id");

        WebServiceDateWiseRoutineAllocation.DispRoutine(cntxt_college_id,
                                                    cntxt_batch_id,
                                                    cntxt_course_id,
                                                    cntxt_stream_id,
                                                    cntxt_semester_id,
                                                    cntxt_section_id,
                                                    cntxt_academic_ses_id,
                                                    OnCompleteDispRoutine,
                                                    OnErrorDispRoutine,
                                                    OnTimeOutDispRoutine);
       
    }
    catch (err) { 
    }
}
function OnCompleteDispRoutine(arg) {
    if (arg.m_RetVal > 0) {
        alert('Error in WebMethod');
    }
    else {
        m_array_routine_header = arg.m_routine_header;
        m_array_routine_data = arg.m_routine_data;

        CreateRoutineMatrix();
//        PopulateFromYear_ToYear();
//        PopulateFromMonth_ToMonth();
//        PopulateFromDate_ToDate();
        //PopulateLastAttendanceDate();
        PopulateFromToDateMonthLastAttendance();
    }
}
function OnErrorDispRoutine(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutDispRoutine(arg) {
    alert("Time Out");
}
//-------------------------------------------
function RemoveDateWiseRoutineMatrix() {
    try {

        m_div_routine_container = document.getElementById("div_routine_container");

        while (m_div_routine_container.hasChildNodes()) {
            m_div_routine_container.removeChild(m_div_routine_container.firstChild);
        }
    }
    catch (err) {
    }
}

function CreateRoutineMatrix() {
    try {
        RemoveDateWiseRoutineMatrix();
        m_div_routine_container = document.getElementById("div_routine_container");

        var m_master_table = document.createElement('table');
        m_master_table.setAttribute('class', "table table-bordered table-striped table-vertical-middle table-tr-firstcl");

        /*********Create Heading***********/
        var m_table_header = document.createElement('thead');
        var m_table_row = document.createElement('tr');

        for (iCtr = 0; iCtr <= m_array_routine_header.length - 1; iCtr++) {
            var m_table_col = document.createElement('th');
            m_table_col.setAttribute('style','background:#333;color:#fff');
            m_table_col.innerHTML = m_array_routine_header[iCtr];
            m_table_row.appendChild(m_table_col);
        }
        m_table_header.appendChild(m_table_row);
        m_master_table.appendChild(m_table_header);

        /*********Create details***********/
        var m_table_body = document.createElement('tbody');

        for (iCtr = 0; iCtr <= m_array_routine_data.length - 1; iCtr++) {
            var m_table_row = document.createElement('tr');

            for (iCol = 0; iCol <= m_array_routine_data[iCtr].length - 1; iCol++) {
                var m_table_col = document.createElement('td');
                m_current_val = m_array_routine_data[iCtr][iCol];

                    m_current_arr1 = m_current_val.split("|");
                    var m_inner_table = document.createElement('table');
                    m_inner_table.setAttribute('class', "tablechild");

                    var m_inner_body = document.createElement('tbody');

                    for (ArrCtr = 0; ArrCtr <= m_current_arr1.length - 1; ArrCtr++) {
                        if (m_current_arr1[ArrCtr] != "") {
                            var m_inner_row = document.createElement('tr');
                            var m_inner_col = document.createElement('td');
                            m_current_arr2 = m_current_arr1[ArrCtr].split("<>");
                            m_param1 = m_current_arr2[1];
                            m_inner_col.innerHTML = "<u></u> " + m_current_arr2[0];
                            m_inner_row.appendChild(m_inner_col);
                            m_inner_body.appendChild(m_inner_row);
                        }
                    }
                    m_inner_table.appendChild(m_inner_body);

                    m_table_col.appendChild(m_inner_table);
                    m_table_row.appendChild(m_table_col);
                


            }
            m_table_body.appendChild(m_table_row);

        }
        m_master_table.appendChild(m_table_body);

        m_div_routine_container.appendChild(m_master_table);

      //  SetFocusOnControl("cmd_create");
    }
    catch (err) {
        alert("CreateRoutineMatrix() - JScript Error");
    }
}
//-----------------------------------------------------

function SaveData() {
    try {

        if (ValidateSave('1') == false || ValidateSave('2') == false || ValidateSave('3') == false){
            return;
        }

        ctxt_password = GetValueByCtrlName('ctxt_password')
        if (ctxt_password != "sa@hash") {
            ShowMsgWnd('Enter Password');
            return false;
        }

        var m_HeaderArray = new Array();
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");

        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");

        cntxt_from_month_id = GetMonth(dtp_from_date);
        cntxt_to_month_id = GetMonth(dtp_to_date);
        cntxt_from_year_id = GetYear(dtp_from_date);
        cntxt_to_year_id = GetYear(dtp_to_date);

        if (parseFloat(cntxt_from_month_id) < 10) {
            cntxt_from_month_id = "0" + cntxt_from_month_id;
        }

        if (parseFloat(cntxt_to_month_id) < 10) {
            cntxt_to_month_id = "0" + cntxt_to_month_id;
        }


        var start_Year_month = (cntxt_from_year_id + cntxt_from_month_id);
        var end_Year_month = (cntxt_to_year_id + cntxt_to_month_id);


        dtp_last_attendance_date = GetValueByCtrlName("dtp_last_attendance_date");




        m_HeaderArray.push(GetFieldValArr('cntxt_college_id', cntxt_college_id));
        m_HeaderArray.push(GetFieldValArr('dtp_from_date', dtp_from_date));
        m_HeaderArray.push(GetFieldValArr('dtp_to_date', dtp_to_date));
        m_HeaderArray.push(GetFieldValArr('cntxt_batch_id', cntxt_batch_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_course_id', cntxt_course_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_stream_id', cntxt_stream_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_semester_id', cntxt_semester_id));
        m_HeaderArray.push(GetFieldValArr('cntxt_section_id', cntxt_section_id));

        m_HeaderArray.push(GetFieldValArr('start_Year_month', start_Year_month));
        m_HeaderArray.push(GetFieldValArr('end_Year_month', end_Year_month));

        m_HeaderArray.push(GetFieldValArr('dtp_last_attendance_date', dtp_last_attendance_date));


        ShowWaitMsgWnd("Please Wait");
        WebServiceDateWiseRoutineAllocation.SaveData(m_HeaderArray, OnComplete_SaveData, OnError_SaveData, OnTimeOut_SaveData);

    }
    catch (err) {
        alert("SaveData() - JScript Error");
    }
}
function OnComplete_SaveData(arg) {
    DestroyWaitMsgWnd();
    ShowMsgWnd(arg);
    PopulateFromToDateMonthLastAttendance();
}
function OnError_SaveData(arg) {
    alert("error : " + argmessage);
    //ClearDataAfterSave();
}
function OnTimeOut_SaveData(arg) {
    alert("Time Out");
}
//----------------------------------------------

function ClearDataAfterSave() {
    try {
        ShowHidePanel('1');
        SetValue("ctxt_stream_name", "");
        SetValue("ctxt_semester_type", "");
        SetValue("ctxt_semester_name", "");
        SetValue("ctxt_section_name", "");

        SetValue("dtp_last_attendance_date", "");
        SetValue("ctxt_from_year", "");
        SetValue("ctxt_to_year", "");
        SetValue("ctxt_from_month", "");
        SetValue("ctxt_to_month", "");

        SetValue("dtp_from_date", "");
        SetValue("dtp_to_date", "");


        SetValue("cntxt_stream_id", "0");
        SetValue("cntxt_semester_id", "0");
        SetValue("cntxt_section_id", "0");
        SetValue("cntxt_subject_id", "0");
        DynamicHtmlTemplate_DeleteAllControl('m_key_BatchCourseWiseStreamSemSectionSearch');
        RemoveDateWiseRoutineMatrix();
    }
    catch (err) {
        alert("ClearDataAfterSave() - JScript Error");
    }
}
//-----------------------------------------------------

//function PopulateLastAttendanceDate() {
//    try {
//        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
//        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
//        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
//        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
//        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
//        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");

//        WebServiceDateWiseRoutineAllocation.PopulateLastAttendanceDate(cntxt_college_id,cntxt_batch_id, cntxt_course_id, cntxt_stream_id, cntxt_semester_id,
//                                                                    cntxt_section_id, OnCompletePopulateLastAttendanceDate,
//                                                                    OnErrorPopulateLastAttendanceDate, OnTimeOutPopulateLastAttendanceDate);
//    }
//    catch (err) {
//        alert("PopulateLastAttendanceDate() - JScript Error");
//    }
//}
//function OnCompletePopulateLastAttendanceDate(arg) {
//    if (arg.m_RetVal > 0) {
//        alert('Error in WebMethod PopulateLastAttendanceDate');
//    }
//    else {
//        SetValue("dtp_last_attendance_date", arg.m_last_attendance_date);
//    }
//}
//function OnErrorPopulateLastAttendanceDate(arg) {
//    alert("error has occured: " + arg._message);
//}
//function OnTimeOutPopulateLastAttendanceDate(arg) {
//    alert("Time Out");
//}
//------------------------------------------------

//function PopulateFromYear_ToYear() {
//    try {
//        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
//        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
//        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
//        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
//        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
//        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");

//        WebServiceDateWiseRoutineAllocation.PopulateFromYear_ToYear(cntxt_college_id,cntxt_batch_id, cntxt_course_id, cntxt_stream_id, cntxt_semester_id,
//                                                                    cntxt_section_id, OnCompletePopulateFromYear_ToYear, 
//                                                                    OnErrorPopulateFromYear_ToYear,OnTimeOutPopulateFromYear_ToYear);
//    }
//    catch (err) {
//        alert("PopulateFromYear_ToYear() - JScript Error");
//    }
//}
//function OnCompletePopulateFromYear_ToYear(arg) {
//    if (arg.m_RetVal > 0) {
//        alert('Error in WebMethod PopulateFromYear_ToYear');
//    }
//    else {
//      SetValue("ctxt_from_year", arg.m_from_year);
//      SetValue("ctxt_to_year", arg.m_to_year);
//   }
//}
//function OnErrorPopulateFromYear_ToYear(arg) {
//    alert("error has occured: " + arg._message);
//}
//function OnTimeOutPopulateFromYear_ToYear(arg) {
//    alert("Time Out");
//}
//------------------------------------------------

//function PopulateFromMonth_ToMonth() {
//    try {
//        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
//        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
//        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
//        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
//        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
//        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");

//        WebServiceDateWiseRoutineAllocation.PopulateFromMonth_ToMonth(cntxt_college_id,cntxt_batch_id, cntxt_course_id, cntxt_stream_id, cntxt_semester_id,
//                                                                    cntxt_section_id, OnCompletePopulateFromMonth_ToMonth,
//                                                                    OnErrorPopulateFromMonth_ToMonth, OnTimeOutPopulateFromMonth_ToMonth);
//    }
//    catch (err) {
//        alert("PopulateFromMonth_ToMonth() - JScript Error");
//    }
//}
//function OnCompletePopulateFromMonth_ToMonth(arg) {
//    if (arg.m_RetVal > 0) {
//        alert('Error in WebMethod PopulateFromMonth_ToMonth');
//    }
//    else {
//        SetValue("ctxt_from_month", arg.m_from_month);
//        SetValue("ctxt_to_month", arg.m_to_month);
//    }
//}
//function OnErrorPopulateFromMonth_ToMonth(arg) {
//    alert("error has occured: " + arg._message);
//}
//function OnTimeOutPopulateFromMonth_ToMonth(arg) {
//    alert("Time Out");
//}
//------------------------------------------------

//function PopulateFromDate_ToDate() {
//    try {
//        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
//        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
//        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
//        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
//        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
//        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");

//        WebServiceDateWiseRoutineAllocation.PopulateFromDate_ToDate(cntxt_college_id,cntxt_batch_id, cntxt_course_id, cntxt_stream_id, cntxt_semester_id,
//                                                                    cntxt_section_id, OnCompletePopulateFromDate_ToDate,
//                                                                    OnErrorPopulateFromDate_ToDate, OnTimeOutPopulateFromDate_ToDate);
//    }
//    catch (err) {
//        alert("PopulateFromMonth_ToMonth() - JScript Error");
//    }
//}
//function OnCompletePopulateFromDate_ToDate(arg) {
//    if (arg.m_RetVal > 0) {
//        alert('Error in WebMethod PopulateFromMonth_ToMonth');
//    }
//    else {
//        SetValue("dtp_from_date", arg.m_from_date);
//        SetValue("dtp_to_date", arg.m_to_date);
//    }
//}
//function OnErrorPopulateFromDate_ToDate(arg) {
//    alert("error has occured: " + arg._message);
//}
//function OnTimeOutPopulateFromDate_ToDate(arg) {
//    alert("Time Out");
//}
//------------------------------------------------

function Cancle() {
    try {

        SetValue("ctxt_batch", "");
        SetValue("ctxt_course_name", "");
        SetValue("cntxt_course_id", "0");
        SetValue("cntxt_batch_id", "0");
        ClearDataAfterSave();
    }
    catch (err) {
        alert("Cancle() - JScript Error");
    }
}




/*************************************/

function PopulateFromToDateMonthLastAttendance() {
    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");

        WebServiceDateWiseRoutineAllocation.PopulateFromToDateMonthLastAttendance(cntxt_college_id, cntxt_batch_id, cntxt_course_id, cntxt_stream_id, cntxt_semester_id,
                                                                    cntxt_section_id, OnCompletePopulateFromToDateMonthLastAttendance,
                                                                    OnErrorPopulateFromToDateMonthLastAttendance, OnTimeOutPopulateFromToDateMonthLastAttendance);
    }
    catch (err) {
        alert("PopulateFromToDateMonthLastAttendance() - JScript Error");
    }
}
function OnCompletePopulateFromToDateMonthLastAttendance(arg) {
    if (arg.m_RetVal > 0) {
        alert('Error in WebMethod PopulateFromToDateMonthLastAttendance');
    }
    else {
        SetValue("ctxt_from_year", arg.m_from_year);
        SetValue("ctxt_to_year", arg.m_to_year);

        SetValue("ctxt_from_month", arg.m_from_month);
        SetValue("ctxt_to_month", arg.m_to_month);

        SetValue("dtp_from_date", arg.m_from_date);
        SetValue("dtp_to_date", arg.m_to_date);

        SetValue("dtp_last_attendance_date", arg.m_last_attendance_date);
    }
}
function OnErrorPopulateFromToDateMonthLastAttendance(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutPopulateFromToDateMonthLastAttendance(arg) {
    alert("Time Out");
}
/************************************/