import React from 'react';
import './Header.css'; // Import the stylesheet

const Header = () => {
  return (
    <header className="header">
      <img src="profile.png.jpg" alt="Your Name" className="profile-image" />
      <h1>Your Name</h1>
      <p>Web Developer</p>
    </header>
  );
};

export default Header;
