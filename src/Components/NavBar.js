import React, { useState } from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const refreshPage = () => {
    setTimeout(()=>{
        window.location.reload(false);
    }, 300);
    console.log('page to reload')
    }
  return (
    <>
    <nav className="navigation">
      <Link to="/home" className="brand-name"  onClick={refreshPage}>
        ScaleOrange
      </Link>
      <button className="hamburger"
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link className='link-item' to='/home' onClick={refreshPage}>Home</Link>
          </li>
          <li>
            <Link className='link-item' to='/about'>About</Link>
          </li>
          <li>
            <Link className='link-item' to='/contact'>Contact</Link>
          </li>
          <li>
            <Link className='link-item' to='/'>
            <svg className='logout-logo'
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="25"
                fill="#000"
                version="1.1"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
                >
                <g>
                    <path d="M51.213 180h173.785c8.284 0 15-6.716 15-15s-6.716-15-15-15H51.213l19.394-19.393c5.858-5.857 5.858-15.355 0-21.213-5.856-5.858-15.354-5.858-21.213 0L4.397 154.391c-.348.347-.676.71-.988 1.09-.076.093-.141.193-.215.288-.229.291-.454.583-.66.891-.06.09-.109.185-.168.276-.206.322-.408.647-.59.986-.035.067-.064.138-.099.205-.189.367-.371.739-.53 1.123-.02.047-.034.097-.053.145-.163.404-.314.813-.442 1.234-.017.053-.026.108-.041.162-.121.413-.232.83-.317 1.257-.025.127-.036.258-.059.386-.062.354-.124.708-.159 1.069a14.612 14.612 0 000 2.995c.035.366.099.723.16 1.08.022.124.033.251.058.374.086.431.196.852.318 1.269.015.049.024.101.039.15.129.423.28.836.445 1.244.018.044.031.091.05.135.16.387.343.761.534 1.13.033.065.061.133.095.198.184.341.387.669.596.994.056.088.104.181.162.267.207.309.434.603.662.895.073.094.138.193.213.285.313.379.641.743.988 1.09l44.997 44.997C52.322 223.536 56.161 225 60 225s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213L51.213 180z"></path>
                    <path d="M207.299 42.299c-40.944 0-79.038 20.312-101.903 54.333-4.62 6.875-2.792 16.195 4.083 20.816 6.876 4.62 16.195 2.794 20.817-4.083 17.281-25.715 46.067-41.067 77.003-41.067C258.414 72.299 300 113.884 300 165s-41.586 92.701-92.701 92.701c-30.845 0-59.584-15.283-76.878-40.881-4.639-6.865-13.961-8.669-20.827-4.032-6.864 4.638-8.67 13.962-4.032 20.826 22.881 33.868 60.913 54.087 101.737 54.087C274.956 287.701 330 232.658 330 165S274.956 42.299 207.299 42.299z"></path>
                </g>
            </svg> Logout {" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default NavBar