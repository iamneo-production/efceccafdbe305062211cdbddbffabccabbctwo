// Header.js
import React from 'react';


function Header() {
  return (
    <header className="header">
      <img src="https://i.pinimg.com/736x/a6/ac/ec/a6acec062d7954d8fb01198429042c6b.jpg" alt="GenC Logo" className="logo" />
      <nav className="nav">
        <br></br>
        <a href="/">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/students">Student List</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/enroll">Enroll Student</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        </nav>
    </header>
  );
}

export default Header;
