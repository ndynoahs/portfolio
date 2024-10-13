import React from "react";

const Card = ({ data }) => {
  return (
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
