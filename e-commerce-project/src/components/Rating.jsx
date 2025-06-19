import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              style={{ display: 'none' }}
            />
            <span
              className="star"
              style={{
                fontSize: "22px",
                color: ratingValue <= (rating) ? "#ffc107" : "#bbb6b9",
                cursor: "pointer",
               
              }}
              // onMouseEnter={() => setHover(ratingValue)}
              // onMouseLeave={() => setHover(null)}
            >
                {/* &#9733; */}
              ★ 
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
