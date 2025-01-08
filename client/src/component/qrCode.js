



// import React, { useState, useEffect } from 'react';
// import { QRCodeSVG } from 'qrcode.react';
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   CircularProgress,
//   Box,
//   Tooltip
// } from '@mui/material';
// import DownloadIcon from '@mui/icons-material/Download';
// import axios from 'axios';

// const QRCodePage = () => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const baseUrl = 'https://stdmrkmgmt.onrender.com/details/';

//   // Fetch student data
//   useEffect(() => {
//     axios
//       .get('/api/students')
//       .then((res) => {
//         setStudents(res.data);
//         console.log(res.data); 
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching students:', err);
//         setError('Failed to load student data.');
//         setLoading(false);
//       });
//   }, []);

//   // Handle QR code download
//   const downloadQR = (studentId, studentTitle) => {
//     const canvas = document.createElement('canvas');
//     const svg = document.getElementById(`qr-${studentId}`);
//     const serializer = new XMLSerializer();
//     const source = serializer.serializeToString(svg);

//     const img = new Image();
//     img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

//     img.onload = () => {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       const ctx = canvas.getContext('2d');
//       ctx.drawImage(img, 0, 0);

//       const a = document.createElement('a');
//       a.download = `QR-${studentTitle.replace(/\s+/g, '-')}.png`;
//       a.href = canvas.toDataURL('image/png');
//       a.click();
//     };
//   };

//   // Display loading or error state
//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
//         <Typography color="error">{error}</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
//         Student QR Codes
//       </Typography>
//       <Typography variant="body1" gutterBottom align="center" sx={{ mb: 4 }}>
//         Scan QR codes to quickly access student details
//       </Typography>

//       <Grid container spacing={3}>
//         {Array.isArray(students) && students.map((student) => (
//           <Grid item xs={12} sm={6} md={4} key={student._id}>
//             <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
//               <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 {/* QR Code */}
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     p: 2,
//                     borderRadius: 2,
//                     backgroundColor: '#f5f5f5',
//                     width: '100%',
//                   }}
//                 >
//                   <QRCodeSVG
//                     id={`qr-${student._id}`}
//                     value={`${baseUrl}${student._id}`}
//                     size={200}
//                     level="H"
//                     includeMargin
//                   />
//                 </Box>
//                 <Typography variant="h6" component="div" align="center" sx={{ mt: 2, mb: 1 }}>
//                   {student.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
//                   {student.first_name} {student.last_name}
//                 </Typography>

//                 <Tooltip title="Download QR Code" arrow>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     startIcon={<DownloadIcon />}
//                     onClick={() => downloadQR(student._id, student.title)}
//                     size="small"
//                     sx={{ mt: 2 }}
//                   >
//                     Download QR
//                   </Button>
//                 </Tooltip>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default QRCodePage;


// import React, { useState, useEffect } from 'react';
// import { QRCodeSVG } from 'qrcode.react';
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   CircularProgress,
//   Box,
//   Tooltip
// } from '@mui/material';
// import DownloadIcon from '@mui/icons-material/Download';
// import axios from 'axios';

// const QRCodePage = () => {
//   const [data, setData] = useState([]); // Generic state for either students or clinics
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Base URL from environment variable (dynamic for different environments)
//   const baseUrl = process.env.REACT_APP_API_URL ? `${process.env.REACT_APP_API_URL}/details/` : 'https://stdmrkmgmt.onrender.com/details/';

//   // Fetch data (students or clinics)
//   useEffect(() => {
//     axios
//       .get(`${baseUrl}/api/students`) // Use your endpoint for students/clinics
//       .then((res) => {
//         setData(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching data:', err);
//         setError('Failed to load data.');
//         setLoading(false);
//       });
//   }, []); // Empty dependency ensures it runs only once when the component mounts

