import React from 'react'
import { Link } from "react-router-dom";
import "./css/SideBar.css";
import { useContext } from 'react';
import DataContext from './Context/DataContext';


const SideBar = () => {
   const {isOpen} = useContext(DataContext)
    return (
      <section className={`sidebar ${isOpen ? 'active' : ""}`}>
        <ul className="sidebar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/post">Post</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </section>
    );
}

export default SideBar