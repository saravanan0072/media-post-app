import React from "react"
import Nav from './Nav.js'
import { FaMobileAlt } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import './css/Header.css'
import { useContext } from "react";
import DataContext from "./Context/DataContext.js";

const Header = ({ title }) => {
  // console.log(width)
  const {width,search,isOpen,setSearch,clearSearch,toggleMenu} = useContext(DataContext)
  return (
    <article className="fixed-alignment">
      <header className="header">
        <h1>{title}</h1>
        {width < 600 ? (
          <FaMobileAlt className="mobile-icon" />
        ) : width < 992 ? (
          <FaTabletAlt className="tablet-icon" />
        ) : (
          <FaLaptop className="laptop-icon" />
        )}
      </header>

      <Nav
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        search={search}
        setSearch={setSearch}
        clearSearch={clearSearch}
      />
    </article>
  );
}

export default Header