import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';


const StudentCard= ({Students})=>{
    return(
        <Card
        sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.2s, box-shadow 0.2s',
            borderRadius: 5,
            boxShadow: 7,
            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
        }}
        >


        <img
        src='https://eacademics.in/img/i5.png'
        alt='Students'
        style={{ height: 200, objectFit: 'cover', width: '100%' }}
    />
    )
}

export default StudentCard;