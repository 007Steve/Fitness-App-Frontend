import React from "react";
import "../styles/ChartCircle.css";
function ChartCircle({ title, color }) {
  return (
    <div className={"chartCircle"}>
      <div className={"chartCircle__chartHeaderInfo"}>
        <span className={`chartCircle__dot ${color}`}></span>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default ChartCircle;
