<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmLMsFacutlyWiseSTDAttendance.aspx.cs"
    Inherits="Forms_frmLMsFacutlyWiseSTDAttendance" %>

<!doctype html>
<html lang="en" class="light-style layout-menu-fixed" dir="ltr" data-theme="theme-default"
data-assets-path="assets/" data-template="horizontal-menu-template">
<head id="Head1" runat="server">
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
    <title>LMS Facutly Wise Student Attendance</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/ReportList.js"></script>
    <script type="text/javascript" src="JavaScript/LMSfacultyWiseSTDAttendance.js?version=4"></script>
    <script type="text/javascript" src="JavaScript/TopMenu.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.14.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
    <script src="https://code.jquery.com/ui/1.14.1/jquery-ui.js"></script>
    <script type="text/javascript">
        $(function () {
            $("#dtpFrom").datepicker({
                dateFormat: "dd/mm/yy" 
            });
            $("#dtpTo").datepicker({
                dateFormat: "dd/mm/yy" 
            });
        });
    </script>

    <!-- Basic internal styling -->
    <style>
        body
        {
            text-align: center;
        }
        
        p
        {
            font-size: 25px;
            font-weight: bold;
        }
    </style>
    <!--------------css--------------
    <link rel="stylesheet" href="Css/assets/vendor/css/rtl/core.css" class="template-customizer-core-css" />
    <link href="Css/assets/vendor/css/pages/page-auth.css" rel="stylesheet" type="text/css" />
    <link href="Css/assets/vendor/css/rtl/theme-default.css" rel="stylesheet" type="text/css" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="Css/assets/vendor/fonts/boxicons.css" />
    <link rel="stylesheet" href="Css/assets/vendor/fonts/fontawesome.css" />
    <link rel="stylesheet" href="Css/assets/vendor/fonts/flag-icons.css" />
    <link rel="stylesheet" href="Css/assets/css/custom.css" />-->
    <link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />
    <!--------------css--------------->



