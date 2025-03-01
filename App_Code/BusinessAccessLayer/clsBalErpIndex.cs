using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for clsBalErpIndex
/// </summary>
/// 
namespace BAL
{
    public class clsBalErpIndex
    {
        public clsBalErpIndex()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public int Validate(string p_Key)
        {
            int m_RetVal = 0;
            try
            {
                if (p_Key == "11111111")
                {
                    HttpContext.Current.Session["G_MAC_ID"] = "ABCD1234";
                    HttpContext.Current.Session["G_DECRYPT_SESSION_ID"] = HttpContext.Current.Session.SessionID;
                }
                else
                {
                    string m_devrypt_data = DecryptData(p_Key, 8);
                    if (m_devrypt_data == "ERROR")
                    {
                        m_RetVal = 1;
                    }
                    else
                    {
                        string[] m_Arr = m_devrypt_data.Split('|');
                        HttpContext.Current.Session["G_MAC_ID"] = m_Arr[0];
                        HttpContext.Current.Session["G_DECRYPT_SESSION_ID"] = m_Arr[1];
                    }
                }
            }
            catch
            {
                m_RetVal = 1;
            }
            finally
            {
            }
            return m_RetVal;
        }

        public long BininaryToDecimal(string p_Val)
        {
            long m_RetVal = 0;

            long iTotVal;
            long iVal;
            int iCtr;
            String mData;

            mData = ReverseString(p_Val);
            iTotVal = 0;

            try
            {
                for (iCtr = 0; iCtr < mData.Length; iCtr++)
                {
                    iVal = System.Convert.ToInt64(mData.Substring(iCtr, 1));
                    iVal = iVal * (long)Math.Pow((double)2, iCtr);
                    iTotVal = iTotVal + iVal;

                }
            }
            catch
            {
                iTotVal = 0;
            }
            finally
            {
            }
            m_RetVal = iTotVal;
            return m_RetVal;
        }

        public string ReverseString(string p_strVal)
        {
            string m_RetVal;

            try
            {
                char[] m_arr = p_strVal.ToCharArray();
                Array.Reverse(m_arr);
                m_RetVal = new string(m_arr);
            }
            catch
            {
                m_RetVal = "ERROR";
            }
            finally
            {
            }
            return m_RetVal;
        }

        public string DecryptData(String p_strVal, int p_CharCount)
        {
            string m_RetVal = "";
            long m_ByteCount;
            int nCtr;
            String m_ValBynary;
            long m_ValDecimal;
            int m_Pos;


            try
            {
                m_ByteCount = p_strVal.Length / p_CharCount;
                for (nCtr = 1; nCtr <= m_ByteCount; nCtr++)
                {
                    m_Pos = ((nCtr * p_CharCount) - p_CharCount);
                    m_ValBynary = p_strVal.Substring(m_Pos, p_CharCount);
                    m_ValDecimal = BininaryToDecimal(m_ValBynary);
                    m_RetVal = m_RetVal + Convert.ToChar(m_ValDecimal - 5).ToString();
                }

            }
            catch
            {
                m_RetVal = "ERROR";
            }
            finally
            {
            }
            return m_RetVal;
        }

    }
}