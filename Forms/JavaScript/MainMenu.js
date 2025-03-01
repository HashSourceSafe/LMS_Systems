var m_MenuArr = new Array();
var p_curr_image_context;
var p_CurrMenuUnqCode;
var p_curr_page_name;

var p_data_fetch_ctr;
var p_function_user_todo_list;
var p_function_user_login;
var p_function_pend_doc;
var p_function_menu;
var openWins = new Array();
var curWin = 0;

function RightMouseClick(event) {
    if (event.which == 3) {
        alert("Enjoy Your Work");
    }
}



function Init() {
    try {

        //=======User Login Details===========
        m_session_var_name = "NA";
        DynamicHtmlTemplate_AddKeyName("m_key_user_login", "m_grid_user_login", "div_user_login_details", m_session_var_name);
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
        m_field_arr.push("desp,My Usage Statistics,read_only_textbox,L,30px");
        m_field_arr.push("remarks1,Year,read_only_textbox,L,3px");
        m_field_arr.push("remarks2,Month,read_only_textbox,L,3px");
        m_field_arr.push("remarks3,Today,read_only_textbox,L,3px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        //=======User Pending Details===========
        m_session_var_name = "NA";
        DynamicHtmlTemplate_AddKeyName("m_key_pending_doc", "m_grid_pending_doc", "div_user_pending_doc_details", m_session_var_name);
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
        m_field_arr.push("document_name,My Pending List,read_only_textbox,L,15px");
        m_field_arr.push("doc_count,,read_only_textbox,L,5px");
        DynamicHtmlTemplate_AddDataParam(m_field_arr);
        //===========================

        ActivateFlowChart(0);

        p_data_fetch_ctr = 0;

        GetUserReminderList();


        
        p_function_user_todo_list = setInterval(function () { GetUserTodoList(); }, 100); 
        p_function_user_login = setInterval(function () { PopulateUserLogin(); }, 100); 
        p_function_pend_doc = setInterval(function () { PopulateUserPendingDocList(); }, 100);

        p_function_menu = setInterval(function () { LoadMenu(); }, 100);

 
    }
    catch (err) {
        alert("Init() - jScript Error");
    }
}





function PopulateUserLogin() {
    try {
        if (p_data_fetch_ctr !=2) {
            return;
        }
        clearInterval(p_function_user_login);
        

        m_module_id = GetValueByCtrlName("cntxt_module_id");
        m_branch_id = GetValueByCtrlName("cntxt_branch_id");


        var m_sp_param = new Array();
        m_sp_param.push("@p_module_id,INT," + m_module_id);
        m_sp_param.push("1,USERTYPEMAIN,1");
        m_sp_param.push("@p_branch_id,INT," + m_branch_id);


        DynamicHtmlTemplate_PopulateGrid_FromMasterDb("m_key_user_login", m_sp_param, "Proc_Show_User_Login_Activity");

    }
    catch (err) {
        alert("PopulateUserLogin() - jScript Error");
    }
}

function PopulateUserPendingDocList() {
    try {
        m_control_ref_1 = window.document.getElementById("m_grid_user_login");
        if (m_control_ref_1 == null) {
            return;
        }
        clearInterval(p_function_pend_doc);

        m_module_id = GetValueByCtrlName("cntxt_module_id");
        m_branch_id = GetValueByCtrlName("cntxt_branch_id");
        m_fin_year_id = GetValueByCtrlName("cntxt_fin_year_id");


        var m_sp_param = new Array();
        m_sp_param.push("@p_module_id,INT," + m_module_id);
        m_sp_param.push("@p_fin_year_id,INT," + m_fin_year_id);
        m_sp_param.push("@p_branch_id,INT," + m_branch_id);
        m_sp_param.push("1,USERTYPEMAIN,1");


        DynamicHtmlTemplate_PopulateGrid("m_key_pending_doc", m_sp_param, "Proc_Pending_Approval_List");

    }
    catch (err) {
        alert("PopulateUserPendingDocList() - jScript Error");
    }
}


//---------------------------
function LoadMenu() {
    try {

        m_control_ref_1 = window.document.getElementById("m_grid_user_login");
        m_control_ref_2 = window.document.getElementById("m_grid_pending_doc");
        if (m_control_ref_1 == null || m_control_ref_2 == null) {
            return;
        }
        clearInterval(p_function_menu);

        var m_FildArray = new Array();
        m_FildArray.push("menu_key");
        m_FildArray.push("menu_code");
        m_FildArray.push("menu_group_code");
        m_FildArray.push("menu_name");
        m_FildArray.push("menu_group_type");
        m_FildArray.push("menu_doc_id");
        m_FildArray.push("menu_sl_no");
        m_FildArray.push("menu_url");
        m_FildArray.push("menu_key_code");
        m_FildArray.push("menu_level");
        m_FildArray.push("menu_expand_flag");
        m_FildArray.push("menu_unq_code");


        m_module_id = GetValueByCtrlName("cntxt_module_id");
        m_branch_id = GetValueByCtrlName("cntxt_branch_id");

        var m_ParamArray = new Array();
        m_ParamArray.push("@p_module_id,INT," + m_module_id);
        m_ParamArray.push("@p_branch_id,INT," + m_branch_id);
        m_ParamArray.push("1,USERTYPEMAIN,1");



        WebServiceMasters.GetDataFromMasterDb("NA", m_FildArray, m_ParamArray, "Proc_Get_user_Wise_Menu_List", 0,
                                           OnComplete_LoadMenu,
                                           OnError_LoadMenu,
                                           OnTimeOut_LoadMenu);

    }
    catch (err) {
        alert("LoadMenu() - jScript Error");
    }
}
function OnComplete_LoadMenu(arg) {
    if (arg.m_Count == "-1") {
        alert("Error in Menu loading");
    }
    else {
        m_MenuArr = arg.m_List;

        CreateMenu();

        //LoadImage();
    }
}
function OnError_LoadMenu(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_LoadMenu(arg) {
    alert("Time Out");
}
//----------------------------



function GetCurrentXY(event) {
    try {
        ShowHideControl("ctxt_row_col",'1');

        pos_x = event.offsetX ? (event.offsetX) : event.pageX - document.getElementById("img_canvas").offsetLeft;
        pos_y = event.offsetY ? (event.offsetY) : event.pageY - document.getElementById("img_canvas").offsetTop;

        //pos_x = event.offsetX ? (event.offsetX) : event.pageX - document.getElementById("img_mis_tool_bar").offsetLeft;
        //pos_y = event.offsetY ? (event.offsetY) : event.pageY - document.getElementById("img_mis_tool_bar").offsetTop;


        document.getElementById("ctxt_row_col").value = document.getElementById("ctxt_row_col").value + pos_x + ", " + pos_y + ", ";
    }
    catch (err) {
        alert("GetCurrentXY() - jScript Error");
    }
}


function ShowForm(event) {
    try {

        m_module_id = GetValueByCtrlName("cntxt_module_id");
        if (m_module_id == 3) { //MMS
            ShowFormMms(event);
        }
        else if (m_module_id == 6) { //FMS
            ShowFormFms(event);
        }
    }
    catch (err) {
        alert("ShowForm() - jScript Error");
    }
}

function ShowFormMms(event) {
    try {

        if (IsInArea(event, 61, 40, 121, 105, 2) == true) { //req prep
            LoadForm('3035010');
        }
        else if (IsInArea(event, 190, 40, 246, 104, 2) == true) { //req app
            LoadForm('3035020');
        }
        else if (IsInArea(event, 321, 39, 375, 99, 2) == true) { //ind prep
            LoadForm('3033010');
        }
        else if (IsInArea(event, 438, 36, 495, 106, 2) == true) { //ind app
            LoadForm('3033020');
        }
        else if (IsInArea(event, 539, 50, 623, 100, 2) == true) { //po prep
            LoadForm('3037010');
        }
        else if (IsInArea(event, 543, 171, 630, 224, 2) == true) { //po app
            LoadForm('3037020');
        }
        else if (IsInArea(event, 273, 155, 345, 219, 2) == true) { //srv prep
            LoadForm('3037010');
        }
        else if (IsInArea(event, 378, 157, 459, 219, 2) == true) { //srv app
            LoadForm('3037020');
        }
        else if (IsInArea(event, 237, 240, 318, 303, 2) == true) { //ugrm
            LoadForm('3036010');
        }
        else if (IsInArea(event, 336, 237, 391, 299, 2) == true) { //mi
            LoadForm('3038010');
        }
        else if (IsInArea(event, 247, 328, 298, 376, 2) == true) { //GRN
            LoadForm('3038030');
        }

    }
    catch (err) {
        alert("ShowFormMms() - jScript Error");
    }
}

function ShowFormFms(event) {
    try {

        m_image = GetValueByCtrlName("ctxt_image_name");

        //Voucher Navigation
        if (m_image == "voucher-navigator.png") {
            VoucherNavigation(event);
        }
        else if (m_image == "student-navigator.png") {
            StudentNavigation(event);
        }

    }
    catch (err) {
        alert("ShowFormMms() - jScript Error");
    }
}

function VoucherNavigation(event) {
    try {
        if (IsInArea(event, 174, 50, 241, 113, 2) == true) { //Cash Vou Prep
            LoadForm('60400301');
        }
        else if (IsInArea(event, 307, 58, 360, 116, 2) == true) { //Cash Vou App
            LoadForm('60400302');
        }
        else if (IsInArea(event, 107, 144, 179, 208, 2) == true) { //Bank Vou Prep
            LoadForm('60400401');
        }
        else if (IsInArea(event, 248, 149, 294, 203, 2) == true) { //Bank Vou app
            LoadForm('60400402');
        }
        else if (IsInArea(event, 106, 233, 184, 294, 2) == true) { //Contra Vou Prep
            LoadForm('60400501');
        }
        else if (IsInArea(event, 240, 238, 298, 298, 2) == true) { //Contra Vou app
            LoadForm('60400502');
        }
        else if (IsInArea(event, 103, 311, 181, 381, 2) == true) { //Supp Pay Vou Prep
            LoadForm('60400201');
        }
        else if (IsInArea(event, 244, 313, 305, 377, 2) == true) { //Supp Pay Vou app
            LoadForm('60400202');
        }
        else if (IsInArea(event, 458, 55, 534, 109, 2) == true) { //Jrn Vou Prep
            LoadForm('60400601');
        }
        else if (IsInArea(event, 464, 153, 525, 210, 2) == true) { //Jrn Vou app
            LoadForm('60400602');
        }

    }
    catch (err) {
        alert("VoucherNavigation() - jScript Error");
    }
}

function StudentNavigation(event) {
    try {
        if (IsInArea(event, 184, 50, 233, 112, 2) == true) { //Student Bill
            LoadForm("605001");
        }
        else if (IsInArea(event, 467, 49, 512, 114, 2) == true) { //Student Collection
            LoadForm("605002");
        }
        else if (IsInArea(event, 405, 256, 474, 320, 2) == true) { //Fees Setup
            LoadForm("603009");
        }
    }
    catch (err) {
        alert("StudentNavigation() - jScript Error");
    }
}


function IsInArea(event,p_top_x,p_top_y,p_bot_x,p_bot_y,p_flag) {
    try {
        m_module_id = GetValueByCtrlName("cntxt_module_id");
        if (p_flag == 1) {
            if (m_module_id == 3) { //MMS
                m_current_x = event.offsetX ? (event.offsetX) : event.pageX - document.getElementById("img_mms_tool_bar").offsetLeft;
                m_current_y = event.offsetY ? (event.offsetY) : event.pageY - document.getElementById("img_mms_tool_bar").offsetTop;
            }
            else if (m_module_id == 6) { //FMS
                m_current_x = event.offsetX ? (event.offsetX) : event.pageX - document.getElementById("img_fms_tool_bar").offsetLeft;
                m_current_y = event.offsetY ? (event.offsetY) : event.pageY - document.getElementById("img_fms_tool_bar").offsetTop;
            }
            else if (m_module_id == 30) { //MIS
                m_current_x = event.offsetX ? (event.offsetX) : event.pageX - document.getElementById("img_mis_tool_bar").offsetLeft;
                m_current_y = event.offsetY ? (event.offsetY) : event.pageY - document.getElementById("img_mis_tool_bar").offsetTop;
            }
        }
        else if (p_flag == 2) {
            m_current_x = event.offsetX ? (event.offsetX) : event.pageX - document.getElementById("img_canvas").offsetLeft;
            m_current_y = event.offsetY ? (event.offsetY) : event.pageY - document.getElementById("img_canvas").offsetTop;
        }

        if (m_current_x >= p_top_x && m_current_x <= p_bot_x &&
            m_current_y >= p_top_y && m_current_y <= p_bot_y) {
            return true;
        }
        else {
            return false;
        }


    }
    catch (err) {
        alert("IsInArea() - jScript Error");
        return false;
    }
}



//------------------------------------------
function LoadForm(p_MenuUnqCode) {
    try {

        p_CurrMenuUnqCode = p_MenuUnqCode;
        WebServiceMasters.GetUserRight(p_MenuUnqCode,
                                        OnComplete_LoadForm,
                                        OnError_LoadForm,
                                        OnTimeOut_LoadForm);

    }
    catch (err) {
        alert("LoadForm() - jScript Error");
    }
}
function OnComplete_LoadForm(arg) {
    if (arg[0] == 0) {
        OpenPage(arg[1]);
    }
    else {
        if (arg[0] != 2) {
            alert(arg[1]);
        }
    }
}
function OnError_LoadForm(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_LoadForm(arg) {
    alert("Time Out");
}

//------------------------------------------



function CreateMenu() {
    try {
        m_root = document.getElementById("menu_root");

        while (m_root.firstChild) {
            m_root.removeChild(m_root.firstChild);
        }

        for (nRow = 0; nRow < m_MenuArr.length; nRow++) {
            m_id = "m_" + m_MenuArr[nRow][8];
            m_group_code = m_MenuArr[nRow][2];
            m_type = m_MenuArr[nRow][4];
            m_level = m_MenuArr[nRow][9];
            m_menu_name = m_MenuArr[nRow][3];
            m_page_name = m_MenuArr[nRow][7];
            m_menu_unq_code = m_MenuArr[nRow][11];



            if (m_level == 0) {
                m_menu_class = "li-menu";
            }
            else if (m_level == 1) {
                m_menu_class = "li-sub";
            }
            else if (m_level == 2) {
                m_menu_class = "li-final";
            }
            else {
                m_menu_class = "li-final";
            }

            if (m_type == "Y") {
                m_func = "OpenMenuTree(this);";

                
                /*if (m_page_name.substr(0, 14) == "LoadRightImage") {
                    m_func = m_func + " " + m_page_name;
                }*/
            }
            else {
                m_func = "GetUnqMenuCode(this); OpenPage('" + m_page_name + "');";
                m_menu_class = "li-final";
            }

            if (m_page_name == "frmCloseApplication.aspx" || m_menu_name=="EXIT") {
                m_func = "closeAll(); window.open('frmCloseApplication.aspx','_self');"
            }


            var m_li = CreateLiTag(m_id, m_menu_name, m_menu_class, m_func, m_menu_unq_code);

            if (m_group_code > 0) {
                m_li.style.display = "none";
            }
            m_root.appendChild(m_li);
        }

    }
    catch (err) {
        alert("CreateMenu() - jScript Error");
    }
}

function CreateLiTag(p_li_id, p_li_val, p_li_css, p_function,p_menu_unq_code) {
    try {
        m_li_ref = document.createElement('li');
        m_li_ref.innerHTML = p_li_val;
        m_li_ref.setAttribute('id', p_li_id);
        m_li_ref.setAttribute('onclick', p_function);
        m_li_ref.setAttribute('class', p_li_css);
        m_li_ref.setAttribute('value', p_menu_unq_code);


        return m_li_ref;
    }
    catch (err) {
        alert("CreateLiTag - jScrip Error");
    }
}


function ActivateFlowChart(pFlag) {
    try {
        m_module_id = GetValueByCtrlName("cntxt_module_id");

        if (pFlag == 0) {
            ShowHideControl("div_login_area", 1);
            ShowHideControl("div_pending_doc_area", 1);
            ShowHideControl("div_flow_chart", 0);
            ShowHideControl("div_mis_fms_menu_page", 0);
            ShowHideControl("div_mis_mms_menu_page", 0);
            ShowHideControl("div_mis_student_menu_page", 0);
            
            if (m_module_id == 3) {
                ShowHideControl("img_mms_tool_bar", 1);
            }
            else if (m_module_id == 6) {
                ShowHideControl("img_fms_tool_bar", 1);
            }
            else if (m_module_id == 20) {
                ShowHideControl("div_welcome_page", 0);
                LoadImage();
            }
            else if (m_module_id == 30) {
                ShowHideControl("img_mis_tool_bar", 1);
            }
        }
        else {
            ShowHideControl("div_login_area", 0);
            ShowHideControl("div_pending_doc_area", 0);
            ShowHideControl("div_flow_chart", 1);
        }
    }
    catch (err) {
    }
}

function OpenMenuTree(p_curr_ref) {

    try {
        //Getting Current Selection Stat
        for (nRow = 0; nRow < m_MenuArr.length; nRow++) {
            m_menu_id = "m_" + m_MenuArr[nRow][8];
            if (p_curr_ref.id == m_menu_id) {
                m_expand_flag = m_MenuArr[nRow][10];
                m_menu_level = m_MenuArr[nRow][9];
                m_menu_level = parseInt(m_menu_level) + 1;

                if (m_expand_flag == 0) {
                    m_MenuArr[nRow][10] = 1;
                }
                else {
                    m_MenuArr[nRow][10] = 0;
                }
                break;
            }


        }

        //Check in child node
        for (nRow = 0; nRow < m_MenuArr.length; nRow++) {
            m_menu_id = "m_" + m_MenuArr[nRow][8];
            m_curr_menu_level = m_MenuArr[nRow][9];
            m_curr_menu_level = parseInt(m_curr_menu_level);
            if (p_curr_ref.id != m_menu_id) {

                if (m_expand_flag == 0) { // Expand tree
                    if (m_menu_id.search(p_curr_ref.id) > -1 && m_curr_menu_level == m_menu_level) {
                        m_menu_ref = document.getElementById(m_menu_id);
                        m_menu_ref.style.display = "";
                    }
                }
                else {
                    if (m_menu_id.search(p_curr_ref.id) > -1) {
                        m_menu_ref = document.getElementById(m_menu_id);
                        m_menu_ref.style.display = "none";
                    }
                }
            }
        }
    }
    catch (err) {
        alert("OpenMenuTree - jScrip Error");
    }
}

//-----------------------
function OpenPage(p_page_name) {
    try {
        p_curr_page_name = p_page_name;


        WebServiceMasters.SaveUserWiseMenuAccess(p_CurrMenuUnqCode,
                                           OnComplete_OpenPage,
                                           OnError_OpenPage,
                                           OnTimeOut_OpenPage);

    }
    catch (err) {
        alert("OpenPage() - jScrip Error");
    }
}
function OnComplete_OpenPage(arg) {
    //window.open(p_curr_page_name, "_blank");
    if (p_curr_page_name == "fms" || p_curr_page_name == "mms" || p_curr_page_name == "mis") {

        ChangeModule(p_curr_page_name);
    }
    else if (p_curr_page_name == "frmBranchSelection.aspx" || p_curr_page_name == "frmFinYearSelection.aspx") {
        ShowInSameWindow();
    }
    else {
        ShowInMiddle(p_curr_page_name, 768, 1024);
    }
}
function OnError_OpenPage(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_OpenPage(arg) {
    alert("Time Out");
}


function ShowInSameWindow() {
    try {
        closeAll();
        window.open(p_curr_page_name, "_self");
    }
    catch (err) {
        alert("ShowInSameWindow() - jScrip Error");
    }

}
function ChangeModule(p_page_name){
    try {

        

        WebServiceMasters.SelectModule(p_page_name,
                                           OnComplete_ChangeModule,
                                           OnError_ChangeModule,
                                           OnTimeOut_ChangeModule);

    }
    catch (err) {
        alert("OpenPage() - jScrip Error");
    }
}
function OnComplete_ChangeModule(arg) {
    closeAll();
    window.open("frmMainMenu.aspx", "_self");
    //ShowWndInMiddle(p_curr_page_name, 768, 1024);

}
function OnError_ChangeModule(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_ChangeModule(arg) {
    alert("Time Out");
}


function ShowInMiddle(pUrl, pHeight, pWidth) {
    try {
        var m_param;

        var pLeft = (window.screen.width - pWidth) / 2;
        var pTop = (window.screen.height - pHeight) / 2;

        m_param = "height=" + pHeight + ",width=" + pWidth;
        m_param = m_param + ",location=0,menubar=0,resizable=0,scrollbars=1,status=0,titlebar=0,menubar=0,";
        m_param = m_param + "top=" + pTop + ",left=" + pLeft;


        //window.open("frmCommonSearchWindow.aspx", "_blank", "height=500,width=600,location=0,menubar=0,resizable=0,status=0,titlebar=0,menubar=0,top=100,left=200");
        openWins[curWin++] = window.open(pUrl, "_blank", m_param);
        
    }
    catch (err) {
        alert('ShowInMiddle() - Error In JScript');
    }
}
//------------------------

function closeAll() {
    for (i = 0; i < openWins.length; i++) if (openWins[i] && !openWins[i].closed)
        openWins[i].close();
}

function LoadImage() {
    try {
        //Loading Main Image
        ActivateFlowChart(1);

        m_module_id = GetValueByCtrlName("cntxt_module_id");

        var m_image;
        if (m_module_id == 3) {
            m_image = document.getElementById("img_mms_data_flow");
        }
        else if (m_module_id == 6) {
            m_image = document.getElementById("img_fms_data_flow");
        }
        else if (m_module_id == 20) {
            m_image = document.getElementById("img_user_security_data_flow");
        }

        var m_img_canvas = window.document.getElementById("img_canvas");
        var m_context = m_img_canvas.getContext("2d");
        m_context.drawImage(m_image, 0, 0);
        p_curr_image_context = m_context;

        if (m_module_id == 3) {
            LoadAuthUserImg(101);
        }

    }
    catch (err) {
        alert("LoadImage() - jScrip Error");
    }
}


function LoadRightImage(p_Image,p_CtrlRef) {
    try {
        SetValue("ctxt_image_name", p_Image);
        LoadMenuWiseImage(p_Image, p_CtrlRef);
    }
    catch (err) {
        alert("LoadRightImage() - jScrip Error");
    }
}


function LoadMenuWiseImage(p_Image, p_CtrlRef) {
    try {
        ActivateFlowChart(1);


        var m_image;
        m_image = document.getElementById(p_CtrlRef);
        var m_img_canvas = window.document.getElementById("img_canvas");
        var m_context = m_img_canvas.getContext("2d");
        m_context.drawImage(m_image, 0, 0);
        p_curr_image_context = m_context;

        if (p_Image == "voucher-navigator.png") { //Voucher Navigation
            LoadAuthUserImg(1);
        }
        else if (p_Image == "student-navigator.png") { //Student Navigation
            LoadAuthUserImg(10);
        }
        else if (p_Image == "inventory.png") { //Inventory Navigation
            LoadAuthUserImg(101);
        }

    }
    catch (err) {
        alert("LoadMenuWiseImage() - jScrip Error");
    }
}

//-------------------
function LoadAuthUserImg(p_ImageId) {
    try {

        var m_FildArray = new Array();
        m_FildArray.push("is_app");
        m_FildArray.push("row");
        m_FildArray.push("col");

        m_module_id = GetValueByCtrlName("cntxt_module_id");
        m_branch_id = GetValueByCtrlName("cntxt_branch_id");

        var m_ParamArray = new Array();
        m_ParamArray.push("@p_branch_id,INT," + m_branch_id);
        m_ParamArray.push("@p_module_id,INT," + m_module_id);
        m_ParamArray.push("1,USERTYPEMAIN,1");
        m_ParamArray.push("@p_image_id,INT," + p_ImageId);



        WebServiceMasters.GetDataFromMasterDb("NA", m_FildArray, m_ParamArray, "Proc_Get_User_Wise_Page_Rights_On_Image", 0,
                                           OnComplete_LoadAuthUserImg,
                                           OnError_LoadAuthUserImg,
                                           OnTimeOut_LoadAuthUserImg);


    }
    catch (err) {
        alert("LoadAuthUserImg() - jScrip Error");
    }
}
function OnComplete_LoadAuthUserImg(arg) {
    if (arg.m_Count == "-1") {
        alert("Error in Image loading");
    }
    else {
        DrawImage(arg.m_List);
    }
}
function OnError_LoadAuthUserImg(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_LoadAuthUserImg(arg) {
    alert("Time Out");
}
//----------------------

function DrawImage(p_Arr) {
    try {
        var m_img_inactive = document.getElementById("img_inactive");
        for (nRow = 0; nRow < p_Arr.length; nRow++) {
            p_curr_image_context.drawImage(m_img_inactive, p_Arr[nRow][1], p_Arr[nRow][2]);        
        }
    }
    catch (err) {
        alert("DrawImage() - jScrip Error");
    }
}


function GetUnqMenuCode(p_curr_ctrl_ref) {
    try {
        p_CurrMenuUnqCode = p_curr_ctrl_ref.value;
    }
    catch (err) {
        alert("GetUnqMenuCode() - jScrip Error");
    }
}


function ShowFlowChart(event) {
    try {

        m_module_id = GetValueByCtrlName("cntxt_module_id");
        if (m_module_id == 3) { //MMS
            if (IsInArea(event, 32, 18, 82, 60, 1) == true) { //Home
                ActivateFlowChart(0);
            }
            else if (IsInArea(event, 174, 17, 245, 62, 1) == true) { //Master setup
            }
            else if (IsInArea(event, 364, 19, 466, 62, 1) == true) { //Inventory navigation
                LoadRightImage('inventory.png', 'img_mms_data_flow');
            }
            else if (IsInArea(event, 546, 13, 634, 61, 1) == true) { //doc print
            }
        }
        else if (m_module_id == 6) { //FMS
            if (IsInArea(event, 37, 18, 71, 62, 1) == true) { //Home
                ActivateFlowChart(0);
            }
            else if (IsInArea(event, 133, 13, 187, 62, 1) == true) { //Bank Nav
                LoadRightImage('bank-navigator.png', 'img_fms_bank_nav');
            }
            else if (IsInArea(event, 235, 12, 282, 61, 1) == true) { //Chq Track
                LoadRightImage('cheque-tracker.png', 'img_fms_cheque_nav');
            }
            else if (IsInArea(event, 350, 12, 402, 60, 1) == true) { //Voucher Navigation
                LoadRightImage('voucher-navigator.png', 'img_fms_voucher_nav');
            }
            else if (IsInArea(event, 466, 12, 517, 63, 1) == true) { //Std Navigation
                LoadRightImage('student-navigator.png', 'img_fms_student_nav');

            }
            else if (IsInArea(event, 576, 10, 628, 63, 1) == true) { //A/c Navigation
                LoadRightImage('account-navigator.png', 'img_fms_data_flow');

            }

        }
        else if (m_module_id == 30) { //MIS
            if (IsInArea(event, 16, 10, 92, 62,1) == true) { //Home
                ActivateFlowChart(0);
            }
            else if (IsInArea(event, 164, 13, 237, 63,1) == true) { //Fms
                ShowHideControl("div_login_area", 0);
                ShowHideControl("div_pending_doc_area", 0);
                ShowHideControl("div_flow_chart", 0);
                ShowHideControl("div_mis_fms_menu_page", 1);
                ShowHideControl("div_mis_mms_menu_page", 0);
                ShowHideControl("div_mis_student_menu_page", 0);
            }
            else if (IsInArea(event, 309, 11, 378, 62,1) == true) { //Inventory navigation
                ShowHideControl("div_login_area", 0);
                ShowHideControl("div_pending_doc_area", 0);
                ShowHideControl("div_flow_chart", 0);
                ShowHideControl("div_mis_fms_menu_page", 0);
                ShowHideControl("div_mis_mms_menu_page", 1);
                ShowHideControl("div_mis_student_menu_page", 0);
            }
            else if (IsInArea(event, 450, 10, 523, 64, 1) == true) { //student
                ShowHideControl("div_login_area", 0);
                ShowHideControl("div_pending_doc_area", 0);
                ShowHideControl("div_flow_chart", 0);
                ShowHideControl("div_mis_fms_menu_page", 0);
                ShowHideControl("div_mis_mms_menu_page", 0);
                ShowHideControl("div_mis_student_menu_page", 1);
            }
            else if (IsInArea(event, 578, 12, 640, 65) == true) { //close
                LoadMisForm('EXIT');
            }
        }
    }
    catch (err) {
        alert("ShowForm() - jScript Error");
    }
}


//--------------------------------------
function GetUserReminderList() {
    try {
        var m_FildArray = new Array();
        m_FildArray.push("from_user_name");
        m_FildArray.push("header");

        var m_ParamArray = new Array();
        m_ParamArray.push("1,USERTYPEMAIN,1");
        WebServiceMasters.GetDataFromMasterDb("NA", m_FildArray, m_ParamArray, "Proc_Get_Reminder_From_User", 0,
                                           OnComplete_GetUserReminderList,
                                           OnError_GetUserReminderList,
                                           OnTimeOut_GetUserReminderList);



    }
    catch (err) {
        alert("GetUserReminderList() - jScript Error");
    }
}
function OnComplete_GetUserReminderList(arg) {
    p_data_fetch_ctr = 1;
    if (arg.m_Count > -1) {
        ComposeMarqueeHtml("m_scroll_reminder_list", arg.m_List,1);
    }
}
function OnError_GetUserReminderList(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_GetUserReminderList(arg) {
    alert("Time Out");
}

//------------------------------

function ComposeMarqueeHtml(p_ctrl_name,p_arr_val,p_flag) {
    try {
        m_scroll_ref = window.document.getElementById(p_ctrl_name);

        m_html = "<div class='marque'> <ul>";
        for (iCtr = 0; iCtr < p_arr_val.length; iCtr++) {
            m_html = m_html + "<li>";
            if (p_flag == 1) {
                m_html = m_html + "<p>" + p_arr_val[iCtr][1] + "</p>";
                m_html = m_html + "<p class='marque-details'> -" + p_arr_val[iCtr][0] + "</p>";
            }
            else if (p_flag == 2) {
                m_html = m_html + "<p>" + p_arr_val[iCtr][0] + "</p>";
            }
            m_html = m_html + "</li>";
        }
        m_html = m_html + "</ul> </div>";

        m_scroll_ref.innerHTML = m_html;
    }
    catch (err) {
        alert("ComposeMarqueeHtml() - jScript Error");
    }
}

//--------------------------------------
function GetUserTodoList() {
    try {
        if (p_data_fetch_ctr == 0) {
            return;
        }
        clearInterval(p_function_user_todo_list);


        var m_FildArray = new Array();
        m_FildArray.push("User_Wise_Todo_List_sJobHeader");

        var m_ParamArray = new Array();
        m_ParamArray.push("1,USERTYPEMAIN,1");
        m_ParamArray.push("@p_disp_type,INT,0");
        WebServiceMasters.GetDataFromMasterDb("NA", m_FildArray, m_ParamArray, "Proc_Get_User_Wise_Todo_List", 0,
                                           OnComplete_GetUserTodoList,
                                           OnError_GetUserTodoList,
                                           OnTimeOut_GetUserTodoList);



    }
    catch (err) {
        alert("GetUserTodoList() - jScript Error");
    }
}
function OnComplete_GetUserTodoList(arg) {
    p_data_fetch_ctr = 2;
    if (arg.m_Count > -1) {
        ComposeMarqueeHtml("m_scroll_todo_list", arg.m_List, 2);
    }
}
function OnError_GetUserTodoList(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_GetUserTodoList(arg) {
    alert("Time Out");
}

//------------------------------


function OpenMyInbox() {
    try {
        ShowInMiddle("frmReminderService.aspx", 768, 1024);
    }
    catch (err) {
        alert("OpenMyInbox() - jScript Error");
    }
}


function LoadMisForm(p_Form_Type) {
    try {

        m_user_name = GetValueByCtrlName("ctxt_user_name")
        m_branch_id = GetValueByCtrlName("cntxt_branch_id")

        if (!(m_user_name == "md@report" || m_user_name == "admin" || m_user_name == "amit@jis")) {
            alert("Please Apply For permission");
            window.open('frmCloseApplication.aspx', '_self'); 
            return;
        }

        if (m_branch_id == 100) {
            m_page_std_info = "http://122.252.249.26:84/PROJECT_DETAILS/frmChatwithMd.aspx?BO_ID=102&CLG_ID=8";
            m_page_std_attd_rep = "http://122.252.249.26:84/PROJECT_DETAILS/Datewise_student_attendance_statistics.aspx?Heading=Student Attendance Report&param_id=-999&clg_id=8";
            m_page_faculty_attd_rep = "http://122.252.249.26:84/PROJECT_DETAILS/Datewise_Faculty_attendance_statistics.aspx?Heading=Faculty Attendance Report&param_id=-999&clg_id=8";
            m_page_faculty_class_rep = "http://122.252.249.26:84/PROJECT_DETAILS/Datewise_Faculty_class_pop.aspx?Heading=Faculty Class Report&param_id=-999&clg_id=8";
            m_page_staff_strength = "http://122.252.249.26:86/JISHR/college_wise_strength.aspx?param_id=-999&clg_id=9";
            m_page_staff_detail = "http://122.252.249.26:86/JISHR/staff_main_detail_dept_wise.aspx?param_id=-999&clg_id=9";

        }
        else if (m_branch_id == 3) {
            m_page_std_info = "http://122.252.249.26:84/PROJECT_DETAILS/frmChatwithMd.aspx?BO_ID=102&CLG_ID=2";
            m_page_std_attd_rep = "http://122.252.249.26:84/PROJECT_DETAILS/Datewise_student_attendance_statistics.aspx?Heading=Student Attendance Report&param_id=-999&clg_id=2";
            m_page_faculty_attd_rep = "http://122.252.249.26:84/PROJECT_DETAILS/Datewise_Faculty_attendance_statistics.aspx?Heading=Faculty Attendance Report&param_id=-999&clg_id=2";
            m_page_faculty_class_rep = "http://122.252.249.26:84/PROJECT_DETAILS/Datewise_Faculty_class_pop.aspx?Heading=Faculty Class Report&param_id=-999&clg_id=2";
            m_page_staff_strength = "http://122.252.249.26:86/JISHR/college_wise_strength.aspx?param_id=-999&clg_id=2";
            m_page_staff_detail = "http://122.252.249.26:86/JISHR/staff_main_detail_dept_wise.aspx?param_id=-999&clg_id=2";
        }
        else {
            m_page_std_info = "frmPageUnderCons.aspx";
            m_page_std_attd_rep = "frmPageUnderCons.aspx";
            m_page_faculty_attd_rep = "frmPageUnderCons.aspx";
            m_page_faculty_class_rep = "frmPageUnderCons.aspx";
            m_page_staff_strength = "frmPageUnderCons.aspx";
            m_page_staff_detail = "frmPageUnderCons.aspx";            
        }


        //----------------Line 1---------------------
        if (p_Form_Type == "FUND_FLOW") {
            ShowInMiddle("frmMisFundPosition.aspx", 768, 1024);
        }
        else if (p_Form_Type == "VENDOR") {
            ShowInMiddle("frmMisVendor.aspx", 768, 1024);
        }
        else if (p_Form_Type == "EXP") {
            ShowInMiddle("frmMisExpenseDist.aspx", 768, 1024);
        }
        else if (p_Form_Type == "STUDENT_FEES") {
            ShowInMiddle("frmMisStudentBill.aspx", 768, 1024);
        }
        else if (p_Form_Type == "FINAL_ACC") {
            ShowInMiddle("frmMisFinalAcc.aspx", 768, 1024);
        }
        else if (p_Form_Type == "VOUCHER_PRINT") {
            ShowInMiddle("frmRptVoucherPrint.aspx", 768, 1024);
        }
        else if (p_Form_Type == "COST_CENTER") {
            ShowInMiddle("frmRptExpCostCenterAnalysis.aspx", 768, 1024);
        }
        else if (p_Form_Type == "STAFF_STRENGTH") {
            ShowInMiddle(m_page_staff_strength, 768, 1024);
        }
        else if (p_Form_Type == "STAFF_DETAIL") {
            ShowInMiddle(m_page_staff_detail, 768, 1024);
        }
        //----------------Line 2---------------------
        if (p_Form_Type == "INDENT_PRINT") {
            ShowInMiddle("frmRptIndent.aspx", 768, 1024);
        }
        else if (p_Form_Type == "PO_PRINT") {
            ShowInMiddle("frmRptPurchaseOrder.aspx", 768, 1024);
        }
        else if (p_Form_Type == "WO_PRINT") {
            ShowInMiddle("frmRptServiceOrderSlip.aspx", 768, 1024);
        }
        else if (p_Form_Type == "UGRM_PRINT") {
            ShowInMiddle("frmRptUgrn.aspx", 768, 1024);
        }
        else if (p_Form_Type == "GRN_PRINT") {
            ShowInMiddle("frmRptGrn.aspx", 768, 1024);
        }
        else if (p_Form_Type == "PO_REGISTER") {
            ShowInMiddle("frmRptPoRegister.aspx", 768, 1024);
        }
        else if (p_Form_Type == "GRN_REGISTER") {
            ShowInMiddle("frmRptGrnReg.aspx", 768, 1024);
        }
        //---------------Line #----------------------
        else if (p_Form_Type == "ITEM_STOCK") {
            ShowInMiddle("frmItemStockReport.aspx", 768, 1024);
        }
        else if (p_Form_Type == "STUDENT_FORUM") {
            m_user_name = GetValueByCtrlName("ctxt_user_name")
            if (m_user_name == "md@report" || m_user_name == "admin" || m_user_name == "amit@jis") {
                ShowInMiddle(m_page_std_info, 768, 1024);
            }
            else {
                ShowMsgWnd("Only Viewable By Managing Director");
            }
        }
        else if (p_Form_Type == "STUDENT_DATA") {
            ShowInMiddle("frmMisStudentData.aspx", 768, 1024);
        }
        else if (p_Form_Type == "STUDENT_ATTD") {
            ShowInMiddle(m_page_std_attd_rep, 768, 1024);
        }
        else if (p_Form_Type == "FACULTY_ATTD") {
            ShowInMiddle(m_page_faculty_attd_rep, 768, 1024);
        }
        else if (p_Form_Type == "FACULTY_STD_POPULATION") {
            ShowInMiddle(m_page_faculty_class_rep, 768, 1024);
        }
        else if (p_Form_Type == "EXIT") {
            if (SelectionWindow() == true) {
                window.open('frmCloseApplication.aspx', '_self');
            }
        }
        else {

        }

    }
    catch (err) {
        alert("LoadMisForm() - jScript Error");
    }
    
}