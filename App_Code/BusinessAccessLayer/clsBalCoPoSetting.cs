using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Web.UI.WebControls;
using BAL;
using DAL;
using BO;
using XMLOBJ;

using System.Xml.Linq;
using System.Collections;
using System.Web.UI;


/// <summary>
/// Summary description for clsBalCoPoSetting
/// </summary>
/// 
namespace BAL
{
    public class clsBalCoPoSetting
    {
        clsBalCommonLib m_clsBalCommonLib;
        public clsBalCoPoSetting()
        {
            //
            // TODO: Add constructor logic here
            //
            m_clsBalCommonLib = new clsBalCommonLib();
        }

        ~clsBalCoPoSetting()
        {
            m_clsBalCommonLib = null;
        }

        public int SaveQuestionMaster(string p_PeriodId,
                                 string p_CourseId,
                                 string p_ExamMainId,
                                 string p_ExamDetailId,
                                 string p_QuestionId,
                                 string p_SubjectId,
                                 string p_SemNo,
                                 string p_QuestionNo,
                                 string p_QuestionDet,
                                 string p_CoId,
                                 string p_BloomId,
                                 string p_Marks

                               )
        {
            int m_RetVal = 0;

            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();



            DataTable m_DataTable = new DataTable();


            try
            {
                //Creating Store Proc
                m_clsDalDataHandle.ResetSpParam();
                m_clsDalDataHandle.AddSqlParameter("@p_branch_id", SqlDbType.Int, 0, HttpContext.Current.Session["G_BRANCH_ID"].ToString());
                m_clsDalDataHandle.AddSqlParameter("@p_PeriodId", SqlDbType.Decimal, 0, p_PeriodId);
                m_clsDalDataHandle.AddSqlParameter("@p_CourseId", SqlDbType.Decimal, 0, p_CourseId);
                m_clsDalDataHandle.AddSqlParameter("@p_ExamMainId", SqlDbType.Decimal, 0, p_ExamMainId);
                m_clsDalDataHandle.AddSqlParameter("@p_ExamDetailId", SqlDbType.Decimal, 0, p_ExamDetailId);
                m_clsDalDataHandle.AddSqlParameter("@p_QuestionId", SqlDbType.Decimal, 0, p_QuestionId);
                m_clsDalDataHandle.AddSqlParameter("@p_SubjectId", SqlDbType.Decimal, 0, p_SubjectId);
                m_clsDalDataHandle.AddSqlParameter("@p_SemNo", SqlDbType.Int, 0, p_SemNo);
                m_clsDalDataHandle.AddSqlParameter("@p_QuestionNo", SqlDbType.VarChar, 0, p_QuestionNo);
                m_clsDalDataHandle.AddSqlParameter("@p_QuestionDet", SqlDbType.VarChar, 0, p_QuestionDet);
                m_clsDalDataHandle.AddSqlParameter("@p_CoId", SqlDbType.Decimal, 0, p_CoId);
                m_clsDalDataHandle.AddSqlParameter("@p_BloomId", SqlDbType.Decimal, 0, p_BloomId);
                m_clsDalDataHandle.AddSqlParameter("@p_Marks", SqlDbType.Decimal, 0, p_Marks);

                m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Poco_Question_Master", 0);
                if (m_RetVal == 0)
                {
                    m_RetVal = Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
                }

            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsDalDataHandle = null;
                m_DataTable = null;


            }

            return m_RetVal;            
        }

