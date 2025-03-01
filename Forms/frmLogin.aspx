<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmLogin.aspx.cs" Inherits="frmLogin" %>


<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/Login.js"></script>
    
    <link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"/>
</head>
<body class="authentication-bg align-content-center" onload="Init();">
    <form id="Form1" runat="server">
    <div>
        <asp:ScriptManager ID="m_ScriptManager" runat="server">
            <Services>
                <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                <%--<asp:ServiceReference Path="~/Forms/WebServiceSectionAllotment.asmx" />--%>
            </Services>
        </asp:ScriptManager>
    </div>
        
     <div class="account-pages">
            <div class="container">
                <div class="text-center">
                            <h5 class="text-white text-uppercase py-4 login-heading">      
                                    learning management system
                              </h5>
                              <!--<h5 class="text-white text-uppercase py-2 font-weight-bold login-heading-sub">      
                                  <asp:Label ID="lbl_document_name" runat="server" Text="Login"></asp:Label>
                              </h5>-->
                        </div>
                <div class="row justify-content-center">
                    <div class="col-sm-9 col-md-12 col-lg-5">
						
                        <div class="account-card-box">
							
                            <div class="card mb-0">
								<div class="card-body">
                                    
									 <p class="error">
                                         <asp:Label runat="server" Visible="false" ForeColor="Red" CssClass="text_label_left"                ID="ctxt_error_mesg" Text="Password:"> </asp:Label>
                                    </p>
									<div class="form-group mb-3">
											<asp:TextBox ID="ctxt_user_id" Enabled="true" autocomplete="off"  class="form-control" placeholder="Enter User Id" runat="server"></asp:TextBox>
                                           
                                    </div>
									<div class="form-group mb-3">
										<asp:TextBox ID="ctxt_pass_word" runat="server" class="form-control" autocomplete="off" TextMode="Password" placeholder="Type your Password"  />
									</div>
									<div class="form-group mb-3 dropdown responsive-table-plugin">
                                        
                                        <asp:TextBox ID="ctxt_academic_session" Enabled="true" CssClass="form-control mandatory-dropdown" onkeyup="SearchAcademicSession(event);" onclick="SearchAcademicSession(event); return false;"  runat="server"></asp:TextBox>
                                        <div class="responsive-table-plugin">
										<div class="table-rep-plugin">
                                        <div id="div_academic_session_combo" class="table-responsive div_java_script_combo_sub"></div>
                                        </div>
                                        </div>

									</div>
									<div class="form-group mb-3">
                                        <asp:Button ID="cmd_login" runat="server" class="btn btn-primary btn-block waves-effect waves-light" Text="Login" OnClick="cmd_login_Click" />
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		  
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
        
    <%--<p class="error">
        <asp:Label runat="server" ForeColor="White" CssClass="text_label_left" Width="95%"
            ID="ctxt_hash" Font-Bold="True" Font-Underline="True"></asp:Label></p>--%>

    <%--<asp:HiddenField ID="cntxt_tot_sum" Value="0" runat="server" />--%>
    <asp:HiddenField ID="cntxt_academic_session_id" Value="0" runat="server" />
    <asp:HiddenField ID="ctxt_display_type" Value="0" runat="server" />
    </form>
</body>
</html>
