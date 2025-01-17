// import React from 'react';
// import { Card, CardContent, Typography, Button, Box, Avatar } from '@mui/material';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// const StudentCard = ({ student }) => {
//     return (
//         <Card
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 height: '100%',
//                 transition: 'transform 0.2s, box-shadow 0.2s',
//                 borderRadius: 4,
//                 boxShadow: 3,
//                 '&:hover, &:focus': {
//                     transform: 'scale(1.05)',
//                     boxShadow: 6,
//                 },
//             }}
//         >
//             <Avatar
//                 alt={student.first_name}
//                 src={student.imageUrl || 'https://cdni.iconscout.com/illustration/premium/thumb/college-student-illustration-download-in-svg-png-gif-file-formats--pretty-logo-bag-man-character-pack-people-illustrations-2323990.png?f=webp'}
//                 sx={{
//                     width: '100%',
//                     height: 200,
//                     objectFit: 'cover',
//                 }}
//             />
//             <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography variant="h6" component="div" color="primary" gutterBottom>
//                     <Link
//                         to={`/show-student/${student._id}`}
//                         style={{ textDecoration: 'none', color: 'inherit' }}
//                     >
//                         {student.first_name}
//                     </Link>
//                 </Typography>

               
//             </CardContent>
//             <Box sx={{ p: 2, mt: 'auto' }}>
//                 <Button
//                     component={Link}
//                     to={`/details/${student._id}`}
//                     variant="contained"
//                     color="primary"
//                     size="small"
//                     fullWidth
//                 >
//                     View Student Details
//                 </Button>
//             </Box>
//         </Card>
//     );
// };

// // Ensuring props are correctly validated
// StudentCard.propTypes = {
//     student: PropTypes.shape({
//         _id: PropTypes.string.isRequired,
//         first_name: PropTypes.string.isRequired,
//         total_score: PropTypes.number,
        
//         imageUrl: PropTypes.string,
//     }).isRequired,
// };

// // Providing default values for optional props
// StudentCard.defaultProps = {
//     student: {
//         imageUrl: '', // Default empty image URL
//         total_score: 0, // Default score if not provided
//     },
// };

// export default StudentCard;



import React from 'react';
import { Card, CardContent, Typography, Button, Box, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StudentCard = ({ student }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.3s, box-shadow 0.3s',
                borderRadius: 4,
                boxShadow: 3,
                background: 'linear-gradient(145deg, #ffffff, #f0f4f8)', // Lighter background with gradient
                '&:hover, &:focus': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 8px 18px rgba(0, 0, 0, 0.2)',
                },
            }}
        >
            <Avatar
                alt={student.first_name}
                src={student.imageUrl || 'https://cdni.iconscout.com/illustration/premium/thumb/college-student-illustration-download-in-svg-png-gif-file-formats--pretty-logo-bag-man-character-pack-people-illustrations-2323990.png?f=webp'}
                sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" color="primary" gutterBottom>
                    <Link
                        to={`/show-student/${student._id}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        {student.first_name}
                    </Link>
                </Typography>
            </CardContent>
            <Box sx={{ p: 2, mt: 'auto' }}>
                <Button
                    component={Link}
                    to={`/details/${student._id}`}
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{
                        fontWeight: 700, // Bold font
                        fontSize: '16px',
                        backgroundColor: '#007BFF', // Vibrant blue background
                        '&:hover': {
                            backgroundColor: '#0056b3', // Darker blue on hover
                            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.15)', // Subtle shadow effect
                        },
                    }}
                >
                    View Student Details
                </Button>
            </Box>
        </Card>
    );
};

// Ensuring props are correctly validated
StudentCard.propTypes = {
    student: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
    }).isRequired,
};

// Providing default values for optional props
StudentCard.defaultProps = {
    student: {
        imageUrl: '', // Default empty image URL
    },
};

export default StudentCard;
