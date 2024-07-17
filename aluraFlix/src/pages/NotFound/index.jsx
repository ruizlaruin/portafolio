import React from 'react';
import './NotFound.css';

function NotFound (){
  return (
    <div className="notfound-container">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops! Page not found</h2>
        <p>Sorry, but the page you are looking for does not exist, has been removed, or is temporarily unavailable.</p>
        <a href="/" className="home-link">Go to Homepage</a>
      </div>
    </div>
  );
};

export default NotFound;
