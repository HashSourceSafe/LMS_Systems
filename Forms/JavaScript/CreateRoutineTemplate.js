var m_array_routine_data = new Array();
var m_array_routine_header = new Array();

var m_array_period = new Array();
var m_array_period_temp = new Array();

var m_array_subject_temp = new Array();
var m_array_colour_code = new Array();


var m_param = "";

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


        //=======Stream Master===========
        m_session_var_name = "S_STREAM_SEARCH";
        DynamicHtmlTemplate_AddKeyName("m_key_stream_search", "m_grid_stream_search", "div_stream", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("STD_STREAM_MASTER_nID,STD_STREAM_MASTER_sNAME");
        DynamicHtmlTemplate_SetControlName("cntxt_stream_id,ctxt_stream");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_stream_search', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_stream_search', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_stream_search');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("STD_STREAM_MASTER_nID,STD_STREAM_MASTER_nID,hidden_textbox,R,10px");
        m_field_arr.push("STD_STREAM_MASTER_sNAME,Stream Name,read_only_textbox,L,100px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Sem Type Master===========
        m_session_var_name = "S_SEM_TYPE_SEARCH";
        DynamicHtmlTemplate_AddKeyName("m_key_sem_type_search", "m_grid_sem_type_search", "div_sem_type", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("sem_type_id,sem_type_name");
        DynamicHtmlTemplate_SetControlName("cntxt_sem_type_id,ctxt_sem_type");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_sem_type_search', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_sem_type_search', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_sem_type_search');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("sem_type_id,sem_type_id,hidden_textbox,R,10px");
        m_field_arr.push("sem_type_name,Sem Type,read_only_textbox,L,50px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================


        //=======Semester===========
        m_session_var_name = "S_SEMESTER";
        DynamicHtmlTemplate_AddKeyName("m_key_semester", "m_grid_semester", "div_semester", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_STD_SEMESTER_ID,m_STD_SEMESTER_sSemesterName");
        DynamicHtmlTemplate_SetControlName("cntxt_semester_id,ctxt_semester");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_semester', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_semester', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_semester');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("m_STD_SEMESTER_ID,sem_id,hidden_textbox,R,10px");
        m_field_arr.push("m_STD_SEMESTER_sSemesterName,Semester,read_only_textbox,L,100px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Section===========
        m_session_var_name = "S_SECTION";
        DynamicHtmlTemplate_AddKeyName("m_key_section", "m_grid_section", "div_section", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_sectionId,m_sectionName");
        DynamicHtmlTemplate_SetControlName("cntxt_section_id,ctxt_section");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_section', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_section', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_section');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("m_sectionId,m_sectionId,hidden_textbox,R,10px");
        m_field_arr.push("m_sectionName,Section,read_only_textbox,L,50px");

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
        m_field_arr.push("m_subjectName,Name,read_only_textbox,L,50px");
        m_field_arr.push("m_subjectCode,Code,read_only_textbox,L,15px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Group===========
        m_session_var_name = "S_GROUP";
        DynamicHtmlTemplate_AddKeyName("m_key_group", "m_grid_group", "div_group", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_GroupId,m_GroupName");
        DynamicHtmlTemplate_SetControlName("cntxt_group_id,ctxt_group");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("NA");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_group', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_group', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_group');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("m_GroupId,m_sectionId,hidden_textbox,R,10px");
        m_field_arr.push("m_GroupName,Group Name,read_only_textbox,L,50px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================


        //=======Faculty===========
        m_session_var_name = "S_FALCUTY";
        DynamicHtmlTemplate_AddKeyName("m_key_faculty", "m_grid_faculty", "div_faculty", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_emph_code,m_emph_name,m_emph_ShortName,m_emph_dept_name");
        DynamicHtmlTemplate_SetControlName("ctxt_faculty_code,ctxt_faculty_name,ctxt_faculty_sht_name,ctxt_faculty_dept");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("AddFaculty();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_faculty', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_faculty', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_faculty');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("m_sel,Select,read_only_textbox,L,5px");
        m_field_arr.push("m_emph_name,Faculty Name,read_only_textbox,L,30px");
        m_field_arr.push("m_emph_ShortName,Short Name,read_only_textbox,L,10px");
        m_field_arr.push("m_emph_code,Code,read_only_textbox,L,10px");
        m_field_arr.push("m_emph_dept_name,Dept,read_only_textbox,L,15px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======Selected Faculty===========
        m_session_var_name = "S_SEL_FACULTY";
        DynamicHtmlTemplate_AddKeyName("m_key_sel_faculty", "m_grid_sel_faculty", "m_PanelFaculty", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_emph_code");
        DynamicHtmlTemplate_SetControlName("ctxt_faculty_code");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("RemoveFaculty();");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("App,App,hidden_textbox,L,5px");

        m_field_arr.push("m_sel,Select,read_only_textbox,L,5px");
        m_field_arr.push("m_emph_name,Faculty Name,read_only_textbox,L,40px");
        m_field_arr.push("m_emph_ShortName,Short Name,read_only_textbox,L,15px");
        m_field_arr.push("m_emph_code,Code,read_only_textbox,L,15px");
        m_field_arr.push("m_emph_dept_name,Dept,read_only_textbox,L,25px");

        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================


        //=======Search Windoe===========
        m_session_var_name = "S_SEARCH_WINDOW";
        DynamicHtmlTemplate_AddKeyName("m_key_search_window", "m_grid_search_window", "div_course_name", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("StreamId,StreamName,SemesterId,SemesterName,SectionId,SectionName,sem_type_id,sem_type");
        DynamicHtmlTemplate_SetControlName("cntxt_stream_id,ctxt_stream,cntxt_semester_id,ctxt_semester,cntxt_section_id,ctxt_section,cntxt_sem_type_id,ctxt_sem_type");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("T");
        DynamicHtmlTemplate_SetEventFunction("DispRoutine('0');");
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

        ShowHideControl("ul_routine_type_button", "0");

        //----Adding Colour Code
        AddColourCode();


        LoadMenu();
    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}

function AddColourCode() {
    try {
        /*m_array_colour_code.push("btn-adn")
        m_array_colour_code.push("btn-bitbucket");
        m_array_colour_code.push("btn-dropbox");
        m_array_colour_code.push("btn-facebook");
        m_array_colour_code.push("btn-flickr");
        m_array_colour_code.push("btn-foursquare");
        m_array_colour_code.push("btn-github");
        m_array_colour_code.push("btn-google");
        m_array_colour_code.push("btn-instagram");
        m_array_colour_code.push("btn-linkedin");
        m_array_colour_code.push("btn-microsoft");
        m_array_colour_code.push("btn-openid");
        m_array_colour_code.push("btn-pinterest");
        m_array_colour_code.push("btn-reddit");
        m_array_colour_code.push("btn-soundcloud");
        m_array_colour_code.push("btn-tumblr");
        m_array_colour_code.push("btn-twitter");
        m_array_colour_code.push("btn-vimeo");
        m_array_colour_code.push("btn-vk");
        m_array_colour_code.push("btn-yahoo");*/

        m_array_colour_code.push("btn-red")
        m_array_colour_code.push("btn-teal");
        m_array_colour_code.push("btn-yellow");
        m_array_colour_code.push("btn-green");
        m_array_colour_code.push("btn-brown");
        m_array_colour_code.push("btn-aqua");
        m_array_colour_code.push("btn-lime");
        m_array_colour_code.push("btn-purple");
        m_array_colour_code.push("btn-leaf");
        m_array_colour_code.push("btn-pink");
        m_array_colour_code.push("btn-dirtygreen");
        m_array_colour_code.push("btn-blue");
        m_array_colour_code.push("btn-amber");
        m_array_colour_code.push("btn-black");
        m_array_colour_code.push("btn-soundcloud");
        m_array_colour_code.push("btn-adn");
        m_array_colour_code.push("btn-twitter");
        m_array_colour_code.push("btn-vimeo");
        m_array_colour_code.push("btn-vk");
        m_array_colour_code.push("btn-yahoo");


    }
    catch (err) {
        alert("AddColourCode() - JScript Error");
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



function PopulateStream(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        m_stream_name = GetValueByCtrlName("ctxt_stream") + "%";
        m_course_id = GetValueByCtrlName("cntxt_course_id");

        var m_sp_param = new Array();
        m_sp_param.push("@p_course_id,INT," + m_course_id);
        m_sp_param.push("@p_stream_name,VARCHAR," + m_stream_name);


        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_stream_search",
                                             m_sp_param,
                                             "Proc_STF_Get_Stream",
                                             m_stream_name,
                                             0);
    }
    catch (err) {
        alert('PopulateStream() - Error In JScript');
    }
}

function PopulateSemType(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_sem_type = GetValueByCtrlName("ctxt_sem_type") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_name,VARCHAR," + ctxt_sem_type);


        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_sem_type_search",
                                             m_sp_param,
                                             "Proc_Get_Sem_Type",
                                             ctxt_sem_type,
                                             0);
    }
    catch (err) {
        alert('PopulateSemType() - Error In JScript');
    }
}

function PopulateSemester(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_sem_type_id = GetValueByCtrlName("cntxt_sem_type_id");
        ctxt_semester = GetValueByCtrlName("ctxt_semester") + "%";

        if (parseFloat(cntxt_sem_type_id) == 0) {
            cntxt_sem_type_id = "E";
        }
        else {
            cntxt_sem_type_id = "O";
        }




        var m_sp_param = new Array();
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_year);
        m_sp_param.push("@p_College_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_semester_type,VARCHAR," + cntxt_sem_type_id);
        m_sp_param.push("@p_sem_name,VARCHAR," + ctxt_semester);


        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_semester",
                                             m_sp_param,
                                             "Proc_Get_stf_Semester",
                                             ctxt_semester,
                                             0);
    }
    catch (err) {
        alert('PopulateSemester() - Error In JScript');
    }
}


function PopulateSection(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        ctxt_section = GetValueByCtrlName("ctxt_section") + "%";


        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_batch_id,INT," + cntxt_batch_year);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_stream_id,INT," + cntxt_stream_id);
        m_sp_param.push("@p_semester_id,INT," + cntxt_semester_id);
        m_sp_param.push("@p_section_name,VARCHAR," + ctxt_section);


        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_section",
                                             m_sp_param,
                                             "Proc_Get_stf_Linked_Section",
                                             ctxt_section,
                                             0);
    }
    catch (err) {
        alert('PopulateSection() - Error In JScript');
    }
}





function PopulateSubject(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;


        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        ctxt_subject = GetValueByCtrlName("ctxt_subject")+"%";


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




function PopulateGroup(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        ctxt_group = GetValueByCtrlName("ctxt_group") + "%";


        var m_sp_param = new Array();
        m_sp_param.push("@p_Group_name,VARCHAR," + ctxt_group);



        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_group",
                                             m_sp_param,
                                             "Proc_Get_Group",
                                             ctxt_group,
                                             0);
    }
    catch (err) {
        alert('PopulateGroup() - Error In JScript');
    }
}


function PopulateFaculty(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;


        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_dept = GetValueByCtrlName("ctxt_dept") + "%";
        ctxt_faculty = GetValueByCtrlName("ctxt_faculty") + "%";

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_emph_name,VARCHAR," + ctxt_faculty);
        m_sp_param.push("@p_dept_name,VARCHAR," + ctxt_dept);

        DynamicHtmlTemplate_OnKeyPressEvent(unicode,
                                             "m_key_faculty",
                                             m_sp_param,
                                             "Proc_Get_Faculty",
                                             ctxt_faculty,
                                             0);


        //DynamicHtmlTemplate_PopulateGrid("m_key_faculty", m_sp_param, "Proc_Get_Faculty");
    }
    catch (err) {
        alert('PopulateFaculty() - Error In JScript');
    }
}



//--------------------------------
function AddFaculty() {
    try {
        ctxt_faculty_code = GetValueByCtrlName("ctxt_faculty_code");
        ctxt_faculty_name = GetValueByCtrlName("ctxt_faculty_name");
        ctxt_faculty_sht_name = GetValueByCtrlName("ctxt_faculty_sht_name");
        ctxt_faculty_dept = GetValueByCtrlName("ctxt_faculty_dept");

        WebServiceRoutineTemplate.AddFaculty(ctxt_faculty_code,
                                                    ctxt_faculty_name,
                                                    ctxt_faculty_sht_name,
                                                    ctxt_faculty_dept,
                                                    OnCompleteAddFaculty,
                                                    OnErrorAddFaculty,
                                                    OnTimeOutAddFaculty);



    }
    catch (err) {
        alert("AddFaculty() - JScript Error");
    }
}
function OnCompleteAddFaculty(arg) {
    if (arg > 0) {
        alert('Error in WebMethod');
    }
    else {
        DisplaySelFacultyGrid();
    }
}
function OnErrorAddFaculty(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutAddFaculty(arg) {
    alert("Time Out");
}
//--------------------------------

//--------------------------------
function RemoveFaculty() {
    try {
        p_curr_ctrl_name = document.activeElement.id;


        if (p_curr_ctrl_name.indexOf("M_SEL") == -1) {
            return;
        }

        ctxt_faculty_code = GetValueByCtrlName("ctxt_faculty_code");


        WebServiceRoutineTemplate.RemoveFaculty(ctxt_faculty_code,
                                                    OnCompleteRemoveFaculty,
                                                    OnErrorRemoveFaculty,
                                                    OnTimeOutRemoveFaculty);



    }
    catch (err) {
        alert("AddFaculty() - JScript Error");
    }
}
function OnCompleteRemoveFaculty(arg) {
    if (arg > 0) {
        alert('Error in WebMethod');
    }
    else {
        DisplaySelFacultyGrid();
    }
}
function OnErrorRemoveFaculty(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutRemoveFaculty(arg) {
    alert("Time Out");
}
//--------------------------------

function DisplaySelFacultyGrid() {
    try {
        m_master_session_var_name = "S_SEL_FACULTY";
        DynamicHtmlTemplate_PopulateGridFromDataTable("m_key_sel_faculty", m_master_session_var_name, "NA");
        SetValue("ctxt_faculty", "");
    }
    catch (err) {
        alert("DisplaySelFacultyGrid()- Error In JScript");
    }
}


//-------------------------------------------
function DispRoutine(p_mode) {
    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_academic_ses_id = GetValueByCtrlName("cntxt_academic_ses_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_disp_type = p_mode;
        SetValue("cntxt_disp_type", p_mode);

        if (p_mode == "2") {
            p_mode = "1";
        }

        ShowHideControl("ul_routine_type_button", "1");


        WebServiceRoutineTemplate.DispRoutine(cntxt_college_id,
                                                    cntxt_batch_year,
                                                    cntxt_course_id,
                                                    cntxt_stream_id,
                                                    cntxt_semester_id,
                                                    cntxt_section_id,
                                                    cntxt_academic_ses_id,
                                                    p_mode,
                                                    OnCompleteDispRoutine,
                                                    OnErrorDispRoutine, 
                                                    OnTimeOutDispRoutine);
    }
    catch (err) {
        alert("DispRoutine() - JScript Error");
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
    }
}
function OnErrorDispRoutine(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutDispRoutine(arg) {
    alert("Time Out");
}
//-------------------------------------------

function RemoveRoutineTable() {
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

        RemoveRoutineTable();
        m_array_subject_temp.splice(0, m_array_subject_temp.length); //Delete All Subject


        m_div_routine_container = document.getElementById("div_routine_container");

        cntxt_disp_type = GetValueByCtrlName("cntxt_disp_type");


        var m_master_table = document.createElement('table');
        m_master_table.setAttribute('class', "table table-bordered table-striped table-vertical-middle");
        m_master_table.style.width = "200%";

        /*********Create Heading***********/
        var m_table_header = document.createElement('thead');
        var m_table_row = document.createElement('tr');

        for (iCtr = 0; iCtr <= m_array_routine_header.length - 1; iCtr++) {
            var m_table_col = document.createElement('th');
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

                if (iCol == 0) { /*Day Name*/
                    m_table_col.innerHTML = m_current_val;
                    m_table_row.appendChild(m_table_col);
                }
                else {
                    m_current_arr1 = m_current_val.split("|");
                    var m_inner_table = document.createElement('table');
                    m_inner_table.setAttribute('class', "tablechild fullwidth");


                    var m_inner_body = document.createElement('tbody');

                    for (ArrCtr = 0; ArrCtr <= m_current_arr1.length - 1; ArrCtr++) {
                        if (m_current_arr1[ArrCtr] != "") {
                            var m_inner_row = document.createElement('tr');
                            var m_inner_col = document.createElement('td');
                            m_current_arr2 = m_current_arr1[ArrCtr].split("<>");
                            m_param1 = m_current_arr2[1];

                            if (parseFloat(cntxt_disp_type) == 1 || parseFloat(cntxt_disp_type) == 2) {
                                m_param2 = m_current_arr2[2];
                                if (parseFloat(cntxt_disp_type) == 1) {
                                    m_function = "onclick=DeleteEntry('" + m_param1 + "','" + m_param2 + "');";
                                }
                                else if (parseFloat(cntxt_disp_type) == 2) {
                                    m_function = "onclick=ChangeRoomNo('" + m_param1 + "','" + m_param2 + "');";
                                }

                                if (m_current_arr2[0] != "") {
                                    m_function = m_function.replace(/ /g, "#");
                                    if (parseFloat(cntxt_disp_type) == 1) {
                                        m_span = "<u " + m_function + "><span class='rutine-close'><i class='fa fa-times'></i></span></u> ";
                                    }
                                    else if (parseFloat(cntxt_disp_type) == 2) {
                                        m_span = "<u " + m_function + "><span class='rutine-tick'><i class='fa fa-check'></i></span></u> ";
                                    }
                                    m_inner_col.innerHTML = m_span + m_current_arr2[0];

                                    m_str_subject = m_current_arr2[0].substr(0, m_current_arr2[0].search("{"));
                                    SetRoutineBackColour(m_str_subject, m_inner_col);
                                }
                            }
                            else {
                                if (m_current_arr2[0] != "NA") {
                                    m_inner_col.innerHTML = "<u><span class='rutine-tick'><i class='fa fa-check'></i></span></u> " + m_current_arr2[0];

                                    m_str_subject = m_current_arr2[0].substr(0, m_current_arr2[0].search("{"));
                                    SetRoutineBackColour(m_str_subject, m_inner_col);
                                }
                            }

                            m_inner_row.appendChild(m_inner_col);
                            m_inner_body.appendChild(m_inner_row);
                        }
                    }

                    //Blank row for new
                    if (parseFloat(cntxt_disp_type) == 0) {
                        var m_inner_row = document.createElement('tr');
                        var m_inner_col = document.createElement('td');
                        m_inner_col.setAttribute('class', "addrow");
                        m_function = "onclick=SelectRoutineColumn(this,'" + m_param1 + "');";

                        m_span = "<a class='btn btn-3d btn-xs btn-reveal btn-default margin-top-6 fullwidth' " + m_function + "><i class='fa fa-plus size-10'></i><span>Add New</span></a> ";
                        m_inner_col.innerHTML = m_span;
                        //m_inner_col.innerHTML = "<u><span class='label label-success padding-0'><i class='fa fa-check size-15'></i></span></u> " + "Create";
                        m_inner_row.appendChild(m_inner_col);
                        m_inner_body.appendChild(m_inner_row);
                    }


                    m_inner_table.appendChild(m_inner_body);

                    m_table_col.appendChild(m_inner_table);
                    m_table_row.appendChild(m_table_col);

                    /*if (parseFloat(cntxt_disp_type) == 0) {
                    m_function = "SelectRoutineColumn(this,'" + m_param1 + "');";
                    m_table_col.setAttribute("ondblclick", m_function);
                    }*/

                }


            }
            m_table_body.appendChild(m_table_row);

        }
        m_master_table.appendChild(m_table_body);



        m_div_routine_container.appendChild(m_master_table);


        SetFocusOnControl("cmd_create");
    }
    catch (err) {
        alert("CreateRoutineMatrix() - JScript Error");
    }
}



function SelectRoutineColumn(p_ref, p_param) {
    try {
        p_ref.style.background = "#4fd407";

        

        m_param = p_param.split("_");
        SetValue("cntxt_day_id", m_param[0]); //Day
        SetValue("cntxt_period_id", m_param[1]); //Period

        //SaveRoutineData();
        ValidateRoutineData();

    }
    catch (err) {
        alert("SelectRoutineColumn() - JScript Error");
    }
}

function DeleteEntry(p_param1, p_param2) {
    try {
        m_param1 = p_param1.split("_");

        p_param2 = p_param2.replace(/#/g, " ");
        m_param2 = p_param2.split("_");

        SetValue("cntxt_day_id", m_param1[0]); //Day
        SetValue("cntxt_period_id", m_param1[1]); //Period
        SetValue("cntxt_subject_id", m_param1[2]); //Subject
        SetValue("cntxt_group_id", m_param1[3]); //group
        SetValue("ctxt_faculty_code", m_param1[4]); //faculty

        SetValue("ctxt_subject", m_param2[0]); //Subject code
        SetValue("ctxt_group", m_param2[1]); //group name
        SetValue("ctxt_room_no", m_param2[2]); //room


        RemoveRoutineData();

    }
    catch (err) {
        alert("DeleteEntry() - JScript Error");
    }
}


function ValidateSave() {
    try {
        cntxt_day_id = GetValueByCtrlName("cntxt_day_id");
        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_academic_ses_id = GetValueByCtrlName("cntxt_academic_ses_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");

        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        cntxt_sem_type_id = GetValueByCtrlName("cntxt_sem_type_id");
        ctxt_room_no = GetValueByCtrlName("ctxt_room_no");

        cntxt_disp_type = GetValueByCtrlName("cntxt_disp_type");

        if (parseFloat(cntxt_disp_type) == 0) {
            m_grid_sel_faculty = window.document.getElementById("m_grid_sel_faculty");
            if (m_grid_sel_faculty == null) {
                ShowMsgWnd("Can't Save - Select Faculty");
                return false;
            }

            m_faculty_code = GetIdFromGrid("m_grid_sel_faculty", "App", "m_emph_code");
            if (GetStringLength(m_faculty_code) == 0) {
                ShowMsgWnd("Can't Save - Select Faculty");
                return false;
            }
        }


        if (parseFloat(cntxt_day_id) == 0) {
            ShowMsgWnd("Can't Save - Select Day");
            return false;
        }
        if (parseFloat(cntxt_period_id) == 0) {
            ShowMsgWnd("Can't Save - Select Period");
            return false;
        }
        if (parseFloat(cntxt_batch_year) == 0) {
            ShowMsgWnd("Can't Save - Select Batch Year");
            return false;
        }
        if (parseFloat(cntxt_course_id) == 0) {
            ShowMsgWnd("Can't Save - Select Course");
            return false;
        }
        if (parseFloat(cntxt_stream_id) == 0) {
            ShowMsgWnd("Can't Save - Select Stream");
            return false;
        }
        if (parseFloat(cntxt_semester_id) == 0) {
            ShowMsgWnd("Can't Save - Select Sem");
            return false;
        }
        if (parseFloat(cntxt_section_id) == 0) {
            ShowMsgWnd("Can't Save - Select Section");
            return false;
        }
        if (parseFloat(cntxt_subject_id) == 0) {
            ShowMsgWnd("Can't Save - Select Subject");
            return false;
        }
        if (parseFloat(cntxt_group_id) == 0) {
            ShowMsgWnd("Can't Save - Select Subject Group");
            return false;
        }
        if (parseFloat(cntxt_sem_type_id) == -1) {
            ShowMsgWnd("Can't Save - Select Sem Type");
            return false;
        }


        if (parseFloat(cntxt_disp_type) == 0 || parseFloat(cntxt_disp_type) == 2) {
            if (ctxt_room_no == "") {
                ShowMsgWnd("Can't Save - Enter Room No");
                return false;
            }
        }


        return true;

    }
    catch (err) {
        alert("ValidateSave() - JScript Error");
    }
}


//---------------------------------------------------
function ValidateRoutineData() {
    try {

        if (ValidateSave() == false) {
            return;
        }



        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_academic_ses_id = GetValueByCtrlName("cntxt_academic_ses_id");
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_day_id = GetValueByCtrlName("cntxt_day_id");
        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        m_faculty_code = GetIdFromGrid("m_grid_sel_faculty", "App", "m_emph_code");
        m_faculty_code = m_faculty_code.replace(/,/g, "<>");


        var m_sp_param = new Array();
        m_sp_param.push("@p_CollegeId,INT," + cntxt_college_id);
        m_sp_param.push("@p_Accademic_Session,INT," + cntxt_academic_ses_id);
        m_sp_param.push("@p_BatchId,INT," + cntxt_batch_year);
        m_sp_param.push("@p_CourseId,INT," + cntxt_course_id);
        m_sp_param.push("@p_StreamId,INT," + cntxt_stream_id);
        m_sp_param.push("@p_SemesterId,INT," + cntxt_semester_id);
        m_sp_param.push("@p_SectionId,INT," + cntxt_section_id);
        m_sp_param.push("@p_DayId,INT," + cntxt_day_id);
        m_sp_param.push("@p_PeriodId,INT," + cntxt_period_id);
        m_sp_param.push("@p_GroupId,INT," + cntxt_group_id);
        m_sp_param.push("@p_SubjectId,INT," + cntxt_subject_id);
        m_sp_param.push("@p_FacultyCode,VARCHAR," + m_faculty_code);

        var m_field = new Array();
        m_field.push("Error_No");
        m_field.push("Error_Msg");


        WebServiceMasters.GetData("NA", m_field, m_sp_param, "Proc_Validate_Routine_Template_Create", 0,
                                   OnComplete_ValidateRoutineData,
                                   OnError_ValidateRoutineData,
                                   OnTimeOut_ValidateRoutineData);
    }
    catch (err) {
        alert("SaveRoutineData() - JScript Error");
    }
}
function OnComplete_ValidateRoutineData(arg) {
    if (arg.m_Count == -1) {
        alert('Error in WebMethod');
    }
    else {
        if (parseFloat(arg.m_List[0][0]) < 0) {
            alert(arg.m_List[0][1]);
            if (window.confirm("Wish to Continue?") == true) {
                SaveRoutineData();
            }
        }
        else if (parseFloat(arg.m_List[0][0]) == 0) {
            SaveRoutineData();
        }
        else {
            alert("Can't Save " + arg.m_List[0][1]);
        }

    }
}
function OnError_ValidateRoutineData(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_ValidateRoutineData(arg) {
    alert("Time Out");
}
//---------------------------------------------------


//---------------------------------------------------
function SaveRoutineData() {
    try {

        if (SelectionWindow() == false) {
            return;
        }




        m_IsRecess = "0";
        m_IsNew = "1";

        cntxt_day_id = GetValueByCtrlName("cntxt_day_id");
        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_academic_ses_id = GetValueByCtrlName("cntxt_academic_ses_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");

        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        cntxt_sem_type_id = GetValueByCtrlName("cntxt_sem_type_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        ctxt_room_no = GetValueByCtrlName("ctxt_room_no");








        WebServiceRoutineTemplate.SaveRoutineData(cntxt_college_id,
                                                    cntxt_academic_ses_id,
                                                    cntxt_batch_year,
                                                    cntxt_course_id,
                                                    cntxt_stream_id,
                                                    cntxt_section_id,
                                                    cntxt_semester_id,
                                                    cntxt_day_id,
                                                    cntxt_period_id,
                                                    cntxt_group_id,
                                                    cntxt_subject_id,
                                                    cntxt_sem_type_id,
                                                    ctxt_room_no,
                                                    m_IsRecess,
                                                    m_IsNew,
                                                    OnComplete_SaveRoutineData,
                                                    OnError_SaveRoutineData,
                                                    OnTimeOut_SaveRoutineData);


        
    }
    catch (err) {
        alert("SaveRoutineData() - JScript Error");
    }
}
function OnComplete_SaveRoutineData(arg) {
    if (arg > 0) {
        alert('Error in WebMethod');
    }
    else {
        DispRoutine('0');
    }
}
function OnError_SaveRoutineData(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SaveRoutineData(arg) {
    alert("Time Out");
}
//---------------------------------------------------


//---------------------------------------------------
function RemoveRoutineData() {
    try {

        if (ValidateSave() == false) {
            return;
        }

        if (SelectionWindow() == false) {
            return;
        }




        m_IsRecess = "0";
        m_IsNew = "1";

        cntxt_day_id = GetValueByCtrlName("cntxt_day_id");
        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_academic_ses_id = GetValueByCtrlName("cntxt_academic_ses_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");

        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        cntxt_sem_type_id = GetValueByCtrlName("cntxt_sem_type_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        ctxt_room_no = GetValueByCtrlName("ctxt_room_no");
        ctxt_faculty_code = GetValueByCtrlName("ctxt_faculty_code");



        WebServiceRoutineTemplate.RemoveRoutineData(cntxt_college_id,
                                                    cntxt_academic_ses_id,
                                                    cntxt_batch_year,
                                                    cntxt_course_id,
                                                    cntxt_stream_id,
                                                    cntxt_section_id,
                                                    cntxt_semester_id,
                                                    cntxt_day_id,
                                                    cntxt_period_id,
                                                    cntxt_group_id,
                                                    cntxt_subject_id,
                                                    ctxt_faculty_code,
                                                    OnComplete_RemoveRoutineData,
                                                    OnError_RemoveRoutineData,
                                                    OnTimeOut_RemoveRoutineData);



    }
    catch (err) {
        alert("RemoveRoutineData() - JScript Error");
    }
}
function OnComplete_RemoveRoutineData(arg) {
    if (arg > 0) {
        alert('Error in WebMethod');
    }
    else {
        DispRoutine('1');
    }
}
function OnError_RemoveRoutineData(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_RemoveRoutineData(arg) {
    alert("Time Out");
}
//---------------------------------------------------



function ShowRoutine() {
    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_sem_type_id = GetValueByCtrlName("cntxt_sem_type_id");

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


function ResetSubject() {
    try {

        SetValue("cntxt_subject_id", "0");
        SetValue("cntxt_group_id", "0");
        SetValue("ctxt_room_no", "");
        SetValue("ctxt_faculty_code", "0");


        SetValue("ctxt_subject", "");
        SetValue("ctxt_group", "");
        SetValue("ctxt_dept", "");
        SetValue("ctxt_faculty", "");


        ResetFacultyGrid();


    }
    catch (err) {
        alert("ResetAll() - JScript Error");
    }
}




function ResetAll() {
    try {

        SetValue("cntxt_batch_year", "0");
        SetValue("cntxt_course_id", "0");
        SetValue("cntxt_stream_id", "0");
        SetValue("cntxt_semester_id", "0");
        SetValue("cntxt_section_id", "0");
        SetValue("cntxt_subject_id", "0");
        SetValue("cntxt_group_id", "0");
        SetValue("cntxt_sem_type_id", "0");
        SetValue("ctxt_room_no", "");
        SetValue("ctxt_faculty_code", "0");


        SetValue("ctxt_batch_year", "");
        SetValue("ctxt_course_name", "");
        SetValue("ctxt_stream", "");
        SetValue("ctxt_sem_type", "");
        SetValue("ctxt_semester", "");
        SetValue("ctxt_section", "");
        SetValue("ctxt_subject", "");
        SetValue("ctxt_group", "");
        SetValue("ctxt_dept", "");
        SetValue("ctxt_faculty", "");


        RemoveRoutineTable();
        ResetFacultyGrid();

        ShowHideControl("ul_routine_type_button", "0");
    }
    catch (err) {
        alert("ResetAll() - JScript Error");
    }
}

//---------------------------------
function ResetFacultyGrid() {
    try {
        m_session_var_name = "S_SEL_FACULTY";
        m_ArrSes.push(m_session_var_name);

        WebServiceMasters.ResetSessionDataTable(m_ArrSes,
                                                OnComplete_ResetFacultyGrid,
                                                OnError_ResetFacultyGrid,
                                                OnTime_ResetFacultyGrid);

    }
    catch (err) {
        alert("ResetFacultyGrid() - JScript Error");
    }
}
function OnComplete_ResetFacultyGrid(arg) {
    if (arg > 0) {
        alert('Error in WebMethod - SetNull()');
    }
    else {
        DynamicHtmlTemplate_ResetAllControl('m_key_sel_faculty');
    }
}
function OnError_ResetFacultyGrid(arg) {
    alert("error has occured: " + arg._message);
}
function OnTime_ResetFacultyGrid(arg) {
    alert("Time Out");
}
//---------------------------------


function SetRoutineBackColour(p_subject,p_ref) {
    try {
        return;

        m_IsFound = 0;

        for (iSubCtr = 0; iSubCtr<m_array_subject_temp.length; iSubCtr++) {
            if (m_array_subject_temp[iSubCtr] == p_subject) {
                m_IsFound = 1;
                break
            }
        }

        if (m_IsFound == 0) {
            m_array_subject_temp.push(p_subject);
        }

        if (iSubCtr <= 19) {
            p_ref.setAttribute('class', m_array_colour_code[iSubCtr]);
        }
        
    }
    catch (err) {
        alert("SetRoutineBackColour() - JScript Error");
    }
}



function ChangeRoomNo(p_param1, p_param2) {
    try {
        m_param1 = p_param1.split("_");

        p_param2 = p_param2.replace(/#/g, " ");
        m_param2 = p_param2.split("_");

        SetValue("cntxt_day_id", m_param1[0]); //Day
        SetValue("cntxt_period_id", m_param1[1]); //Period
        SetValue("cntxt_subject_id", m_param1[2]); //Subject
        SetValue("cntxt_group_id", m_param1[3]); //group
        SetValue("ctxt_faculty_code", m_param1[4]); //faculty

        SetValue("ctxt_subject", m_param2[0]); //Subject code
        SetValue("ctxt_group", m_param2[1]); //group name

        m_room_no = "";
        m_room_no = prompt("Enter Room No", m_room_no);
        if (m_room_no == null) {
            m_room_no = "";
        }

        SetValue("ctxt_room_no", m_room_no);
        UpdateRoomNo();

    }
    catch (err) {
        alert("DeleteEntry() - JScript Error");
    }
}

//---------------------------------------------------
function UpdateRoomNo() {
    try {

        if (ValidateSave() == false) {
            return;
        }

        if (SelectionWindow() == false) {
            return;
        }




        m_IsRecess = "0";
        m_IsNew = "1";

        cntxt_day_id = GetValueByCtrlName("cntxt_day_id");
        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_year = GetValueByCtrlName("cntxt_batch_year");
        cntxt_academic_ses_id = GetValueByCtrlName("cntxt_academic_ses_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");

        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");
        cntxt_group_id = GetValueByCtrlName("cntxt_group_id");
        cntxt_sem_type_id = GetValueByCtrlName("cntxt_sem_type_id");
        cntxt_semester_id = GetValueByCtrlName("cntxt_semester_id");
        ctxt_room_no = GetValueByCtrlName("ctxt_room_no");
        ctxt_faculty_code = GetValueByCtrlName("ctxt_faculty_code");







        WebServiceRoutineTemplate.UpdateRoomNo(cntxt_college_id,
                                                    cntxt_academic_ses_id,
                                                    cntxt_batch_year,
                                                    cntxt_course_id,
                                                    cntxt_stream_id,
                                                    cntxt_section_id,
                                                    cntxt_semester_id,
                                                    cntxt_day_id,
                                                    cntxt_period_id,
                                                    cntxt_group_id,
                                                    cntxt_subject_id,
                                                    ctxt_room_no,
                                                    OnComplete_UpdateRoomNo,
                                                    OnError_UpdateRoomNo,
                                                    OnTimeOut_UpdateRoomNo);



    }
    catch (err) {
        alert("UpdateRoomNo() - JScript Error");
    }
}
function OnComplete_UpdateRoomNo(arg) {
    if (arg > 0) {
        alert('Error in WebMethod');
    }
    else {
        DispRoutine('2');
        SetValue("ctxt_room_no", "");
    }
}
function OnError_UpdateRoomNo(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_UpdateRoomNo(arg) {
    alert("Time Out");
}
//---------------------------------------------------