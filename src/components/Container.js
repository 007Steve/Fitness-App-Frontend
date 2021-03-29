import React, { useEffect } from "react";
import styles from "../styles/Container.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import GoalCard from "./GoalCard";
import ChartCircle from "./ChartCircle";
// import ChartCard from "./ChartCard";
// import { useSelector,useDispatch} from "react-redux";
// import { goals } from "../features/goalsSlice";
// import { selectGoals } from "../features/goalsSlice";
// import { selectcurrentGoal } from "../features/currentGoal";
function Container({ goalsData }) {
  // const allGoals = useSelector(selectGoals);
  // const currentGoalData = useSelector(selectcurrentGoal);
  //  const currentGoal = currentGoalData.setCurrentGoal;
  // const dispatch = useDispatch();
  //  console.log(currentGoalData);

  return (
    <div className="container">
      <div>
        <div className="container__nav">
          <h2 className="container__title">Fitness Tracker</h2>
          <div className="container__navLinks">
            <SearchIcon className="container__navLink" />
            <NotificationsActiveIcon className="container__navLink" />
            <button className="container__btn">Dark Mode</button>
          </div>
        </div>
        {/* <h3 className="container__date">
        { moment(currentGoalData.setCurrentGoal.createdAt).calendar() }
      </h3> */}
        <div className="container__row">
          <GoalCard
            title="Sleep"
            image="/moon.png"
            number="3"
            type="Hours"
            // data={currentGoal.sleep}
          />
          <GoalCard
            title="Calories"
            image="/fire.png"
            number="3"
            type="Workouts"
            // data={currentGoal.calories}
          />
          <GoalCard
            title="Water"
            image="/drop.png"
            number="3"
            type="Liters"
            // data={currentGoal.water}
          />
          <GoalCard
            title="Steps"
            image="/footsteps-silhouette-variant.png"
            number="3"
            type="Steps"
            // data={currentGoal.steps}
          />
        </div>
      </div>
      <div className="container__data">
        <div className="container__chartHeader">
          <h3 className="container__chartHeaderTitle">Actvitiy</h3>
          <div className="container__chartHeader">
            <ChartCircle title="Steps" color="Steps" />
            <ChartCircle title="Sleep" color="Sleep" />
            <ChartCircle title="Calories" color="Calories" />
            <ChartCircle title="Water" color="Water" />
          </div>
        </div>
        <div className="container__chartMain">
          <div className="container__chartNumbers">
            <p className="container__chartNumber">0</p>
            <p className="container__chartNumber">10</p>
            <p className="container__chartNumber">20</p>
            <p className="container__chartNumber">30</p>
            <p className="container__chartNumber">40</p>
            <p className="container__chartNumber">50</p>
            <p className="container__chartNumber">60</p>
            <p className="container__chartNumber">70</p>
            <p className="container__chartNumber">80</p>
            <p className="container__chartNumber">90</p>
            <p className="container__chartNumber">100</p>
          </div>
          <div className="container__chartMainData">
            {/* {goalsData.map((data) => (
              <ChartCard data={data} key={data._id} />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
