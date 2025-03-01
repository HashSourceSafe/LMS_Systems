<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmRoutineMasterPage.aspx.cs"
    Inherits="Forms_frmRoutineMasterPage" %>

  
     
<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Student Affairs</title>
<script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
<script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
<script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
<script type="text/javascript" src="JavaScript/RoutineMasterPage.js?version=4"></script>
<script type="text/javascript" src="JavaScript/TopMenu.js?version=2"></script>

<link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
<link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />
<link href="assets-new/css/all-dasboard.css" rel="stylesheet" type="text/css"   />

</head>
<body class="center-menu" onload=" InitMenuPage();" onkeyup="CheckKeyUp(event);"
    onkeydown="CheckKeyDown(event);" onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);">
<form id="form1" runat="server">
  <div>
    <asp:ScriptManager ID="m_ScriptManager" runat="server">
      <Services>
        <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
      </Services>
    </asp:ScriptManager>
  </div>
  <!-- WRAPPER --> 
  
  <!-- Navigation Bar-->
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
          <li class="dropdown notification-list"> <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img src="assets-new/images/users/noavatar.jpg" alt="user-image" class="rounded-circle"> <span class="d-none d-sm-inline-block ml-1 font-weight-medium" id="ctxt_user_name">Admin.</span> <i class="mdi mdi-chevron-down d-none d-sm-inline-block"></i> </a>
            <div class="dropdown-menu dropdown-menu-right profile-dropdown "> 
              <!-- item-->
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow text-white m-0">Welcome !</h6>
                </div>
              
              <a href="" onclick="LogOut(); return false;" class="dropdown-item notify-item"><i class="mdi mdi-logout-variant"></i> <span>Logout</span></a> 
              <a href="" onclick="DownloadHelp(); return false;" class="dropdown-item notify-item"><i class="mdi mdi-logout-variant"></i> <span>Download Help</span></a> </div>
          </li>
        </ul>
        
        <!-- LOGO -->
        <div class="logo-box"> <a href="#" class="logo text-center logo-dark"> <span class="logo-lg"> <img src="assets-new/images/logo-light.png" alt="" height="60"> 
          <!-- <span class="logo-lg-text-dark">Uplon</span> --> 
          </span> <span class="logo-sm"> 
          <!-- <span class="logo-lg-text-dark">U</span> --> 
          <img src="assets-new/images/logo-light.png" alt="" height="60"> </span> </a> <a href="#" class="logo text-center logo-light"> <span class="logo-lg"> <img src="assets-new/images/logo-light.png" alt="" height="60"> 
          <!-- <span class="logo-lg-text-dark">Uplon</span> --> 
          </span> <span class="logo-sm"> 
          <!-- <span class="logo-lg-text-dark">U</span> --> 
          <img src="assets-new/images/logo-light.png" alt="" height="60"> </span> </a> </div>
      </div>
      <!-- end container-fluid--> 
    </div>
    <!-- end Topbar -->
    
    <div class="topbar-menu">
      <div class="container-fluid">
        <div id="navigation">
          <div class="clearfix"></div>
        </div>
        <!-- end #navigation --> 
      </div>
      <!-- end container --> 
    </div>
    <!-- end navbar-custom --> 
    
  </header>
  <!-- End Navigation Bar-->
  
  <div class="wrapper">
         <div class="row justify-content-center">
            <div class="col-md-5">
              <div class="tree-menu-main">
                 <a id="menu_id_class_management" href="" onclick="SetDesktopMenu('1'); return false;" class="active" >Class Managment</a>
                 <a id="menu_id_course_management" href="" onclick="SetDesktopMenu('2'); return false;">Course Managment</a>
              </div>
            </div>
         </div>
  
 

      <%--Menu Class Managment--%>
      <div id="menu_block_class_management" class="manu-item smooth-show" >
            <div class="icon period" onclick="window.open('frmPeriodMaster.aspx','_self')">
               <div class="icon-content">
                <span><div class="period-master"></div></span>
                <h2 id="m_span1">Period Master</h2>
                </div>
               </div>
            <div class="icon wise-section" onclick="window.open('frmBatchCourseSemStreamWiseSection.aspx','_self')">
            <div class="icon-content">
                <span><div class="batch-course"></div></span>
                <h2 id="m_span1">Batch Course SemStream Wise Section</h2>
                </div>
            </div>
            <div class="icon subject-setting" onclick="window.open('frmBatchCourseStreamSemWiseSubjectSetting.aspx','_self')">
            <div class="icon-content">
                <span><div class="stream-sem-wise"></div></span>
                <h2 id="m_span1">Batch Course Stream Sem Wise Subject</h2>'
                </div>
            </div>
 
            <div class="icon routine-template" onclick="window.open('frmCreateRoutineTemplate.aspx','_self')">
            <div class="icon-content">
                <span><div class="create-rutin"></div></span>
                <h2 id="m_span1">Create Routine Template</h2>
                </div>
            </div>
            <div class="icon sec-allotment" onclick="window.open('frmSectionAllotment.aspx','_self')">
            <div class="icon-content">
                <span><div class="section-allotment"></div></span>
                <h2 id="m_span1">Section Allotment</h2>
                </div>
            </div>
            <div class="icon g-allotment" onclick="window.open('frmGroupAllotment.aspx','_self')">
            <div class="icon-content">
                <span><div class="group-allotment"></div></span>
                <h2 id="m_span1">Group Allotment</h2>
                </div>
            </div>

           <div class="icon r-allocation" onclick="window.open('frmDateWiseRoutineAllocation.aspx','_self')">
           <div class="icon-content">
                <span><div class="routine-allocation"></div></span>
                <h2 id="H5">Date Wise Routine Allocation</h2>
                </div>
            </div>
      </div>

   <%--Menu Course Managment--%>
    <div class="manu-item smooth-show" id="menu_block_course_management" style="display: none">
           <div class="icon period" onclick="window.open('frmPoMaster.aspx','_self')">
           <div class="icon-content">
                <span><div class="pos"></div></span>
                <h2 id="H1">Program Outcomes Settings</h2>
                </div>
            </div>
            <div class="icon wise-section" onclick="window.open('frmSubjectMaster.aspx','_self')">
            <div class="icon-content">
                <span><div class="subject-master"></div></span>
                <h2 id="H1">Subject Master</h2>
                </div>
            </div>
            <div class="icon subject-setting" onclick="window.open('frmSyllabus.aspx','_self')">
            <div class="icon-content">
                <span><div class="swsp"></div></span>
                <h2 id="H2">Subject Wise Syllabus Preparation</h2>
                </div>
            </div>
             <div class="icon r-allocation" onclick="window.open('frmSubjectWisePoCoMapping.aspx','_self')">
             <div class="icon-content">
                <span><div class="swpcm"></div></span>
                <h2 id="H3">Subject Wise PO-CO Mapping</h2>
                </div>
            </div>
            <div class="icon routine-template" onclick="window.open('frmCourseOutcomeMaster.aspx','_self')">
            <div class="icon-content">
                <span><div class="swcs"></div></span>
                <h2 id="H4">Subject Wise CO Setting</h2>
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
  <asp:HiddenField ID="cntxt_user_id" Value="0" runat="server" />
  <asp:HiddenField ID="cntxt_college_id" Value="0" runat="server" />
  <asp:HiddenField ID="cntxt_academic_session_id" Value="0" runat="server" />
</form>
<!-- JAVASCRIPT FILES --> 
<script type="text/javascript">    var plugin_path = 'assets/plugins/';</script> 
<script type="text/javascript" src="assets/plugins/jquery/jquery-2.1.4.min.js"></script> 
<script type="text/javascript" src="assets/js/app.js"></script> 
<!-- PAGE LEVEL SCRIPT --> 
 
<script src="assets-new/js/vendor.min.js"></script> 
<script src="assets-new/libs/morris-js/morris.min.js"></script> 
<script src="assets-new/libs/raphael/raphael.min.js"></script> 
<script src="assets-new/js/pages/dashboard.init.js"></script> 
<script src="assets-new/js/app.min.js"></script>
</body>
</html>
