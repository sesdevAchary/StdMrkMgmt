import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


const StudentCard = ({ Student }) => {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                borderRadius: 2,
                boxShadow: 3,
                '&:hover, &:focus': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                },
            }}
        >
            <img
                src='https://eacademics.in/img/i5.png'
                alt='Students'
                style={{ height: 300, objectFit: 'cover', width: '100%' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='h6' component='div' color='primary' gutterBottom>
                    <Link to={`/show-student/${Student.unique_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {Student.first_name}
                    </Link>
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}
                    style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                    }}>
                    {Student.total_score}
                </Typography>
            </CardContent>
            <Box sx={{ p: 2, mt: 'auto' }}>
                <Button
                    component={Link}
                    to={`/show-student/${Student.unique_id}`}
                    variant='contained'
                    color='primary'
                    size='small'
                    fullWidth
                >
                    view Details
                </Button>
            </Box>
        </Card>
    );
};


// to ensure that the student prop is passed correctly //

StudentCard.propTypes = {
    student: PropTypes.shape({
        unique_id: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        total_score: PropTypes.number.isRequired,
        imageUrl: PropTypes.string, // Optional if an image URL exists
    }).isRequired,
};

export default StudentCard;