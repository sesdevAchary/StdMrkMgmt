 import React,{useState,useEffect} from 'react';
 import {Link} from   'react-router-dom'; /* to navigate between the routes */
 import axios from    'axios'; /* promise based http for client making request*/
 import Notification from './Notfification';    /* for displaying notification to the user*/



 // To retrive the url from the environment//
 const API_URL= process.env.REACT_APP_API_URL;


 // functional component for state initialisation//
  const studentList =() =>{
         const[student,setStudent]= useState([]);
         const[notification ,setNotification]=useState( ' ');
  }