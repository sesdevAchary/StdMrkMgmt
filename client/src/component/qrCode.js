



// import React, { useState, useEffect } from 'react';
// import { QRCodeSVG } from 'qrcode.react';
// import {
//     Container,
//     Typography,
//     Grid,
//     Card,
//     CardContent,
//     Button,
//     CircularProgress,
//     Box
// } from '@mui/material';
// import DownloadIcon from '@mui/icons-material/Download';
// import axios from 'axios';

// const QRCodePage = () => {
//     const [students, setStudents] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios.get(`https://stdmrkmgmt.onrender.com/api/student`)
//             .then(res => {
//                 setStudents(res.data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error('Error fetching students:', err);
//                 setLoading(false);
//             });
//     }, []);

//     const downloadQR = (studentId, studentName) => {
//         const canvas = document.createElement("canvas");
//         const svg = document.getElementById(`qr-${studentId}`);
//         const serializer = new XMLSerializer();
//         const source = serializer.serializeToString(svg);

//         const img = new Image();
//         img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

//         img.onload = () => {
//             canvas.width = img.width;
//             canvas.height = img.height;
//             const ctx = canvas.getContext('2d');
//             ctx.drawImage(img, 0, 0);

//             const a = document.createElement('a');
//             a.download = `QR-${studentName.replace(/\s+/g, '-')}.png`;
//             a.href = canvas.toDataURL('image/png');
//             a.click();
//         };
//     };

//     if (loading) {
//         return (
//             <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
//                 <CircularProgress color="primary" size={60} />
//             </Box>
//         );
//     }

//     // Define an array of unique colors for each QR code card
//     const cardColors = ['#1E88E5', '#FF7043', '#43A047', '#9C27B0', '#0288D1', '#F57C00'];

//     return (
       
//         <Container maxWidth="lg" sx={{ py: 6, backgroundColor: '#121212', borderRadius: 2 }}>
            
//     {/* Heading Container with Dark Background */}
//     <Box sx={{ backgroundColor: '#333', padding: 3, borderRadius: 2 }}>
//         <Typography
//             variant='h2'
//             component='h2'
//             gutterBottom
//             align='center'
//             color='white'
//             sx={{
//                 fontWeight: 700,
//                 // textDecoration: 'underline',
//                 fontStyle: 'italic',
//                 textTransform: 'uppercase',                
//                 color: '#F0F0F0', // Darker shade for better readability
//                 letterSpacing: '1px',
//             }}
//         >
//             Student QR Codes 📱
//         </Typography>
        
//         <Typography
//             variant='h4'
//             component='h4'
//             gutterBottom
//             align='center'
//             sx={{
//                 mb: 4,
//                 fontWeight: 800,
//                 fontStyle: 'italic',
                
//                 color: '#E0E0E0', // Light dark gray for a subtle contrast
//                 letterSpacing: '1px',
//             }}
//         >
//             Scan QR codes to quickly access student details 👇
//         </Typography>
//     </Box>


//             <Grid container spacing={3} sx={{ mt: 4 }}>
//                 {students.map((student, index) => (
//                     <Grid item xs={12} sm={6} md={4} key={student._id}>
//                         <Card sx={{
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                             p: 3,
//                             boxShadow: 3,
//                             borderRadius: 2,
//                             backgroundColor: cardColors[index % cardColors.length],
//                             '&:hover': {
//                                 boxShadow: 6,
//                                 transform: 'scale(1.05)',
//                                 transition: 'all 0.3s ease-in-out'
//                             },
//                         }}>
//                             <CardContent sx={{ textAlign: 'center' }}>
//                                 <QRCodeSVG
//                                     id={`qr-${student._id}`}
//                                     value={`https://stdmrkmgmt.onrender.com/api/student/${student._id}`}
//                                     size={200}
//                                     level="H"
//                                     includeMargin
//                                 />
//                                 <Typography variant="h5" component="div" sx={{ mt: 2, mb: 1, fontWeight: 600, color: '#fff' }}>
//                                     {student.first_name}
//                                 </Typography>
//                                 <Typography variant="body2" sx={{ mb: 2, color: '#fff' }}>
//                                     {student.email}
//                                 </Typography>

