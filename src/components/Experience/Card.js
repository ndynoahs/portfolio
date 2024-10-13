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

{
  /* <div class="card-date">Jan 2023 - Oct 2024</div>
<div class="card-title">Front-End Developer</div>
<div class="card-company">TechCorp Ltd, Lagos</div> */
}
