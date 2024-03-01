import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">

                <Link to="/">Movie List</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/submit-review">Submit Review</Link>
                &nbsp;&nbsp;&nbsp;
                <a className="navbar-brand" href="/">Assignment 3</a>
                
            </div>
        </nav>
    );
};

export default NavBar;







/** import React, { useState } from 'react';
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

export default NavBar;
*/
