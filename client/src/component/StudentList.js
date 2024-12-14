//  import React,{useState,useEffect} from 'react';
//  import {Link} from   'react-router-dom'; /* to navigate between the routes */
//  import axios from    'axios'; /* promise based http for client making request*/
//  import Notification from './Notification';    /* for displaying notification to the user*/



//  // To retrive the url from the environment//
//  const API_URL= process.env.REACT_APP_API_URL;


//  // functional component for state initialisation//
//   const StudentList =() =>{
//          const[student,setStudent]= useState([]); /* array to hold student data,initially empty*/
//          const[notification ,setNotification]=useState( ' ');

//        useEffect(()=>{
//         const fetchStudent = async ()=>{
//             try{
//                 const response = await axios.get(API_URL);
//                 setStudent(response.data);
//             }catch(error){
//                 console.log('error fetching student:',error);
//             }
//         };
//         fetchStudent();
//        }, []);
//         return (
//             <div className='box-container'>
//             <h1>ALL STUDENT LIST </h1>
//             <Link to ="/add" className='btn btn-add add-person-button'> Add student </Link>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>roll_no</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {student.map(student =>(<tr key={student.id} className="person-name"><td>
//                         <link to={`/details/${student.id}`}>{student.name}</link></td>
//                         <td>{student.roll_no}</td>
//                         </tr>))}
//                 </tbody>
//             </table>
//             {notification && (
//                 <Notification message={notification} onClose={()=>setNotification( ' ')}/>

//             )}
//             </div>
//         );
//   };


//   export default StudentList;



import React ,{useState, useEffect} from "react";
import Link from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, Grid, CircularProgress, Box } from '@mui/material';


function StudentList(){
    const [student,setStudent]=useState('[]');
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
            <Typography variant="h3" color="primary" gutterBottom component={h1}>
                STUDENT LIST
            </Typography>

            <button component={Link} to ="/Create-Student" color="primary" variant="contained" sx={{mb:4}} ></button>
         </Container>
    )
    
}
export default StudentList;