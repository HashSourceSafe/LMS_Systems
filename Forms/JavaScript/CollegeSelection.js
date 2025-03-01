function InitPage() {
    try {

       

        //=======A/c Name===========
        m_session_var_name = "NA";
        DynamicHtmlTemplate_AddKeyName("m_college_list", "m_grid_college_list", "m_PanelcollegeList", m_session_var_name);
        DynamicHtmlTemplate_GetControlName("College_DB_Master_ncollegeID,College_DB_Master_sCollegeName");
        DynamicHtmlTemplate_SetControlName("cntxt_nMainCollegeId,ctxt_college_name");
        DynamicHtmlTemplate_AllowSelection("TT");
        DynamicHtmlTemplate_AddRecNoPerPage(0);
        DynamicHtmlTemplate_CloseWndAfterSel("F");
        DynamicHtmlTemplate_SetEventFunction("SelectCollege();");
        DynamicHtmlTemplate_SetEventPrevFunction("NA");
        DynamicHtmlTemplate_SetEventNextFunction("NA");
        DynamicHtmlTemplate_SetEventCloseFunction("NA");
        DynamicHtmlTemplate_EventAfterPostPopulation("NA");



        var m_field_arr = new Array();
        m_field_arr.push("College_DB_Master_ncollegeID,branch_user_id,hidden_textbox,R,10px");
        m_field_arr.push("College_DB_Master_sCollegeName,College Name,read_only_textbox,L,100px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================


   
        //--Populate Data

        m_id = 0;
        var m_sp_param = new Array();
        m_sp_param.push("@p_id,INT," + m_id);
        DynamicHtmlTemplate_PopulateGrid_FromMasterDb("m_college_list", m_sp_param, "Proc_Get_College");

      
      
    }
    catch (err) {
        alert("InitPage() - jScript Error");
    }
}

function IsCollegeSelected() {
    try {

        m_main_college_id = GetValueByCtrlName("cntxt_nMainCollegeId");

//        if (m_virtual_college_id == 0) {
//            alert("Please select College");
//            return false;
//        }

        if (m_main_college_id == 0) {
            alert("Please select College");
            return false;
        }

        return true;
    }
    catch (err) {
        alert("IsCollegeSelected() - jScript Error");
        return false;
    }
}

//--------------------
function SelectCollege() {
    try {

        if (IsCollegeSelected() == false) {
            return;
        }

//        m_virtual_college_id = GetValueByCtrlName("cntxt_nVirtualCollegeId");
        m_main_college_id = GetValueByCtrlName("cntxt_nMainCollegeId");
        m_college_name = GetValueByCtrlName("ctxt_college_name");


        WebServiceMasters.SelectCollege(m_main_college_id,
                                       m_college_name,
                                       OnCompleteDynamicHtmlTemplate_SelectCollege,
                                       OnErrorDynamicHtmlTemplate_SelectCollege,
                                       OnTimeDynamicHtmlTemplate_SelectCollege);


    }
    catch (err) {
        alert("SelectCollege() - jScript Error");
    }
}
function OnCompleteDynamicHtmlTemplate_SelectCollege(arg) {
    if (arg == 0) {
        window.open("frmLogin.aspx?id=" + m_main_college_id, "_self");
    }
    else {
        alert("Error In College Selection");
    }
}
function OnErrorDynamicHtmlTemplate_SelectCollege(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeDynamicHtmlTemplate_SelectCollege(arg) {
    alert("Time Out");
}

//--------------------