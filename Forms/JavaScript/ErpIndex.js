function Validate() {
    ctxt_erp_act_key = GetValueByCtrlName("ctxt_erp_act_key");
    if (ctxt_erp_act_key.length < 8) {
        ShowMsgWnd("Please enter Access Key");
        return false;
    }
    else {
        return true;
    }
}