using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for clsBoCrystalReport
/// </summary>
/// 
namespace BO
{
    public class clsBoCrystalReport
    {
        public string p_ReportFileName;
        public string p_SelectionFormula;
        public string[] p_FormulaField;
        public string[] p_SpParameterField;
        public int p_ErrorFlag;
        public string p_FormatType;
        public string p_IsMainDB;

        public clsBoCrystalReport()
        {
            //
            // TODO: Add constructor logic here
            //
            p_ReportFileName = null;
            p_SelectionFormula = null;
            p_FormulaField = null;
            p_SpParameterField = null;
            p_ErrorFlag = 0;
            p_FormatType = "PDF";
            p_IsMainDB = "";
        }

        ~clsBoCrystalReport()
        {
            p_ReportFileName = null;
            p_SelectionFormula = null;
            p_FormulaField = null;
            p_SpParameterField = null;
            p_IsMainDB = null;
        }
    }

}