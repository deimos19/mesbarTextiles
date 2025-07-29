import React from 'react';
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="navbar bg-slate-950 shadow-sm px-4">
        {/* Left: Mobile Dropdown Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>

        {/* Center: Logo and Brand Name */}
        <div className="navbar-center">
          <a className="text-xl flex flex-col items-center gap-1">
            <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
            <p className="text-white">Al Mesbar Textiles</p>
          </a>
        </div>

        {/* Right: Search Icon */}
        <div className="navbar-end gap-2">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="hidden md:flex bg-slate-800 text-white text-sm py-2 px-4 flex flex-col lg:flex-row justify-center items-center gap-2">
        <p><strong><i class="bi bi-envelope mx-1"></i></strong>  mesbartextile@gmail.com</p>
        <span className="hidden lg:inline mx-2">|</span>
        <p><strong><i class="bi bi-geo-alt mx-1"></i></strong> Exhibition Showroom 2, Ajman Industrial 2 P.O. Box 9260, Ajman UAE</p>
        <span className="hidden lg:inline mx-2">|</span>
        <p><strong><i class="bi bi-telephone mx-1"></i></strong> +971528524737</p>
      </div>
    </>
  );
};

export default Header;
