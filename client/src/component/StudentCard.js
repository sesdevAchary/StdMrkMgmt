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
                transition: 'transform 0.2s, box-shadow 0.2s',
                borderRadius: 4,
                boxShadow: 3,
                '&:hover, &:focus': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                },
            }}
        >
            <Avatar
                alt={student.first_name}
                src={student.imageUrl || 'https://img.myloview.com/stickers/online-financial-advisor-icon-simple-illustration-of-online-financial-advisor-vector-icon-for-web-design-isolated-on-white-background-700-208789481.jpg'}
                sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
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

                {student.total_score !== undefined && (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Total Score: {student.total_score}
                    </Typography>
                )}
            </CardContent>
            <Box sx={{ p: 2, mt: 'auto' }}>
                <Button
                    component={Link}
                    to={`/details/${student._id}`}
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth
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
        total_score: PropTypes.number,
        attendance:PropTypes.number,
        imageUrl: PropTypes.string,
    }).isRequired,
};

// Providing default values for optional props
StudentCard.defaultProps = {
    student: {
        imageUrl: '', // Default empty image URL
        total_score: 0, // Default score if not provided
    },
};

export default StudentCard;
