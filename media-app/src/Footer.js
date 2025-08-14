import React from 'react'
import './css/Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>Copyright &copy; {year} </p>
    </footer>
  );
}

export default Footer