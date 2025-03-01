function SetWindow(p_width, p_height) {
    window.resizeTo(p_width, p_height);

    var p_top = (window.screen.width - p_width) / 2;
    var p_left = (window.screen.height - p_height) / 2;
    window.moveTo(p_top, p_left);


    window.focus();
}

function IsTextBoxTypeNumeric(p_obj_text_box) {
    var m_val = p_obj_text_box.value
    if (isNaN(m_val) == true) {
        p_obj_text_box.value = "0";
        p_obj_text_box.style.border = "2px solid red";
        alert("Invalid Number");
        return false;
    }
    else {
        p_obj_text_box.style.border = "1px solid green";
        return true;
    }
}

function IsTextBoxTypeDate(p_obj_text_box) {
    var m_val = new String(p_obj_text_box.value);

    //--Checking 10 char
    if (m_val.length != 10) {
        p_obj_text_box.value = "";
        p_obj_text_box.style.backgroundColor = "red";
        alert("Please Enter dd/mm/yyyy");
        return false;
    }


    //--checking dd mm yyyy
    if (isNaN(m_val.substr(0, 2)) == true || isNaN(m_val.substr(3, 2)) == true || isNaN(m_val.substr(6, 4)) == true) 
    {
        p_obj_text_box.value = "";
        p_obj_text_box.style.backgroundColor = "red";
        alert("Please Enter dd/mm/yyyy");
        return false;
    }

    //--checking / & /
    if (m_val.substr(2, 1) != "/" || m_val.substr(5, 1) != "/") {
        p_obj_text_box.value = "";
        p_obj_text_box.style.backgroundColor = "red";
        alert("Please Enter dd/mm/yyyy");
        return false;
    }

    try {
        dd = parseFloat(m_val.substr(0, 2));
        mm = parseFloat(m_val.substr(3, 2));
        yy = parseFloat(m_val.substr(6, 4));
        
        if (mm<1 || mm > 12) {
            p_obj_text_box.value = "";
            p_obj_text_box.style.backgroundColor = "red";
            alert("Invalid Month");
            return false;
        }

        if (dd < 1) {
            p_obj_text_box.value = "";
            p_obj_text_box.style.backgroundColor = "red";
            alert("Invalid Day");
            return false;
        }

        if ((mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10 || mm == 12) && dd > 31) {
            p_obj_text_box.value = "";
            p_obj_text_box.style.backgroundColor = "red";
            alert("Invalid Day");
            return false;
        }
        if (mm == 2) {
            m_flag = 0;
            if (yy % 4 == 0) {
                if (yy % 100 == 0) {
                    if (yy % 400 == 0) {
                        if (dd > 29) {
                            m_flag = 1;
                        }
                    }
                    else {
                        if (dd > 28) {
                            m_flag = 1;
                        }
                    }
                }
                else {
                    if (dd > 29) {
                        m_flag = 1;
                    }
                }
                
            }
            else {
                if(dd > 28)
                {
                    m_flag = 1;
                }
            }

            if (m_flag == 1) {
                p_obj_text_box.value = "";
                p_obj_text_box.style.backgroundColor = "red";
                alert("Invalid Day");
                return false;
            }
        }

        if ((mm == 4 || mm == 6 || mm == 9 || mm == 11) && dd > 30) {
            p_obj_text_box.value = "";
            p_obj_text_box.style.backgroundColor = "red";
            alert("Invalid Day");
            return false;
        }



        p_obj_text_box.style.backgroundColor = "white";
        return true;
    }
    catch (err) {
        p_obj_text_box.value = "";
        p_obj_text_box.style.backgroundColor = "red";
        alert("1.Please Enter dd/mm/yyyy");
        return false;
    }
    

}


function ExitWindow() {
    var m_val = window.confirm("Are You Sure?");
    if (m_val == true) {
        window.close();
        return true;
    }
    else {
        return false;
    }
}

function SelectionWindow() {
    var m_val = window.confirm("Are You Sure?");
    return m_val;
}

function SetFocusColour(p_obj) {
    p_obj.style.backgroundColor = "Yellow";
}

function LostFocusColour(p_obj) {
    p_obj.style.backgroundColor = "white"
}


function ShowSearchWindow(pUrl, pHeight, pWidth, pTop, pLeft) {
    try {
        var m_param;
        m_param = "height=" + pHeight + ",width=" + pWidth;
        m_param = m_param + ",location=0,menubar=0,resizable=0,status=0,titlebar=0,menubar=0,";
        m_param = m_param + "top=" + pTop + ",left=" + pLeft;

        //window.open("frmCommonSearchWindow.aspx", "_blank", "height=500,width=600,location=0,menubar=0,resizable=0,status=0,titlebar=0,menubar=0,top=100,left=200");
        window.open(pUrl, "_blank", m_param);
    }
    catch (err) {
        alert('ShowSearchWindow() - Error In JScript');
    }
}

function SetValueInControl(p_str_control_id, p_str_value, p_auto_post_back_ctrl) {
    try {
        var m_str_control_id;
        var m_str_value;
        var parent_wnd;


        m_str_control_id = p_str_control_id.split(',');
        m_str_value = p_str_value.split(',');
        for (i = 0; i < m_str_control_id.length; i++) {
            parent_wnd = window.opener.document.getElementById(m_str_control_id[i]);
            parent_wnd.value = m_str_value[i];
        }

        if (p_auto_post_back_ctrl != 'NA') {
            window.opener.__doPostBack(p_auto_post_back_ctrl, '');
        }

        window.close();
    }
    catch (err) {
        alert('SetValueInControl() - Error In JScript');
        window.close();
    }
}

