<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmDateWiseRoutineAllocation.aspx.cs"
    Inherits="Forms_frmDateWiseRoutineAllocation" %>


<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date Wise Routine Allocation</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/DateWiseRoutineAllocation.js?version=6"></script>
    <script type="text/javascript" src="JavaScript/CalenderCtrlScript.js"></script>
    <script type="text/javascript" src="JavaScript/TopMenu.js"></script>

    <link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />   
</head>
<body onload="SetWindow(1024,768); Init();" onkeyup="CheckKeyUp(event);" onkeydown="CheckKeyDown(event);"
    onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);" class="center-menu">
    
        <form id="form1" runat="server">
            <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server">
                <Services>
                    <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                    <asp:ServiceReference Path="~/Forms/WebServiceDateWiseRoutineAllocation.asmx" />
                </Services>
            </asp:ScriptManager>
        </div>
            <header id="topnav"> 
    
    <!-- Topbar Start -->
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
          <li class="dropdown notification-list"> <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img src="assets-new/images/users/noavatar.jpg" alt="user-image" class="rounded-circle"> <span class="d-none d-sm-inline-block ml-1 font-weight-medium">Admin.</span> <i class="mdi mdi-chevron-down d-none d-sm-inline-block"></i> </a>
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
              <h4 class="page-title"> <span id="H1">
               <asp:Label ID="Label1" runat="server" Text="DATE WISE ROUINE ALLOCATION"></asp:Label>
                </span> </h4>
            </div>
          </div>
        </div>
        
        <div id="Div1" runat="server">
            <div class="card-box">

                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                <label>elect Batch Year</label>
                                <asp:TextBox ID="ctxt_batch" Placeholder="Select Batch Year:" Onkeyup="PopulateStartingBatch(event); return false;"
                                    onclick="PopulateStartingBatch(event); return false;" CssClass="form-control mandatory-dropdown"
                                    runat="server"></asp:TextBox>
                                <div id="div_StartingBatch" class="div_java_script_combo_sub">
                                </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                <label>Select Course</label>
                                <asp:TextBox ID="ctxt_course_name" Placeholder="Select Course:" Onkeyup="SearchCourse(event); return false;"
                                    onclick="SearchCourse(event); return false;" CssClass="form-control mandatory-dropdown"
                                    runat="server"></asp:TextBox>
                                <div id="div_course_name" class="div_java_script_combo_sub">
                                </div>
                                <div id="div_search" class="div_java_script_combo_sub">
                                </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                <label>Enter Sem No</label>
                                <asp:TextBox ID="cntxt_sem_no" Placeholder="Enter Sem No"
                                     CssClass="form-control" runat="server"></asp:TextBox>  
                                </div>
                            </div>

                            <div class="col-md-1">
                            <label>&nbsp</label>
                                <asp:Button ID="cmd_search" runat="server" CssClass="btn btn-primary btn-block"
                                    OnClientClick="BatchCourseWiseStreamAndSemSectionSearch(); return false;" Text="Search" />
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                <label>Enter Password</label>
                                <asp:TextBox ID="ctxt_password" Placeholder="Enter Password" TextMode="Password"
                                    CssClass="form-control"
                                    runat="server"></asp:TextBox>
                                <div id="div2" class="div_java_script_combo_sub">
                                </div>
                                <div id="div3" class="div_java_script_combo_sub">
                                </div>
                                </div>
                            </div>

                            <%--<div class="col-md-3">
                            <asp:Button ID="Button1" runat="server" CssClass="btn btn-warning btn-3d fullwidth" 
                            OnClientClick="Search(); return false;" Text="Search" /> 
                        </div>--%>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                            <label>Stream</label>
                                <asp:TextBox ID="ctxt_stream_name" Placeholder="Stream:" Onkeyup="PopulateStream(event); return false;"
                                    onclick="PopulateStream(event); return false;" CssClass="form-control "
                                    runat="server" ReadOnly="True"></asp:TextBox>
                                <div id="div_PopulateStream" class="div_java_script_combo_sub">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label>Semester Type</label>
                                <asp:TextBox ID="ctxt_semester_type" Placeholder="Semester Type:" Onkeyup="PopulateSemesterType(event); return false;"
                                    onclick="PopulateSemesterType(event); return false;" CssClass="form-control"
                                    ReadOnly="True" runat="server"></asp:TextBox>
                                <div id="div_semester_type" class="div_java_script_combo_sub">
                                </div>
                            </div>
                            <div class="col-md-3">
                            <label>Semester</label>
                                <asp:TextBox ID="ctxt_semester_name" Placeholder="Semester:" Onkeyup="PopulateSemester(event); return false;"
                                    onclick="PopulateSemester(event); return false;" CssClass="form-control "
                                    runat="server" ReadOnly="True"></asp:TextBox>
                                <div id="div_semester_name" class="div_java_script_combo_sub">
                                </div>
                            </div>
                            <div class="col-md-2">
                            <label>Section</label>
                                <asp:TextBox ID="ctxt_section_name" Placeholder="Section:" Onkeyup="PopulateSection(event); return false;"
                                    onclick="PopulateSection(event); return false;" CssClass="form-control"
                                    runat="server" ReadOnly="True"></asp:TextBox>
                                <div id="div_section" class="div_java_script_combo_sub">
                                </div>
                            </div>
                            <div class="col-md-1">
                            <label>&nbsp</label>
                                <asp:Button ID="Button1" runat="server" CssClass="btn btn-primary btn-block"
                                    OnClientClick="PopulateRoutine(); return false;" Text="Proced" />
                            </div>
                        </div>
                   
            </div>
        </div>
        <%--        <div id="div_routine_container" runat="server">
            <div id="Div2" class="padding-20">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="table-responsive">
                            <asp:Panel runat="server" ID="m_panel_BatchCourseSemStreamWiseSection">
                            </asp:Panel>
                        </div>
                    </div>
                </div>
            </div>
        </div>--%>
        <div class="card-box">
            <div class="table-responsive">
                <div id="div_routine_container">
                </div>
            </div>
        </div>
        <div id="m_Div_RoutineAllocationDate" runat="server">
            <div class="card-box">

                        <div class="row">
                            <div class="col-md-2">
                                Last Attendance Date :
                            </div>
                            <div class="col-md-3">
                                <asp:TextBox ID="dtp_last_attendance_date" CssClass="form-control" runat="server"
                                    ReadOnly="True"></asp:TextBox>
                            </div>
                        </div>
                       <hr>
                
                       <div class="row">
                           <div class="col-md-6">
                               <div class="form-group row">
                               <div class="col-md-5">
                                From Month:
                            </div>
                            <div class="col-md-5">
                                <asp:TextBox ID="ctxt_from_month" Placeholder="Month:" CssClass="form-control" runat="server"
                                    ReadOnly="True"></asp:TextBox>
                            </div>
                               </div>
                               <div class="form-group row">
                               <div class="col-md-5">
                                To Month:
                            </div>
                            <div class="col-md-5">
                                <asp:TextBox ID="ctxt_to_month" Placeholder="Month:" Onkeyup="PopulateMonth(event); return false;"
                                    onclick="PopulateMonth(event); return false;" CssClass="form-control" runat="server"
                                    ReadOnly="True"></asp:TextBox>
                                <div id="div5" class="div_java_script_combo_sub">
                                </div>
                            </div>
                               </div>
                               <div class="form-group row">
                               <div class="col-md-5">
                                From Date (dd/mm/yyyy):
                            </div>
                            <div class="col-md-5">
                                <div class="input-group">
                                    <asp:TextBox ID="dtp_from_date" CssClass="form-control" runat="server"></asp:TextBox>
                                    <div class="input-group-addon" onclick="InitCalender('dtp_from_date', 'div_from_date', GetDateToday()); return false;">
                                         <span class="input-group-text"><i class="fa fa-calendar"></i></i></span>
                                    </div>
                                </div>
                                <div id="div_from_date">
                                </div>
                            </div>
                               </div>

                           </div>
                           <div class="col-md-6 pull-right">
                               <div class="form-group row">
                               <div class="col-md-5">
                                From Year:
                            </div>
                            <div class="col-md-5">
                                <asp:TextBox ID="ctxt_from_year" Placeholder="From Year:" CssClass="form-control"
                                    runat="server" ReadOnly="True"></asp:TextBox>
                            </div>
                               </div>
                               <div class="form-group row">
                                <div class="col-md-5">
                                To Year:
                            </div>
                            <div class="col-md-5">
                                <asp:TextBox ID="ctxt_to_year" Placeholder="To Year:" CssClass="form-control" runat="server"
                                    ReadOnly="True"></asp:TextBox>
                            </div>
                               </div>
                               <div class="form-group row">
                               <div class="col-md-5">
                                To Date (dd/mm/yyyy):
                            </div>
                            <div class="col-md-5">
                                <div class="input-group">
                                    <asp:TextBox ID="dtp_to_date" CssClass="form-control" runat="server"></asp:TextBox>
                                    <div class="input-group-append" onclick="InitCalender('dtp_to_date', 'div_to_date', GetDateToday()); return false;">
                                        <span class="input-group-text"><i class="fa fa-calendar"></i></i></span>
                                        
                                    </div>
                                </div>
                                <div id="div_to_date">
                                </div>
                            </div>
                               </div>
      
                           </div>
                       </div>
                

                   
            </div>
        </div>
            <!-- right options -->
            <div class="row">
                <div class="col-md-12 text-center">
                        <asp:Button ID="cmd_save" runat="server" CssClass="btn btn-primary"
                            OnClientClick="SaveData(); return false;" Text="Save" />
                        <asp:Button ID="cmd_cancle" runat="server" CssClass="btn btn-primary"
                            OnClientClick="Cancle(); return false;" Text="Cancle" />
                        <asp:Button ID="cmd_close" runat="server" CssClass="btn btn-primary"
                            OnClientClick="LoadHomePage(); return false;" Text="Back" />
                    </div>
                </div>
        </div>
        <!------------------------------------------------------------------------------------------>
        <div id="m_DivPanelHiddenField" runat="server">
            <div style="display: inherit">
                <asp:HiddenField ID="cntxt_course_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_batch_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_stream_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_semester_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_section_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_semester_type_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_to_month_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_from_month_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_to_year_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_from_year_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_academic_ses_id" runat="server" Value="0" />
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
 </form>
        <!-- Vendor js -->
        <script src="assets-new/js/vendor.min.js"></script>

        <!--Morris Chart-->
        <script src="assets-new/libs/morris-js/morris.min.js"></script>
        <script src="assets-new/libs/raphael/raphael.min.js"></script>

        <!-- Dashboard init js-->
        <script src="assets-new/js/pages/dashboard.init.js"></script>

        <!-- App js -->
        <script src="assets-new/js/app.min.js"></script>
</body>
</html>
