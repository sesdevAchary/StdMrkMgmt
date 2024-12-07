


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';




import studentList from './component/studentList';
import studentDetails from './component/studentDetail';
import PatientAdd from './component/createPatient';
import PatientEdit from './component/updatePatient';
import footer from './component/footer';
import Navbar from './component/Navbar';
import HomePage from './component/homePage';
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
        <footer/>
        </Box>
    </Router>
    router fro all case 
    </ThemeProvider>
    
);
};

export default App;