function GetValueFromChildWnd(p_str_control_id, p_str_value) {
    var m_str_control_id;
    var m_str_value;
    var parent_wnd;


    m_str_control_id = p_str_control_id.split(',');
    m_str_value = p_str_value.split(',');
    for (i = 0; i < m_str_control_id.length; i++) {
        parent_wnd = window.opener.document.getElementById(m_str_control_id[i]);
        parent_wnd.value = m_str_value[i];
    }
    window.opener.__doPostBack('cmd_post_back','');
    window.close();
}

function ShowWndInMiddle(pUrl, pHeight, pWidth) {
    try {
        var m_param;

        var pLeft = (window.screen.width - pWidth) / 2;
        var pTop = (window.screen.height - pHeight) / 2;

        m_param = "height=" + pHeight + ",width=" + pWidth;
        m_param = m_param + ",location=0,menubar=0,resizable=0,scrollbars=1,status=0,titlebar=0,menubar=0,";
        m_param = m_param + "top=" + pTop + ",left=" + pLeft;


        //window.open("frmCommonSearchWindow.aspx", "_blank", "height=500,width=600,location=0,menubar=0,resizable=0,status=0,titlebar=0,menubar=0,top=100,left=200");
        window.open(pUrl, "_blank", m_param);
    }
    catch (err) {
        alert('ShowWndInMiddle() - Error In JScript');
    }
}

function SetValue(pCtrl, pVal) {
    try{
        m_control = window.document.getElementById(pCtrl);
        if (m_control == null) {
            return;
        }

        m_control.value = pVal;
    }
    catch(err){
        alert('SetValue() - Error In JScript');
    }
}

function SetInnerHtml(pCtrl, pVal) {
    try {
        m_control = window.document.getElementById(pCtrl);
        if (m_control == null) {
            return;
        }

        m_control.innerHTML = pVal;
    }
    catch (err) {
        alert('SetValue() - Error In JScript');
    }
}


function IsValueDate(p_val) {
    var m_val = p_val;


    //--Checking 10 char
    if (m_val.length != 10) {
        return false;
    }

    //--dd/mm/yyyy
    //--0123456789

    //--checking dd mm yyyy
    if (isNaN(m_val.substr(0, 2)) == true || isNaN(m_val.substr(3, 2)) == true || isNaN(m_val.substr(6, 4)) == true) {
        return false;
    }

    //--checking / & /
    if (m_val.substr(2, 1) != "/" || m_val.substr(5, 1) != "/") {
        return false;
    }

    try {
        dd = parseFloat(m_val.substr(0, 2));
        mm = parseFloat(m_val.substr(3, 2));
        yy = parseFloat(m_val.substr(6, 4));

        if (mm < 1 || mm > 12) {
            return false;
        }

        if (dd < 1) {
            return false;
        }

        if ((mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10 || mm == 12) && dd > 31) {
            return false;
        }
        

        if (mm == 2) {
            m_flag = 0;
            if (yy % 4 == 0) {
                if (yy % 100 == 0) {
                    if (yy % 400 == 0) {
                        if (dd > 29) {
                            m_flag = 1;
                        }
                    }
                    else {
                        if (dd > 28) {
                            m_flag = 1;
                        }
                    }
                }
                else {
                    if (dd > 29) {
                        m_flag = 1;
                    }
                }

            }
            else {
                if (dd > 28) {
                    m_flag = 1;
                }
            }

            if (m_flag == 1) {
                return false;
            }
        }

        if ((mm == 4 || mm == 6 || mm == 9 || mm == 11) && dd > 30) {
            return false;
        }

        return true;
    }
    catch (err) {
        return false;
    }


}

function GetdateYyyyMmDd(p_val) {
    var m_val = p_val;


    //--Checking 10 char
    if (m_val.length != 10) {
        return '00000000';
    }

    //--dd/mm/yyyy
    //--0123456789

    //--checking dd mm yyyy
    if (isNaN(m_val.substr(0, 2)) == true || isNaN(m_val.substr(3, 2)) == true || isNaN(m_val.substr(6, 4)) == true) {
        return '00000000';
    }

    //--checking / & /
    if (m_val.substr(2, 1) != "/" || m_val.substr(5, 1) != "/") {
        return '00000000';
    }
    
    //--dd/mm/yyyy
    //--0123456789
    var m_str_date = m_val.substr(6, 4) + m_val.substr(3, 2) + m_val.substr(0, 2);
    return m_str_date;
}

function FinYearCheck(p_curr_date, p_from_fin_date, p_to_fin_date) {
    var m_dbl_date = parseFloat(GetdateYyyyMmDd(p_curr_date));
    var m_dbl_from_date = parseFloat(GetdateYyyyMmDd(p_from_fin_date));
    var m_dbl_to_date = parseFloat(GetdateYyyyMmDd(p_to_fin_date));

    if (m_dbl_date < m_dbl_from_date) {
        alert("From Fin Year Date Less Than Current date");
        return false;
    }
    if (m_dbl_date > m_dbl_to_date) {
        alert("To Fin Year Date Greater Than Current date");
        return false;
    }

    return true;

}

function SetPanelHeight(p_CtrlRef,p_Panel, p_OriginalWidth) {
    m_Panel = window.document.getElementById(p_Panel);

    if (m_Panel.style.height == p_OriginalWidth) {
        m_Panel.style.height = "100%";
        p_CtrlRef.className = "cmd_button_down_arrow";
    }
    else {
        m_Panel.style.height = p_OriginalWidth;
        p_CtrlRef.className = "cmd_button_up_arrow";

    }
}

