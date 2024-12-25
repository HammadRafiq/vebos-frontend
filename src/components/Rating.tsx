import React, { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
const StarRating = ({
  fixed,
  name,
  value,
  size = 20,
  onRatingChange,
  others,
}: any) => {
  const [rating, setRating] = useState(value);
  const [hover, setHover] = useState<any>(value);
  const onRating = (val: any) => {
    if (fixed) {
      return null;
    }
    onRatingChange(val);
    setRating(val);
  };
  return (
    <div className="flex items-center">
      {[...Array(5)].map((star, index) => {
        const currentRating: any = index + 1;
        return (
          <label key={index}>
            <input
              className="hidden"
              type="radio"
              name={name}
              value={currentRating}
              onClick={() => onRating(currentRating)}
              {...others}
            />
            <FaStar
              className="star cursor-pointer"
              size={size}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => (fixed ? null : setHover(currentRating))}
              onMouseLeave={() => (fixed ? null : setHover(null))}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
