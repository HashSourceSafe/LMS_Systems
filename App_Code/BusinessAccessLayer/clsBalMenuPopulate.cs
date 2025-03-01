using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DAL;


/// <summary>
/// Summary description for clsBalMenuPopulate
/// </summary>
/// 

namespace BAL
{
    public class clsBalMenuPopulate
    {
        public clsBalMenuPopulate()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public void PopulateMenu(System.Web.UI.WebControls.Menu p_Menu)
        {
            clsDalMenuPopulate m_clsDalMenuPopulate =new clsDalMenuPopulate();
            m_clsDalMenuPopulate.PopulateMenu(p_Menu);
            m_clsDalMenuPopulate = null;
        }
    }


    
}