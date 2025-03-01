var m_matrix_function;



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
        DynamicHtmlTemplate_GetControlName("poso_exam_detail_sRowId,poso_exam_detail_sDesp");
        DynamicHtmlTemplate_SetControlName("cntxt_test_id,ctxt_test");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("ShowQuestionList();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_test', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_test', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_test');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("poso_exam_detail_sRowId,test_id,hidden_textbox,R,10px");
        m_field_arr.push("poso_exam_detail_sDesp,Test,read_only_textbox,L,25px");


        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Populate Bloom Taxanomy===========
        m_session_var_name = "S_POPULATE_BLOOM";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_bloom", "m_grid_populate_bloom", "div_bloom", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("bloom_id,bloom_name");
        DynamicHtmlTemplate_SetControlName("cntxt_bloom_id,ctxt_bloom");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_bloom', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_bloom', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_bloom');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("bloom_id,bloom_id,hidden_textbox,R,10px");
        m_field_arr.push("bloom_name,Bloom Taxanomy,read_only_textbox,L,25px");


        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Populate Course Outcome===========
        m_session_var_name = "S_POPULATE_COURSE_OUTCOME";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_co_oucome", "m_grid_populate_co_oucome", "div_co", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("poco_subject_wise_co_master_nRowId,poco_subject_wise_co_master_sCoNo");
        DynamicHtmlTemplate_SetControlName("cntxt_co_id,ctxt_co");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_co_oucome', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_co_oucome', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_co_oucome');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("poco_subject_wise_co_master_nRowId,poco_subject_wise_co_master_nRowId,hidden_textbox,R,10px");
        m_field_arr.push("poco_subject_wise_co_master_sCoNo,Course Outcome,read_only_textbox,L,25px");


        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================



        //=======Search Question===========
        m_session_var_name = "S_POPULATE_SEARCH_QUESTION";
        DynamicHtmlTemplate_AddKeyName("m_key_search_question", "m_grid_search_question", "m_panel_question_search_window", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("QuestionId,CoId,BloomId,QuestionNo,QuestionDet,Marks,BloomName,CoName");
        DynamicHtmlTemplate_SetControlName("cntxt_question_id,cntxt_co_id,cntxt_bloom_id,ctxt_question_no,ctxt_question_det,cntxt_marks,ctxt_bloom,ctxt_co");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_question', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_question', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("QuestionId,QuestionId,hidden_textbox,R,10px");
        m_field_arr.push("CoId,CoId,hidden_textbox,R,10px");
        m_field_arr.push("BloomId,BloomId,hidden_textbox,R,10px");

        m_field_arr.push("QuestionNo,Question No,read_only_textbox,L,10px");
        m_field_arr.push("QuestionDet,Details,read_only_textbox,L,25px");
        m_field_arr.push("Marks,Marks,read_only_textbox,L,5px");
        m_field_arr.push("BloomName,Level,read_only_textbox,L,5px");
        m_field_arr.push("CoName,CO,read_only_textbox,L,5px");


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



function PopulateBloomTaxanomy(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;



        var m_sp_param = new Array();
        m_sp_param.push("@p_name,VARCHAR," + "%");

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_bloom",
                                             m_sp_param,
                                             "Proc_Get_Poco_Bloom_Taxanomy",
                                             "%",
                                             0);
    }
    catch (err) {
        alert('PopulateBloomTaxanomy() - Error In JScript');
    }
}



function PopulateCo(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_period_id,INT," + cntxt_period_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_co_oucome",
                                             m_sp_param,
                                             "Proc_Get_Poco_Subject_Wise_Co",
                                             "%",
                                             0);
    }
    catch (err) {
        alert('PopulateCo() - Error In JScript');
    }
}



