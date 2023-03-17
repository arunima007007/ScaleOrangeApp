import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <div className='contact-heading'>
        <h2>Contact Page</h2>
    </div>
    <div className='home-link'>
    <Link to='/home' className='home-link'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#000"
        d="M20 11.75a.74.74 0 01-.45-.15L12 5.94 4.45 11.6a.75.75 0 01-.9-1.2l8-6a.75.75 0 01.9 0l8 6a.75.75 0 01.15 1 .74.74 0 01-.6.35z"
      ></path>
      <path
        fill="#000"
        d="M18 19.75H6a.76.76 0 01-.75-.75V9.5a.75.75 0 011.5 0v8.75h10.5V9.5a.75.75 0 111.5 0V19a.76.76 0 01-.75.75z"
      ></path>
      <path
        fill="#000"
        d="M14 19.75a.76.76 0 01-.75-.75v-6.25h-2.5V19a.75.75 0 11-1.5 0v-7a.76.76 0 01.75-.75h4a.76.76 0 01.75.75v7a.76.76 0 01-.75.75z"
      ></path>
    </svg>
    </Link>
    </div>
    </>
    )
}

export default Contact