function ShowHideControl(p_ctrl_name, p_is_show) {
    try {
        p_ctrl_ref = window.document.getElementById(p_ctrl_name);
        if (p_is_show == 1) {
            p_ctrl_ref.style.display = "";
        }
        else {
            p_ctrl_ref.style.display = "none";
        }

    }
    catch (err) {
    }
}


function CheckNumericKey(p_val) {
    try {

        if (p_val.value.length == 1 && (p_val.value == "-" || p_val.value == ".")) {
            return;
        }

        if (p_val.value.length == 0) {
            p_val.value = "0";
            p_val.select();
            return;            
        }

        if (isNaN(p_val.value) == false) {
            if (p_val.value.indexOf(" ") > -1) {
                p_val.value = p_val.value.replace(" ", "");
            }
            return;
        }

        m_val = parseFloat(p_val.value);
        if (isNaN(m_val) == true) {
            p_val.value = "0";
            p_val.select();
            return;
        }
        else {
            p_val.value = m_val;
        }
    }
    catch (err) {
        p_val.value = "0";
        p_val.select();
        return;
    }


}

function GetRound(p_val, p_decimal) {
    try {
        p_amt = p_val * Math.pow(10, p_decimal);
        p_amt = Math.round(p_amt);
        p_amt = p_amt / Math.pow(10, p_decimal);
        return p_amt;
    }
    catch (err) {
        alert('GetRound Function - JScript Error');
        return p_val;
    }
}

function ParseGridControlName(p_curr_ctrl_ref,p_source_control_name,p_target_control_name) {
    try {
        m_control_id = p_curr_ctrl_ref.id;
        m_control_name = m_control_id.replace(p_source_control_name, p_target_control_name);
        return window.document.getElementById(m_control_name);
    }
    catch (err) {
        alert('ParseGridControlName() - Error In JScipt');
        return null;
    }
}

function ChangeButtonDuringSave(p_curr_ctrl_ref) {
    try {
        p_curr_ctrl_ref.style.border = "2px solid yellow";
    }
    catch (err) {
    }
}


function SetTextBoxHeight(p_curr_ctrl_ref,p_height) {
    try {
        p_curr_ctrl_ref.style.height = p_height;
    }
    catch (err) {
    }
}



function SetFocusOnControl(p_curr_ctrl_name) {
    try {
        m_ref = window.document.getElementById(p_curr_ctrl_name);
        if (m_ref != null) {
            if (m_ref.disabled == true) {
                m_ref.disabled = false;
                m_ref.focus();
                m_ref.disabled = true;
            }
            else {
                m_ref.focus();
                m_ref.select();
            }
        }
        
    }
    catch (err) {
        alert("SetFocusOnControl() - JScript Error");
    }
}

function ComposeGridCtrlRef(p_grid_name, p_control_name, p_row) {
    try {
        m_ctrl_name = p_grid_name + "_" + p_control_name + "_" + p_row;
        return window.document.getElementById(m_ctrl_name);
    }
    catch (err) {
        alert('ComposeGridCtrlRef() - Error in JScript');
        return null;
    }
}

function GetFieldValArr(pField,pVal) {
    try {
        m_arr = new Array;
        m_arr.push(pField);
        m_arr.push(pVal);
        return m_arr;
    }
    catch (err) {
        alert('GetFieldValArr() - JScript Err');
    }
}




function GetValueByCtrlName(p_ctrl_name) {
    try {
        return window.document.getElementById(p_ctrl_name).value;
    }
    catch (err) {
        alert('GetValueByCtrlName() - JScript Err - ' + p_ctrl_name);
        return "ERROR";
    }
}

function DestroyGrid(p_grid_name, p_container_name) {
    try {
        m_grid_name = window.document.getElementById(p_grid_name);
        m_container_name = window.document.getElementById(p_container_name);

        if (m_grid_name != null) {
            m_container_name.removeChild(m_grid_name);
        }
    }
    catch (err) {
        alert("DestroyGrid()- Error In JScript");
    }
}

function GetArrayRowIndex(p_arr,p_key_name) {
    try {
        nRowIndex = -1;

        for (iRow = 0; iRow < p_arr.length; iRow++) {
            if (p_arr[iRow] == p_key_name) {
                nRowIndex = iRow;
                break;
            }
        }

        return nRowIndex;
    }
    catch (err) {
        alert("GetArrayRowIndex()- Error In JScript");
        return -1;
    }
}

function GetDelemetedValue(p_Arr, p_Seperator, p_Pos) {
    try {
        var m_TempArr = new Array();
        var m_TempFinalArr = new Array();

        for (iRow = 0; iRow < p_Arr.length; iRow++) {
            m_TempStr = p_Arr[iRow];
            m_TempArr = m_TempStr.split(p_Seperator);
            m_TempFinalArr.push(m_TempArr[p_Pos]);
        }
        return m_TempFinalArr;
    }
    catch (err) {
        alert("GetDelemetedValue() - JScript error");
    }
}

