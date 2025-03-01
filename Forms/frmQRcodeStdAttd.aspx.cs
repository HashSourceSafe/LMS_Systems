using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net;
using BAL;


public partial class Forms_frmQRcodeStdAttd : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
            CheckSession();
            CreateQrCode();
        }
    }

    private void CheckSession()
    {
        string m_url;
        m_url = Request.ServerVariables["HTTP_REFERER"];
        if (m_url == null)
        {
            Response.Redirect("frmLogin.aspx");
        }

        clsBalCommonLib m_clsBalCommonLib = new clsBalCommonLib();
        m_clsBalCommonLib.IsSessionRunning();
        m_clsBalCommonLib.DeleteAllLocalSessionVar();
        m_clsBalCommonLib = null;
    }


    void CreateQrCode()
    {
        try
        {
            cntxt_college_id.Value = Session["G_COLLEGE_ID"].ToString();
            ctxt_trans_id.Value = Session["S_QR_CODE"].ToString();

            string m_val = Session["S_QR_CODE"].ToString();
            string m_qr_code_image = @"https://chart.googleapis.com/chart?cht=qr&chl=" + WebUtility.HtmlEncode(m_val) + "&choe=UTF-8&chs=" + "540x540";
            img_qr_code.ImageUrl = m_qr_code_image;
        }
        catch (Exception ex)
        {
            Response.Write(ex.Message);
        }
        finally
        {
        }
    }


}