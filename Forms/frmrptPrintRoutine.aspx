<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmrptPrintRoutine.aspx.cs" Inherits="Forms_frmPrintRoutine" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        
    </div>
    <div id="m_DivPanelHiddenField" runat="server">
            <div style="display: inherit">
                <asp:HiddenField ID="cntxt_college_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_user_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_user_name" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_g_dept_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_back_office_user_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_course_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_semester_type_id" runat="server" Value="0" />

                <asp:HiddenField ID="cntxt_batch_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_stream_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_section_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_access_id" runat="server" Value="0" />
                <asp:HiddenField ID="cntxt_sem_id" runat="server" Value="0" />
            </div>
        </div>
    </form>
</body>
</html>
