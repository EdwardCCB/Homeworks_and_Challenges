import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/config.js';

const AuthComponent = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(app);

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default AuthComponent;
