import React from 'react'
import { ReactComponent as Home } from '../img/SVG/home.svg'
import { ReactComponent as AirCraft } from '../img/SVG/aircraft-take-off.svg'
import { ReactComponent as Rental } from '../img/SVG/key.svg'
import { ReactComponent as Tours } from '../img/SVG/map.svg'

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="http://localhost:3000" className="side-nav__link">
            <svg className="side-nav__icon">
              <Home />
            </svg>
            <span>Hotel</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="http://localhost:3000" className="side-nav__link">
            <svg className="side-nav__icon">
              <AirCraft />
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="http://localhost:3000" className="side-nav__link">
            <svg className="side-nav__icon">
              <Rental />
            </svg>
            <span>Car Rental</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="http://localhost:3000" className="side-nav__link">
            <svg className="side-nav__icon">
              <Tours />
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div className="legal">
        &copy; 2020 by Trillo. All rights reserved.
      </div>
    </nav>
  )
}

export default Sidebar