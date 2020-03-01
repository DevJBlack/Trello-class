import React from 'react'
import hotel1 from '../img/hotel-1.jpg'
import hotel2 from '../img/hotel-2.jpg'
import hotel3 from '../img/hotel-3.jpg'
import { ReactComponent as Star } from '../img/SVG/star.svg'
import { ReactComponent as LocationPin } from '../img/SVG/location-pin.svg'

const HotelView = () => {
  return (
    <main className="hotel-view">
      <div className="gallery">
        <figure className="gallery__item">
          <img src={hotel1} alt="hotel one" className="gallery__photo"/>
        </figure>
        <figure className="gallery__item">
          <img src={hotel2} alt="hotel one" className="gallery__photo"/>
        </figure>
        <figure className="gallery__item">
          <img src={hotel3} alt="hotel one" className="gallery__photo"/>
        </figure>
      </div>

      <div className="overview">
        <h1 className="overview__heading">
          Hotel Las Palmas
        </h1>
        <div className="overview__stars">
          <svg className="overview__icon-star">
              <Star />
          </svg>
          <svg className="overview__icon-star">
              <Star />
          </svg>
          <svg className="overview__icon-star">
              <Star />
          </svg>
          <svg className="overview__icon-star">
              <Star />
          </svg>
          <svg className="overview__icon-star">
              <Star />
          </svg>
        </div>

        <div className="overview__location">
          <svg className="overview__icon-location">
              <LocationPin />
          </svg>
          <button className="btn-inline">Albufeira, Portugal</button>
        </div>

        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-count">429 votes</div>
        </div>
      </div>

    </main>
  )
}

export default HotelView