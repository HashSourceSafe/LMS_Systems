var m_array_menu_data = new Array();

var COL_MENUCODE = 0;
var COL_MENUPARENTID = 1;
var COL_MENUOWNID = 2;
var COL_MENUNAME = 3;
var COL_MENUURL = 4;

//--------------------------------
function LoadMenu() {
    try {

        WebServiceMasters.GetBackOfficeMenuStdAff(
                                                    OnComplete_LoadMenu,
                                                    OnError_LoadMenu,
                                                    OnTimeOut_LoadMenu);



    }
    catch (err) {
        alert("LoadMenu() - JScript Error");
    }
}
function OnComplete_LoadMenu(arg) {
    if (arg.m_Count == "1") {
        alert('Error in WebMethod - Top Menu');
    }
    else {
        m_array_menu_data = arg.m_List;
        CreateMenu();
    }
}
function OnError_LoadMenu(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_LoadMenu(arg) {
    alert("Time Out");
}
//--------------------------------



function CreateMenu() {
    try {
        m_menu_container = document.getElementById("navigation");
        while (m_menu_container.hasChildNodes()) {
            m_menu_container.removeChild(m_menu_container.firstChild);
        }




        iCtr = 0;

        var m_main_ul = document.createElement('ul');
        m_main_ul.setAttribute('class', "navigation-menu");

        while (iCtr < m_array_menu_data.length) {

            m_menu_code = m_array_menu_data[iCtr][COL_MENUCODE];
            m_curr_menu_code = m_array_menu_data[iCtr][COL_MENUCODE];
            m_menu_name = m_array_menu_data[iCtr][COL_MENUNAME];

            while (iCtr < m_array_menu_data.length && m_menu_code == m_curr_menu_code) {

                m_menu_parent_id = parseFloat(m_array_menu_data[iCtr][COL_MENUPARENTID]);
                if (m_menu_parent_id == 0) {
                    var m_root_li = document.createElement('li');
                    m_root_li.setAttribute('class', "has-submenu");
                    var m_i1 = document.createElement('i');
                    var m_i2 = document.createElement('i');
                    var m_span = document.createElement('span');
                    var m_a = document.createElement('a');

                    m_i1.setAttribute('class', "");

                    if (m_menu_name == "Master") {
                        m_i2.setAttribute('class', "mdi mdi-view-dashboard");
                    }
                    else if (m_menu_name == "Transaction") {
                        m_i2.setAttribute('class', "fas fa-credit-card");
                    }
                    else if (m_menu_name == "View") {
                        m_i2.setAttribute('class', "mdi mdi-eye");
                    }
                    else if (m_menu_name == "Reports") {
                        m_i2.setAttribute('class', "mdi mdi-black-mesa");
                    }

                    m_span.innerHTML = m_array_menu_data[iCtr][COL_MENUNAME];

                    m_root_menu_id = "EL_" + iCtr.toString();
                    m_root_li.setAttribute('id', m_root_menu_id);
                    //m_root_li.setAttribute("onclick", "RootMenuClickEvent(this);");
                    var m_sub_ul = document.createElement('ul');
                    m_sub_ul.setAttribute('class', "submenu");
                }
                else {

                    var m_sub_li = document.createElement('li');
                    m_sub_li.innerHTML = "<a>" + m_array_menu_data[iCtr][COL_MENUNAME] + "</a>";

                    m_sub_event = "OpenSubMenu('" + m_array_menu_data[iCtr][COL_MENUURL] + "');"
                    m_sub_li.setAttribute("onclick", m_sub_event);
                    m_sub_li.setAttribute("title", m_array_menu_data[iCtr][COL_MENUNAME]);


                    m_sub_ul.appendChild(m_sub_li);
                }
                iCtr = iCtr + 1;
                if (iCtr < m_array_menu_data.length) {
                    m_curr_menu_code = m_array_menu_data[iCtr][COL_MENUCODE];
                }
            }

            m_a.appendChild(m_i1);
            m_a.appendChild(m_i2);
            m_a.appendChild(m_span);
            m_root_li.appendChild(m_a);
            m_root_li.appendChild(m_sub_ul);
            m_main_ul.appendChild(m_root_li);


        }

        m_menu_container.appendChild(m_main_ul);
        ShowHideControl("navigation", 1);


    }
    catch (err) {
        alert("CreateMenu() - JScript Error");
    }
}

function RootMenuClickEvent(p_ref) {
    if (p_ref.className == "") {
        p_ref.setAttribute('class', "el_primary menu-open");
    }
    else {
        p_ref.setAttribute('class', "");
    }
}



function OpenSubMenu(p_url) {
    window.open(p_url, "_self");
}



function LoadHomePage() {
    window.open("frmRoutineMasterPage.aspx", "_self");
}




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
