import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import AuthComponent from './components/login-register/AuthComponent.jsx';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const logout = () => {
        setIsAuthenticated(false);
    }

    return (
        <Router>
            <button onClick={logout}>Logout</button>
            <Routes>
                <Route path="/" element={<><Home /><AuthComponent setIsAuthenticated={setIsAuthenticated} /></>} />
                <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;