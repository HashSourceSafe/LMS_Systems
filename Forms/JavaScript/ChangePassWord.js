document.oncontextmenu = new Function("return false");


function RightMouseClick(event) {
    if (event.which == 3) {
        alert("Enjoy Your Work");
    }
}


function CheckKeyUp(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;

        m_curr_ctrl = document.activeElement;



        if (m_curr_ctrl != null && unicode == 9 && m_curr_ctrl.tagName != "DIV") {
            m_curr_ctrl.style.outline = "3px solid #77e5ff";
            m_curr_ctrl.focus();
        }

    }
    catch (err) {
        alert("CheckKeyUp() - JScript Error");
    }
}


function CheckKeyDown(event) {
    try {
        var unicode = event.keyCode ? event.keyCode : event.charCode;


        m_curr_ctrl = document.activeElement;
        if (m_curr_ctrl != null && unicode == 9) {
            m_curr_ctrl.style.outline = "0px solid #77e5ff";
        }

        //Enter,PageUp,PageDown,F2 key code
        if (unicode == 13 || unicode == 33 || unicode == 34 || unicode == 113 || unicode == 112) {
            event.preventDefault();
        }

    }
    catch (err) {
        alert("CheckKeyDown() - JScript Error");
    }
}

//------------------------------
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

//----------------


function SetNull() {
    try {
        SetValue("ctxt_old_password", "");
        SetValue("ctxt_new_password", "");
        SetValue("ctxt_confirm_password", "");
    }
    catch (err) {
        alert("SetNull() - JScript Error");
    }
}

function ValidateSave() {
    try {
        ctxt_old_password = GetValueByCtrlName("ctxt_old_password");
        ctxt_new_password = GetValueByCtrlName("ctxt_new_password");
        ctxt_confirm_password = GetValueByCtrlName("ctxt_confirm_password");



        if (GetStringLength(ctxt_old_password)<=0) {
            ShowMsgWnd("Enter old password");
            return false;
        }

        if (GetStringLength(ctxt_new_password) <= 0) {
            ShowMsgWnd("Enter New password");
            return false;
        }

        if (GetStringLength(ctxt_confirm_password) <= 0) {
            ShowMsgWnd("Enter Confirm password");
            return false;
        }

        if (ctxt_new_password != ctxt_confirm_password) {
            ShowMsgWnd("Password not matching");
            return false;
        }


        return true;

    }
    catch (err) {
        alert("ValidateSave()- Error In JScript");
        return false;
    }
}



//---------------------------
function SaveData() {
    try {
        if (ValidateSave() == false) {
            return;
        }

        if (SelectionWindow() == false) {
            return;
        }


        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_old_password = GetValueByCtrlName("ctxt_old_password");
        ctxt_new_password = GetValueByCtrlName("ctxt_new_password");
        ctxt_type = GetValueByCtrlName("ctxt_type");



        WebServiceMasters.UpdateUserPassWord(cntxt_college_id,ctxt_old_password, ctxt_new_password, ctxt_type,
                                   OnComplete_SaveData,
                                   OnError_SaveData,
                                   OnTimeOut_SaveData);
    }
    catch (err) {
        alert("SaveData()- Error In JScript");
    }
}
function OnComplete_SaveData(arg) {
    ShowMsgWnd(arg);
    SetNull();
}
function OnError_SaveData(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SaveData(arg) {
    alert("Time Out");
}

//------------------------------
