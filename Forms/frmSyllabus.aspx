<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmSyllabus.aspx.cs" Inherits="Forms_frmSyllabus" %>



<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Syllabus</title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/Syllabus.js?version=2"></script>    
    <script type="text/javascript" src="JavaScript/TopMenu.js"></script>
    <script src="JavaScript/Jquery/jquery-1.10.2.js" type="text/javascript"></script>


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
                    <asp:ServiceReference Path="~/Forms/WebServiceCoPoSetting.asmx" />                    
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
              <span> <asp:Label ID="Label5" runat="server"  Text="SYLLABUS SETTINGS" ></asp:Label></span>
            </h4>
          </div>
        </div>
      </div>

      <div class="row  justify-content-center">
          <div class="col-sm-12">  
             
                <div id="m_UpdatePanelHeader" runat="server">
                    <div class="row mb-3">
                       <div class="col-md-6">
                            <asp:Button ID="cmd_sys_entry" runat="server" OnClientClick="SelectBlock('1'); return false;" CssClass="btn btn-primary" Text="Syllabus Setting" />
                            <asp:Button ID="cmd_sys_upload" runat="server" OnClientClick="SelectBlock('2'); return false;" CssClass="btn btn-info" Text="Upload Through Excel" />
                       </div>
                    </div>
                    <div class="card-box">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                            <label>Select Batch</label>
                            <asp:TextBox ID="ctxt_period" Onkeyup="SearchPeriod(event); return false;" onclick="SearchPeriod(event); return false;"
                                CssClass="form-control mandatory-dropdown" runat="server" Placeholder="Select Batch"></asp:TextBox>
                            <div id="div_period" class="div_java_script_combo_sub">
                            </div>
                          </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                            <label>Select Course</label>
                            <asp:TextBox ID="ctxt_course_name" Onkeyup="SearchCourse(event); return false;" onclick="SearchCourse(event); return false;"
                                CssClass="form-control mandatory-dropdown" runat="server" Placeholder="Select Course"></asp:TextBox>
                            <div id="div_course_name" class="div_java_script_combo_sub">
                            </div>
                          </div>
                        </div>

                          <div class="col-md-4">
                            <div class="form-group">
                            <label>Select Subject</label>
                            <asp:TextBox ID="ctxt_subject" Onkeyup="PopulateSubject(event); return false;" onclick="PopulateSubject(event); return false;"
                                CssClass="form-control mandatory-dropdown" runat="server" Placeholder="Select Subject"></asp:TextBox>
                            <div id="div_subject" class="div_java_script_combo_sub_right">
                            </div>
                          </div>
                        </div>   


                  </div>
                  </div>
 

                 <!--------Entry Fild Start--------->
                <div id="div_entry_block">
                <div class="card-box">
                   <div class="row">
                         <div class="col-md-2">
                                    <div class="form-group">
                                    <label>Lecture/Week</label>
                                    <asp:TextBox ID="cntxt_lecture" 
                                        CssClass="form-control" runat="server" type="number" Placeholder="Lecture/Week"></asp:TextBox>
                                  </div>
                         </div>


                         <div class="col-md-2">
                                    <div class="form-group">
                                    <label>Tutorial/Week</label>
                                    <asp:TextBox ID="cntxt_tutorial" 
                                        CssClass="form-control" runat="server" type="number" Placeholder="Tutorial/Week"></asp:TextBox>
                                  </div>
                         </div>

                         <div class="col-md-2">
                                    <div class="form-group">
                                    <label>Practical/Week</label>
                                    <asp:TextBox ID="cntxt_practical" 
                                        CssClass="form-control" runat="server" type="number" Placeholder="Practical/Week"></asp:TextBox>
                                  </div>
                         </div>

                         <div class="col-md-2">
                                    <div class="form-group">
                                    <label>Total Contact</label>
                                    <asp:TextBox ID="cntxt_total_contact" 
                                        CssClass="form-control" runat="server" type="number" Placeholder="Total Contact"></asp:TextBox>
                                  </div>
                         </div>

                        <div class="col-md-2">
                                    <div class="form-group">
                                    <label>Credit</label>
                                    <asp:TextBox ID="cntxt_credit" 
                                        CssClass="form-control" runat="server" type="number" Placeholder="Credit"></asp:TextBox>
                                  </div>
                         </div>

                    </div>
                    <div class="row">
                       <div class="col-md-6">
                                <asp:Button  runat="server" CssClass="btn btn-primary" ID="cmd_add_mod" OnClientClick="SetModuleParam('1'); return false;"
                                Text="Add Module" />

                                <asp:Button ID="cmd_add_sub_mod"  runat="server" CssClass="btn btn-primary" OnClientClick="SetModuleParam('2'); return false;"
                                Text="Add Sub Module" />


                          </div>
                          <div class="col-md-6 text-right">
                                <asp:Button ID="cmd_save" runat="server" CssClass="btn btn-primary"
                                    OnClientClick="SaveSyllabus(); return false;" Text="Save" 
                                     />

                                <asp:Button ID="cmd_reset" runat="server" CssClass="btn btn-primary"
                                    OnClientClick="ResetAll(); return false;" Text="Reset" />

                               <asp:Button ID="cmd_remove" runat="server" CssClass="btn btn-primary"
                                    OnClientClick="RemoveSyllabusModule(); return false;" Text="Remove" />

                                <asp:Button ID="cmd_cancel" runat="server" CssClass="btn btn-primary"
                                    OnClientClick="SetNull(); return false;" Text="Cancel All" />

                                <asp:Button ID="cmd_close" runat="server" CssClass="btn btn-primary"
                                    OnClientClick="LoadHomePage(); return false;" Text="Back" />
                          </div>
                       </div>
                      </div>
                <div class="card-box">
                   <div class="row">
                       <div class="col-md-7">
                           <div class="row">
                       <div class="col-md-6">
                            <div class="form-group">
                            <label>Select Module</label>
                            <asp:TextBox ID="ctxt_module" Onkeyup="SearchModule(event); return false;" onclick="SearchModule(event); return false;"
                                CssClass="form-control mandatory-dropdown" runat="server" Placeholder="Select Module"></asp:TextBox>
                            <div id="div_module" class="div_java_script_combo_sub">
                            </div>
                          </div>
                        </div>

                       <div class="col-md-6">
                            <div class="form-group">
                            <label>Enter Sub Module Sl</label>
                            <asp:TextBox ID="ctxt_sub_module" Onkeyup="SearchSubModule(event); return false;" onclick="SearchSubModule(event); return false;"
                                CssClass="form-control" type="number" runat="server" Placeholder="Enter Sub Module Sl"></asp:TextBox>

                          </div>
                        </div>
                    </div>
                           <div class="row">
                       <div class="col-md-6">
                                    <div class="form-group">
                                    <label>Subject</label>
                                    <asp:TextBox ID="ctxt_module_topic"  TextMode="MultiLine" Height="50px"
                                        CssClass="form-control" runat="server"  Placeholder="Topic"></asp:TextBox>
                                  </div>
                         </div>

                       

                       <div class="col-md-6">
                                    <div class="form-group">
                                    <label>No(s) Of Lecture</label>
                                    <asp:TextBox ID="cntxt_nos_of_lecture" 
                                        CssClass="form-control" runat="server" type="number" Placeholder="No(s) Of Lecture"></asp:TextBox>
                                  </div>
                         </div>
                    </div>
                       </div>
                       <div class="col-md-5">
                      <div class="form-group">
                                    <label>Details</label>
                                    <asp:TextBox ID="ctxt_module_details" 
                                        CssClass="form-control" runat="server"  Placeholder="Details" 
                                            TextMode="MultiLine" Height="100px"></asp:TextBox>
                                  </div>
                       </div>
                  </div>
                </div>          
                <div id="m_UpdatePanelSearchModule" runat="server">
                    <div class="row">
                        <div class="col-md-12">
                           <div class="card-box">
                                <div class="table-responsive">
                                    <asp:Panel runat="server" ID="m_panel_module_search_window">
                                    </asp:Panel>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                 <!--------Entry Fild End--------->

                 <!-------Upload File Start---------->
                   <div id="div_upload_block" style="display:none">
                   <div class="text-center">
                   
                   </div>
                   <div class="row mb-2">
                       
                       <div class="col-md-6">
                       <input type="file" id="upload_file_id" name="upload_file_name" onchange="UploadSyllabusExcel(); return false;" hidden />
                       <label  id="" for="upload_file_id" class="btn btn-primary " ><i class='fa fa-upload'></i> Choose file</label>
                       <label  id="Label1" class="btn btn-primary "  onclick="DownloadSample(); return false;" ><i class='fa fa-download'></i> Download Format</label>
                       </div>
                       <div class="col-md-6 text-right">
                            <asp:Button ID="Button1" runat="server" OnClientClick="GetSyllabusFromExcel(1); return false" CssClass="btn btn-primary" Text="Subject" />
                            <asp:Button ID="Button2" runat="server" OnClientClick="GetSyllabusFromExcel(2); return false"   CssClass="btn btn-info" Text="Co Details" />
                            <asp:Button ID="Button3" runat="server" OnClientClick="GetSyllabusFromExcel(3); return false"   CssClass="btn btn-info" Text="Module Details" />
                            <asp:Button ID="Button4" runat="server" OnClientClick="GetSyllabusFromExcel(4); return false"   CssClass="btn btn-info" Text="Co Po Mapping" />
                            
                       </div>
                    </div>
                    <div class="card-box">
                        <div class="table-responsive">
                            <asp:Panel runat="server" ID="m_panel_syllabus_data">
                            </asp:Panel>
                        </div>                 
                    </div>

                    <div class="row">
                    <div class="col-md-12 text-center">
                            <asp:Button ID="cmd_save_syllabus_export" runat="server" OnClientClick="SaveSyllabusExcel(); return false;"  CssClass="btn btn-primary" Text="Save" />
                        </div>
                    </div>
                   
                </div>
                 <!-------Upload File End---------->
               

                <div id="m_UpdatePanelHiddenField" runat="server">
                    <div style="display: inherit">
                        <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_branch_id" runat="server" Value="0" />

                        <asp:HiddenField ID="cntxt_period_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_subject_id" runat="server" Value="0" />                                                
                        <asp:HiddenField ID="ctxt_excel_file" runat="server" Value="" />                                                


                        <asp:HiddenField ID="cntxt_module_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_sub_module_id" runat="server" Value="0" />
                        <asp:HiddenField ID="cntxt_is_module" runat="server" Value="1" />
                        <asp:HiddenField ID="cntxt_course_id" runat="server" Value="0" />    

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