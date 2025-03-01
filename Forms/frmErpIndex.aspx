<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmErpIndex.aspx.cs" Inherits="Forms_frmErpIndex" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>

    <title></title>
        <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script> 
        <script type="text/javascript" src="JavaScript/ErpIndex.js"></script> 
        <link href="css/frmScreen.css" type="text/css" rel="stylesheet"/>
        <style type="text/css">
               body{background:url(images/frmerpindex.jpg) no-repeat center center fixed;  -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover;
                  background-size: cover; position:relative;}
        </style>
</head>
<body">
    <div class="frmerp-index">        
        <div class="pass-key-heading">Pass Key Heading</div>
        <div class="main">
            <form id="form1" runat="server" class="form-1">
            <div>
                    <asp:ScriptManager ID="m_ScriptManager" runat="server">
                    </asp:ScriptManager>    

            </div>

              <asp:UpdatePanel ID="m_UpdatePanelHeader" runat="server" >
                    <ContentTemplate>
                
                    
                  
                                <p class="field">
                                    <asp:TextBox ID="ctxt_pass_key" Enabled="false" CssClass="text_box mandatory" Width="75%" runat="server"></asp:TextBox> 
                                    <i class="icon-user icon-large"><asp:Label runat="server" CssClass="text_label_right" Width="95%" ID="label4" Text="Pass Key:"> </asp:Label></i>
                               </p>
                              <p class="field">
                                    <i class="icon-user icon-large"><asp:Label runat="server" CssClass="text_label_right" Width="95%" ID="label1" Text="Access Key:"> </asp:Label></i>
                                    <asp:TextBox ID="ctxt_erp_act_key" Enabled="true" CssClass="text_box mandatory" Width="75%" runat="server" TextMode="Password"></asp:TextBox>
                              </p>
                                 <p class="submit"><asp:Button ID="cmd_go" runat="server" Text="Go" OnClientClick="return Validate();" onclick="cmd_go_Click"  ></asp:Button></p>
                                 <p class="submit1"><asp:Button ID="cmd_direct_user" runat="server" Text="Direct User" onclick="cmd_direct_user_Click"   ></asp:Button></p>
                                <p class="submit2"><asp:Button ID="cmd_reset_access_key" runat="server" Text="Reset" OnClientClick="SetValue('ctxt_erp_act_key',''); return false;"  ></asp:Button></p>
                             



                    </ContentTemplate>
                </asp:UpdatePanel>

            </form>
        </div>
    </div>
</body>
</html>
