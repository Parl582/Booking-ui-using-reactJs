import React from 'react'
import './Lower.scss'

const LowerPart = () => {
  return (
    <>
     <div className="lowerMainContainer">

   
        <div className="lowerHeader_container">

            <li>
                <img src="" alt="" />
                <span>stay</span>
            </li>
            <li>
                <img src="" alt="" />
               <span> Flights</span>
            </li>
            <li>
                <img src="" alt="" />
                <span>Flight + Hotel</span>
                
            </li>
            <li>
                <img src="" alt="" />
                <span>Car Reant</span>
            </li>

        </div>
        <div className="header_description_page">
            <h1>A lifetime of discounts? It's Genius.</h1>

            <p>
            Get rewarded for your travels – unlock instant savings of 10% or more with a free Booking.com account
            </p>

            <button>Sigin/Register</button>

            <div className="SearchContainer">
              <div className="searchItem">
                  <div className="icons"></div>
                  <input type="text" placeholder='where are you going' />
              </div>
              <div className="searchItem">
                  <div className="icons"></div>
                  <input type="text" placeholder='where are you going' />
              </div>
              <div className="searchItem">
                  <div className="icons"></div>
                  <input type="text" placeholder='where are you going' />
              </div>
            </div>
            </div>

            </div>

    </>
  )
}

export default LowerPart