function ScrollUpDown(p_control_ref,event) {
    try {

        var unicode = event.keyCode ? event.keyCode : event.charCode;


        var m_TempArr = new Array();

        m_control_name = p_control_ref.id;
        m_TempArr = m_control_name.split("_");
        nOldRow = parseInt(m_TempArr[m_TempArr.length - 1]);
        if (unicode == 40) {
            nNewRow = nOldRow + 1;
        }
        else if (unicode == 38) {
            nNewRow = nOldRow - 1;
        }
        else {
            return;
        }
        m_control_name = m_control_name.replace(nOldRow, nNewRow);
        m_control_name = window.document.getElementById(m_control_name);
        if (m_control_name != null) {
            m_control_name.select();
            //m_control_name.focus();
        }
    }
    catch (err) {
        alert("ScrollUpDown() - JScript error");
    }
}


function ComposeHtmlCtrlRef(p_grid_name, p_control_name, p_row) {
    try {
        m_ctrl_name = p_grid_name + "_ctrl_" + p_control_name + "_" + p_row;
        m_ctrl_name = m_ctrl_name.toUpperCase();
        return window.document.getElementById(m_ctrl_name);
    }
    catch (err) {
        alert('ComposeHtmlCtrlRef() - Error in JScript');
        return null;
    }
}

function ParseGridControlNameToUpper(p_curr_ctrl_ref, p_source_control_name, p_target_control_name) {
    try {
        m_control_id = p_curr_ctrl_ref.id;
        m_control_id = m_control_id.toUpperCase();
        p_source_control_name = p_source_control_name.toUpperCase();
        p_target_control_name = p_target_control_name.toUpperCase();

        m_control_name = m_control_id.replace(p_source_control_name, p_target_control_name);

        return window.document.getElementById(m_control_name);
    }
    catch (err) {
        alert('ParseGridControlNameToUpper() - Error In JScipt');
        return null;
    }
}


function SetAutoCompleteOff() {
    try {
        m_obj = window.document.getElementsByTagName("input");
        for (nCtr = 0; nCtr < m_obj.length; nCtr++) {
            m_obj[nCtr].setAttribute('autocomplete', "off");
        }
    }
    catch (err) {
        alert('SetAutoCompleteOff() - Error In JScipt');
    }
}

function SetFocusOffByTagName(p_TagName) {
    try {
        m_obj = window.document.getElementsByTagName(p_TagName);
        for (nCtr = 0; nCtr < m_obj.length; nCtr++) {
            m_obj[nCtr].setAttribute('tabIndex', "-1");
        }

    }
    catch (err) {
        alert('SetAutoCompleteOff() - Error In JScipt');
    }
}



function LockControl(p_control_name,p_flag) {
    try {
        m_ref = window.document.getElementById(p_control_name);
        if (m_ref != null) {
            m_ref.disabled = p_flag;
        }
        else {
            alert("Invalid Control Name - " + p_control_name);
        }

    }
    catch (err) {
        alert('LockControl() - Error In JScipt');
    }
}


function SetButtonBorder(m_curr_ctrl_name,p_Width,p_Color) {
    try {
        m_ref = window.document.getElementById(m_curr_ctrl_name);
        m_ref.style.outline = p_Width + " solid " + p_Color;
    }
    catch (err) {
        alert('SetButtonBorder() - Error In JScipt');
    }
}


function GetRadioButStat(m_curr_ctrl_name) {
    try {
        m_ref = window.document.getElementById(m_curr_ctrl_name);
        return m_ref.checked;
    }
    catch (err) {
        alert('GetRadioButStat() - Error In JScipt');
        return false;
    }
}


function SetControlClass(p_CtrlName,p_ClassName) {
    try {
        p_CtrlRef = window.document.getElementById(p_CtrlName);
        p_CtrlRef.className = p_ClassName;
    }
    catch (err) {
        alert('SetControlClass() - Error In JScipt');
    }
}

function SetCheckBoxValue(p_Ctrl_Ref) {
    try {
        if (p_Ctrl_Ref.value == 1) {
            p_Ctrl_Ref.value = 0;
            p_Ctrl_Ref.className = "cmd_button_check_box_off";
        }
        else {
            p_Ctrl_Ref.value = 1;
            p_Ctrl_Ref.className = "cmd_button_check_box_on";
        }
    }
    catch (err) {
        alert('SetCheckBoxValue() - Error In JScipt');
    }
}

function GetIdFromGrid(p_grid_name, p_ctrl_name_app, p_ctrl_name_id) {
    try {
        
        m_grid_ctrl_ref = window.document.getElementById(p_grid_name);
        if (m_grid_ctrl_ref == null) {
            alert("Grid Error: " + p_grid_name);
            return "";
        }

        m_RetVal = "";

        for (iRow = 0; iRow < m_grid_ctrl_ref.rows.length; iRow++) {
            m_ctrl_name_app = p_grid_name + "_ctrl_" + p_ctrl_name_app + "_" + iRow;
            m_ctrl_name_app = m_ctrl_name_app.toUpperCase();
            m_ctrl_ref_app = window.document.getElementById(m_ctrl_name_app);

            m_ctrl_name_id = p_grid_name + "_ctrl_" + p_ctrl_name_id + "_" + iRow;
            m_ctrl_name_id = m_ctrl_name_id.toUpperCase();
            m_ctrl_ref_id = window.document.getElementById(m_ctrl_name_id);

            if (m_ctrl_ref_app != null && m_ctrl_ref_id != null) {
                if (m_ctrl_ref_app.value == 1) {
                    m_RetVal = m_RetVal + m_ctrl_ref_id.value + ",";
                }
            }
        }

        if (m_RetVal.length > 0) {
            m_RetVal = m_RetVal.substr(0, m_RetVal.length - 1);
        }

        return m_RetVal;
    }
    catch (err) {
        alert('GetIdFromGrid() - Error In JScipt');
        return "";
    }
}


