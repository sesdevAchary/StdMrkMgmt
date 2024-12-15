
import React ,{useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, Grid, CircularProgress, Box } from '@mui/material';
import StudentCard from './StudentCard';

function StudentList(){
    const [Students,setStudent]=useState([]);
    const[loading,setLoading]=useState(true);


    useEffect(()=>{
        axios
        .get('/api/student')
        .then((res)=>{
            setStudent(res.data);
            setLoading(false);
        })
        .catch((err)=>{
            console.log('error in loading  student status ',err);
            setLoading(false);
        });
    },[]);

    return(
         <Container maxWidth='lg' sx={{py:4}}>    
            <Typography variant="h3" color="primary" gutterBottom component="h1">
                STUDENT LIST
            </Typography>

            <Button component={Link} to ="/Create-Student" color="primary" variant="contained" sx={{mb:4}} >
            Add New Student...
            </Button>

            {loading?(
                <Box display="flex" justifyContent="center" mt={7}>
                    <CircularProgress/>
                </Box>
            ):(
                <Grid container spacing={4}>
                   { Students.length === 0  ?(
                        <Grid item xs={12}>
                             <Typography variant='h6' color='text.secondary'>
                                OOPS !!! No Students found..
                            </Typography>
                        </Grid>
                    ):( Students.map((student,index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <StudentCard student={student} />
                        </Grid>))
                        
                        )}
                </Grid>
            )
            
        }
         </Container>
    );
    
}
export default StudentList;