        public int SavePoCoMarks(string p_CourseId,
                            string p_StreamId,
                            string p_PeriodId,
                            string p_SubjectId,
                            string p_SemNo,
                            string p_ExamMainId,
                            string p_ExamDetailId,
                            string[][] p_MainData,
                            string[][] p_DetData
                                )
        {
            int m_RetVal = 0;

            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            clsXmlMarksMain m_clsclsXmlMarksMain = new clsXmlMarksMain();
            clsXmlMarksDet m_clsXmlMarksDet = new clsXmlMarksDet();


            DataTable m_DataTable = new DataTable();
            string m_student_id;
            string m_marks;
            string m_is_present;
            string m_grade;
            string m_flag;
            string m_q_id;

            int nRow; 

            try
            {
                for (nRow = 0; nRow < p_MainData.Length; nRow++)
                {
                    m_student_id = p_MainData[nRow][0];
                    m_marks = p_MainData[nRow][1];
                    m_is_present = p_MainData[nRow][2];

                    m_clsclsXmlMarksMain.AddBlankRow();
                    m_clsclsXmlMarksMain.UpdateData("std_id", m_student_id);
                    m_clsclsXmlMarksMain.UpdateData("full_marks", m_marks);
                    m_clsclsXmlMarksMain.UpdateData("is_active", m_is_present);
                }

                for (nRow = 0; nRow < p_DetData.Length; nRow++)
                {
                    m_student_id = p_DetData[nRow][0];
                    m_q_id = p_DetData[nRow][1];
                    m_marks = p_DetData[nRow][2];
                    m_grade = p_DetData[nRow][3];
                    m_flag = p_DetData[nRow][4];

                    m_clsXmlMarksDet.AddBlankRow();
                    m_clsXmlMarksDet.UpdateData("std_id", m_student_id);
                    m_clsXmlMarksDet.UpdateData("q_id", m_q_id);
                    m_clsXmlMarksDet.UpdateData("marks", m_marks);
                    m_clsXmlMarksDet.UpdateData("grade", m_grade);
                    m_clsXmlMarksDet.UpdateData("flag", m_flag);
                }
                


                //Creating Store Proc
                m_clsDalDataHandle.ResetSpParam();
                m_clsDalDataHandle.AddSqlParameter("@p_branch_id", SqlDbType.Int, 0, HttpContext.Current.Session["G_BRANCH_ID"].ToString());
                m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.Decimal, 0, p_CourseId);
                m_clsDalDataHandle.AddSqlParameter("@p_stream_id", SqlDbType.Decimal, 0, p_StreamId);
                m_clsDalDataHandle.AddSqlParameter("@p_period_id", SqlDbType.Decimal, 0, p_PeriodId);
                m_clsDalDataHandle.AddSqlParameter("@p_subject_id", SqlDbType.Decimal, 0, p_SubjectId);
                m_clsDalDataHandle.AddSqlParameter("@p_sem_no", SqlDbType.Int, 0, p_SemNo);
                m_clsDalDataHandle.AddSqlParameter("@p_exam_main_id", SqlDbType.Decimal, 0, p_ExamMainId);
                m_clsDalDataHandle.AddSqlParameter("@p_exam_test_id", SqlDbType.Decimal, 0, p_ExamDetailId);
                m_clsDalDataHandle.AddSqlParameter("@p_main_xml", SqlDbType.Xml, 0, m_clsclsXmlMarksMain.GetXml().ToString());
                m_clsDalDataHandle.AddSqlParameter("@p_det_xml", SqlDbType.Xml, 0, m_clsXmlMarksDet.GetXml().ToString());


                m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Poco_Student_Wise_Marks", 0);
                if (m_RetVal == 0)
                {
                    m_RetVal = Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
                }

            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsDalDataHandle = null;
                m_clsclsXmlMarksMain = null;
                m_clsXmlMarksDet = null;
                m_DataTable = null;


            }

            return m_RetVal;
        }



        public int SaveProgramOutcomeMst(string p_PeriodId,
                            string p_CourseId,
                            string p_PoTypeId,
                            string p_ProgId,
                            string p_Sl,
                            string p_Desp,
                            string p_Det
                               )
        {
            int m_RetVal = 0;

            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();



            DataTable m_DataTable = new DataTable();


            try
            {
                //Creating Store Proc
                m_clsDalDataHandle.ResetSpParam();

                m_clsDalDataHandle.AddSqlParameter("@p_period_id", SqlDbType.Decimal, 0, p_PeriodId);
                m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.Decimal, 0, p_CourseId);
                m_clsDalDataHandle.AddSqlParameter("@p_prog_type_id", SqlDbType.Decimal, 0, p_PoTypeId);
                m_clsDalDataHandle.AddSqlParameter("@p_prog_id", SqlDbType.Decimal, 0, p_ProgId);
                m_clsDalDataHandle.AddSqlParameter("@p_sl", SqlDbType.VarChar, 0, p_Sl);
                m_clsDalDataHandle.AddSqlParameter("@p_desp", SqlDbType.VarChar, 0, p_Desp);
                m_clsDalDataHandle.AddSqlParameter("@p_detail", SqlDbType.VarChar, 0, p_Det);


                m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Program_Outcome_Mst", 0);
                if (m_RetVal == 0)
                {
                    m_RetVal = Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
                }

            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsDalDataHandle = null;
                m_DataTable = null;


            }

