<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmAllRoutineList.aspx.cs" Inherits="Forms_frmAllRoutineList" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/AllRoutineList.js?version=7"></script>
    <script type="text/javascript" src="JavaScript/ReportList.js"></script> 
    <link href="css/frmScreen.css" type="text/css" rel="stylesheet" />
    <script src="JavaScript/TopMenu.js" type="text/javascript"></script>
    <!-- WEB FONTS -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&amp;subset=latin,latin-ext,cyrillic,cyrillic-ext"
        rel="stylesheet" type="text/css" />
    <!-- CORE CSS -->
    <link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <!-- THEME CSS -->
    <link href="assets/css/layout.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/color_scheme/green.css" rel="stylesheet" type="text/css" id="color_scheme" />
    <link href="assets/css/essentials.css" rel="stylesheet" type="text/css" />
</head>
<body onload="SetWindow(1024,768); Init();" onkeyup="CheckKeyUp(event);"
 onkeydown="CheckKeyDown(event);" onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);">
    <div class="main">
        <form id="form1" runat="server">
            <div>
            <asp:ScriptManager ID="m_ScriptManager" runat="server">
                <Services>
                    <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" />
                        <asp:ServiceReference Path="~/Forms/WebServiceReport.asmx" /> 
                </Services>
            </asp:ScriptManager>
        </div>
            <div class="page-headin">
                <header id="page-header">
                     <h1 id="div_lbl_document_name"><asp:Label ID="lbl_document_name" runat="server"  Text="Display Routine List" ></asp:Label></h1>
                </header>
            </div>
            <div class="panel panel-default" id="div1">
            <div class="panel-body">
                <div id="Div2" class="padding-20">
                    <div class="row">
                        <div class="col-md-2">
                            <asp:TextBox ID="ctxt_course_name" 
                            Placeholder="Course:"
                            Onkeyup="SearchCourse(event); return false;"  
                            onclick="SearchCourse(event); return false;"  
                            CssClass="form-control" runat="server"></asp:TextBox>

                            <div id="div_course_name" class="div_java_script_combo_sub">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <asp:TextBox ID="ctxt_semester_type" 
                            Placeholder="Semester Type:" 
                            Onkeyup="PopulateSemesterType(event); return false;"  
                            onclick="PopulateSemesterType(event); return false;"  
                            CssClass="form-control" runat="server"></asp:TextBox>

                            <div id="div_semester_type" class="div_java_script_combo_sub">
                            </div>
                        </div>

                        <div class="col-md-2">
                            <asp:TextBox ID="cntxt_sem_no" Placeholder="Enter Sem No"
                                    CssClass="form-control" runat="server"></asp:TextBox>                                
                        </div>


                        <div class="col-md-6">
                            <div class="col-md-4">
                                <asp:Button ID="cmd_search" runat="server" CssClass="btn btn bg-aqua text-navy btn-3d fullwidth"
                                OnClientClick="PopulateRoutineList(); return false;" Text="Search" />
                            </div>

                           <%-- <div class="col-md-3">
                                <asp:Button ID="cmd_cancle" runat="server" CssClass="btn btn bg-aqua text-navy btn-3d fullwidth"
                                OnClientClick="LoadHomePage(); return false;" Text="Cancel;" />
                            </div>--%>

                            <div class="col-md-4">
                                <asp:Button ID="cmd_print_load" runat="server" CssClass="btn btn bg-aqua text-navy btn-3d fullwidth"
                                OnClientClick="PrintFacultyLoad(); return false;" Text="Faculty Load" />
                            </div>

                            <div class="col-md-4">
                                <asp:Button ID="cmd_close" runat="server" CssClass="btn btn bg-aqua text-navy btn-3d fullwidth"
                                OnClientClick="LoadHomePage(); return false;" Text="Close" />
                            </div>
                        </div>
                    </div>
                    
                    <div class="row" id="div_user_details_container">
                        <div class="panel panel-default">
                            <div class="table-responsive">
                                <asp:Panel runat="server" ID="m_panel_display_routine_list" CssClass="panel-body" ScrollBars="Vertical">
                                </asp:Panel>
                            </div>
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
                <asp:HiddenField ID="ctxt_stream_name" runat="server" Value="" />

            </div>
        </div>
        </form>
    </div>
</body>
</html>
