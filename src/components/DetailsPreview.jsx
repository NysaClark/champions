import React from "react";
import logo from "../league-of-legends-logo_lol.png";

const DetailsPreview = ({ showPreview }) => {
  return (
    // <div className={selectVillager ? "preview" : "preview hide"}>
    <div className={showPreview ? "preview" : "preview hide"}>
      <img className="icon" src={logo} alt="" />
      <p>Select a Champion to display here.</p>
    </div>
  );
};

export default DetailsPreview;
