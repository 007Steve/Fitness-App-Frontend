import React from "react";
import styles from "../styles/ChartCard.module.css";
// import moment from "moment";
// import { useDispatch } from "react-redux";
//  import { setCurrentGoal } from "../features/currentGoal";
function ChartCard({ data }) {
  // const dispatch = useDispatch();
  // const selectedGoalHandler = () => {
  //   dispatch(
  //     setCurrentGoal({
  //       setCurrentGoal: data,
  //     })
  //   );
  // };
  // const date = moment(data.updatedAt).format("dddd" );
  return (
    <div className="chartCard" onClick={selectedGoalHandler}>
      <div className="chartCard__container">
        <div className={`chartCard__input ${Steps} `}></div>
        <div className={`chartCard__input ${Water}`}></div>
        <div className={`chartCard__input ${Calories}`}></div>
        <div className={`chartCard__input ${Sleep}`}></div>
      </div>
      <h5>{date} </h5>
    </div>
  );
}

export default ChartCard;
