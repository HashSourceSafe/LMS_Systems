<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmAddVisitingFaculty.aspx.cs" Inherits="Forms_frmAddVisitingFacultyaspx" %>


<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Visiting Faculty</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/AddVisitingFaculty.js?version=3"></script>
    <script type="text/javascript" src="JavaScript/CalenderCtrlScript.js"></script>
    <script type="text/javascript" src="JavaScript/TopMenu.js"></script>

    <link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />  
</head>
<body onload="SetWindow(1024,768); Init(); PopulateVisitingFacultyDetails();" onkeyup="CheckKeyUp(event);"
onkeydown="CheckKeyDown(event);" onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);" class="center-menu">

        <form id="form1" runat="server">
            <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server">
                <Services>
                    <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                    <asp:ServiceReference Path="~/Forms/WebServiceAddVisitingFaculty.asmx" />
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
                  <span id="div_lbl_document_name">
                     <asp:Label ID="lbl_document_name" runat="server"  Text="Add Visiting Faculty" ></asp:Label>
                </span> 
               </h4>
            </div>
          </div>
        </div>
             <div class="card-box">
                <div class="row">
                        <div class="col-md-3" id="div_textbox_faculty_code">
                            <div class="form-group">
                            <label>Enter Faculty Code</label>
                            <asp:TextBox ID="ctxt_faculty_code" Placeholder="Enter Faculty Code" onchange="PopulateVisitingFacultyDetails();"
                            onclick="PopulateVisitingFacultyDetails();" CssClass="form-control" Onkeyup="PopulateVisitingFacultyDetails();"
                            runat="server"></asp:TextBox>
                                <strong class="text-danger">Last Faculty Code:- <span ID="ctxt_last_facultyCode" style="font-size: 12px;"></span> </strong>
                             </div>
                            </div>

                        <div class="col-md-3" id="div3">
                            <div class="form-group">
                            <label>Enter Faculty Name</label>
                            <asp:TextBox ID="ctxt_faculty_name" Placeholder="Enter Faculty Name"  CssClass="form-control"
                            runat="server"></asp:TextBox>
                        </div>
                            </div>
                        <div class="col-md-2" id="div4">
                            <div class="form-group">
                            <label>Enter Short Name</label>
                            <asp:TextBox ID="ctxt_faculty_short_name" Placeholder="Enter Faculty Short Name"  CssClass="form-control" runat="server"></asp:TextBox>
                            <%-- onchange="PopulateVisitingFacultyDetails();" Onkeyup="PopulateVisitingFacultyDetails();" onclick="D(event); return false;"--%>
                            
                        </div>
                            </div>

                       <div class="col-md-2">
                           <div class="form-group">
                           <label>Enter Designation</label>
                            <asp:TextBox ID="ctxt_desingation" Placeholder="Select Designation" Onkeyup="Populate_designation(event); return false;"
                                onclick="Populate_designation(event); return false;" CssClass="form-control mandatory-dropdown" runat="server"></asp:TextBox>
                            <div id="div_designation" class="div_java_script_combo_sub">
                            </div>
                               </div>
                        </div>
                       <div class="col-md-2">
                           <div class="form-group">
                           <label>Select Department</label>
                            <asp:TextBox ID="ctxt_department" Placeholder="Select Department" Onkeyup="Populate_department(event); return false;"
                                onclick="Populate_department(event); return false;" CssClass="form-control mandatory-dropdown" runat="server"></asp:TextBox>
                            <div id="div_department" class="div_java_script_combo_sub">
                            </div>
                        </div>
                           </div>
                    </div>
                <div class="row">
                        <div class="col-md-12 text-center">

                            <asp:Button ID="cmd_save" runat="server" CssClass="btn btn-primary"
                            OnClientClick="SaveData(); return false;" Text="Save" />


                            <asp:Button ID="cmd_cancel" runat="server" CssClass="btn btn-primary"
                            OnClientClick="Cancel(); return false;" Text="Cancel" />

                           <asp:Button ID="Button1" runat="server" CssClass="btn btn-primary"
                            OnClientClick="LoadHomePage(); return false;" Text="Back" />

                        </div>

                    </div>
             </div>
             <div class="card-box">
               <div id="div_visiting_faculty_details_container">
                            <div class="table-responsive">
                                <asp:Panel runat="server" ID="m_panel_visiting_faculty_details" CssClass="panel-body" ScrollBars="Vertical">
                                </asp:Panel>
                        </div>
                    </div>
             </div>
        </div>
      </div>
                
        <div id="m_DivPanelHiddenField" runat="server">
            <div style="display: inherit">
                <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0"/>
                <asp:HiddenField ID="cntxt_user_id" runat="server" Value="0"/>
                <asp:HiddenField ID="cntxt_user_name" runat="server" Value="0"/>
                <asp:HiddenField ID="cntxt_g_dept_id" runat="server" Value="0"/>
                <asp:HiddenField ID="cntxt_designation_id" runat="server" Value=""/>
                 <asp:HiddenField ID="cntxt_department_id" runat="server" Value="0"/>
                 <asp:HiddenField ID="cntxt_is_edit" runat="server" Value="0"/>
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

</body>
</html>
