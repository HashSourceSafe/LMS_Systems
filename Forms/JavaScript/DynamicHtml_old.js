function CreateTable(p_table_id, p_table_css) {
    try {
        var m_tab = document.createElement('table');
        m_tab.setAttribute('id', p_table_id);
        m_tab.setAttribute('class', p_table_css);
        m_tab.setAttribute('cellspacing', 0);
        m_tab.setAttribute('cellpadding', 0);
        return m_tab;
    }
    catch (err) {
        alert("CreateTable()- Error In JScript");
    }
}


function CreateHeading() {
    try {
        var m_table_heading = document.createElement('thead');
        m_table_heading.setAttribute('class', 'thead-dark');
        return m_table_heading;
    }
    catch (err) {
        alert("CreateHeading()- Error In JScript");
    }
}

function CreateHeaderColumn() {
    try {
        m_cell = document.createElement('th');
        return m_cell;
    }
    catch (err) {
        alert("CreateHeaderColumn()- Error In JScript");
    }
}


function CreateBody() {
    try {
        var m_table_body = document.createElement('tbody');
        return m_table_body;
    }
    catch (err) {
        alert("CreateBody()- Error In JScript");
    }
}

function CreateRow() {
    try {
        var m_row = document.createElement('tr');
        return m_row;
    }
    catch (err) {
        alert("CreateRow()- Error In JScript");
    }
}

function CreateColumn() {
    try {
        m_cell = document.createElement('td');
        return m_cell;
    }
    catch (err) {
        alert("CreateColumn()- Error In JScript");
    }
}

function AddTextBoxMultiline(p_row_ref, p_id, p_value, p_class, p_size) {
    try {
        m_text_box = document.createElement('textarea');
        m_text_box.setAttribute('id', p_id);
        m_text_box.setAttribute('class', p_class);
        m_text_box.setAttribute('size', p_size);
        m_text_box.setAttribute('autocomplete', "off");
        m_text_box.style.textAlign = "left";
        m_text_box.value = p_value;

    
        
        p_col_ref = CreateColumn();
        p_col_ref.appendChild(m_text_box);
        p_row_ref.appendChild(p_col_ref);
    }
    catch (err) {
        alert("AddTextBoxMultiline()- Error In JScript");
    }
}

function AddTextBoxMultilineDisabled(p_row_ref, p_id, p_value, p_class, p_size) {
    try {
        m_text_box = document.createElement('textarea');
        m_text_box.setAttribute('id', p_id);
        m_text_box.setAttribute('class', p_class);
        m_text_box.setAttribute('size', p_size);
        m_text_box.setAttribute('autocomplete', "off");
        m_text_box.setAttribute('disabled', "true");
        m_text_box.style.textAlign = "left";
        m_text_box.value = p_value;
        m_text_box.style.height = "40px";
        m_text_box.style.fontSize = "10px";

        
        p_col_ref = CreateColumn();
        p_col_ref.appendChild(m_text_box);
        p_row_ref.appendChild(p_col_ref);
    }
    catch (err) {
        alert("AddTextBoxMultilineDisabled()- Error In JScript");
    }
}

function AddTextBox(p_row_ref, p_id, p_value, p_class, p_size) {
    try {
        m_text_box = document.createElement('input');
        m_text_box.setAttribute('id', p_id);
        m_text_box.setAttribute('value', p_value);
        m_text_box.setAttribute('class', p_class);
        m_text_box.setAttribute('size', p_size);
        m_text_box.setAttribute('autocomplete', "off");

        p_col_ref = CreateColumn();
        p_col_ref.appendChild(m_text_box);
        p_row_ref.appendChild(p_col_ref);
    }
    catch (err) {
        alert("AddTextBox()- Error In JScript");
    }
}

function AddTextBoxDisabled(p_row_ref, p_id, p_value, p_class, p_size) {
    try {
        m_text_box = document.createElement('input');
        m_text_box.setAttribute('id', p_id);
        m_text_box.setAttribute('value', p_value);
        m_text_box.setAttribute('class', p_class);
        m_text_box.setAttribute('disabled', "true");
        m_text_box.setAttribute('size', p_size);


        p_col_ref = CreateColumn();
        p_col_ref.appendChild(m_text_box);
        p_row_ref.appendChild(p_col_ref);
    }
    catch (err) {
        alert("AddTextBoxDisabled()- Error In JScript");
    }
}

