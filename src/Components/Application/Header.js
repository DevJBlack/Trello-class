import React from 'react'
import logo1 from '../img/logo.png'
import { ReactComponent as Sprit1 } from '../img/SVG/magnifying-glass.svg'
import { ReactComponent as BookMark } from '../img/SVG/bookmark.svg'
import { ReactComponent as Chat } from '../img/SVG/chat.svg'
import user from '../img/devin-img-square.jpg'

const Header = () => {
  return (
    <header className="header">
      <img src={logo1} alt="Trillo logo" className="logo"/>

      <form action="#" className='search'>
        <input type="text" className="search__input" placeholder='Search Hotels' />
        <button className="search__button">
          <svg className="search__icon">
            <Sprit1 />
          </svg>
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <BookMark />
          </svg>
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <Chat />
          </svg>
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img src={user} alt="User" className="user-nav__user-photo"/>
          <span className="user-nav__user-name">Devin</span>
        </div>
      </nav>
    </header>
  )
}

export default Header