//                                 <Button
//                                     variant="contained"
//                                     color="secondary"
//                                     startIcon={<DownloadIcon />}
//                                     onClick={() => downloadQR(student._id, student.first_name)}
//                                     sx={{
//                                         textTransform: 'none',
//                                         fontWeight: 600,
//                                         borderRadius: 3,
//                                         '&:hover': {
//                                             backgroundColor: '#ffffff',
//                                             color: '#121212',
//                                             boxShadow: 3,
//                                         },
//                                     }}
//                                 >
//                                     Download QR
//                                 </Button>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </Container>
//     );
// };

// export default QRCodePage;


import React, { useState, useEffect, useRef } from 'react';
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

    // Store refs for each student QR code
    const qrRefs = useRef([]);

    useEffect(() => {
        axios.get(`https://stdmrkmgmt.onrender.com/api/student`)
            .then(res => {
                setStudents(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching students:', err);
                setLoading(false);
            });
    }, []);

    const downloadQR = (studentId, studentName, index) => {
        const svg = qrRefs.current[index];
        if (!svg) return;

        const serializer = new XMLSerializer();
        const source = serializer.serializeToString(svg);
        const img = new Image();
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

        img.onload = () => {
            const canvas = document.createElement("canvas");
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
                <CircularProgress color="primary" size={60} />
            </Box>
        );
    }

    // Define an array of unique colors for each QR code card
    const cardColors = ['#1E88E5', '#FF7043', '#43A047', '#9C27B0', '#0288D1', '#F57C00'];

    return (
        <Container maxWidth="lg" sx={{ py: 6, backgroundColor: '#121212', borderRadius: 2 }}>
            {/* Heading Container with Dark Background */}
            <Box sx={{ backgroundColor: '#333', padding: 3, borderRadius: 2 }}>
                <Typography
                    variant='h2'
                    component='h2'
                    gutterBottom
                    align='center'
                    color='white'
                    sx={{
                        fontWeight: 700,
                        fontStyle: 'italic',
                        textTransform: 'uppercase',
                        color: '#F0F0F0',
                        letterSpacing: '1px',
                    }}
                >
                    Student QR Codes 📱
                </Typography>
                <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    align='center'
                    sx={{
                        mb: 4,
                        fontWeight: 800,
                        fontStyle: 'italic',
                        color: '#E0E0E0',
                        letterSpacing: '1px',
                    }}
                >
                    Scan QR codes to quickly access student details 👇
                </Typography>
            </Box>

            <Grid container spacing={3} sx={{ mt: 4 }}>
                {students.map((student, index) => {
                    // Initialize each ref when mapping through students
                    if (!qrRefs.current[index]) {
                        qrRefs.current[index] = React.createRef();
                    }

                    return (
                        <Grid item xs={12} sm={6} md={4} key={student._id}>
                            <Card sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                p: 3,
                                boxShadow: 3,
                                borderRadius: 2,
                                backgroundColor: cardColors[index % cardColors.length],
                                '&:hover': {
                                    boxShadow: 6,
                                    transform: 'scale(1.05)',
                                    transition: 'all 0.3s ease-in-out'
                                },
                            }}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <QRCodeSVG
                                        ref={qrRefs.current[index]}
                                        value={`https://stdmrkmgmt.onrender.com/api/student/${student._id}`}
                                        size={200}
                                        level="H"
                                        includeMargin
                                    />
                                    <Typography variant="h5" component="div" sx={{ mt: 2, mb: 1, fontWeight: 600, color: '#fff' }}>
                                        {student.first_name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 2, color: '#fff' }}>
                                        {student.email}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DownloadIcon />}
                                        onClick={() => downloadQR(student._id, student.first_name, index)}
                                        sx={{
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            borderRadius: 3,
                                            '&:hover': {
                                                backgroundColor: '#ffffff',
                                                color: '#121212',
                                                boxShadow: 3,
                                            },
                                        }}
                                    >
                                        Download QR
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
};

export default QRCodePage;