</head>
<body onload="SetWindow(1024,768); Init();" onkeyup="CheckKeyUp(event);" onkeydown="CheckKeyDown(event);"
    onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);" class="center-menu">
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
            </Services>
        </asp:ScriptManager>
    </div>
    <header id="topnav"> 
    <div class="navbar-custom">
      <div class="container-fluid">
        <ul class="list-unstyled topnav-menu float-right mb-0">
          <li class="dropdown notification-list"> 
            <!-- Mobile menu toggle--> 
            <a class="navbar-toggle nav-link">
            <div class="lines"> <span></span> <span></span> <span></span> </div>
            </a> 
            <!-- End mobile menu toggle--> 
          </li>
          <li class="dropdown notification-list"> <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img src="assets-new/images/users/noavatar.jpg" alt="user-image" class="rounded-circle"> <span class="d-none d-sm-inline-block ml-1 font-weight-medium">Admin</span> <i class="mdi mdi-chevron-down d-none d-sm-inline-block"></i> </a>
            <div class="dropdown-menu dropdown-menu-right profile-dropdown "> 
              <!-- item-->
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow text-white m-0">Welcome !</h6>
              </div>
              <a href="" onclick="LogOut(); return false;" class="dropdown-item notify-item"><i class="mdi mdi-logout-variant"></i> <span>Logout</span></a> </div>
          </li>
        </ul>
        
        <!-- LOGO -->
        <div class="logo-box"> <a href="frmRoutineMasterPage.aspx" class="logo text-center logo-dark"> <span class="logo-lg"> <img src="assets-new/images/logo-light.png" alt="" height="60"> 
          <!-- <span class="logo-lg-text-dark">Uplon</span> --> 
          </span> <span class="logo-sm"> 
          <!-- <span class="logo-lg-text-dark">U</span> --> 
          <img src="assets-new/images/logo-light.png" alt="" height="60"> </span> </a> <a href="frmRoutineMasterPage.aspx" class="logo text-center logo-light"> <span class="logo-lg"> <img src="assets-new/images/logo-light.png" alt="" height="60"> 
          <!-- <span class="logo-lg-text-dark">Uplon</span> --> 
          </span> <span class="logo-sm"> 
          <!-- <span class="logo-lg-text-dark">U</span> --> 
          <img src="assets-new/images/logo-light.png" alt="" height="60"> </span> </a> </div>
      </div>
      <!-- end container-fluid--> 
    </div>
    <div class="topbar-menu">
      <div class="container-fluid">
        <div id="navigation">
          <div class="clearfix"></div>
        </div>
        <!-- end #navigation --> 
      </div>
      <!-- end container --> 
    </div>
    </header>
    <div class="wrapper">
         <div class="container-fluid">
         <div class="row">
          <div class="col-12">
            <div class="page-title-box">
              <h4 class="page-title text-center"> <span id="div_lbl_document_name">
                <asp:Label ID="lbl_document_name" runat="server" Style="margin-left: 20px" Text="LMS Analysis"></asp:Label> </h4>
            </div>
          </div>
        </div>
         <div class="row justify-content-center align-items-center">
                            <div class="col-lg-6 col-md-12 mb-4">
                                <asp:UpdatePanel ID="m_update_panel_tab_1" runat="server">
                                    <ContentTemplate>
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-lg-3 col-md-12 mb-3 ">
                                                        <asp:Label runat="server" ID="lbl_fromdate" Text="From:"> </asp:Label>
                                                        <input type="text" class="form-control datetimepicker" id="dtpFrom" />
                                                    </div>
                                                    <div class="col-lg-3 col-md-12 mb-3 ">
                                                        <asp:Label runat="server" ID="lbl_todate" Text="To:"> </asp:Label>
                                                        <input type="text" class="form-control datetimepicker" id="dtpTo" />
                                                    </div>
                                                    <div class="col-lg-6 col-md-12 mb-3">
                                                        <asp:Label runat="server" CssClass="text_label_right" ID="label2" Text="Department:"> </asp:Label>
                                                        <asp:TextBox ID="ctxt_deptName" Enabled="true" CssClass="form-control" onkeyup="SearchDepartment(event); return false;" onclick="SearchDepartment(event); return false;" 
                                                        runat="server"></asp:TextBox>
                                                         <div id="div_dept" class="div_java_script_combo_sub">
                                                            </div>
                                                    </div>
                                                  
                                                  <%--  <div class="col-lg-2 col-md-12 mb-3">
                                                        <asp:Label runat="server" CssClass="text_label_right" ID="label5" Text="From percent:"> </asp:Label>
                                                        <asp:TextBox ID="cntxt_fromPercent" Enabled="true" CssClass="form-control" runat="server" Text="0"></asp:TextBox>
                                                    </div>
                                                    <div class="col-lg-2 col-md-12 mb-3 dropdown-list">
                                                        <asp:Label runat="server" CssClass="text_label_right" ID="label3" Text="To percent:"> </asp:Label>
                                                        <asp:TextBox ID="cntxt_Topercent" Enabled="true" CssClass="form-control" runat="server" Text="100"></asp:TextBox>
                                                    </div>--%>
                                                </div>
                                                <div class="layout-demo-info  text-center mt-2">
                                                    <asp:Button ID="cmd_display" OnClientClick="PrintTrHtml(); return false;" Text="Display"
                                                        CssClass="btn btn-primary" runat="server"></asp:Button>
                                                    <asp:Button ID="cmd_reset" Text="Reset" CssClass="btn btn-primary" runat="server"
                                                        OnClientClick="Reset(); return false;"></asp:Button>
                                                 
                                                    <asp:Button ID="cmd_close" Text="Back" CssClass="btn btn-primary" runat="server"
                                                        OnClientClick="LoadBackOffMenu(); return false;"></asp:Button>
                                                </div>
                                            </div>
                                        </div>
                                    </ContentTemplate>
                                </asp:UpdatePanel>
                            </div>
                        </div>
         </div>
    </div>


    

    <div>
        <asp:HiddenField ID="cntxt_nCollegeId" Value="" runat="server" />
    </div>
    </form>
 <%--   <script src="assets-new/js/vendor.min.js"></script> 
        <script src="assets-new/libs/morris-js/morris.min.js"></script> 
        <script src="assets-new/libs/raphael/raphael.min.js"></script> 
        <script src="assets-new/js/pages/dashboard.init.js"></script> 
<script src="assets-new/js/app.min.js"></script>--%>
</body>
</html>

