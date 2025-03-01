using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.IO;
using System.Data.SqlClient;


namespace BAL
{
    public class clsBalReportFunction
    {
        StringWriter stringWriter = new StringWriter();
        HtmlTextWriter writer;
        private string BorderProp = "";

        public enum DivBorder
        {
            None,
            All,
            Top,
            Bottom,
            Left,
            Right
        };

        public enum DivBorderStyle
        {
            none,
            solid,
            dotted,
            dashed
        };

        public enum TextAlign
        {
            Left,
            Right,
            Center
        };



        public clsBalReportFunction()
        {

        }

        ~clsBalReportFunction()
        {
        }

        /** Return Total Html Body**/
        /**************************************************************/
        public string GetReportElements()
        {
            return stringWriter.ToString();
        }


        /**Create Starting Tag of the Report**/
        /***************************************************************/
        public void BeginReport(string cssClsName)
        {
            //writer.Write("<br clear='all'/> ");
            writer = new HtmlTextWriter(stringWriter);

            if (cssClsName != "")
            {
                writer.AddAttribute(HtmlTextWriterAttribute.Class, cssClsName);
            }

            writer.AddStyleAttribute("page-break-after", "always");

            writer.RenderBeginTag(HtmlTextWriterTag.Div);
            //PageBreak();
        }

        /**Default Mathod for Line Printing**/
        /*******************************************************************/
        private void PrintLine(string cssClsName, string setValue, string setWidth, string setAlign = "Left", bool IsBold = false, bool IsUnderLine = false, bool IsItalic = false, string setFontSize = "12pt", string setColor = "none", string setBorder = "none", string setBorderWidth = "1px", string setBorderStyle = "", string setBorderColor = "white")
        {
            writer = new HtmlTextWriter(stringWriter);

            /** @@Static Parameters of the Method**/
            /*************************************************************/
            if (cssClsName != "")
            {
                writer.AddAttribute(HtmlTextWriterAttribute.Class, cssClsName);
            }

            writer.AddStyleAttribute("float", "left");
            writer.AddStyleAttribute(HtmlTextWriterStyle.Width, setWidth);

            if (setBorderWidth == "")
            {
                setBorderWidth = "1px";
            }


            /** @@Dynamic Parameters of the Method**/
            /**************************************************************/
            writer.AddStyleAttribute("text-align", setAlign);

            if (setBorder != "None")
            {
                BorderProp = setBorderWidth + " " + setBorderStyle + " " + setBorderColor;
            }

            if (setBorder == "All")
            {
                writer.AddStyleAttribute("border", BorderProp);
            }
            else if (setBorder == "Left")
            {
                writer.AddStyleAttribute("border-left", BorderProp);
            }
            else if (setBorder == "Right")
            {
                writer.AddStyleAttribute("border-right", BorderProp);
            }
            else if (setBorder == "Top")
            {
                writer.AddStyleAttribute("border-top", BorderProp);
            }
            else if (setBorder == "Bottom")
            {
                writer.AddStyleAttribute("border-bottom", BorderProp);
            }


            if (IsBold == true)
            {
                writer.AddStyleAttribute("font-weight", "bold");
            }
            else
            {
                writer.AddStyleAttribute("font-weight", "normal");
            }


            if (IsUnderLine == true)
            {
                writer.AddStyleAttribute("text-decoration", "underline");
            }

            if (IsItalic == true)
            {
                writer.AddStyleAttribute("font-style", "italic");
            }

            writer.AddStyleAttribute("font-size", setFontSize);

            writer.AddStyleAttribute("color", setColor);

            //writer.AddStyleAttribute("text-align", setPAlign);
            //if (setPBorder == "All")
            //{
            //    writer.AddStyleAttribute("border-top", "thin #ff0000");
            //    writer.AddStyleAttribute("border-bottom", "thin #ff0000");
            //    writer.AddStyleAttribute("border-left", "thin #ff0000");
            //    writer.AddStyleAttribute("border-right", "thin #ff0000");
            //}
            //else if(setPBorder == "Top")
            //{
            //    writer.AddStyleAttribute("border-top", "thin #ff0000");
            //}
            //writer.AddStyleAttribute("border-top", "thin");
            //writer.AddStyleAttribute("color", setPColor);
            //writer.AddStyleAttribute(HtmlTextWriterStyle.FontSize, FontSize.Medium.ToString());
            // writer.AddStyleAttribute(HtmlTextWriterStyle.BorderStyle, BorderStyle.Dotted.ToString());
            //writer.AddStyleAttribute("font-size", "20pt");


            writer.RenderBeginTag(HtmlTextWriterTag.Div);

            //RptHeader();

            writer.Write(setValue);
            writer.RenderEndTag();
        }

