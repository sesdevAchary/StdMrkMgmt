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

      


    

}