import React, { useState } from "react";
import ModalComp from "./ModalComp";
import "../../css/Home/Overlay.scss";
import communication from "../../Images/communication.png";

const OverlayDiv = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="container flex-container">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-6 main-div">
            <div className="left-div">
              <h3> Reduce Leakage in Expenses </h3>
              <h1> Expense Manager </h1>
              <h5>
                Keep track of all expenses on a single platform. Also access
                reports and T&E forms for easy reconciliation and auditing
                purpose.
              </h5>
              <button className="start-btn" onClick={() => setShowModal(true)}>
                GET STARTED
              </button>
              <ModalComp showModal={showModal} setShowModal={setShowModal} />
            </div>
          </div>
          <div className="col-lg-6 right-div">
            <img src={communication} alt="business" width="500" height="400" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OverlayDiv;
