
var m_HeadArr;
var m_DataArr;

var m_fetch_type;

function Init() {
    try {



        GetData();

    }
    catch (err) {
        alert("Java Script Error - Init");
    }

}


//--------------------------------------
function GetData() {
    try {

        var FieldArray = new Array();





        cntxt_nCollegeId = GetValueByCtrlName("cntxt_nCollegeId");
        ctxt_fromdate = GetValueByCtrlName("ctxt_fromdate");
        ctxt_todate = GetValueByCtrlName("ctxt_todate");
        ctxt_deptName = GetValueByCtrlName("ctxt_deptName");
//        cntxt_nisSum = GetValueByCtrlName("cntxt_nisSum");
        cntxt_nFromPercent = GetValueByCtrlName("cntxt_nFromPercent");
        cntxt_nToPercent = GetValueByCtrlName("cntxt_nToPercent");

        if(ctxt_deptName=="ALL"){
            ctxt_deptName="%";
        }
        if(ctxt_deptName==""){
            ctxt_deptName="%";
        }

        var m_sp_param = new Array();

       

        m_sp_param.push("@p_college_id,INT," + cntxt_nCollegeId);
        m_sp_param.push("@p_from_date,DATETIME," + ctxt_fromdate);
        m_sp_param.push("@p_to_date,DATETIME," + ctxt_todate);
        m_sp_param.push("@p_dept_name,VARCHAR," + ctxt_deptName);
        m_sp_param.push("@p_is_summ,INT," + "4");
        m_sp_param.push("@p_from_percent,INT," + cntxt_nFromPercent);
        m_sp_param.push("@p_to_percent,INT," + cntxt_nToPercent);
       

        ShowHideControl("m_wait_window", 1);

        WebServiceMasters.GetDataAsArrayWithFieldName(m_sp_param, "Proc_Get_Faculty_Wise_Std_Attd_New", 0,
                                OnComplete_GetData,
                                OnError_GetData,
                                OnTimeOut_GetData);
      

    }
    catch (err) {
        alert("Java Script Error - GetData");
    }

}
function OnComplete_GetData(arg) {
    ShowHideControl("m_wait_window", 0);
    if (parseFloat(arg.m_Count) > -1) {
       
        m_DataArr = arg.m_List
        m_HeadArr = arg.m_Field
//        alert(m_DataArr)
//        alert(m_HeadArr)
        PrinLMSReport();
      
       
    }
    else {
        alert("No Data Found");
    }
}
function OnError_GetData(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_GetData(arg) {
    alert("Time Out");
}
//--------------------------------------

function formatDate(dateString) {
  const [year, month, day] = dateString.split('/');
  return `${month}/${day}/${year}`;
}

function PrinLMSReport() {
    try {
      debugger
        cntxt_nCollegeId = GetValueByCtrlName("cntxt_nCollegeId");
      
      cntxt_nFromPercent=GetValueByCtrlName("cntxt_nFromPercent");
      cntxt_nToPercent=GetValueByCtrlName("cntxt_nToPercent");

        var pfrom=parseFloat(cntxt_nFromPercent)
        var pto=parseFloat(cntxt_nToPercent);


        m_html = "<table class='table table-bordered' colspan='0' >";
      
       firstRow = m_DataArr[0];
       collegeName = firstRow[firstRow.length - 1];

       var colspanValue = m_HeadArr.length - 6;

       m_html = m_html + '<tr>';
       m_html = m_html + '<td colspan="6" class="no-border">';
        m_html = m_html + '<div class="resulthedding">';
        m_html = m_html + '<h5>LMS ANALISYS FOR:' + ctxt_fromdate + '-' + ctxt_todate + '-' + collegeName +'</h5>';
        
        m_html = m_html + '</div>';
       m_html = m_html + '</td>';
       m_html = m_html + '<td colspan="' + colspanValue + '" class="no-border"> <h2>No. of Classes during the Week Beginning</h2> </td>';
       m_html = m_html + '</tr>';


        //Heading college name
       


 


        m_html = m_html + '<th class="text-vertical" rowspan="2">Sl.No.</th>'
        for (i = 0; i < m_HeadArr.length-1; i++) {
            if (m_HeadArr[i] == "faculty_dept")
                m_html = m_html + '<th class="text-vertical" rowspan="2">Department</th>'
            else if (m_HeadArr[i] == "faculty_code")
                m_html = m_html + '<th class="text-vertical" rowspan="2">Code</th>'
            else if (m_HeadArr[i] == "faculty_name")
                m_html = m_html + '<th class="text-vertical" rowspan="2">Faculty Name</th>'
            else if (m_HeadArr[i] == "faculty_name")
                m_html = m_html + '<th class="text-vertical" rowspan="2">Faculty Name</th>'
            else if (m_HeadArr[i] == "faculty_desg")
                m_html = m_html + '<th class="text-vertical" rowspan="2">Designation</th>'
            else
            m_html = m_html + '<th class="text-vertical" rowspan="2">' + m_HeadArr[i] + '</th>'

        }

        m_html = m_html + "</tr>";


        var counter = 1;
        var m_faculty_code = "";
     
        m_html = m_html + "<tbody>";
        debugger
        //Data
        for (row = 0; row < m_DataArr.length; row++) {
            m_html = m_html + "<tr>";

            if(parseFloat(m_DataArr[row][m_HeadArr.length - 2])>=pfrom && parseFloat(m_DataArr[row][m_HeadArr.length - 2])<=pto)
            {
                if (m_DataArr[row][4] != "Taken") {

                    m_html += '<td style="font-weight:bold" rowspan="2">' + counter + '</td>';
                    counter++
                }
           
                for (col = 0; col < m_DataArr[row].length-1; col++) {
                    if (m_DataArr[row][4] === "Taken" && col < 4) {

                        m_html += '';
                    } else 
                    if ( col === m_HeadArr.length - 2 && m_DataArr[row][4] === "Scheduled" && m_DataArr[row][m_HeadArr.length - 2] === "0") {
                        m_html += '<td style="font-weight:bold"></td>';
                    
                    } else {
                        if (col < 4) {
                          m_html += '<td style="font-weight:bold;" rowspan="2">' + m_DataArr[row][col] + '</td>';
                        }
                        else {
                            m_html += '<td style="font-weight:bold; " >' + m_DataArr[row][col] + '</td>';
                        }
                    
                    }
                }
                m_faculty_code=m_DataArr[row][2];
           

                m_html = m_html + "</tr>";
            }
        }
        m_html = m_html + "</tbody>";
        m_html = m_html + "</table>";
        SetInnerHtml("divAnalisys", m_html);

        

       

    }
    catch (err) {
        alert("Java Script Error - PrinLMSReport");
    }
}


function PrintDoc() {
    ShowHideControl("cmd_print", 0);
    ShowHideControl("cmd_export", 0);
    window.print();
    ShowHideControl("cmd_print", 1);
    ShowHideControl("cmd_export", 1);
}


function ExportDoc() {
    var wb = XLSX.utils.table_to_book(document.getElementById('divAnalisys'));
    XLSX.writeFile(wb, "LMS_Analysis.xlsx");

}
