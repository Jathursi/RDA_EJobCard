import React, { useState } from 'react';
import axios from 'axios';

function UserFeedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vehicle_num: '',
    message: '',
    rating: 0, // Initialize rating as 0
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (ratingValue) => {
    setFormData({ ...formData, rating: ratingValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.name === '' || formData.email === '') {
        setResponseMessage('Name and Email are required.');
        return;
      }
      const response = await axios.post('http://rda-e-job-card.vercel.app/api/feedback/feedbacks', formData);
      setResponseMessage(response.data.message);
      setFormData({ name: '', email: '', vehicle_num: '', message: '', rating: 0 }); // reset form
    } catch (error) {
      setResponseMessage('Error submitting feedback.');
    }
  };

  return (
    <div className='feedCont'>
      <div className='feedTitle'>Feedback</div>
      {responseMessage && <div className='feedResponse'>{responseMessage}</div>}
      <div className='feedForm'>
        <form onSubmit={handleSubmit}>
          <div className='feedFormRow'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required/>
          </div>
          <div className='feedFormRow'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required/>
          </div>
          <div className='feedFormRow'>
            <label htmlFor='vehicle_num'>Vehicle Number</label>
            <input type='text' id='vehicle_num' name='vehicle_num' value={formData.vehicle_num} onChange={handleChange} />
          </div>
          <div className='feedFormRow'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' rows={5} value={formData.message} onChange={handleChange} />
          </div>
          <div className='feedFormRow'>
            <label>Rating</label>
            <div className='ratingStars'>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= formData.rating ? 'selected' : ''}`}
                  onClick={() => handleRatingChange(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className='feedFormRow'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserFeedback;
