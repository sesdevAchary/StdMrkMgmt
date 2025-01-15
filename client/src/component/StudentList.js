


// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { Button, Typography, Container, CircularProgress, Box, Grid, useTheme, useMediaQuery } from '@mui/material';
// import StudentCard from './StudentCard';

// function StudentList() {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

//   useEffect(() => {
//     axios
//       .get(`https://stdmrkmgmt.onrender.com/api/student`)
//       .then((res) => {
//         console.log("API response:", res.data);
//         if (Array.isArray(res.data)) {
//           setStudents(res.data);
//         } else {
//           console.error("Response is not an array:", res.data);
//           setStudents([]);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log("Error loading student data:", err);
//         setLoading(false);
//         setStudents([]);
//       });
//   }, []);

//   return (
//     <>
//       {/* Main Container for Student List */}
//       <Container maxWidth="lg" sx={{ py: 6, px: 4, backgroundColor: isDarkMode ? '#121212' : '#f5f5f5', borderRadius: 3 }}>
//         {/* Page Title */}
//         <Typography
//           variant="h3"
//           color="primary.main"
//           align="center"
//           gutterBottom
//           sx={{
//             fontWeight: 700,
//             letterSpacing: 1,
//             textTransform: 'uppercase',
//             color: isDarkMode ? '#FFFFFF' : '#212121',
//           }}
//         >
//           Student List
//         </Typography>
//         <br />

//         {/* Loading Spinner or Students List */}
//         {loading ? (
//           <Box display="flex" justifyContent="center" mt={7}>
//             <CircularProgress color="primary" size={60} />
//           </Box>
//         ) : (
//           <Grid container spacing={4}>
//             {students.length === 0 ? (
//               <Grid item xs={12}>
//                 <Typography variant="h6" color="text.secondary" align="center">
//                   Oops! No students found.
//                 </Typography>
//               </Grid>
//             ) : (
//               students.map((student, index) => (
//                 <Grid item xs={12} sm={6} md={4} key={index}>
//                   <StudentCard student={student} />
//                 </Grid>
//               ))
//             )}
//           </Grid>
//         )}
//       </Container>

//       {/* Add New Student Button */}
//       <Container maxWidth="sm" sx={{ mt: 4 }}>
//         <Box
//           display="flex"
//           justifyContent="center"
//           sx={{
//             borderRadius: 2,
//             boxShadow: 2,
//             p: 3,
//             backgroundColor: 'background.paper',
//           }}
//         >
//           <Button
//             component={Link}
//             to="/add"
//             color="primary"
//             variant="contained"
//             sx={{
//               px: 4,
//               py: 4.5,
//               fontSize: '21px',
//               fontWeight: 600,
//               borderRadius: 3,
//               '&:hover': {
//                 backgroundColor: '#e0f8e8',
//                 boxShadow: '0px 6px 12px rgba(73, 196, 46, 0.1)',
//               },
//             }}
//           >
//             Add New Student...
//           </Button>
//         </Box>
//       </Container>

//       {/* Additional message */}
//       <Box
//         display="flex"
//         justifyContent="center"
//         sx={{
//           borderRadius: 2,
//           boxShadow: 3,
//           p: 3,
//           fontSize: '1.2rem',
//           fontWeight: '600',
//           backgroundColor: isDarkMode ? '#212121' : '#E3F2FD',
//           color: isDarkMode ? '#E0E0E0' : '#1E2A47',
//           textAlign: 'center',
//           mt: 4,
//           transition: 'all 0.3s ease-in-out',
//           '&:hover': {
//             backgroundColor: isDarkMode ? '#333333' : '#B3E5FC',
//             boxShadow: 4,
//           },
//         }}
//       >
//         If you want to go to the HomePage, click on the "STUDENT MANAGEMENT" link above.
//       </Box>
//     </>
//   );
// }

// export default StudentList;



import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, CircularProgress, Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import StudentCard from './StudentCard';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const theme = useTheme();
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  useEffect(() => {
    axios
      .get(`https://stdmrkmgmt.onrender.com/api/student`)
      .then((res) => {
        console.log("API response:", res.data);
        if (Array.isArray(res.data)) {
          setStudents(res.data);
        } else {
          console.error("Response is not an array:", res.data);
          setStudents([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error loading student data:", err);
        setLoading(false);
        setStudents([]);
      });
  }, []);

  return (
    <>
      {/* Main Container for Student List */}
      <Container maxWidth="lg" sx={{ py: 6, px: 4, backgroundColor: isDarkMode ? '#121212' : '#f9f3e3', borderRadius: 3 }}>
        {/* Page Title */}
        <Typography
          variant="h3"
          color="primary.main"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: 'uppercase',
            color: isDarkMode ? '#FFFFFF' : '#212121',
          }}
        >
          Student List
        </Typography>

        {/* Loading Spinner or Students List */}
        {loading ? (
          <Box display="flex" justifyContent="center" mt={7}>
            <CircularProgress color="primary" size={60} />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {students.length === 0 ? (
              <Grid item xs={12}>
                <Typography variant="h6" color="text.secondary" align="center">
                  Oops! No students found.
                </Typography>
              </Grid>
            ) : (
              students.map((student, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <StudentCard student={student} />
                </Grid>
              ))
            )}
          </Grid>
        )}
      </Container>

      {/* Add New Student Button */}
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            borderRadius: 2,
            boxShadow: 2,
            p: 3,
            backgroundColor: 'background.paper',
          }}
        >
          <Button
            component={Link}
            to="/add"
            color="primary"
            variant="contained"
            sx={{
              px: 4,
              py: 3,
              fontSize: '18px',
              fontWeight: 600,
              borderRadius: 3,
              textTransform: 'none',
              backgroundColor: isDarkMode ? '#3C4A6D' : '#8E9CFF',
              '&:hover': {
                backgroundColor: isDarkMode ? '#5C6B8C' : '#A1B6FF',
                boxShadow: '0px 6px 12px rgba(10, 13, 30, 0.1)',
              },
            }}
          >
            Add New Student...
          </Button>
        </Box>
      </Container>

      {/* Additional message */}
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          p: 3,
          fontSize: '1.2rem',
          fontWeight: '600',
          backgroundColor: isDarkMode ? '#212121' : '#E3F2FD',
          color: isDarkMode ? '#E0E0E0' : '#1E2A47',
          textAlign: 'center',
          mt: 4,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: isDarkMode ? '#333333' : '#B3E5FC',
            boxShadow: 4,
          },
        }}
      >
        If you want to go to the HomePage, click on the "STUDENT MANAGEMENT" link above.
      </Box>
    </>
  );
}

export default StudentList;
