
var p_field_arr;
var p_data_arr;

var col_std_sl = 0;
var col_std_id = 1;
var col_std_code = 2;
var col_std_roll = 3;
var col_std_name = 4;



function RightMouseClick(event) {
    if (event.which == 3) {
        //alert(window.document.nodeName);
        //event.preventDefault();
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

        //=======populate period ===========
        m_session_var_name = "S_POPULATE_PERIOD";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_period", "m_grid_populate_period", "div_period", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("period_id,period_name");
        DynamicHtmlTemplate_SetControlName("cntxt_period_id,ctxt_period");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_period', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_period', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_period');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("period_id,period_id,hidden_textbox,R,10px");
        m_field_arr.push("period_name,Period Name,read_only_textbox,L,40px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

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
        m_field_arr.push("CourseName,Course Name,read_only_textbox,L,40px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Populate Stream===========
        m_session_var_name = "S_POPULATE_STREAM";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_stream", "m_grid_populate_stream", "div_stream_name", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("STD_STREAM_MASTER_nID,STD_STREAM_MASTER_sNAME");
        DynamicHtmlTemplate_SetControlName("cntxt_stream_id,ctxt_stream_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_stream', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_stream', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_stream');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("STD_STREAM_MASTER_nID,STD_STREAM_MASTER_nID,hidden_textbox,R,10px");
        m_field_arr.push("STD_STREAM_MASTER_sNAME,STREAM NAME,read_only_textbox,L,50px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================



        //=======Populate Subject===========
        m_session_var_name = "S_POPULATE_SUBJECT";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_subject", "m_grid_populate_subject", "div_subject", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("SubjectId,subject_name_code");
        DynamicHtmlTemplate_SetControlName("cntxt_subject_id,ctxt_subject");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("PopulateCoList();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_subject', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_subject', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_subject');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("SubjectId,SubjectId,hidden_textbox,R,10px");
        m_field_arr.push("subject_name_code,Subject,read_only_textbox,L,25px");
        m_field_arr.push("CourseName,Course,read_only_textbox,L,15px");
        m_field_arr.push("StreamName,Stream,read_only_textbox,L,15px");
        m_field_arr.push("SemNo,Sem,read_only_textbox,L,5px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Populate Exam===========
        m_session_var_name = "S_POPULATE_EXAM";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_exam", "m_grid_populate_exam", "div_exam", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("exam_id,exam_name");
        DynamicHtmlTemplate_SetControlName("cntxt_exam_id,ctxt_exam");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_exam', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_exam', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_exam');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("exam_id,exam_id,hidden_textbox,R,10px");
        m_field_arr.push("exam_name,Exam,read_only_textbox,L,25px");


        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Populate Course Outcome===========
        m_session_var_name = "S_POPULATE_COURSE_OUTCOME";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_co_oucome", "m_grid_populate_co_oucome", "m_PanelCoList", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("poco_subject_wise_co_master_nRowId");
        DynamicHtmlTemplate_SetControlName("cntxt_co_id");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("ShowCoOutcome();");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("poco_subject_wise_co_master_nRowId,poco_subject_wise_co_master_nRowId,hidden_textbox,R,10px");
        m_field_arr.push("poco_subject_wise_co_master_sCoNo,Course Outcome,read_only_textbox,L,15px");


        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        LoadMenu();

    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}


function SearchPeriod(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_period = GetValueByCtrlName("ctxt_period") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_name,VARCHAR," + ctxt_period);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_period",
                                             m_sp_param,
                                             "Proc_Get_Poco_Period",
                                             ctxt_period,
                                             0);
    }
    catch (err) {
        alert('SearchPeriod() - Error In JScript');
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





function PopulateSubject(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_subject = GetValueByCtrlName("ctxt_subject") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_Sub_code,VARCHAR," + ctxt_subject);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_subject",
                                             m_sp_param,
                                             "Proc_Get_Subject_details",
                                             ctxt_subject,
                                             0);
    }
    catch (err) {
        alert('PopulateSubject() - Error In JScript');
    }
}


function PopulateStream(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        ctxt_stream_name = GetValueByCtrlName("ctxt_stream_name") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_name,VARCHAR," + ctxt_stream_name);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_stream",
                                             m_sp_param,
                                             "Proc_STF_Get_Stream",
                                             ctxt_stream_name,
                                             0);
    }
    catch (err) {
        alert('PopulateStream() - Error In JScript');
    }
}

function PopulateExam(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        ctxt_exam = GetValueByCtrlName("ctxt_exam") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_name,VARCHAR," + ctxt_exam);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_exam",
                                             m_sp_param,
                                             "Proc_Get_Poco_Exam_Main",
                                             ctxt_exam,
                                             0);
    }
    catch (err) {
        alert('PopulateExam() - Error In JScript');
    }
}


function PopulateCoList() {
    try {

        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_period_id,INT," + cntxt_period_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);

        DynamicHtmlTemplate_PopulateGrid("m_key_populate_co_oucome", m_sp_param, "Proc_Get_Poco_Subject_Wise_Co");

    }
    catch (err) {
        alert('PopulateCoList() - Error In JScript');
    }
}



//--------------------------------------
function ShowCoOutcome() {
    try {
        var m_sp_param = new Array();

        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");


        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_exam_id = GetValueByCtrlName("cntxt_exam_id");
        cntxt_co_id = GetValueByCtrlName("cntxt_co_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_sem = GetValueByCtrlName("cntxt_sem");


        m_sp_param.push("@p_branch_id,INT," + cntxt_branch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_period_id,INT," + cntxt_period_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);
        m_sp_param.push("@p_sem_no,INT," + cntxt_sem);
        m_sp_param.push("@p_exam_main_id,INT," + cntxt_exam_id);
        m_sp_param.push("@p_co_id,INT," + cntxt_co_id);





        ShowWaitMsgWnd("Please Wait");
        WebServiceMasters.GetDataAsArrayWithFieldName(m_sp_param,
                                          "Proc_Disp_Poco_Subject_Wise_Co_Attainment", 0,
                                           OnComplete_ShowCoOutcome,
                                           OnError_ShowCoOutcome,
                                           OnTimeOut_ShowCoOutcome);
    }
    catch (err) {
        alert('ShowCoOutcome() - Error In JScript');
    }

}
function OnComplete_ShowCoOutcome(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg.m_Count) > -1) {
        p_field_arr = arg.m_Field;
        p_data_arr = arg.m_List;
        CreateCoOutcome();
    }
    else {
        alert("Data Not Found");
    }
}
function OnError_ShowCoOutcome(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_ShowCoOutcome(arg) {
    alert("Time Out");
}

//--------------------------------------



function CreateCoOutcome() {
    try {



        m_panel_item_matrix = document.getElementById("m_panel_matrix");
        while (m_panel_item_matrix.hasChildNodes()) {
            m_panel_item_matrix.removeChild(m_panel_item_matrix.firstChild);
        }



        var m_table = document.createElement("table");
        m_table.setAttribute('class', "table table-bordered table-vertical-middle nomargin entry tableFixHead");
        m_table.setAttribute('cellspacing', 0);



        /*Heading*/
        var m_head_body = document.createElement("thead");
        var m_row = document.createElement("tr");


        for (iRowCtr = 0; iRowCtr <= p_field_arr.length - 1; iRowCtr++) {
            var m_col = document.createElement("th");

            //----------For Fixed Column
            if (iRowCtr == col_std_code) {
                m_col.setAttribute('class', "table-col-fixed fast");
            }
            else if (iRowCtr == col_std_roll) {
                m_col.setAttribute('class', "table-col-fixed secend");
            }
            else if (iRowCtr == col_std_name) {
                m_col.setAttribute('class', "table-col-fixed third");
            }
            //------------------------------


            if (iRowCtr <= col_std_id) {
                m_col.style.display = "none"; //Std ID
            }
            var m_div_val = document.createElement("div");

            if (iRowCtr < col_std_name) {
                m_div_val.style.width = "100px";
            }
            else if (iRowCtr == col_std_name) {
                m_div_val.style.width = "200px";
            }
            else {
                m_div_val.style.width = "50px";
            }




            m_div_val.innerHTML = p_field_arr[iRowCtr];
            m_col.appendChild(m_div_val);
            m_row.appendChild(m_col);
        }



        m_head_body.appendChild(m_row);
        m_table.appendChild(m_head_body);

        var m_head_body = document.createElement("tbody");
        for (iRowCtr = 0; iRowCtr <= p_data_arr.length - 1; iRowCtr++) {
            var m_row = document.createElement("tr")
            m_q_no = 0;

            for (iColCtr = 0; iColCtr <= p_data_arr[iRowCtr].length - 1; iColCtr++) {
                var m_col = document.createElement("td");
                if (iColCtr <= col_std_id) {
                    m_col.style.display = "none"; //Std ID
                }

                //----------For Fixed Column
                if (iColCtr == col_std_code) {
                    m_col.setAttribute('class', "table-col-fixed fast");
                }
                else if (iColCtr == col_std_roll) {
                    m_col.setAttribute('class', "table-col-fixed secend");
                }
                else if (iColCtr == col_std_name) {
                    m_col.setAttribute('class', "table-col-fixed third");
                }
                //------------------------------
               
                var m_div_val = document.createElement("div");
                m_div_val.innerHTML = p_data_arr[iRowCtr][iColCtr];

                if (p_data_arr[iRowCtr][col_std_code] == "Avg") {
                    m_col.style.backgroundColor = "#283675";
                    m_col.style.color = "#FFFFFF";
                }

                m_col.appendChild(m_div_val);
                m_row.appendChild(m_col);

            }
            m_head_body.appendChild(m_row);
        }
        m_table.appendChild(m_head_body);
        m_panel_item_matrix.appendChild(m_table);

    }
    catch (err) {
        alert('CreateMarksMatrix() - Error In JScript');
    }
}



function PrintCoAttainment() {
    try {
        m_format = "PDF"


        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");


        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_exam_id = GetValueByCtrlName("cntxt_exam_id");
        cntxt_co_id = GetValueByCtrlName("cntxt_co_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_sem = GetValueByCtrlName("cntxt_sem");



        //======================================================================
        var m_SpParam = new Array;
        m_SpParam.push(CreateParam("@p_branch_id", cntxt_branch_id, "INT"))
        m_SpParam.push(CreateParam("@p_course_id", cntxt_course_id, "INT"))
        m_SpParam.push(CreateParam("@p_stream_id", cntxt_stream_id, "INT"))
        m_SpParam.push(CreateParam("@p_period_id", cntxt_period_id, "INT"))
        m_SpParam.push(CreateParam("@p_subject_id", cntxt_subject_id, "INT"))
        m_SpParam.push(CreateParam("@p_sem_no", cntxt_sem, "INT"))
        m_SpParam.push(CreateParam("@p_exam_main_id", cntxt_exam_id, "INT"))




        m_head1 = "Calculations for CO Attainment for Subject - " + GetValueByCtrlName("ctxt_subject");
        var m_FormulaList = new Array;
        m_FormulaList.push(CreateFormula("m_college", GetValueByCtrlName("ctxt_college_name")));
        m_FormulaList.push(CreateFormula("m_head1", m_head1));


        GenerateReport("rptSubjectWiseCoAttainment.rpt",
                        m_SpParam,
                        m_FormulaList,
                        null,
                        m_format);

    }
    catch (err) {
        alert('PrintCoAttainment() - Error In JScript');
    }
}
