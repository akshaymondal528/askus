import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="navigation_bar">
      <div>
        <NavLink className="navigation_bar__navlogo" to="/">
          ASKUS
        </NavLink>
      </div>
      <div>
        <NavLink className="navigation_bar__navlink" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 navigation_icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </NavLink>
        <NavLink className="navigation_bar__navlink" to="/about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 navigation_icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          About
        </NavLink>
        <NavLink className="navigation_bar__navlink" to="/signup">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 navigation_icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
          SignUp
        </NavLink>
        <NavLink className="navigation_bar__navlink" to="/signin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 navigation_icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          SignIn
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
