


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';




import StudentList from './component/StudentList';
import StudentDetails from './component/StudentDetails';
import StudentAdd from './component/StudentCreate';
import StudentUpdate from './component/StudentUpdate';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import HomePage from './component/homePage';
import './App.css'; // Make sure this contains your CSS
import { blueGrey } from '@mui/material/colors';
import rosePineTheme from './container/Theme';




const App = () => {
  return (
    <ThemeProvider theme={rosePineTheme}>
      <CssBaseline />
    <Router>
    <Box display="flex" flexDirection="column" minHeight="100vh">
    <Navbar /> 
        <div className="box-container">
            
            <Routes>
                 <Route path="/list" element={<StudentList />} />
                <Route path="/add" element={<StudentAdd />} />
                <Route path="/edit/:id" element={<StudentUpdate />} />
                <Route path="/detail/:id" element={<StudentDetails />} />
                <Route exact path='/' element={<HomePage />} /> 
            </Routes>

        </div>
        <footer />
        </Box>
    </Router>
    
    </ThemeProvider>
    
);
};

export default App;