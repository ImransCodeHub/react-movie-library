/**
    Create and display a react component named “NavBar”. This component should display 
    “Assignment 3” in text, and also have a login button. When the login button is pressed it 
    changes its text to “logout”, which when pressed will flip the text back to “login”
 */
import React, { useState } from 'react';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <nav>
      <div>
        <a href="/">Assignment 3</a>
        <button onClick={handleButtonClick}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      </div>
    </nav>
  );
};

export default NavBar;
