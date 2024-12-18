
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


const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
  }));