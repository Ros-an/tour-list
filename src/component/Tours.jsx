import React from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <section>
      <div className="heading">
        <h1>Our Tour</h1>
        <div className="horizontal-line"></div>
      </div>
      <div className="tour">
        {tours.map((item) => (
          <Tour key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