function AddTextBoxReadOnly(p_row_ref, p_id, p_value, p_class, p_size) {
    try {
        m_text_box = document.createElement('input');
        m_text_box.setAttribute('id', p_id);
        m_text_box.setAttribute('value', p_value);
        m_text_box.setAttribute('class', p_class);
        m_text_box.setAttribute('ReadOnly', "true");
        m_text_box.setAttribute('size', p_size);


        p_col_ref = CreateColumn();
        p_col_ref.appendChild(m_text_box);
        p_row_ref.appendChild(p_col_ref);
    }
    catch (err) {
        alert("AddTextBoxDisabled()- Error In JScript");
    }
}


function AddButton(p_row_ref, p_id, p_value, p_class, p_size) {
    try {
        m_but = document.createElement('input');
        m_but.setAttribute('type', "button");
        m_but.setAttribute('value', p_value);
        m_but.setAttribute('id', p_id);
        m_but.setAttribute('class', p_class);
        m_but.setAttribute('size', p_size);

        p_col_ref = CreateColumn();
        p_col_ref.appendChild(m_but);
        p_row_ref.appendChild(p_col_ref);
    }
    catch (err) {
        alert("AddButton()- Error In JScript");
    }
}



function AddTextBoxHidden(p_row_ref, p_id, p_value, p_class, p_size) {
    try {
        m_text_box = document.createElement('input');
        m_text_box.setAttribute('id', p_id);
        m_text_box.setAttribute('value', p_value);
        m_text_box.setAttribute('class', p_class);
        m_text_box.setAttribute('disabled', "disabled");
        m_text_box.setAttribute('size', p_size);



        p_col_ref = CreateColumn();
        p_col_ref.appendChild(m_text_box);
        p_row_ref.appendChild(p_col_ref);
        p_col_ref.style.display = "none";
    }
    catch (err) {
        alert("AddTextBoxHidden()- Error In JScript");
    }
}


function AddColumn(p_row_ref, p_col_ref) {
    try {
        p_row_ref.appendChild(p_col_ref);
    }
    catch (err) {
        alert("AddColumn()- Error In JScript");
    }
}

function AddRow(p_body_ref, p_row_ref) {
    try {
        p_body_ref.appendChild(p_row_ref);
    }
    catch (err) {
        alert("AddRow()- Error In JScript");
    }
}

function AddBody(p_table_ref, p_body_ref) {
    try {
        p_table_ref.appendChild(p_body_ref);
    }
    catch (err) {
        alert("AddBody()- Error In JScript");
    }
}

function AddTableInControl(p_ctrl_ref, p_table_ref) {
    try {
        p_ctrl_ref.appendChild(p_table_ref);
    }
    catch (err) {
        alert("AddTableInControl()- Error In JScript");
    }
}

function AddHeading(p_row_ref, p_value, p_class, p_size) {
    try {
        m_text_label = document.createElement('input');
        m_text_label.setAttribute('value', p_value);
        m_text_label.setAttribute('class', p_class);
        m_text_label.setAttribute('readonly', "readonly");
        m_text_label.setAttribute('size', p_size);

        p_col_ref = CreateHeaderColumn();
        p_col_ref.appendChild(m_text_label);
        p_row_ref.appendChild(p_col_ref);
    }
    catch (err) {
        alert("AddHeading()- Error In JScript");
    }
}


