import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Button, Box, CircularProgress } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TableViewIcon from '@mui/icons-material/TableView';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import axios from 'axios';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

const ExportPage=()=>{
    const[students,setStudents]=useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get(`https://3000-sesdevachary-stdmrkmgmt-v42c1lz37x9.ws-us117.gitpod.io/api/student`)
        .then(res=>{
            setStudents(res.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching student:', error);
            setLoading(false);
          });
      }, []);

      doc.setFontSize(16);
      doc.text('students List', 14, 15);
      doc.setFontSize(10);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 25);

         // Create table data
    const tableColumn = ["first_name", "unique_id", "mail_id", "current_address", "attendence","total_score","avg_cgpa"];
    const tableRows = students.map(student => [
      student.first_name,
      student.unique_id,
      student.mail_id,
      student.current_address,
      student.total_score,
      student.avg_cgpa,


      new Date(student.published_date).toLocaleDateString()
    ]);


    doc.autoTable({
        startY: 30,
        head: [tableColumn],
        body: tableRows,
        theme: 'grid',
        styles: { fontSize: 8 },
        headStyles: { fillColor: [41, 128, 185], textColor: 255 }
      });
  
      doc.save('Students-list.pdf');
    };


    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(students.map(student => ({
            first_name:student.first_name,
            unique_id:student.unique_id,
            mail_id:student.mail_id,
            current_address:student.current_address,
            total_score:student.total_score,
            avg_cgpa:student.avg_cgpa,
          'Published Date': new Date(student.published_date).toLocaleDateString(),
          Description: student.description
        })));

        const workbook = XLSX.utils.student_new();
        XLSX.utils.student_append_sheet(workbook, worksheet, "students")
        const excelBuffer = XLSX.write(workbook, { studentType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(data, 'students-list.xlsx');
      };

      const exportToCSV = () => {
        const worksheet = XLSX.utils.json_to_sheet(books.map(book => ({
            first_name:student.first_name,
            unique_id:student.unique_id,
            mail_id:student.mail_id,
            current_address:student.current_address,
            total_score:student.total_score,
            avg_cgpa:student.avg_cgpa,
      
          'Published Date': new Date(book.published_date).toLocaleDateString(),
          Description: book.description
        })));


    

}