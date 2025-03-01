var FieldArray = new Array();
var m_excel_sheet_no = 1;

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
        DynamicHtmlTemplate_SetEventFunction("ShowSubjectData();");
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


        //=======Populate Module===========
        m_session_var_name = "S_POPULATE_MODULE";
        DynamicHtmlTemplate_AddKeyName("m_key_populate_module", "m_grid_populate_module", "div_module", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("module_id,module_name");
        DynamicHtmlTemplate_SetControlName("cntxt_module_id,ctxt_module");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_module', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_populate_module', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_populate_module');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("module_id,module_id,hidden_textbox,R,10px");
        m_field_arr.push("module_name,Module,read_only_textbox,L,25px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================


        //=======Search module===========
        m_session_var_name = "S_SEARCH_MODULE";
        DynamicHtmlTemplate_AddKeyName("m_key_search_module", "m_grid_search_module", "m_panel_module_search_window", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("ModuleId,SubModuleId,Topic,Details,ClassCount,module_name,sub_module_sl,is_module");
        DynamicHtmlTemplate_SetControlName("cntxt_module_id,cntxt_sub_module_id,ctxt_module_topic,ctxt_module_details,cntxt_nos_of_lecture,ctxt_module,ctxt_sub_module,cntxt_is_module");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("SetModuleParam('0');");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_search_module', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_search_module', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("ModuleId,ModuleId,hidden_textbox,R,10px");
        m_field_arr.push("SubModuleId,SubModuleId,hidden_textbox,R,10px");
        m_field_arr.push("Details,Details,hidden_textbox,R,10px");
        m_field_arr.push("is_module,is_module,hidden_textbox,R,10px");


        m_field_arr.push("module_name,Module,read_only_textbox,L,10px");
        m_field_arr.push("sub_module_sl,Sub Module Sl,read_only_textbox,L,10px");
        m_field_arr.push("topic,Topic,read_only_textbox,L,100px");
        m_field_arr.push("ClassCount,Tot Lecture,read_only_textbox,L,10px");
        



        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================


        //=======Syllabus Data Subject===========
        m_session_var_name = "S_TEMP_SYLLABUS_DATA";
        DynamicHtmlTemplate_AddKeyName("m_key_syllabus_subject", "m_grid_syllabus_subject", "m_panel_syllabus_data", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("KEY_CODE,KEY_CODE,read_only_textbox,L,10px");
        m_field_arr.push("DETAILS,DETAILS,read_only_textbox,L,30px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Syllabus Data CO===========
        m_session_var_name = "S_TEMP_SYLLABUS_DATA";
        DynamicHtmlTemplate_AddKeyName("m_key_syllabus_co", "m_grid_syllabus_co", "m_panel_syllabus_data", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("co,CO,read_only_textbox,L,10px");
        m_field_arr.push("DETAILS,DETAILS,read_only_textbox,L,200px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Syllabus Data Module===========
        m_session_var_name = "S_TEMP_SYLLABUS_DATA";
        DynamicHtmlTemplate_AddKeyName("m_key_syllabus_module", "m_grid_syllabus_module", "m_panel_syllabus_data", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("MODULE,Module,read_only_textbox,L,10px");
        m_field_arr.push("MODULE_DETAILS,Details,read_only_textbox,L,100px");
        m_field_arr.push("SUB_MODULE_DETAILS,Sub Module,read_only_textbox,L,100px");
        m_field_arr.push("LECTURE,Lecture,read_only_textbox,L,10px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Syllabus Data poco===========
        m_session_var_name = "S_TEMP_SYLLABUS_DATA";
        DynamicHtmlTemplate_AddKeyName("m_key_syllabus_poco", "m_grid_syllabus_poco", "m_panel_syllabus_data", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("NA");
        DynamicHtmlTemplate_SetControlName("NA");
        DynamicHtmlTemplate_AllowSelection("F");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("co,CO,read_only_textbox,L,10px");
        m_field_arr.push("PO1,PO1,read_only_textbox,L,10px");
        m_field_arr.push("PO2,PO2,read_only_textbox,L,10px");
        m_field_arr.push("PO3,PO3,read_only_textbox,L,10px");
        m_field_arr.push("PO4,PO4,read_only_textbox,L,10px");
        m_field_arr.push("PO5,PO5,read_only_textbox,L,10px");
        m_field_arr.push("PO6,PO6,read_only_textbox,L,10px");
        m_field_arr.push("PO7,PO7,read_only_textbox,L,10px");
        m_field_arr.push("PO8,PO8,read_only_textbox,L,10px");
        m_field_arr.push("PO9,PO9,read_only_textbox,L,10px");
        m_field_arr.push("PO10,PO10,read_only_textbox,L,10px");
        m_field_arr.push("PO11,PO11,read_only_textbox,L,10px");
        m_field_arr.push("PO12,PO12,read_only_textbox,L,10px");
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


function SetNull() {
    SetValue("cntxt_subject_id", "0");
    SetValue("ctxt_subject", "");

    LockControl("ctxt_module", true);
    LockControl("ctxt_sub_module", true);
    LockControl("ctxt_module_topic", true);
    LockControl("cntxt_nos_of_lecture", true);
    LockControl("ctxt_module_details", true);

    SetValue("cntxt_is_module", "1");


    SetValue("cntxt_lecture", "0");
    SetValue("cntxt_tutorial", "0");
    SetValue("cntxt_practical", "0");
    SetValue("cntxt_total_contact", "0");
    SetValue("cntxt_credit", "0");
    SetValue("cntxt_module_id", "0");
    SetValue("cntxt_sub_module_id", "0");
    SetValue("cntxt_nos_of_lecture", "0");

    SetValue("ctxt_module", "");
    SetValue("ctxt_sub_module", "0");
    

    //DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_search_co');");
}


function SetModuleParam(p_flag) {
    LockControl("ctxt_module", true);
    LockControl("ctxt_sub_module", true);
    LockControl("ctxt_module_topic", true);
    LockControl("cntxt_nos_of_lecture", true);
    LockControl("ctxt_module_details", true);

    m_is_edit = 0;

    if(p_flag=="0"){
        p_flag = GetValueByCtrlName("cntxt_is_module");
        m_is_edit = 1;
    }

    if (p_flag == "1") {
        LockControl("ctxt_module", false);
        LockControl("ctxt_module_topic", false);
        SetValue("cntxt_is_module", "1");
    }
    else {
        LockControl("ctxt_module", false);
        LockControl("ctxt_sub_module", false);
        LockControl("ctxt_module_topic", false);
        LockControl("cntxt_nos_of_lecture", false);
        LockControl("ctxt_module_details", false);
        SetValue("cntxt_is_module", "2");
    }

    if (m_is_edit == 1) {
        LockControl("ctxt_module", true);
        LockControl("ctxt_sub_module", true);
    }
}



function SearchModule(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_module = GetValueByCtrlName("ctxt_module") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_name,VARCHAR," + ctxt_module);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_populate_module",
                                             m_sp_param,
                                             "Proc_Get_Poco_Module",
                                             ctxt_module,
                                             0);
    }
    catch (err) {
        alert('SearchModule() - Error In JScript');
    }
}




//--------------------------------------
function SaveSyllabus() {
    try {

        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_lecture = GetValueByCtrlName("cntxt_lecture");
        cntxt_tutorial = GetValueByCtrlName("cntxt_tutorial");
        cntxt_practical = GetValueByCtrlName("cntxt_practical");
        cntxt_total_contact = GetValueByCtrlName("cntxt_total_contact");
        cntxt_credit = GetValueByCtrlName("cntxt_credit");

        cntxt_module_id = GetValueByCtrlName("cntxt_module_id");
        cntxt_sub_module_id = GetValueByCtrlName("cntxt_sub_module_id");
        ctxt_sub_module = GetValueByCtrlName("ctxt_sub_module");
        cntxt_is_module = GetValueByCtrlName("cntxt_is_module");

        ctxt_module_topic = GetValueByCtrlName("ctxt_module_topic");
        cntxt_nos_of_lecture = GetValueByCtrlName("cntxt_nos_of_lecture");
        ctxt_module_details = GetValueByCtrlName("ctxt_module_details");

        if (parseFloat(cntxt_is_module) == 1) {
            m_module_id = cntxt_module_id;
            m_sub_module_id = "0";
        }
        else {
            m_module_id = cntxt_module_id;
            m_sub_module_id = cntxt_sub_module_id;
        }


        if (parseFloat(cntxt_subject_id) <= 0) {
            alert("Select Subject");
            return;
        }






        ShowWaitMsgWnd("Please Wait");
        WebServiceCoPoSetting.SaveSyllabus(cntxt_period_id, cntxt_subject_id, cntxt_lecture,
                                           cntxt_tutorial, cntxt_practical, cntxt_total_contact, cntxt_credit,
                                           m_module_id, m_sub_module_id, ctxt_sub_module,ctxt_module_topic, ctxt_module_details, cntxt_nos_of_lecture,
                                           OnComplete_SaveSyllabus,
                                           OnError_SaveSyllabus,
                                           OnTimeOut_SaveSyllabus);
    }
    catch (err) {
        alert('SaveSyllabus() - Error In JScript');
    }

}
function OnComplete_SaveSyllabus(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg) == 0) {
        alert("Data Saved....");
        ResetAll();
        DispModuleList();
    }
    else {
        alert("Error in Saving....");
    }
}
function OnError_SaveSyllabus(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SaveSyllabus(arg) {
    alert("Time Out");
}

//--------------------------------------


function ShowSubjectData() {
    try {
        FieldArray = [];
        FieldArray.push("lecture");
        FieldArray.push("tutorial");
        FieldArray.push("lab");
        FieldArray.push("tot_contact");
        FieldArray.push("credit");

        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");

        var m_sp_param = new Array();

        m_sp_param.push("@p_batch_id,INT," + cntxt_period_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);

        ShowWaitMsgWnd("Please Wait");
        WebServiceMasters.GetData("NA", FieldArray, m_sp_param,
                                  "Proc_Get_Poco_Batch_Subject_Wise_Syllabus_Main", 0,
                                   OnComplete_ShowSubjectData,
                                   OnError_ShowSubjectData,
                                   OnTimeOut_ShowSubjectData);

    }
    catch (err) {
        alert('ShowSubjectData() - Error In JScript');
    }
}
function OnComplete_ShowSubjectData(arg) {
    DestroyWaitMsgWnd();
    if (parseFloat(arg.m_Count) > -1) {
        SetValue("cntxt_lecture", arg.m_List[0][GetArrayRowIndex(FieldArray, "lecture")]);
        SetValue("cntxt_tutorial", arg.m_List[0][GetArrayRowIndex(FieldArray, "tutorial")]);
        SetValue("cntxt_practical", arg.m_List[0][GetArrayRowIndex(FieldArray, "lab")]);
        SetValue("cntxt_total_contact", arg.m_List[0][GetArrayRowIndex(FieldArray, "tot_contact")]);
        SetValue("cntxt_credit", arg.m_List[0][GetArrayRowIndex(FieldArray, "credit")]);


    }
    else {

        SetValue("cntxt_lecture", "0");
        SetValue("cntxt_tutorial", "0");
        SetValue("cntxt_practical", "0");
        SetValue("cntxt_total_contact", "0");
        SetValue("cntxt_credit", "0");
    }

    DispModuleList();
}
function OnError_ShowSubjectData(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_ShowSubjectData(arg) {
    alert("Time Out");
}


function DispModuleList() {
    try {

        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");




        var m_sp_param = new Array();
        m_sp_param.push("@p_batch_id,INT," + cntxt_period_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);



        DynamicHtmlTemplate_PopulateGrid("m_key_search_module", m_sp_param, "Proc_Get_Poco_Batch_Subject_Wise_Syllabus_Detail");
    }
    catch (err) {
        alert('DispModuleList() - Error In JScript');
    }
}


function ResetAll() {
    cntxt_is_module = GetValueByCtrlName("cntxt_is_module");
    if (cntxt_is_module == "1") {
        SetValue("cntxt_module_id", "0");
        SetValue("ctxt_module", "");
    }
    else {
        SetValue("cntxt_sub_module_id", "0");
        SetValue("ctxt_sub_module", "0");
    }

    SetValue("cntxt_nos_of_lecture", "0");
    SetValue("ctxt_module_topic", "");
    SetValue("ctxt_module_details", "");
}



//--------------------------------------
function RemoveSyllabusModule() {
    try {

        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_module_id = GetValueByCtrlName("cntxt_module_id");
        cntxt_sub_module_id = GetValueByCtrlName("cntxt_sub_module_id");
        cntxt_is_module = GetValueByCtrlName("cntxt_is_module");


        if (parseFloat(cntxt_subject_id) <= 0) {
            alert("Select Subject");
            return;
        }

        if (parseFloat(cntxt_module_id) <= 0) {
            alert("Select Module");
            return;
        }

        if (SelectionWindow() == false) {
            ResetAll();
            return;
        }


        ShowWaitMsgWnd("Please Wait");
        WebServiceCoPoSetting.RemoveSyllabusModule(cntxt_period_id, cntxt_subject_id, cntxt_module_id,cntxt_sub_module_id,
                                           OnComplete_RemoveSyllabusModule,
                                           OnError_RemoveSyllabusModule,
                                           OnTimeOut_RemoveSyllabusModule);
    }
    catch (err) {
        alert('RemoveSyllabusModule() - Error In JScript');
    }

}
function OnComplete_RemoveSyllabusModule(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg) == 0) {
        alert("Record Deleted....");
        ResetAll();
        DispModuleList();
    }
    else {
        alert("Error in Saving....");
    }
}
function OnError_RemoveSyllabusModule(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_RemoveSyllabusModule(arg) {
    alert("Time Out");
}

//--------------------------------------


function SelectBlock(p_flag) {
    if (p_flag == "1") {
        ShowHideControl("div_entry_block", 1);
        ShowHideControl("div_upload_block", 0);
    }
    else {
        ShowHideControl("div_entry_block", 0);
        ShowHideControl("div_upload_block", 1);
    }
}



function UploadSyllabusExcel() {
    try {


        if (document.getElementById("upload_file_id").files.length <= 0) {
            ShowMsgWnd("Select File....");
            return;
        }



        var fileUpload = $("#upload_file_id").get(0);
        var size = parseFloat(fileUpload.files[0].size / 1024).toFixed(2);
        var m_file = fileUpload.files[0].name;

        var files = fileUpload.files;
        var m_data = new FormData();

        m_data.append("selected_file", files[0]);
        m_data.append("file_name", m_file);
        m_data.append("doc_type", "2"); //Syllabus excel


        SetValue("ctxt_excel_file", m_file);

        ShowWaitMsgWnd("Please Wait");

        $.ajax({
            url: "FileUploadHandler.ashx",
            type: "POST",
            contentType: false,
            processData: false,
            data: m_data,
            // dataType: "json",
            success: function (result) {
                DestroyWaitMsgWnd();

                if (result == "SUCCESS") {
                    alert("File Uploaded Successfully");
                }
                else if (result == "DUPLICATE") {
                    alert("Duplicate File");
                }
                else {
                    alert("Error in File Uploading");
                }


                document.getElementById("upload_file_id").value = "";
            },
            error: function (err) {
                DestroyWaitMsgWnd();
                alert(err.statusText);
            }
        });


    }
    catch (err) {
        alert('UploadSyllabusExcel() - Error In JScript');
    }

}

//--------------------------------------
function GetSyllabusFromExcel(p_sheet_no) {
    try {

        ctxt_excel_file = GetValueByCtrlName("ctxt_excel_file");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        m_excel_sheet_no = p_sheet_no;


//        if (parseFloat(cntxt_subject_id) <= 0) {
//            alert("Select Subject");
//            return;
//        }



        ShowWaitMsgWnd("Please Wait");
        WebServiceCoPoSetting.GetSyllabusFromExcel(ctxt_excel_file, p_sheet_no,
                                           OnComplete_GetSyllabusFromExcel,
                                           OnError_GetSyllabusFromExcel,
                                           OnTimeOut_GetSyllabusFromExcel);
    }
    catch (err) {
        alert('GetSyllabusFromExcel() - Error In JScript');
    }

}
function OnComplete_GetSyllabusFromExcel(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg) == 0) {
        PopulateSyllabus(m_excel_sheet_no);

    }
    else {
        alert("Error in Data....");
    }
}
function OnError_GetSyllabusFromExcel(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_GetSyllabusFromExcel(arg) {
    alert("Time Out");
}

//--------------------------------------

function PopulateSyllabus(p_sheet_no) {
    try {
        DynamicHtmlTemplate_DeleteAllControl('m_key_syllabus_subject');
        DynamicHtmlTemplate_DeleteAllControl('m_key_syllabus_co');
        DynamicHtmlTemplate_DeleteAllControl('m_key_syllabus_module');
        DynamicHtmlTemplate_DeleteAllControl('m_key_syllabus_poco');

        if (p_sheet_no == 1) {
            DynamicHtmlTemplate_PopulateGridFromDataTable("m_key_syllabus_subject", "S_SYLLABUS_DATA", "NA")
        }
        else if (p_sheet_no == 2) {
            DynamicHtmlTemplate_PopulateGridFromDataTable("m_key_syllabus_co", "S_SYLLABUS_DATA", "NA")
        }
        else if (p_sheet_no == 3) {
            DynamicHtmlTemplate_PopulateGridFromDataTable("m_key_syllabus_module", "S_SYLLABUS_DATA", "NA")
        }
        else if (p_sheet_no == 4) {
            DynamicHtmlTemplate_PopulateGridFromDataTable("m_key_syllabus_poco", "S_SYLLABUS_DATA", "NA")
        } 
    }
    catch (err) {
        alert('PopulateSyllabus() - Error In JScript');
    }
}

function SaveSyllabusExcel() {
    try {

        if (m_excel_sheet_no == "1") {
            m_weekly_contact = ComposeHtmlCtrlRef('m_grid_syllabus_subject', 'DETAILS', 2);
            m_total_contact = ComposeHtmlCtrlRef('m_grid_syllabus_subject', 'DETAILS', 3);
            m_credit = ComposeHtmlCtrlRef('m_grid_syllabus_subject', 'DETAILS', 4);

            m_weekly_contact = m_weekly_contact.value;
            m_total_contact = m_total_contact.value;
            m_credit = m_credit.value;


            m_weekly_contact_arr = m_weekly_contact.split(":");

            SetValue("cntxt_lecture", m_weekly_contact_arr[0]);
            SetValue("cntxt_tutorial", m_weekly_contact_arr[1]);
            SetValue("cntxt_practical", m_weekly_contact_arr[2]);
            SetValue("cntxt_total_contact", m_total_contact);
            SetValue("cntxt_credit", m_credit);
            SetValue("cntxt_module_id", "0");
            SetValue("cntxt_sub_module_id", "0");
            SetValue("cntxt_nos_of_lecture", "0");

            SaveSyllabus();
            SelectBlock('1'); 
        }
        else if (m_excel_sheet_no == "2") {
            SaveCourseOutcomeMstExcel();
        }
        else if (m_excel_sheet_no == "3") {
            SaveModuleDetExcel();
        }
        else if (m_excel_sheet_no == "4") {
            SaveSubjectWiseCoPoMappingExcel();
        }



    }
    catch (err) {
        alert('SaveSyllabusExcel() - Error In JScript');
    }
}



//--------------------------------------
function SaveModuleDetExcel() {
    try {

        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");

        if (parseFloat(cntxt_period_id) <= 0) {
            alert("Select Period");
            return;
        }

        if (parseFloat(cntxt_subject_id) <= 0) {
            alert("Select Subject");
            return;
        }



        ShowWaitMsgWnd("Please Wait");
        WebServiceCoPoSetting.SaveModuleDetExcel(cntxt_period_id, cntxt_subject_id,
                                           OnComplete_SaveModuleDetExcel,
                                           OnError_SaveModuleDetExcel,
                                           OnTimeOut_SaveModuleDetExcel);
    }
    catch (err) {
        alert('GetSyllabusFromExcel() - Error In JScript');
    }

}
function OnComplete_SaveModuleDetExcel(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg) == 0) {
        alert("Data Saved...");
        DispModuleList();
        SelectBlock('1'); 
    }
    else {
        alert("Error in Data Saving....");
    }
}
function OnError_SaveModuleDetExcel(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SaveModuleDetExcel(arg) {
    alert("Time Out");
}

//--------------------------------------


//--------------------------------------
function SaveCourseOutcomeMstExcel() {
    try {

        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");

        if (parseFloat(cntxt_period_id) <= 0) {
            alert("Select Period");
            return;
        }

        if (parseFloat(cntxt_subject_id) <= 0) {
            alert("Select Subject");
            return;
        }



        ShowWaitMsgWnd("Please Wait");
        WebServiceCoPoSetting.SaveCourseOutcomeMstExcel(cntxt_period_id, cntxt_subject_id,
                                           OnComplete_SaveCourseOutcomeMstExcel,
                                           OnError_SaveCourseOutcomeMstExcel,
                                           OnTimeOut_SaveCourseOutcomeMstExcel);
    }
    catch (err) {
        alert('SaveCourseOutcomeMstExcel() - Error In JScript');
    }

}
function OnComplete_SaveCourseOutcomeMstExcel(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg) == 0) {
        alert("Data Saved...");
    }
    else {
        alert("Error in Data Saving....");
    }
}
function OnError_SaveCourseOutcomeMstExcel(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SaveCourseOutcomeMstExcel(arg) {
    alert("Time Out");
}

//--------------------------------------




//--------------------------------------
function SaveSubjectWiseCoPoMappingExcel() {
    try {

        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");

        if (parseFloat(cntxt_period_id) <= 0) {
            alert("Select Period");
            return;
        }

        if (parseFloat(cntxt_subject_id) <= 0) {
            alert("Select Subject");
            return;
        }

        if (parseFloat(cntxt_course_id) <= 0) {
            alert("Select Course");
            return;
        }



        ShowWaitMsgWnd("Please Wait");
        WebServiceCoPoSetting.SaveSubjectWiseCoPoMappingExcel(cntxt_branch_id, cntxt_course_id, cntxt_period_id, cntxt_subject_id,
                                           OnComplete_SaveSubjectWiseCoPoMappingExcel,
                                           OnError_SaveSubjectWiseCoPoMappingExcel,
                                           OnTimeOut_SaveSubjectWiseCoPoMappingExcel);
    }
    catch (err) {
        alert('SaveSubjectWiseCoPoMappingExcel() - Error In JScript');
    }

}
function OnComplete_SaveSubjectWiseCoPoMappingExcel(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg) == 0) {
        alert("Data Saved...");
    }
    else {
        alert("Error in Data Saving....");
    }
}
function OnError_SaveSubjectWiseCoPoMappingExcel(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SaveSubjectWiseCoPoMappingExcel(arg) {
    alert("Time Out");
}

//--------------------------------------

function DownloadSample() {
    alert("Downloading Syllabus Format & Help Document");
    window.open("../UploadedSyllabusExcel/SyllabusFormat.xlsx");
    window.open("../UploadedSyllabusExcel/SyllabusFormat.docx");
}