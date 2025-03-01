<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmMessageBox.aspx.cs" Inherits="Forms_frmMessageBox" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="css/frmScreen.css" type="text/css" rel="stylesheet"/>
</head>
<body>
<div class="main">
<center>
    <form id="form1" runat="server">
        <div class="outer-label-orange">
            <div class="div_root_block">
                <div class="div_mesg_block" style="width:100%">
                    <asp:Label runat="server" ID="m_mesg" Text="Message Here" Width="98%">
                    </asp:Label>
                </div>
                <div class="div_end_block" style="width:0%">
                </div>

                <br clear="all" />
            </div>
        </div>
        
        <div class="div_seperation_block">
        </div>

        <div class="outer-button-block">
            <div class="div_root_block">
                <div class="div_button_block" style="width:100%">
                    <asp:Button ID="cmd_ok" Text="Ok" CssClass="cmd_button" runat="server" 
                        Width="10%" onclick="cmd_ok_Click"  ></asp:Button>
                </div>
                    <div class="div_end_block" style="width:0%">
                </div>
                <br clear="all" />
            </div>
        </div>

    </form>
    </center>
    </div>
</body>
</html>
