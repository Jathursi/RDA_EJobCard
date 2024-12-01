import './App.css';
// import './Jathu.css'
import React, { useEffect } from 'react';
import Login from './Login/Login';
import ForgetPassword from './Login/ForgetPassword';
import Signup from './Login/Signup';
import Admin from './Admin/Admin';
import User from './Admin/User';
import Dash from './Main/Dash';
import Implement from './Outlet/Implement';
import Estimation from './Outlet/Estimation';
import Completion from './Outlet/Completion';
import Others from './Outlet/Others'; 
import Suppliment from './Outlet/Suppliment';
import OutSource from './Outlet/OutSource';
import Initial from './Images/Initial';
import ImImage from './Images/ImImage';
import CompImg from './Images/CompImg';
import AuthEmail from './Mailing/AuthEmail';
import CompEmail from './Mailing/CompEmail';
import Resourse from './Uploads/Resourse';
import EstPrint from './Print/EstPrint';
import ComPrint from './Print/ComPrint';
import SupEdit from './Outlet/SupEdit';


import UserSearchBar from './User/UserSearchBar';
import UserDetail from './User/UserDetail';
import UserFeedback from './User/UserFeedback';
import UserInf from './Outlet/UserInf';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  // Detect system color scheme preference and apply it
  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark-mode', systemPrefersDark);
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename="RDA_EJobCard">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Admin />} />
          <Route path="/dashes/:id" element={<Navigate to='implement'/>} />
          <Route path="/dashes/:id" element={<Dash />}>
            <Route path="implement" element={<Implement />} />
            <Route path="estimation" element={<Estimation />} />
            <Route path="completion" element={<Completion />} />
            <Route path="suppliment" element={<Suppliment />} />
            <Route path="supedit" element={<SupEdit />} />
            <Route path="others" element={<Others />} />
            <Route path="outsource" element={<OutSource />} />
            <Route path="userInf" element={<UserInf />} />
            <Route path="images" element={<Initial />} />
            <Route path="imimage" element={<ImImage />} />
            <Route path="compimg" element={<CompImg />} />
            <Route path="resourse" element={<Resourse />} />
            <Route path="authEmail" element={<AuthEmail />} />
            <Route path="compEmail" element={<CompEmail />} />
            <Route path="estPrint" element={<EstPrint />} />
            <Route path="comPrint" element={<ComPrint />} />
          </Route>
          <Route path="/user" element={<Navigate to='search' />}/>
          <Route path="/user" element={<User />}>
            <Route path="search" element={<UserSearchBar />} />
            <Route path="details/:vehicle_num" element={<UserDetail />} />
            <Route path="feedback" element={<UserFeedback />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
