


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';




 import StudentList from './component/StudentList';
// import StudentDetails from './component/StudentDetails';
import CreateStudent from './component/StudentCreate';
// import StudentUpdate from './component/StudentUpdate';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage';
import './App.css'; // Make sure this contains your CSS
// import { blueGrey } from '@mui/material/colors';

import  twilightHorizonTheme from './Theme/studentMgmt';





const App = () => {
  return (
    <ThemeProvider theme={twilightHorizonTheme}>
      <CssBaseline />
    <Router>
    <Box display="flex" flexDirection="column" minHeight="100vh">
    <Navbar /> 
        <div className="box-container">
            
            <Routes>
                 <Route path="/list" element={<StudentList/>} /> 
                <Route path="/add" element={<CreateStudent/>} />     
                <Route exact path='/' element={<HomePage />} /> 
            </Routes>

        </div>
        <Footer />      
          </Box>
    </Router>
    
    </ThemeProvider>
    
);
};

export default App;