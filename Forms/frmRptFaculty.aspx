<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmRptFaculty.aspx.cs" Inherits="Forms_frmRptFaculty" %>


<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rpt Faculty</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/CalenderCtrlScript.js"></script>
    <script type="text/javascript" src="JavaScript/RptFaculty.js?version=2"></script>
    <script type="text/javascript" src="JavaScript/ReportList.js"></script> 
    <script type="text/javascript" src="JavaScript/TopMenu.js?version=1"></script>

    <link href="assets-new/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets-new/css/app.min.css" rel="stylesheet" type="text/css"   />
    <link href="assets-new/css/calender.css" rel="stylesheet" type="text/css" />
</head>
<body onload="SetWindow(1024,768); Init();" onkeyup="CheckKeyUp(event);"
 onkeydown="CheckKeyDown(event);" onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);" class="center-menu">
        <form id="form1" runat="server">
            <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server">
                <Services>
                    <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                    <asp:ServiceReference Path="~/Forms/WebServiceReport.asmx" /> 
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
          <li class="dropdown notification-list"> <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false"> <img src="assets-new/images/users/noavatar.jpg" alt="user-image" class="rounded-circle"> <span class="d-none d-sm-inline-block ml-1 font-weight-medium" id="ctxt_user_name">Admin</span> <i class="mdi mdi-chevron-down d-none d-sm-inline-block"></i> </a>
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
    
    <div class="topbar-menu">
      <div class="container-fluid">
        <div id="navigation">
          <div class="clearfix"></div>
        </div>
        <!-- end #navigation --> 
      </div>
      <!-- end container --> 
    </div>
    <!-- end navbar-custom --> 
    
  </header>
    <div class="wrapper">
    <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="page-title-box">
              <h4 class="page-title"> <span>
                <asp:Label ID="lbl_document_name" runat="server"  Text="Faculty Wise Reports" ></asp:Label>
                </span> </h4>
            </div>
          </div>
        </div>
        <div class="row">
           <div class="col-sm-12">
            <div class="card-box">
            <div class="row">

                        <div class="col-md-3">
                            <label>From Date (dd/mm/yyyy)</label>
                            <div class="input-group">
                                <asp:TextBox ID="dtp_from_date" CssClass="form-control" runat="server" ></asp:TextBox>
                                <div class="input-group-append" OnClick="InitCalender('dtp_from_date', 'div_from_date', GetDateToday()); return false;">
                                        <span class="input-group-text"><i class="icon-calender"></i></span>
                                  </div>
                            </div>

                            <div  id="div_from_date" class="calender-newdesign"></div>
                        </div>

                        <div class="col-md-3">
                            <label>To Date (dd/mm/yyyy)</label>
                            <div class="input-group">
                                <asp:TextBox ID="dtp_to_date" CssClass="form-control" runat="server" ></asp:TextBox>
                                <div class="input-group-append" OnClick="InitCalender('dtp_to_date', 'div_to_date', GetDateToday()); return false;">
                                        <span class="input-group-text"><i class="icon-calender"></i></span>
                                  </div>
 
                            </div>

                            <div  id="div_to_date" class="calender-newdesign"></div>
                        </div>

                        <div class="col-md-4">
                            <label>Departmemt</label>
                            <asp:TextBox ID="ctxt_department_name" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>

                        <div class="col-md-1">
                            <label>From %</label>
                            <asp:TextBox ID="cntxt_from_val" style="text-align:right" Text="0" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>

                        <div class="col-md-1">
                            <label>To %</label>
                            <asp:TextBox ID="cntxt_to_val" Text="100" style="text-align:right" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>
                        </div>
                    </div>
                     </div>
                      </div>


     


                    <div class="row">
                        <div class="col-md-10">
                            <asp:Button ID="cmd_print_faculty_summ" runat="server" CssClass="btn btn-primary"
                            OnClientClick="PrintFacultyAttdSumm(); return false;" Text="Faculty Wise Attendance Summary" />

                            <asp:Button ID="cmd_print_faculty_matrix" runat="server" CssClass="btn btn-primary"
                            OnClientClick="PrintFacultyAttdMatrix(); return false;" Text="Faculty Wise Attendance Matrix" />

                            <asp:Button ID="cmd_cancle" runat="server" CssClass="btn btn-primary"
                            OnClientClick="Cancel(); return false;" Text="Cancle" />

                            <asp:Button ID="cmd_close" runat="server" CssClass="btn btn-primary"
                            OnClientClick="ExitWindow(); return false;" Text="Close" />
                        </div>               

                        
                        <div class="col-md-2 text-right">
                            <div style="background: #48afda; border-radius: 6px;">
                            <asp:RadioButtonList style="height:50px" ID="radio_pdf_xls" runat="server"
                                RepeatDirection="Horizontal" 
                                CellSpacing="-1">
                                <asp:ListItem Selected="True" style="margin-left:5px; margin-right:10px" Text="Report In Pdf"></asp:ListItem>
                                <asp:ListItem style="margin-right:5px;" Text="Excel"></asp:ListItem>
                            </asp:RadioButtonList>
                            </div>
                        </div>
                    </div>

                    

                </div>
            </div>
  
        <div id="m_DivPanelHiddenField" runat="server">
            <div style="display: inherit">
                <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_user_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_user_name" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_g_dept_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_faculty_dept_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_back_office_user_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_menu_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_course_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_semester_type_id" runat="server" Value="-1" />

                <asp:HiddenField ID="cntxt_batch_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_stream_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_section_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_access_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_sem_id" runat="server" Value="0" />
                <asp:HiddenField ID="ctxt_college_name" runat="server" Value="" />

                <asp:HiddenField ID="ctxt_sem_name" runat="server" Value="" />
                <asp:HiddenField ID="ctxt_sec_name" runat="server" Value="" />

            </div>
        </div>
    </div>
</div>
        
        </form>
</body>
</html>
