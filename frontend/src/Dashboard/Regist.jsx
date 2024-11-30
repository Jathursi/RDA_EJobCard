import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Regist() {
    const [userID, setUserID] = useState('');
    const navigate = useNavigate();

    const [values, setValues] = useState({
        Vehicle_num: '',
        Year: '',
        Vehicle_type: '',
        Fault: '',
        Inspected: '',
        Meter: '',
        Location: '',
        Reference: '',
        Response: '',
        CrossCheck: ''
    });

    useEffect(() => {
        axios.get('http://localhost:8081/api/users/me', { withCredentials: true })
            .then(response => {
                setUserID(response.data.id);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { ...values, userID };
        axios.post('http://localhost:8081/api/users/Logbook', formData, { withCredentials: true })
            .then(res => {
                console.log("Logbook entry added successfully");
                navigate('/Home');
            })
            .catch(err => {
                console.error('Error adding logbook entry:', err);
            });
    };

    const handleRadioChange = (e) => {
        setValues({ ...values, Response: e.target.value });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='formContainer'>
            <div className='formTitle'>Logbook Entry</div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='formGroup'>
                    <label className='label'>Vehicle Number</label>
                    <input
                        type='text'
                        name='Vehicle_num'
                        value={values.Vehicle_num}
                        className='input'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='formGroup'>
                    <label className='label'>Manufacture year</label>
                    <input
                        type='text'
                        name='Year'
                        value={values.Year}
                        className='input'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-Reg-rad'>
                    <label>TR / Check List</label>
                    <div className='form-Reg-radio'>
                        <div className='radio'>
                            <input
                                type='radio'
                                name='Response'
                                value='Yes'
                                checked={values.Response === 'Yes'}
                                onChange={handleRadioChange}
                                required
                            />
                            <label>Yes</label>
                        </div>
                        <div className='radio'>
                            <input
                                type='radio'
                                name='Response'
                                value='No'
                                checked={values.Response === 'No'}
                                onChange={handleRadioChange}
                                required
                            />
                            <label>No</label>
                        </div>
                    </div>
                </div>
                <div className='formGroup'>
                    <label className='label'>Reference</label>
                    <input
                        type='text'
                        name='Reference'
                        value={values.Reference}
                        className='input'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='formGroup'>
                    <label className='label'>Vehicle Type</label>
                    <input
                        type='text'
                        name='Vehicle_type'
                        value={values.Vehicle_type}
                        className='input'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='formGroup'>
                    <label className='label'>Fault</label>
                    <textarea
                        type='text'
                        name='Fault'
                        value={values.Fault}
                        className='textarea'
                        onChange={handleChange}
                        rows={5}
                        required
                    ></textarea>
                </div>
                <div className='formGroup'>
                    <label className='label'>Inspected By</label>
                    <input
                        type='text'
                        name='Inspected'
                        value={values.Inspected}
                        className='input'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='formGroup'>
                    <label className='label'>Meter Reading</label>
                    <input
                        type='text'
                        name='Meter'
                        value={values.Meter}
                        className='input'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='formGroup'>
                    <label className='label'>Division</label>
                    <input
                        type='text'
                        name='Location'
                        value={values.Location}
                        className='input'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='formGroup'>
                    <label className='label'>Logbook CrossChecked By</label>
                    <input
                        type='text'
                        name='CrossCheck'
                        value={values.CrossCheck}
                        className='input'
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className='submitButton' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Regist;