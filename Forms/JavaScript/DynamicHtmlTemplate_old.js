var g_TemplateArrKeyName = new Array();
var g_TemplateArrTable = new Array();
var g_TemplateArrRootContainer = new Array();
var g_TemplateArrGetDataBaseField = new Array();
var g_TemplateArrGetControlName = new Array();
var g_TemplateArrSetControlName = new Array();
var g_TemplateArrPageNo = new Array();
var g_TemplateArrSessionVarName = new Array();
var g_TemplateArrAllowSelection = new Array();
var g_TemplateArrRecordCount = new Array();
var g_TemplateArrCurrentRecord = new Array();
var g_TemplateArrRecNoPerPage = new Array();
var g_TemplateArrIsWindowCloseAfterSel = new Array();
var g_TemplateArrEventFunction = new Array();
var g_TemplateArrEventPrevFunction = new Array();
var g_TemplateArrEventNextFunction = new Array();
var g_TemplateArrEventCloseFunction = new Array();
var g_TemplateArrEventAfterPostPopulation = new Array();




var g_DynamicHtmlTemplate_KeyName = "";
var g_curr_index = -1;
var g_root_name = "";
var g_grid_name = "";
var g_grid_button_name = "";

function DynamicHtmlTemplate_AddKeyName(p_Key,p_Table,p_Root,p_sess_var) {
    try {
        g_TemplateArrKeyName.push(p_Key);
        g_TemplateArrTable.push(p_Table);
        g_TemplateArrRootContainer.push(p_Root);
        g_TemplateArrSessionVarName.push(p_sess_var);


        g_TemplateArrPageNo.push(1);
        g_TemplateArrRecordCount.push(0);
        g_TemplateArrCurrentRecord.push(0);

    }
    catch (err) {
        alert("DynamicHtmlTemplate_AddKeyName() - Error in JScript");
    }
}

function DynamicHtmlTemplate_GetControlName(p_Val) {
    try {
        g_TemplateArrGetControlName.push(p_Val);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_GetControlName() - Error in JScript");
    }
}

function DynamicHtmlTemplate_SetControlName(p_Val) {
    try {
        g_TemplateArrSetControlName.push(p_Val);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_SetControlName() - Error in JScript");
    }
}

function DynamicHtmlTemplate_AllowSelection(p_Val) {
    try {
        g_TemplateArrAllowSelection.push(p_Val);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_AllowSelection() - Error in JScript");
    }
}

function DynamicHtmlTemplate_AddDataParam(p_Arr) {
    try {
        g_TemplateArrGetDataBaseField.push(p_Arr);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_AddDataParam() - Error in JScript");
    }
}

function DynamicHtmlTemplate_EditDataParam(p_KeyName, p_Arr) {
    try {
        DynamicHtmlTemplate_GetCurrentControlIndex(p_KeyName)
        if (g_curr_index > -1) {
            g_TemplateArrGetDataBaseField[g_curr_index] = p_Arr;
        }
        else {
            alert("DynamicHtmlTemplate_EditDataParam() - Key Not Found");
        }
        
    }
    catch (err) {
        alert("DynamicHtmlTemplate_EditDataParam() - Error in JScript");
    }
}


function DynamicHtmlTemplate_AddRecNoPerPage(p_Val) {
    try {
        g_TemplateArrRecNoPerPage.push(p_Val);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_AddDataParam() - Error in JScript");
    }
}

function DynamicHtmlTemplate_CloseWndAfterSel(p_Val) {
    try {
        g_TemplateArrIsWindowCloseAfterSel.push(p_Val);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_CloseWndAfterSel() - Error in JScript");
    }
}

function DynamicHtmlTemplate_SetEventFunction(p_Val) {
    try {
        g_TemplateArrEventFunction.push(p_Val);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_CloseWndAfterSel() - Error in JScript");
    }
}

function DynamicHtmlTemplate_SetEventPrevFunction(p_Val) {
    try {
        g_TemplateArrEventPrevFunction.push(p_Val);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_SetEventPrevFunction() - Error in JScript");
    }
}

