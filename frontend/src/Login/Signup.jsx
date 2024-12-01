import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function Signup() {
    const [formData, setFormData] = useState({
        first_Name: '',
        email: '',
        password: '',
        role: ''
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            console.log('Data being sent:', formData);  // Log the data being sent
            const res = await axios.post('http://rda-e-job-card.vercel.app/api/users/signup', formData); // Adjust URL to match backend route
            alert("Signup successful, please login.");
            navigate('/');
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.error || 'An error occurred');
        }
    };

    return (
        <div className="overlay">
            <div className='form-overlay'>
                <form onSubmit={handleSubmit}>
                    <div className="con">
                        <header className="head-form">
                            <h2>Sign Up</h2>
                            <p>Sign Up here using your username and password</p>
                        </header>
                        <div className='log-in'>
                            <div className="form-in">
                                <input
                                    className="form-input"
                                    id="txt-input"
                                    name="first_Name"
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="User Name"
                                    required
                                />
                                <input
                                    className="form-input"
                                    id="txt-input"
                                    type="text"
                                    name="email"
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                />
                                <input
                                    className="form-input"
                                    type="password"
                                    placeholder="Password"
                                    id="pwd"
                                    name="password"
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="form-input"
                                    type="password"
                                    placeholder="Confirm Password"
                                    id="repwd"
                                    name="confirmPassword"
                                    onChange={handleConfirmPasswordChange}
                                    required
                                />
                                <select
                                    className="form-select"
                                    name="role"
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select your role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div className="Log-btn">
                            <button className="btn sign-up">Sign Up</button>
                        </div>
                    </div>
                </form>
                <div className="sign-in">
                    <Link to={'/'}><button className="btn sign-up">Already have an account? Log in</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;