<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmCommonSearchWindow.aspx.cs" Inherits="Forms_frmCommonSearchWindow" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <script type="text/javascript" src="JavaScript/ClientScriptLib.js"></script> 
    <link href="css/frmScreen.css" type="text/css" rel="stylesheet"/>

</head>

<body>
  <div class="main">  
    <form id="form1" runat="server">
    <div>
        <asp:ScriptManager ID="m_ScriptManager" runat="server">
        </asp:ScriptManager>

        <div class="outer-label-orange">
            <asp:UpdatePanel ID="m_UpdatePanelHeader" runat="server" UpdateMode="Conditional">
                <ContentTemplate>
                    <div class="div_root_block">
                        <div class="div_label_block" style="width:15%">
                                <asp:Label ID="Label1" CssClass="text_label_right" runat="server" Text="Search On:" width="98%"></asp:Label>
                        </div>
                        
                        <div class="div_dropdown_block" style="width:20%">
                            <asp:DropDownList ID="cmb_search_list" CssClass="dropdown_box" Width="98%" runat="server">
                            </asp:DropDownList>
                        </div>

                        <div class="div_textbox_block" style="width:20%">
                            <asp:TextBox ID="ctxt_search" CssClass="text_box" Width="98%" runat="server"></asp:TextBox>
                        </div>

                        <div class="div_button_block" style="width:20%">
                            <asp:Button ID="cmd_search" CssClass="cmd_button" Width="98%" runat="server" 
                                Text="Search" onclick="cmd_search_Click" />
                        </div>

                        <div class="div_button_block" style="width:20%">
                            <asp:Button ID="cmd_search_key" CssClass="cmd_button" Width="98%" runat="server" 
                                Text="Search in Word" onclick="cmd_search_key_Click"  />
                        </div>


                        <div class="div_end_block" style="width:0%">
                        </div>

                        <br clear="all" />
                    </div>

                </ContentTemplate>
            </asp:UpdatePanel>
        </div>
    </div>

       <div class="panel_subject">
        <center>
            <asp:UpdatePanel ID="m_UpdatePanelGrid" runat="server" UpdateMode="Conditional">
            <ContentTemplate>
                    <asp:Panel ID="m_Panel" Width="100%" Height="225px" CssClass="panel_color"
                        runat="server" ScrollBars="Auto">
                        <asp:GridView ID="m_grid" runat="server" AutoGenerateColumns="False" 
                            Width="90%" BorderWidth="2px" CssClass="gridview"
                            EmptyDataText="No Data Found" HorizontalAlign="Center" 
                            ShowHeaderWhenEmpty="True" 
                            onselectedindexchanged="m_grid_SelectedIndexChanged" AllowSorting="True" 
                            onsorting="m_grid_Sorting" AllowPaging="True" 
                            onpageindexchanging="m_grid_PageIndexChanging" PageSize="20">
                            <AlternatingRowStyle BackColor="Aqua" />
                            <HeaderStyle BorderWidth="0px" />
                        </asp:GridView>
                            
                    </asp:Panel>
            </ContentTemplate>

            <Triggers>
                <asp:AsyncPostBackTrigger ControlID="cmd_search" EventName="click" />
                <asp:AsyncPostBackTrigger ControlID="cmd_search_key" EventName="click" />
                <asp:AsyncPostBackTrigger ControlID="cmd_show_prev" EventName="click" />
                <asp:AsyncPostBackTrigger ControlID="cmd_show_next" EventName="click" />                
            </Triggers>
        </asp:UpdatePanel>
        </center>
    </div>

            <div class="div_seperation_block">
            </div>

            <div class="div_seperation_block">
            </div>

            <asp:UpdatePanel ID="m_UpdatePanelButton" runat="server" UpdateMode="Conditional">
                <ContentTemplate>
                    <div class="bottom-butt-div" style="margin-top:10px;">
                        <center>
                            <div class="div_button_block" style="width:100%">
                                <asp:Button ID="cmd_show_prev" Text="Prev" CssClass="cmd_button" runat="server" 
                                Width="20%" onclick="cmd_show_prev_Click"      ></asp:Button>

                                <asp:Button ID="cmd_close" Text="Close" CssClass="cmd_button" runat="server" 
                                Width="20%" onclick="cmd_close_Click"     ></asp:Button>

                                <asp:Button ID="cmd_show_next" Text="Next" CssClass="cmd_button" runat="server" 
                                Width="20%" onclick="cmd_show_next_Click"     ></asp:Button>
                            </div>
                        </center>
                        <br clear="all"/>
                    </div>
                    <div>
                        <asp:HiddenField ID="cntxt_page_no" Value="0" runat="server" />
                    </div>

                </ContentTemplate>
            </asp:UpdatePanel>

    </form>
  </div>
</body>

</html>

