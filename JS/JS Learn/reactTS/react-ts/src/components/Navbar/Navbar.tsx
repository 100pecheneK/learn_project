import React from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'


const Navbar: React.FC = () => {
  return (
    <nav>
      <h1>React + TS</h1>
      <ul>
        <li><Link to="/">Список дел</Link></li>
        <li><Link to="/about">Инфо</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
