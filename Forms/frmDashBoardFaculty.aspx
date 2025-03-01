<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmDashBoardFaculty.aspx.cs" Inherits="Forms_frmDashBoardFaculty" %>



<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Faculty DashBoard</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/DashBoardFaculty.js?version=8"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="JavaScript/TopMenu.js"></script>


    <link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />
</head>
<body onload="SetWindow(1280,800); Init();" onkeyup="CheckKeyUp(event);"
    onkeydown="CheckKeyDown(event);" onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);" class="center-menu">
        <form id="form1" runat="server">
        <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server">
                <Services>
                    <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
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
                    <li onclick="SwitchWnd(); return false;" ><a class="bg-success nav-link dropdown-toggle mr-0 waves-effect waves-light text-white" >Switch To Student Dashboard</span></a></li>
                    <li id="m_college_selection" style="display:none;" class="dropdown notification-list">
                   <a class="nav-link dropdown-toggle mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">Select College <i class="mdi mdi-chevron-down d-none d-sm-inline-block"></i></a>
                      <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                            <a href="" class="dropdown-item notify-item" onclick="LoadUrl('3'); return false;" >GNIT</a>
                            <a href="" class="dropdown-item notify-item" onclick="LoadUrl('2'); return false;" >NIT</a>
                            <a href="" class="dropdown-item notify-item"  onclick="LoadUrl('7'); return false;" >DSC</a>
                            <a href="" class="dropdown-item notify-item" onclick="LoadUrl('5'); return false;" >GNIPST</a>
                            <a href="" class="dropdown-item notify-item" onclick="LoadUrl('6'); return false;" >GNIHM</a>
                            <a href="" class="dropdown-item notify-item" onclick="LoadUrl('10'); return false;" >JISSP</a>
                            <a href="" class="dropdown-item notify-item" onclick="LoadUrl('500'); return false;" >JISU</a>
                            <a href="" class="dropdown-item notify-item" onclick="LoadUrl('62'); return false;" >GMIT</a>
                        
                      </div>
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
                <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
                    <li class="d-none d-lg-block">
                        <a class="nav-link dropdown-toggle waves-effect waves-light text-white font-18">
                          <span id="m_college_name">
                            <asp:Label ID="Label5" runat="server"  Text="Dash Board" ></asp:Label></asp:Label>
                        </span>
                        </a>

                    </li>
                </ul>

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
   <div id="m_UpdatePanelHeader" runat="server">

            <!----------------------Faculty Status--------------------------->
                        
            <div class="row">
                    <div class="col-12">
                        <div class="page-title-box">
                            <div class="page-title-right">
                               <ul class="pagination justify-content-end">
                                    <li class="page-item" onclick="GetFacultyStatData(); return false;" ><a class="page-link">Refresh</a></li>
						            <li class="page-item" onclick="GotoNextWeek('-'); return false;" ><a class="page-link">Prev Week</a></li>
						            <li class="page-item" onclick="GotoNextWeek('+'); return false;"><a class="page-link">Next Week</a></li>
                                 </ul>
                            </div>
                            <h4 class="page-title">Attendance Entry Status By Faculties</h4>
                        </div>
                    </div>
                </div>
            <div id="m_div_student_panel" class="row"></div>

            <!------------------------------------------------->
            <!----------------------Department Wise Bar Chart--------------------------->
                                    
            <div class="row">
                    <div class="col-12">
                        <div class="page-title-box">
                            <div class="page-title-right">
                               <ul class="pagination justify-content-end">
						            <li class="page-item"  onclick="GetDeptWiseBarChartData(-1); return false;" ><a>Prev Date</a></li>
						            <li class="page-item"  onclick="GetDeptWiseBarChartData(1); return false;"><a>Next Date</a></li>
                                 </ul>
                            </div>
                            <h4 class="page-title" id="m_bar_chart_caption">Faculty Department Wise Bar Chart</h4>
                        </div>
                    </div>
                </div>
                <div class="card-box">
                  <div id="m_div_bar_chart" onclick="ShowDetail('NA');"></div>
                </div>
            
            
            
            <!------------------------------------------------->



        </div>
   </div>
  </div>
        


        

        <div style="display: inherit">
            <asp:HiddenField ID="cntxt_college_id" runat="server" Value="7" />
            <asp:HiddenField ID="cntxt_branch_id" runat="server" Value="0" />
            <asp:HiddenField ID="cntxt_day" runat="server" Value="0" />
            <asp:HiddenField ID="ctxt_college_name" runat="server" Value="" />
            <asp:HiddenField ID="dtp_curr_date" runat="server" Value="" />

            <asp:HiddenField ID="disp_type" runat="server" Value="BO" />
            <asp:HiddenField ID="is_call_from_mis" runat="server" Value="0" />

        </div>
        </form>

</body>



</html>
