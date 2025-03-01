<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmFacultyList.aspx.cs" Inherits="Forms_frmFacultyList" %>



<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>List of Faculties</title>
<script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script> 
<script type="text/javascript" src="JavaScript/DynamicHtml.js"></script> 
<script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script> 
<script type="text/javascript" src="JavaScript/FacultyList.js?version=1"></script> 
<script type="text/javascript" src="JavaScript/TopMenu.js"></script>
<link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
<link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />

</head>
<body onload="SetWindow(1024,768); Init();DisplayFacultyList();" onkeyup="CheckKeyUp(event);"
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
            <h4 class="page-title text-center"> <span id="div_lbl_document_name">
              <asp:Label ID="Label5" runat="server"  Text="FACULTY LIST" ></asp:Label>
              </span> </h4>
          </div>
        </div>
      </div>
      <div class="row justify-content-center" id="m_UpdatePanelHeader" runat="server">
        <div id="content" class="col-md-8">
			<div class="card-box">
          <div class="row">
            <div class="col-md-3">
				<div class="form-group">
					<label>Search by Faculty Code</label>
                    <asp:TextBox ID="ctxt_faculty_code" CssClass="form-control" onblur="SetValue('ctxt_is_save', '0');"
                                    runat="server" Placeholder="Search by Faculty Code" Onkeyup="DisplayFacultyList();" onchange="DisplaySubjectDet();"></asp:TextBox>
				</div>
            </div>
            <div class="col-md-7">
				<div class="form-group">
				<label>Search by Faculty Name</label>
                <asp:TextBox ID="ctxt_faculty_name" CssClass="form-control" Onkeyup="DisplayFacultyList();"
                                    onchange="DisplaySubjectDet();" runat="server" Placeholder="Search by Faculty Name"></asp:TextBox>
				</div>
            </div>
            <div class="col-md-2">
				<div class="form-group">
					<label>&nbsp;</label>
              <asp:Button ID="cmd_reset" runat="server" CssClass="btn btn-primary btn-block"
                                    OnClientClick="Reset(); return false;" Text="Reset" />
				</div>
            </div>
          </div>
			</div>
        </div>
      </div>
      <div id="m_UpdatePanelSearchSubject" runat="server">
		  <div class="row justify-content-center">
               <div class="col-md-8">
         <div class="page-title-box">
            <h4 class="page-title text-danger font-12" style="line-height: 30px"> *Single Click on Code Field For Details </h4>
          </div>
			
			     <div class="card-box">

                  <div class="table-responsive">
                    <asp:Panel runat="server" ID="m_panel_faculty_list"> </asp:Panel>
				 </div>
			    </div>
			   </div>
          </div>
        </div>
      <div id="m_UpdatePanelHiddenField" runat="server">
        <div style="display: inherit">
          <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
          <asp:HiddenField ID="cntxt_branch_id" runat="server" Value="0" />
          <asp:HiddenField ID="cntxt_dept_id" runat="server" Value="0" />
          <asp:HiddenField ID="ctxt_facultycode" runat="server" Value="0" />
        </div>
      </div>
    </div>
    <!-- end container --> 
  </div>
</form>
</body>
</html>
