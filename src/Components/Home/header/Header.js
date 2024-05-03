import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>
              Good food choices <br /> are good <br /> investments.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Etiam et purus a odio finibus bibendum amet leo.
            </p>
            <div className="buttons">
              <button>
                <span>Order Now</span>
                <span>
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
              </button>
              <button>
                <span>Learn More</span>
                <span>
                  <i className="fa-solid fa-right-long"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
