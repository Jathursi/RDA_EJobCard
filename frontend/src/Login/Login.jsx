import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:8081/api/users/login', { email, password });
            
            if (res && res.data) {
                localStorage.setItem('role', res.data.role);
                // Navigate based on the user's role
                if (res.data.role === 'admin' || res.data.role === 'Superadmin') {
                    navigate('/*');
                } else {
                    navigate('/user');
                }
            } else {
                console.error('Login response is undefined or has no data');
                alert('Login failed. Please try again.');
            }
        } catch (err) {
            console.error('Error during login:', err);
            if (err.response && err.response.data) {
                alert(err.response.data.error);
            } else {
                alert('An error occurred. Please try again.');
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleLogin(e);
        }
    };

    return (
        <div className="overlay">
            <div className='form-overlay'>
                <form onSubmit={handleLogin}>
                    <div className="con">
                        <header className="head-form">
                            <h2>Log In</h2>
                            <p>Login here using your username and password</p>
                        </header>
                        <div className='log-in'>
                            <div className="form-in">
                                <input
                                    className="form-input"
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    required
                                />
                                <input
                                    className="form-input"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    required
                                />
                            </div>
                            <div className="forgot-pass">
                                <Link to={'/forget-password'}>
                                    <button className="btn frgt-pass" type="button">Forgot Password?</button>
                                </Link>
                            </div>
                        </div>
                        <div className="Log-btn">
                            <button className="btn sign-up" type="submit">Login</button>
                        </div>
                    </div>
                </form>
                <div className="sign-in">
                    <Link to={'/signup'}>
                        <button className="btn sign-up">Don't have an account? Sign up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
