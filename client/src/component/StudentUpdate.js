
// import React, { useState, useEffect } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function StudentUpdate (props) {
//   const [student, setStudent] = useState({
//     first_name: '',
//     unique_id: '',
//     mail_id: '',
//     current_address: '',
//      total_score: '',
//     avg_cgpa: '',
//   });

//   const { id } = useParams();
//   const navigate = useNavigate();


//   // const Base_URL = process.env.REACT_APP_API_URL; // Access environment variable
  
//   // if (! Base_URL) {
//   //   console.error('API_URL is not defined in the environment variables'); // Log error 
//   // }



//   useEffect(() => {
//     axios
//       .get(`https://stdmrkmgmt.onrender.com/api/student/${id}`)
//       .then((res) => {
//         setStudent({
//           name: res.data.first_name,
//           unique_id: res.data.unique_id,
//            mail_id: res.data.mail_id,
//           current_address: res.data.current_address,
//           total_score: res.data.total_score,
//           avg_cgpa: res.data.avg_cgpa
//         });
//       })
//       .catch((err) => {
//         console.log('Error fromo GET request');
//         console.log(err);
//       });
//   }, [id]);

//   const onChange = (e) => {
//     setStudent({ ...student, [e.target.name]: e.target.value });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const data = {
    
//        first_name: student.first_name,
//         unique_id:student.unique_id,
//          mail_id: student.mail_id,
//         current_address: student.current_address,
//         total_score: student.total_score,
//         avg_cgpa: student.avg_cgpa,
//     };

//     axios
//       .put(`https://stdmrkmgmt.onrender.com/${id}`, data)
//       .then((res) => {
//         navigate(`/list`);
//       })
//       .catch((err) => {
//         console.log('Error in UpdateStudentInfo PUT request');
//         console.log(err);
//       });
//   };

//   return (
//     <div className='StudentUpdate'>
//       <div className='container' style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
//         <div className='row'>
//           <div className='col-md-8 m-auto'>
//             <br />
//             <Link to='/list' className='btn btn-outline-warning float-left'>
//               Show Student List
//             </Link>
//           </div>
//           <div className='col-md-8 m-auto'>
//             <h1 className='display-4 text-center'>Edit Student</h1>
//             <p className='lead text-center'>Update Student's Info</p>
//           </div>
//         </div>

//         <div className='col-md-8 m-auto'>
//           <form noValidate onSubmit={onSubmit}>
//             <div className='form-group'>
//               <label htmlFor='first_name'>Name</label>
//               <input
//                 type='text'
//                 placeholder='Name of the student'
//                 name='first_name' 
//                 className='form-control'
//                 value={student.first_name}
//                 onChange={onChange}
//               />
//             </div>
//             <br />

//             <div className='form-group'>
//             <label htmlFor='unique_id'>Unique ID</label>
//               <input
//                 type='unique_idl'
//                 placeholder='unique_id'
//                 name='unique_id'
//                 className='form-control'
//                 value={student.unique_id}
//                 onChange={onChange}
//               />
//             </div>
//             <br />

//             <div className='form-group'>
//             <label htmlFor='mail_id'>Email ID</label>
//               <input
//                 type='email'
//                 placeholder='Email'
//                 name='mail_id'
//                 className='form-control'
//                 value={student.mail_id}
//                 onChange={onChange}
//               />
//             </div>
//             <br />


//             <div className='form-group'>
//               <label htmlFor='current_address'>Address</label>
//               <input
//                 type='text'
//                 placeholder='Enter your current address'
//                  name='current_address'
//                 className='form-control'
//                 value={student.current_address}
//                 onChange={onChange}
//               />
//             </div>
//             <br />
           
//             <div className='form-group'>
//               <label htmlFor='total_score'>Score</label>
//               <input
//                 type='number'
//                 placeholder='Enter the Total Score'
//                 name='total_score'
//                 className='form-control'
//                 value={student.total_score}
//                 onChange={onChange}
//               />
//             </div>
//             <br />

  
//             <div className='form-group'>
//               <label htmlFor='avg_cgpa'>CGPA</label>
//               <input
//                 type='number'
//                 placeholder='Enter Average CGPA'
//                 name='avg_cgpa'
//                 className='form-control'
//                 value={student.avg_cgpa}
//                 onChange={onChange}
//               />
//             </div>
//             <br />

