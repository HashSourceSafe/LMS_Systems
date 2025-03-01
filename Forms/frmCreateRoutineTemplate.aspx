<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmCreateRoutineTemplate.aspx.cs" Inherits="Forms_frmCreateRoutineTemplate" %>


<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Create Routine Template</title>
        <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
        <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
        <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
        <script type="text/javascript" src="JavaScript/CreateRoutineTemplate.js?version=6"></script>
        <script type="text/javascript" src="JavaScript/TopMenu.js"></script>

    <link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />


        <style type="text/css">
            .tablechild {
            }
            .tablechild tr td {
	            border-top:1px solid #999;
            }
            .tablechild tr td.addrow{ border-top:none;}
            .tablechild tr:first-child td {
	            border-top:none;
	            padding-bottom:5px;
	            margin-bottom:5px;
            }
        </style>
        </head>
        <body onload="SetWindow(1024,768); Init();" onkeyup="CheckKeyUp(event);" onkeydown="CheckKeyDown(event);" onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);" class="center-menu">
          <form id="form1" runat="server">
            <div>
              <asp:ScriptManager ID="m_ScriptManager" runat="server">
                <Services>
                  <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                  <asp:ServiceReference Path="~/Forms/WebServiceRoutineTemplate.asmx" />
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
              <h4 class="page-title"> <span id="div_lbl_document_name">
                <asp:Label ID="lbl_document_name" runat="server"  Text="Routine Template" ></asp:Label>
                </span> </h4>
            </div>
          </div>
        </div>


            <asp:UpdatePanel ID="m_UpdatePanelHeader" runat="server" >
              <ContentTemplate> 
                   <div class="card-box">

                      <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                            <label>Select Course</label>
                          <asp:TextBox ID="ctxt_course_name" Enabled="true" placeholder="Select Course" Onkeyup="PopulateCourse(event); return false;"  onclick="PopulateCourse(event); return false;" CssClass="form-control mandatory-dropdown" runat="server"></asp:TextBox>
                          <div id="div_course_name" class="div_java_script_combo_sub"> </div>
                                </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                            <label>Select Batch Year</label>
                          <asp:TextBox ID="ctxt_batch_year" 
                            placeholder="Select Batch Year"
                            Onkeyup="PopulateBatch(event); return false;"  
                            onclick="PopulateBatch(event); return false;"  
                            CssClass="form-control text_box mandatory-dropdown"  runat="server"></asp:TextBox>
                          <div id="div_batch_year" class="div_java_script_combo_sub"> </div>
                                </div>
                        </div>
                        <div class="col-md-6 text-right">
                        
                            <div class="form-group">
                            <label class="d-block">&nbsp</label>
                            <asp:Button ID="cmd_search_routine" runat="server" CssClass="btn btn-primary" 
                                    OnClientClick="ShowRoutine(); return false;" Text="Search Routine" />
                           <asp:Button ID="cmd_reset_all" runat="server" CssClass="btn btn-primary" 
                                    OnClientClick="ResetAll(); return false;" Text="Reset All" />
                                    <asp:Button ID="cmd_close" runat="server" CssClass="btn btn-primary" 
                                    OnClientClick="LoadHomePage(); return false;" Text="Back" />
                            </div>


                        </div>

                      </div>


                      <div class="row">
                       <div class="col-md-3">
                           <div class="form-group">
                           <label>Stream</label>
                        <asp:TextBox ID="ctxt_stream" Enabled="false"
                            placeholder="Stream"
                            Onkeyup="PopulateStream(event); return false;"  
                            onclick="PopulateStream(event); return false;"  
                            CssClass="form-control text_box" runat="server"></asp:TextBox>
                            <div id="div_stream" class="div_java_script_combo_sub"> </div>
                               </div>
                      </div>
                        <div class="col-md-3">
                            <div class="form-group">
                            <label>Sem Type</label>
                         <asp:TextBox ID="ctxt_sem_type" Enabled="false"
                            placeholder="Sem Type"
                            Onkeyup="PopulateSemType(event); return false;"  
                            onclick="PopulateSemType(event); return false;"  
                            CssClass="form-control "  runat="server"></asp:TextBox>
                          <div id="div_sem_type" class="div_java_script_combo_sub"> </div>
                                </div>
                    </div>
                         <div class="col-md-3">
                             <div class="form-group">
                             <label>Semester</label>
                           <asp:TextBox ID="ctxt_semester" Enabled="false"
                            placeholder="Semester"
                            Onkeyup="PopulateSemester(event); return false;"  
                            onclick="PopulateSemester(event); return false;"  
                            CssClass="form-control text_box " runat="server"></asp:TextBox>
                           <div id="div_semester" class="div_java_script_combo_sub"> </div>
                        </div>     
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                            <label>Section</label>
                          <asp:TextBox ID="ctxt_section" Enabled="false"
                            placeholder="Section"
                            Onkeyup="PopulateSection(event); return false;"  
                            onclick="PopulateSection(event); return false;"  
                            CssClass="form-control text_box " runat="server"></asp:TextBox>
                         <div id="div_section" class="div_java_script_combo_sub"> </div>
                                </div>
                     </div>
                     </div>
                    </div>

                
                
                
                <div class="card-box">
                    <div class="row">
                      <div class="col-md-4">
                          
                         <div class="form-group">
                         <label>Select Subject</label>
                                                <div class="input-group">
                                                    <asp:TextBox ID="ctxt_subject" 
                            placeholder="Select Subject"
                            Onkeyup="PopulateSubject(event); return false;"  
                            onclick="PopulateSubject(event); return false;"  
                            CssClass="form-control mandatory-dropdown"  runat="server"></asp:TextBox>
                                                    <span class="input-group-append">
                                                        <asp:Button ID="cmd_disp_subject" runat="server" CssClass="btn search"  OnClientClick="PopulateSubject(event); return false;" Text="" />
                                                    </span>
                                                </div>
                                            </div> 
                          
                      
                     
                      <div id="div_subject" class="div_java_script_combo_sub"> </div>
                      
                      </div>
                      <div class="col-md-4">
                          <div class="form-group">
                          <label>Select Group</label>
                             <div class="input-group">
                          <asp:TextBox ID="ctxt_group" 
                            placeholder="Select Group"
                            Onkeyup="PopulateGroup(event); return false;"  
                            onclick="PopulateGroup(event); return false;"  
                            CssClass="form-control text_box mandatory-dropdown" runat="server"></asp:TextBox>
                          <div id="div_group" class="div_java_script_combo_sub"> </div>
                          <span class="input-group-append">
                          <asp:Button ID="cmd_disp_group" runat="server" CssClass="btn search" OnClientClick="PopulateGroup(event); return false;" Text="" />
                          </span>
                         </div>
                          </div>
                      </div>

                      <div class="col-md-2">
                            <label>Enter Room No</label>
                           <asp:TextBox ID="ctxt_room_no" CssClass="form-control text_box" placeholder="Room No" runat="server"></asp:TextBox>
                      </div>

                      <div class="col-md-2 text-right">
                      <label class="d-block">&nbsp</label>
                       <asp:Button ID="cmd_reset_subject" runat="server" CssClass="btn btn-primary" OnClientClick="ResetSubject(); return false;" Text="Reset Subject" onclick="cmd_reset_subject_Click" /></div>
                    </div>
                    
                    <div class="row">
                      <div class="col-md-4">
                      <label>Enter Dept</label>
                      <asp:TextBox ID="ctxt_dept" 
                            placeholder="Enter Dept"
                            CssClass="form-control text_box" runat="server"></asp:TextBox>
                      <div id="div_faculty" class="div_java_script_combo_sub"> </div>
                      </div>
                      <div class="col-md-4">
                          <div class="form-group">
                          <label>Select Faculty</label>
                           <div class="input-group">
                            <asp:TextBox ID="ctxt_faculty" 
                            placeholder="Select Faculty"
                            Onkeyup="PopulateFaculty(event); return false;"  
                            onclick="PopulateFaculty(event); return false;"  
                            CssClass="form-control text_box mandatory-dropdown" runat="server"></asp:TextBox>
                            <span class="input-group-append">
                            <asp:Button ID="cmd_search_falcuty" runat="server" CssClass="btn search" 
                                    OnClientClick="PopulateFaculty(event); return false;" Text="" />
                                    </span>
                                    </div>
                          </div>
                      </div>
                      <div class="col-md-4 text-right">
                      <label class="d-block">&nbsp</label>
                      <asp:Button ID="cmd_reset_faculty" runat="server" CssClass="btn btn-primary" 
                                    OnClientClick="ResetFacultyGrid(event); return false;" Text="Reset Faculty" 
                                    onclick="cmd_reset_subject_Click" /></div>
                    </div>
                    </div>
                
                   <div id="content" class="padding-20">
                  <div class="panel panel-default">
                    <div class="panel-body">

					<div class="table-responsive">
                        <asp:Panel ID="m_PanelFaculty"  runat="server" >
                        </asp:Panel>
                    </div>
                    
                    </div>
                    </div>
                    </div>
                  
                  <div class="row" id="panel-1">
                      <div class="col-md-12 text-center" id="ul_routine_type_button" style="display:none">
                     <asp:Button  ID="cmd_create" runat="server" CssClass="btn btn-primary"  OnClientClick="DispRoutine('0'); return false;" Text="Display In Create Mode" />
                      <asp:Button  ID="cmd_del" runat="server" CssClass="btn btn-primary" OnClientClick="DispRoutine('1'); return false;"      Text="Display In Remove Mode" />
                       <asp:Button  ID="cmd_room_change" runat="server" CssClass="btn btn-primary" OnClientClick="DispRoutine('2'); return false;"      Text="Display In Room Change Mode" />
                      </div>
                  </div>
                    
                     <div class="card-box">
                    <div class="table-responsive">
                      <div id="div_routine_container"></div>
                  </div>
                </div>
              </ContentTemplate>
            </asp:UpdatePanel>
            <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
            <asp:HiddenField ID="cntxt_batch_year" runat="server" Value="0" />
            <asp:HiddenField ID="cntxt_academic_ses_id" runat="server" Value="0" />
            <asp:HiddenField ID="cntxt_course_id" runat="server" Value="0" />
            <asp:HiddenField ID="cntxt_stream_id" runat="server" Value="0" />
            <asp:HiddenField ID="cntxt_semester_id" runat="server" Value="0" />
            <asp:HiddenField ID="cntxt_section_id" runat="server" Value="0" />
            <asp:HiddenField ID="cntxt_subject_id" runat="server" Value="0" />
            <asp:HiddenField ID="cntxt_sem_type_id" runat="server" Value="-1" />
            <asp:HiddenField ID="cntxt_group_id" runat="server" Value="0" />
            <asp:HiddenField ID="ctxt_faculty_code" runat="server" Value="" />
            <asp:HiddenField ID="ctxt_faculty_name" runat="server" Value="" />
            <asp:HiddenField ID="ctxt_faculty_sht_name" runat="server" Value="" />
            <asp:HiddenField ID="ctxt_faculty_dept" runat="server" Value="" />
            <asp:HiddenField ID="cntxt_day_id" runat="server" Value="0" />
            <asp:HiddenField ID="cntxt_period_id" runat="server" Value="0" />
            <asp:HiddenField ID="cntxt_disp_type" runat="server" Value="0" />
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
