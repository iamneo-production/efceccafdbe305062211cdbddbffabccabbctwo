// Sidebar.js
import React from 'react';


function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="nav-links">
        <li><a href="/students">Student List</a></li>
        <li><a href="/enroll">Enroll Student</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </aside>
  );
}

export default Sidebar;
