import React from "react";
import Header from "./Header";
import OverlayDiv from "./OverlayDiv";
import "../../css/Home/HeaderDiv.scss";

const HeaderDiv = () => {
  return (
    <>
      <div className="bg-img">
        <div className="container">
          <Header />
          <OverlayDiv />
        </div>
      </div>
    </>
  );
};

export default HeaderDiv;