            return m_RetVal;
        }





        public int SaveCourseOutcomeMst(string p_PeriodId,
                            string p_SubjecteId,
                            string p_co_id,
                            string p_Sl,
                            string p_Det
                               )
        {
            int m_RetVal = 0;

            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();



            DataTable m_DataTable = new DataTable();


            try
            {
                //Creating Store Proc
                m_clsDalDataHandle.ResetSpParam();

                m_clsDalDataHandle.AddSqlParameter("@p_period_id", SqlDbType.Decimal, 0, p_PeriodId);
                m_clsDalDataHandle.AddSqlParameter("@p_subject_id", SqlDbType.Decimal, 0, p_SubjecteId);
                m_clsDalDataHandle.AddSqlParameter("@p_co_id", SqlDbType.Decimal, 0, p_co_id);
                m_clsDalDataHandle.AddSqlParameter("@p_sl", SqlDbType.VarChar, 0, p_Sl);
                m_clsDalDataHandle.AddSqlParameter("@p_detail", SqlDbType.VarChar, 0, p_Det);


                m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Course_Outcome_Mst", 0);
                if (m_RetVal == 0)
                {
                    m_RetVal = Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
                }

            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsDalDataHandle = null;
                m_DataTable = null;


            }

            return m_RetVal;
        }



        public int SaveSubjectWiseCoPoMapping(string p_PeriodId,
                            string p_CourseId,
                            string p_SubjectId,
                            string[][] p_DetData
                                )
        {
            int m_RetVal = 0;

            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            clsXmlSubjectWiseCopoMapping m_clsXmlSubjectWiseCopoMapping = new clsXmlSubjectWiseCopoMapping();



            DataTable m_DataTable = new DataTable();
            string m_co_id;
            string m_po_id;
            string m_scale;
            int nRow;

            try
            {
                for (nRow = 0; nRow < p_DetData.Length; nRow++)
                {
                    m_co_id = p_DetData[nRow][1];
                    m_po_id = p_DetData[nRow][3];
                    m_scale = p_DetData[nRow][5];

                    m_clsXmlSubjectWiseCopoMapping.AddBlankRow();
                    m_clsXmlSubjectWiseCopoMapping.UpdateData("CoId", m_co_id);
                    m_clsXmlSubjectWiseCopoMapping.UpdateData("PoId", m_po_id);
                    m_clsXmlSubjectWiseCopoMapping.UpdateData("Scale", m_scale);
                }

 



                //Creating Store Proc
                m_clsDalDataHandle.ResetSpParam();
                m_clsDalDataHandle.AddSqlParameter("@p_branch_id", SqlDbType.Int, 0, HttpContext.Current.Session["G_BRANCH_ID"].ToString());
                m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.Decimal, 0, p_CourseId);
                m_clsDalDataHandle.AddSqlParameter("@p_period_id", SqlDbType.Decimal, 0, p_PeriodId);
                m_clsDalDataHandle.AddSqlParameter("@p_subject_id", SqlDbType.Decimal, 0, p_SubjectId);
                m_clsDalDataHandle.AddSqlParameter("@p_det_xml", SqlDbType.Xml, 0, m_clsXmlSubjectWiseCopoMapping.GetXml().ToString());


                m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Poco_Subject_Wise_Copo_Mapping", 0);
                if (m_RetVal == 0)
                {
                    m_RetVal = Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
                }

            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsDalDataHandle = null;
                m_clsXmlSubjectWiseCopoMapping = null;

                m_DataTable = null;


            }

            return m_RetVal;
        }




        public int SaveSyllabus(string p_PeriodId,
                            string p_SubjectId,
                            string p_lecture,
                            string p_tutorial,
                            string p_practical,
                            string p_total_contact,
                            string p_credit,
                            string p_module_id,
                            string p_sub_module_id,
                            string p_sub_module_sl,
                            string p_topic,
                            string p_details,
                            string p_class_count
                                )
        {
            int m_RetVal = 0;

            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable = new DataTable();

            try
            {

                //Creating Store Proc
                m_clsDalDataHandle.ResetSpParam();
                m_clsDalDataHandle.AddSqlParameter("@p_batch_id", SqlDbType.Int, 0, p_PeriodId);
                m_clsDalDataHandle.AddSqlParameter("@p_subject_id", SqlDbType.Decimal, 0, p_SubjectId);
                m_clsDalDataHandle.AddSqlParameter("@p_lecture", SqlDbType.Decimal, 0, p_lecture);
                m_clsDalDataHandle.AddSqlParameter("@p_tutorial", SqlDbType.Decimal, 0, p_tutorial);
                m_clsDalDataHandle.AddSqlParameter("@p_lab", SqlDbType.Decimal, 0, p_practical);
                m_clsDalDataHandle.AddSqlParameter("@p_total_contact", SqlDbType.Decimal, 0, p_total_contact);
                m_clsDalDataHandle.AddSqlParameter("@p_credit", SqlDbType.Decimal, 0, p_credit);
                m_clsDalDataHandle.AddSqlParameter("@p_module_id", SqlDbType.Decimal, 0, p_module_id);
                m_clsDalDataHandle.AddSqlParameter("@p_sub_module_id", SqlDbType.Decimal, 0, p_sub_module_id);
                m_clsDalDataHandle.AddSqlParameter("@p_sub_module_sl", SqlDbType.Decimal, 0, p_sub_module_sl);
                m_clsDalDataHandle.AddSqlParameter("@p_topic", SqlDbType.VarChar, 0, p_topic);
                m_clsDalDataHandle.AddSqlParameter("@p_details", SqlDbType.VarChar, 0, p_details);
                m_clsDalDataHandle.AddSqlParameter("@p_class_count", SqlDbType.Decimal, 0,p_class_count);

                m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Poco_Batch_Subject_Wise_Syllabus", 0);
                if (m_RetVal == 0)
                {
                    m_RetVal = Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
                }

            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsDalDataHandle = null;

                m_DataTable = null;


            }

            return m_RetVal;
        }



        public int RemoveSyllabusModule(string p_PeriodId,
                            string p_SubjectId,
                            string p_module_id,
                            string p_sub_module_id
                                )
        {
            int m_RetVal = 0;

            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();
            DataTable m_DataTable = new DataTable();

            try
            {

                //Creating Store Proc
                m_clsDalDataHandle.ResetSpParam();
                m_clsDalDataHandle.AddSqlParameter("@p_batch_id", SqlDbType.Int, 0, p_PeriodId);
                m_clsDalDataHandle.AddSqlParameter("@p_subject_id", SqlDbType.Decimal, 0, p_SubjectId);
                m_clsDalDataHandle.AddSqlParameter("@p_module_id", SqlDbType.Decimal, 0, p_module_id);
                m_clsDalDataHandle.AddSqlParameter("@p_sub_module_id", SqlDbType.Decimal, 0, p_sub_module_id);

                m_RetVal = m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Delete_Poco_Batch_Subject_Wise_Syllabus_Detail", 0);
                if (m_RetVal == 0)
                {
                    m_RetVal = Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
                }

            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsDalDataHandle = null;

                m_DataTable = null;


            }

            return m_RetVal;
        }



        public int GetSyllabusFromExcel(string p_file_name, int p_sheet_no)
        {
            int m_RetVal = 0;

            string fileLocation = HttpContext.Current.Server.MapPath("~/UploadedSyllabusExcel/" + p_file_name);
            string connectionString = "";
            
            //Check whether file extension is xls or xslx
            connectionString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + fileLocation + ";Extended Properties=\"Excel 12.0;HDR=Yes;IMEX=2\"";


            try
            {
   

                //Create OleDB Connection and OleDb Command

                System.Data.OleDb.OleDbConnection con = new System.Data.OleDb.OleDbConnection(connectionString);
                System.Data.OleDb.OleDbCommand cmd = new System.Data.OleDb.OleDbCommand();
                cmd.CommandType = System.Data.CommandType.Text;
                cmd.Connection = con;
                System.Data.OleDb.OleDbDataAdapter dAdapter = new System.Data.OleDb.OleDbDataAdapter(cmd);
                DataTable dtExcelRecords = new DataTable();
                con.Open();
                DataTable dtExcelSheetName = con.GetOleDbSchemaTable(System.Data.OleDb.OleDbSchemaGuid.Tables, null);
                string getExcelSheetName = dtExcelSheetName.Rows[p_sheet_no]["Table_Name"].ToString();

                if (p_sheet_no == 1)
                {
                    getExcelSheetName = "01SUBJECT$";
                    cmd.CommandText = "SELECT [KEY_CODE],[DETAILS] FROM [" + getExcelSheetName + "]  where [KEY_CODE] is not null";
                }
                else if (p_sheet_no == 2)
                {
                    getExcelSheetName = "02CO_DETAILS$";
                    cmd.CommandText = "SELECT [CO],[DETAILS] FROM [" + getExcelSheetName + "]  where [CO] is not null";
                }
                else if (p_sheet_no == 3)
                {
                    getExcelSheetName = "03MODULE_DETAILS$";
                    cmd.CommandText = "SELECT [MODULE],[MODULE_DETAILS],[SUB_MODULE_DETAILS],[LECTURE] FROM [" + getExcelSheetName + "] where [MODULE] is not null";
                }
                else if (p_sheet_no == 4)
                {
                    getExcelSheetName = "04COPO_MAPPING$";               
                    cmd.CommandText = "SELECT [CO],[PO1],[PO2],[PO3],[PO4],[PO5],[PO6],[PO7],[PO8],[PO9],[PO10],[PO11],[PO12] FROM [" + getExcelSheetName + "] where [CO] is not null";
                }

                dAdapter.SelectCommand = cmd;
                dAdapter.Fill(dtExcelRecords);
                con.Close();

                HttpContext.Current.Session["S_SYLLABUS_DATA"] = dtExcelRecords; 


            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {

               


            }

            return m_RetVal;
        }




        public int SaveModuleDetExcel(string p_PeriodId,string p_SubjectId)
        {
            int m_RetVal = 0;

            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();



            DataTable m_DataTable = new DataTable();
            DataTable m_ExcelDataTable = new DataTable();
            int nRow;

            m_ExcelDataTable = (DataTable)HttpContext.Current.Session["S_SYLLABUS_DATA"];

            try
            {
                for (nRow = 0; nRow < m_ExcelDataTable.Rows.Count; nRow++)
                {


                    //Creating Store Proc
                    m_clsDalDataHandle.ResetSpParam();
                    m_clsDalDataHandle.AddSqlParameter("@p_batch_id", SqlDbType.Int, 0, p_PeriodId);
                    m_clsDalDataHandle.AddSqlParameter("@p_subject_id", SqlDbType.Decimal, 0, p_SubjectId);
                    m_clsDalDataHandle.AddSqlParameter("@p_module_key", SqlDbType.VarChar, 0, m_ExcelDataTable.Rows[nRow]["module"].ToString());
                    m_clsDalDataHandle.AddSqlParameter("@p_module_det", SqlDbType.VarChar, 0, m_ExcelDataTable.Rows[nRow]["module_details"].ToString());
                    m_clsDalDataHandle.AddSqlParameter("@p_sub_module_det", SqlDbType.VarChar, 0, m_ExcelDataTable.Rows[nRow]["sub_module_details"].ToString());
                    m_clsDalDataHandle.AddSqlParameter("@p_class_count", SqlDbType.VarChar, 0, m_ExcelDataTable.Rows[nRow]["lecture"].ToString());


                    m_RetVal = m_RetVal + m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Poco_Batch_Subject_Wise_Syllabus_Detail_Excel", 0);
                    if (m_RetVal == 0)
                    {
                        m_RetVal = m_RetVal + Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
                    }
                }

            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsDalDataHandle = null;

                m_DataTable = null;


            }

            return m_RetVal;
        }


        public int SaveCourseOutcomeMstExcel(string p_PeriodId,string p_SubjectId)
        {
            int m_RetVal = 0;

            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();



            DataTable m_DataTable = new DataTable();
            DataTable m_ExcelDataTable = new DataTable();
            int nRow;

            m_ExcelDataTable = (DataTable)HttpContext.Current.Session["S_SYLLABUS_DATA"];

            try
            {
                for (nRow = 0; nRow < m_ExcelDataTable.Rows.Count; nRow++)
                {


                    //Creating Store Proc
                    m_clsDalDataHandle.ResetSpParam();
                    m_clsDalDataHandle.AddSqlParameter("@p_period_id", SqlDbType.Int, 0, p_PeriodId);
                    m_clsDalDataHandle.AddSqlParameter("@p_subject_id", SqlDbType.Decimal, 0, p_SubjectId);
                    m_clsDalDataHandle.AddSqlParameter("@p_sl", SqlDbType.VarChar, 0, m_ExcelDataTable.Rows[nRow]["co"].ToString());
                    m_clsDalDataHandle.AddSqlParameter("@p_detail", SqlDbType.VarChar, 0, m_ExcelDataTable.Rows[nRow]["details"].ToString());
                    

                    m_RetVal = m_RetVal + m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Course_Outcome_Mst_Excel", 0);
                    if (m_RetVal == 0)
                    {
                        m_RetVal = m_RetVal + Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
                    }
                }

            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsDalDataHandle = null;

                m_DataTable = null;


            }

            return m_RetVal;
        }


        public int SaveSubjectWiseCoPoMappingExcel(string p_branch_id, string p_course_id, string p_PeriodId, string p_SubjectId)
        {
            int m_RetVal = 0;

            clsDalDataHandle m_clsDalDataHandle = new clsDalDataHandle();

            string m_field="";

            DataTable m_DataTable = new DataTable();
            DataTable m_ExcelDataTable = new DataTable();
            int nRow;

            m_ExcelDataTable = (DataTable)HttpContext.Current.Session["S_SYLLABUS_DATA"];

            try
            {
                for (nRow = 0; nRow < m_ExcelDataTable.Rows.Count; nRow++)
                {

                    for (int nCol = 1; nCol <= 12; nCol++)
                    {
                        m_field = "PO" + nCol.ToString();

                        //Creating Store Proc
                        m_clsDalDataHandle.ResetSpParam();
                        m_clsDalDataHandle.AddSqlParameter("@p_college_id", SqlDbType.Int, 0, p_branch_id);
                        m_clsDalDataHandle.AddSqlParameter("@p_batch_id", SqlDbType.Int, 0, p_PeriodId);
                        m_clsDalDataHandle.AddSqlParameter("@p_subject_id", SqlDbType.Int, 0, p_SubjectId);
                        m_clsDalDataHandle.AddSqlParameter("@p_course_id", SqlDbType.Int, 0, p_course_id);
                        m_clsDalDataHandle.AddSqlParameter("@p_co", SqlDbType.VarChar, 0, m_ExcelDataTable.Rows[nRow]["co"].ToString());
                        m_clsDalDataHandle.AddSqlParameter("@p_po", SqlDbType.VarChar, 0, m_field);
                        m_clsDalDataHandle.AddSqlParameter("@p_scale", SqlDbType.VarChar, 0, m_ExcelDataTable.Rows[nRow][m_field].ToString());


                        m_RetVal = m_RetVal + m_clsDalDataHandle.GetDataTable(ref m_DataTable, "Proc_Save_Poco_Subject_Wise_Copo_Mapping_Excel", 0);
                        if (m_RetVal == 0)
                        {
                            m_RetVal = m_RetVal + Convert.ToInt16(m_clsDalDataHandle.GetValueFromDataTable(m_DataTable, 0, "err_no"));
                            if (m_RetVal > 0)
                            {
                                m_field = "PO" + nCol.ToString();
                            }
                        }
                    }

                }

            }
            catch (Exception ex)
            {
                m_RetVal = 1;
            }
            finally
            {
                m_clsDalDataHandle = null;

                m_DataTable = null;


            }

            return m_RetVal;
        }


//-------------------------------------------------------
    }
}