function SaveQuestionMaster() {
    try {

//        if (ValidateSave() == false) {
//            return;
//        }

        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_exam_id = GetValueByCtrlName("cntxt_exam_id");
        cntxt_test_id = GetValueByCtrlName("cntxt_test_id");
        cntxt_question_id = GetValueByCtrlName("cntxt_question_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_sem = GetValueByCtrlName("cntxt_sem");
        ctxt_question_no = GetValueByCtrlName("ctxt_question_no");
        ctxt_question_det = GetValueByCtrlName("ctxt_question_det");
        cntxt_co_id = GetValueByCtrlName("cntxt_co_id");
        cntxt_bloom_id = GetValueByCtrlName("cntxt_bloom_id");
        cntxt_marks = GetValueByCtrlName("cntxt_marks");


        WebServiceCoPoSetting.SaveQuestionMaster(cntxt_period_id, cntxt_course_id,cntxt_exam_id,
                                                 cntxt_test_id, cntxt_question_id, cntxt_subject_id,
                                                 cntxt_sem, ctxt_question_no, ctxt_question_det,
                                                 cntxt_co_id, cntxt_bloom_id, cntxt_marks,
                                                 OnComplete_SaveQuestionMaster, OnError_SaveQuestionMaster, OnTimeOut_SaveQuestionMaster);

    }
    catch (err) {
        alert("SaveQuestionMaster() - JScript Error");
    }
}
function OnComplete_SaveQuestionMaster(arg) {
    if (parseFloat(arg) == 0) {
        ShowMsgWnd("Data Saved");
        ClearDataAfterSave();
        ShowQuestionList();
    }
    else {
        ShowMsgWnd("Error In Data Saving");
    }
    
}
function OnError_SaveQuestionMaster(arg) {
    alert("error : " + argmessage);
    ClearDataAfterSave();
}
function OnTimeOut_SaveQuestionMaster(arg) {
    alert("Time Out");
}




function ShowQuestionList() {
    try {
        //var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");


        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_exam_id = GetValueByCtrlName("cntxt_exam_id");
        cntxt_test_id = GetValueByCtrlName("cntxt_test_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_sem = GetValueByCtrlName("cntxt_sem");

        var m_sp_param = new Array();
        m_sp_param.push("@p_branch_id,INT," + cntxt_branch_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_period_id,INT," + cntxt_period_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);
        m_sp_param.push("@p_sem_no,INT," + cntxt_sem);
        m_sp_param.push("@p_exam_main_id,INT," + cntxt_exam_id);
        m_sp_param.push("@p_exam_detail_id,INT," + cntxt_test_id);


        m_matrix_function = setInterval(function () { ShowQuestionVsCoMatrix(); }, 100);

        DynamicHtmlTemplate_PopulateGrid("m_key_search_question", m_sp_param, "Proc_Get_Poco_Question_Master");
    }
    catch (err) {
        alert('ShowQuestionList() - Error In JScript');
    }
}

function ClearDataAfterSave() {
    SetValue("cntxt_question_id", "0");
    SetValue("ctxt_question_no", "");
    SetValue("ctxt_question_det", "");
    SetValue("cntxt_marks", "0");
}

function SetNull() {

    SetValue("cntxt_subject_id", "0");
    SetValue("cntxt_exam_id", "0");
    SetValue("cntxt_test_id", "0");
    SetValue("cntxt_bloom_id", "0");
    SetValue("cntxt_co_id", "0");
    SetValue("cntxt_sem", "0");

    SetValue("ctxt_subject", "");
    SetValue("ctxt_exam", "");
    SetValue("ctxt_test", "");
    SetValue("ctxt_bloom", "");
    SetValue("ctxt_co", "");

    SetValue("cntxt_question_id", "0");
    SetValue("ctxt_question_no", "");
    SetValue("ctxt_question_det", "");
    SetValue("cntxt_marks", "0");
}


//--------------------------------------
function ShowQuestionVsCoMatrix() {
    try {

            m_grid_search_question = window.document.getElementById("m_grid_search_question");


            if (m_grid_search_question == null) {
                return;
            }
            clearInterval(m_matrix_function);


            var m_sp_param = new Array();

            cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");
            cntxt_course_id = GetValueByCtrlName("cntxt_course_id");


            cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
            cntxt_exam_id = GetValueByCtrlName("cntxt_exam_id");
            cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
            cntxt_sem = GetValueByCtrlName("cntxt_sem");


            m_sp_param.push("@p_branch_id,INT," + cntxt_branch_id);
            m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
            m_sp_param.push("@p_period_id,INT," + cntxt_period_id);
            m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);
            m_sp_param.push("@p_sem_no,INT," + cntxt_sem);
            m_sp_param.push("@p_exam_main_id,INT," + cntxt_exam_id);





            ShowWaitMsgWnd("Please Wait");
            WebServiceMasters.GetDataAsArrayWithFieldName(m_sp_param,
                                          "Proc_Get_Poco_Question_Vs_Co_Matrix", 0,
                                           OnComplete_ShowQuestionVsCoMatrix,
                                           OnError_ShowQuestionVsCoMatrix,
                                           OnTimeOut_ShowQuestionVsCoMatrix);
        }
        catch (err) {
            alert('ShowQuestionVsCoMatrix() - Error In JScript');
        }

}
function OnComplete_ShowQuestionVsCoMatrix(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg.m_Count) > -1) {
        CreateQuestionVsCoMatrix(arg.m_Field, arg.m_List);

    }
    else {
        alert("Data Not Found");
    }
}
function OnError_ShowQuestionVsCoMatrix(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_ShowQuestionVsCoMatrix(arg) {
    alert("Time Out");
}

//--------------------------------------

function CreateQuestionVsCoMatrix(p_field_arr,p_data_arr) {
    try {
        m_panel_item_matrix = document.getElementById("m_panel_matrix");
        while (m_panel_item_matrix.hasChildNodes()) {
            m_panel_item_matrix.removeChild(m_panel_item_matrix.firstChild);
        }


        var m_table = document.createElement("table");
        m_table.setAttribute('class', "table table-bordered table-vertical-middle nomargin table-striped"); 
        m_table.setAttribute('cellspacing', 0); 

        /*Heading*/
        var m_head_body = document.createElement("thead");
        var m_row = document.createElement("tr");


        for (iRowCtr = 0; iRowCtr <= p_field_arr.length - 1; iRowCtr++) {
            var m_col = document.createElement("th");
            if (iRowCtr == 0) {
                m_col.style.display = "none"; //ID
            }
            m_col.setAttribute('class', "bg-primary text-white no-border line-hight24");
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

            for (iColCtr = 0; iColCtr <= p_data_arr[iRowCtr].length - 1; iColCtr++) {
                var m_col = document.createElement("td");
                if (iColCtr == 0) {
                    m_col.style.display = "none"; //ID
                }

                var m_div_val = document.createElement("div");
                m_div_val.innerHTML = p_data_arr[iRowCtr][iColCtr];
                m_col.appendChild(m_div_val);
                m_row.appendChild(m_col);
            }
            m_head_body.appendChild(m_row);
        }
        m_table.appendChild(m_head_body);
        m_panel_item_matrix.appendChild(m_table);

    }
    catch (err) {
        alert('CreateQuestionVsCoMatrix() - Error In JScript');
    }
}