<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmEmailManager.aspx.cs" Inherits="Forms_frmEmailManager" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/CalenderCtrlScript.js"></script>
    <script type="text/javascript" src="JavaScript/EmailManager.js?version=1"></script>
    <script type="text/javascript" src="JavaScript/ReportList.js"></script> 
    <link href="css/frmScreen.css" type="text/css" rel="stylesheet" />
    <!-- WEB FONTS -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&amp;subset=latin,latin-ext,cyrillic,cyrillic-ext"
        rel="stylesheet" type="text/css" />
    <!-- CORE CSS -->
    <link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <!-- THEME CSS -->
    <link href="assets/css/essentials.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/layout.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/color_scheme/green.css" rel="stylesheet" type="text/css" id="color_scheme" />
</head>
<body onload="SetWindow(1280,800); Init();" onkeyup="CheckKeyUp(event);" onkeydown="CheckKeyDown(event);"
    onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);">
    <div class="main">
        <form id="form1" runat="server">
        <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server">
                <Services>
                    <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                    <asp:ServiceReference Path="~/Forms/WebServiceReport.asmx" /> 
                </Services>
            </asp:ScriptManager>
        </div>
        <div class="page-headin">
            <header id="page-header">
                    <h1 id="H1"><asp:Label ID="Label5" runat="server"  Text="Faculty Attendance" ></asp:Label></h1>
<%--                    <ol class="breadcrumb">
						<li><a href="#">Forms</a></li>
						<li class="active">Form Validate</li>
					  </ol>--%>
                </header>
        </div>
        <div id="m_UpdatePanelHeader" runat="server">
            <div id="content" class="padding-20">
                <div class="panel panel-default">
                    <div class="panel-body">

                    <div class="row">
                        <div class="col-md-2">
                            From Date (dd/mm/yyyy)
                            <div class="input-group">
                                <asp:TextBox ID="dtp_from_date" CssClass="form-control" runat="server" ></asp:TextBox>
                                <div class="input-group-addon" OnClick="InitCalender('dtp_from_date', 'div_from_date', GetDateToday()); return false;">
                                <i class="fa fa-calendar"></i>
                                </div>
                            </div>

                            <div  id="div_from_date"></div>
                        </div>

                        <div class="col-md-2">
                            To Date (dd/mm/yyyy)
                            <div class="input-group">
                                <asp:TextBox ID="dtp_to_date" CssClass="form-control" runat="server" ></asp:TextBox>
                                <div class="input-group-addon" OnClick="InitCalender('dtp_to_date', 'div_to_date', GetDateToday()); return false;">
                                <i class="fa fa-calendar"></i>
                                </div>
                            </div>

                            <div  id="div_to_date"></div>
                        </div>

                        <div class="col-md-8">
                            Message
                                <asp:TextBox ID="ctxt_message" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>

                    </div>

                     <div class="row">
                        <div class="col-md-2">
                            eMail To
                                <asp:TextBox ID="ctxt_email_to" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>

                        <div class="col-md-4">
                            Subject
                                <asp:TextBox ID="ctxt_email_subject" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>

                        <div class="col-md-6">
                            Body
                                <asp:TextBox ID="ctxt_email_body" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>
                     
                     </div>


                    <div class="row">
                        <div class="col-md-3">
                            <asp:Button ID="cmd_send" runat="server" CssClass="btn bg-green  btn-3d text-white fullwidth"
                            OnClientClick="SendEmail(); return false;" Text="Send" />
                        </div>   
                        <div class="col-md-3">
                            <asp:Button ID="cmd_del_pdf" runat="server" CssClass="btn bg-red  btn-3d text-white fullwidth"
                            Text="Delete Pdf" OnClientClick="SetValue('ctxt_email_body','');" onclick="cmd_del_pdf_Click" />
                        </div>   
                    </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <asp:Label runat="server" ID="ctxt_html"></asp:Label>
        </div>


 



        <div id="m_UpdatePanelHiddenField" runat="server">
            <div style="display: inherit">
                <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_branch_id" runat="server" Value="0" />
                <asp:HiddenField ID="ctxt_college_name" runat="server" Value="" />
                <asp:HiddenField ID="cntxt_batch_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_course_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_stream_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_sem_id" runat="server" Value="0" />
                <asp:HiddenField ID="ctxt_save_file_as" runat="server" Value="NA" />

            </div>
        </div>
        </form>
    </div>
</body>
</html>