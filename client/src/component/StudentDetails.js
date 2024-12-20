
import React, { useState, useEffect } from "react";
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Card,
  Button,
  CardMedia,
  Divider,
  Box,
} from '@mui/material';

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


const ShowStudentDetails = () => {
  const [student, setStudent] = useState({});
  const [openDialog, setOpenDialog] = useState(false); // controls the visibility of the confirmation dialog (used for the delete action).//


  // fetching the student url ID//
  const value = useParams();
  const id = value.id;
  const navigate = useNavigate();



  useEffect(() => {
    if (id) {
      axios
        .get(`https://3000-sesdevachary-stdmrkmgmt-v42c1lz37x9.ws-us117.gitpod.io/api/student/{id}`)
      .then((res) => {
        setStudent(res.data);
      })
        .catch((error) => {
          console.error('error  in fetching student details:', error);
        });
    }
  }, [id])



  const onDeleteClick = () => {
    setOpenDialog(true); // for deletion confirmation //
  };


  const handleDeleteConfirmation = () => {
    axios
      .delete(`https://3000-sesdevachary-stdmrkmgmt-v42c1lz37x9.ws-us117.gitpod.io/api/student`)
    .then((res) => {
      navigate('list');
    })
      .catch((err) => {
        console.log(`error in showStudentDetails_deleteLCick`);
      });
    setOpenDialog(false);

  };

  const handleCancelDelete = () => {
    setOpenDialog(false);
  }


  return (

    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                alt={student.first_name}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {student.first_name}
            </Typography>

            <Typography variant="h4" color='textSecondary' gutterBottom>
              {student.mail_id}
            </Typography>

            <Divider sx={{ my: 2 }} />


            <Box display="flex" flexDirection="column">
              <Typography variant='body1' paragraph>Name: {student.first_name}</Typography>
              <Typography variant='body1'>ID: {student.unique_id}</Typography>
              <Typography variant='body1'>Email: {student.mail_id}</Typography>
              <Typography variant='body1'>Address: {student.current_address}</Typography>
              <Typography variant='body1'>Attendance: {student.attendance}</Typography>
              <Typography variant='body1'>Score: {student.total_score}</Typography>
              <Typography variant='body1'>CGPA: {student.avg_cgpa}</Typography>
            </Box>
          </Grid>
        </Grid>


        {/* button part */}

        <Box mt="4" display="flex" justify-content="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink} // tells the button to act as link //
            to="/list"
            variant="outlined"
            color="primary">
            Back to student List
          </Button>

          { /*  Edit and Delete Button   */}

          <Box>

            <Button
              startIcon={<EditIcon />}
              component={RouterLink}
              to={`/edit/${student.unique_id}`}
              variant="contained"
              color="primary"
              sx={{ mr: 5 }}
            >   Edit
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={onDeleteClick}
              variant="contained"
              color="error"
            >  Delete
            </Button>
          </Box>
        </Box>
      </StyledPaper>



   {/* Keep the dialog unchanged */}
   <Dialog
        open={openDialog}
        onClose={handleCancelDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this student? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirmation} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>




    </Container>




  )
}
export default ShowStudentDetails;