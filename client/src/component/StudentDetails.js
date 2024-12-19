
import React ,{useState , useEffect} from "react";
import { useparams, Link as RouterLink ,useNavigate } from 'react-router-dom';
import {
    Container,
    Paper,
    Typography,
    Grid,
    Button,
    Card,
    CardMedia,
    Divider,
    Box, } from '@mui/material';

import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import axios from "axios";


const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    borderRadius: '12px',
    boxShadow: theme.shadows[3],
  }));


  const showStudentDetails=()=>{
    const[student,setStudent]=useState({});
    const[openDialog,setOpenDialog]=useState(false); // controls the visibility of the confirmation dialog (used for the delete action).//
  

    // fetching the student url ID//
    const value= useparams();
    const id= value.id;
    const navigate =  useNavigate();



    useEffect ( ()=>{
        if (id) {
            axios.
             get(`https://3000-sesdevachary-stdmrkmgmt-v42c1lz37x9.ws-us117.gitpod.io/api/student/{id}`);
             then((res)=>{
                setStudent(res.data);
             })
             .catch((err)=>{
                console.err('error  in fetching student details:',err);
             });
        }
    } ,[id])



    const onDeleteClick=()=>{
      setOpenDialog(true); // for deletion confirmation //
    };


    const handleDeleteConfirmation=()=>{
      axios.
      delete(`https://3000-sesdevachary-stdmrkmgmt-v42c1lz37x9.ws-us117.gitpod.io/api/student`);
      then((res)=>{
        navigate(list);
      })
      .catch((err)=>{
        console.log(`error in showStudentDetails_deleteLCick`);
      });
      setOpenDialog(false);

      };

      const hadnleCancelDelete=()=>{
        setOpenDialog(false);
      }
    

  }
  export default showStudentDetails;