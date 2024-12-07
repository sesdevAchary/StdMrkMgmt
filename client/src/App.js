


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';




import Navbar from './component/Navbar';
import studentList from './studentList.js'
import DeleteStudent from './studentDelete.js'




const App = () => {
  return (
    <Router>
    <Box display="flex" flexDirection="column" minHeight="100vh">
        <div className="box-container">
            <Navbar />
            <Routes>
                {/* <Route path="/list" element={<PatientList />} />
                <Route path="/add" element={<PatientAdd />} />
                <Route path="/edit/:id" element={<PatientEdit />} />
                <Route path="/detail/:id" element={<PatientDetail />} />
                <Route exact path='/' element={<HomePage />} /> */}
            </Routes>
        </div>
        
        </Box>
    </Router>

    
);
};

export default App;