//------------------------------------------
function PopulateDataTable(p_session_var_name, p_ParamList, p_sp_name, p_IsConnectToMasterDb) {
    try {
        WebServiceMasters.PopulateDataTable(p_session_var_name,
                                             p_ParamList,
                                             p_sp_name, 
                                             p_IsConnectToMasterDb,
                                            OnCompleteDynamicHtmlTemplate_PopulateDataTable,
                                            OnErrorDynamicHtmlTemplate_PopulateDataTable,
                                            OnTimeOutDynamicHtmlTemplate_PopulateDataTable
                                            );        
    }
    catch(err){
        alert("PopulateDataTable() - Error In JScipt");
    }
}
function OnCompleteDynamicHtmlTemplate_PopulateDataTable(arg) {
    if (arg > 0) {
        alert("PopulateDataTable() - Error In Web-Service Call");
    }
}
function OnErrorDynamicHtmlTemplate_PopulateDataTable(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutDynamicHtmlTemplate_PopulateDataTable(arg) {
    alert("Time Out");
}

//------------------------------------------




function ShowMsgWnd(pMesg) {
    try {
        p_WndCtrlRef = window.document.body;

        dt = new Date();
        m_id = "m_mesg_box_wid_ctrl_" + dt.getHours() + dt.getMinutes() + dt.getSeconds() + dt.getMilliseconds();

        m_div_mesg_root = document.createElement('body');
        m_div_mesg_root.setAttribute('class', "message_box_boby");
        m_div_mesg_root.setAttribute('id', m_id);
        p_WndCtrlRef.appendChild(m_div_mesg_root);

        m_div_mesg = document.createElement('div');
        m_div_mesg.setAttribute('class', "message_box_wnd");
        m_Content = document.createTextNode(pMesg);
        m_div_mesg.appendChild(m_Content);
        m_div_mesg_root.appendChild(m_div_mesg);

        m_div_mesg_line = document.createElement('div');
        m_div_mesg_line.style.height = "20px";
        m_div_mesg.appendChild(m_div_mesg_line);


        m_but = document.createElement('input');
        m_but.setAttribute('type', "button");
        m_but.setAttribute('class', "close");
        m_func = "DestroyMsgWnd('" + m_id + "');";
        m_but.setAttribute("onclick", m_func);
        m_div_mesg.appendChild(m_but);

        

    }
    catch (err) {
        alert("ShowMsgWnd() - Error In JScipt");
    }
}

function DestroyMsgWnd(p_ctrl_name) {
    try {
        p_WndCtrlRef = window.document.getElementById(p_ctrl_name);
        if (p_WndCtrlRef == null) {
            return;
        }

        while (p_WndCtrlRef.firstChild) {
            p_WndCtrlRef.removeChild(p_WndCtrlRef.firstChild);
        }
        p_WndMainWnd = window.document.body;
        p_WndMainWnd.removeChild(p_WndCtrlRef);
    }
    catch (err) {
        alert("DestroyMsgWnd() - Error In JScipt");
    }
}


function GetCheckBoxValue(p_ctrl_name) {
    try {
        return window.document.getElementById(p_ctrl_name).checked;
    }
    catch (err) {
        alert('GetCheckBoxValue() - JScript Err');
        return false;
    }
}

function GetRadioButtonValue(p_ctrl_name) {
    try {
        return window.document.getElementById(p_ctrl_name).checked;
    }
    catch (err) {
        alert('GetRadioButtonValue() - JScript Err');
        return false;
    }
}



function ResetNameCodeControl(p_name_control,p_value_control) {
    try {
        m_text = GetValueByCtrlName(p_name_control);
        if (GetStringLength(m_text) <= 0) {
            SetValue(p_value_control, "0");
        }

    }
    catch (err) {
        alert('ResetNameCodeControl() - JScript Err');
        SetValue(p_value_control, "0");
    }
}

function SetControlAlignment(p_name_control,p_Flag) {
    try {
        p_ref = document.getElementById(p_name_control);
        if (p_Flag == "L") {
            p_ref.style.textAlign = "left";
        }
        else if (p_Flag == "R") {
            p_ref.style.textAlign = "right";
        }
        else if (p_Flag == "C") {
            p_ref.style.textAlign = "center";
        }
        else {
            p_ref.style.textAlign = "left";
        }
    }
    catch (err) {
        alert('SetControlAlignment() - JScript Err');
    }
}

function SetControlBackColor(p_name_control, p_Color) {
    try {
        p_ref = document.getElementById(p_name_control);
        p_ref.style.backgroundColor = p_Color;
    }
    catch (err) {
        alert('SetControlBackColor() - JScript Err');
    }
}

function CheckDateKey(event, p_Ref) {
    try {

        var unicode = event.keyCode ? event.keyCode : event.charCode;
        if (unicode == 9 || unicode == 13 || unicode == 16) {
            return;
        }


        if (!((unicode >= 48 && unicode <= 57) || (unicode >= 96 && unicode <= 105) )) {
            m_Val = p_Ref.value;
            if (m_Val.length > 0) {
                m_Val = m_Val.substr(0, m_Val.length - 1)
                p_Ref.value = m_Val;
            }
        }
        else {
            m_Val = p_Ref.value;
            if (m_Val.length == 2 || m_Val.length == 5) {
                m_Val = m_Val + "/";
                p_Ref.value = m_Val;
            }
        }
        
    }
    catch (err) {
        p_val.value = "";
        p_val.select();
        return;
    }
}


function SetDateEventByTagName() {
    try {
        m_obj = window.document.getElementsByTagName("input");
        for (nCtr = 0; nCtr < m_obj.length; nCtr++) {
            m_id = m_obj[nCtr].id;
            m_id = m_id.toUpperCase();
            m_id = m_id.substr(0, 4);
            if (m_id == "DTP_") {
                m_obj[nCtr].setAttribute('onkeyup', "CheckDateKey(event,this);");
                m_obj[nCtr].setAttribute('onblur', "return IsTextBoxTypeDate(this);");
            }
        }

    }
    catch (err) {
        alert('SetDateEventByTagName() - Error In JScipt');
    }
}

function SetNumericEventByTagName() {
    try {
        m_obj = window.document.getElementsByTagName("input");
        for (nCtr = 0; nCtr < m_obj.length; nCtr++) {
            m_id = m_obj[nCtr].id;
            m_id = m_id.toUpperCase();
            m_id = m_id.substr(0, 6);
            if (m_id == "CNTXT_") {
                m_obj[nCtr].setAttribute('onkeyup', "CheckNumericKey(this);");
            }
        }

    }
    catch (err) {
        alert('SetNumericEventByTagName() - Error In JScipt');
    }
}


function CreatePageControlArray(p_Array) {
    try {
        p_Array.splice(0, p_Array.length); //Remove All Elements

        m_obj = window.document.getElementsByTagName("input");
        for (nCtr = 0; nCtr < m_obj.length; nCtr++) {
            m_id = m_obj[nCtr].id;
            m_type = m_obj[nCtr].type;
            m_is_disabled = m_obj[nCtr].disabled;
            m_offsetWidth = m_obj[nCtr].offsetWidth;

            if (m_type != "hidden" && m_is_disabled == false && m_offsetWidth>0) {
                //Text
                nCount = m_id.indexOf("ctxt_");
                if (nCount > -1) {
                    p_Array.push(m_id);
                }
                //Number
                nCount = m_id.indexOf("cntxt_");
                if (nCount > -1) {
                    p_Array.push(m_id);
                }
                //Date
                nCount = m_id.indexOf("dtp_");
                if (nCount > -1) {
                    p_Array.push(m_id);
                }
                //button
                nCount = m_id.indexOf("cmd_");
                if (nCount > -1) {
                    p_Array.push(m_id);
                }
            }
        }

    }
    catch (err) {
        alert('CreatePageControlArray() - Error In JScipt');
    }
}

function GoToNextTab(p_Array,p_combo_control_array) {
    try {

        if (p_combo_control_array.length > 0) {
            for (nRow = 0; nRow < p_combo_control_array.length; nRow++) {
                m_combo_ref = window.document.getElementById(p_combo_control_array[nRow]);
                if (m_combo_ref != null) {
                    return;
                }
            }
        }
        


        m_curr_ctrl_id = document.activeElement;
        if (m_curr_ctrl_id == null || p_Array.length<1) {
            return;
        }
        m_curr_ctrl_id.style.outline = "0px solid #77e5ff";


        nRowPos = p_Array.indexOf(m_curr_ctrl_id.id);
        if (nRowPos > -1) {
            nRowPos = nRowPos+1
            if (nRowPos > p_Array.length-1) {
                nRowPos = 0;
            }
            m_next_ctrl = p_Array[nRowPos];
            m_next_ctrl = window.document.getElementById(m_next_ctrl);
            m_next_ctrl.style.outline = "3px solid #f7c462";
            m_next_ctrl.focus();
        }


    }
    catch (err) {
        alert('GoToNextTab() - Error In JScipt');
    }
}

function ShowWaitMsgWnd(pMesg) {
    try {
        p_WndCtrlRef = window.document.body;

        dt = new Date();
        m_id = "m_wait_mesg_box_wnd_ctrl";

        m_div_mesg_root = document.createElement('div');
        m_div_mesg_root.setAttribute('class', "message_box_wait_wnd");
        m_div_mesg_root.setAttribute('id', m_id);
        p_WndCtrlRef.appendChild(m_div_mesg_root);

        m_div_mesg = document.createElement('div');
        m_Content = document.createTextNode(pMesg);
        m_div_mesg.appendChild(m_Content);
        m_div_mesg_root.appendChild(m_div_mesg);

    }
    catch (err) {
        alert("ShowWaitMsgWnd() - Error In JScipt");
    }
}

function DestroyWaitMsgWnd() {
    try {
        p_WndCtrlRef = window.document.getElementById("m_wait_mesg_box_wnd_ctrl");
        if (p_WndCtrlRef == null) {
            return;
        }

        while (p_WndCtrlRef.firstChild) {
            p_WndCtrlRef.removeChild(p_WndCtrlRef.firstChild);
        }
        p_WndMainWnd = window.document.body;
        p_WndMainWnd.removeChild(p_WndCtrlRef);
    }
    catch (err) {
        alert("DestroyWaitMsgWnd() - Error In JScipt");
    }
}


function GetYear(p_Date) {
    try {
        if (IsValueDate(p_Date) == false) {
            alert("GetYear() - Invalid Date");
            return -1;
        }
        m_year = parseInt(p_Date.substr(6, 4));

        if (m_year <= 0) {
            alert("GetYear() - Invalid Date");
            return -1;
        }

        return m_year;
    }
    catch (err) {
        alert("GetYear() - Error In JScipt");
        return -1;
    }
}

function GetMonth(p_Date) {
    try {
        if (IsValueDate(p_Date) == false) {
            alert("GetMonth() - Invalid Date");
            return -1;
        }
        m_month = parseInt(p_Date.substr(3, 2));

        if (m_month <= 0) {
            alert("GetMonth() - Invalid Date");
            return -1;
        }

        return m_month;
    }
    catch (err) {
        alert("GetMonth() - Error In JScipt");
        return -1;
    }
}

function GetDay(p_Date) {
    try {
        if (IsValueDate(p_Date) == false) {
            alert("GetDay() - Invalid Date");
            return -1;
        }
        m_day = parseInt(p_Date.substr(0, 2));

        if (m_day <= 0) {
            alert("GetDay() - Invalid Date");
            return -1;
        }

        return m_day;
    }
    catch (err) {
        alert("GetDay() - Error In JScipt");
        return -1;
    }
}



function GetLastDateOfMonth(p_YYYY,p_MM) {
    try {
        p_MM = parseInt(p_MM);
        p_YYYY = parseInt(p_YYYY);


        if (p_YYYY < 1900 || p_YYYY > 3000) {
            alert("GetLastDateOfMonth() - Invalid Year");
            return "01/01/1900";
        }
        if (p_MM < 1 || p_MM > 12) {
            alert("GetLastDateOfMonth() - Invalid Month");
            return "01/01/1900";
        }

        p_MM = p_MM + 1;
        if (p_MM == 13) {
            p_MM = 1;
            p_YYYY = p_YYYY + 1;
        }


        var m_Date = new Date(p_YYYY, p_MM - 1, '01');
        m_Date.setDate(m_Date.getDate() - 1);
        DD = m_Date.getDate();
        MM = m_Date.getMonth()+1;
        YYYY = m_Date.getFullYear();

        if (DD < 10) {
            DD = '0' + DD;
        }
        if (MM < 10) {
            MM = '0' + MM;
        }
        delete m_Date;

        m_strDate = DD + "/" + MM + "/" + YYYY;
        return m_strDate;

    }
    catch (err) {
        alert("GetLastDateOfMonth() - Error In JScipt");
        return "01/01/1900";
    }
}

function GetFirstDateOfMonth(p_YYYY, p_MM) {
    try {
        p_MM = parseInt(p_MM);
        p_YYYY = parseInt(p_YYYY);


        if (p_YYYY < 1900 || p_YYYY > 3000) {
            alert("GetFirstDateOfMonth() - Invalid Year");
            return "01/01/1900";
        }
        if (p_MM < 1 || p_MM > 12) {
            alert("GetFirstDateOfMonth() - Invalid Month");
            return "01/01/1900";
        }

        if (p_MM < 10) {
            p_MM = '0' + p_MM;
        }

        delete m_Date;
        m_strDate = "01" + "/" + p_MM + "/" + p_YYYY;
        return m_strDate;

    }
    catch (err) {
        alert("GetLastDateOfMonth() - Error In JScipt");
        return "01/01/1900";
    }
}

function GetStringLength(p_strVal) {
    try {
        return p_strVal.trim().length;
    }
    catch (err) {
        alert('GetStringLength() - Error In JScript');
        return -1;
    }
}

function NoBackButton() {
    try {
        window.history.forward();
    }
    catch (err) {
        alert('NoBackButton() - Error In JScript');
    }
}


//------------------------------------------
function Jf_ExportToExcel(p_file_name, p_ParamList, p_sp_name,p_col_name,p_field_name, p_IsConnectToMasterDb) {
    try {
        ShowWaitMsgWnd("Please Wait");
        WebServiceMasters.ExportToExcel(p_file_name,
                                        p_ParamList,
                                        p_sp_name,
                                        p_col_name,
                                        p_field_name,
                                        p_IsConnectToMasterDb,
                                        OnCompleteDynamicHtmlTemplate_ExportToExcel,
                                        OnErrorDynamicHtmlTemplate_ExportToExcel,
                                        OnTimeOutDynamicHtmlTemplate_ExportToExcel
                                        );
    }
    catch (err) {
        alert("Jf_ExportToExcel() - Error In JScipt");
    }
}
function OnCompleteDynamicHtmlTemplate_ExportToExcel(arg) {
    DestroyWaitMsgWnd();
    if (arg > 0) {
        alert("Jf_ExportToExcel() - Error In Web-Service Call");
    }
    else {
        ShowWndInMiddle("frmExportExcel.aspx", 500, 500);
    }

}
function OnErrorDynamicHtmlTemplate_ExportToExcel(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutDynamicHtmlTemplate_ExportToExcel(arg) {
    alert("Time Out");
}

//------------------------------------------


//--------------------------------
function SetUniqueRowNo() {
    try {
        WebServiceMasters.SetUniqueRowNo(OnComplete_SetUniqueRowNo,
                                         OnError_SetUniqueRowNo,
                                         OnTimeOut_SetUniqueRowNo);        
    }
    catch (err) {
        alert("GetUniqueRowNo() - Error In JScipt");
    }
}
function OnComplete_SetUniqueRowNo(arg) {
    m_row_ctrl = window.document.getElementById("ctxt_row_no");
    if (m_row_ctrl != null) {
        m_row_ctrl.value = arg;
    }
}
function OnError_SetUniqueRowNo(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SetUniqueRowNo(arg) {
    alert("Time Out");
}
//---------------------------------
function SetUniqueRowNoFromCdgen(p_type) {
    try {
        WebServiceMasters.SetUniqueRowNoFromCdgen(p_type,OnComplete_SetUniqueRowNoFromCdgen,
                                         OnError_SetUniqueRowNoFromCdgen,
                                         OnTimeOut_SetUniqueRowNoFromCdgen);
    }
    catch (err) {
        alert("SetUniqueRowNoFromCdgen() - Error In JScipt");
    }
}
function OnComplete_SetUniqueRowNoFromCdgen(arg) {
    m_row_ctrl = window.document.getElementById("ctxt_row_no");
    if (m_row_ctrl != null) {
        m_row_ctrl.value = arg;
    }
}
function OnError_SetUniqueRowNoFromCdgen(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SetUniqueRowNoFromCdgen(arg) {
    alert("Time Out");
}
//---------------------------------

function CommaSeperatedNum(p_Amt) {
    try {
        /*99,99,99,999*/
        /*01,23,45,678*/

        if (parseFloat(p_Amt) >= 100000000 && parseFloat(p_Amt) <= 999999999) { //01,23,45,678
            m_sAmt = p_Amt.substr(0, 2) + "," + p_Amt.substr(2, 2) + "," + p_Amt.substr(4, 2) + "," + p_Amt.substr(6);
        }
        else if (parseFloat(p_Amt) >= 10000000 && parseFloat(p_Amt) <= 99999999) { //0,12,34,567
            m_sAmt = p_Amt.substr(0, 1) + "," + p_Amt.substr(1, 2) + "," + p_Amt.substr(3, 2) + "," + p_Amt.substr(5);
        }
        else if (parseFloat(p_Amt) >= 1000000 && parseFloat(p_Amt) <= 9999999) { //01,23,456
            m_sAmt = p_Amt.substr(0, 2) + "," + p_Amt.substr(2, 2) + "," + p_Amt.substr(4);
        }
        else if (parseFloat(p_Amt) >= 100000 && parseFloat(p_Amt) <= 999999) { //0,12,345
            m_sAmt = p_Amt.substr(0, 1) + "," + p_Amt.substr(1, 2) + "," + p_Amt.substr(3);
        }
        else if (parseFloat(p_Amt) >= 10000 && parseFloat(p_Amt) <= 99999) { //01,234
            m_sAmt = p_Amt.substr(0, 2) + "," + p_Amt.substr(2);
        }
        else if (parseFloat(p_Amt)>=1000 && parseFloat(p_Amt) <= 9999) { //0,123
            m_sAmt = p_Amt.substr(0, 1) + "," + p_Amt.substr(1);
        }
        else {
            m_sAmt = p_Amt;
        }
        return m_sAmt;
    }
    catch (err) {
        alert("CommaSeperatedNum() - Error In JScipt");
    }
}


function GetDateDiff(p_from_date,p_to_date) {
    try {
        var m_Date1 = new Date(GetYear(p_from_date), GetMonth(p_from_date), GetDay(p_from_date));
        var m_Date2 = new Date(GetYear(p_to_date), GetMonth(p_to_date), GetDay(p_to_date));


        m_day = (m_Date2 - m_Date1) / (1000 * 60 * 60 * 24);
        delete m_Date1;
        delete m_Date2;

        return m_day;
    }
    catch (err) {
        alert("GetDateDiff() - Error In JScipt");
        return -1;
    }
}

function ShowTableWnd() {
    try {
        p_WndCtrlRef = window.document.body;


        m_id = "xx";

        m_div_mesg_root = document.createElement('body');
        m_div_mesg_root.setAttribute('class', "message_box_boby");
        m_div_mesg_root.setAttribute('id', m_id);
        p_WndCtrlRef.appendChild(m_div_mesg_root);


        m_id1 = "m_table_box_wid_ctrl";

        m_div_mesg = document.createElement('div');
        m_div_mesg.setAttribute('class', "display_box_wnd");
        m_div_mesg_root.appendChild(m_div_mesg);

        m_div_mesg_rel = document.createElement('div');
        m_div_mesg_rel.setAttribute('class', "display_box_wnd_rel");
        m_div_mesg.setAttribute('id', m_id1);
        m_div_mesg.appendChild(m_div_mesg_rel);

        m_div_mesg_line = document.createElement('div');
        m_div_mesg_line.style.height = "20px";
        m_div_mesg.appendChild(m_div_mesg_line);


        m_but = document.createElement('input');
        m_but.setAttribute('type', "button");
        m_but.setAttribute('class', "display_close");
        m_but.style.alignContent = "right";
        m_func = "DestroyTableWnd('" + m_id + "');";
        m_but.setAttribute("onclick", m_func);
        m_div_mesg.appendChild(m_but);




    }
    catch (err) {
        alert("ShowTableWnd() - Error In JScipt");
    }
}

function DestroyTableWnd(p_ctrl_name) {
    try {
        p_WndCtrlRef = window.document.getElementById(p_ctrl_name);
        if (p_WndCtrlRef == null) {
            return;
        }

        while (p_WndCtrlRef.firstChild) {
            p_WndCtrlRef.removeChild(p_WndCtrlRef.firstChild);
        }
        p_WndMainWnd = window.document.body;
        p_WndMainWnd.removeChild(p_WndCtrlRef);
    }
    catch (err) {
        alert("DestroyTableWnd() - Error In JScipt");
    }
}

function SetInnerText(pCtrl, pVal) {
    try {
        m_control = window.document.getElementById(pCtrl);
        if (m_control == null) {
            return;
        }

        m_control.innerText = pVal;
    }
    catch (err) {
        alert('SetInnerText() - Error In JScript');
    }
}