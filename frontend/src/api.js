import axios from 'axios';

const API_BASE_URL = 'https://rda-e-job-card.vercel.app/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Include cookies or auth headers
});

export default axiosInstance;
