import React from 'react'
import '../sass/App.scss'
import Header from './Header'
import Sidebar from './Sidebar'
import HotelView from './Hotel-view'


const App = () => {
  return (
    <div>
      <div className="container">
          <Header />
        <div className="content">
          <Sidebar />
          <HotelView />
        </div>
      </div>
    </div>
  )
}

export default App