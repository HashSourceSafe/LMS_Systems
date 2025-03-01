<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmChangePassword.aspx.cs"
    Inherits="Forms_frmChangePassword" %>


<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Password</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/ChangePassword.js"></script>
    <link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"/>
</head>
<body class="authentication-bg" onload="SetWindow(700,450);" onkeyup="CheckKeyUp(event);"
    onkeydown="CheckKeyDown(event);" onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);">

        <form id="form1" runat="server">
        <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server" EnablePageMethods="true">
                <Services>
                    <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                </Services>
            </asp:ScriptManager>
        </div>
           <div class="account-pages pt-5 my-5">
            <div class="container">
                <div class="text-center">
                            <h5 class="text-white text-uppercase py-4 login-heading" id="div_lbl_document_name">      
                                    <asp:Label ID="lbl_document_name" runat="server"  Text="Change Password" ></asp:Label>
                              </h5>
                        </div>
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-5 col-xl-4">
                        <div class="account-card-box">
                            <div class="card mb-0">
								<div class="card-body" id="m_UpdatePanelHeader" runat="server">
                                    <div class="form-group mb-3">
                                     <asp:TextBox ID="ctxt_old_password" CssClass="form-control" Placeholder="Enter Old Password"
                                     runat="server" TextMode="Password"></asp:TextBox>
                                    </div>
                                    <div class="form-group mb-3">
                                     <asp:TextBox ID="ctxt_new_password" TextMode="Password" CssClass="form-control" Placeholder="Enter New Password" runat="server"></asp:TextBox>
                                    </div>
                                    <div class="form-group mb-3">
                                     <asp:TextBox ID="ctxt_confirm_password" TextMode="Password" CssClass="form-control" Placeholder="Confirm Password" runat="server"></asp:TextBox>
                                    </div>
                                    <div class="form-group mb-3">
                                      <asp:Button ID="cmd_save" Text="Save" OnClientClick="SaveData(); return false;" CssClass="btn btn-primary"
                                    runat="server"></asp:Button>

                                <asp:Button ID="cmd_cancel" Text="Cancel" CssClass="btn btn-primary"
                                    runat="server" OnClientClick="SetNull(); return false;"></asp:Button>

                                <asp:Button ID="cmd_close" Text="Close" CssClass="btn btn-primary"
                                    runat="server" OnClientClick="ExitWindow();"></asp:Button>
                                    </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
            </div>
          </div>
        <div>
            
        </div>
        <asp:HiddenField ID="ctxt_type" runat="server" Value="" />
        <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
        		  	<footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <asp:Label runat="server"  CssClass="text_label_left" ID="ctxt_hash" Font-Bold="True" Font-Underline="True"></asp:Label>
                        Copyright @ JIS Group. Designed & Developed by Hash Technologies Pvt. Ltd.
                    </div>
                </div>
            </div>
        </footer>  
        </form>

</body>
</html>
