import React from "react";
import SearchBar from "../LowerPart/SearchBar";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header_container">
        <div className="Container">
          <div className="header_main_container">
            <div className="header_logo">Booking.com</div>
            <div className="headerRightSide">
              <span>INR</span>
              <img src="" alt="" />
              <button>List Your Property</button>
              <button>Register</button>
              <button>Sign in</button>
            </div>
          </div>
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
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Booking.com account
            </p>

            <button className="buttons">Sigin/Register</button>
            
            <SearchBar/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
