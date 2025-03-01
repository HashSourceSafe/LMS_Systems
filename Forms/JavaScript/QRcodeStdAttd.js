var m_time_function;
m_time_function = setInterval(function () { SetStdAttdCount(); }, 5000);



//---------------------------------------------------
function SetStdAttdCount() {
    try {




        cntxt_college_id = GetValueByCtrlName("cntxt_college_id");
        ctxt_trans_id = GetValueByCtrlName("ctxt_trans_id");


        var m_sp_param = new Array();
        m_sp_param.push("@p_college_id,INT," + cntxt_college_id);
        m_sp_param.push("@p_trans_id,VARCHAR," + ctxt_trans_id);

        var m_field = new Array();
        m_field.push("std_count");


        WebServiceMasters.GetData("NA", m_field, m_sp_param, "Proc_Get_Student_Attendance_Count", 0,
                                   OnComplete_SetStdAttdCount,
                                   OnError_SetStdAttdCount,
                                   OnTimeOut_SetStdAttdCount);
    }
    catch (err) {
        alert("SetStdAttdCount() - JScript Error");
    }
}
function OnComplete_SetStdAttdCount(arg) {
    if (arg.m_Count == -1) {
        alert('Error in WebMethod');
    }
    else {
        SetInnerHtml("ctxt_attd_count", "Attendance Count : " + arg.m_List[0][0]);
    }
}
function OnError_SetStdAttdCount(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOut_SetStdAttdCount(arg) {
    alert("Time Out");
}
//---------------------------------------------------