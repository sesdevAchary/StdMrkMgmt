


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Footer from './components/footer';
import Navbar from './components/Navbar';



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
        <Footer />
        </Box>
    </Router>

    
);
};

export default App;