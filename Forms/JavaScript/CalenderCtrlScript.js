var m_control_date="NA";
var m_control_div;
var m_current_calender_date;


function InitCalender(p_control_date, p_control_div, p_date_val) {
    DestroyCalender();

    m_control_date = p_control_date;
    m_control_div = p_control_div;
    m_current_calender_date = p_date_val;

    CreateCalender();
}

function DestroyCalender() {
    if (m_control_date == "NA") {
        return;
    }

    m_div_date = document.getElementById(m_control_div)
    while (m_div_date.hasChildNodes()) {
        m_div_date.removeChild(m_div_date.firstChild);
    }
}

function CreateCalender() {
    DestroyCalender();

    var table = document.createElement("TABLE");
    document.getElementById(m_control_div).appendChild(table);
    table.border = "1";

    var table_footer = document.createElement("TABLE");
    document.getElementById(m_control_div).appendChild(table_footer);

    table_footer.border = "1";

    //Adding the header row Days.
    var row = table.insertRow(-1);
    for (var i = 0; i <= 6; i++) {
        var headerCell = document.createElement("TH");
        if (i == 0) {
            headerCell.innerHTML = "Sun";
        }
        if (i == 1) {
            headerCell.innerHTML = "Mon";
        }
        if (i == 2) {
            headerCell.innerHTML = "Tue";
        }
        if (i == 3) {
            headerCell.innerHTML = "Wed";
        }
        if (i == 4) {
            headerCell.innerHTML = "Thu";
        }
        if (i == 5) {
            headerCell.innerHTML = "Fri";
        }
        if (i == 6) {
            headerCell.innerHTML = "Sat";
        }
        headerCell.style.backgroundColor = "#F0F0F0";
        row.appendChild(headerCell);
    }

    

    var m_Date = new Date(GetYear(m_current_calender_date), GetMonth(m_current_calender_date) - 1, GetDay(m_current_calender_date));

    m_curr_day = m_Date.getDate();
    m_curr_month_name = GetMonthName(m_Date.getMonth() + 1);
    m_curr_year = m_Date.getFullYear().toString();

    m_dt_first = GetFirstDateOfMonth(m_Date.getFullYear(), m_Date.getMonth() + 1);
    m_dt_last = GetLastDateOfMonth(m_Date.getFullYear(), m_Date.getMonth() + 1);
    m_add_row_flag = 1;
    m_draw_blank_in_row_first = 1;


    m_end_day = parseFloat(GetDay(m_dt_last));

    for (iDay = 1; iDay <= m_end_day; iDay++) {
        if (m_add_row_flag == 1) {
            var row = table.insertRow(-1);
            m_add_row_flag = 0;
        }

        m_curr_day_of_week = GetDayOfWeek(AddDate(m_dt_first, iDay - 1));

        if (m_draw_blank_in_row_first == 1) {
            for (iWeekDay = 1; iWeekDay < m_curr_day_of_week; iWeekDay++) {
                var headerCell = document.createElement("TD");
                headerCell.innerHTML = "";
                row.appendChild(headerCell);
            }
            m_draw_blank_in_row_first = 0;
        }

        var headerCell = document.createElement("TD");
        headerCell.innerHTML = iDay;
        headerCell.setAttribute("onclick", "SetSelDate(this);");
        headerCell.setAttribute("onmouseover", "SetDateColor(this,1);");
        headerCell.setAttribute("onmouseout", "SetDateColor(this,2);");
        headerCell.style.cssText = "text-align:center;";
        if (m_curr_day == iDay) {
            headerCell.style.color = "#DF0101";
            headerCell.style.fontWeight = "700";
        }
        row.appendChild(headerCell);

        if (m_curr_day_of_week == 7) {
            m_add_row_flag = 1;
        }
    }

    //Bottom
    var row = table_footer.insertRow(-1);

    var headerCell = document.createElement("TD");
    headerCell.innerHTML = "&nbspPrev&nbsp";
    headerCell.style.cssText = "text-align:center;";
    headerCell.style.fontWeight = "bolder";
    //headerCell.style.width = "40px";
    headerCell.style.backgroundColor = "#F0F0F0";
    headerCell.setAttribute("onclick", "GoToDate('-');");
    row.appendChild(headerCell);

    var headerCell = document.createElement("TD");
    headerCell.innerHTML = "&nbsp" + m_curr_month_name + " - " + m_curr_year + "&nbsp";
    headerCell.style.cssText = "text-align:center;";
    headerCell.style.fontWeight = "bolder";
    //headerCell.style.width = "200px";
    headerCell.style.backgroundColor = "#99FF99";
    row.appendChild(headerCell);


    var headerCell = document.createElement("TD");
    headerCell.innerHTML = "&nbspNext&nbsp";
    headerCell.style.cssText = "text-align:center;";
    headerCell.style.fontWeight = "bolder";
    //headerCell.style.width = "40px";
    headerCell.style.backgroundColor = "#F0F0F0";
    headerCell.setAttribute("onclick", "GoToDate('+');");
    row.appendChild(headerCell);

    var headerCell = document.createElement("TD");
    headerCell.innerHTML = "&nbspClose&nbsp";
    headerCell.style.cssText = "text-align:center;";
    headerCell.style.fontWeight = "bolder";
    //headerCell.style.width = "40px";
    headerCell.style.backgroundColor = "#ffb3b3";
    headerCell.setAttribute("onclick", "DestroyCalender();");
    row.appendChild(headerCell);


}