function DynamicHtmlTemplate_SetEventNextFunction(p_Val) {
    try {
        g_TemplateArrEventNextFunction.push(p_Val);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_SetEventNextFunction() - Error in JScript");
    }
}

function DynamicHtmlTemplate_SetEventCloseFunction(p_Val) {
    try {
        g_TemplateArrEventCloseFunction.push(p_Val);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_SetEventCloseFunction() - Error in JScript");
    }
}

function DynamicHtmlTemplate_EventAfterPostPopulation(p_Val) {
    try {
        g_TemplateArrEventAfterPostPopulation.push(p_Val);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_EventAfterPostPopulation() - Error in JScript");
    }
}



function DynamicHtmlTemplate_GetCurrentControlIndex(p_KeyName) {
    try {
        g_curr_index = GetArrayRowIndex(g_TemplateArrKeyName, p_KeyName);
        g_root_name = g_TemplateArrRootContainer[g_curr_index];
        g_grid_name = g_TemplateArrTable[g_curr_index];
        g_grid_button_name = g_grid_name + "_prev_close_next";

    }
    catch (err) {
        g_curr_index = -1;
        g_root_name = "NA";
        g_grid_name = "NA";
        g_grid_button_name = "NA";
        alert("DynamicHtmlTemplate_GetCurrentControlIndex() - Error in JScript");
    }
}


function DynamicHtmlTemplate_DeleteAllControl(p_KeyName) {
    try {
        DynamicHtmlTemplate_GetCurrentControlIndex(p_KeyName);
        DynamicHtmlTemplate_RemoveSessionVar();
        DynamicHtmlTemplate_CloseControl();
    }
    catch (err) {
        alert("DynamicHtmlTemplate_DeleteAll() - JScript Error");
    }
}

function DynamicHtmlTemplate_ResetAllControl(p_KeyName) {
    try {
        DynamicHtmlTemplate_GetCurrentControlIndex(p_KeyName);
        DynamicHtmlTemplate_CloseControl();
    }
    catch (err) {
        alert("DynamicHtmlTemplate_ResetAllControl() - JScript Error");
    }
}



