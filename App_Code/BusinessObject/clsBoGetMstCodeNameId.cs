using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;
using System.Collections;

/// <summary>
/// Summary description for clsBoGetMstCodeNameId
/// </summary>
/// 
namespace BO
{
    public class clsBoGetMstCodeNameId
    {
        public ArrayList p_OtherControlArray;
        public clsBoGetMstCodeNameId()
        {
            //
            // TODO: Add constructor logic here
            //
            p_OtherControlArray = new ArrayList();
        }

        ~clsBoGetMstCodeNameId()
        {
            p_OtherControlArray = null;
        }

        public string p_code
        {
            get;
            set;
        }

        public TextBox p_ref_name_control
        {
            get;
            set;
        }

        public HiddenField p_ref_id_control
        {
            get;
            set;
        }


        public string p_FilterCode1
        {
            get;
            set;
        }

    }
}