function BindData(p_param, p_arr, p_root, p_table, p_table_body) {
    try {
        if (p_arr.length <= 0) {
            return;
        }



        for (var i = 0; i < p_arr.length; i++) {
            row = CreateRow();


            var nDataCol = 0;
            for (var nParamRow = 0; nParamRow < p_param.length; nParamRow++) {

                m_param_arr = p_param[nParamRow].split(",");

                m_id = m_param_arr[0] + "_" + i;
                m_ctrl_type = m_param_arr[1];
                m_css = m_param_arr[2];
                m_size = m_param_arr[3];

                if (m_ctrl_type == "read_only_textbox") {
                    if (p_arr[i][nDataCol] == "----") {
                        AddTextBoxHidden(row, m_id, p_arr[i][nDataCol], m_css, m_size);
                    }
                    else {
                        AddTextBoxReadOnly(row, m_id, p_arr[i][nDataCol], m_css, m_size);
                    }
                    nDataCol++;
                }
                else if (m_ctrl_type == "enable_textbox") {
                    if (p_arr[i][nDataCol] == "----") {
                        AddTextBoxHidden(row, m_id, p_arr[i][nDataCol], m_css, m_size);
                    }
                    else {
                        AddTextBox(row, m_id, p_arr[i][nDataCol], m_css, m_size);
                    }
                    nDataCol++;
                }
                else if (m_ctrl_type == "enable_textbox_multiline") {
                    if (p_arr[i][nDataCol] == "----") {
                        AddTextBoxHidden(row, m_id, p_arr[i][nDataCol], m_css, m_size);
                    }
                    else {
                        AddTextBoxMultiline(row, m_id, p_arr[i][nDataCol], m_css, m_size);
                    }
                    nDataCol++;
                }
                else if (m_ctrl_type == "disable_textbox_multiline") {
                    if (p_arr[i][nDataCol] == "----") {
                        AddTextBoxHidden(row, m_id, p_arr[i][nDataCol], m_css, m_size);
                    }
                    else {
                        AddTextBoxMultilineDisabled(row, m_id, p_arr[i][nDataCol], m_css, m_size);
                    }
                    nDataCol++;
                }
                else if (m_ctrl_type == "disable_textbox") {
                    if (p_arr[i][nDataCol] == "----") {
                        AddTextBoxHidden(row, m_id, p_arr[i][nDataCol], m_css, m_size);
                    }
                    else {
                        AddTextBoxDisabled(row, m_id, p_arr[i][nDataCol], m_css, m_size);
                    }
                    nDataCol++;
                }
                else if (m_ctrl_type == "hidden_textbox") {
                    if (p_arr[i][nDataCol] == "----") {
                        AddTextBoxHidden(row, m_id, p_arr[i][nDataCol], m_css, m_size);
                    }
                    else {
                        AddTextBoxHidden(row, m_id, p_arr[i][nDataCol], m_css, m_size);
                    }
                    nDataCol++;
                }
                else if (m_ctrl_type == "button") {
                    AddButton(row, m_id, "Select", m_css, m_size);
                }
                else {
                    alert("Textbox Property error");
                }
            }

            AddRow(p_table_body, row);
        }
        AddBody(p_table, p_table_body);
        AddTableInControl(p_root, p_table);

    }
    catch (err) {
        alert("BindData()- Error In JScript");
    }
}


function AddEvent(p_arr, p_id, p_event_name, p_func) {
    try {
        for (var i = 0; i < p_arr.length; i++) {
            m_id = p_id + "_" + i;
            m_ctrl_ref = document.getElementById(m_id);
            m_ctrl_ref.setAttribute(p_event_name, p_func);
        }
    }
    catch (err) {
        alert("AddEvent()- Error In JScript");
    }
}

function AddTextMesg(p_row_ref, p_value, p_size) {
    try {
        m_text_box = document.createElement('input');
        m_text_box.setAttribute('value', p_value);
        m_text_box.setAttribute('class', "text_box_heading_left");
        m_text_box.setAttribute('size', p_size);
        m_text_box.setAttribute('ReadOnly', "true");

        p_col_ref = CreateColumn();
        p_col_ref.appendChild(m_text_box);
        p_row_ref.appendChild(p_col_ref);
    }
    catch (err) {
        alert("AddTextMesg()- Error In JScript");
    }
}