function DynamicHtmlTemplate_CreateColumn(p_obj_arr,p_obj_count, p_KeyName) {
    try {
        

        DynamicHtmlTemplate_GetCurrentControlIndex(p_KeyName);


        if (g_root_name == "NA") {
            alert("Error In Array Setting");
            return;
        }
        DynamicHtmlTemplate_CloseControl();

        g_TemplateArrRecordCount[g_curr_index] = p_obj_count;
        g_TemplateArrCurrentRecord[g_curr_index] = -1;

        m_root = document.getElementById(g_root_name);
        m_table = CreateTable(g_grid_name, "table table-bordered table-vertical-middle nomargin table-striped");
        m_table_body = CreateBody();
        m_table_header = CreateHeading();


        var m_param = new Array();
        var m_param_arr = new Array();

        //-----Creating Column Heading
        m_row = CreateRow();

        for (nRow = 0; nRow < g_TemplateArrGetDataBaseField[g_curr_index].length; nRow++) {

            m_TempStr = g_TemplateArrGetDataBaseField[g_curr_index][nRow];
            m_param_arr = m_TempStr.split(",");

            if (m_param_arr[2] != "hidden_textbox") {
                if (m_param_arr[3] == "L") {
                    m_css = "text_box_heading_left";
                }
                else if (m_param_arr[3] == "R") {
                    m_css = "text_box_heading_right";
                }
                else if (m_param_arr[3] == "C") {
                    m_css = "text_box_heading_center";
                }
                else {
                    m_css = "text_box_heading_left";
                }
                AddHeading(m_row, m_param_arr[1], m_css, m_param_arr[4]);
            }


        }
         AddRow(m_table_header, m_row);
        m_table.appendChild(m_table_header);
        //---------------------------------------

        //Creating Data

        for (nRow = 0; nRow < g_TemplateArrGetDataBaseField[g_curr_index].length; nRow++) {

            m_TempStr = g_TemplateArrGetDataBaseField[g_curr_index][nRow];
            m_param_arr = m_TempStr.split(",");


            if (m_param_arr[3] == "L") {
                if (m_param_arr[2] == "enable_textbox" || m_param_arr[2] == "enable_textbox_multiline") {
                    m_css = "text_box pencil";
                }
                else {
                    m_css = "text_box";
                }
            }
            else if (m_param_arr[3] == "R") {
                if (m_param_arr[2] == "enable_textbox" || m_param_arr[2] == "enable_textbox_multiline") {
                    m_css = "text_box_number pencil";
                }
                else {
                    m_css = "text_box_number";
                }
            }
            else if (m_param_arr[3] == "C") {
                if (m_param_arr[2] == "enable_textbox" || m_param_arr[2] == "enable_textbox_multiline") {
                    m_css = "text_box_center pencil";
                }
                else {
                    m_css = "text_box_center";
                }
            }
            else {
                if (m_param_arr[2] == "enable_textbox" || m_param_arr[2] == "enable_textbox_multiline") {
                    m_css = "text_box pencil";
                }
                else {
                    m_css = "text_box";
                }
            }

            m_ControlName = g_grid_name + "_ctrl_" + m_param_arr[0];
            m_ControlName=m_ControlName.toUpperCase();

            m_str_param = m_ControlName +
                          "," + m_param_arr[2] +
                          "," + m_css +
                          "," + m_param_arr[4];


            m_param.push(m_str_param);
        }

        BindData(m_param, p_obj_arr, m_root, m_table, m_table_body);
        m_param = null;


        //Create close button
        m_table1 = CreateTable(g_grid_button_name, "");
        m_table_body1 = CreateBody();

        m_prev_but = g_grid_button_name + "_prev";
        m_close_but = g_grid_button_name + "_close";
        m_next_but = g_grid_button_name + "_next";
        m_page_box = g_grid_button_name + "_page";



        if (g_TemplateArrAllowSelection[g_curr_index] == "T" || g_TemplateArrAllowSelection[g_curr_index] == "TT") {
            //Creating OnClick Evwnt
            for (nCol = 0; nCol < g_TemplateArrGetDataBaseField[g_curr_index].length; nCol++) {
                m_TempStr = g_TemplateArrGetDataBaseField[g_curr_index][nCol];
                m_param_arr = m_TempStr.split(",");
                m_control_name = g_grid_name + "_ctrl_" + m_param_arr[0];
                m_control_name = m_control_name.toUpperCase();

                if (g_TemplateArrAllowSelection[g_curr_index] == "T") {
                    AddEvent(p_obj_arr, m_control_name, "ondblclick", "DynamicHtmlTemplate_SelectItemOnMouseClick(this);");
                }
                else if (g_TemplateArrAllowSelection[g_curr_index] == "TT") {
                    AddEvent(p_obj_arr, m_control_name, "onclick", "DynamicHtmlTemplate_SelectItemOnMouseClick(this);");
                }
            }
        }

        //--------Page Count , Next,Prev & Close--------
        nPageCount = g_TemplateArrRecordCount[g_curr_index] / g_TemplateArrRecNoPerPage[g_curr_index];
        nPageCount = parseInt(nPageCount)+1;
        m_StrPage = g_TemplateArrPageNo[g_curr_index]+1 + "/" + nPageCount;


        if (p_obj_count > -1) {
            CreatePrevNextCloseButton(m_root,
                                  m_table1,
                                  m_table_body1,
                                  g_TemplateArrTable[g_curr_index],
                                  g_TemplateArrEventPrevFunction[g_curr_index],
                                  g_TemplateArrEventNextFunction[g_curr_index],
                                  g_TemplateArrEventCloseFunction[g_curr_index],
                                  m_StrPage);
        }
        else {
            NoDataButton(m_root,
                                  m_table1,
                                  m_table_body1,
                                  g_TemplateArrTable[g_curr_index],
                                  g_TemplateArrEventPrevFunction[g_curr_index],
                                  g_TemplateArrEventNextFunction[g_curr_index],
                                  g_TemplateArrEventCloseFunction[g_curr_index],
                                  m_StrPage);
        }
        //-----------------------------


        if (g_TemplateArrEventAfterPostPopulation[g_curr_index] != "NA") {
            eval(g_TemplateArrEventAfterPostPopulation[g_curr_index]);
        }

    }
    catch (err) {
        alert("DynamicHtmlTemplate_CreateColumn()- Error In JScript");
    }
}


