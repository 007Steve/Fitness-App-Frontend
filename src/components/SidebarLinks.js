import React from "react";
import  "../styles/SidebarLinks.css";
import HomeIcon from "@material-ui/icons/Home";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
function SidebarLinks({ title, icon }) {
  return (
    <div className="sidebarLinks">
      <h4 className="sidebarLinks__title">{title}</h4>
      <ArrowForwardIosIcon
        fontSize="small"
        className="sidebarLinks__icon"
      />
    </div>
  );
}

export default SidebarLinks;
