<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmErrorList.aspx.cs" Inherits="Forms_frmErrorList" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script> 
    <script type="text/javascript" src="JavaScript/ErrorList.js"></script> 
    <link href="css/frmScreen.css" type="text/css" rel="stylesheet"/>
</head>

<body onload="SetWindow(500,300); Init();" style="background:#c6e7f0">
    <div class="main"> 
        <form id="form1" runat="server">
            <div>
                <asp:ScriptManager ID="m_ScriptManager" runat="server">
                    <Services>
                        <asp:ServiceReference Path="~/Forms/WebServiceMasters.asmx" /> 
                    </Services>
                </asp:ScriptManager>        
            </div>

            <div class="page-headin">
                <div class="main-cont">
                        <div class="div_root_block" style="padding-top:15px">

                            <div id="div_lbl_document_name" class="div_label_block" style="width:100%;font-size:18px">
                                <asp:Label ID="lbl_document_name" runat="server" 
                                    Text="Error List" 
                                ></asp:Label>
                            </div>

                            <br clear="all" />
                        </div>
                </div>
            </div>


                <div class="outer-label-orange">
                    <asp:UpdatePanel ID="m_UpdatePanelHeader" runat="server">
                        <ContentTemplate>
                         

                             <div class="div_root_block">

                                <div class="div_label_block" style="width:25%"></div>

                                <div class="div_button_block" style="width:50%">
                                    <asp:Button runat="server" ID="cmd_show_mis_match_doc" Text="Export Mis-Match Document" Visible="true" 
                                    CssClass="cmd_button" OnClientClick="ExportMisMatchDoc(); return false;"  ></asp:Button>
                                </div>


                                <div class="div_end_block" style="width:0%">
                                </div>

                                <br clear="all" />
                            
                             </div>

                             <div class="div_root_block" style="margin-top:10px">

                                <div class="div_label_block" style="width:25%"></div>

                                <div class="div_button_block" style="width:50%">
                                    <asp:Button runat="server" ID="cmd_show_mis_match_ledger" Text="Export Mis-Match Ledger" Visible="true" 
                                    CssClass="cmd_button" OnClientClick="ExportMisMatchLedger(); return false;"  ></asp:Button>
                                </div>


                                <div class="div_end_block" style="width:0%">
                                </div>

                                <br clear="all" />
                            
                             </div>

                             <div class="div_root_block" style="margin-top:10px">

                                <div class="div_label_block" style="width:25%"></div>

                                <div class="div_button_block" style="width:50%">
                                    <asp:Button runat="server" ID="cmd_show_mis_match_header" Text="Export Mis-Match Header" Visible="true" 
                                    CssClass="cmd_button" OnClientClick="ExportMisMatchHeader(); return false;"  ></asp:Button>
                                </div>


                                <div class="div_end_block" style="width:0%">
                                </div>

                                <br clear="all" />
                            
                             </div>

                             <div class="div_root_block" style="margin-top:10px">

                                <div class="div_label_block" style="width:25%"></div>

                                <div class="div_button_block" style="width:50%">
                                    <asp:Button runat="server" ID="cmd_close" Text="Close" Visible="true" 
                                    CssClass="cmd_button" OnClientClick="ExitWindow(); return false;"  ></asp:Button>
                                </div>


                                <div class="div_end_block" style="width:0%">
                                </div>

                                <br clear="all" />
                            
                             </div>

                             <div>
                                <asp:HiddenField ID="cntxt_nBranchId" runat="server" />
                                <asp:HiddenField ID="cntxt_nFinYearId" runat="server" />

                                <asp:HiddenField ID="ctxt_branch_name" runat="server" />
                                <asp:HiddenField ID="ctxt_branch_add" runat="server" />
                                <asp:HiddenField ID="ctxt_branch_phone" runat="server" />
                             </div>
                                         
                        </ContentTemplate>
                    </asp:UpdatePanel>
                </div>


        </form>
    </div>
</body>
</html>