function CreatePrevNextCloseButton(p_root,
                                   p_table,
                                   p_table_body,
                                   p_table_name,
                                   p_prev_event,
                                   p_next_event,
                                   p_close_event,
                                   p_paging_val) {
    try {
        if (p_prev_event == "NA" && p_next_event == "NA" && p_close_event == "NA") {
            return;
        }

        row = CreateRow(); 
               

        //Adding Prev/Next button
        if (p_prev_event != "NA" || p_next_event != "NA") {

            p_ctrl_id = p_table_name + "_ctrl_but_first";
            p_ctrl_id = p_ctrl_id.toUpperCase();
            AddButton(row, p_ctrl_id, "First", "prev", "10px");

            p_ctrl_id = p_table_name + "_ctrl_but_prev";
            p_ctrl_id = p_ctrl_id.toUpperCase();
            AddButton(row, p_ctrl_id, "Prev", "prev", "10px");

            p_ctrl_id = p_table_name + "_ctrl_but_paging";
            p_ctrl_id = p_ctrl_id.toUpperCase();
            p_paging_val = "   " + p_paging_val + "   ";
            AddButton(row, p_ctrl_id, p_paging_val, "pag-no", "10px");


            p_ctrl_id = p_table_name + "_ctrl_but_next";
            p_ctrl_id = p_ctrl_id.toUpperCase();
            AddButton(row, p_ctrl_id, "Next", "next", "10px");

            p_ctrl_id = p_table_name + "_ctrl_but_last";
            p_ctrl_id = p_ctrl_id.toUpperCase();
            AddButton(row, p_ctrl_id, "Last", "next", "10px");


        }

        //Adding Close But
        if (p_close_event != "NA") {
            p_ctrl_id = p_table_name + "_ctrl_but_close";
            p_ctrl_id = p_ctrl_id.toUpperCase();
            AddButton(row, p_ctrl_id, "", "close", "10px");
        }
        AddRow(p_table_body, row);
        AddBody(p_table, p_table_body);
        AddTableInControl(p_root, p_table);



        //Adding Event For Prev/Next
        if (p_prev_event != "NA" || p_next_event != "NA") {
            //Prev
            p_ctrl_id = p_table_name + "_ctrl_but_prev";
            p_ctrl_id = p_ctrl_id.toUpperCase();
            p_ctrl_ref_id = window.document.getElementById(p_ctrl_id);
            m_event = p_prev_event;
            p_ctrl_ref_id.setAttribute("onclick", m_event);

            //Next
            p_ctrl_id = p_table_name + "_ctrl_but_next";
            p_ctrl_id = p_ctrl_id.toUpperCase();
            p_ctrl_ref_id = window.document.getElementById(p_ctrl_id);
            m_event = p_next_event;
            p_ctrl_ref_id.setAttribute("onclick", m_event);

            //First
            p_ctrl_id = p_table_name + "_ctrl_but_first";
            p_ctrl_id = p_ctrl_id.toUpperCase();
            p_ctrl_ref_id = window.document.getElementById(p_ctrl_id);
            m_event = p_next_event.replace("NEXT", "FIRST");
            p_ctrl_ref_id.setAttribute("onclick", m_event);

            //Last
            p_ctrl_id = p_table_name + "_ctrl_but_last";
            p_ctrl_id = p_ctrl_id.toUpperCase();
            p_ctrl_ref_id = window.document.getElementById(p_ctrl_id);
            m_event = p_next_event.replace("NEXT", "LAST");
            p_ctrl_ref_id.setAttribute("onclick", m_event);
        }
        //Adding Event For Close
        if (p_close_event != "NA") {
            p_ctrl_id = p_table_name + "_ctrl_but_close";
            p_ctrl_id = p_ctrl_id.toUpperCase();
            p_ctrl_ref_id = window.document.getElementById(p_ctrl_id);
            m_event = "DynamicHtmlTemplate_Close(\"" + p_close_event + "\");"
            p_ctrl_ref_id.setAttribute("onclick", m_event);
        }


        
    }
    catch (err) {
        alert("CreatePrevNextCloseButton()- Error In JScript");
    }
}

function AddCtrlEvent(p_grid_name, p_ctrl_name, p_event_name, p_func) {
    try {
        m_grid_ctrl_ref = window.document.getElementById(p_grid_name);
        if (m_grid_ctrl_ref == null) {
            alert("Grid Error: " + p_grid_name);
            return;
        }

        for (iRow = 0; iRow < m_grid_ctrl_ref.rows.length; iRow++) {
            m_ctrl_name = p_grid_name + "_ctrl_" +p_ctrl_name+ "_"+ iRow;
            m_ctrl_name = m_ctrl_name.toUpperCase();
            m_ctrl_ref = window.document.getElementById(m_ctrl_name);

            if (m_ctrl_ref != null) {
                m_ctrl_ref.setAttribute(p_event_name, p_func);
            }
        }

    }
    catch (err) {
        alert("AddCtrlEvent()- Error In JScript");
    }
}


