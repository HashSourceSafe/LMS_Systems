<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmBatchCourseSemStreamWiseSection.aspx.cs" Inherits="Forms_frmBatchCourseSemWiseStream" %>


<!doctype html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
        <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script> 
        <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script> 
        <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
        <script type="text/javascript" src="JavaScript/BatchCourseSemStreamWiseSection.js?version=2"></script> 
        <script type="text/javascript" src="JavaScript/TopMenu.js"></script>

        <link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />
        
</head>
<body onload="SetWindow(1024,768); Init();" onkeyup="CheckKeyUp(event);" onkeydown="CheckKeyDown(event);" onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);"  class="center-menu">
        <form id="form1" runat="server">
            <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server">
                <Services>
                    <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" /> 
                    <asp:ServiceReference Path="~/Forms/WebServiceBatchCourseSemStreamWiseSection.asmx" />
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
               <asp:Label ID="Label1" runat="server"  Text="BATCH COURSE SEMESTER STREAM WISE SECTION" ></asp:Label>
                </span> </h4>
            </div>
          </div>
        </div>

            <div ID="Div1" runat="server" >
               <div class="card-box">
                 <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                    <label>Select Batch Year</label>
                                    <asp:TextBox ID="ctxt_batch" 
                                    Placeholder="Select Batch Year:"
                                    Onkeyup="PopulateStartingBatch(event); return false;"  
                                    onclick="PopulateStartingBatch(event); return false;"  
                                    CssClass="form-control mandatory-dropdown" runat="server"></asp:TextBox>

                                    <div id="div_StartingBatch" class="div_java_script_combo_sub">
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                    <label>Select Course</label>
                                    <asp:TextBox ID="ctxt_course_name" 
                                    Placeholder="Select Course:"
                                    Onkeyup="SearchCourse(event); return false;"  
                                    onclick="SearchCourse(event); return false;"  
                                    CssClass="form-control mandatory-dropdown" runat="server"></asp:TextBox>

                                    <div id="div_course_name" class="div_java_script_combo_sub">
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                    <label>Select Stream</label>
                                    <asp:TextBox ID="ctxt_stream_name"
                                    Placeholder="Select Stream:" 
                                    Onkeyup="PopulateStream(event); return false;"  
                                    onclick="PopulateStream(event); return false;"  
                                    CssClass="form-control mandatory-dropdown" runat="server"></asp:TextBox>

                                    <div id="div_PopulateStream" class="div_java_script_combo_sub">
                                    </div>
                                    </div>
                                </div>
                            </div>
                             <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                    <label>Select Semester Type</label>
                                    <asp:TextBox ID="ctxt_semester_type" 
                                    Placeholder="Select Semester Type:" 
                                    Onkeyup="PopulateSemesterType(event); return false;"  
                                    onclick="PopulateSemesterType(event); return false;"  
                                    CssClass="form-control mandatory-dropdown" runat="server"></asp:TextBox>

                                    <div id="div_semester_type" class="div_java_script_combo_sub">
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                    <label>Select Semester</label>
                                    <asp:TextBox ID="ctxt_semester_name"
                                    Placeholder="Select Semester:"  
                                    Onkeyup="PopulateSemester(event); return false;"  
                                    onclick="PopulateSemester(event); return false;"  
                                    CssClass="form-control mandatory-dropdown" runat="server"></asp:TextBox>

                                    <div id="div_semester_name" class="div_java_script_combo_sub">
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                    <label>Select Section</label>
                                    <asp:TextBox ID="ctxt_section_name" 
                                    Placeholder="Select Section:" 
                                    Onkeyup="PopulateSection(event); return false;"  
                                    onclick="PopulateSection(event); return false;"  
                                    CssClass="form-control mandatory-dropdown"  runat="server"></asp:TextBox>

                                    <div id="div_section" class="div_java_script_combo_sub">
                                    </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
            <div ID="m_DivPanelSearchSubjecta" runat="server">
                 <div class="card-box">
                   <div class="table-responsive">
                                <asp:Panel runat="server" ID="m_panel_BatchCourseSemStreamWiseSection">
                                </asp:Panel>  
                    </div> 
                </div>
            </div>
            <div class="row">
                    <div class="col-md-12 text-center">
                        <asp:Button ID="cmd_save" runat="server" CssClass="btn btn-primary"
                        OnClientClick="SaveData(); return false;" Text="Save" />
                         <asp:Button ID="cmd_cancle" runat="server" CssClass="btn btn-primary" 
                          OnClientClick="Cancle(); return false;" Text="Cancel" />

                         <asp:Button ID="cmd_close" runat="server" CssClass="btn btn-primary" 
                          OnClientClick="LoadHomePage(); return false;" Text="Back" />
                      </div>
                    </div>
            <div ID="m_DivPanelHiddenField" runat="server">
                <div style="display:inherit">
                    <asp:HiddenField ID="cntxt_course_id" runat="server" Value="0" />
                    <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
                    <asp:HiddenField ID="cntxt_batch_id" runat="server" Value="0" />
                    <asp:HiddenField ID="cntxt_stream_id" runat="server" Value="0" />
                    <asp:HiddenField ID="cntxt_semester_id" runat="server" Value="0" />
                    <asp:HiddenField ID="cntxt_section_id" runat="server" Value="0" />
                    <asp:HiddenField ID="cntxt_semester_type_id" runat="server" Value="0" />
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
