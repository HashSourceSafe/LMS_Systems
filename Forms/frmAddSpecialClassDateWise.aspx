<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmAddSpecialClassDateWise.aspx.cs"
    Inherits="Forms_frmAddSpecialClassDateWise" %>

<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/AddSpecialClassDateWise.js"></script>
    <script type="text/javascript" src="JavaScript/CalenderCtrlScript.js"></script>
	<script type="text/javascript" src="JavaScript/TopMenu.js"></script>
    
	<link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
	<link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />
</head>
<body onload="SetWindow(1024,768); Init();ShowApprovalList();" onkeyup="CheckKeyUp(event);"
    onkeydown="CheckKeyDown(event);" onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);" class="center-menu">

        <form id="form1" runat="server">
        <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server">
                <Services>
                    <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                    <asp:ServiceReference Path="~/Forms/WebServiceAddSpecialClassDateWise.asmx" />
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
        <div class="logo-box"> <a href="index.html" class="logo text-center logo-dark"> <span class="logo-lg"> <img src="assets-new/images/logo-light.png" alt="" height="60"> 
          <!-- <span class="logo-lg-text-dark">Uplon</span> --> 
          </span> <span class="logo-sm"> 
          <!-- <span class="logo-lg-text-dark">U</span> --> 
          <img src="assets-new/images/logo-light.png" alt="" height="60"> </span> </a> <a href="index.html" class="logo text-center logo-light"> <span class="logo-lg"> <img src="assets-new/images/logo-light.png" alt="" height="60"> 
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
					  <h4 class="page-title text-center"> 
						  <span id="div_lbl_document_name">
							 <asp:Label ID="lbl_document_name" runat="server"  Text="Add Special Classes" ></asp:Label>
						</span> 
					   </h4>
					</div>
				  </div>
        </div>
					<div class="card-box">
					  <div class="row">
                        <div class="col-2" id="div_textbox_from_faculty_dept">
							<div class="form-group">
								<label>Department</label>
                            <asp:TextBox ID="ctxt_from_faculty_dept" Placeholder="Department" Onkeyup="PopulateFromFacultyDept(event); return false;"
                                onclick="PopulateFromFacultyDept(event); return false;" CssClass="form-control"
                                runat="server"></asp:TextBox>
                            <div id="div_from_faculty_dept" class="div_java_script_combo_sub"></div>
                            </div>
                        </div>
                        <div class="col-3" id="div_textbox_from_faculty">
							<div class="form-group">
								<label>Faculty Name</label>
                            <asp:TextBox ID="ctxt_from_faculty" Placeholder="Faculty Name" Onkeyup="PopulateFromFaculty(event); return false;"
                                onclick="PopulateFromFaculty(event); return false;" CssClass="form-control" runat="server"></asp:TextBox>
                            <div id="div_from_faculty_name" class="div_java_script_combo_sub"></div>
                            </div>
                        </div>
                        <div class="col-2" id="div_cont_from_date">
                           <div class="form-group">
							   <label>From Date</label>
							   <div class="input-group">
								   
                                <asp:TextBox ID="dtp_from_date" Placeholder="From Date" CssClass="form-control" runat="server">
                                </asp:TextBox>
                                <div class="input-group-append" onclick="InitCalender('dtp_from_date', 'div_from_date', GetDateToday()); return false;">
                                    <span class="input-group-text"><i class="icon-calender"></i></span>
                                </div>
							   </div>
                            </div>
                            <div id="div_from_date" class="div_java_date">
                            </div>
                        </div>
                        <div class="col-2" id="div_cont_to_date">
							<div class="form-group">
								<label>To Date</label>
                            <div class="input-group">
                                <asp:TextBox ID="dtp_to_date" Placeholder="To Date" CssClass="form-control" runat="server">
                                </asp:TextBox>
                                <div class="input-group-append" onclick="InitCalender('dtp_to_date', 'div_to_date', GetDateToday()); return false;">
                                    <span class="input-group-text"><i class="icon-calender"></i></span>
                                </div>
                            </div>
                            <div id="div_to_date" class="div_java_date"></div>
                            </div>
                        </div>
                        <div class="col-2" id="div3">
							<div class="form-group">
								<label>Batch Year</label>
                            <asp:TextBox ID="ctxt_batch" Placeholder="Batch Year" Onkeyup="PopulateStartingBatch(event); return false;"
                                onclick="PopulateStartingBatch(event); return false;" CssClass="form-control"
                                runat="server"></asp:TextBox>
                            <div id="div_StartingBatch" class="div_java_script_combo_sub"></div>
                            </div>
                        </div>
                        <div class="col-3" id="div5">
							<div class="form-group">
								<label>Course</label>
                            <div class="input-group">
                                <asp:TextBox ID="ctxt_course_name" Placeholder="Course" Onkeyup="SearchCourse(event); return false;"
                                    onclick="SearchCourse(event); return false;" CssClass="form-control text_box mandatory-dropdown"
                                    runat="server"></asp:TextBox>
                                <div id="div_course_name" class="div_java_script_combo_sub">
                                </div>
                                <div class="input-group-append">
                                    <asp:Button ID="cmd_search" runat="server" CssClass="btn btn-primary" OnClientClick="BatchCourseWiseStreamAndSemSectionSearch(); return false;"
                                        Text="Search" />
                                    <div id="div_search" class="div_java_script_combo_sub"> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
							<div class="form-group">
                            <asp:TextBox ID="ctxt_stream_name" Placeholder="Stream" Onkeyup="PopulateStream(event); return false;"
                                onclick="PopulateStream(event); return false;" CssClass="form-control " runat="server"
                                ReadOnly="True"></asp:TextBox>
                            <div id="div_PopulateStream" class="div_java_script_combo_sub">  </div>
                            </div>
                        </div>
                        <div class="col-3">
							<div class="form-group">
                            <asp:TextBox ID="ctxt_semester_type" Placeholder="Semester Type" Onkeyup="PopulateSemesterType(event); return false;"
                                onclick="PopulateSemesterType(event); return false;" CssClass="form-control"
                                ReadOnly="True" runat="server"></asp:TextBox>
                            <div id="div_semester_type" class="div_java_script_combo_sub"> </div>
                            </div>
                        </div>
                        <div class="col-3">
							<div class="form-group">
                            <asp:TextBox ID="ctxt_semester_name" Placeholder="Semester" Onkeyup="PopulateSemester(event); return false;"
                                onclick="PopulateSemester(event); return false;" CssClass="form-control" runat="server"
                                ReadOnly="True">
                            </asp:TextBox>
                            <div id="div_semester_name" class="div_java_script_combo_sub"></div>
                            </div>
                        </div>
                        <div class="col-3">
							<div class="form-group">
                            <asp:TextBox ID="ctxt_section_name" Placeholder="Select Section" Onkeyup="PopulateSection(event); return false;"
                                onclick="PopulateSection(event); return false;" CssClass="form-control" ReadOnly="True"
                                runat="server"></asp:TextBox>
                            <div id="div_section" class="div_java_script_combo_sub"> </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
							<div class="form-group">
                            <asp:TextBox ID="ctxt_group_name" Placeholder="Select Group" Onkeyup="PopulateGroup(event); return false;"
                                onclick="PopulateGroup(event); return false;" CssClass="form-control" runat="server"></asp:TextBox>
                            <div id="div_group" class="div_java_script_combo_sub"></div>
                            </div>
                        </div>
                        <div class="col-3">
							<div class="form-group">
                            <asp:TextBox ID="ctxt_subject" placeholder="Select Subject" Onkeyup="PopulateSubject(event); return false;"
                                onclick="PopulateSubject(event); return false;" CssClass="form-control mandatory-dropdown"
                                runat="server"></asp:TextBox>
                            <div id="div_subject" class="div_java_script_combo_sub"> </div>
                            </div>
                        </div>
                        <%--<div class="col-3">
                            <asp:TextBox ID="ctxt_period_name" Placeholder="Period" Onkeyup="PopulatePeriod(event); return false;"
                                onclick="PopulatePeriod(event); return false;" CssClass="form-control" runat="server"></asp:TextBox>
                            <div id="div_populate_period" class="div_java_script_combo_sub">
                            </div>
                        </div>--%>
                        <div class="col-3" id="div4">
                            <asp:Button ID="cmd_show" runat="server" CssClass="btn btn-primary"
                                OnClientClick="Show(); return false;" Text="Proced" />
                        </div>
                        <div class="col-3" id="div_reset">
                            <asp:Button ID="cmd_reset" runat="server" CssClass="btn btn-primary"
                                OnClientClick="Reset(); return false;" Text="Reset" />
                        </div>
                    </div>
					</div>
		</div>
        </div>	
			

        <div class="panel panel-default" id="div1">
            <div class="panel-body">
                <div id="Div2" class="padding-20">
                    
                    <div class="row" id="div_date_wise_routine_container">
                        <div class="panel panel-default" id="m_div_from_faculty">
                            <div class="table-responsive">
                                <asp:Panel runat="server" ID="m_panel_from_faculty" CssClass="panel-body" ScrollBars="Vertical">
                                </asp:Panel>
                            </div>
                        </div>
                    </div>
                    <%--<div class="col-4" id="m_div_to_period_grid">
                            <div class="panel panel-default" id="m_div_to_faculty_Det_panel">
                                <div class="table-responsive">
                                    <asp:Panel runat="server" ID="m_panel_to_faculty" CssClass="panel-body" ScrollBars="Vertical">
                                    </asp:Panel>
                                </div>
                            </div>
                        </div>--%>
                    <%--Button Block--%>
                    <%--<div class="row">
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-2" id="div_show">
                       
                    </div>
                    <div class="col-md-2" id="div_confirm">
                        <asp:Button ID="cmd_confirm" runat="server" CssClass="btn btn bg-aqua text-navy btn-3d fullwidth"
                            OnClientClick="Confirm(); return false;" Text="Confirm" />
                    </div>
                    <div class="col-md-2">
                        <asp:Button ID="cmd_save" runat="server" CssClass="btn btn bg-aqua text-navy btn-3d fullwidth"
                            OnClientClick="SaveData(); return false;" Text="Save" />
                    </div>
                    <div class="col-md-2" id="div_cancle">
                        <asp:Button ID="cmd_cancel" runat="server" CssClass="btn btn bg-aqua text-navy btn-3d fullwidth"
                            OnClientClick="Cancel(); return false;" Text="Cancel" />
                    </div>
                    <div class="col-md-2" id="div_reject">
                        <asp:Button ID="cmd_reject" runat="server" CssClass="btn btn bg-aqua text-navy btn-3d fullwidth"
                            OnClientClick="Reject(); return false;" Text="Reject" />
                    </div>
                </div>--%>
                </div>
            </div>
        </div>
        <div id="m_DivPanelHiddenField" runat="server">
            <div style="display: inherit">
                <asp:HiddenField ID="cntxt_course_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_batch_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_stream_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_semester_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_subject_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_semester_type_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_section_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_group_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_user_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_user_name" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_g_dept_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_from_faculty_dept_id" runat="server" Value="0" />
                <asp:HiddenField ID="ctxt_from_emph_code" runat="server" Value="0" />
                <asp:HiddenField ID="ctxt_from_emph_name" runat="server" Value="" />
                <asp:HiddenField ID="cntxt_period_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_selected_period_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_selected_day_id" runat="server" Value="0" />
                <asp:HiddenField ID="ctxt_selected_date" runat="server" Value="" />
                <asp:HiddenField ID="ctxt_fac_sh_name" runat="server" Value="" />
            </div>
        </div>
        </form>

</body>
</html>