function GetCurrentRowIndex(p_curr_ctrl_ref) {
    try {
        if (p_curr_ctrl_ref == null) {
            alert("Invalid Row No");
            return -1;
        }

        m_ctrl_name = p_curr_ctrl_ref.id;
        m_temp_arr = m_ctrl_name.split("_");
        nIndex = m_temp_arr[m_temp_arr.length - 1];
        if (isNaN(nIndex) == true) {
            alert("Invalid Row No");
            return -1;
        }
        else {
            return nIndex;
        }
    }
    catch (err) {
        alert("GetCurrentRowIndex()- Error In JScript");
        return -1;
    }
}


function NoDataButton(p_root,
                      p_table,
                      p_table_body,
                      p_table_name,
                      p_prev_event,
                      p_next_event,
                      p_close_event,
                      p_paging_val) {
    try {

        row = CreateRow();

        //Adding Image
        p_ctrl_id = p_table_name + "_ctrl_no_data_found";
        p_ctrl_id = p_ctrl_id.toUpperCase();
        AddButton(row, p_ctrl_id, "", "no-data", "10px");

        AddRow(p_table_body, row);
        AddBody(p_table, p_table_body);
        AddTableInControl(p_root, p_table);

        if (p_close_event != "NA") {
            p_ctrl_ref_id = window.document.getElementById(p_ctrl_id);
            m_event = "DynamicHtmlTemplate_Close(\"" + p_close_event + "\");"
            p_ctrl_ref_id.setAttribute("onclick", m_event);
        }


    }
    catch (err) {
        alert("NoDataButton()- Error In JScript");
    }
}

function AddCtrlClass(p_grid_name, p_ctrl_name, p_class_name) {
    try {
        m_grid_ctrl_ref = window.document.getElementById(p_grid_name);
        if (m_grid_ctrl_ref == null) {
            alert("Grid Error: " + p_grid_name);
            return;
        }

        for (iRow = 0; iRow < m_grid_ctrl_ref.rows.length; iRow++) {
            m_ctrl_name = p_grid_name + "_ctrl_" + p_ctrl_name + "_" + iRow;
            m_ctrl_name = m_ctrl_name.toUpperCase();
            m_ctrl_ref = window.document.getElementById(m_ctrl_name);

            if (m_ctrl_ref != null) {
                if (m_ctrl_ref.value != "----") {
                    SetControlClass(m_ctrl_name, p_class_name);
                }
            }
        }

    }
    catch (err) {
        alert("AddCtrlClass()- Error In JScript");
    }
}

function SetAllCheckBoxStatus(p_grid_name, p_ctrl_name) {
    try {
        m_grid_ctrl_ref = window.document.getElementById(p_grid_name);
        if (m_grid_ctrl_ref == null) {
            alert("Grid Error: " + p_grid_name);
            return;
        }

        for (iRow = 0; iRow < m_grid_ctrl_ref.rows.length; iRow++) {
            m_ctrl_name = p_grid_name + "_ctrl_" + p_ctrl_name + "_" + iRow;
            m_ctrl_name = m_ctrl_name.toUpperCase();
            m_ctrl_ref = window.document.getElementById(m_ctrl_name);

            if (m_ctrl_ref != null) {
                if (m_ctrl_ref.value == 0) {
                    SetControlClass(m_ctrl_name, "cmd_button_check_box_off");
                }
                else {
                    SetControlClass(m_ctrl_name, "cmd_button_check_box_on");
                }
            }
        }

    }
    catch (err) {
        alert("SetAllCheckBoxStatus()- Error In JScript");
    }
}

function AddAllCtrlName(p_grid_name, p_ctrl_name) {
    try {
        m_grid_ctrl_ref = window.document.getElementById(p_grid_name);
        if (m_grid_ctrl_ref == null) {
            alert("Grid Error: " + p_grid_name);
            return;
        }

        for (iRow = 0; iRow < m_grid_ctrl_ref.rows.length; iRow++) {
            m_ctrl_name = p_grid_name + "_ctrl_" + p_ctrl_name + "_" + iRow;
            m_ctrl_name = m_ctrl_name.toUpperCase();
            m_ctrl_ref = window.document.getElementById(m_ctrl_name);

            if (m_ctrl_ref != null) {
                m_ctrl_ref.setAttribute("name", p_ctrl_name);
            }
        }

    }
    catch (err) {
        alert("AddAllCtrlName()- Error In JScript");
    }
}


