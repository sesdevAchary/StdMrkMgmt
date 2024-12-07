


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';




import studentList from './components/studentList';
import studentDetails from './components/studentDetail';
import PatientAdd from './components/createPatient';
import PatientEdit from './components/updatePatient';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import HomePage from './components/homePage';
import './App.css'; // Make sure this contains your CSS



const App = () => {
  return (
    <ThemeProvider theme={rosePineTheme}>
      <CssBaseline />
    <Router>
    <Box display="flex" flexDirection="column" minHeight="100vh">
        <div className="box-container">
            <Navbar />
            <Routes>
                 {<Route path="/list" element={<studentList />} />
                <Route path="/add" element={<PatientAdd />} />
                <Route path="/edit/:id" element={<PatientEdit />} />
                <Route path="/detail/:id" element={<PatientDetail />} />
                <Route exact path='/' element={<HomePage />} /> 
            </Routes>
        </div>
        
        </Box>
    </Router>
    </ThemeProvider>
    
);
};

export default App;