//--------------------------------------
function PrintStudentReport() {
    try {
        if (GetRadioButStat("radio_pdf_xls_0") == true) {
            m_format = "PDF"
        }
        else if (GetRadioButStat("radio_pdf_xls_1") == true) {
            m_format = "XLS"
        }


        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        cntxt_batch_id = GetValueByCtrlName("cntxt_batch_id");
        cntxt_course_id = GetValueByCtrlName("cntxt_course_id");
        cntxt_stream_id = GetValueByCtrlName("cntxt_stream_id");
        cntxt_section_id = GetValueByCtrlName("cntxt_section_id");
        cntxt_sem_id = GetValueByCtrlName("cntxt_sem_id");

        var m_SpParam = new Array;
        m_SpParam.push(CreateParam("@p_branch_id", m_BranchId, "INT"))
        m_SpParam.push(CreateParam("@p_course_id", m_course_id, "INT"))
        m_SpParam.push(CreateParam("@p_stream_id", m_stream_id, "INT"))
        m_SpParam.push(CreateParam("@p_batch_year", m_year, "INT"))
        m_SpParam.push(CreateParam("@p_batch_id", m_batch_id, "INT"))
        m_SpParam.push(CreateParam("@p_category_id", m_category_id, "INT"))
        m_SpParam.push(CreateParam("@p_active_stat", m_active_stat, "VARCHAR"))
        m_SpParam.push(CreateParam("@p_hostel_stat", m_hostel_stat, "VARCHAR"))
        m_SpParam.push(CreateParam("@p_year_lag_stat", m_year_lag_stat, "VARCHAR"))
        m_SpParam.push(CreateParam("@p_student_name", m_student_name, "VARCHAR"))
        m_SpParam.push(CreateParam("@p_student_code", m_student_code, "VARCHAR"))



        m_heading = "Student List - " + GetValueByCtrlName("ctxt_branch_name");

        var m_FormulaList = new Array;
        m_FormulaList.push(CreateFormula("m_company", GetValueByCtrlName("ctxt_branch_name")));
        m_FormulaList.push(CreateFormula("m_company_add", GetValueByCtrlName("ctxt_branch_add")));
        m_FormulaList.push(CreateFormula("m_phone", GetValueByCtrlName("ctxt_branch_phone")));
        m_FormulaList.push(CreateFormula("m_head_1", m_heading));


        GenerateReport("rptStudentList.rpt",
                        m_SpParam,
                        m_FormulaList,
                        null,
                        m_format);

    }
    catch (err) {
        alert("PrintStudentReport() - JScript Error");
    }
}