//             <button
//                 type='submit'
//                className='btn btn-outline-info btn-lg btn-block'
//             >
//               Update Student
//             </button>
//             <br /><br />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentUpdate ;





import React, {usestate , useEffect } from 'React';
import {Link , useParams , useNavigate} from ' react-router-dom'; // useP for student Id and useN to navigate into anohter route
import axios from 'axios';


const [ student , setStudent ]= usestate( {
           first_name: '',
          unique_id: '',
          mail_id: '',
          current_address: '',
          total_score: '',
          avg_cgpa: '',
})


const {id}= useParams()  // unique id to fetch specific student's data 
const navigate= useNavigate();

useEffect( ()=>{
  axios.get(`https://stdmrkmgmt.onrender.com/api/student/{id}`).then((res)=>{
    setStudent({
      first_name: res.data.first_name,
          unique_id: res.data.  unique_id,
          mail_id: res.data.mail_id,
          current_address: res.data.current_address,
          total_score: res.data.total_score,
          avg_cgpa: res.data.avg_cgpa,
    });
  })
  .catch((error)=>{
    console.log(`error in update student data`); console.log(error);
  });

},[id])


const onChange=(e)=>{
  setStudent({...student,[e.target.name]: e.target.value});   // onChange function is triggered whenever there is a change in any form input.
};



const onSubmit = (e) => {
  e.preventDefault();
  const data = {
    name: student.first_name,
    unique_id: student.unique_id,
    mail_id: student.mail_id,
    current_address: student.current_address,
    total_score: student.total_score,
    avg_cgpa: student.avg_cgpa
  };

  axios
    .put(`https://stdmrkmgmt.onrender.com/api/student/${id}`, data)
    .then((res) => {
     navigate(`/list`);
})
    .catch((err) => {
      console.log('Error in UpdateStudentInfo PUT request');
      console.log(err);
    });
};


return (
  <div className='StudentUpdate'>
    <div className='container' style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <div className='row'>
        <div className='col-md-8 m-auto'>
          <br />
          <Link to='/list' className='btn btn-outline-warning float-left'>
            Show Student List
          </Link>
        </div>
        <div className='col-md-8 m-auto'>
          <h1 className='display-4 text-center'>Edit Student</h1>
          <p className='lead text-center'>Update Student's Info</p>
        </div>
      </div>

      <div className='col-md-8 m-auto'>
        <form noValidate onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='first_name'>Name</label>
            <input
              type='text'
              placeholder='Name of the student'
              name='first_name' 
              className='form-control'
              value={student.first_name}
              onChange={onChange}
            />
          </div>
          <br />

          <div className='form-group'>
          <label htmlFor='unique_id'>Unique ID</label>
            <input
              type='unique_idl'
              placeholder='unique_id'
              name='unique_id'
              className='form-control'
              value={student.unique_id}
              onChange={onChange}
            />
          </div>
          <br />

          <div className='form-group'>
          <label htmlFor='mail_id'>Email ID</label>
            <input
              type='email'
              placeholder='Email'
              name='mail_id'
              className='form-control'
              value={student.mail_id}
              onChange={onChange}
            />
          </div>
          <br />


          <div className='form-group'>
            <label htmlFor='current_address'>Address</label>
            <input
              type='text'
              placeholder='Enter your current address'
               name='current_address'
              className='form-control'
              value={student.current_address}
              onChange={onChange}
            />
          </div>
          <br />
         
          <div className='form-group'>
            <label htmlFor='total_score'>Score</label>
            <input
              type='number'
              placeholder='Enter the Total Score'
              name='total_score'
              className='form-control'
              value={student.total_score}
              onChange={onChange}
            />
          </div>
          <br />


          <div className='form-group'>
            <label htmlFor='avg_cgpa'>CGPA</label>
            <input
              type='number'
              placeholder='Enter Average CGPA'
              name='avg_cgpa'
              className='form-control'
              value={student.avg_cgpa}
              onChange={onChange}
            />
          </div>
          <br />

          <button
              type='submit'
             className='btn btn-outline-info btn-lg btn-block'
          >
            Update Student
          </button>
          <br /><br />
        </form>
      </div>
    </div>
  </div>
);
}

export default StudentUpdate ;