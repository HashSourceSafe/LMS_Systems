<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmCrystalReportViewer.aspx.cs" Inherits="Forms_frmCrystalReportViewer" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">


<head runat="server">
    <title>Please Wait.....</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script> 
    <script type="text/javascript" src="JavaScript/CrystalReportViewer.js"></script> 
    

<style type="text/css">
.loading{ width:1024px; height:768px; margin:0 auto; padding:0; position:relative; text-align:center;}
.lodding-text{ position:absolute; bottom:130px; left:33%; color:#000;font-size:36px; text-align:center; font-family:"Myriad Pro", Calibri;}
.lodding-text p{ margin:0 auto; padding:0; margin-bottom:5px;}
</style>

</head>
<body onload="SetWindow(1024,768); InitReport();">
    <form id="form1" runat="server">
        <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server">
            </asp:ScriptManager>    
        </div>


        <div class="loading">
            <img src="images/loading.gif"/>
            <div class="lodding-text">
                <p>Please Wait...</p>
                <p>Report is Under Process...</p>
            </div>
        </div>

        <div style="display:inherit">
            <asp:Button ID="cmd_gen_report" Text="Report" runat="server" 
                onclick="cmd_gen_report_Click" />
        </div>
    </form>
</body>



</html>
