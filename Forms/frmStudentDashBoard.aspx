<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmStudentDashBoard.aspx.cs" Inherits="Forms_frmStudentDashBoard" %>



<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Student Dashboard</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/StudentDashBoard.js?version=1"></script>
    <script src="JavaScript/Jquery/jquery-1.10.2.js" type="text/javascript"></script>
        
    <link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
	<link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />
    <link href="assets-new/css/calender.css" rel="stylesheet" type="text/css"   />
    <style type="text/css">
        .tablechild
        {
        }
        .tablechild tr td
        {
            border-top: 1px solid #999;
        }
        .tablechild tr:first-child td
        {
            border-top: none;
            padding-bottom: 5px;
            margin-bottom: 5px;
        }
    </style>
</head>
<body onload="SetWindow(1024,768); Init();" onkeyup="CheckKeyUp(event);" onkeydown="CheckKeyDown(event);"
    onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);" class="center-menu right-bar-enabled">
        <form id="form1" runat="server">
        <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server">
                <Services>
                    <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                    <asp:ServiceReference Path="~/Forms/WebServiceShowFacultyDetailsEmpCodeWise.asmx" />
                </Services>
            </asp:ScriptManager>
        </div>
	<asp:UpdatePanel ID="m_UpdatePanelMain" runat="server">
            <ContentTemplate>
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
          <li class="dropdown notification-list"> <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img src="assets-new/images/users/noavatar.jpg" alt="user-image" class="rounded-circle"> <span class="d-none d-sm-inline-block ml-1 font-weight-medium"><asp:Label ID="lbl_user_name" runat="server"  Text="" CssClass="color-white" ></asp:Label></span> <i class="mdi mdi-chevron-down d-none d-sm-inline-block"></i> </a>&nbsp;<div class="dropdown-menu dropdown-menu-right profile-dropdown "> 
              <!-- item-->
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow text-white m-0">Welcome !</h6>
              </div>
				<asp:Button runat="server" ID="cmd_change_password" Text="Change Password" OnClientClick="ChangePassword(); return false;" Visible="false" CssClass="btn btn-link"></asp:Button>	
                                         <asp:Button runat="server" ID="cmd_logout" Text="Log Out" Visible="true" CssClass="btn btn-link" OnClientClick="LogOut(); return false;"></asp:Button>

          </li>
			
			
			
        </ul>
        
        <!-- LOGO -->
        <div class="logo-box"> <a href="index.html" class="logo text-center logo-dark"> <span class="logo-lg"> <img src="assets-new/images/logo-light.png" alt="" height="60"> 
          <!-- <span class="logo-lg-text-dark">Uplon</span> --> 
          </span></a><a href="index.html" class="logo text-center logo-light"><span class="logo-lg">&nbsp;<img src="assets-new/images/logo-light.png" alt="" height="60"> 
          <!-- <span class="logo-lg-text-dark">Uplon</span> --> 
          </span></a></div>
      </div>
      <!-- end container-fluid--> 
    </div>
    <!-- end Topbar -->
    

