

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const CreateStudent = (props) => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    first_name: '',
    unique_id: '',
    mail_id: '',
    current_address: '',
    attendence: '',
    total_score: '',
    avg_cgpa: ''

  });
  // const [showToast, setToast] = useState(false);

  // form change handler //
  const onChange = (e) => {
    console.log(e.target.value);
    setStudent({ ...student, [e.target.name]: e.target.value });
    // [e.target.cgpa]:e.target.value
  }


  // form change handler 
  const onSubmit = (e) => {
    e.preventDefault();

    if (!student.first_name || !student.unique_id || !student.mail_id) {
      toast.error('Please fill in all required fields.', {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
      return;  // Do not proceed with the API call if validation fails
    }

    axios
      .post('/api/students', student)  // sends a post reuest to the /api/students on the server ,to add a new book//
      .then((res) => {
        console.log(student);
        setStudent({
          first_name: '',
          unique_id: '',
          mail_id: '',
          current_address: '',
          attendence: '',
          total_score: '',
          avg_cgpa: ''
        });
        
        toast.success('student created successfully !', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        setTimeout(() => {
          navigate('/'); // Navigate to homepage after 5 seconds
        }, 5000); // Adjust the timeout as needed
        
      })

      .catch((err) => {
        console.log('Error in CreateStudent!');
        console.error(err.response ? err.response.data : err.message);
        toast.error('Something went wrong, try again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });

      });
  };

  return (
    <div className='CreateStudent'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <div className='Container  d-flex align-items-center justify-content-center'>
        <div className='row w-100'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/create-student' className='btn btn-outline-warning float-left'>
              Complete Student List
            </Link>
            </div>
            <div className='col-md-8 m-auto' style={{ display:"flex", alignItems: "center", flexDirection: "column" }}>
              <h1 className='display-4 text-center'>Add Student Here </h1>
              <p className='lead text-center'>Create A New Student</p>


              

                <div className="all-form">
                  <input
                    type='text'
                    placeholder='Enter the Name of the STUDENT'
                    name='first_name'
                    className='form-control'
                    value={student.first_name}
                    onChange={onChange}
                  />

                </div>

                <div className="all-form">
                  <input
                    type='number'
                    placeholder='Enter the Roll number of the STUDENT'
                    name='unique_id'
                  className='form-control'
                    value={student.unique_id}
                    onChange={onChange}
                  />
                </div>


                <div className="all-form">
                  <input
                    type='email'
                    placeholder='Enter the mail ID of the STUDENT'
                    name='mail_id'
                    className='form-control'
                    value={student.mail_id}
                    onChange={onChange}
                  />
                </div>



                <div className="all-form">
                  <input
                    type='text'
                    placeholder='Enter the current address  of the STUDENT'
                    name='current_address'
                    className='form-control'
                    value={student.current_address}
                    onChange={onChange}
                  />
                </div>

                <div className="all-form">
                  <input
                    type='number'
                    placeholder='Enter the attendence number  of the STUDENT'
                    name='attendence'
                    className='form-control'
                    value={student.attendence}
                    onChange={onChange}
                  />
                </div>

                <div className="all-form">
                  <input
                    type='number'
                    placeholder='Enter the total score   of the STUDENT'
                    name='total_score'
                   className='form-control'
                    value={student.total_score}
                    onChange={onChange}
                  />
                </div>

                <div className="all-form">
                  <input
                    type='number'
                    placeholder='Enter the cgpa obtained by the STUDENT'
                    name='avg_cgpa'
                    className='form-control'
                    value={student.avg_cgpa}
                    onChange={onChange}
                  />
                </div>

                <br />

                <div className="button-group">
                  <button type="submit" className="btn btn-add">Submit</button>
                  <button type="button" className="btn btn-cancel" onClick={() => navigate('/')}>Cancel</button>
                </div>


              </form>
            </div>

          
        </div>
      </div>
    </div>
  );
};
export default CreateStudent;