//   // Handle QR code download
//   const downloadQR = (id, name) => {
//     const canvas = document.createElement('canvas');
//     const svg = document.getElementById(`qr-${id}`);
//     const serializer = new XMLSerializer();
//     const source = serializer.serializeToString(svg);

//     const img = new Image();
//     img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

//     img.onload = () => {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       const ctx = canvas.getContext('2d');
//       ctx.drawImage(img, 0, 0);

//       const a = document.createElement('a');
//       a.download = `QR-${name.replace(/\s+/g, '-')}.png`;
//       a.href = canvas.toDataURL('image/png');
//       a.click();
//     };
//   };

//   // Display loading or error state
//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
//         <Typography color="error">{error}</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
//         QR Codes
//       </Typography>
//       <Typography variant="body1" gutterBottom align="center" sx={{ mb: 4 }}>
//         Scan QR codes to quickly access details
//       </Typography>

//       <Grid container spacing={3}>
//         {Array.isArray(data) && data.map((item) => (
//           <Grid item xs={12} sm={6} md={4} key={item._id}>
//             <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
//               <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 {/* QR Code */}
//                 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, borderRadius: 2, backgroundColor: '#f5f5f5', width: '100%' }}>
//                   <QRCodeSVG
//                     id={`qr-${item._id}`}
//                     value={`${baseUrl}${item._id}`}
//                     size={200}
//                     level="H"
//                     includeMargin
//                   />
//                 </Box>
//                 <Typography variant="h6" component="div" align="center" sx={{ mt: 2, mb: 1 }}>
//                   {item.title || item.Patient_name} {/* Adjust based on your data */}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
//                   {item.first_name || item.age} {item.last_name} {/* Adjust for student or clinic data */}
//                 </Typography>

//                 <Tooltip title="Download QR Code" arrow>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     startIcon={<DownloadIcon />}
//                     onClick={() => downloadQR(item._id, item.title || item.Patient_name)}
//                     size="small"
//                     sx={{ mt: 2 }}
//                   >
//                     Download QR
//                   </Button>
//                 </Tooltip>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default QRCodePage;


import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    CircularProgress,
    Box
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';

const QRCodePage = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const baseUrl = 'https://stdmrkmgmt.onrender.com/details/';

    useEffect(() => {
        axios.get('https://stdmrkmgmt.onrender.com/api/student')
            .then(res => {
                setStudents(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching books:', err);
                setLoading(false);
            });
    }, []);

    const downloadQR = (studentId, studentName) => {
        const canvas = document.createElement("canvas");
        const svg = document.getElementById(`qr-${studentId}`);
        const serializer = new XMLSerializer();
        const source = serializer.serializeToString(svg);

        const img = new Image();
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            const a = document.createElement('a');
            a.download = `QR-${studentName.replace(/\s+/g, '-')}.png`;
            a.href = canvas.toDataURL('image/png');
            a.click();
        };
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant='h4' component='h1' gutterBottom align='center' color='primary'>
                Student QR Codes
            </Typography>
            <Typography variant='body1' gutterBottom align='center' sx={{ mb: 4 }}>
                Scan QR codes to quickly access student details
            </Typography>

            <Grid container spacing={3}>
                {students.map((student) => (
                    <Grid item xs={12} sm={6} md={4} key={student._id}>
                        <Card sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            p: 2
                        }}>
                            <CardContent sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100%'
                            }}>
                                <QRCodeSVG
                                    id={`qr-${student._id}`}
                                    value={`${baseUrl}${student._id}`}
                                    size={200}
                                    level="H"
                                    includeMargin
                                />
                                <Typography
                                    variant="h6"
                                    component="div"
                                    align="center"
                                    sx={{ mt: 2, mb: 1 }}
                                >
                                    {student.name}
                                </Typography>
                               
                                <Button
                                    variant="outlined"
                                    startIcon={<DownloadIcon />}
                                    onClick={() => downloadQR(student._id, student.name)}
                                    size="small"
                                >
                                    Download QR
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default QRCodePage;