function DynamicHtmlTemplate_CloseControl() {
    try {
        if (g_root_name == "NA") {
            alert("Error In Array Setting");
            return;
        }

        DestroyGrid(g_grid_button_name, g_root_name);
        DestroyGrid(g_grid_name, g_root_name);
    }
    catch (err) {
        alert("MasterAcc - CloseAccCombo()- Error In JScript");
    }
}

function DynamicHtmlTemplate_Scroll(p_KeyName,p_Val) {
    try {
        DynamicHtmlTemplate_GetCurrentControlIndex(p_KeyName);
        
        if (p_Val == "U") {
            g_TemplateArrCurrentRecord[g_curr_index]--;
        }
        else {
            g_TemplateArrCurrentRecord[g_curr_index]++;
        }

        if (g_TemplateArrCurrentRecord[g_curr_index] < 0) {
            g_TemplateArrCurrentRecord[g_curr_index] = 0;
        }
        else if ( (g_TemplateArrRecNoPerPage[g_curr_index]>0) && (g_TemplateArrCurrentRecord[g_curr_index] > g_TemplateArrRecNoPerPage[g_curr_index]-1)) {
            g_TemplateArrCurrentRecord[g_curr_index] = g_TemplateArrRecNoPerPage[g_curr_index] - 1;
        }



        //-------------------------------
        //Creating All Row white background
        
        for(nRow=0;nRow<g_TemplateArrRecNoPerPage[g_curr_index];nRow++)
        {
            for (nCol = 0; nCol < g_TemplateArrGetDataBaseField[g_curr_index].length; nCol++) {

                m_TempStr = g_TemplateArrGetDataBaseField[g_curr_index][nCol];
                m_param_arr = m_TempStr.split(",");
                m_control_name = g_grid_name + "_ctrl_" + m_param_arr[0] + "_" + nRow;
                m_control_name = m_control_name.toUpperCase();
                m_control_ref = window.document.getElementById(m_control_name);
                if (m_control_ref != null) {
                    m_control_ref.style.backgroundColor = "white";
                }
            }
        }

        //Creating Curr Row red background
        for (nCol = 0; nCol < g_TemplateArrGetDataBaseField[g_curr_index].length; nCol++) {

            m_TempStr = g_TemplateArrGetDataBaseField[g_curr_index][nCol];
            m_param_arr = m_TempStr.split(",");
            m_control_name = g_grid_name + "_ctrl_" + m_param_arr[0] + "_" + g_TemplateArrCurrentRecord[g_curr_index];
            m_control_name = m_control_name.toUpperCase();
            m_control_ref = window.document.getElementById(m_control_name);

            if (m_control_ref != null) {
                m_control_ref.style.backgroundColor = "#d79c34";
            }
        }


        //-------------------------------


    }
    catch (err) {
        alert("DynamicHtmlTemplate_Scroll()- Error In JScript");
    }
}



