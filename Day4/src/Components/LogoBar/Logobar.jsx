import React from 'react';
import './LogoBar.css';
import Image from './Logo.png';
import LoadingPage from '../LoadingPage/LoadingPage';
import { useNavigate,useLocation } from 'react-router-dom';

function Logobar() {
  const navigate = useNavigate();
  const location = useLocation();

  let navbarClass = 'navbar-dashboard';
  if(location.pathname === '/' ){
    navbarClass = 'navbar'
  }

  return (
    <nav className={navbarClass}>
      <div className='left-bar bars'>
        <div className='boxs'>
          <p >PARTIES</p>
        </div>
        <div className='boxs'>
          <p >BY ELECTION</p>
        </div>
        <div className='boxs'>
          <p >FORUMS</p>
        </div>
      </div>
      <div className="center-logo">
        <img onClick={() => {navigate('/')}}src={Image} alt="Logo" />
      </div>
      <div className='right-bar bars'>
        <div className='boxs'>
          <p >CANDICACY</p>
        </div>
        <div className='boxs'>
          <p onClick={() => {navigate('/dashboard/myaccount')}}>ABOUT US</p>
        </div>
        <div className='boxs'>
          <p onClick={() => {navigate('/login')}}>LOG IN</p>
        </div>
      </div>
    </nav>
  );
}

export default LoadingPage(Logobar);
