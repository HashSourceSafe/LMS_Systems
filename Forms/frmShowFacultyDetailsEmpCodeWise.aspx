<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmShowFacultyDetailsEmpCodeWise.aspx.cs"
    Inherits="Forms_frmShowFacultyDetailsEmpCodeWise" %>

<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Faculty Details</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/ShowFacultyDetailsEmpCodeWise.js?version=15"></script>
    <script src="JavaScript/Jquery/jquery-1.10.2.js" type="text/javascript"></script>

    <link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
	<link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />

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
        
  /* Absolute Center Spinner */
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
.loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
    background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));

  background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));
}

/* :not(:required) hides these rules from IE9 and below */
.loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.loading:not(:required):after {
  content: '';
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  -webkit-animation: spinner 150ms infinite linear;
  -moz-animation: spinner 150ms infinite linear;
  -ms-animation: spinner 150ms infinite linear;
  -o-animation: spinner 150ms infinite linear;
  animation: spinner 150ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;
box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;
}

/* Animation */

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
   -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
   -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
   -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

    </style>


</head>
<div id="dvLoader" class="loading" style="display:none">Loading&#8230;</div>
<body onload="SetWindow(1024,768); Init();" onkeyup="CheckKeyUp(event);" onkeydown="CheckKeyDown(event);"
    onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);" class="center-menu">
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
				<asp:Button runat="server" ID="cmd_change_password" Text="Change Password" OnClientClick="ChangePassword(); return false;" Visible="true" CssClass="btn btn-link"></asp:Button>	
                                         <asp:Button runat="server" ID="cmd_logout" Text="Log Out" Visible="true" CssClass="btn btn-link" OnClientClick="LogOut(); return false;"></asp:Button>

          </li>
			
			
			
        </ul>
        
        <!-- LOGO -->
        <div class="logo-box"> 
         
        <a href="#" class="logo text-center logo-dark"> <span class="logo-lg"> <img src="assets-new/images/logo-light.png" alt="" height="60"> 
          <!-- <span class="logo-lg-text-dark">Uplon</span> -->
          
          </span></a><a href="#" class="logo text-center logo-light"> <span class="logo-lg">&nbsp;<img src="assets-new/images/logo-light.png" alt="" height="60"> 
          <!-- <span class="logo-lg-text-dark">Uplon</span> --> 
          </span> </a>
          </div>
          <ul class="list-unstyled topnav-menu topnav-menu-left m-0">

                        <li class="d-none d-md-block">
                            <h4 class="text-white pt-2" style=" font-weight:bold">LEARNING MANAGEMENT SYSTEM</h4>
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
			<ul class="navigation-menu" id="m_tab_div">
              <li class="has-submenu">
                 <a><i class="mdi mdi-file-document-edit-outline"></i> <asp:Button ID="cmd_routine" runat="server" CssClass="btn btn-link" Text="Routine"
                                    OnClientClick="ShowHidePanel('1'); return false;" /></a>
              </li>
				<li class="has-submenu">
                 <a><i class=" mdi mdi-hail"></i> <asp:Button ID="cmd_own_attendance" runat="server" CssClass="btn btn-link"
                                    Text="Own Attendance" OnClientClick="ShowHidePanel('2'); return false;" /></a>
              </li>
				<li class="has-submenu">
                 <a><i class=" mdi mdi-hand-pointing-up"></i> <asp:Button ID="cmd_std_attendance" runat="server" CssClass="btn btn-link"
                                    Text="Student Attendance" OnClientClick="ShowHidePanel('3'); return false;" /></a>
              </li>
				<li class="has-submenu" style="display:none">
                 <a><i class="mdi mdi-reflect-vertical"></i> <asp:Button ID="cmd_lesson_plan" runat="server" CssClass="btn btn-link" 
                                    Text="Lesson Plan" OnClientClick="ShowHidePanel('6'); return false;"  /></a>
              </li>
				<li class="has-submenu" style="display: none"> 
                 <a><i class="mdi mdi-view-dashboard"></i> <asp:Button ID="cmd_mentor_detail" runat="server" CssClass="btn btn-link" style="display:none" Text="Mentor Detail" OnClientClick="ShowHidePanel('7'); PopulateMentorWiseStudentGrid(); return false;" /></a>
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
             <asp:Label ID="lbl_document_name" runat="server"  Text="Faculty Details" CssClass="color-white margin-left-10" ></asp:Label>
              </span> </h4>
          </div>
        </div>
      </div>
		
        <!--Routine Content Block-->
	   	<div class="row" id="div_routine_content_block">
          <div class="col-12">
				  <div class="card-box" id="panel-1">
                        <div class="row">
							<div class="col-md-11">
							   <div class="row">
						         	<div class="col-md-3">
								      <div class="form-group">
										  <label>From Date</label>
										  <asp:TextBox ID="dtp_from_date" CssClass="form-control" Placeholder="From Date" ReadOnly="false"
                                    runat="server"></asp:TextBox>
									  </div>
								    </div>
						        	<div class="col-md-3">
								      <div class="form-group">
										   <label>To Date</label>
										   <asp:TextBox ID="dtp_to_date" CssClass="form-control" Placeholder="To Date" ReadOnly="false"
                                    runat="server"></asp:TextBox>
									  </div>
								    </div>
                                   <div class="col-md-6">
								<label class="btn-block">&nbsp;</label>
							    <asp:Button runat="server" ID="cmd_view_date_wise_routine" Text="View Date Wise"
                                    Visible="true" CssClass="btn btn-info " OnClientClick="ViewDateWiseRoutine();  return false;">
                                </asp:Button>
								<asp:Button runat="server" ID="cmd_view_weekly_routine" Text="View Weekly" Visible="true"
                                    CssClass="btn btn-info " OnClientClick="ViewWeeklyRoutine(); return false;">
                                </asp:Button>
								 <asp:Button runat="server" ID="cmd_show_other_routine" Text="All Routines" Visible="true"
                                    CssClass="btn btn-info " OnClientClick="window.open('frmAllRoutineList.aspx'); return false;">
                                </asp:Button>
                                <asp:Button runat="server" ID="Button2" Text="Routine change" Visible="true"
                                    CssClass="btn btn-info " OnClientClick="window.open('frmTemporaryDateWiseRoutineCahnge.aspx?STAT=1'); return false;">
                                </asp:Button>
							</div>
						        	
								   <div class="col-md-6" style="display:none">
								      <div class="form-group">
										   <label>Select Display as</label>
										  <asp:TextBox ID="ctxt_routine_disp_type" CssClass="form-control mandatory-dropdown"
                                    Placeholder=" Select Display as" Enabled="false" Onkeyup="PopulateRoutineDispType(event); return false;" onclick="PopulateRoutineDispType(event); return false;" runat="server"></asp:TextBox>
                                   <div id="div_routine_disp_type" class="div_java_script_combo_sub"> </div>
									  </div>
								    </div>
								
								</div>
							</div>
							
                            <div class="col-md-1">
                               <div class="marks float-right">
                                        <div class="outof"><span ID="ctxt_cons_attd" ></span></div>
                                        <div class="totalmrks"><span ID="ctxt_cons_attd_total" ></span></div>
                                         
                                      </div>
                            </div>
                            
                        </div>
                  </div>
                        <div class="card-box">
                            <div class="table-responsive routine">
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
					<div class="row" id="div_own_att_content_block">
						<div class="col-4" id="panel-3">
							<div class="card-box">
                              <div class="row">
                            <div class="col-md-4">
								<div class="form-group">
									<label>From Date</label>
                                   <asp:TextBox ID="dtp_att_view_from_date" CssClass="form-control" Placeholder="From Date"
                                    runat="server"></asp:TextBox>
								</div>
                            </div>
                            <div class="col-md-4">
								<div class="form-group">
									<label>To Date</label>
                                <asp:TextBox ID="dtp_att_view_to_date" CssClass="form-control" Placeholder="To Date"
                                    runat="server"></asp:TextBox>
								</div>
                            </div>
                            <div class="col-md-4">
								<div class="form-group">
									<label>&nbsp;</label>
                                <asp:Button runat="server" ID="Button1" Text="View" Visible="true" CssClass="btn btn-info btn-block"
                                    OnClientClick="ViewOwnAttendance();  return false;"></asp:Button>
								</div>
                            </div>
                        </div>
							</div>
							<div class="calender-header p-3">
                           <div class="row">
                            <div class="col-md-2">
                                <asp:LinkButton ID="cmd_previous" runat="server" OnClientClick="Previous(); return false;"
                                    Text="" class="calender-prev"><i class="fa fa-chevron-left" style="font-size:14px"></i></asp:LinkButton>
                            </div>
                            <div class="col-md-8 text-center font-22">
                                <asp:Label ID="Label_month" runat="server" Text="Month"></asp:Label>,
                                <asp:Label ID="Label_year" runat="server" Text="Year"></asp:Label>
                            </div>
                            <div class="col-md-2">
                                <asp:LinkButton ID="cmd_next" runat="server" OnClientClick="Next(); return false;"
                                    Text="" class="calender-next" ><i class="fa fa-chevron-right" style="font-size:14px"></i></asp:LinkButton>
                            </div>
							 </div>
                          </div>
							<div class="row text-center bg-white">
                            <div class="col-md-12">
							 <div id="div_monthly_attendance"></div>
                             <div id="div_get_faculty_day_period_det" class="div_java_script_combo_sub"></div>
						 </div>
                        </div>
				    	</div>
					    <div class="col-8">
							<div class="card-box">
                                <div class="table-responsive">
								 <div id="div_monthly_attendance_date"> </div>
								</div>
							</div>
				    	</div>
					</div>
                <!--Student Attendance Content Block-->
                <div id="div_student_attendance_content_block">
                    <div id="content3" class="padding-20">
                        <div class="panel panel-default">
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-3">
										 <div class="card-box">
                                        <div class="row">
                                            <div class="col-md-12">
												<div class="form-group">
													<label>By Name</label>
                                                <asp:TextBox ID="ctxt_order_by" Onkeyup="PopulateOrderBy(event); return false;" onclick="PopulateOrderBy(event); return false;"
                                                    Placeholder="Order By" CssClass="form-control"  runat="server"></asp:TextBox>
                                                <div id="div_PopulateOrderBy" class="div_java_script_combo_sub">
                                                </div>
												</div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="table-responsive">
                                                    <asp:Panel runat="server" ID="m_panel_associated_periods">
                                                    </asp:Panel>
                                                </div>
                                            </div>
                                        </div>
										<h4 class="header-title mb-1 mt-3">Remarks:</h4>
                                        <div class="row">
                                            <div class="col-md-12">
												<div class="form-group">
                                                <asp:TextBox ID="ctxt_remarks" Placeholder="Please enter Remarks and click Set All for All Students otherwise enter on respective Box"
                                                    TextMode="MultiLine" CssClass="form-control"  runat="server"></asp:TextBox>
												</div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <asp:Button runat="server" ID="cmd_set_remarks_all" Text="Set All" Visible="true"
                                                    CssClass="btn btn-info btn-3d fullwidth" OnClientClick="SetRemarksToAll(); return false;">
                                                </asp:Button>
                                            </div>
                                        </div>
										<h4 class="header-title  mb-1 mt-3">Topic:</h4>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <asp:TextBox ID="ctxt_topic" 
                                                    TextMode="MultiLine" Enabled="false" CssClass="form-control"  runat="server"></asp:TextBox>
                                            </div>
                                        </div>
										<h4 class="header-title  mb-1 mt-3">Topic Delivered:</h4>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <asp:TextBox ID="ctxt_topic_delivered" Placeholder="Please enter Topic delivered in the class room click on Save Button"
                                                    TextMode="MultiLine" CssClass="form-control"  runat="server"></asp:TextBox>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <asp:CheckBox Text="Generate QR Code" Font-Size="20px" style="font-weight:bold" runat="server" CssClass="text-red text-left"
                                                Checked="false" ID="chk_gen_qrcode" />
                                            </div>
                                        </div>
										</div>


                                    </div>
                                    <div class="col-md-9">
										<div class="row">
                                         <div class="col-md-12">
											 <div class="p-2 bg-soft-primary">
                                        <asp:Button runat="server" ID="cmd_select_all" Text="Select All" Visible="true" CssClass="btn btn-info btn-3d fullwidth"
                                            OnClientClick="SelectAll(); return false;"></asp:Button>
											  <asp:Button runat="server" ID="cmd_desellect_all" Text="Deselect All" Visible="true"
                                            CssClass="btn btn-info btn-3d fullwidth" OnClientClick="DeSelectAll(); return false;">
                                        </asp:Button>
                                    </div>
											 </div>
                                       </div>
										<div class="card-box">
											
                                         <div class="table-responsive">
                                            <asp:Panel runat="server" ID="m_panel_student_att" CssClass="panel_color" Width="100%"
                                                Height="400px" ScrollBars="Both">
                                            </asp:Panel>
                                        </div>
											
										</div>
										<div class="row">
                                    <div class="col-md-4">
                                        <asp:Button runat="server" ID="cmd_save" Text="Save" Visible="true" CssClass="btn btn-info btn-3d fullwidth"
                                            OnClientClick="SaveStudentAttendance(); return false;"></asp:Button>
                                        <asp:Button runat="server" ID="cmd_cancel" Text="Cancel" Visible="true" CssClass="btn btn-info btn-3d fullwidth"
                                            OnClientClick="ResetAll(); return false;"></asp:Button>
                                    </div>
                                </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                <!--Lesson Plan Block-->
                <div id="div_lesson_plan_block">
                    <!-- panel content -->
                    <div id="Div3" class="">
                    <div class="card-box">
                        <div class="row">
                            <div class="col-md-2">
                                <asp:TextBox ID="ctxt_subject_code" CssClass="form-control" Placeholder="Paper Code" 
                                    runat="server"></asp:TextBox>
                            </div>

                            <div class="col-md-2">
                                <asp:TextBox ID="dtp_from_date_class" CssClass="form-control" Placeholder="From Date" 
                                    runat="server"></asp:TextBox>
                            </div>

                            <div class="col-md-2">
                                <asp:TextBox ID="ctxt_syllabus_details" CssClass="form-control mandatory-dropdown" Placeholder="Select Syllabus" 
                                   Onkeyup="PopulateSyllabus(event); return false;" onclick="PopulateSyllabus(event); return false;"
                                    runat="server"></asp:TextBox>

                                <div id="div_syllabus" class="div_java_script_combo_sub">
                                </div>
                            </div>

                          <div class="col-md-2">
                                <asp:TextBox ID="ctxt_syllabus_topic" CssClass="form-control"  
                                    runat="server"></asp:TextBox>
                            </div>

                           <div class="col-md-2">
                                <asp:TextBox ID="cntxt_lecture_no" CssClass="form-control" type="number" Placeholder="Enter Lecture No" 
                                    runat="server"></asp:TextBox>
                            </div>



                            <div class="col-md-2" style="display:none">
                                <asp:TextBox ID="dtp_to_date_class" CssClass="form-control" Placeholder="To Date" 
                                    runat="server"></asp:TextBox>
                            </div>

                            <div class="col-md-2" style="display:none">
                                <asp:Button runat="server" ID="cmd_view_class" Text="View Date Wise class"
                                    Visible="true" CssClass="btn btn-info btn-3d fullwidth" OnClientClick="View_Date_Wise_class(); return false;">
                                </asp:Button>
                            </div>
                            <div class="col-md-2 text-right">
                                 <asp:Button runat="server" ID="cmd_save_lesson_plan" Text="Save"
                                    Visible="true" CssClass="btn btn-info btn-3d fullwidth" OnClientClick="Save_Lesson_Plan_New(); return false;">
                                </asp:Button>
                            </div>
                        </div>
                    </div>
                    <div class="card-box">
                        <div class="row">
                            <div class="col-md-2">
                                <asp:TextBox ID="ctxt_resource_type" CssClass="form-control mandatory-dropdown" Placeholder="Select Resource Type" 
                                   Onkeyup="PopulateResourceType(event); return false;" onclick="PopulateResourceType(event); return false;"
                                    runat="server"></asp:TextBox>

                                <div id="div_resource_type" class="div_java_script_combo_sub">
                                </div>
                            </div>

                            <div class="col-md-2">
                                <asp:TextBox ID="ctxt_resource_desp" CssClass="form-control"   Placeholder="Description"
                                    runat="server"></asp:TextBox>
                            </div>    
                            
                            <div class="col-md-2">
                                <asp:TextBox ID="ctxt_resource_link" CssClass="form-control"   Placeholder="External Link"
                                    runat="server"></asp:TextBox>
                            </div>  
                            
                            <div class="col-md-3 uplod">
                                <label style="visibility:hidden" class="btn btn-primary" onclick="OpenJisResWnd(); return false;">JIS(Repository)</label>
                                <input type="file" id="upload_file_id" name="upload_file_name" onchange="UploadDocFile(); return false;" hidden />
                                <label  id="btn_upload_file_id" for="upload_file_id" class="btn btn-primary" ><i class='fa fa-upload'></i> Choose file</label>
                                <label class="btn btn-warning" id="cmd_progress_bar" style="display:none">%</label>
                            </div>      
                                                   
                                                                                  
                                      
                          <div class="col-md-3 text-right">
                                 <asp:Button runat="server" ID="cmd_resource_save" Text="Save"
                                    Visible="true" CssClass="btn btn-info btn-3d fullwidth" OnClientClick="SaveLessonPlanResource(); return false;">
                                </asp:Button>
                                 <asp:Button runat="server" ID="cmd_resource_reset" Text="Reset"
                                    Visible="true" CssClass="btn btn-info btn-3d fullwidth" OnClientClick="ResetResourceCtrl(); return false;">
                                </asp:Button>
                                 <asp:Button runat="server" ID="cmd_resource_del" Text="Delete"
                                    Visible="true" CssClass="btn btn-info btn-3d fullwidth" OnClientClick="DeleteLessonPlanResource(); return false;">
                                </asp:Button>
                            </div>                            
                            
                                                                                
                        </div>
                    </div>
                    <div class="card-box">
                        <div class="panel-body padding-top-0">
                            <div class="table-responsive">
                                <div id="div_date_wise_class_container">
                                    <div class="panel_subject">
                                       <asp:Panel ID="m_panel_classes_det" runat="server" CssClass="panel_color" width="100%" Height="400px" ScrollBars="Both"></asp:Panel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                    </div>
                <!---Mentor_bolck------>
		<!---------------- popup-------------------->


		<!---------------- popup-------------------->
		
		
		
		
		
                <div id="div1">
                    <!-- panel content -->
                    <div id="div_mentor_wise_student" class="panel panel-default dashboard  padding-20">
                        <div class="row">
                            <div class="col-md-2">
                                <asp:Label ID="Label_mentor" runat="server" Text="MentorShip Details" 
                                    ForeColor="#6600FF" Height="4px"></asp:Label>
                            </div>
                        </div>
                        <div class="panel-body padding-top-0">
                            <div class="table-responsive">
                                <div id="div5">
                            <div class="panel_subject">
                               <asp:Panel ID="m_panel_Student_list_mentor" runat="server" CssClass="panel_color" width="100%" Height="400px" ScrollBars="Both"></asp:Panel>
                            </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>

                <div>
                    <asp:HiddenField ID="cntxt_college_id" Value="0" runat="server" />
                    <asp:HiddenField ID="cntxt_branch_id" Value="0" runat="server" />
                    <asp:HiddenField ID="ctxt_emph_code" Value="" runat="server" />
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

                    
                </div>
            </ContentTemplate>
        </asp:UpdatePanel>
        </form>
	 <!-- Vendor js -->

        <script type="text/javascript"  src="assets-new/js/vendor.min.js"></script>



 <script type="text/javascript" >

     $(document).ready(function () {

         $(function () {
             $("#dtp_from_date").datepicker({
                 dateFormat: 'dd/mm/yy'
             });

             $("#dtp_to_date").datepicker({
                 dateFormat: 'dd/mm/yy'
             });

             $("#dtp_from_date").click(function () {
                 document.getElementById("ui-datepicker-div").style.zIndex = "999";
             });

             $("#dtp_to_date").click(function () {
                 document.getElementById("ui-datepicker-div").style.zIndex = "999";
             });

         });
     })
    </script>

   <link type="text/css"  href="JavaScript/Jquery/jquery-ui.css" rel="stylesheet"/>    
    <script type="text/javascript" src="JavaScript/Jquery/jquery.min.js" ></script>      
    <script type="text/javascript" src="JavaScript/Jquery/jquery-ui.min.js" ></script>

</body>
</html>
