

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
//   backgroundColor: '#121212', // Dark background color
//   color: '#fff', // Light text color
//   boxShadow: theme.shadows[5],
//   borderRadius: '10px', // Adding rounded corners
// }));

// // Define a styled button for consistent dark theme styling
// const StyledButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#6200ea', // Purple color for buttons
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#3700b3', // Darker purple on hover
//     transform: 'scale(1.05)', // Slightly enlarge the button on hover
//     transition: 'transform 0.2s ease, background-color 0.2s ease', // Smooth transition effect
//   },
//   marginRight: theme.spacing(1), // Add margin for spacing between buttons
//   '&:last-child': {
//     marginRight: 0, // Remove right margin for the last button
//   },
// }));

// const ShowStudentDetails = () => {
//   const [student, setStudent] = useState({});
//   const [openDialog, setOpenDialog] = useState(false);
//   const { id } = useParams(); // Destructure 'id' directly from useParams()
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
//                 image="https://logowik.com/content/uploads/images/student5651.jpg"
//                 alt={student.name}
//               />
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={8}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               {student.first_name}
//             </Typography>

//             <Typography variant="h6" color="textSecondary" gutterBottom>
//               id={student.unique_id}
//             </Typography>

//             <Divider sx={{ my: 2 }} />
//             <Box display="flex" flexDirection="column">
//               <Typography variant="body1">Name: {student.first_name}</Typography>
//               <Typography variant="body1">ID: {student.unique_id}</Typography>
//               <Typography variant="body1">Email: {student.mail_id}</Typography>
//               <Typography variant="body1">Address: {student.current_address}</Typography>
//               <Typography variant="body1">Score: {student.total_score}</Typography>
//               <Typography variant="body1">CGPA: {student.avg_cgpa}</Typography>
//             </Box>
//           </Grid>
//         </Grid>

//         <Box mt={4} display="flex" justifyContent="space-between">
//           <StyledButton
//             startIcon={<ArrowBackIcon />}
//             component={Link}
//             to="/list"
//             variant="outlined"
//           >
//             Back to Student List
//           </StyledButton>
//           <Box display="flex" justifyContent="flex-end">
//             <StyledButton
//               startIcon={<EditIcon />}
//               component={Link}
//               to={`/edit/${id}`}
//               variant="contained"
//             >
//               Edit Student
//             </StyledButton>
//             <StyledButton
//               startIcon={<DeleteIcon />}
//               onClick={onDeleteClick}
//               variant="contained"
//               color="error"
//             >
//               Delete Student
//             </StyledButton>
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
    backgroundColor: '#3700b3', // Darker purple on hover
    transform: 'scale(1.05)', // Slightly enlarge the button on hover
    transition: 'transform 0.2s ease, background-color 0.2s ease', // Smooth transition effect
  },
  marginRight: theme.spacing(1), // Add margin for spacing between buttons
  '&:last-child': {
    marginRight: 0, // Remove right margin for the last button
  },
}));

// Define custom typography for headings
const StyledHeading = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif', // Using Poppins font
  color: '#BB86FC', // Light purple color for headings
  fontWeight: 'bold',
}));

// Define custom typography for body text
const StyledText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto, sans-serif', // Using Roboto font
  color: '#E0E0E0', // Light gray color for text
  fontWeight: 'normal',
  lineHeight: 1.6, // Improve readability with line height
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
                image="https://logowik.com/content/uploads/images/student5651.jpg"
                alt={student.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <StyledHeading variant="h4" component="h1" gutterBottom>
              {student.first_name}
            </StyledHeading>

            <StyledText variant="h6" color="textSecondary" gutterBottom>
              ID: {student.unique_id}
            </StyledText>

            <Divider sx={{ my: 2 }} />
            {/* <Box display="flex" flexDirection="column">
              <StyledText variant="body1">Name: {student.first_name}</StyledText>
              <StyledText variant="body1">ID: {student.unique_id}</StyledText>
              <StyledText variant="body1">Email: {student.mail_id}</StyledText>
              <StyledText variant="body1">Address: {student.current_address}</StyledText>
              <StyledText variant="body1">Score: {student.total_score}</StyledText>
              <StyledText variant="body1">CGPA: {student.avg_cgpa}</StyledText>
            </Box> */}

<Box display="flex" flexDirection="column">
  <StyledText variant="body1" sx={{ mb: 2 }}>
    <strong>Name:</strong> {student.first_name}
  </StyledText>
  <StyledText variant="body1" sx={{ mb: 2 }}>
    <strong>ID:</strong> {student.unique_id}
  </StyledText>
  <StyledText variant="body1" sx={{ mb: 2 }}>
    <strong>Email:</strong> {student.mail_id}
  </StyledText>
  <StyledText variant="body1" sx={{ mb: 2 }}>
    <strong>Address:</strong> {student.current_address}
  </StyledText>
  <StyledText variant="body1" sx={{ mb: 2 }}>
    <strong>Score:</strong> {student.total_score}
  </StyledText>
  <StyledText variant="body1" sx={{ mb: 2 }}>
    <strong>CGPA:</strong> {student.avg_cgpa}
  </StyledText>
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
          <Box display="flex" justifyContent="flex-end">
            <StyledButton
              startIcon={<EditIcon />}
              component={Link}
              to={`/edit/${id}`}
              variant="contained"
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
