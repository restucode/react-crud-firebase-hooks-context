import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{'backgroundColor': '#e3f2fd'}}>
        <Link className="navbar-brand" to="/">XII RPL 2</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/siswa">Siswa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/guru">Guru</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}
