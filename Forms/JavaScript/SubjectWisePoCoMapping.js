
var p_field_arr;
var p_data_arr;
var p_copo_arr;

var col_sl = 0;
var col_co_id = 1;
var col_co_desp = 2;

var col_copo_data_sl = 0;	
var col_copo_data_co_id	= 1;
var col_copo_data_co_desp = 2;
var col_copo_data_po_id	= 3;
var col_copo_data_po_no	= 4;
var col_copo_data_scale = 5;



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

 

        SetNull();

        LoadMenu();
    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}


function SetNull() {

    SetValue("cntxt_subject_id", "0");

    SetValue("ctxt_subject", "");
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




//--------------------------------------
function DisplayMappingScreen() {
    try {
        var m_sp_param = new Array();

        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");


        m_sp_param.push("@p_branch_id,INT," + cntxt_branch_id);
        m_sp_param.push("@p_period_id,INT," + cntxt_period_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);
        m_sp_param.push("@p_is_matrix,INT," + "1");





        ShowWaitMsgWnd("Please Wait");
        WebServiceMasters.GetDataAsArrayWithFieldName(m_sp_param,
                                          "Proc_Disp_Poco_Subject_Wise_Co_Po_Mapping", 0,
                                           OnComplete_DisplayMappingScreen,
                                           OnError_DisplayMappingScreen,
                                           OnTimeOut_DisplayMappingScreen);
    }
    catch (err) {
        alert('DisplayMappingScreen() - Error In JScript');
    }

}
function OnComplete_DisplayMappingScreen(arg) {
    DestroyWaitMsgWnd();


    if (parseFloat(arg.m_Count) > -1) {
        p_field_arr = arg.m_Field;
        p_data_arr = arg.m_List;
        CreateCoPoMapData();
    }
    else {
        alert("Data Not Found");
    }
}
function OnError_DisplayMappingScreen(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_DisplayMappingScreen(arg) {
    alert("Time Out");
}

//--------------------------------------



//--------------------------------------
function CreateCoPoMapData() {
    try {
        var m_sp_param = new Array();

        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");


        m_sp_param.push("@p_branch_id,INT," + cntxt_branch_id);
        m_sp_param.push("@p_period_id,INT," + cntxt_period_id);
        m_sp_param.push("@p_course_id,INT," + cntxt_course_id);
        m_sp_param.push("@p_subject_id,INT," + cntxt_subject_id);
        m_sp_param.push("@p_is_matrix,INT," + "2");





        ShowWaitMsgWnd("Please Wait");
        WebServiceMasters.GetDataAsArrayWithFieldName(m_sp_param,
                                          "Proc_Disp_Poco_Subject_Wise_Co_Po_Mapping", 0,
                                           OnComplete_CreateCoPoMapData,
                                           OnError_CreateCoPoMapData,
                                           OnTimeOut_CreateCoPoMapData);
    }
    catch (err) {
        alert('CreateCoPoMapData() - Error In JScript');
    }

}
function OnComplete_CreateCoPoMapData(arg) {
    DestroyWaitMsgWnd();


    if (parseFloat(arg.m_Count) > -1) {
        p_copo_arr = arg.m_List;
        CreateMappingScreen();
    }
    else {
        alert("Data Not Found");
    }
}
function OnError_CreateCoPoMapData(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_CreateCoPoMapData(arg) {
    alert("Time Out");
}

//--------------------------------------



function CreateMappingScreen() {
    try {



        m_PanelCoPoMap = document.getElementById("m_PanelCoPoMap");
        while (m_PanelCoPoMap.hasChildNodes()) {
            m_PanelCoPoMap.removeChild(m_PanelCoPoMap.firstChild);
        }



        var m_table = document.createElement("table");
        m_table.setAttribute('class', "table table-bordered table-vertical-middle nomargin entry tableFixHead");
        m_table.setAttribute('cellspacing', 0);



        /*Heading*/
        var m_head_body = document.createElement("thead");
        var m_row = document.createElement("tr");


        for (iRowCtr = col_co_desp; iRowCtr <= p_field_arr.length - 1; iRowCtr++) {
            var m_col = document.createElement("th");

            if (iRowCtr == col_co_desp) {
                m_col.style.width = "100px";
            }
            else {
                m_col.style.width = "50px";
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
        m_sl_no = 0;


        for (iRowCtr = 0; iRowCtr <= p_data_arr.length - 1; iRowCtr++) {
            var m_row = document.createElement("tr")
            

            for (iColCtr = col_co_desp; iColCtr <= p_data_arr[iRowCtr].length - 1; iColCtr++) {
                var m_col = document.createElement("td");

                if (iColCtr == col_co_desp || iRowCtr == p_data_arr.length - 1) {
                    m_col.setAttribute('class', "bglight");
                    var m_div_val = document.createElement("div");
                    m_div_val.innerHTML = p_data_arr[iRowCtr][iColCtr];
                    m_col.appendChild(m_div_val);
                    m_row.appendChild(m_col);
                }
                else {
                    var m_div_val = document.createElement("input");
                    m_div_val.setAttribute('class', "from-control");
                    m_div_val.setAttribute('type', "number");
                    m_div_val.setAttribute('min', "0");
                    m_div_val.setAttribute('max', "3");

                    p_id = "COPOSL_" + m_sl_no.toString();
                    m_div_val.setAttribute('id', p_id);
                    m_div_val.setAttribute("onblur", "UpdateCoPoScale(this);");

                    m_div_val.value = p_data_arr[iRowCtr][iColCtr];
                    m_col.appendChild(m_div_val);
                    m_row.appendChild(m_col);
                    m_sl_no = m_sl_no + 1;
                }
            }
            m_head_body.appendChild(m_row);
        }
        m_table.appendChild(m_head_body);
        m_PanelCoPoMap.appendChild(m_table);

    }
    catch (err) {
        alert('CreateMappingScreen() - Error In JScript');
    }
}

function UpdateCoPoScale(p_ctrl) {
    try {
        m_ctrl_id = p_ctrl.id;
        m_arr = m_ctrl_id.split("_");
        m_curr_row = m_arr[1];

        m_val = window.document.getElementById(m_ctrl_id).value;
        if (GetStringLength(m_val) == 0) {
            m_val = "0";
        }
        else {
            if (parseFloat(m_val) > 3 || parseFloat(m_val) < 0) {
                alert("Value should be between 0 to 3");
                window.document.getElementById(m_ctrl_id).value = "";
            }
        }

        p_copo_arr[m_curr_row][col_copo_data_scale] = m_val;

 

    }
    catch (err) {
        alert('UpdateCoPoScale() - Error In JScript');
    }
}



//-----------------------------------------------------

function SaveSubjectWiseCoPoMapping() {
    try {
        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_subject_id = GetValueByCtrlName("cntxt_subject_id");



        ShowWaitMsgWnd("Please Wait");
        WebServiceCoPoSetting.SaveSubjectWiseCoPoMapping(cntxt_period_id, cntxt_course_id, cntxt_subject_id,p_copo_arr,
                                                 OnComplete_SaveSubjectWiseCoPoMapping, OnError_SaveSubjectWiseCoPoMapping, OnTimeOut_SaveSubjectWiseCoPoMapping);

    }
    catch (err) {
        alert("Java Script Error - SaveSubjectWiseCoPoMapping");
    }
}
function OnComplete_SaveSubjectWiseCoPoMapping(arg) {
    DestroyWaitMsgWnd();

    if (parseFloat(arg) == 0) {
        ShowMsgWnd("Data Saved");
        DisplayMappingScreen();
    }
    else {
        ShowMsgWnd("Error In Data Saving");
    }

}
function OnError_SaveSubjectWiseCoPoMapping(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SaveSubjectWiseCoPoMapping(arg) {
    alert("Time Out");
}

//-----------------------------------------------------