function SetSelDate(p_ctrl) {
    DD = parseInt(p_ctrl.innerHTML);
    MM = GetMonth(m_current_calender_date);
    YYYY = GetYear(m_current_calender_date);

    if (DD < 10) {
        DD = '0' + DD;
    }
    if (MM < 10) {
        MM = '0' + MM;
    }
    m_sel_date = DD + "/" + MM + "/" + YYYY;
    SetValue(m_control_date, m_sel_date);
    DestroyCalender();
}

function SetDateColor(p_ctrl, p_flag) {
    if (p_flag == 1) {
        p_ctrl.style.backgroundColor = "#F5D0A9";
    }
    else {
        p_ctrl.style.backgroundColor = "white";
    }
}


function GoToDate(p_flag) {
    if (p_flag == "+") {
        m_current_calender_date = AddDate(m_current_calender_date, 31);
    }
    else {
        m_current_calender_date = AddDate(m_current_calender_date, -31);
    }
    CreateCalender();
}



function GetDateToday() {
    try {
        var m_Date1 = new Date();

        dd = m_Date1.getDate();
        mm = m_Date1.getMonth() + 1;
        yyyy = m_Date1.getFullYear();

        if (parseFloat(dd) < 10) {
            dd = "0" + dd;
        }
        if (parseFloat(mm) < 10) {
            mm = "0" + mm;
        }

        ddmmyyyy = dd + '/' + mm + '/' + yyyy;

        return ddmmyyyy;

    }
    catch (err) {
        return "01/01/1900";
    }
}






//====================================================================================================
function Createradio() {

    var div = document.createElement("div");
    var inputno = document.createElement("input");
    inputno.setAttribute("type", "text");
    inputno.setAttribute("value", "Male");
    inputno.setAttribute("disabled", "true)");
    div.appendChild(inputno);

    var inputno = document.createElement("input");
    inputno.setAttribute("type", "radio");
    inputno.setAttribute("id", "radio_1");
    inputno.setAttribute("checked", "true");
    inputno.setAttribute("name", "q_radio");
    inputno.setAttribute("value", "male");
    inputno.setAttribute("onclick", "yy(this)");
    inputno.text = "Male";
    div.appendChild(inputno);
    document.getElementById("div_radio").appendChild(div);

    //-------------------------------------------

    var div = document.createElement("div");
    var inputno = document.createElement("input");
    inputno.setAttribute("type", "text");
    inputno.setAttribute("value", "Female");
    inputno.setAttribute("disabled", "true)");
    div.appendChild(inputno);

    var inputno = document.createElement("input");
    inputno.setAttribute("type", "radio");
    inputno.setAttribute("id", "radio_2");
    inputno.setAttribute("name", "q_radio");
    inputno.setAttribute("value", "female");
    inputno.setAttribute("onclick", "yy(this)");
    div.appendChild(inputno);
    document.getElementById("div_radio").appendChild(div);

    //----------------------------------------
    var div = document.createElement("div");
    var inputno = document.createElement("input");
    inputno.setAttribute("type", "text");
    inputno.setAttribute("value", "Third");
    inputno.setAttribute("disabled", "true)");
    div.appendChild(inputno);

    var inputno = document.createElement("input");
    inputno.setAttribute("type", "radio");
    inputno.setAttribute("id", "radio_3");
    inputno.setAttribute("name", "q_radio");
    inputno.setAttribute("value", "Third");
    inputno.setAttribute("onclick", "yy(this)");
    div.appendChild(inputno);
    document.getElementById("div_radio").appendChild(div);


    //----------------------------------------
    var div = document.createElement("div");
    var inputno = document.createElement("input");
    inputno.setAttribute("type", "text");
    inputno.setAttribute("value", "chk1");
    inputno.setAttribute("disabled", "true)");
    div.appendChild(inputno);

    var inputno = document.createElement("input");
    inputno.setAttribute("type", "checkbox");
    inputno.setAttribute("id", "checkbox_1");
    inputno.setAttribute("name", "q_checkbox");
    inputno.setAttribute("value", "1");
    inputno.setAttribute("onclick", "yy(this)");
    div.appendChild(inputno);
    document.getElementById("div_radio").appendChild(div);

    //----------------------------------------
    var div = document.createElement("div");
    var inputno = document.createElement("input");
    inputno.setAttribute("type", "text");
    inputno.setAttribute("value", "chk2");
    inputno.setAttribute("disabled", "true)");
    div.appendChild(inputno);

    var inputno = document.createElement("input");
    inputno.setAttribute("type", "checkbox");
    inputno.setAttribute("id", "checkbox_2");
    inputno.setAttribute("name", "q_checkbox");
    inputno.setAttribute("value", "2");
    inputno.setAttribute("onclick", "yy(this)");
    div.appendChild(inputno);
    document.getElementById("div_radio").appendChild(div);


}

function yy(p_c) {
    alert(p_c.value);
}