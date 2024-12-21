


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import {ThemeMode } from './component/ThemeMode';
import { CssBaseline, Box } from '@mui/material';
import ExportPage from './component/exportPages';





 import StudentList from './component/StudentList';
  import showStudentDetails from './component/StudentDetails';
import CreateStudent from './component/StudentCreate';
// import StudentUpdate from './component/StudentUpdate';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage';
import './App.css'; // Make sure this contains your CSS


import  twilightHorizonTheme from './Theme/studentMgmt';





const App = () => {
  return (
    <ThemeMode>
      <CssBaseline />
    <Router>
    <Box display="flex" flexDirection="column" minHeight="100vh">
    <Navbar /> 
        <div className="box-container">
            
            <Routes>
                 <Route path="/list" element={<StudentList/>} /> 
                <Route path="/add" element={<CreateStudent/>} />     
                <Route exact path='/' element={<HomePage />} /> 
                <Route path='/show-student/:id' element={<showStudentDetails />} />

                <Route path="/exports" element={<ExportPage/>} /> 


            </Routes>

        </div>
        <Footer />      
          </Box>
    </Router>
    
    </ThemeMode>
    
);
};

export default App;