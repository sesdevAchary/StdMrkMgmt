import React,{useEffect,useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL) // logs the URL to the console for debugging purposes.//


const studentId=()=>{
    const {id} =useParams();
    
}