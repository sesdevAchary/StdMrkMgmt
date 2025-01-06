
import React, { useState, useEffect } from "react";
import { useParams, Link as RouterLink, useNavigate } from "react-router-dom";
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

// Styled Paper for consistent design
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: 12,
  boxShadow: theme.shadows[3],
}));
const ShowStudentDetails = () => {
  const [student, setStudent] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
   // Fetch student details
   useEffect(() => {
    if (id) {
      axios
        .get(`https://stdmrkmgmt.onrender.com/api/student/${id}`)
        .then((res) => setStudent(res.data))
        .catch((error) => console.error("Error fetching student details:", error));
    }
  }, [id]);

  // Handle delete confirmation
  const handleDeleteConfirmation = () => {
    axios
      .delete(`https://stdmrkmgmt.onrender.com/api/student/${id}`)
      .then(() => navigate("/list"))
      .catch((err) => console.error("Error deleting student:", err));
    setOpenDialog(false);
  };
  const handleCancelDelete = () => setOpenDialog(false);

  const onDeleteClick = () => setOpenDialog(true);

  if (!student) {
    return (
      <Container maxWidth="md">
        <StyledPaper>
          <Typography variant="h4" align="center">
            Loading student details...
          </Typography>
        </StyledPaper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={4}>
          {/* Student Image */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={student.imageUrl || "https://images.unsplash.com/photo-1495446815901-a7297e633e8d"}
                alt={student.first_name}
                sx={{ borderRadius: "8px" }}
              />
            </Card>
          </Grid>

          {/* Student Details */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              {student.first_name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {student.mail_id}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Box>
              <Typography variant="body1" paragraph>
                <strong>Name:</strong> {student.first_name}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>ID:</strong> {student.unique_id}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Email:</strong> {student.mail_id}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Address:</strong> {student.current_address}
              </Typography>
             
              <Typography variant="body1" paragraph>
                <strong>Score:</strong> {student.total_score}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>CGPA:</strong> {student.avg_cgpa}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/list"
            variant="outlined"
            color="primary"
          >
            Back to Student List
          </Button>
          <Box>
            <Button
              startIcon={<EditIcon />}
              component={RouterLink}
              to={`/edit/${student.unique_id}`}
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
            >
              Edit
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={onDeleteClick}
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </Box>
        </Box>
      </StyledPaper>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this student? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirmation} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ShowStudentDetails;
