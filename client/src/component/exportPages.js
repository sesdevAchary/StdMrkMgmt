// import React, { useState, useEffect } from 'react';
// import { Container, Paper, Typography, Button, Box, CircularProgress } from '@mui/material';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import TableViewIcon from '@mui/icons-material/TableView';
// import DownloadIcon from '@mui/icons-material/Download';
// import DescriptionIcon from '@mui/icons-material/Description';
// import axios from 'axios';
// import { saveAs } from 'file-saver';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import * as XLSX from 'xlsx';

// const ExportPage=()=>{
//     const[students,setStudents]=useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(()=>{
//         axios.get(`https://3000-sesdevachary-stdmrkmgmt-v42c1lz37x9.ws-us117.gitpod.io/api/student`)
//         .then(res=>{
//             setStudents(res.data);
//             setLoading(false);
//         })
//         .catch(error => {
//             console.error('Error fetching student:', error);
//             setLoading(false);
//           });
//       }, []);
//       const exportToPDF = () => {
//         const doc = new jsPDF();
        
//       doc.setFontSize(16);
//       doc.text('students List', 14, 15);
//       doc.setFontSize(10);
//       doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 25);

//          // Create table data
//     const tableColumn = ["first_name", "unique_id", "mail_id", "current_address", "attendence","total_score","avg_cgpa"];
//     const tableRows = students.map(student => [
//       student.first_name,
//       student.unique_id,
//       student.mail_id,
//       student.current_address,
//       student.total_score,
//       student.avg_cgpa,


//       new Date(student.published_date).toLocaleDateString()
//     ]);


//     doc.autoTable({
//         startY: 30,
//         head: [tableColumn],
//         body: tableRows,
//         theme: 'grid',
//         styles: { fontSize: 8 },
//         headStyles: { fillColor: [41, 128, 185], textColor: 255 }
//       });
  
//       doc.save('Students-list.pdf');
    
//     }

//     const exportToExcel = () => {
//         const worksheet = XLSX.utils.json_to_sheet(students.map(student => ({
//             first_name:student.first_name,
//             unique_id:student.unique_id,
//             mail_id:student.mail_id,
//             current_address:student.current_address,
//             total_score:student.total_score,
//             avg_cgpa:student.avg_cgpa,
//           'Published Date': new Date(student.published_date).toLocaleDateString(),
//           Description: student.description
//         })));

//         const workbook = XLSX.utils.student_new();
//         XLSX.utils.student_append_sheet(workbook, worksheet, "students")
//         const excelBuffer = XLSX.write(workbook, { studentType: 'xlsx', type: 'array' });
//         const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//         saveAs(data, 'students-list.xlsx');
//       };

//       const exportToCSV = () => {
//         const worksheet = XLSX.utils.json_to_sheet(students.map(book => ({
//             first_name:students.first_name,
//             unique_id:students.unique_id,
//             mail_id:students.mail_id,
//             current_address:students.current_address,
//             total_score:students.total_score,
//             avg_cgpa:students.avg_cgpa,
      
//           'Published Date': new Date(students.published_date).toLocaleDateString(),
//           Description: book.description
//         })));

//         const csv = XLSX.utils.sheet_to_csv(worksheet);
//         const data = new Blob([csv], { type: 'text/csv;charset=utf-8' });
//         saveAs(data, 'student-list.csv');
//       };

//       const exportToText = () => {
//         let content = 'BOOKS LIST\n\n';
//         content += `Generated on: ${new Date().toLocaleDateString()}\n\n`;
        
//         students.forEach((student, index) => {
//           content += `${index + 1}. STUDENT DETAILS\n`;
//           content += `first_name: ${student.first_name}\n`;
//           content += `unique_id: ${student.unique_id}\n`;
//           content += `mail_id: ${student.mail_id}\n`;
//           content += `current_address: ${student.current_address}\n`;
//           content += `total_score: ${student.total_score}\n`;
//           content += `avg_cgpa: ${student.avg_cgpa}\n`;


//           content += `Description: ${student.description || 'N/A'}\n`;
//           content += '\n----------------------------\n\n';
//         });
    
//         const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
//         saveAs(blob, 'student-list.txt');
//       };
//       if (loading) {
//         return (
//           <Container sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
//             <CircularProgress />
//           </Container>
//         );
//     };
//     return (
//         <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
//           <Paper sx={{ p: 4 }}>
//             <Typography variant="h4" gutterBottom align="center" color="primary">
//               Export Student
//             </Typography>
            
//             <Typography variant="body1" sx={{ mb: 4 }} align="center" color="text.secondary">
//               Export your Student collection in different formats
//             </Typography>
    
//             <Box sx={{ 
//               display: 'grid', 
//               gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
//               gap: 3,
//               mt: 4 
//             }}>
//               <Button
//                 variant="contained"
//                 size="large"
//                 startIcon={<PictureAsPdfIcon />}
//                 onClick={exportToPDF}
//                 sx={{ p: 2 }}
//               >
//                 Export as PDF
//               </Button>
    
