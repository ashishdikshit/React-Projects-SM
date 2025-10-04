import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = ({ iconNumbers = 5 }) => {
  const [rating, setRating] = useState(0); // Final selected rating
  const [hover, setHover] = useState(0);  // Current star hovered by user

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);  // Set rating when star is clicked
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex); // Highlight up to hovered star
  }

  function handleMouseLeave() {
    setHover(rating); // When mouse leaves, show current rating only
  }

  //console.log([...Array(iconNumbers)]);  // it’s not “undefined”, it just prints an array with empty slots 😄

  return (
    <div className="star-rating">
      {[...Array(iconNumbers)].map((_, index) => {
        index += 1; //  because array index starts from 0
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