<%--TOP MENU--%>
    <div class="topbar-menu">
      <div class="container-fluid">
        <div id="navigation">  
			<ul class="navigation-menu" id="m_tab_div">
              <li class="has-submenu">
                 <a><i class="mdi mdi-file-document-edit-outline"></i> <asp:Button ID="cmd_routine" runat="server" CssClass="btn btn-link" Text="Routine"
                                    OnClientClick="ShowHidePanel('1'); return false;" /></a>
              </li>
				<li class="has-submenu" style="display:none">
                 <a><i class=" mdi mdi-hail"></i> <asp:Button ID="cmd_own_attendance" runat="server" CssClass="btn btn-link"
                                    Text="Own Attendance" OnClientClick="ShowHidePanel('2'); return false;" /></a>
              </li>

			</ul>		
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
             <asp:Label ID="lbl_document_name" runat="server"  Text="Student Dashboard" CssClass="color-white margin-left-10" ></asp:Label>
              </span> </h4>
          </div>
        </div>
      </div>
		
        <!--Routine Content Block-->
	   	<div class="row justify-content-center" id="div_routine_content_block">
          <div class="col-10">
				  <div class="card-box" id="panel-1">
                        <div class="row">
							<div class="col-6">
							   <div class="row">
						         	<div class="col-6">
								      <div class="form-group">
										  <label>From Date</label>
										  <asp:TextBox ID="dtp_from_date" CssClass="form-control" Placeholder="From Date" Enabled=false 
                                    runat="server"></asp:TextBox>
									  </div>
								    </div>
						        	<div class="col-6">
								      <div class="form-group">
										   <label>To Date</label>
										   <asp:TextBox ID="dtp_to_date" CssClass="form-control" Placeholder="To Date" Enabled=false 
                                    runat="server"></asp:TextBox>
									  </div>
								    </div>

						        	
								
								</div>
							</div>
                            
							<div class="col-5 text-right" style="display:none">
								<label class="btn-block">&nbsp;</label>
							    <asp:Button runat="server" ID="cmd_view_date_wise_routine" Text="View Date Wise"
                                    Visible="true" CssClass="btn btn-info btn-sm" OnClientClick="ViewDateWiseRoutine();  return false;">
                                </asp:Button>
								<asp:Button runat="server" ID="cmd_view_weekly_routine" Text="View Weekly" Visible="true"
                                    CssClass="btn btn-info btn-sm" OnClientClick="ViewWeeklyRoutine(); return false;">
                                </asp:Button>
								 <asp:Button runat="server" ID="cmd_show_other_routine" Text="All Routines" Visible="true"
                                    CssClass="btn btn-info btn-sm" OnClientClick="window.open('frmAllRoutineList.aspx'); return false;">
                                </asp:Button>
							</div>
                            <div class="col-6">
                                    
                                    <div class="marks float-right">
                                        <div class="outof"><span ID="ctxt_cons_attd" ></span></div>
                                        <div class="totalmrks"><span ID="ctxt_cons_attd_total" ></span></div>
                                         
                                      </div>
								    </div>
                        </div>
				  </div>
                  <div class="card-box">
                            <div id="calendar">
                            <div id="calHeader"><h1 id="tabName">Janvier 1970</h1>
                              <div id="left" onclick="NavigateMonth('-')"> </div>
                              <div id="right" onclick="NavigateMonth('+')"> </div>
                            </div>
                                <div id="div_date_wise_routine_container">
                                </div>
                            </div>
                        </div>
                 
                 
                 <div id="panel-2" class="panel panel-default dashboard  padding-20 padding-top-0">
                        <div class="panel-footer" id="div_date_wise_routine_container_calender">
                            <div class="row">
                                <ul class="easypiecharts list-unstyled">
                                    <li class="clearfix">
                                        <div class="panel panel-default margin-bottom-0">
                                            <div class="panel-body min-height">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div id="panel-graphs-flot-1" class="panel panel-default monday">
                                                            <div id="div_class_routine_2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="panel panel-default margin-bottom-0">
                                            <div class="panel-body min-height">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div id="panel-graphs-flot-1" class="panel panel-default tuesday">
                                                            <div id="div_class_routine_3">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="panel panel-default margin-bottom-0">
                                            <div class="panel-body min-height">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div id="panel-graphs-flot-1" class="panel panel-default wednesday">
                                                            <div id="div_class_routine_4">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="row">
                                <ul class="easypiecharts list-unstyled">
                                    <li class="clearfix">
                                        <div class="panel panel-default margin-bottom-0">
                                            <div class="panel-body min-height">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div id="panel-graphs-flot-1" class="panel panel-default thursday">
                                                            <div id="div_class_routine_5">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="panel panel-default margin-bottom-0">
                                            <div class="panel-body min-height">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div id="panel-graphs-flot-1" class="panel panel-default friday">
                                                            <div id="div_class_routine_6">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="panel panel-default margin-bottom-0">
                                            <div class="panel-body  min-height">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div id="panel-graphs-flot-111" class="panel panel-default saturday">
                                                            <div id="div_class_routine_7">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
	      	
	    </div>
      </div>
                
                
                <!--Own Attendance Content Block-->
					<div class="row justify-content-center" id="div_own_att_content_block">
						<div class="col-6" id="panel-3">
							<div class="card-box">
                              <div class="row">
                            <div class="col-md-5">
								<div class="form-group">
									<label>From Date</label>
                                   <asp:TextBox ID="dtp_att_view_from_date" CssClass="form-control" Placeholder="From Date"
                                    runat="server"></asp:TextBox>
								</div>
                            </div>
                            <div class="col-md-5">
								<div class="form-group">
									<label>To Date</label>
                                <asp:TextBox ID="dtp_att_view_to_date" CssClass="form-control" Placeholder="To Date"
                                    runat="server"></asp:TextBox>
								</div>
                            </div>
                            <div class="col-md-2">
								<div class="form-group">
									<label>&nbsp;</label>
                                <asp:Button runat="server" ID="Button1" Text="View" Visible="true" CssClass="btn btn-info btn-block"
                                    OnClientClick="ViewOwnAttendance();  return false;"></asp:Button>
								</div>
                            </div>
                        </div>
							</div>
				    	</div>
                        </div>
                        <div class="row justify-content-center">
					    <div class="col-8">
							<div class="card-box">
                                <div class="table-responsive">
								 <div id="div_monthly_attendance_date"> </div>
								</div>
							</div>
				    	</div>
					</div>





		<!---------------- Resource popup-------------------->
        <div class="modal fade bd-example-modal-lg" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Resource Details</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">

                    </button>
                  </div>
                  <div class="modal-body">
                    <div id="m_panel_resource_det" ></div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
        </div>

		<!---------------- popup-------------------->

		<!---------------- Day wise attd popup-------------------->
  <%--      <div class="modal fade bd-example-modal-lg" id="AttdexampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="AttdexampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="H1">Attendance Details</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">

                    </button>
                  </div>
                  <div class="modal-body">
                    <div id="m_panel_day_wise_attd" ></div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
        </div>--%>
                    <!---------------- popup-------------------->
                    <!---------------- Right Bar-------------------->
                    <div class="class-out" id="div_day_wise_attd">
                        <div class="class-dialog modal-dialog-centered">
                            <div class="class-content">
                                <div class="modal-body">
                                    <div class=" table-responsive">
                                        <div id="m_panel_day_wise_attd">
                                        </div>
                                    </div>
                                </div>
                                <div onclick="ShowHideControl('div_day_wise_attd', 0);" class="class-close">
                                    <i class="mdi mdi-close"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="class-out" id="div_Assignment" style="display: none">
                        <div class="class-dialog modal-dialog-centered">
                            <div class="class-content">
                                <div class="modal-body">
                                    <div class="table-responsive">
                                        <div id="Div2">
                                            <div id="questionsContainer">
                                                <!-- Questions will be dynamically inserted here -->
                                            </div>
                                            <button type="submit" class="btn btn-primary">
                                                Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!---------------- Right Bar-------------------->
                    <div>
                        <asp:HiddenField ID="cntxt_college_id" Value="0" runat="server" />
                        <asp:HiddenField ID="ctxt_student_code" Value="" runat="server" />
                        <asp:HiddenField ID="cntxt_academic_session" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_selected_period_id" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_subject_id" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_course_id" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_stream_id" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_section_id" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_semester_id" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_group_id" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_batch_id" Value="0" runat="server" />
                        <asp:HiddenField ID="ctxt_att_date" Value="" runat="server" />
                        <asp:HiddenField ID="cntxt_student_id" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_order_by_id" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_routine_disp_by_id" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_Attendance_Id" Value="0" runat="server" />
                        <asp:HiddenField ID="ctxt_current_date" Value="" runat="server" />
                        <asp:HiddenField ID="cntxt_date" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_month" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_year" Value="0" runat="server" />
                        <asp:HiddenField ID="ctxt_sem_type" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_sub_type" Value="-1" runat="server" />
                        <asp:HiddenField ID="cntxt_syllabus_id" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_max_lecture_count" Value="0" runat="server" />
                        <asp:HiddenField ID="ctxt_resource_type_id" Value="0" runat="server" />
                        <asp:HiddenField ID="ctxt_resource_unique_key_id" Value="0" runat="server" />
                        <asp:HiddenField ID="cntxt_is_upload" Value="0" runat="server" />
                        <asp:HiddenField ID="ctxt_resource_link" Value="-" runat="server" />
                        <asp:HiddenField ID="ctxt_concat_data" Value="" runat="server" />
                    </div>
        </ContentTemplate>
    </asp:UpdatePanel>
    </form>
    <!-- Vendor js -->
    <script src="assets-new/js/vendor.min.js"></script>
    <script src="assets-new/js/app.min.js"></script>
</body>
</html>
