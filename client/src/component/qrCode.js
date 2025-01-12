


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
//     //  const baseUrl = `https://stdmrkmgmt.onrender.com/details`;

//     useEffect(() => {
//         axios.get(`https://stdmrkmgmt.onrender.com/api/student`)
//             .then(res => {
//                 setStudents(res.data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error('Error fetching books:', err);
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
//               // Create a canvas to convert the image to PNG
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
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     return (
//         <Container maxWidth="lg" sx={{ py: 4 }}>

//             <Typography variant='h3' component='h1' gutterBottom align='center' color='primary'>
//                 Student QR Codes
//             </Typography>

//             <Typography variant='body1' gutterBottom align='center' sx={{ mb: 4 }}>
//                 Scan QR codes to quickly access student details 👇
//             </Typography>

//             <Grid container spacing={3}>
//                 {students.map((student) => (
//                     <Grid item xs={12} sm={6} md={4} key={student._id}>
//                         <Card sx={{
//                             height: '100%',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                             p: 2
//                         }}>
//                             <CardContent sx={{
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 alignItems: 'center',
//                                 width: '100%'
//                             }}>
//                                 <QRCodeSVG
//                                     id={`qr-${student._id}`}
//                                     value={`https://stdmrkmgmt.onrender.com/api/student${student._id}`}
//                                     size={200}
//                                     level="H"
//                                     includeMargin
//                                 />
//                                 <Typography
//                                     variant="h4"
//                                     component="div"
//                                     align="center"
//                                     sx={{ mt: 2, mb: 1 }}
//                                 >
//                                     {student.first_name}
//                                 </Typography>
                               
//                                 <Button
//                                     variant="outlined"
//                                     startIcon={<DownloadIcon />}
//                                     onClick={() => downloadQR(student._id, student.first_name)}
//                                     size="small"
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
                <CircularProgress color="primary" size={60} />
            </Box>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 6, backgroundColor: '#f4f6f9', borderRadius: 2 }}>
            <Typography variant='h3' component='h1' gutterBottom align='center' color='primary.main' sx={{ fontWeight: 700 }}>
                Student QR Codes
            </Typography>

            <Typography variant='body1' gutterBottom align='center' sx={{ mb: 4, fontWeight: 500, color: 'text.secondary' }}>
                Scan QR codes to quickly access student details 👇
            </Typography>

            <Grid container spacing={3}>
                {students.map((student) => (
                    <Grid item xs={12} sm={6} md={4} key={student._id}>
                        <Card sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            p: 3,
                            boxShadow: 3,
                            borderRadius: 2,
                            backgroundColor: '#fff',
                            '&:hover': {
                                boxShadow: 6,
                                transform: 'scale(1.05)',
                                transition: 'all 0.3s ease-in-out'
                            },
                        }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <QRCodeSVG
                                    id={`qr-${student._id}`}
                                    value={`https://stdmrkmgmt.onrender.com/api/student/${student._id}`}
                                    size={200}
                                    level="H"
                                    includeMargin
                                />
                                <Typography variant="h5" component="div" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
                                    {student.first_name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    {student.email}
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<DownloadIcon />}
                                    onClick={() => downloadQR(student._id, student.first_name)}
                                    sx={{
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        borderRadius: 3,
                                        '&:hover': {
                                            backgroundColor: '#81c784',
                                            boxShadow: 3,
                                        },
                                    }}
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
