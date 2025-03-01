<%@ Page Language="C#" AutoEventWireup="true" CodeFile="frmIndex.aspx.cs" Inherits="Forms_frmIndex" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml">

  

<head id="Head1" runat="server">
    <noscript>
        <meta http-equiv="refresh" content="1; url=frmNoJavaScriptError.aspx">
    </noscript>   

    <title></title>
	<link href="css/intro-page.css" type="text/css" rel="stylesheet"/>
</head>
<body>


<div class="college-name"><span>JIS Group Of colleges</span></div>
   <div class="int-menu">
       <div class="int-menu-top"></div>
       <div class="int-menu-mid">
       <form id="form1" runat="server">
       <div class="int-center">
		<div class="finance">
			<asp:HyperLink ID="HyperLink1" runat="server" 
				NavigateUrl="frmLogin.aspx?Module=6">Finance</asp:HyperLink>
		</div>
		<div class="finance">
			<asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="frmLogin.aspx?Module=3">Material</asp:HyperLink>
		</div>
		<div class="finance">
			<asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="frmLogin.aspx?Module=30">MIS</asp:HyperLink>
		</div>
		<div class="material">
			<asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="frmLogin.aspx?Module=20">User Rights</asp:HyperLink>
		</div>
	   </div>
		</form>
       </div>
       <div class="int-menu-bot"></div>
   </div>
   
</body>
</html>
