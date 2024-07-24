import React from 'react';
import './Topbar.css';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="top-bar">
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          Home
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/toDoList">
          To-Do List
        </NavLink>
      </nav>
    </div>
  );
};

export default Topbar;
