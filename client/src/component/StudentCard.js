
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
//                 transition: 'transform 0.3s, box-shadow 0.3s',
//                 borderRadius: 4,
//                 boxShadow: 3,
//                 background: 'linear-gradient(145deg,rgb(70, 54, 54),rgb(100, 118, 136))', // Lighter background with gradient
//                 '&:hover, &:focus': {
//                     transform: 'scale(1.05)',
//                     boxShadow: '0px 8px 18px rgba(57, 46, 46, 0.07)',
//                 },
//             }}
//         >
//             <Avatar
//                 alt={student.first_name}
//                 src={student.imageUrl || 'https://cdn-icons-png.flaticon.com/512/10584/10584906.png'}
//                 sx={{
//                     width: '100%',   // Ensures the image stretches across the width of the card
//                     height: 150,     // Fixed height
//                     objectFit: 'cover', // Ensures the entire image is visible
//                     borderTopLeftRadius: 4,
//                     borderTopRightRadius: 4,
//                 }}
//             />
//             <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography
//                     variant="h5"
//                     component="div"
//                     color="primary.dark"
//                     gutterBottom
//                     sx={{
//                         fontWeight: 700, // Adjust font weight for better boldness
//                         fontSize: '1.2rem', // Slightly larger font for better readability
//                         color: '#212121',
//                         letterSpacing: '0.5px', // Adds some letter spacing for a modern look
//                         fontFamily: "'Playfair Display', serif", // Elegant serif font for a more refined look
//                         fontStyle: 'italic',
//                     }}
//                 >
//                     <Link
//                         to={`/details/${student._id}`}
//                         style={{
//                             textDecoration: 'underline wavy'
//                             , color: 'inherit'
//                         }}
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
//                     color="secondary" // Darker theme, so use secondary color
//                     size="large"
//                     fullWidth
//                     sx={{
//                         fontWeight: 700, // Bold font
//                         fontSize: '16px',
//                         backgroundColor: '#333', // Dark background color for the button
//                         color: '#fff', // White text color for better contrast
//                         borderRadius: '8px', // Slightly rounded corners for modern design
//                         '&:hover': {
//                             backgroundColor: '#444', // Darker shade on hover
//                             boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Slightly stronger shadow effect
//                             transform: 'scale(1.05)', // Slight scale effect on hover for a modern feel
//                         },
//                         transition: 'all 0.3s ease', // Smooth transition for hover effects
//                     }}
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
//         imageUrl: PropTypes.string,
//     }).isRequired,
// };

// // Providing default values for optional props
// StudentCard.defaultProps = {
//     student: {
//         imageUrl: '', // Default empty image URL
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
                background: 'linear-gradient(145deg, rgba(50, 50, 50, 0.8), rgba(30, 30, 30, 0.8))', // Cool dark gradient
                '&:hover, &:focus': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 8px 18px rgba(57, 46, 46, 0.2)', // Softer shadow on hover
                },
            }}
        >
            {/* Square Avatar Image */}
            <Avatar
                alt={student.first_name}
                src={student.imageUrl || 'https://cdn-icons-png.flaticon.com/512/10584/10584906.png'}
                sx={{
                    width: 120,  // Fixed width (square)
                    height: 120, // Fixed height (square)
                    objectFit: 'cover', // Ensures the image covers the entire box without stretching
                    borderRadius: '50%', // Makes the image circular
                    margin: '16px auto', // Centers the image with margin
                }}
            />
            
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                    variant="h5"
                    component="div"
                    color="primary.light" // Lighter text color for contrast
                    gutterBottom
                    sx={{
                        fontWeight: 800, // Bold text
                        fontSize: '1.5rem', // Slightly smaller but bold text for name
                        color: '#fff', // White text for contrast
                        letterSpacing: '0.5px', // Adds some letter-spacing for a modern look
                        fontFamily: "'Playfair Display', serif", // Elegant serif font
                        fontStyle: 'italic',
                        textAlign: 'center', // Center align the text
                        borderBottom: '2px solid #fff', // Adds a white line below the name
                        paddingBottom: '8px'
                    }}
                >
                    <Link
                        to={`/details/${student._id}`}
                        style={{
                            textDecoration: 'none', // No underline
                            color: 'inherit', // Inherit color from Typography
                        }}
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
                    color="primary" // Use a contrasting primary color for the button
                    size="large"
                    fullWidth
                    sx={{
                        fontWeight: 700, // Bold font
                        fontSize: '16px',
                        backgroundColor: '#2d3436', // Dark background for the button
                        color: '#fff', // White text color for better contrast
                        borderRadius: '8px', // Slightly rounded corners
                        '&:hover': {
                            backgroundColor: '#636e72', // Lighter shade on hover
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Slight shadow effect
                            transform: 'scale(1.05)', // Slight scale effect on hover
                        },
                        transition: 'all 0.3s ease', // Smooth transition for hover effects
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
