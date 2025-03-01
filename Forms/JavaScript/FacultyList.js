

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

        //=======Faculty List===========
        m_session_var_name = "S_SEARCH_FACULTY_LIST";
        DynamicHtmlTemplate_AddKeyName("m_key_faculty_list", "m_grid_faculty_list", "m_panel_faculty_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("m_Emph_code");
        DynamicHtmlTemplate_SetControlName("ctxt_facultycode");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(10);
        DynamicHtmlTemplate_CloseWndAfterSel("TT");
        DynamicHtmlTemplate_SetEventFunction("OpenFacultyDetail();");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_faculty_list', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_faculty_list', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("DynamicHtmlTemplate_DeleteAllControl('m_key_faculty_list');");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");


        var m_field_arr = new Array();
        m_field_arr.push("m_Emph_Name,FACULTY NAME,read_only_textbox,L,25px");
        m_field_arr.push("m_Emph_code,CODE,read_only_textbox,L,10px");
        m_field_arr.push("m_Emph_Dept_Name,DEPARTMENT,read_only_textbox,L,15px");
        m_field_arr.push("m_Emph_Category,CATEGORY,read_only_textbox,R,10px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        LoadMenu();
    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}

function DisplayFacultyList() {
    try {
        //var unicode = event.keyCode ? event.keyCode : event.charCode;

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_dept_id = GetValueByCtrlName("cntxt_dept_id");
        ctxt_faculty_name = "%" + GetValueByCtrlName("ctxt_faculty_name") + "%";
        ctxt_faculty_code = "%" + GetValueByCtrlName("ctxt_faculty_code") + "%";
        m_disp_type = "1";


        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_department_id,INT," + cntxt_dept_id);
        m_sp_param.push("@p_empolyee_name,VARCHAR," + ctxt_faculty_name);
        m_sp_param.push("@p_employee_code,VARCHAR," + ctxt_faculty_code);
        m_sp_param.push("@p_disp_type,INT," + m_disp_type);

        DynamicHtmlTemplate_PopulateGrid("m_key_faculty_list", m_sp_param, "Proc_Get_Faculty_Name");
    }
    catch (err) {
        alert('DisplayFacultyList() - Error In JScript');
    }
}


function OpenFacultyDetail() {

    ctxt_facultycode = GetValueByCtrlName("ctxt_facultycode");

    window.open("frmShowFacultyDetailsEmpCodeWise.aspx?code=" + ctxt_facultycode,"toolbar=yes,scrollbars=yes,resizable=yes");

}

function Reset() {
    try {
        DynamicHtmlTemplate_DeleteAllControl('m_key_faculty_list');
        SetValue("ctxt_faculty_code", "");
        SetValue("ctxt_faculty_name", "");
        DisplayFacultyList();
    }
    catch (err) {
        alert("Cancel() - JScript Error");
    }
}