function DynamicHtmlTemplate_SelectItemOnKeypress(p_KeyName) {
    try {
        DynamicHtmlTemplate_GetCurrentControlIndex(p_KeyName);
        m_grid_ref = window.document.getElementById(g_grid_name);
        if (m_grid_ref == null) {
            return;
        }
        

        m_TempStr = g_TemplateArrGetControlName[g_curr_index];
        m_TempArrField = m_TempStr.split(",");


        m_TempStr = g_TemplateArrSetControlName[g_curr_index];
        m_TempArrCtrl = m_TempStr.split(",");

        for (nRow = 0; nRow < m_TempArrField.length; nRow++) {
            m_control_name = g_grid_name + "_ctrl_" + m_TempArrField[nRow] + "_" + g_TemplateArrCurrentRecord[g_curr_index];
            m_control_name = m_control_name.toUpperCase();
            m_control_ref = window.document.getElementById(m_control_name);

            if (m_control_ref.value == "----") {
                alert("Invalid Value");
                return;
            }
            else {
                window.document.getElementById(m_TempArrCtrl[nRow]).value = m_control_ref.value;
            }
        }

        //Calling Event
        if (g_TemplateArrEventFunction[g_curr_index] != "NA") {
            m_event = g_TemplateArrEventFunction[g_curr_index];
            eval(m_event);
        }


        if (g_TemplateArrIsWindowCloseAfterSel[g_curr_index] == "T") {
            DynamicHtmlTemplate_DeleteAllControl(p_KeyName);
        }
    }
    catch (err) {
        alert("DynamicHtmlTemplate_SelectItemOnKeypress()- Error In JScript");
    }
}

function DynamicHtmlTemplate_SelectItemOnMouseClick(p_curr_ctrl_ref) {
    try {
        m_curr_ctrl_name = p_curr_ctrl_ref.id;

        nIndex = DynamicHtmlTemplate_GetCurrentControlIndexById(m_curr_ctrl_name);
        if (nIndex < 0) {
            alert("Invalid Selection");
            return;
        }

        //--------------------------------
        m_TempArrCurrRef = m_curr_ctrl_name.split("_");
        nCurrRow = m_TempArrCurrRef[m_TempArrCurrRef.length - 1];

        m_TempStr = g_TemplateArrGetControlName[nIndex];
        m_TempArrField = m_TempStr.split(",");
        


        m_TempStr = g_TemplateArrSetControlName[nIndex];
        m_TempArrCtrl = m_TempStr.split(",");

        m_grid_name = g_TemplateArrTable[nIndex];
        

        for (nRow = 0; nRow < m_TempArrField.length; nRow++) {
            m_control_name = m_grid_name + "_ctrl_" + m_TempArrField[nRow] + "_" + nCurrRow;
            m_control_name = m_control_name.toUpperCase();
            

            m_control_ref = window.document.getElementById(m_control_name);

            if (m_control_ref.value == "----") {
                alert("Invalid Value");
                return;
            }
            else {
                window.document.getElementById(m_TempArrCtrl[nRow]).value = m_control_ref.value;
            }
        }

        //Calling Event
        if (g_TemplateArrEventFunction[nIndex] != "NA") {
             m_event =  g_TemplateArrEventFunction[nIndex];
             eval(m_event);
         }


        if (g_TemplateArrIsWindowCloseAfterSel[nIndex] == "T") {
            DynamicHtmlTemplate_DeleteAllControl(g_TemplateArrKeyName[nIndex]);
        }

        
        //--------------------------------

    }
    catch (err) {
        alert("DynamicHtmlTemplate_SelectItemOnMouseClick()- Error In JScript: " + m_control_name);
    }
}

function DynamicHtmlTemplate_GetCurrentControlIndexById(p_CtrlId) {
    try {
        nIndex = -1;
        for (iRow = 0; iRow < g_TemplateArrTable.length; iRow++) {
            m_curr_val = g_TemplateArrTable[iRow];
            m_curr_val = m_curr_val.toUpperCase();

            if (p_CtrlId.search(m_curr_val)>-1) {
                nIndex = iRow;
                break;
            }
        }
        return nIndex; 
    }
    catch (err) {
        alert("DynamicHtmlTemplate_GetCurrentControlIndexById()- Error In JScript");
        return -1;
    }
}

