
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
                background: 'linear-gradient(145deg,rgb(70, 54, 54),rgb(100, 118, 136))', // Lighter background with gradient
                '&:hover, &:focus': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 8px 18px rgba(57, 46, 46, 0.07)',
                },
            }}
        >
            <Avatar
                alt={student.first_name}
                src={student.imageUrl || 'https://cdn-icons-png.flaticon.com/512/10584/10584906.png'}
                sx={{
                    width: '100%',   // Ensures the image stretches across the width of the card
                    height: 150,     // Fixed height
                    objectFit: 'cover', // Ensures the entire image is visible
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                }}
            />
          <CardContent sx={{ flexGrow: 1 }}>
    <Typography 
        variant="h5" 
        component="div" 
        color="primary.dark" 
        gutterBottom
        sx={{
            fontWeight: 700, // Adjust font weight for better boldness
            fontSize: '1.2rem', // Slightly larger font for better readability
            letterSpacing: '0.5px', // Adds some letter spacing for a modern look
            fontFamily: "'Roboto', sans-serif", // Modern font family
        }}
    >
        <Link
            to={`/details/${student._id}`}
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
        color="secondary" // Darker theme, so use secondary color
        size="large"
        fullWidth
        sx={{
            fontWeight: 700, // Bold font
            fontSize: '16px',
            backgroundColor: '#333', // Dark background color for the button
            color: '#fff', // White text color for better contrast
            borderRadius: '8px', // Slightly rounded corners for modern design
            '&:hover': {
                backgroundColor: '#444', // Darker shade on hover
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Slightly stronger shadow effect
                transform: 'scale(1.05)', // Slight scale effect on hover for a modern feel
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
