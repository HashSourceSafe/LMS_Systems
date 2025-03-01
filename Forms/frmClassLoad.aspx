<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmClassLoad.aspx.cs" Inherits="Forms_frmClassLoad" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtml.js"></script>
    <script type="text/javascript" src="JavaScript/DynamicHtmlTemplate.js"></script>
    <script type="text/javascript" src="JavaScript/CalenderCtrlScript.js"></script>
    <script type="text/javascript" src="JavaScript/ClassLoad.js?version=3"></script>
    <script type="text/javascript" src="JavaScript/ReportList.js"></script> 
    <link href="css/frmScreen.css" type="text/css" rel="stylesheet" />
    <!-- WEB FONTS -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&amp;subset=latin,latin-ext,cyrillic,cyrillic-ext"
        rel="stylesheet" type="text/css" />
    <!-- CORE CSS -->
    <link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <!-- THEME CSS -->
    <link href="assets/css/essentials.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/layout.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/color_scheme/green.css" rel="stylesheet" type="text/css" id="color_scheme" />
</head>
<body onload="SetWindow(1280,800); Init();" onkeyup="CheckKeyUp(event);" onkeydown="CheckKeyDown(event);"
    onmouseup="RightMouseClick(event);" onmousedown="RightMouseClick(event);">
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
                    <h1 id="H1"><asp:Label ID="ctxt_sel_college_name" runat="server"  Text="Class Load/Conduction" ></asp:Label></h1>
 <%--                   <ol class="breadcrumb">
						<li><a href="#">Forms</a></li>
						<li class="active" id="ctxt_heading">Class Load/Conduction/Lesson Plan Status</li>
					  </ol>--%>
                </header>
        </div>
        <div id="m_UpdatePanelHeader" runat="server">
            <div id="content" class="padding-20">
                <div class="panel panel-default">
                    <div class="panel-body">

                    <div class="row">
                        <div class="col-md-2">
                            From Date (dd/mm/yyyy)
                            <div class="input-group">
                                <asp:TextBox ID="dtp_from_date" CssClass="form-control" runat="server" ></asp:TextBox>
                                <div class="input-group-addon" OnClick="InitCalender('dtp_from_date', 'div_from_date', GetDateToday()); return false;">
                                <i class="fa fa-calendar"></i>
                                </div>
                            </div>

                            <div  id="div_from_date"></div>
                        </div>

                        <div class="col-md-2">
                            To Date (dd/mm/yyyy)
                            <div class="input-group">
                                <asp:TextBox ID="dtp_to_date" CssClass="form-control" runat="server" ></asp:TextBox>
                                <div class="input-group-addon" OnClick="InitCalender('dtp_to_date', 'div_to_date', GetDateToday()); return false;">
                                <i class="fa fa-calendar"></i>
                                </div>
                            </div>

                            <div  id="div_to_date"></div>
                        </div>

                        <div class="col-md-2">
                            Sem Type
                            <div class="input-group">
                                <asp:TextBox ID="ctxt_semester_type" 
                                Placeholder="Semester Type" 
                                Onkeyup="PopulateSemesterType(event); return false;"  
                                onclick="PopulateSemesterType(event); return false;"  
                                CssClass="form-control mandatory-dropdown" runat="server"></asp:TextBox>

                                <div id="div_semester_type" class="div_java_script_combo_sub">
                                </div>
                            </div>
                        </div>


                        <div class="col-md-2">
                            Search On Subject Type
                            <div class="input-group">
                                <asp:TextBox ID="ctxt_subject_type" placeholder="Enter Subject Type" 
                                Onkeyup="PopulateSubjectType(event); return false;"  
                                onclick="PopulateSubjectType(event); return false;"  
                                CssClass="form-control mandatory-dropdown" runat="server" ></asp:TextBox>

                                <div id="div_subject_type" class="div_java_script_combo_sub">
                                </div>
                            </div>
                        </div>


                        <div class="col-md-2">
                            Search On Stream
                            <asp:TextBox ID="ctxt_stream" placeholder="Enter Stream" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>

                        <div class="col-md-2">
                            Search On Sem No
                            <asp:TextBox ID="cntxt_sem" placeholder="Enter 0 for All" Text="0" CssClass="form-control  text-right" runat="server" ></asp:TextBox>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-md-1"></div>

                        <div class="col-md-2">
                            Faculty Department
                            <asp:TextBox ID="ctxt_dept_name" placeholder="Enter Department" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>

                        <div class="col-md-2">
                            Search On Faculty 
                            <asp:TextBox ID="ctxt_faculty" placeholder="Enter Faculty Name" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>

                        <div class="col-md-2">
                            Faculty Category
                            <asp:TextBox ID="ctxt_faculty_categoty" placeholder="FULL TIME/VISITING" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>

                        <div class="col-md-2">
                            Faculty Designation
                            <asp:TextBox ID="ctxt_faculty_desg" placeholder="Asst Prof/Tech. Asst" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>

                        <div class="col-md-2">
                            Search On Subject 
                            <asp:TextBox ID="ctxt_subject" placeholder="Enter Subject" CssClass="form-control" runat="server" ></asp:TextBox>
                        </div>

                        <div class="col-md-1"></div>
                    </div>


                    <div class="row">
                        <div class="col-md-2"></div>

                        <div class="col-md-8">
                            <asp:RadioButtonList ID="radio_report_type" runat="server" ForeColor="Black" Font-Bold="True"
                                RepeatDirection="Horizontal" BorderColor="Black" BorderStyle="Double" 
                                CssClass="form-control" onclick="SetReportType();" >
                                <asp:ListItem Selected="True" Text="Subject Type Wise Class Load&nbsp&nbsp"></asp:ListItem>
                                <asp:ListItem  Text="Week Day Wise Class Load&nbsp&nbsp"></asp:ListItem>
                                <asp:ListItem Text="Class Conduction Details&nbsp&nbsp"></asp:ListItem>
                                <asp:ListItem Text="Lesson Plan Status&nbsp&nbsp"></asp:ListItem>
                            </asp:RadioButtonList>
                        </div>

                         <div class="col-md-2"></div>
                    </div>

                    <div class="row">
                        <div class="col-md-1"></div>

                        <div class="col-md-2">
                            <asp:Button ID="cmd_print" runat="server" CssClass="btn bg-green  btn-3d text-white fullwidth"
                            OnClientClick="PrintFacultyLoad(); return false;" Text="Print" />
                        </div>   

                        <div class="col-md-2">
                            <asp:Button ID="cmd_refresh" runat="server" CssClass="btn bg-yellow  btn-3d text-white fullwidth"
                            OnClientClick="Refresh(); return false;" Text="Display" />
                        </div>   

                        <div class="col-md-2">
                            <asp:Button ID="cmd_export" runat="server" CssClass="btn bg-maroon  btn-3d text-white fullwidth"
                            OnClientClick="DisplayData('1'); return false;" Text="Export" />
                        </div>   

                        
                        <div class="col-md-2">
                            <asp:Button ID="cmd_reset" runat="server" CssClass="btn bg-blue  btn-3d text-white fullwidth"
                            OnClientClick="Reset(); return false;" Text="Reset" />
                        </div>   

                        <div class="col-md-2">
                            <asp:Button ID="cmd_close" runat="server" CssClass="btn bg-red  btn-3d text-white fullwidth"
                            OnClientClick="ExitWindow(); return false;" Text="Close" />
                        </div> 

                        <div class="col-md-1"></div>
                    </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-11">
                <div id="m_div_single_student" class="div_java_script_combo_sub">
                </div>
            </div>
        </div>


        <div id="m_UpdatePanelMain" runat="server">
            <div class="panel panel-default">                
                <div class="panel-body">
                    <div class="table-responsive">
                        <asp:Panel runat="server" ID="m_panel_main_list">
                        </asp:Panel>
                    </div>
                </div>
            </div>
        </div>



        <div id="m_UpdatePanelHiddenField" runat="server">
            <div style="display: inherit">
                <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_branch_id" runat="server" Value="0" />
                <asp:HiddenField ID="ctxt_college_name" runat="server" Value="" />
                <asp:HiddenField ID="cntxt_batch_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_course_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_stream_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_sem_id" runat="server" Value="0" />
                <asp:HiddenField ID="is_call_from_mis" runat="server" Value="0" />
                <asp:HiddenField ID="disp_type" runat="server" Value="COLLEGE" />
                <asp:HiddenField ID="cntxt_session_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_semester_type_id" runat="server" Value="1" />
                <asp:HiddenField ID="cntxt_subject_type_id" runat="server" Value="-1" />
                
                
            </div>
        </div>
        </form>
    </div>
</body>
</html>
