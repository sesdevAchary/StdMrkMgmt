 import React,{useState,useEffect} from 'react';
 import {Link} from   'react-router-dom'; /* to navigate between the routes */
 import axios from    'axios'; /* promise based http for client making request*/
 import Notification from './Notfification';    /* for displaying notification to the user*/



 // To retrive the url from the environment//
 const API_URL= process.env.REACT_APP_API_URL;


 // functional component for state initialisation//
  const studentList =() =>{
         const[student,setStudent]= useState([]); /* array to hold student data,initially empty*/
         const[notification ,setNotification]=useState( ' ');

       useEffect(()=>{
        const fetchStudent = async ()=>{
            try{
                const response = await axios.get(API_URL);
                setStudent(response.data);
            }catch(error){
                console.log('error fetching student:',error);
            }
        };
        fetchStudent();
       }, []);
        return (
            <div className='box-container'>
            <h1>ALL STUDENT LIST </h1>
            <link to ="/add" className='btn btn-add add-person-button'> Add patient </link>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>roll_no</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map(student =>(<tr key={student.id} className="person-name"><td>
                        <link to=</td></tr>))}
                </tbody>
            </table>
            </div>
        )
  }