        /**Header 
        /**Calling overloadeds Mathod for Line Printing**/
        /*******************************************************************/

        /*Type 1 :                                      */
        /************************************************/
        public void WriteLine(string setPValue, string setPWidth)
        {
            PrintLine("heading", setPValue, setPWidth);
        }

        /*Type 2 :                                      */
        /************************************************/
        public void WriteLine(string setPValue, string setPWidth, TextAlign setPAlign = TextAlign.Left)
        {
            PrintLine("heading", setPValue, setPWidth, setPAlign.ToString());
        }

        ///*Type 3 :                                      */
        ///************************************************/
        //public void WriteLine(string setPValue, string setPWidth, TextAlign setPAlign = TextAlign.Left,string setBorderColor = "white")
        //{
        //    PrintLine("heading", setPValue, setPWidth, setPAlign.ToString(), setBorderColor);
        //}

        /*Type 3 :                                      */
        /************************************************/
        public void WriteLine(string setPValue, string setPWidth, TextAlign setPAlign = TextAlign.Left, bool IsPBold = false)
        {
            PrintLine("heading", setPValue, setPWidth, setPAlign.ToString(), IsPBold);
        }

        /*Type 4 :                                      */
        /************************************************/
        public void WriteLine(string setPValue, string setPWidth, TextAlign setPAlign = TextAlign.Left, bool IsPBold = false, bool IsPUnderLine = false)
        {
            PrintLine("heading", setPValue, setPWidth, setPAlign.ToString(), IsPBold, IsPUnderLine);
        }


        /*Type 5 :                                      */
        /************************************************/
        public void WriteLine(string setPValue, string setPWidth, TextAlign setPAlign = TextAlign.Left, bool IsPBold = false, bool IsPUnderLine = false, bool IsPItalic = false)
        {
            PrintLine("heading", setPValue, setPWidth, setPAlign.ToString(), IsPBold, IsPUnderLine, IsPItalic);
        }

        /*Type 6 :                                      */
        /************************************************/
        public void WriteLine(string setPValue, string setPWidth, TextAlign setPAlign = TextAlign.Left, bool IsPBold = false, bool IsPUnderLine = false, bool IsPItalic = false, string setPFontSize = "12pt")
        {
            PrintLine("heading", setPValue, setPWidth, setPAlign.ToString(), IsPBold, IsPUnderLine, IsPItalic, setPFontSize);
        }

        /*Type 7 :                                      */
        /************************************************/
        public void WriteLine(string setPValue, string setPWidth, TextAlign setPAlign = TextAlign.Left, bool IsPBold = false, bool IsPUnderLine = false, bool IsPItalic = false, string setPFontSize = "12pt", string setPFontColor = "black", DivBorder setPDivBorder = DivBorder.None, string setPBorderWidth = "1px", DivBorderStyle setPBorderStyle = DivBorderStyle.none, string setPBorderColor = "white")
        {
            PrintLine("heading", setPValue, setPWidth, setPAlign.ToString(), IsPBold, IsPUnderLine, IsPItalic, setPFontSize, setPFontColor, setPDivBorder.ToString(), setPBorderWidth, setPBorderStyle.ToString(), setPBorderColor);
        }

        public void EndReport()
        {
            writer = new HtmlTextWriter(stringWriter);
            writer.Write("</div>");
        }



        public void NewLine()
        {
            writer = new HtmlTextWriter(stringWriter);
            writer.Write("<br clear='all'/> ");
        }


        //public void EndReport()
        //{
        //    writer.RenderEndTag();
        //}

        private void RptHeader()
        {
            writer = new HtmlTextWriter(stringWriter);
            writer.RenderBeginTag(HtmlTextWriterTag.Font);
            writer.AddStyleAttribute("font-size", "16pt");

        }
    }
}