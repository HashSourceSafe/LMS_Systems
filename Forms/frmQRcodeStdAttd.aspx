<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmQRcodeStdAttd.aspx.cs" Inherits="Forms_frmQRcodeStdAttd" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/QRcodeStdAttd.js?version=1"></script>
</head>



<body style="background:#53777A">
    <form id="form1" runat="server">
        <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server">
                <Services>
                    <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                </Services>
            </asp:ScriptManager>
        </div>

        <div style="text-align:center; padding-top:2%">
            <asp:Image style="border:6px solid #fff" runat="server" ID="img_qr_code"  />
        </div>

        <div style="text-align:center; padding-top:5px">
            <asp:Label runat="server" Font-Size="50px"  ID="ctxt_attd_count" Text="0" 
                ForeColor="White"></asp:Label>
        </div>

        <asp:HiddenField runat="server" ID="cntxt_college_id" Value="0" />
        <asp:HiddenField runat="server" ID="ctxt_trans_id" Value="0" />

    </form>
</body>
</html>
