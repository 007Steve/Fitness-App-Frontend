import React from "react";
import  "../styles/GoalCard.css";


function GoalCard({ title, image, type, data}) {
   console.log(data);
  return (
    <div className={`goalCard ${title}`}>
      <img className="goalCard__icon "src={image} alt="" />
      <div className="goalCard__infoContainer">
        <h1>
          {data}
          <span>{type}</span>
        </h1>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default GoalCard;
