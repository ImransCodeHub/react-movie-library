/**
    Create and display a react component named “NavBar”. This component should display 
    “Assignment 3” in text, and also have a login button. When the login button is pressed it 
    changes its text to “logout”, which when pressed will flip the text back to “login”
 */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleButtonClick = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">

                <Link to="/">Home</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/movie-list">Movie List</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/submit-review">Submit Review</Link>
                &nbsp;&nbsp;&nbsp;
                
                <a className="navbar-brand" href="/">Assignment 3</a>
                <Button
                    onClick={handleButtonClick}
                    variant={isLoggedIn ? 'danger' : 'primary'}
                    className={isLoggedIn ? 'logout-btn' : 'login-btn'}
                    style={{ marginLeft: '10px' }}
                >
                    {isLoggedIn ? 'Logout' : 'Login'}
                </Button>
            </div>
        </nav>
    );
};


// const NavBar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const handleButtonClick = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };
//   return (
//     <nav>
//       <div>
//         <a href="/">Assignment 3</a>
//         <button onClick={handleButtonClick}>{isLoggedIn ? 'Logout' : 'Login'}</button>
//       </div>
//     </nav>
//   );
// };

export default NavBar;