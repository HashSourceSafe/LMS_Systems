<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmDashBoardFacultyDet.aspx.cs" Inherits="Forms_frmDashBoardFacultyDet" %>



<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DashBoard Faculty Attendance</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/CalenderCtrlScript.js"></script>
    <script type="text/javascript" src="JavaScript/DashBoardFacultyDet.js?version=9"></script>
    <script type="text/javascript" src="JavaScript/ReportList.js"></script> 
    <script type="text/javascript" src="JavaScript/TopMenu.js"></script>


    <link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />
</head>
<body onload="SetWindow(1280,800); Init();" onkeyup="CheckKeyUp(event);" onkeydown="CheckKeyDown(event);"
    onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);" class="center-menu">
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
            <!-- Topbar Start -->
            <div class="navbar-custom">
              <div class="container-fluid">
                <ul class="list-unstyled topnav-menu float-right mb-0" id="m_li_logout">
                  <li class="dropdown notification-list"> 
                    <!-- Mobile menu toggle--> 
                    <a class="navbar-toggle nav-link">
                    <div class="lines"> <span></span> <span></span> <span></span> </div>
                    </a> 
                    <!-- End mobile menu toggle--> 
                  </li>

                   <li class="dropdown notification-list"> <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img src="assets-new/images/users/noavatar.jpg" alt="user-image" class="rounded-circle"> <span class="d-none d-sm-inline-block ml-1 font-weight-medium">Admin.</span> <i class="mdi mdi-chevron-down d-none d-sm-inline-block"></i> </a>
                    <div class="dropdown-menu dropdown-menu-right profile-dropdown "> 
                      <!-- item-->
                      <div class="dropdown-header noti-title">
                        <h6 class="text-overflow text-white m-0">Welcome !</h6>
                      </div>
                        <a onclick="window.open('frmlogin.aspx','_parent'); return false;"  class="dropdown-item notify-item" > <i class="mdi mdi-logout-variant"></i>Logout</a>
                       </div>
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
            <!-- end Topbar -->
            <%--TOP MENU--%>
                <div class="topbar-menu">
                  <div class="container-fluid">
                    <div id="navigation">
                      <div class="clearfix"></div>
                    </div>
                    <!-- end #navigation --> 
                  </div>
                  <!-- end container --> 
                </div>
            <%-----------------%>

      </header>
      <div class="wrapper">
          <div class="container-fluid">
           <div class="row">
                    <div class="col-12">
                        <div class="page-title-box">
                            <h4 class="page-title"><asp:Label ID="Label5" runat="server"  Text="Faculty Attendance" ></asp:Label></h4>
                        </div>
                    </div>
                </div>
           <div id="m_UpdatePanelHeader" runat="server">
           <div class="card-box">
                    <div class="row">
                        <div class="col-md-3">
                        <div class="form-group">
                            <label>From Date (dd/mm/yyyy)</label>
                            <div class="input-group">
                                <asp:TextBox ID="dtp_from_date" CssClass="form-control" runat="server" ></asp:TextBox>
                                <div class="input-group-addon" OnClick="InitCalender('dtp_from_date', 'div_from_date', GetDateToday()); return false;">
                                <i class="fa fa-calendar"></i>
                                </div>
                            </div>

                            <div  id="div_from_date"></div>
                            </div>
                        </div>
                        <div class="col-md-3">
                        <div class="form-group">
                            <label>To Date (dd/mm/yyyy)</label>
                            <div class="input-group">
                                <asp:TextBox ID="dtp_to_date" CssClass="form-control" runat="server" ></asp:TextBox>
                                <div class="input-group-addon" OnClick="InitCalender('dtp_to_date', 'div_to_date', GetDateToday()); return false;">
                                <i class="fa fa-calendar"></i>
                                </div>
                            </div>

                            <div  id="div_to_date"></div>
                            </div>
                        </div>
                        <div class="col-md-3">
                        <div class="form-group">
                            <label>Search On Couese</label>
                            <asp:TextBox ID="ctxt_course" placeholder="Enter Course" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>
                        </div>
                        <div class="col-md-3">
                        <div class="form-group">
                            <label>Search On Stream</label>
                            <asp:TextBox ID="ctxt_stream" placeholder="Enter Stream" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>
                        </div>
                        </div>
                        <div class="row">

                        <div class="col-md-3">
                        <div class="form-group">
                            <label>Search On Sem No</label>
                            <asp:TextBox ID="cntxt_sem" placeholder="Enter 0 for All" Text="0" CssClass="form-control  text-right" runat="server" ></asp:TextBox>
                            </div>
                        </div>
                        <div class="col-md-3">
                        <div class="form-group">
                            <label>Faculty Department</label>
                            <asp:TextBox ID="ctxt_dept_name" placeholder="Enter Department" CssClass="form-control" runat="server" ></asp:TextBox>
                            </div>
                        </div>
                        <div class="col-md-3">
                        <div class="form-group">
                            <label>Search On Subject </label>
                            <asp:TextBox ID="ctxt_subject" placeholder="Enter Subject" CssClass="form-control" runat="server" ></asp:TextBox>
                            </div>
                        </div>
                        <div class="col-md-3">
                        <div class="form-group">
                            <label>Search On Faculty </label>
                            <asp:TextBox ID="ctxt_faculty" placeholder="Enter Faculty" CssClass="form-control" runat="server" ></asp:TextBox>
                            </div>
                        </div>
                        </div>
                        <div class="row">

                        <div class="col-md-3">
                        <div class="form-group">
                            <label>From (%)</label>
                            <asp:TextBox ID="cntxt_from_val" text="0" CssClass="form-control text-right" runat="server" ></asp:TextBox>
                            </div>
                        </div>
                        <div class="col-md-3">
                        <div class="form-group">
                            <label>To (%)</label>
                            <asp:TextBox ID="cntxt_to_val" text="100" CssClass="form-control text-right" runat="server" ></asp:TextBox>
                            </div>
                        </div>
                        <div class="col-md-6">
                        <div class="form-group">
                            <label>Sort On</label>
                            <asp:RadioButtonList ID="radio_sort_on" runat="server" ForeColor="Black" Font-Bold="True"
                                RepeatDirection="Horizontal" BorderColor="#cccccc" BorderStyle="Double" 
                                CssClass="form-control" >
                                <asp:ListItem  Text="Dept&nbsp"></asp:ListItem>
                                <asp:ListItem  Text="Attd Enter(%) Asc&nbsp&nbsp"></asp:ListItem>
                                <asp:ListItem  Selected="True" Text="Attd Enter(%) Desc"></asp:ListItem>
                            </asp:RadioButtonList>
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                        <div class="form-group">
                            <asp:RadioButtonList ID="radio_report_type" runat="server" ForeColor="Black" Font-Bold="True" 
                                RepeatDirection="Vertical" BorderColor="#cccccc" 
                                CssClass="form-control" onclick="SetReportType();" Height="60px" 
                                RepeatColumns="3" >
                                <asp:ListItem Selected="True" Text="Faculty Wise Summary&nbsp&nbsp"></asp:ListItem>
                                <asp:ListItem  Text="Course+Faculty+Subject Wise Summary&nbsp&nbsp"></asp:ListItem>
                                <asp:ListItem Text="Faculty+Subject Wise Summary&nbsp&nbsp"></asp:ListItem>
                                <asp:ListItem Text="Faculty Dept Wise Summary&nbsp&nbsp"></asp:ListItem>
                                <asp:ListItem Text="Faculty Wise Detail&nbsp&nbsp"></asp:ListItem>
                                <asp:ListItem Text="Faculty+Period Wise Details&nbsp&nbsp"></asp:ListItem>
                            </asp:RadioButtonList>
                            </div>
                        </div>
                        </div>
                        <div class="row text-center">
                        <div class="col-md-12">
                            <asp:Button ID="cmd_refresh" runat="server" CssClass="btn bg-primary"
                            OnClientClick="Refresh(); return false;" Text="Refresh" />

                            <asp:Button ID="cmd_export" runat="server" CssClass="btn bg-primary"
                            OnClientClick="DisplayData('1'); return false;" Text="Export" />

                            <asp:Button ID="cmd_reset" runat="server" CssClass="btn btn-primary"
                            OnClientClick="Reset(); return false;" Text="Reset" />

                            <asp:Button ID="cmd_close" runat="server" CssClass="btn bg-primary"
                            OnClientClick="ExitWindow(); return false;" Text="Close" />
                        </div>
                    </div>

            </div>

        </div>
        <div class="row">
            <div class="col-md-11">
                <div id="m_div_single_student" class="div_java_script_combo_sub">
                </div>
            </div>
        </div>


        <div id="m_UpdatePanelMain" runat="server">
        <div class="card-box">
                    <div class="table-responsive">
                        <asp:Panel runat="server" ID="m_panel_main_list">
                        </asp:Panel>
                    </div>
            </div>
        </div>
          </div>
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
                <asp:HiddenField ID="disp_type" runat="server" Value="BO" />
            </div>
        </div>
        </form>
</body>
</html>
