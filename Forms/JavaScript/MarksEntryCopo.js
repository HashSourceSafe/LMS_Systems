
var p_field_arr;
var p_data_arr;
var p_question_arr;

var col_std_id = 0;
var col_std_present = 1;
var col_std_code = 2;
var col_std_roll = 3;
var col_std_name = 4;
var col_marks_total = 5;


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
        DynamicHtmlTemplate_SetEventFunction("NA");
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

        //=======Populate Test===========
        m_session_var_name = "S_POPULATE_TEST";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_test", "m_grid_populate_test", "div_test", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("poso_exam_detail_sRowId,poso_exam_detail_sDesp,poso_exam_detail_nType,poso_exam_detail_nFullMarks,q_count,poso_exam_detail_nIsMarks");
        DynamicHtmlTemplate_SetControlName("cntxt_test_id,ctxt_test,cntxt_test_type,cntxt_full_marks,cntxt_no_of_question,cntxt_is_marks_app");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("ShowMarksMatrix();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_test', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_test', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_test');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("poso_exam_detail_sRowId,test_id,hidden_textbox,R,10px");
        m_field_arr.push("poso_exam_detail_nType,Type,hidden_textbox,L,25px");
        m_field_arr.push("q_count,q_count,hidden_textbox,L,25px");
        m_field_arr.push("poso_exam_detail_nIsMarks,IsMarks,hidden_textbox,L,25px");

        m_field_arr.push("poso_exam_detail_sDesp,Test,read_only_textbox,L,25px");
        m_field_arr.push("poso_exam_detail_nFullMarks,Full Marks,read_only_textbox,L,25px");


        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================


        SetNull();

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



function PopulateTest(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_exam_id = GetValueByCtrlName("cntxt_exam_id");
        ctxt_test = GetValueByCtrlName("ctxt_test") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_exam_id,INT," + cntxt_exam_id);
        m_sp_param.push("@p_name,VARCHAR," + ctxt_test);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_test",
                                             m_sp_param,
                                             "Proc_Get_Poco_Exam_Detail",
                                             ctxt_test,
                                             0);
    }
    catch (err) {
        alert('PopulateTest() - Error In JScript');
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

function SetNull() {

    SetValue("cntxt_subject_id", "0");
    SetValue("cntxt_exam_id", "0");
    SetValue("cntxt_test_id", "0");
    SetValue("cntxt_sem", "0");

    SetValue("ctxt_subject", "");
    SetValue("ctxt_exam", "");
    SetValue("ctxt_test", "");

    SetValue("cntxt_full_marks", "0");
    SetValue("cntxt_test_type", "0");
    SetValue("cntxt_no_of_question", "0")

    SetValue("cntxt_is_marks_app", "0")
    

}



//--------------------------------------
function ShowMarksMatrix() {
    try {
        var m_sp_param = new Array();

        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");


        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_exam_id = GetValueByCtrlName("cntxt_exam_id");
        cntxt_test_id = GetValueByCtrlName("cntxt_test_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_sem = GetValueByCtrlName("cntxt_sem");


        m_sp_param.push("@p_branch_id,INT," + cntxt_branch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_period_id,INT," + cntxt_period_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);
        m_sp_param.push("@p_sem_no,INT," + cntxt_sem);
        m_sp_param.push("@p_exam_main_id,INT," + cntxt_exam_id);
        m_sp_param.push("@p_exam_test_id,INT," + cntxt_test_id);





        ShowWaitMsgWnd("Please Wait");
        WebServiceMasters.GetDataAsArrayWithFieldName(m_sp_param,
                                          "Proc_Get_Poco_Student_List_For_Marks_Entry", 0,
                                           OnComplete_ShowMarksMatrix,
                                           OnError_ShowMarksMatrix,
                                           OnTimeOut_ShowMarksMatrix);
    }
    catch (err) {
        alert('ShowMarksMatrix() - Error In JScript');
    }

}
function OnComplete_ShowMarksMatrix(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg.m_Count) > -1) {
        p_field_arr = arg.m_Field;
        p_data_arr = arg.m_List;
        CreateQuestionParam();
    }
    else {
        alert("Data Not Found");
    }
}
function OnError_ShowMarksMatrix(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_ShowMarksMatrix(arg) {
    alert("Time Out");
}

//--------------------------------------

function CreateMarksMatrix() {
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

            if (iRowCtr == col_std_id) {
                m_col.style.display = "none"; //Std ID
            }
            else if (iRowCtr == col_std_name) {
                m_col.style.width = "200px";
            }
            else {
                m_col.style.width = "50px";
            }

            m_col.setAttribute('class', "bg-primary text-white no-border line-hight24");
            if (iRowCtr == col_std_id) {
                m_col.style.display = "none"; //Std ID
            }
            var m_div_val = document.createElement("div");
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
                if (iColCtr == col_std_id) {
                    m_col.style.display = "none"; //Std ID
                }

                if (iColCtr <= col_marks_total) {
                    m_col.setAttribute('class', "bglight");
                    var m_div_val = document.createElement("div");

                    if (iColCtr == col_std_id) {
                        p_id = "STUDENTID_" + iRowCtr.toString();
                        m_div_val.setAttribute('id', p_id);
                    }
                    else if (iColCtr == col_marks_total) {
                        p_id = "TOTALMARKS_" + iRowCtr.toString();
                        m_div_val.setAttribute('id', p_id);
                        m_div_val.setAttribute('style', "font-weight:bold");
                    }
                    else if (iColCtr == col_std_present) {
                        p_id = "PRESENT_CHECK_" + iRowCtr.toString();

                        var m_checkbox = document.createElement('input');
                        m_checkbox.setAttribute('type', 'checkbox');       // SPECIFY THE TYPE OF ELEMENT.
                        m_checkbox.setAttribute('id', p_id);     // SET UNIQUE ID.
                        m_checkbox.setAttribute('value', p_data_arr[iRowCtr][iColCtr]);
                        if (parseFloat(p_data_arr[iRowCtr][iColCtr]) == 1) {
                            m_checkbox.checked = true;
                        }
                        else {
                            m_checkbox.checked = false;
                        }
                        m_div_val.appendChild(m_checkbox);
                    }

                    if (iColCtr != col_std_present) {
                        m_div_val.innerHTML = p_data_arr[iRowCtr][iColCtr];
                    }
                    m_col.appendChild(m_div_val);
                    m_row.appendChild(m_col);
                }
                else {
                    var m_div_val = document.createElement("input");
                    m_div_val.setAttribute('class', "from-control");

                    p_id = "QUESTION_" + iRowCtr.toString() + "_" + m_q_no.toString();
                    m_div_val.setAttribute('id', p_id);
                    m_div_val.setAttribute("onblur", "CalculateTotal(this);");
                    
                    m_div_val.setAttribute("onkeydown", "ScrollMarks(event,this);");
                    
                    m_div_val.value = p_data_arr[iRowCtr][iColCtr];
                    m_col.appendChild(m_div_val);
                    m_row.appendChild(m_col);
                    m_q_no = m_q_no + 1;
                }
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





//----------------------------------------------------
function CreateQuestionParam() {
    try {
        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");


        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_exam_id = GetValueByCtrlName("cntxt_exam_id");
        cntxt_test_id = GetValueByCtrlName("cntxt_test_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_sem = GetValueByCtrlName("cntxt_sem");

        var FieldArray = new Array();
        FieldArray.push("q_id");
        FieldArray.push("q_marks");
        FieldArray.push("q_type");

        var m_sp_param = new Array();


        m_sp_param.push("@p_branch_id,INT," + cntxt_branch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_period_id,INT," + cntxt_period_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);
        m_sp_param.push("@p_sem_no,INT," + cntxt_sem);
        m_sp_param.push("@p_exam_main_id,INT," + cntxt_exam_id);
        m_sp_param.push("@p_exam_test_id,INT," + cntxt_test_id);



        ShowWaitMsgWnd("Please Wait");
        WebServiceMasters.GetData("NA", FieldArray, m_sp_param,
                                  "Proc_Get_Poco_Exam_Test_Wise_Question_Id", 0,
                                   OnComplete_CreateQuestionParam,
                                   OnError_CreateQuestionParam,
                                   OnTimeOut_CreateQuestionParam);
    }
    catch (err) {
        alert("Java Script Error - CreateQuestionParam");
    }

}
function OnComplete_CreateQuestionParam(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg.m_Count) > -1) {
        p_question_arr = arg.m_List;
        CreateMarksMatrix();
    }
}
function OnError_CreateQuestionParam(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_CreateQuestionParam(arg) {
    alert("Time Out");
}

//----------------------------------------------------



function CalculateTotal(p_ctrl) {
    try {


        m_ctrl_id = p_ctrl.id;
        m_arr = m_ctrl_id.split("_");
        m_curr_row = m_arr[1];


        m_total = 0;
        for (iQuestionCtr = 0; iQuestionCtr <= p_question_arr.length - 1; iQuestionCtr++) {
            m_question_id = "QUESTION_" + m_curr_row.toString() + "_" + iQuestionCtr.toString();
            m_question_val = window.document.getElementById(m_question_id).value;



            if (isNaN(m_question_val) == false && m_question_val.length != 0) {
                if (parseFloat(m_question_val) > parseFloat(p_question_arr[iQuestionCtr][1])) {
                    alert("Marks should not be greater than " + p_question_arr[iQuestionCtr][1]);
                    window.document.getElementById(p_ctrl.id).value = "";
                    return;
                }


                m_total = m_total + parseFloat(m_question_val);
            }

        }

        m_total_marks_id = "TOTALMARKS_" + m_curr_row.toString();
        window.document.getElementById(m_total_marks_id).innerHTML = m_total;

    }
    catch (err) {
        alert("Java Script Error - CalculateTotal");
    }
}


function ScrollMarks(event,p_ctrl) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;


        m_ctrl_id = p_ctrl.id;
        m_arr = m_ctrl_id.split("_");
        m_curr_row = parseFloat(m_arr[1]);
        m_curr_col = parseFloat(m_arr[2]);

        if (unicode == 40) {
            m_curr_row = m_curr_row + 1;
            m_question_id = "QUESTION_" + m_curr_row.toString() + "_" + m_curr_col.toString();

            window.document.getElementById(m_question_id).focus()

        }
        else if (unicode == 38) {
            m_curr_row = m_curr_row - 1;
            m_question_id = "QUESTION_" + m_curr_row.toString() + "_" + m_curr_col.toString();

            window.document.getElementById(m_question_id).focus()

        }

    }
    catch (err) {
        alert("Java Script Error - ScrollMarks");
    }
}


//-----------------------------------------------------

function SavePoCoMarks() {
    try {
        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_exam_id = GetValueByCtrlName("cntxt_exam_id");
        cntxt_test_id = GetValueByCtrlName("cntxt_test_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_sem = GetValueByCtrlName("cntxt_sem");
        cntxt_test_type = GetValueByCtrlName("cntxt_test_type");
        cntxt_is_marks_app = GetValueByCtrlName("cntxt_is_marks_app");


        var m_HeaderArray = new Array();
        var m_DetailArray = new Array();

        for (iRowCtr = 0; iRowCtr <= p_data_arr.length - 1; iRowCtr++) {
            m_student_id = "STUDENTID_" + iRowCtr.toString();
            m_total_marks_id = "TOTALMARKS_" + iRowCtr.toString();
            m_total_present_check_id = "PRESENT_CHECK_" + iRowCtr.toString();

            

            m_student_id = window.document.getElementById(m_student_id).innerHTML;
            m_total_marks_id = window.document.getElementById(m_total_marks_id).innerHTML;
            if (window.document.getElementById(m_total_present_check_id).checked == true) {
                m_present_flag = "1";
            }
            else {
                m_present_flag = "0";
            }

            var m_Array = new Array();
            m_Array.push(m_student_id);
            m_Array.push(m_total_marks_id);
            m_Array.push(m_present_flag);
            m_HeaderArray.push(m_Array);


            for (iQuestionCtr = 0; iQuestionCtr <= p_question_arr.length - 1; iQuestionCtr++) {
                m_grade = "NA";
                m_flag = "NA";
                m_marks = "-1";

                m_question_id = "QUESTION_" + iRowCtr.toString() + "_" + iQuestionCtr.toString();
                m_question_val = window.document.getElementById(m_question_id).value;

                if (cntxt_is_marks_app == "1") { //Marks Based
                    m_marks = m_question_val;
                    m_grade = "NA";
                }
                else if (cntxt_is_marks_app == "2") { //Grade Based
                    m_grade = m_question_val;
                    m_marks = "-1";
                }
 

                if (GetStringLength(m_question_val) == 0) {
                    m_marks = "-1";
                    m_flag = "NA";
                    m_grade = "NA";
                }
                else {
                    m_flag = "ATTEND";
                }



                var m_Array = new Array();
                m_Array.push(m_student_id);
                m_Array.push(p_question_arr[iQuestionCtr][0]); //Question Id
                m_Array.push(m_marks);
                m_Array.push(m_grade);
                m_Array.push(m_flag);

                m_DetailArray.push(m_Array);
            }
        }

        ShowWaitMsgWnd("Please Wait");
        WebServiceCoPoSetting.SavePoCoMarks(cntxt_course_id, cntxt_stream_id,cntxt_period_id,
                                                 cntxt_subject_id, cntxt_sem, 
                                                 cntxt_exam_id, cntxt_test_id,
                                                 m_HeaderArray,m_DetailArray,
                                                 OnComplete_SavePoCoMarks, OnError_SavePoCoMarks, OnTimeOut_SavePoCoMarks);

    }
    catch (err) {
        alert("Java Script Error - SavePoCoMarks");
    }
}
function OnComplete_SavePoCoMarks(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg) == 0) {
        ShowMsgWnd("Data Saved");
    }
    else {
        ShowMsgWnd("Error In Data Saving");
    }

}
function OnError_SavePoCoMarks(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SavePoCoMarks(arg) {
    alert("Time Out");
}

//-----------------------------------------------------
