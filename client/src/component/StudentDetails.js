



// import React, { useState, useEffect } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Container, Paper, Typography, Grid, Button, Card, CardMedia, Divider, Box } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
// import { styled } from '@mui/material/styles';

// // Define StyledPaper using Material-UI's styled function
// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   marginTop: theme.spacing(4),
//   marginBottom: theme.spacing(4),
//   backgroundColor: theme.palette.background.paper,
//   boxShadow: theme.shadows[3],
// }));

// const ShowStudentDetails = () => {
//   const [student, setStudent] = useState({});
//   const [openDialog, setOpenDialog] = useState(false);
//   const { id } = useParams();  // Destructure 'id' directly from useParams()
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id) {
//       axios
//         .get(`https://stdmrkmgmt.onrender.com/api/student/${id}`)
//         .then((res) => {
//           setStudent(res.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   }, [id]);

//   const onDeleteClick = () => {
//     setOpenDialog(true);
//   };

//   const handleDeleteConfirmation = () => {
//     axios
//       .delete(`https://stdmrkmgmt.onrender.com/api/student/${id}`)
//       .then(() => {
//         navigate('/list');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     setOpenDialog(false);
//   };

//   const handleCancelDelete = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <Container maxWidth="md">
//       <StyledPaper>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="300"
//                 image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
//                 alt={student.name}
//               />
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={8}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               {student.first_name}
//             </Typography>
            
//             <Typography variant="h6" color="textSecondary" gutterBottom>
//               {student.unique_id}
//             </Typography>

//             <Divider sx={{ my: 2 }} />
//             <Box display="flex" flexDirection="column">
//               <Typography variant="body1" >
//                 Name: {student.first_name}
//               </Typography>
//               <Typography variant="body1">ID: {student.unique_id}</Typography>
//               <Typography variant="body1">Email: {student.mail_id}</Typography>
//               <Typography variant="body1">Address: {student.current_address}</Typography>
//               <Typography variant="body1">Score: {student.total_score}</Typography>
//               <Typography variant="body1">CGPA: {student.avg_cgpa}</Typography>
//             </Box>
//           </Grid>
//         </Grid>
//         <Box mt={4} display="flex" justifyContent="space-between">
//           <Button
//             startIcon={<ArrowBackIcon />}
//             component={Link}
//             to="/list"
//             variant="outlined"
//           >
//             Back to Student List
//           </Button>
//           <Box>
//             <Button
//               startIcon={<EditIcon />}
//               component={Link}
//               to={`/edit/${id}`}  // Fixed edit URL to correctly point to the student edit page
//               variant="contained"
//               color="primary"
//               sx={{ mr: 1 }}
//             >
//               Edit Student
//             </Button>
//             <Button
//               startIcon={<DeleteIcon />}
//               onClick={onDeleteClick}
//               variant="contained"
//               color="error"
//             >
//               Delete Student
//             </Button>
//           </Box>
//         </Box>
//       </StyledPaper>

//       {/* Confirmation Dialog */}
//       <Dialog
//         open={openDialog}
//         onClose={handleCancelDelete}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Are you sure you want to delete this student? This action cannot be undone.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCancelDelete} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleDeleteConfirmation} color="error" autoFocus>
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default ShowStudentDetails;





import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Paper, Typography, Grid, Button, Card, CardMedia, Divider, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { styled } from '@mui/material/styles';

// Define StyledPaper using Material-UI's styled function
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: '#121212', // Dark background color
  color: '#fff', // Light text color
  boxShadow: theme.shadows[5],
  borderRadius: '10px', // Adding rounded corners
}));

// Define a styled button for consistent dark theme styling
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#6200ea', // Purple color for buttons
  color: '#fff',
  '&:hover': {
    backgroundColor: '#3700b3',
  },
}));

const ShowStudentDetails = () => {
  const [student, setStudent] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams(); // Destructure 'id' directly from useParams()
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://stdmrkmgmt.onrender.com/api/student/${id}`)
        .then((res) => {
          setStudent(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const onDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirmation = () => {
    axios
      .delete(`https://stdmrkmgmt.onrender.com/api/student/${id}`)
      .then(() => {
        navigate('/list');
      })
      .catch((error) => {
        console.log(error);
      });
    setOpenDialog(false);
  };

  const handleCancelDelete = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                alt={student.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {student.first_name}
            </Typography>

            <Typography variant="h6" color="textSecondary" gutterBottom>
              {`id=student.unique_id`}
            </Typography>

            <Divider sx={{ my: 2 }} />
            <Box display="flex" flexDirection="column">
              <Typography variant="body1" >
                Name: {student.first_name}
              </Typography>
              <Typography variant="body1">ID: {student.unique_id}</Typography>
              <Typography variant="body1">Email: {student.mail_id}</Typography>
              <Typography variant="body1">Address: {student.current_address}</Typography>
              <Typography variant="body1">Score: {student.total_score}</Typography>
              <Typography variant="body1">CGPA: {student.avg_cgpa}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="space-between">
          <StyledButton
            startIcon={<ArrowBackIcon />}
            component={Link}
            to="/list"
            variant="outlined"
          >
            Back to Student List
          </StyledButton>
          <Box>
            <StyledButton
              startIcon={<EditIcon />}
              component={Link}
              to={`/edit/${id}`} // Fixed edit URL to correctly point to the student edit page
              variant="contained"
              sx={{ mr: 1 }}
            >
              Edit Student
            </StyledButton>
            <StyledButton
              startIcon={<DeleteIcon />}
              onClick={onDeleteClick}
              variant="contained"
              color="error"
            >
              Delete Student
            </StyledButton>
          </Box>
        </Box>
      </StyledPaper>

      {/* Confirmation Dialog */}
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
  );
};

export default ShowStudentDetails;
