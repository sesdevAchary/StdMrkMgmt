import React,{useState,useEffect}from 'react'; /*React hooks for managing state and side effects in functional components.*/
import axios from 'axios';    /* a promise based http client for making request */
import {useParams,Link,useNavigate} from 'react-router-dom';  /* useParams: To access the route parameters (specifically, the student ID in this case).*/
import Notification from './Notification';


// API URL ENVIRONMENT VARIABLES //

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);   /* for debugging the apI url*/

