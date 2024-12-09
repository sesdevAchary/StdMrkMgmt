import React from 'react';
import {Box,Typography} from '@mui/material'


const footer =()=>(
    <Box component="footer" sx={{
        bgcolor:'Background.paper',
        color: 'text.secondary',
        py: 4,
        height: '50px',
        textAlign: 'center',
        borderTop: `1px solid ${theme => theme.palette.primary.main}`, // Optional: add a top border
      }}
      >
           <Typography variant="h6" gutterBottom>
      prepared and served  by The Sesdev Achary 
    </Typography>
      </Box>
);


export default footer;