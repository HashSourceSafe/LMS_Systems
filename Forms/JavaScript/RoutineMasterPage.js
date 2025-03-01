


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


function InitMenuPage() {
    try {
        SetAutoCompleteOff();
        SetFocusOffByTagName("DIV");
        SetDateEventByTagName();

        LoadMenu();

       
    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}









/*
function LogOut() {
    try {
        WebServiceMasters.RemoveSessionAllVar(OnCompleteLogOutWindow, OnErrorLogOutWindow, OnTimeOutLogOutWindow);
    }
    catch (err) {
        alert('ExitWindow() - Error In JScript');
    }
}
function OnCompleteLogOutWindow(arg) {
    if (arg > 0) {
        alert('Error in WebMethod');
        window.open("frmLogin.aspx", "_self");
    }
    else {
        window.open("frmLogin.aspx", "_self");
    }
}
function OnErrorLogOutWindow(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutLogOutWindow(arg) {
    alert("Time Out");
}
*/

function SetDesktopMenu(p_type) {
    if (p_type == "1") {
        ShowHideControl("menu_block_course_management", 0);
        ShowHideControl("menu_block_class_management", 1);

        document.getElementById("menu_id_course_management").className = "";
        document.getElementById("menu_id_class_management").className = "active";
       
    }
    else {
        ShowHideControl("menu_block_course_management", 1);
        ShowHideControl("menu_block_class_management", 0);

        document.getElementById("menu_id_course_management").className = "active";
        document.getElementById("menu_id_class_management").className = "";
    }
}


function DownloadHelp() {
    alert("Downloading Help Document");
    window.open("../HelpDoc/Hash_Lms_Help_BackOffice.pdf");
}
