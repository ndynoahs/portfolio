import React from "react";
import { experience } from "../../data";
import Card from "./Card";
import "./experince.css";
import { GrUserWorker } from "react-icons/gr";
const index = () => {
  return (
    <div className="experience">
      <h1 className="exp-title">
        {" "}
        My Experince <GrUserWorker />
      </h1>
      <div className="experience-container">
        {experience.map((data) => (
          <Card
            data={data}
            date={data.date}
            title={data.title}
            company={data.company}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
