<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmPrintFacultyWiseAttendance.aspx.cs"
    Inherits="Forms_frmPrintFacultyWiseAttendance" %>

<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>
        <asp:Literal ID="Ltitle" runat="server"></asp:Literal></title>
    <style type="text/css">
    
       @media print{ 
  @page {
    margin-top: 10px;
    margin-bottom: 0px;
  }
}


*{margin: 0 ; padding: 0;}
body{ font-family: Calibri;font-size:12px;line-height: 16px; }
page {background: white; display: block; margin: 0 auto; margin-bottom: 0.5cm; box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);}
/*page[size="A4"] { width: 21cm; height: 29.7cm; }*/
/*-------------------------*/

  table.result,.result th{ font-size: 11px; color: #000; text-transform: capitalize; text-align: center;}
  .result th,.result td{padding: 5px; border-left: 1px solid #333; border-bottom: 1px solid #333;}
  .result tr td:last-child,.result tr th:last-child{ border-right:  1px solid #333}
  
  .result th.text-vertical{ writing-mode: vertical-lr; transform: rotate(180deg); border-right: 1px solid #333; border-top: 1px solid #333; border-bottom: none; border-left: none; margin:0; padding:0;}
  .result tr td:last-child,.result tr th.text-vertical:last-child{ border-left:  1px solid #333}
.result tr th.no-border,.result tr th.no-border:last-child{ border-left: none; border-right: none;}
<%--.resulthedding{ padding: 30px; position: relative; text-align: left;}--%>
.resulthedding h4{ font-size:24px; margin-bottom: 10px;}
.resulthedding h5{ font-size:20px; margin-bottom: 10px;}
.resulthedding p{ font-size:14px;}
.resulthedding .logo{ position: absolute; left: 20px; top: 20px;}
.resulthedding  img{ width:100px; }
table.result tfoot td{ border: none}
tfoot { display: table-footer-group;  }
      table.result tfoot td{padding-top: 40px;}
      table.result tfoot tr td:first-child,table.result tfoot tr td:last-child{border-right:none;border-left:none;}
      .signature{ border-top: 1px solid #333;  text-align: right; padding: 0 10px;}
      .no-border{ border: none;}
      
      div.absolute {position: fixed;  top: 0; height: 100%; width: 100%;background-color:rgba(0, 0, 0, .8); z-index: 999; color: Maroon;
      font-size: 30px;  text-align: center; padding: 20%;height: 100vh;}
     div.absolute h4{ margin-bottom: 30px; font-weight: bold; font-size: 24px;}
    .plz-massage{ background: #fff;max-width: 300px; margin: 0 auto; opacity: 1; padding: 20px;}
    .bottm-sign{ display:inline-flex; margin-top:60px;}
    .by{ border-top:1px solid #333; width:300px; margin:0 30px;}
    .pagebutton{ position: absolute; right: 20px; top: 20px;; z-index:999}
    .printated-by{ position: absolute; left: 20px; top: 60px; z-index:999}
    .gazette-no{ position: absolute; right: 20px; top: 60px; z-index:999}
    
    
    .btn-print{color: #fff; background-color: #007bff; border:1px solid #007bff; padding:8px 10px; border-radius:6px;}
    .btn-export{color: #fff; background-color: #138496; border:1px solid #138496; padding:8px 10px; border-radius:6px;}
    .result tr th.border-bottom-none:last-child { border-bottom:none}
    .table{ border:1px solid #333; border-top:none; border-right:none; border-collapse: collapse;}
    .table th,.table td{ border:1px solid #333; border-bottom:none; border-left:none;padding:5px}
    .table th{ background:#8EA3A6; color:#000}
    .table th, .table td.no-border{ border: none;}
    /*-------------------------*/
    .content-area{ margin:40px;}
    .table td.brnone{border-right:none;}
    .table td:nth-child(6) { border-left:1px solid #333;}
    
  .resulthedding {
  display: flex; /* Flex layout to align items horizontally */
  flex-wrap: wrap; /* Allow wrapping if content overflows */
  gap: 10px; /* Add spacing between elements */
  align-items: center; /* Vertically align items */
}

.resulthedding h5 {
  margin: 0; /* Remove default margin for proper alignment */
}

.resulthedding .column {
  background-color: #f0f0f0; /* Light background for the column */
  padding: 5px 10px; /* Add padding */
  border: 1px solid #ccc; /* Optional: Add a border */
  border-radius: 4px; /* Optional: Rounded corners */
}

    
</style>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/PrintFacultyWiseAttendance.js?version=5"></script>
    <script src="JavaScript/Jquery/xlsx.full.min.js" type="text/javascript"></script>
</head>
<body onload="Init();">
    <div id="m_wait_window" style="display: none" class="absolute">
        <div class="plz-massage">
            <h4>
                Please Wait</h4>
            <div class="process">
                <div class="raised">
                    <span style="width: 100%"></span>
                </div>
            </div>
        </div>
    </div>
    <form id="form1" runat="server">
    <div>
        <asp:ScriptManager ID="m_ScriptManager" runat="server">
            <Services>
                <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                <asp:ServiceReference Path="~/Forms/WebServiceReport.asmx" />
                <asp:ServiceReference Path="~/Forms/WebServiceStdExamForm.asmx" />
            </Services>
        </asp:ScriptManager>
    </div>
    
    <div class="pagebutton">
        <button type="button" id="cmd_print" class="btn-print" onclick="PrintDoc();">
            Print</button>
        <button type="button" id="cmd_export" class="btn-export" onclick="ExportDoc();">
            Export</button>
    </div>
    <div class="content-area">
    <div id="divAnalisys">
     </div>
    </div>
     
  
    <div>
        <asp:HiddenField ID="cntxt_nCollegeId" Value="" runat="server" />
        <asp:HiddenField ID="ctxt_fromdate" Value="" runat="server" />
        <asp:HiddenField ID="ctxt_todate" Value="" runat="server" />
        <asp:HiddenField ID="ctxt_deptName" Value="" runat="server" />
        <asp:HiddenField ID="cntxt_nisSum" Value="4" runat="server" />
        <asp:HiddenField ID="cntxt_nFromPercent" Value="0" runat="server" />
        <asp:HiddenField ID="cntxt_nToPercent" Value="0" runat="server" />
    </div>
    </form>
</body>
</html>
