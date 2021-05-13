import React, { useState } from "react";

const Tour = ({ name, info, image, price }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="detail">
        <div className="price-heading">
          <h4>{name}</h4>
          <h4>Rs. {price}0</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}

          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "show more"}
          </button>
        </p>
      </div>
      <button className="delete-btn">NOT INTERESTED</button>
    </div>
  );
};

export default Tour;
