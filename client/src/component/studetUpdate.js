import React,{useEffect,useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL) // logs the URL to the console for debugging purposes.//


const studentId=()=>{
    const {id} =useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({ name: '', roll_no:'',gender:''});



    // to fetech studnet data when id changes //
    useEffect(()=>{
        const fetchStudent= async()=>{
            try{
                const response = await axios .get(`${API_URL}/$ {id}`);
                setStudent(response.data);
            } catch (error){
                console.error("error fetching the student:",error);
            }
        };
        fetchStudent();
    } ,[id]);



// to handle change in forms //
    const handleChange=(e)=>{
        const{name,value}=e.target; {/* destructuring the e.target object to extract the name and value properties.*/}
        setStudent({...student,[name]:value});
    }

}