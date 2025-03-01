<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmSubjectMaster.aspx.cs"
    Inherits="Forms_frmSubjectMaster" %>

    
<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subject Master</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/SubjectMaster.js?version=6"></script>    
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
                    <asp:ServiceReference Path="~/Forms/WebServiceSubjectMaster.asmx" />
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
    <!-- end Topbar -->    
    
  </header>   
        <div class="wrapper">
    <div class="container-fluid">     
    <div class="col-md-12">
          <div class="page-title-box">
            <h4 class="page-title">
              <span> <asp:Label ID="Label5" runat="server"  Text="SUBJECT MASTER" ></asp:Label></span>
            </h4>
          </div>
        </div>
      <div class="row justify-content-center">
          <div class="col-md-12">  
             
                <div id="m_UpdatePanelHeader" runat="server">
                  <div class="card-box">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="form-group">
                            <label>Course</label>
                            <asp:TextBox ID="ctxt_course_name" Onkeyup="SearchCourse(event); return false;" onclick="SearchCourse(event); return false;"
                                CssClass="form-control" runat="server" Placeholder="Select Course"></asp:TextBox>
                            <div id="div_course_name" class="div_java_script_combo_sub">
                            </div>
                          </div>
                        </div>

                        <div class="col-md-2">
                            <div class="form-group">
                            <label>Stream</label>
                            <asp:TextBox ID="ctxt_stream_name" Onkeyup="PopulateStream(event); return false;" onclick="PopulateStream(event); return false;"
                                CssClass="form-control" runat="server" Placeholder="Select Stream"></asp:TextBox>
                            <div id="div_stream_name" class="div_java_script_combo_sub">
                            </div>
                          </div>
                        </div>

                        <div class="col-md-2">
                          <div class="form-group">
                          <label>Subject Code</label>
                            <asp:TextBox ID="ctxt_subject_code" CssClass="form-control" onblur="DisplaySubjectDet(); SetValue('ctxt_is_save', '0');"
                                runat="server" Placeholder="Enter Subject Code" >
                            </asp:TextBox>
                          </div>
                        </div>

                        <div class="col-md-2">
                           <div class="form-group">
                           <label>Subject Name</label>
                            <asp:TextBox ID="ctxt_subject_name" CssClass="form-control" onblur="DisplaySubjectDet(); SetValue('ctxt_is_save', '0');"
                                runat="server" Placeholder="Enter Subject Name"  ></asp:TextBox>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div class="form-group">
                            <label>Subject Short Name</label>
                            <asp:TextBox ID="ctxt_sub_short_name" CssClass="form-control" onblur="SetValue('ctxt_is_save', '0');"
                                runat="server" Placeholder="Enter Subject Short Name"></asp:TextBox>
                            </div>
                        </div>

                      <div class="col-md-2">
                            <div class="form-group">
                            <label>Sem</label>
                            <asp:TextBox ID="cntxt_sem" type="number" CssClass="form-control" 
                                runat="server" Text="0" Placeholder="Enter Sem"></asp:TextBox>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-12">
                        <div class="table-responsive">
                            <asp:RadioButtonList ID="radio_theo_prac" runat="server" ForeColor="Black" Font-Bold="True"
                                RepeatDirection="Horizontal" BorderColor="Black" BorderStyle="None" CssClass="radio-btn">
                                <asp:ListItem Selected="True" Text="Lecture"></asp:ListItem>
                                <asp:ListItem Text="Practical/Sessional"></asp:ListItem>
                                <asp:ListItem Text="Tutorial"></asp:ListItem>
                                <asp:ListItem Text="GD/Seminar"></asp:ListItem>
                                <asp:ListItem Text="Project"></asp:ListItem>
                            </asp:RadioButtonList>
                            </div>
                        </div>
                       
                    </div>
                    <div class="row">
                     <div class="col-md-6">
                            <asp:CheckBox Checked="true" ID="chk_is_sub_active" runat="server" Font-Bold="True"
                                ForeColor="#3333CC" Text="Is Subject Active ?" />
                        </div>
                    </div>
                  </div>
                </div>
                <div id="m_UpdatePanelSearchSubject" runat="server">
                     <div class="card-box">
                                <div class="table-responsive">
                                    <asp:Panel runat="server" ID="m_panel_subject_det_search_window">
                                    </asp:Panel>
                        </div>
                    </div>
                </div>
                <div id="m_UpdatePanelButton" class="panel-heading" tabindex="-1">
                    <!-- right options -->
                    <div class="row mb-2">
                        <div class="col-md-12 text-center">
                            <asp:Button ID="cmd_save" runat="server" CssClass="btn btn-primary"
                                OnClientClick="SaveData(); return false;" Text="Save" />

                            <asp:Button ID="cmd_cancel" runat="server" CssClass="btn btn-primary"
                                OnClientClick="Cancel(); return false;" Text="Cancel" />

                            <asp:Button ID="cmd_close" runat="server" CssClass="btn btn-primary"
                                OnClientClick="LoadHomePage(); return false;" Text="Back" />

                            <%--<div class="div_button_block" style="width:10%">
                                                    <asp:Button ID="cmd_delete" runat="server" CssClass="cmd_button" 
                                                       OnClientClick="DeleteAll(); return false;" Text="Delete" />
                                           </div>--%>
                        </div>
                    </div>
                </div>
                <div id="m_UpdatePanelHiddenField" runat="server">
                    <div style="display: inherit">
                        <asp:HiddenField ID="cntxt_course_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_branch_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_subject_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_is_theory" runat="server" Value="1" />
                        <asp:HiddenField ID="cntxt_is_active" runat="server" Value="1" />
                        <asp:HiddenField ID="cntxt_stream_id" runat="server" Value="0" />
                        
                    </div>
                </div>
              
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
