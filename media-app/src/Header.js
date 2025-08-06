import React from "react"
import Nav from './Nav.js'

const Header = ({title,search,setSearch}) => {
  return (
    <article className="fixed-alignment">
      <header className="header">
        <h1>{title}</h1>
      </header>

      <Nav search={search} setSearch={setSearch} />
    </article>
  );
}

export default Header