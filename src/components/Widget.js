import React, { useState } from "react";
import "../styles/Widget.css";
// import SidebarLinks from "./SidebarLinks";

import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function Widget({ user }) {
  let history = useHistory();
  // const user = useSelector(selectUser);
  // const router = useRouter();

  //signout
  const signout = async () => {
    await fetch("http://localhost:5000/api/users/logout", {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    history.push("/");
  };

  return (
    <div className="widget">
      <div className="widget__container">
        <img
          className="widget__image"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHeZuu5PGQzYw/profile-displayphoto-shrink_200_200/0/1600449353015?e=1622073600&v=beta&t=JFN9Arouw5n08HE-M93TSVudTycOx7_CAx3xMMImTAA"
          alt=""
        />
        {/* <h3 className={widget__name}>{user.name }</h3> */}
        <Link toodf="/addGoal">
          <button className={`widget__btn border`}>Add A Goal</button>
        </Link>
        <div className="widget__linkContainer">
          {/* <SidebarLinks title="Home" icon="HomeIcon" />
          <SidebarLinks title="Goals" icon="HomeIcon" />
          <SidebarLinks title="Workouts" icon="HomeIcon" />
          <SidebarLinks title="Achievements" icon="HomeIcon" />
          <SidebarLinks title="Progams" icon="HomeIcon" />
          <SidebarLinks title="Activity" icon="HomeIcon" />
          <SidebarLinks title="Settings" icon="HomeIcon" /> */}
        </div>
        <button className="widget__btn" onClick={signout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Widget;
