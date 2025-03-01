function InitReport() {
    try {

        __doPostBack('cmd_gen_report', '');
    }
    catch (err) {
        alert("InitReport() - JScript Error");
    }
}