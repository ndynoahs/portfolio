import React from "react";

const Card = ({ data }) => {
  return (
    // <div class="glass-card">
    //   <h2>Glass Card</h2>
    //   <p>This is a frosted glass card design example.</p>
    //   <button class="glass-button">Explore</button>
    // </div>
    <div class="experience-card">
      <div class="card-date">{data.date}</div>
      <div class="card-title">{data.title}</div>
      <div class="card-company">
        {data.company}, {data.location}
      </div>
    </div>
  );
};

export default Card;
