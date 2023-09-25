import React from 'react'
import './Footer.css';
import LoadingPage from '../LoadingPage/LoadingPage';
import { Navigate } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-main'>
        <div className='inner-footer-box'>
            <div className='top-box'>
                <div>
                    <h3>BLOG</h3>
                </div>
                <div>
                    <h3>TERMS</h3>
                </div>
                <div>
                <h3>HELP</h3>         
                </div>
            </div>
            <div className='bottom-box'>
                <p>© 2023 TALLIER GOVT</p>
            </div>
        </div>
    </div>
  )
}

export default LoadingPage(Footer);