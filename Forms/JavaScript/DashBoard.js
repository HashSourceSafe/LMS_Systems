var m_arr;

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

        SetInnerHtml("m_college_name", GetValueByCtrlName("ctxt_college_name"));

        disp_type = GetValueByCtrlName("disp_type");
        if (disp_type == "MNG") {
            ShowHideControl("m_college_selection", 1);
        }


        SetValue("dtp_curr_date", GetDateToday());


        google.charts.load('current', { 'packages': ['corechart'] });

        GetStudentStatData();

        is_call_from_mis = GetValueByCtrlName("is_call_from_mis");

        if (is_call_from_mis == "0") {
            LoadMenu();
        }


    }
    catch (err) {
        alert("Init() - JScript Error");
    }
}

//----------------------------------
function GetStudentStatData() {

    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");
        cntxt_day = GetValueByCtrlName("cntxt_day");

        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_day_no,INT," + cntxt_day);
        m_sp_param.push("@p_branch_id,INT," + cntxt_branch_id);

        var m_field = new Array();
        m_field.push("is_today");
        m_field.push("date");
        m_field.push("weekday");
        m_field.push("month_name");
        m_field.push("day_name");
        m_field.push("tot_std_count");
        m_field.push("sch_class");
        m_field.push("attd_class");
        m_field.push("tot_std_present");
        m_field.push("tot_std_abs_sch");
        m_field.push("tot_std_abs_act");
        m_field.push("present_pcent_sch");
        m_field.push("abs_pcent_sch");
        m_field.push("present_pcent_attd");
        m_field.push("abs_pcent_attd");
        m_field.push("attd_given");
        m_field.push("attd_pending");
        m_field.push("str_date");



        ShowWaitMsgWnd("Please Wait - Loading Student Chart");
        WebServiceMasters.GetDataFromMasterDb("NA", m_field, m_sp_param, "Proc_Disp_Weekly_Student_Average_Attd", 0,
                                   OnComplete_GetStudentStatData,
                                   OnError_GetStudentStatData,
                                   OnTimeOut_GetStudentStatData);
    }
    catch (err) {
        alert("GetStudentStatData() - JScript Error");
    }
}
function OnComplete_GetStudentStatData(arg) {
    DestroyWaitMsgWnd();
    if (arg.m_Count == -1) {
       // alert('Error in WebMethod - GetStudentStatData');
    }
    else {
        m_arr = arg.m_List;
        CreateStudentAttdDetails();
        CreateScheduleAttdDetails();

        //GetDeptWiseBarChartData(0);

    }
}
function OnError_GetStudentStatData(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_GetStudentStatData(arg) {
    alert("Time Out");
}
//----------------------------------

function CreateStudentAttdDetails() {
    try {
        m_div_student_panel = document.getElementById("m_div_student_panel");
        while (m_div_student_panel.hasChildNodes()) {
            m_div_student_panel.removeChild(m_div_student_panel.firstChild);
        }




        for (iCtr = 0; iCtr <= m_arr.length - 1; iCtr++) {
            m_is_today = m_arr[iCtr][0];
            m_total_class = m_arr[iCtr][6];
            m_curr_present = m_arr[iCtr][11];
            m_curr_absent = m_arr[iCtr][12];
            m_curr_date = m_arr[iCtr][17];
            
            var m_div_00 = document.createElement('div');
            m_div_00.setAttribute('class', "col-md-2 col-sm-6");

            var m_div_01 = document.createElement('div');
            m_div_01.setAttribute('class', "card-box");
            m_div_01.style.cursor = "pointer";
            if (parseFloat(m_is_today) <= 1 && parseFloat(m_total_class) > 0) {
                m_function = "ShowDetail('" + m_curr_date + "');";
                m_div_01.setAttribute('onclick', m_function);
            }

            var m_div_01_a = document.createElement('div');
            if (parseFloat(m_is_today) == 1) {
                m_div_01_a.setAttribute('class', "box success");
            }
            else {
                m_div_01_a.setAttribute('class', "box dirtygreen");
            }

            var m_div_01_a_1 = document.createElement('div');
            m_div_01_a_1.setAttribute('class', "box-title");
            m_value = "<h4><a href='#'>" + m_arr[iCtr][4] + "</a></h4><small class='block'>" + m_arr[iCtr][3] + "</small><i class='icon-chart float-right m-0 h2 text-muted'></i>"
            m_div_01_a_1.innerHTML = m_value;


            var m_div_01_a_2 = document.createElement('div');
            m_div_01_a_2.setAttribute('class', "box-body text-center bg-white mt-2 minhight-150");
            var m_canvas = document.createElement('div');
            m_canvas.style.height = "150px";
            m_canvas.style.weidth = "180px";
            m_canvas.setAttribute('class', "chartjs");
            if (parseFloat(m_is_today) == 2 || parseFloat(m_total_class) <= 0) {
                m_cross_image = document.createElement('img');
                m_cross_image.src = "images/not-applicable.png";
                m_canvas.appendChild(m_cross_image);
                m_div_01.setAttribute('class', "card-box dvdisabled");
                m_div_01.style.cursor = "";
            }
            m_div_01_a_2.appendChild(m_canvas);

            var m_ul = document.createElement('div');
            m_ul.setAttribute('class', "row text-center  border-top pt-1");

            var m_li_1 = document.createElement('div');
            m_li_1.setAttribute('class', "col-6");
            if (parseFloat(m_total_class) > 0) {
                m_value = "<span class=''><strong>Present</strong></span><br>" + m_curr_present + "%";
            }
            else {
                m_value = "<span class=''><strong>Present</strong></span><br>NA";
            }

            if (parseFloat(m_is_today) == 2 || parseFloat(m_total_class) <= 0) {
                m_value = "";
            }
            m_li_1.innerHTML = m_value;

            var m_li_2 = document.createElement('div');
            m_li_2.setAttribute('class', "col-6");
            if (parseFloat(m_total_class) > 0) {
                m_value = "<span class=''><strong>Absent</strong></span><br>" + m_curr_absent + "%";
            }
            else {
                m_value = "<span class=''><strong>Absent</strong></span><br>NA";
            }

            if (parseFloat(m_is_today) == 2 || parseFloat(m_total_class) <= 0) {
                m_value = "";
            }
            m_li_2.innerHTML = m_value;

            m_ul.appendChild(m_li_1);
            m_ul.appendChild(m_li_2);


            m_div_01_a.appendChild(m_div_01_a_1);
            m_div_01_a.appendChild(m_div_01_a_2);
            m_div_01_a.appendChild(m_ul);

            m_div_01.appendChild(m_div_01_a);

            m_div_00.appendChild(m_div_01);
            m_div_student_panel.appendChild(m_div_00);





            if (parseFloat(m_total_class) > 0 && m_is_today <= 1) {
                //google.charts.load('current', { 'packages': ['corechart'] });
                google.charts.setOnLoadCallback(drawChart(m_is_today, m_total_class, m_curr_present, m_curr_absent, m_canvas));
            }


        }

    }
    catch (err) {
        alert("Internet is slow - Kindly Click Refresh Button");
        //alert("CreateStudentAttdDetails() - JScript Error");
    }


}


function CreateScheduleAttdDetails() {
    try {
        m_div_student_panel = document.getElementById("m_div_schedule_panel");
        while (m_div_student_panel.hasChildNodes()) {
            m_div_student_panel.removeChild(m_div_student_panel.firstChild);
        }




        for (iCtr = 0; iCtr <= m_arr.length - 1; iCtr++) {
            m_is_today = m_arr[iCtr][0];
            m_total_class = m_arr[iCtr][6];
            m_curr_present = m_arr[iCtr][15];
            m_curr_absent = m_arr[iCtr][16];
            m_curr_date = m_arr[iCtr][17];
            
            var m_div_00 = document.createElement('div');
            m_div_00.setAttribute('class', "col-md-2 col-sm-6");

            var m_div_01 = document.createElement('div');
            m_div_01.setAttribute('class', "card-box");
            m_div_01.style.cursor = "pointer";

            if (parseFloat(m_is_today) <= 1 && parseFloat(m_total_class) > 0) {
                m_function = "ShowDetail('" + m_curr_date + "');";
                m_div_01.setAttribute('onclick', m_function);
            }

            var m_div_01_a = document.createElement('div');
            if (parseFloat(m_is_today) == 1) {
                m_div_01_a.setAttribute('class', "box success");
            }
            else {
                m_div_01_a.setAttribute('class', "box dirtygreen");
            }

            var m_div_01_a_1 = document.createElement('div');
            m_div_01_a_1.setAttribute('class', "box-title");
            m_value = "<h4><a href='#'>" + m_arr[iCtr][4] + "</a></h4><small class='block'>" + m_arr[iCtr][3] + "</small><i class='fa fa-bar-chart-o'></i>"
            m_div_01_a_1.innerHTML = m_value;


            var m_div_01_a_2 = document.createElement('div');
            m_div_01_a_2.setAttribute('class', "box-body text-center bg-white");
            var m_canvas = document.createElement('div');
            m_canvas.style.height = "150px";
            m_canvas.style.weidth = "180px";
            if (parseFloat(m_is_today) == 2 || parseFloat(m_total_class) <= 0) {
                m_cross_image = document.createElement('img');
                m_cross_image.src = "images/not-applicable.png";
                m_canvas.appendChild(m_cross_image);
                m_div_01.setAttribute('class', "card-box dvdisabled");
                m_div_01.style.cursor = "";

            }
            m_canvas.setAttribute('class', "chartjs");
            m_div_01_a_2.appendChild(m_canvas);

            var m_ul = document.createElement('div');
            m_ul.setAttribute('class', "row text-center  border-top pt-1");

            var m_li_1 = document.createElement('div');
            m_li_1.setAttribute('class', "col-6");
            if (parseFloat(m_total_class) > 0) {
                m_value = "<span class=''><strong>Given</strong></span><br>" + m_curr_present + "%";
            }
            else {
                m_value = "<span class=''><strong>Given</strong></span><br>NA";
            }

            if (parseFloat(m_is_today) == 2 || parseFloat(m_total_class) <= 0) {
                m_value = "";
            }
            m_li_1.innerHTML = m_value;

            var m_li_2 = document.createElement('div');
            m_li_2.setAttribute('class', "col-6");
            if (parseFloat(m_total_class) > 0) {
                m_value = "<span class=''><strong>Pending</strong></span><br>" + m_curr_absent + "%";
            }
            else {
                m_value = "<span class=''><strong>Pending</strong></span><br>NA";
            }

            if (parseFloat(m_is_today) == 2 || parseFloat(m_total_class) <= 0) {
                m_value = "";
            }
            m_li_2.innerHTML = m_value;

            m_ul.appendChild(m_li_1);
            m_ul.appendChild(m_li_2);


            m_div_01_a.appendChild(m_div_01_a_1);
            m_div_01_a.appendChild(m_div_01_a_2);
            m_div_01_a.appendChild(m_ul);

            m_div_01.appendChild(m_div_01_a);
            m_div_00.appendChild(m_div_01);

            m_div_student_panel.appendChild(m_div_00);





            if (parseFloat(m_total_class) > 0 && m_is_today<=1) {
                //google.charts.load('current', { 'packages': ['corechart'] });
                google.charts.setOnLoadCallback(drawChart(m_is_today, m_total_class, m_curr_present, m_curr_absent, m_canvas));
            }


        }

    }
    catch (err) {
        alert("CreateScheduleAttdDetails() - JScript Error");
    }


}


function drawChart(p_is_today, p_total_class, p_curr_present, p_curr_absent, p_canvas) {


    // Create our data table.
    if (parseFloat(p_total_class) > 0) {

        data = new google.visualization.DataTable();
        var m_arr1 = new Array();

        //Column
        var m_arr2 = new Array();
        m_arr2.push("Present");
        m_arr2.push("Absent");
        m_arr1.push(m_arr2)

        //Present
        var m_arr2 = new Array();
        m_arr2.push("Present");
        m_arr2.push(parseFloat(p_curr_present));
        m_arr1.push(m_arr2)

        //Absent
        var m_arr2 = new Array();
        m_arr2.push("Absent");
        m_arr2.push(parseFloat(p_curr_absent));
        m_arr1.push(m_arr2)

        var data = google.visualization.arrayToDataTable(m_arr1);


        // Set chart options
        var options = { 'title': '',
            height: 150,
            width: 150,
            chartArea:{left:7,top:10,width:'90%',height:'90%'},
            legend: { position: 'none'},
            fontSize: 12,
            pieSliceText: 'value',
            is3D: true,
            colors: ['#049dd7','#283675'],
            enableInteractivity:false
        };

        // Instantiate and draw our chart, passing in some options.
        chart = new google.visualization.PieChart(p_canvas);

        //google.visualization.events.addListener(chart, 'select', selectHandler);
        chart.draw(data, options);

    }




}

function selectHandler() {
    var selectedItem = chart.getSelection()[0];
    var value = data.getValue(selectedItem.row, 0);
    alert('The user selected ' + value);
}

function GotoNextWeek(p_flag) {
    cntxt_day = GetValueByCtrlName("cntxt_day");
    if (p_flag == "+") {
        SetValue("cntxt_day", parseFloat(cntxt_day) + 7);
    }
    else {
        SetValue("cntxt_day", parseFloat(cntxt_day) - 7);
    }
    GetStudentStatData();
}

function ShowDetail(p_date) {
    if (p_date == "NA") {
        p_date = GetValueByCtrlName("dtp_curr_date");
    }

    cntxt_college_id = GetValueByCtrlName("cntxt_college_id");

    m_url = "frmDashBoardStdDet.aspx?date=" + p_date;
    window.open(m_url, "_blank", "location=0,menubar=0,resizable=1,status=0,titlebar=0,menubar=0,top=0,left=0");
}

function LoadUrl(p_college) {
    is_call_from_mis = GetValueByCtrlName("is_call_from_mis");
    m_url = "frmDashBoard.aspx?college_id=" + p_college + "&is_call_from_mis=" + is_call_from_mis;
    window.open(m_url, "_parent", "location=0,menubar=0,resizable=1,status=0,titlebar=0,menubar=0,top=0,left=0");
}

function SwitchWnd() {
    is_call_from_mis = GetValueByCtrlName("is_call_from_mis");
    m_url = "frmDashBoardFaculty.aspx?college_id=0"  + "&is_call_from_mis=" + is_call_from_mis;
    window.open(m_url, "_parent", "location=0,menubar=0,resizable=1,status=0,titlebar=0,menubar=0,top=0,left=0");
}


//----------------------------------
function GetDeptWiseBarChartData(p_day) {


    try {
        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_branch_id = GetValueByCtrlName("cntxt_branch_id");
        dtp_curr_date = GetValueByCtrlName("dtp_curr_date");
        dtp_curr_date = AddDate(dtp_curr_date, p_day);
        SetValue("dtp_curr_date", dtp_curr_date);

        SetInnerHtml("m_bar_chart_caption", "Course-Stream wise Bar Chart (Attendance(%) as per schedule) - " + dtp_curr_date);

        var m_sp_param = new Array();
        m_sp_param.push("@p_disp_type,INT," + "4");
        m_sp_param.push("@P_COLLEGE_ID,INT," + cntxt_college_id);
        m_sp_param.push("@P_FROM_DATE,DATETIME," + dtp_curr_date);
        m_sp_param.push("@P_TO_DATE,DATETIME," + dtp_curr_date);

        m_sp_param.push("@P_batch_ID,INT," + "0");
        m_sp_param.push("@P_COURSE_ID,INT," + "0");
        m_sp_param.push("@P_STREAM_ID,INT," + "0");
        m_sp_param.push("@P_SEM_ID,INT," + "0");

        m_sp_param.push("@p_std_name,VARCHAR," + "%");
        m_sp_param.push("@p_sub_name,VARCHAR," + "%");
        m_sp_param.push("@p_fac_name,VARCHAR," + "%");
        m_sp_param.push("@p_course_name,VARCHAR," + "%");
        m_sp_param.push("@p_stream_name,VARCHAR," + "%");

        m_sp_param.push("@p_sem_no,INT," + "0");
        m_sp_param.push("@p_filter_on,INT," + "0");
        m_sp_param.push("@p_from_val,INT," + "0");
        m_sp_param.push("@p_to_val,INT," + "0");
        m_sp_param.push("@p_order_type,INT," + "0");
        m_sp_param.push("@p_branch_id,INT," + cntxt_branch_id);

        var m_field = new Array();
        m_field.push("course_name");
        m_field.push("stream_name");
        m_field.push("Attd Entered By Faculty(%)");
        m_field.push("Student Attd Schedule(%)");

        ShowWaitMsgWnd("Please Wait- Loading Course-Stream Chart");
        WebServiceMasters.GetDataFromMasterDb("NA", m_field, m_sp_param, "Proc_Get_Student_Attd_Percentage_New", 0,
                                   OnComplete_GetDeptWiseBarChartData,
                                   OnError_GetDeptWiseBarChartData,
                                   OnTimeOut_GetDeptWiseBarChartData);
    }
    catch (err) {
        alert("GetDeptWiseBarChartData() - JScript Error");
    }
}
function OnComplete_GetDeptWiseBarChartData(arg) {
    DestroyWaitMsgWnd();
    if (arg.m_Count == -1) {
        alert('Error in WebMethod');
    }
    else {
        google.charts.setOnLoadCallback(drawBarChart(arg.m_List));
    }
}
function OnError_GetDeptWiseBarChartData(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_GetDeptWiseBarChartData(arg) {
    alert("Time Out");
}
//----------------------------------

function drawBarChart(p_arr) {
    data = new google.visualization.DataTable();
    var m_arr1 = new Array();
    var m_arr2 = new Array();


    m_arr2.push("Course-Stream");
    m_arr2.push("Entry Pending(%)");
    m_arr2.push("Absent(%)");
    m_arr2.push("Present(%)");
    m_arr1.push(m_arr2);

    for (iCtr = 0; iCtr <= p_arr.length - 1; iCtr++) {
        var m_arr2 = new Array();

        m_attd_enter = p_arr[iCtr][2];
        m_present = p_arr[iCtr][3];
        if (parseFloat(m_attd_enter) > 0) {
            m_absent = 100 - m_present;
        }
        else {
            m_absent = 0;
        }


        m_arr2.push(p_arr[iCtr][0] + '-' + p_arr[iCtr][1]);
        m_arr2.push(parseFloat(100-m_attd_enter));
        m_arr2.push(parseFloat(m_absent));
        m_arr2.push(parseFloat(m_present));
        m_arr1.push(m_arr2);
       
    }


var data = google.visualization.arrayToDataTable(m_arr1);

var options = { 'title': '',
    fontSize: 12,
    colors: ['blue', 'red', 'green'],
    height: iCtr*50
};



    // Instantiate and draw our chart, passing in some options.
    chart = new google.visualization.BarChart(document.getElementById('m_div_bar_chart'));
    
    chart.draw(data, options);

}


function classLoadWnd() {
    is_call_from_mis = GetValueByCtrlName("is_call_from_mis");
    cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
    m_url = "frmClassLoad.aspx?college_id=" + cntxt_college_id + "&is_call_from_mis=" + is_call_from_mis;
    window.open(m_url, "_blank", "location=0,menubar=0,resizable=1,status=0,titlebar=0,menubar=0,top=0,left=0");
}