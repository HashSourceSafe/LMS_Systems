
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


        //=======Populate Add Faculty List===========
        m_session_var_name = "S_ADD_FACULTY";
        DynamicHtmlTemplate_AddKeyName("m_key_add_faculty", "m_grid_add_faculty", "m_panel_faculty_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("faculty_code,period_id,Batch,CourseId,StreamId,SectionId,SemesterId,SubjectId,GroupId,day_id");
        DynamicHtmlTemplate_SetControlName("ctxt_faculty_code,cntxt_period_id,cntxt_Batch,cntxt_CourseId,cntxt_StreamId,cntxt_SectionId,cntxt_SemesterId,cntxt_SubjectId,cntxt_GroupId,cntxt_day_id");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("AddDelRoutine('ADD');");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_add_faculty', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_add_faculty', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("Batch,Batch,hidden_textbox,L,15px");
        m_field_arr.push("CourseId,CourseId,hidden_textbox,L,10px");
        m_field_arr.push("StreamId,StreamId,hidden_textbox,L,15px");
        m_field_arr.push("SectionId,SectionId,hidden_textbox,L,20px");
        m_field_arr.push("SemesterId,SemesterId,hidden_textbox,R,10px");
        m_field_arr.push("SubjectId,SubjectId,hidden_textbox,R,10px");
        m_field_arr.push("GroupId,GroupId,hidden_textbox,R,10px");
        m_field_arr.push("day_id,day_id,hidden_textbox,R,10px");


        m_field_arr.push("App,App,read_only_textbox,L,5px");
        m_field_arr.push("faculty_code,Code,read_only_textbox,L,10px");
        m_field_arr.push("faculty_name,Name,read_only_textbox,L,15px");
        m_field_arr.push("CourseName,Course,read_only_textbox,L,10px");
        m_field_arr.push("StreamName,Stream,read_only_textbox,L,10px");
        m_field_arr.push("SemesterNo,Sem,read_only_textbox,L,5px");
        m_field_arr.push("SectionName,Section,read_only_textbox,L,15px");
        m_field_arr.push("SubjectName,Subject,read_only_textbox,L,15px");
        m_field_arr.push("GroupName,Group,read_only_textbox,L,10px");
        m_field_arr.push("day_name,day,read_only_textbox,L,10px");
        m_field_arr.push("period_id,period_id,read_only_textbox,L,10px");
        m_field_arr.push("is_faculty_allot,Allotted,read_only_textbox,L,10px");


        DynamicHtmlTemplate_AddDataParam(m_field_arr);

        //=======Populate Del Faculty List===========
        m_session_var_name = "S_DEL_FACULTY";
        DynamicHtmlTemplate_AddKeyName("m_key_del_faculty", "m_grid_del_faculty", "m_panel_faculty_list", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("faculty_code1,period_id1,Batch1,CourseId1,StreamId1,SectionId1,SemesterId1,SubjectId1,GroupId1,day_id1,IS_CORRENT");
        DynamicHtmlTemplate_SetControlName("ctxt_faculty_code,cntxt_period_id,cntxt_Batch,cntxt_CourseId,cntxt_StreamId,cntxt_SectionId,cntxt_SemesterId,cntxt_SubjectId,cntxt_GroupId,cntxt_day_id,is_routine_exist");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("AddDelRoutine('DEL');");
        DynamicHtmlTemplate_SetEventPrevFunction("DynamicHtmlTemplate_NavigateList('m_key_del_faculty', 'PREV');");
        DynamicHtmlTemplate_SetEventNextFunction("DynamicHtmlTemplate_NavigateList('m_key_del_faculty', 'NEXT');");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");

        var m_field_arr = new Array();
        m_field_arr.push("Batch1,Batch,hidden_textbox,L,15px");
        m_field_arr.push("CourseId1,CourseId,hidden_textbox,L,10px");
        m_field_arr.push("StreamId1,StreamId,hidden_textbox,L,15px");
        m_field_arr.push("SectionId1,SectionId,hidden_textbox,L,20px");
        m_field_arr.push("SemesterId1,SemesterId,hidden_textbox,R,10px");
        m_field_arr.push("SubjectId1,SubjectId,hidden_textbox,R,10px");
        m_field_arr.push("GroupId1,GroupId,hidden_textbox,R,10px");
        m_field_arr.push("day_id1,day_id,hidden_textbox,R,10px");


        m_field_arr.push("App,App,read_only_textbox,L,5px");
        m_field_arr.push("faculty_code1,Code,read_only_textbox,L,10px");
        m_field_arr.push("faculty_name1,Name,read_only_textbox,L,15px");
        m_field_arr.push("CourseName1,Course,read_only_textbox,L,10px");
        m_field_arr.push("StreamName1,Stream,read_only_textbox,L,10px");
        m_field_arr.push("SemesterNo1,Sem,read_only_textbox,L,5px");
        m_field_arr.push("SectionName1,Section,read_only_textbox,L,15px");
        m_field_arr.push("SubjectName1,Subject,read_only_textbox,L,15px");
        m_field_arr.push("GroupName1,Group,read_only_textbox,L,10px");
        m_field_arr.push("day_name1,day,read_only_textbox,L,10px");
        m_field_arr.push("period_id1,period_id,read_only_textbox,L,10px");
        m_field_arr.push("IS_CORRENT,Routine Exist,read_only_textbox,L,10px");


        DynamicHtmlTemplate_AddDataParam(m_field_arr);

    }
    catch (err) {
        alert("Init() - JScript Error");
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



function ShowAddDel(p_flag) {
    try {

        DynamicHtmlTemplate_DeleteAllControl('m_key_add_faculty');
        DynamicHtmlTemplate_DeleteAllControl('m_key_del_faculty');

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_academic_session_id = GetValueByCtrlName("cntxt_academic_session_id");
        cntxt_semester_type_id = GetValueByCtrlName("cntxt_semester_type_id");
        ctxt_faculty_name = GetValueByCtrlName("ctxt_faculty_name") + "%";

        ctxt_paper_code = GetValueByCtrlName("ctxt_paper_code");
        ctxt_search_faculty_code = GetValueByCtrlName("ctxt_search_faculty_code") + '%';
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");


        if (parseFloat(cntxt_semester_type_id) == 0) {
            m_sem_type = "E";
        }
        else {
            m_sem_type = "O";
        }



        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_aca_ses_id,INT," + cntxt_academic_session_id);
        m_sp_param.push("@p_sem_type,VARCHAR," + m_sem_type);
        m_sp_param.push("@p_fac_code,VARCHAR," + ctxt_search_faculty_code);
        m_sp_param.push("@p_sub_code,VARCHAR," + ctxt_paper_code);
        m_sp_param.push("@p_search_from_date,DATETIME," + dtp_from_date);
        m_sp_param.push("@p_search_to_date,DATETIME," + dtp_to_date);
        m_sp_param.push("@p_type,INT," + p_flag);



        
        if (p_flag == "2") {
            DynamicHtmlTemplate_PopulateGrid("m_key_add_faculty", m_sp_param, "Proc_Get_Routine_Vs_Allotment");
        }
        else {
            DynamicHtmlTemplate_PopulateGrid("m_key_del_faculty", m_sp_param, "Proc_Get_Routine_Vs_Allotment");
        }
        

    }
    catch (err) {
        alert('ShowAddDel() - Error In JScript');
    }
}

//-------------------------------
function AddDelRoutine(p_flag) {
    try {

        SetValue("cntxt_entry_type", p_flag);

        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_period_id = GetValueByCtrlName("cntxt_period_id");
        cntxt_Batch = GetValueByCtrlName("cntxt_Batch");
        cntxt_CourseId = GetValueByCtrlName("cntxt_CourseId");
        cntxt_StreamId = GetValueByCtrlName("cntxt_StreamId");
        cntxt_SectionId = GetValueByCtrlName("cntxt_SectionId");
        cntxt_SemesterId = GetValueByCtrlName("cntxt_SemesterId");
        cntxt_SubjectId = GetValueByCtrlName("cntxt_SubjectId");
        cntxt_GroupId = GetValueByCtrlName("cntxt_GroupId");
        cntxt_day_id = GetValueByCtrlName("cntxt_day_id");
        ctxt_faculty_code = GetValueByCtrlName("ctxt_faculty_code");
        dtp_from_date = GetValueByCtrlName("dtp_from_date");
        dtp_to_date = GetValueByCtrlName("dtp_to_date");
        ctxt_password = GetValueByCtrlName("ctxt_password");
        is_routine_exist = GetValueByCtrlName("is_routine_exist");


        if (ctxt_password!="sa@hash") {
            ShowMsgWnd('Enter Password');
            return false;
        }


        if (parseFloat(cntxt_college_id) == 0) {
            ShowMsgWnd('Invalid College');
            return false;
        }

        if (parseFloat(cntxt_period_id) == 0) {
            ShowMsgWnd('Invalid Period');
            return false;
        }

        if (parseFloat(cntxt_Batch) == 0) {
            ShowMsgWnd('Invalid Batch');
            return false;
        }

        if (parseFloat(cntxt_CourseId) == 0) {
            ShowMsgWnd('Invalid Course');
            return false;
        }

        if (parseFloat(cntxt_StreamId) == 0) {
            ShowMsgWnd('Invalid Stream');
            return false;
        }

        if (parseFloat(cntxt_SectionId) == 0) {
            ShowMsgWnd('Invalid Section');
            return false;
        }

        if (parseFloat(cntxt_SemesterId) == 0) {
            ShowMsgWnd('Invalid Sem');
            return false;
        }
        if (parseFloat(cntxt_SubjectId) == 0) {
            ShowMsgWnd('Invalid Subject');
            return false;
        }
        if (parseFloat(cntxt_GroupId) == 0) {
            ShowMsgWnd('Invalid Group');
            return false;
        }
        if (parseFloat(cntxt_day_id) == 0) {
            ShowMsgWnd('Invalid Day');
            return false;
        }
        if (ctxt_faculty_code == "") {
            ShowMsgWnd('Invalid Faculty');
            return false;
        }
        if (GetValueByCtrlName('dtp_from_date') == "") {
            ShowMsgWnd('Select From Date');
            return false;
        }
        if (GetValueByCtrlName('dtp_to_date') == "") {
            ShowMsgWnd('Select To Date');
            return false;
        }


        if (p_flag == "DEL" && is_routine_exist=="1") {
            ShowMsgWnd('Can Not Delete Routine Exist....');
            return false;
        }

        ShowWaitMsgWnd("Please Wait");
        SetValue("ctxt_message", "Please Wait");

        if (p_flag == "ADD") {
            WebServiceDateWiseRoutineAllocation.AddSingleRoutine(cntxt_college_id,
                                                                 cntxt_period_id,
                                                                 cntxt_Batch,
                                                                 cntxt_CourseId,
                                                                 cntxt_StreamId,
                                                                 cntxt_SectionId,
                                                                 cntxt_SemesterId,
                                                                 cntxt_SubjectId,
                                                                 cntxt_GroupId,
                                                                 cntxt_day_id,
                                                                 ctxt_faculty_code,
                                                                 dtp_from_date,
                                                                 dtp_to_date,
                                                                 OnComplete_AddDelRoutine,
                                                                 OnError_AddDelRoutine,
                                                                 OnTimeOut_AddDelRoutine);
        }
        else {
            WebServiceDateWiseRoutineAllocation.DelSingleRoutine(cntxt_college_id,
                                                                 cntxt_period_id,
                                                                 cntxt_Batch,
                                                                 cntxt_CourseId,
                                                                 cntxt_StreamId,
                                                                 cntxt_SectionId,
                                                                 cntxt_SemesterId,
                                                                 cntxt_SubjectId,
                                                                 cntxt_GroupId,
                                                                 cntxt_day_id,
                                                                 ctxt_faculty_code,
                                                                 dtp_from_date,
                                                                 dtp_to_date,
                                                                 OnComplete_AddDelRoutine,
                                                                 OnError_AddDelRoutine,
                                                                 OnTimeOut_AddDelRoutine);
        }


    }
    catch (err) {
        alert('AddDelRoutine() - Error In JScript');
    }
}
function OnComplete_AddDelRoutine(arg) {
    DestroyWaitMsgWnd();
    //ShowMsgWnd(arg);
    SetValue("ctxt_message", arg);
    SetValue("is_routine_exist", "0");
    

    cntxt_entry_type = GetValueByCtrlName("cntxt_entry_type");
    if (cntxt_entry_type == "ADD") {
        ShowAddDel("2");
    }
    else {
        ShowAddDel("1");
    }

}
function OnError_AddDelRoutine(arg) {
    alert("error : " + argmessage);
}
function OnTimeOut_AddDelRoutine(arg) {
    alert("Time Out");
}
//-------------------------------