//               <Button
//                 variant="contained"
//                 size="large"
//                 startIcon={<TableViewIcon />}
//                 onClick={exportToCSV}
//                 sx={{ p: 2 }}
//               >
//                 Export as CSV
//               </Button>
    
//               <Button
//                 variant="contained"
//                 size="large"
//                 startIcon={<DownloadIcon />}
//                 onClick={exportToExcel}
//                 sx={{ p: 2 }}
//               >
//                 Export as Excel
//               </Button>
    
//               <Button
//                 variant="contained"
//                 size="large"
//                 startIcon={<DescriptionIcon />}
//                 onClick={exportToText}
//                 sx={{ p: 2 }}
//               >
//                 Export as Text
//               </Button>
//             </Box>
    
//             <Typography variant="body2" sx={{ mt: 4 }} align="center" color="text.secondary">
//               Total students: {students.length}
//             </Typography>
//           </Paper>
//         </Container>
//       );
//     };
    
//     export default ExportPage;








import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import TableViewIcon from "@mui/icons-material/TableView";
import DownloadIcon from "@mui/icons-material/Download";
import DescriptionIcon from "@mui/icons-material/Description";
import axios from "axios";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";

const ExportPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch students from API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "https://3000-sesdevachary-stdmrkmgmt-v42c1lz37x9.ws-us117.gitpod.io/api/student"
        );
        setStudents(response.data || []);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Export functions
  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumns = [
      "First Name",
      "Unique ID",
      "Mail ID",
      "Address",
      "Attendance",
      "Total Score",
      "Average CGPA",
    ];

    const tableRows = students.map((student) => [
      student.first_name || "N/A",
      student.unique_id || "N/A",
      student.mail_id || "N/A",
      student.current_address || "N/A",
      student.attendance || "N/A",
      student.total_score || "N/A",
      student.avg_cgpa || "N/A",
    ]);

    doc.setFontSize(16);
    doc.text("Students List", 14, 15);
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 25);

    doc.autoTable({
      startY: 30,
      head: [tableColumns],
      body: tableRows,
      theme: "grid",
      styles: { fontSize: 8 },
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    });

    doc.save("students-list.pdf");
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      students.map((student) => ({
        FirstName: student.first_name || "N/A",
        UniqueID: student.unique_id || "N/A",
        MailID: student.mail_id || "N/A",
        Address: student.current_address || "N/A",
        Attendance: student.attendance || "N/A",
        TotalScore: student.total_score || "N/A",
        AverageCGPA: student.avg_cgpa || "N/A",
      }))
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(data, "students-list.xlsx");
  };

  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      students.map((student) => ({
        FirstName: student.first_name || "N/A",
        UniqueID: student.unique_id || "N/A",
        MailID: student.mail_id || "N/A",
        Address: student.current_address || "N/A",
        Attendance: student.attendance || "N/A",
        TotalScore: student.total_score || "N/A",
        AverageCGPA: student.avg_cgpa || "N/A",
      }))
    );

    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const data = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(data, "students-list.csv");
  };

  const exportToText = () => {
    let content = `STUDENTS LIST\n\nGenerated on: ${new Date().toLocaleDateString()}\n\n`;

    students.forEach((student, index) => {
      content += `${index + 1}. Student Details\n`;
      content += `First Name: ${student.first_name || "N/A"}\n`;
      content += `Unique ID: ${student.unique_id || "N/A"}\n`;
      content += `Mail ID: ${student.mail_id || "N/A"}\n`;
      content += `Address: ${student.current_address || "N/A"}\n`;
      content += `Attendance: ${student.attendance || "N/A"}\n`;
      content += `Total Score: ${student.total_score || "N/A"}\n`;
      content += `Average CGPA: ${student.avg_cgpa || "N/A"}\n\n`;
    });

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "students-list.txt");
  };

  // Render Loading State
  if (loading) {
    return (
      <Container sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <CircularProgress />
      </Container>
    );
  }

  // Render Main UI
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Export Students
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }} align="center" color="text.secondary">
          Export your student data in various formats
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 3,
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<PictureAsPdfIcon />}
            onClick={exportToPDF}
            sx={{ p: 2 }}
          >
            Export as PDF
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<TableViewIcon />}
            onClick={exportToCSV}
            sx={{ p: 2 }}
          >
            Export as CSV
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<DownloadIcon />}
            onClick={exportToExcel}
            sx={{ p: 2 }}
          >
            Export as Excel
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<DescriptionIcon />}
            onClick={exportToText}
            sx={{ p: 2 }}
          >
            Export as Text
          </Button>
        </Box>
        <Typography
  variant="h4"
  sx={{
    mt: 6,
    p: 2,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'dark.main',
    borderRadius: 10,
    boxShadow: 6,
  }}
>
  Total Students: {students.length}
</Typography>

      </Paper>
    </Container>
  );
};

export default ExportPage;
