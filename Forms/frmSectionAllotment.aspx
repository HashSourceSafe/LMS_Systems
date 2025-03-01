<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmSectionAllotment.aspx.cs"
    Inherits="Forms_frmSectionAllotment" %>


<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/SectionAllotment.js?version=6"></script>
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
                    <asp:ServiceReference Path="~/Forms/WebServiceSectionAllotment.asmx" />
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
               <asp:Label ID="Label8" runat="server" Text="SECTION ALLOTMENT"></asp:Label>
                </span> </h4>
            </div>
          </div>
        </div>
               <div class="card-box">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                            <label>Select Batch Year</label>
                            <asp:TextBox ID="ctxt_batch" Placeholder="Select Batch Year" Onkeyup="PopulateStartingBatch(event); return false;"
                                onclick="PopulateStartingBatch(event); return false;" CssClass="form-control mandatory-dropdown"
                                runat="server"></asp:TextBox>
                            <div id="div_StartingBatch" class="div_java_script_combo_sub">
                            </div>
                                </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                            <label>Select Course</label>
                            <asp:TextBox ID="ctxt_course_name" Placeholder="Select Course" Onkeyup="SearchCourse(event); return false;"
                                onclick="SearchCourse(event); return false;" CssClass="form-control mandatory-dropdown"
                                runat="server"></asp:TextBox>
                            <div id="div_course_name" class="div_java_script_combo_sub">
                            </div>
                            <div id="div_search" class="div_java_script_combo_sub">
                            </div>
                                </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                            <label>Enter Sem No</label>
                            <asp:TextBox ID="cntxt_sem_no" Placeholder="Enter Sem No"
                                    CssClass="form-control" runat="server"></asp:TextBox>                                
                        </div>
                            </div>

                        <div class="col-md-2">
                            <div class="form-group">
                            <label>&nbsp</label>
                            <asp:Button ID="cmd_search" runat="server" CssClass="btn btn-primary btn-block"
                                OnClientClick="BatchCourseWiseStreamAndSemSectionSearch(); return false;" Text="Search" />
                        </div>
                            </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                            <label>Stream</label>
                            <asp:TextBox ID="ctxt_stream_name" Placeholder="Stream" Onkeyup="PopulateStream(event); return false;"
                                onclick="PopulateStream(event); return false;" CssClass="form-control" ReadOnly="True"
                                runat="server"></asp:TextBox>
                            <div id="div_PopulateStream" class="div_java_script_combo_sub">
                            </div>
                        </div>
                            </div>
                        <div class="col-md-3">
                            <div class="form-group">
                            <label>Semester Type</label>
                            <asp:TextBox ID="ctxt_semester_type" Placeholder="Semester Type" Onkeyup="PopulateSemesterType(event); return false;"
                                onclick="PopulateSemesterType(event); return false;" CssClass="form-control " ReadOnly="True"
                                runat="server"></asp:TextBox>
                            <div id="div_semester_type" class="div_java_script_combo_sub">
                            </div>
                        </div>
                            </div>
                        <div class="col-md-3">
                            <div class="form-group">
                            <label>Semester</label>
                            <asp:TextBox ID="ctxt_semester_name" Placeholder="Semester" Onkeyup="PopulateSemester(event); return false;"
                                onclick="PopulateSemester(event); return false;" CssClass="form-control " ReadOnly="True"
                                runat="server"></asp:TextBox>
                            <div id="div_semester_name" class="div_java_script_combo_sub">
                            </div>
                        </div>
                            </div>
                        <div class="col-md-3">
                            <div class="form-group">
                            <label>Section</label>
                            <asp:TextBox ID="ctxt_section_name" Placeholder="Section" Onkeyup="PopulateSection(event); return false;"
                                onclick="PopulateSection(event); return false;" CssClass="form-control " ReadOnly="True"
                                runat="server"></asp:TextBox>
                            <div id="div_section" class="div_java_script_combo_sub">
                            </div>
                                </div>
                            </div>
                        </div>
                    <div class="row">
                        <div class="col-md-1">Order</div>
                        <div class="col-md-4">
                            <div class="form-group">
                            <asp:RadioButtonList ID="radio_order_by" runat="server" ForeColor="Black" RepeatDirection="Horizontal"
                                BorderColor="Black" BorderStyle="none" Font-Bold="True" Height="30px" Width="95%"> 
                                <asp:ListItem Selected="True" Text="By Id"></asp:ListItem>
                                <asp:ListItem Text="By Name"></asp:ListItem>
                                <asp:ListItem Text="By Roll"></asp:ListItem>
                                <asp:ListItem Text="By Unv Roll"></asp:ListItem>
                            </asp:RadioButtonList>
                                </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                            <asp:Button ID="cmd_PROCESS" runat="server" CssClass="btn btn-primary" OnClientClick="ProcessData(); return false;"
                                Text="Display" />
                                </div>
                        </div>
                    </div>
                </div>
               <div id="m_UpdatePanelSearchSubject" runat="server">
            <div id="Div2">
                <div class="card-box">
                        <div class="row">
                                <div class="col-md-12">
                                    <asp:Button ID="cmd_select_all"  runat="server" CssClass="btn btn-info font-18" OnClientClick="SelectAll(); return false;"
                                    Text="SelectAll" />

                                    <asp:Button ID="cmd_Un_select_all"  runat="server" CssClass="btn btn-info font-18" OnClientClick="DeSelectAll(); return false;"
                                    Text="De-SelectAll" />
                                </div>
                            </div>
                        <div class="table-responsive">
                            <div class="row">
                                <asp:Panel runat="server" ID="m_panel_student_det_search_window">
                                </asp:Panel>
                            </div>
                            </div>
                </div>
                            


                </div>
            </div>
                     <div id="m_UpdatePanelInputCollegeRoll" class="padding-20">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="table-responsive">
                        <div class="row">
                            <div class="col-md-4"></div>
                            <div class="col-md-2">
                                <asp:TextBox ID="ctxt_copy_col_roll" Placeholder="Enter College Roll" CssClass="form-control" TextMode="MultiLine"
                                Height="130px" runat="server"></asp:TextBox>
                            </div>
                            <div class="col-md-4"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-4"></div>
                            <div class="col-md-1">
                                <asp:Button ID="cmd_match" runat="server" CssClass="btn btn-dirtygreen btn-3d btn-sm" OnClientClick="Match(); return false;"
                                Text="Match" />
                            </div>
                            <div class="col-md-1">
                                <asp:Button ID="cmd_reset" runat="server" CssClass="btn btn-dirtygreen btn-3d btn-sm" OnClientClick="Reset(); return false;"
                                Text="Reset" />
                            </div>
                            <div class="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div class="row">
                <div class="col-md-12 text-center">
                        <asp:Button ID="cmd_save" runat="server" CssClass="btn btn-primary"
                            OnClientClick="SaveData(); return false;" Text="Save"  />

                        <asp:Button ID="cmd_coppy" runat="server" CssClass="btn btn-primary" OnClientClick="Copy(); return false;"
                        Text="Copy" />
                        <asp:Button ID="cmd_cancle" runat="server" CssClass="btn btn-primary"
                            OnClientClick="Cancle(); return false;" Text="Cancle" />
                        <asp:Button ID="cmd_close" runat="server" CssClass="btn btn-primary"
                        OnClientClick="LoadHomePage(); return false;" Text="Back" />
                    </div>
                </div>
              </div>
            </div>

        


     
        
        <asp:UpdatePanel ID="m_UpdatePanelHiddenField" runat="server">
            <ContentTemplate>
                <div style="display: inherit">
                    <asp:HiddenField ID="cntxt_course_id" runat="server" Value="0" />
                    <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
                    <asp:HiddenField ID="cntxt_batch_id" runat="server" Value="0" />
                    <asp:HiddenField ID="cntxt_stream_id" runat="server" Value="0" />
                    <asp:HiddenField ID="cntxt_semester_id" runat="server" Value="0" />
                    <asp:HiddenField ID="cntxt_section_id" runat="server" Value="0" />
                    <asp:HiddenField ID="cntxt_student_id" runat="server" Value="0" />
                    <asp:HiddenField ID="cntxt_is_batch_change" runat="server" Value="0" />
                    <asp:HiddenField ID="cntxt_semester_type_id" runat="server" Value="0" />
            </ContentTemplate>
        </asp:UpdatePanel>
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