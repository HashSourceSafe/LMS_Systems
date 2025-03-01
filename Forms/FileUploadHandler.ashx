<%@ WebHandler Language="C#" Class="FileUploadHandler" %>

using System;
using System.Web;

public class FileUploadHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        string m_ret_val = "SUCCESS";
        string m_path = "";
        try
        {

            if (context.Request.Files.Count > 0)
            {
                HttpFileCollection files = context.Request.Files;


                HttpPostedFile file = files[0];
                string fname = context.Request["file_name"];
                string m_doc_type = context.Request["doc_type"];

                if (m_doc_type == "1")
                {
                     m_path = "~/LmsUploadContents";
                }
                else if (m_doc_type == "2")
                {
                     m_path = "~/UploadedSyllabusExcel";
                }
                
                string m_root = context.Server.MapPath("~");

                fname = System.IO.Path.Combine(context.Server.MapPath(m_path), fname);

                if (System.IO.File.Exists(fname) == true && m_doc_type == "1")
                {
                    m_ret_val = "DUPLICATE";
                }
                else
                {
                    file.SaveAs(fname);
                }
            }
            else
            {
                m_ret_val = "ERROR";
            }
        }
        catch
        {
            m_ret_val = "ERROR";
        }
        finally
        {
            GC.Collect();

            context.Response.ContentType = "text/plain";
            context.Response.Write(m_ret_val);
        }       
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}