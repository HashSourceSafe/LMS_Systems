<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Copy of frmTemporaryDateWiseRoutineCahnge.aspx.cs"
    Inherits="Forms_frmTemporaryDateWiseRoutineCahnge" %>

<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temporary Routine Change Preparation</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/TemporaryDateWiseRoutineCahnge.js?version=2"></script>
    <script type="text/javascript" src="JavaScript/CalenderCtrlScript.js"></script>
	<script type="text/javascript" src="JavaScript/TopMenu.js"></script>
   
	<link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
	<link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />
</head>
<body onload="SetWindow(1024,768); Init();" onkeyup="CheckKeyUp(event);"
    onkeydown="CheckKeyDown(event);" onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);"  class="center-menu">

        <form id="form1" runat="server">
        <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server">
                <Services>
                    <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                    <asp:ServiceReference Path="~/Forms/WebServiceTemporaryDateWiseRoutineCahnge.asmx" />
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
          <div class="col-md-12">
            <div class="page-title-box">
              <h4 class="page-title text-center"> 
                  <span id="div_lbl_document_name">
                     <asp:Label ID="lbl_document_name" runat="server"  Text="" ></asp:Label>
                </span> 
               </h4>
            </div>
          </div>
        </div>
                <%--Approve Block--%>
                <div class="panel panel-default" id="div_approve_block">
            <div class="row">
                <div class="table-responsive">
                    <asp:Panel runat="server" ID="m_panel_populate_approval_list">
                    </asp:Panel>
                </div>
            </div>
        </div>
				<div id="div_preparation_block">
					<div class="row justify-content-center">
						<div class="col-md-4">
							 <div class="card-box">
							<asp:Label ID="Label1" CssClass="bg-white" runat="server" Text="Routine Change Activity :"></asp:Label>
                            <asp:TextBox ID="ctxt_routine_action_name" Placeholder="Type of Temp.Routine Change"
                                Onkeyup="PopulateRoutineActivity(event); return false;" onclick="PopulateRoutineActivity(event); return false;"
                                CssClass="form-control" runat="server"></asp:TextBox>
                            <div id="div_PopulateRoutineActivity" class="div_java_script_combo_sub" style="left:30px">
						</div>
					   </div>	
					</div>
                <%--Preparation Block--%>
                
            <%--Activity Button Block--%>
            </div>
					 <div class="row">
                        <div class="col-md-2">
                            <asp:Label ID="lbl_activity" runat="server" Text=""></asp:Label>
                        </div>
                    </div>
					<div class="row justify-content-center">
						<div class="col-md-12">
				     	<div class="card-box" id="div_Containt_textbox">
				        	<div class="row">
						<div class="col-md-3" id="div_textbox_from_faculty_dept">
							<div class="form-group">
							<lable>From Department</lable>
							<asp:TextBox ID="ctxt_from_faculty_dept" Placeholder="From Department" Onkeyup="PopulateFromFacultyDept(event); return false;"
								onclick="PopulateFromFacultyDept(event); return false;" CssClass="form-control"
								runat="server"></asp:TextBox>
								<div id="div_from_faculty_dept" class="div_java_script_combo_sub"> </div>
							</div>
						</div>
						<div class="col-md-3" id="div_textbox_to_faculty_dept">
							<div class="form-group">
                                <lable>To Department</lable>
                                        <asp:TextBox ID="ctxt_to_faculty_dept" Placeholder="To Department" Onkeyup="PopulateToFacultyDept(event); return false;"
                                            onclick="PopulateToFacultyDept(event); return false;" CssClass="form-control"
                                            runat="server"></asp:TextBox>
                                        <div id="div_to_faculty_dept" class="div_java_script_combo_sub"> </div>
                                        </div>
                                </div>
						<div class="col-md-3" id="div_textbox_from_faculty">
							<div class="form-group">
										<lable>From Faculty</lable>
                                        <asp:TextBox ID="ctxt_from_faculty" Placeholder="From Faculty" Onkeyup="PopulateFromFaculty(event); return false;"
                                            onclick="PopulateFromFaculty(event); return false;" CssClass="form-control" runat="server"></asp:TextBox>
                                        <div id="div_from_faculty_name" class="div_java_script_combo_sub"></div>
                                        </div>
                                    </div>
						<div class="col-md-3" id="div_textbox_to_faculty">
							<div class="form-group">
										<lable>To Faculty</lable>
                                        <asp:TextBox ID="ctxt_to_faculty" Placeholder="To Faculty" Onkeyup="PopulateToFaculty(event); return false;"
                                            onclick="PopulateToFaculty(event); return false;" CssClass="form-control" runat="server"></asp:TextBox>
                                        <div id="div_to_faculty_name" class="div_java_script_combo_sub"></div>
                                        </div>
                                    </div>
						<div class="col-md-3" id="div_textbox_from_date">
							<div class="form-group">
										<lable>From Date</lable>
                                        <asp:TextBox ID="dtp_from_date" Placeholder="From Date" CssClass="form-control"
                                            runat="server" OnClick="InitCalender('dtp_from_date', 'div_from_date', GetDateToday()); return false;">
                                        </asp:TextBox>
                                        <div id="div_from_date" class="div_java_date"></div>
                                        </div>
                                    </div>
						<div class="col-md-3" id="div_textbox_to_date">
							<div class="form-group">
										<lable>To Date</lable>
                                        <asp:TextBox ID="dtp_to_date" Placeholder="To Date" CssClass="form-control" runat="server"
                                            OnClick="InitCalender('dtp_to_date', 'div_to_date', GetDateToday()); return false;"></asp:TextBox>
                                        <div id="div_to_date" class="div_java_script_combo_sub"></div>
                                        </div>
                                    </div>
						<div class="col-md-3">
							<div class="form-group">
							<lable>From Period</lable>
                                        <asp:TextBox ID="ctxt_from_period" Placeholder="From Period" Onkeyup="PopulateFromPeriod(event); return false;"
                                            onclick="PopulateFromPeriod(event); return false;" CssClass="form-control" runat="server"></asp:TextBox>
                                        <div id="div_populate_from_period" class="div_java_script_combo_sub"></div>
                                        </div>
                                    </div>
						<div class="col-md-3" id="div_textbox_to_period">
							<div class="form-group">
								<lable>To Period</lable>
                                        <asp:TextBox ID="ctxt_to_period" Placeholder="To Period" Onkeyup="PopulateToPeriod(event); return false;"
                                            onclick="PopulateToPeriod(event); return false;" CssClass="form-control" runat="server"></asp:TextBox>
                                        <div id="div_populate_to_period" class="div_java_script_combo_sub"> </div>
                                        </div>
                                    </div>
						<div class="col-md-3" id="div_textbox_remarks">
							 <div class="form-group">
								 <lable>Remarks</lable>
							<asp:TextBox ID="ctxt_remarks" Placeholder="Remarks" CssClass="form-control" runat="server"></asp:TextBox>
								 </div>
						</div>
					  </div>
					     </div>
					   </div>	
					</div>
					<div class="row justify-content-center">
						<div class="col-md-6" id="m_div_from_period_grid">
							 <div class="card-box" id="m_div_from_faculty">
							  <div class="table-responsive">
                                        <input type="text" id="head_from_faculty" class="form-control" readonly="readonly"/>
                                        <asp:Panel runat="server" ID="m_panel_from_faculty" CssClass="panel-body" ScrollBars="Vertical">
                                        </asp:Panel>
                                    </div>
							</div>
						</div>
						<div class="col-md-6" id="m_div_to_period_grid">
							 <div class="card-box" id="m_div_to_faculty_Det_panel">
							    <div class="table-responsive">
                                    <input type="text" id="head_to_faculty" class="form-control" readonly="readonly"/>
                                    <asp:Panel runat="server" ID="m_panel_to_faculty" CssClass="panel-body" ScrollBars="Vertical">
                                        </asp:Panel>
                                    </div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 text-center">
                               <a id="div_show">
                                <asp:Button ID="cmd_show" runat="server" CssClass="btn btn-primary"
                                    OnClientClick="Show(); return false;" Text="Show" />
                            </a>
                            <a id="div_confirm">
                                <asp:Button ID="cmd_confirm" runat="server" CssClass="btn btn-primary"
                                    OnClientClick="Confirm(); return false;" Text="Confirm" />
                            </a>
                            <a>
                                <asp:Button ID="cmd_save" runat="server" CssClass="btn btn-primary"
                                    OnClientClick="SaveData(); return false;" Text="Save" />
                            </a>
                             <a id="div_cancle">
                                <asp:Button ID="cmd_cancel" runat="server" CssClass="btn btn-primary"
                                    OnClientClick="Cancel(); return false;" Text="Cancel" />
                            </a>
                            <a id="div_reject">
                                <asp:Button ID="cmd_reject" runat="server" CssClass="btn btn-primary"
                                    OnClientClick="Reject(); return false;" Text="Reject" />
                            </a>
                           <a>
                        <asp:Button ID="cmd_close" runat="server" CssClass="btn btn-primary"
                        OnClientClick="LoadHomePage(); return false;" Text="Back" />
                    </a>
                        </div>
 </div>
					
					
					
            <div class="panel panel-default" id="div1">
                <%--Activity Button Block--%>
                <div class="panel-body">
                    <div id="Div2" class="padding-20">
                        <%--Content Block--%>
                        
                        <%--Button Block--%>
                        
                    </div>
                </div>
            </div>
            <div>
                <asp:HiddenField ID="cntxt_college_id" Value="0" runat="server" />
                <asp:HiddenField ID="ctxt_cost_code" Value="" runat="server" />
                <asp:HiddenField ID="cntxt_change_status_type" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_activity_type" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_from_faculty_dept_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_to_faculty_dept_id" Value="0" runat="server" />

                <asp:HiddenField ID="ctxt_from_emph_code" Value="0" runat="server" />
                <asp:HiddenField ID="ctxt_from_emph_name" Value="" runat="server" />
                <asp:HiddenField ID="cntxt_from_period_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_batch_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_from_subject_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_from_course_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_from_stream_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_from_sem_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_from_section_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_from_group_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_from_day_id" Value="0" runat="server" />
                <asp:HiddenField ID="ctxt_from_faculty_shrt_name" Value="" runat="server" />

                <asp:HiddenField ID="ctxt_to_emph_code" Value="0" runat="server" />
                <asp:HiddenField ID="ctxt_to_emph_name" Value="" runat="server" />
                <asp:HiddenField ID="cntxt_to_period_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_to_subject_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_to_course_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_to_stream_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_to_sem_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_to_section_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_to_group_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_to_day_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_to_batch_id" Value="0" runat="server" />
                <asp:HiddenField ID="ctxt_to_faculty_shrt_name" Value="" runat="server" />

                <asp:HiddenField ID="cntxt_action_value" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_user_status_val" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_check_prv_entry_stat" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_user_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_user_name" Value="" runat="server" />
                <asp:HiddenField ID="cntxt_g_dept_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_doc_id" Value="0" runat="server" />
                <asp:HiddenField ID="cntxt_error_value" Value="1" runat="server" />
                <asp:HiddenField ID="ctxt_entry_date" Value="" runat="server" />
                <asp:HiddenField ID="cntxt_btn_action_value" Value="1" runat="server" /> <%-----its a flag use for pending,acept,reject--%>
                <asp:HiddenField ID="cntxt_is_class_taken" Value="0" runat="server" /> <%-----its a flag use for Attendance given or not--%>
                <asp:HiddenField ID="cntxt_save_ctr" Value="0" runat="server" />
            </div>
        </div>
			  </div>
			</div>
        </form>

</body>
</html>