function GetGridColumnTotal(p_grid_name, p_ctrl_name) {
    try {
        m_grid_ctrl_ref = window.document.getElementById(p_grid_name);
        if (m_grid_ctrl_ref == null) {
            alert("Grid Error: " + p_grid_name);
            return 0;
        }

        m_Total = 0;
        for (iRow = 0; iRow < m_grid_ctrl_ref.rows.length; iRow++) {
            m_ctrl_name = p_grid_name + "_ctrl_" + p_ctrl_name + "_" + iRow;
            m_ctrl_name = m_ctrl_name.toUpperCase();
            m_ctrl_ref = window.document.getElementById(m_ctrl_name);

            if (m_ctrl_ref != null) {
                if (m_ctrl_ref.value != "----") {
                    m_Total = m_Total + parseFloat(m_ctrl_ref.value);
                }
            }
        }

        return m_Total;
    }
    catch (err) {
        alert("GetGridColumnTotal()- Error In JScript");
        return 0;
    }
}

function ShowHideGridColumn(p_grid_name, p_ctrl_name,p_Flag) {
    try {
        m_grid_ctrl_ref = window.document.getElementById(p_grid_name);
        if (m_grid_ctrl_ref == null) {
            alert("Grid Error: " + p_grid_name);
            return;
        }

        for (iRow = 0; iRow < m_grid_ctrl_ref.rows.length; iRow++) {
            m_ctrl_name = p_grid_name + "_ctrl_" + p_ctrl_name + "_" + iRow;
            m_ctrl_name = m_ctrl_name.toUpperCase();
            m_ctrl_ref = window.document.getElementById(m_ctrl_name);

            if (m_ctrl_ref != null) {
                ShowHideControl(m_ctrl_name, p_Flag);
            }
        }

    }
    catch (err) {
        alert("ShowHideGridColumn()- Error In JScript");
    }
}




function SetAllCheckBoxValue(p_grid_name, p_ctrl_name,p_value) {
    try {
        m_grid_ctrl_ref = window.document.getElementById(p_grid_name);
        if (m_grid_ctrl_ref == null) {
            alert("Grid Error: " + p_grid_name);
            return;
        }

        for (iRow = 0; iRow < m_grid_ctrl_ref.rows.length; iRow++) {
            m_ctrl_name = p_grid_name + "_ctrl_" + p_ctrl_name + "_" + iRow;
            m_ctrl_name = m_ctrl_name.toUpperCase();
            m_ctrl_ref = window.document.getElementById(m_ctrl_name);

            if (m_ctrl_ref != null) {
                if (p_value == true) {
                    m_ctrl_ref.value = 1;
                    SetControlClass(m_ctrl_name, "cmd_button_check_box_on");
                }
                else {
                    m_ctrl_ref.value = 0;
                    SetControlClass(m_ctrl_name, "cmd_button_check_box_off");
                } 
            }

        }

    }
    catch (err) {
        alert("SetAllCheckBoxValue()- Error In JScript");
    }
}

function SetGridColumnBackColor(p_grid_name, p_ctrl_name, p_color_code) {
    try {
        m_grid_ctrl_ref = window.document.getElementById(p_grid_name);
        if (m_grid_ctrl_ref == null) {
            alert("Grid Error: " + p_grid_name);
            return;
        }

        for (iRow = 0; iRow < m_grid_ctrl_ref.rows.length; iRow++) {
            m_ctrl_name = p_grid_name + "_ctrl_" + p_ctrl_name + "_" + iRow;
            m_ctrl_name = m_ctrl_name.toUpperCase();
            m_ctrl_ref = window.document.getElementById(m_ctrl_name);
            

            if (m_ctrl_ref != null) {
                m_ctrl_ref.style.backgroundColor = p_color_code;
                m_ctrl_ref.parentNode.style.backgroundColor = p_color_code;
            }

        }

    }
    catch (err) {
        alert("SetGridColumnBackColor()- Error In JScript");
    }
}


