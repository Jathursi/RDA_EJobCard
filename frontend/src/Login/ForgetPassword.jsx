import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      await axios.post('http://localhost:8081/api/users/send-otp', { email });
      setOtpSent(true);
      alert('OTP sent to your email.');
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please try again.');
    }
  };

  const handleResetPassword = async () => {
    try {
      await axios.post('http://localhost:8081/api/users/reset-password', { email, otp, newPassword });
      alert('Password updated successfully.');
      navigate('/');
    } catch (error) {
      console.error('Error resetting password:', error);
      alert('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className='overlay'>
      <div className='form-overlay1'>
        <h2>Forgot Password</h2>
        {!otpSent ? (
          <>
            <div className='form-in'>
              <input
                type='text'
                placeholder='Enter email'
                className='form-input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='Log-btn'>
              <button className="btn sign-up" onClick={handleSendOtp}>Send OTP</button>
            </div>
          </>
        ) : (
          <>
            <div className='form-in'>
              <input
                type='text'
                placeholder='Enter OTP'
                className='form-input'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <input
                type='password'
                placeholder='Enter new password'
                className='form-input'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className='Log-btn'>
              <button onClick={handleResetPassword}>Reset Password</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
