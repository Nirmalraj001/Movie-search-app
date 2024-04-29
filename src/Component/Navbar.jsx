import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <nav className="navbar">
      <div className="navbar-title" onClick={() => navigate('/Movie-search-app')}>Movie Search App</div>
      <a
        href="https://github.com/Nirmalraj001/Movie-search-app"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-icon">
          <path fill="#fff" d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.263.82-.581 0-.288-.01-1.046-.015-2.055-3.338.715-4.042-1.617-4.042-1.617-.546-1.386-1.334-1.755-1.334-1.755-1.09-.746.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.837 2.805 1.305 3.487.998.108-.776.42-1.306.763-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.385 1.236-3.23-.124-.305-.535-1.528.116-3.18 0 0 1.01-.323 3.3 1.23a11.53 11.53 0 0 1 3-.404c1.015.004 2.035.137 3 .404 2.287-1.553 3.295-1.23 3.295-1.23.654 1.652.244 2.875.12 3.18.77.845 1.236 1.92 1.236 3.23 0 4.61-2.806 5.622-5.478 5.92.43.373.813 1.103.813 2.226 0 1.606-.014 2.897-.014 3.292 0 .322.214.7.825.58C20.566 21.795 24 17.303 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
    </nav>
  );
};

export default Navbar;
