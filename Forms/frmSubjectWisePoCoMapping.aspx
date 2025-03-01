﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmSubjectWisePoCoMapping.aspx.cs" Inherits="Forms_frmSubjectWisePoCoMapping" %>


<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subject Wise Po Co Mapping</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/ReportList.js"></script> 
    <script type="text/javascript" src="JavaScript/SubjectWisePoCoMapping.js?version=1"></script>    
    <script type="text/javascript" src="JavaScript/TopMenu.js"></script>

    <link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />
    <link href="assets-new/css/scroll.css" rel="stylesheet" type="text/css"   />
    
</head>
<body onload="SetWindow(1024,768); Init();" onkeyup="CheckKeyUp(event);" onkeydown="CheckKeyDown(event);"
    onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);" class="center-menu">
        <form id="form1" runat="server">
        <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server">
                <Services>
                    <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                    <asp:ServiceReference Path="~/Forms/WebServiceReport.asmx" /> 
                    <asp:ServiceReference Path="~/Forms/WebServiceCoPoSetting.asmx" />                    
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
            <h4 class="page-title">
              <span> <asp:Label ID="Label5" runat="server"  Text="SUBJECT WISE PO-CO MAPPING" ></asp:Label></span>
            </h4>
          </div>
        </div>
      </div>    
       
      <div class="row justify-content-center">
          <div class="col-sm-12">  
             
                <div id="m_UpdatePanelHeader" runat="server">
                  <div class="card-box">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="form-group">
                            <label>Select Batch</label>
                            <asp:TextBox ID="ctxt_period" Onkeyup="SearchPeriod(event); return false;" onclick="SearchPeriod(event); return false;"
                                CssClass="form-control mandatory-dropdown" runat="server" Placeholder="Select Batch"></asp:TextBox>
                            <div id="div_period" class="div_java_script_combo_sub">
                            </div>
                          </div>
                        </div>

                        <div class="col-md-3">
                            <div class="form-group">
                            <label>Select Course</label>
                            <asp:TextBox ID="ctxt_course_name" Onkeyup="SearchCourse(event); return false;" onclick="SearchCourse(event); return false;"
                                CssClass="form-control mandatory-dropdown" runat="server" Placeholder="Select Course"></asp:TextBox>
                            <div id="div_course_name" class="div_java_script_combo_sub">
                            </div>
                          </div>
                        </div>


                          <div class="col-md-4">
                            <div class="form-group">
                            <label>Select Subject</label>
                            <asp:TextBox ID="ctxt_subject" Onkeyup="PopulateSubject(event); return false;" onclick="PopulateSubject(event); return false;"
                                CssClass="form-control mandatory-dropdown" runat="server" Placeholder="Select Subject"></asp:TextBox>
                            <div id="div_subject" class="div_java_script_combo_sub_right">
                            </div>
                          </div>
                        </div>    

                          <div class="col-md-3">
                            <div class="form-group text-center">
                                <label class="d-block">&nbsp;</label>
                                 <asp:Button ID="cmd_display" runat="server" CssClass="btn btn-primary"
                                        OnClientClick="DisplayMappingScreen(); return false;" Text="Display" />
                              <asp:Button ID="cmd_co_attn" runat="server" CssClass="btn btn-primary"
                                    OnClientClick="SaveSubjectWiseCoPoMapping(); return false;" Text="Save" />
                            <asp:Button ID="cmd_close" runat="server" CssClass="btn btn-primary"
                                OnClientClick="LoadHomePage(); return false;" Text="Back" />

                          </div>
                        </div> 



                  </div>






                </div>
                <div id="m_UpdatePanelSearchSubject" runat="server">
                    <div class="row">
                       <div class="col-md-12">
                             <div class="card-box">
                                <div class="table-responsive">
                                    <asp:Panel runat="server" ID="m_PanelCoPoMap" style="height:400px" >
                                    </asp:Panel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


 

                <div id="m_UpdatePanelHiddenField" runat="server">
                    <div style="display: inherit">
                        <asp:HiddenField ID="cntxt_course_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_branch_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_subject_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_period_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_stream_id" runat="server" Value="0" />
                        
                        <asp:HiddenField ID="cntxt_exam_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_test_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_question_id" runat="server" Value="0" />

                        <asp:HiddenField ID="cntxt_bloom_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_co_id" runat="server" Value="0" />

                        <asp:HiddenField ID="cntxt_test_type" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_no_of_question" runat="server" Value="0" />
                        <asp:HiddenField ID="ctxt_college_name" runat="server" Value="" />

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
  </form>
    <script src="assets-new/js/vendor.min.js"></script> 
<script src="assets-new/libs/morris-js/morris.min.js"></script> 
<script src="assets-new/libs/raphael/raphael.min.js"></script> 
<script src="assets-new/js/pages/dashboard.init.js"></script> 
<script src="assets-new/js/app.min.js"></script>
</body>
</html>