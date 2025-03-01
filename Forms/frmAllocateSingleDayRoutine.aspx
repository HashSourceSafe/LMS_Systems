<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmAllocateSingleDayRoutine.aspx.cs" Inherits="Forms_frmAllocateSingleDayRoutine" %>


<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Allocate Single Day Routine</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/CalenderCtrlScript.js"></script>
    <script type="text/javascript" src="JavaScript/AllocateSingleDayRoutine.js?version=7"></script>
    <script type="text/javascript" src="JavaScript/TopMenu.js"></script>


    <link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />
</head>
<body onload="SetWindow(1024,768); Init();" onkeyup="CheckKeyUp(event);" onkeydown="CheckKeyDown(event);"
    onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);"  class="center-menu">
        <form id="form1" runat="server">
        <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server">
                <Services>
                    <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                    <asp:ServiceReference Path="~/Forms/WebServiceDateWiseRoutineAllocation.asmx" />
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
                    <asp:Label ID="Label5" runat="server"  Text="Routine Allocation Single Day" ></asp:Label>
                </span> 
               </h4>
            </div>
          </div>
        </div>
             <div class="card-box" id="m_UpdatePanelHeader" runat="server">
               <div class="row">
                            <div class="col-md-2">
                             <div class="form-group">
                                Select Sem Type
                                <asp:TextBox ID="ctxt_semester_type" 
                                Placeholder="Semester Type:" 
                                Onkeyup="PopulateSemesterType(event); return false;"  
                                onclick="PopulateSemesterType(event); return false;"  
                                CssClass="form-control" runat="server"></asp:TextBox>

                                <div id="div_semester_type" class="div_java_script_combo_sub">
                                </div>
                                </div>
                            </div>

                            <div class="col-md-2">
                             <div class="form-group">
                                Enter Faculty Code
                                <asp:TextBox runat="server" ID="ctxt_search_faculty_code" CssClass="form-control" Placeholder="Enter Faculty Code" ></asp:TextBox>
                                </div>
                            </div>

                           <div class="col-md-2">
                            <div class="form-group">
                                Enter Paper Code
                                <asp:TextBox ID="ctxt_paper_code" 
                                Placeholder="Paper Code:" 
                                CssClass="form-control" runat="server"></asp:TextBox>
                                </div>
                            </div>




                            <div class="col-md-2" style="display:none">
                             <div class="form-group">
                                Enter Faculty Name
                                <asp:TextBox runat="server" ID="ctxt_faculty_name" CssClass="form-control" Placeholder="Enter Faculty Name" ></asp:TextBox>
                                </div>
                            </div>

                            <div class="col-md-2">
                             <div class="form-group">
                                From Date (dd/mm/yyyy)
                                <div class="input-group calender">
                                    <asp:TextBox ID="dtp_from_date" CssClass="form-control" runat="server" ></asp:TextBox>
                                    <div class="input-group-append" OnClick="InitCalender('dtp_from_date', 'div_from_date', GetDateToday()); return false;">
                                    <span class="input-group-text"><i class="mdi mdi-calendar"></i></span>
                                    </div>
                                    </div>
                                </div>

                                <div  id="div_from_date"></div>
                            </div>

                            <div class="col-md-2">
                             <div class="form-group">
                                To Date (dd/mm/yyyy)
                                <div class="input-group calender">
                                    <asp:TextBox ID="dtp_to_date" CssClass="form-control" runat="server" ></asp:TextBox>
                                    <div class="input-group-append" OnClick="InitCalender('dtp_to_date', 'div_to_date', GetDateToday()); return false;">
                                     <span class="input-group-text"><i class="mdi mdi-calendar"></i></span>
                                    </div>
                                    </div>
                                </div>

                            <div  id="div_to_date"></div>
                        </div>

                        <div class="col-md-2">
                            Enter Password
                            <asp:TextBox ID="ctxt_password" TextMode="Password"
                            Placeholder="Enter Password" 
                            CssClass="form-control" runat="server"></asp:TextBox>
                        </div>



                        </div>
               <div class="row">
 
                             <div class="col-md-12">
                             <div class="form-group">
                                <label>Message</label>
                                <asp:TextBox ID="ctxt_message" CssClass="form-control" runat="server"></asp:TextBox>
                                </div>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-md-12 text-center">
                                &nbsp
                                <asp:Button ID="cmd_show_add_mode" runat="server" CssClass="btn btn-primary"
                                    OnClientClick="ShowAddDel('2'); return false;" Text="Show Add (Routine Change)" />

                                <asp:Button ID="cmd_show_del_mode" runat="server" CssClass="btn btn-primary"
                                    OnClientClick="ShowAddDel('1'); return false;" Text="Show Delete (Routine Change)" />

                                <asp:Button ID="cmd_show_class_del" runat="server" CssClass="btn btn-clean btn-3d fullwidth"
                                    OnClientClick="ShowAddDel('3'); return false;" Text="Show Class Delete (Force Delete)" style="display:none" />

                                <asp:Button ID="cmd_close" runat="server" CssClass="btn btn-primary"
                                    OnClientClick="ExitWindow(); return false;" Text="Close" />
                            </div>

                            <div class="col-md-2" style="display:none">
                                From Search Date
                                <div class="input-group">
                                    <asp:TextBox ID="dtp_from_search_date" CssClass="form-control" runat="server" ></asp:TextBox>
                                    <div class="input-group-addon" OnClick="InitCalender('dtp_from_search_date', 'div_from_search_date', GetDateToday()); return false;">
                                    <i class="fa fa-calendar"></i>
                                    </div>
                                </div>

                                <div  id="div_from_search_date"></div>
                            </div>

                            <div class="col-md-2" style="display:none">
                                To Search Date
                                <div class="input-group">
                                    <asp:TextBox ID="dtp_to_search_date" CssClass="form-control" runat="server" ></asp:TextBox>
                                    <div class="input-group-addon" OnClick="InitCalender('dtp_to_search_date', 'div_to_search_date', GetDateToday()); return false;">
                                    <i class="fa fa-calendar"></i>
                                    </div>
                                </div>

                            <div  id="div_to_search_date"></div>
                        </div>


                        </div>
               </div>
             <div class="card-box" id="m_UpdatePanelSearchSubject" runat="server">
             <div class="table-responsive">
                            <asp:Panel runat="server" ID="m_panel_faculty_list" style=" max-height:200px;">
                            </asp:Panel>
                        </div>
             </div>
          </div>
       </div>

        




        <div id="m_UpdatePanelButton" class="panel-heading" tabindex="-1">
            <!-- right options -->
            <div class="row">

            </div>
        </div>


        <div id="m_UpdatePanelHiddenField" runat="server">
            <div style="display: inherit">
                <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_branch_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_academic_session_id" runat="server" Value="0" />

                <asp:HiddenField ID="cntxt_period_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_Batch" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_CourseId" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_StreamId" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_SectionId" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_SemesterId" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_SubjectId" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_GroupId" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_day_id" runat="server" Value="0" />
                <asp:HiddenField ID="ctxt_faculty_code" runat="server" Value="0" />

                <asp:HiddenField ID="cntxt_entry_type" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_semester_type_id" runat="server" Value="0" />
                <asp:HiddenField ID="is_routine_exist" runat="server" Value="0" />
                

                
            </div>
        </div>
        </form>
        <script src="assets-new/js/vendor.min.js"></script>
     <script src="assets-new/js/app.min.js"></script>
</body>
</html>
