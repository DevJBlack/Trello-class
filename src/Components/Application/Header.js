import React from 'react'
import logo1 from '../img/logo.png'
import sprit1 from '../img/SVG/magnifying-glass.svg'

const Header = () => {
  return (
    <header className="header">
      <img src={logo1} alt="Trillo logo" className="logo"/>

      <form action="#" className='search'>
        <input type="text" className="search__input" placeholder='Search Hotels' />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref={sprit1}></use>
          </svg>
        </button>
      </form>
    </header>
  )
}

export default Header