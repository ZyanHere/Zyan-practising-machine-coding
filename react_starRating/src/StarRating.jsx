import { useState } from "react";

export default function StarRating({ starCount = 5 }) {
  const [starValue, setStarValue] = useState();
  const [hover, setHover] = useState();

  return (
    <div className="container">
      {new Array(starCount).fill(0).map((value, index) => {
        return (
          <span
            key={index}
            className={
              (hover == 0 && index < starValue) || index < hover ? "gold" : ""
            }
            onClick={() => setStarValue(index + 1)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