//--------------------
function DynamicHtmlTemplate_RemoveSessionVar() {
    try {
        m_ArrSes = new Array;

        m_session_var_name = g_TemplateArrSessionVarName[g_curr_index];
        m_ArrSes.push(m_session_var_name);

        WebServiceMasters.RemoveSessionVar(m_ArrSes,
                                           OnCompleteRemoveSessionVar,
                                           OnErrorRemoveSessionVar,
                                           OnTimeOutRemoveSessionVar);
        
    }
    catch (err) {
        alert("DynamicHtmlTemplate_RemoveSessionVar()- Error In JScript");
    }
}
function OnCompleteRemoveSessionVar(arg) {

}
function OnErrorRemoveSessionVar(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutRemoveSessionVar(arg) {
    alert("Time Out");
}
//--------------------

function DynamicHtmlTemplate_Prev(p_Event) {
    try {
        eval(p_Event);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_Prev() - JScript");
    }
}

function DynamicHtmlTemplate_Next(p_Event) {
    try {
        eval(p_Event);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_Next() - JScript");
    }
}

function DynamicHtmlTemplate_Close(p_Event) {
    try {
        eval(p_Event);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_Close() - JScript");
    }
}


//------------------------------
function DynamicHtmlTemplate_NavigateList(p_KeyName, p_Flag) {
    try {

        DynamicHtmlTemplate_GetCurrentControlIndex(p_KeyName);
        g_DynamicHtmlTemplate_KeyName = p_KeyName;

        if (p_Flag == "PREV") {
            if (g_TemplateArrPageNo[g_curr_index] > 0) {
                g_TemplateArrPageNo[g_curr_index]--;
            }
        }
        else if (p_Flag == "NEXT") {
            g_TemplateArrPageNo[g_curr_index]++;
            nPageCount = g_TemplateArrRecordCount[g_curr_index] / g_TemplateArrRecNoPerPage[g_curr_index];
            nPageCount = parseInt(nPageCount);
            if (g_TemplateArrPageNo[g_curr_index] > nPageCount) {
                g_TemplateArrPageNo[g_curr_index] = nPageCount;
            }
        }
        else if (p_Flag == "FIRST") {
            g_TemplateArrPageNo[g_curr_index] = 0;
        }
        else if (p_Flag == "LAST") {
            nPageCount = g_TemplateArrRecordCount[g_curr_index] / g_TemplateArrRecNoPerPage[g_curr_index];
            g_TemplateArrPageNo[g_curr_index] = parseInt(nPageCount);
        }


        m_field_arr = GetDelemetedValue(g_TemplateArrGetDataBaseField[g_curr_index], ",", 0);
        m_session_var_name = g_TemplateArrSessionVarName[g_curr_index]
        m_NoOfRec = g_TemplateArrRecNoPerPage[g_curr_index];

        ShowWaitMsgWnd("Please Wait....");
        WebServiceMasters.NavigateList(m_session_var_name, g_TemplateArrPageNo[g_curr_index], m_field_arr,m_NoOfRec,
                                       OnCompleteDynamicHtmlTemplate_NavigateList,
                                       OnErrorDynamicHtmlTemplate_NavigateList, 
                                       OnTimeOutDynamicHtmlTemplate_NavigateList);
    }
    catch (err) {
        alert("MasterSetup_NavigateAccMst()- Error in JScript ");
    }
}
function OnCompleteDynamicHtmlTemplate_NavigateList(arg) {
    DestroyWaitMsgWnd();
    DynamicHtmlTemplate_CreateColumn(arg.m_List, arg.m_Count, g_DynamicHtmlTemplate_KeyName);
}
function OnErrorDynamicHtmlTemplate_NavigateList(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutDynamicHtmlTemplate_NavigateList(arg) {
    alert("Time Out");
}
//------------------------------

//----------------------------------
function DynamicHtmlTemplate_PopulateGrid(p_KeyName, p_sp_param,p_sp_name) {
    try {
        DynamicHtmlTemplate_GetCurrentControlIndex(p_KeyName);
        m_session_var_name = g_TemplateArrSessionVarName[g_curr_index];
        m_field_arr = GetDelemetedValue(g_TemplateArrGetDataBaseField[g_curr_index], ",", 0);

        g_DynamicHtmlTemplate_KeyName = p_KeyName;
        g_TemplateArrPageNo[g_curr_index] = 0;
        m_NoOfRec = g_TemplateArrRecNoPerPage[g_curr_index];

        ShowWaitMsgWnd("Please Wait");
               
        WebServiceMasters.GetData(m_session_var_name,
                                  m_field_arr,
                                  p_sp_param,
                                  p_sp_name,
                                  m_NoOfRec,
                                   OnCompleteDynamicHtmlTemplate_PopulateGrid,
                                   OnErrorDynamicHtmlTemplate_PopulateGrid,
                                   OnTimeOutDynamicHtmlTemplate_PopulateGrid);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_PopulateGrid() - JScript Error");
    }
}
function OnCompleteDynamicHtmlTemplate_PopulateGrid(arg) {
    DynamicHtmlTemplate_CreateColumn(arg.m_List, arg.m_Count, g_DynamicHtmlTemplate_KeyName);
    DestroyWaitMsgWnd();
}
function OnErrorDynamicHtmlTemplate_PopulateGrid(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutDynamicHtmlTemplate_PopulateGrid(arg) {
    alert("Time Out");
}
//-------------------------------------------------



function DynamicHtmlTemplate_OnKeyPressEvent(p_KeyCode,
                                             p_CtrlKeyName,
                                             p_SpParamArr,
                                             p_SpName,
                                             p_TextBoxVal,
                                             p_TextBoxValMinLen,
                                             p_db_flag) {
    if (p_KeyCode == 9 || p_KeyCode == 37 || p_KeyCode == 39) { //9:Tab Key 37:left arrow 39:right arrow
        return;
    }

   

    p_db_flag = typeof p_db_flag !== 'undefined' ? p_db_flag : 'ERP';

    try {
        if (p_KeyCode == 112) { //F1
            p_TextBoxVal = "%%";
            p_TextBoxValMinLen = 0;
        }
        else if (p_KeyCode == 0 || p_KeyCode == undefined) { //Mouse Click
            m_curr_cmb_val = document.activeElement.value;
            if (m_curr_cmb_val == undefined) {
                m_curr_cmb_val = "";
            }

            if (GetStringLength(m_curr_cmb_val) == 0) {
                p_TextBoxVal = "%%";
                p_TextBoxValMinLen = 0;
            }
            else if (GetStringLength(m_curr_cmb_val) > 0 && document.activeElement.type == "submit") {
                p_TextBoxVal = "%%";
                p_TextBoxValMinLen = 0;
                m_curr_cmb_val = "";
            }
            else {
                return;
            }
        }

        if (p_KeyCode == 27) { //Press Esc
            DynamicHtmlTemplate_DeleteAllControl(p_CtrlKeyName);
        }
        else if (p_KeyCode == 40) { //Press Down Arrow
            DynamicHtmlTemplate_Scroll(p_CtrlKeyName, "D");
        }
        else if (p_KeyCode == 38) { //Press Up Arrow
            DynamicHtmlTemplate_Scroll(p_CtrlKeyName, "U");
        }
        else if (p_KeyCode == 33) { //Press Page Up
            DynamicHtmlTemplate_NavigateList(p_CtrlKeyName, "PREV");
        }
        else if (p_KeyCode == 34) { //Press Page Down
            DynamicHtmlTemplate_NavigateList(p_CtrlKeyName, "NEXT");
        }
        else if (p_KeyCode == 13) { //Press Enter
            DynamicHtmlTemplate_SelectItemOnKeypress(p_CtrlKeyName);
        }
        else if (p_TextBoxVal.length > p_TextBoxValMinLen) {
            if (p_db_flag == "ERP") {
                DynamicHtmlTemplate_PopulateGrid(p_CtrlKeyName, p_SpParamArr, p_SpName);
            }
            else if (p_db_flag == "MASTER") {
                DynamicHtmlTemplate_PopulateGrid_FromMasterDb(p_CtrlKeyName, p_SpParamArr, p_SpName);
            }
            else {
                alert("Wrong Parameter ERP/MASTER");
            }
        }
        else if (p_TextBoxVal.length == p_TextBoxValMinLen) {
            DynamicHtmlTemplate_DeleteAllControl(p_CtrlKeyName);
        }

    }
    catch (err) {
        alert("DynamicHtmlTemplate_OnKeyPressEvent() - JScript Error");
    }

}


//----------------------------------
function DynamicHtmlTemplate_PopulateGridFromDataTable(p_KeyName,p_MasterSessionVar,p_Filter) {
    try {
        DynamicHtmlTemplate_GetCurrentControlIndex(p_KeyName);
        m_session_var_name = g_TemplateArrSessionVarName[g_curr_index];
        m_field_arr = GetDelemetedValue(g_TemplateArrGetDataBaseField[g_curr_index], ",", 0);

        g_DynamicHtmlTemplate_KeyName = p_KeyName;
        g_TemplateArrPageNo[g_curr_index] = 0;
        m_NoOfRec = g_TemplateArrRecNoPerPage[g_curr_index];

        ShowWaitMsgWnd("Please Wait..Working");


        WebServiceMasters.GetDataFromDataTable(p_MasterSessionVar,
                                                m_session_var_name,
                                                m_field_arr,
                                                p_Filter,
                                                m_NoOfRec,
                                                OnCompleteDynamicHtmlTemplate_PopulateGridFromDataTable,
                                                OnErrorDynamicHtmlTemplate_PopulateGridFromDataTable,
                                                OnTimeOutDynamicHtmlTemplate_PopulateGridFromDataTable);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_PopulateGrid() - JScript Error");
    }
}
function OnCompleteDynamicHtmlTemplate_PopulateGridFromDataTable(arg) {
    DestroyWaitMsgWnd();
    DynamicHtmlTemplate_CreateColumn(arg.m_List, arg.m_Count, g_DynamicHtmlTemplate_KeyName);
}
function OnErrorDynamicHtmlTemplate_PopulateGridFromDataTable(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeOutDynamicHtmlTemplate_PopulateGridFromDataTable(arg) {
    alert("Time Out");
}
//-------------------------------------------------


//----------------------------------
function DynamicHtmlTemplate_PopulateGrid_FromMasterDb(p_KeyName, p_sp_param, p_sp_name) {
    try {
        DynamicHtmlTemplate_GetCurrentControlIndex(p_KeyName);
        m_session_var_name = g_TemplateArrSessionVarName[g_curr_index];
        m_field_arr = GetDelemetedValue(g_TemplateArrGetDataBaseField[g_curr_index], ",", 0);

        g_DynamicHtmlTemplate_KeyName = p_KeyName;
        g_TemplateArrPageNo[g_curr_index] = 0;
        m_NoOfRec = g_TemplateArrRecNoPerPage[g_curr_index];


        ShowWaitMsgWnd("Please Wait");
        WebServiceMasters.GetDataFromMasterDb(m_session_var_name,
                                              m_field_arr,
                                              p_sp_param,
                                              p_sp_name,
                                              m_NoOfRec,
                                              OnCompleteDynamicHtmlTemplate_PopulateGrid_FromMasterDb,
                                              OnErrorDynamicHtmlTemplate_PopulateGrid_FromMasterDb,
                                              OnTimeDynamicHtmlTemplate_PopulateGrid_FromMasterDb);
    }
    catch (err) {
        alert("DynamicHtmlTemplate_PopulateGrid() - JScript Error");
    }
}
function OnCompleteDynamicHtmlTemplate_PopulateGrid_FromMasterDb(arg) {
    DestroyWaitMsgWnd();
    DynamicHtmlTemplate_CreateColumn(arg.m_List, arg.m_Count, g_DynamicHtmlTemplate_KeyName);
}
function OnErrorDynamicHtmlTemplate_PopulateGrid_FromMasterDb(arg) {
    alert("error has occured: " + arg._message);
}
function OnTimeDynamicHtmlTemplate_PopulateGrid_FromMasterDb(arg) {
    alert("Time Out");
}
//-------------------------------------------------


