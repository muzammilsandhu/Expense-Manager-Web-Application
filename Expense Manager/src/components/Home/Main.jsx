import React, { useState } from "react";
import Questions from "./Questions";
import ModalComp from "./ModalComp";
import "../../css/Home/Main.scss";
import policy from "../../Images/policy.avif";
import report from "../../Images/report.avif";
import form from "../../Images/form.avif";

const Main = () => {
  const [policyState, setPolicyState] = useState("active");
  const [reportState, setReportState] = useState("inactive");
  const [formState, setFormState] = useState("inactive");

  const [showModal, setShowModal] = useState(false);

  const [selectedButton, setSelectedButton] = useState("policies");

  const handlePoliciesClick = () => {
    setSelectedButton("policies");
    setPolicyState("active");
    setReportState("inactive");
    setFormState("inactive");
  };
  const handleReportsClick = () => {
    setSelectedButton("reports");
    setReportState("active");
    setPolicyState("inactive");
    setFormState("inactive");
  };
  const handleFormsClick = () => {
    setSelectedButton("forms");
    setFormState("active");
    setPolicyState("inactive");
    setReportState("inactive");
  };

  return (
    <>
      <div className="main_div" id="features-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={
                  selectedButton === "policies"
                    ? policy
                    : selectedButton === "reports"
                    ? report
                    : form
                }
                alt={selectedButton}
                width="100%"
                height="100%"
              />
            </div>
            <div className="col-md-6 main-right-div">
              <div className="row main-div-row">
                <div
                  className={`col-4 text-center click-div ${
                    policyState === "active" ? "active" : ""
                  }`}
                  onClick={handlePoliciesClick}
                >
                  Policies
                </div>
                <div
                  className={`col-4 text-center click-div ${
                    reportState === "active" ? "active" : ""
                  }`}
                  onClick={handleReportsClick}
                >
                  Reports
                </div>
                <div
                  className={`col-4 text-center click-div ${
                    formState === "active" ? "active" : ""
                  }`}
                  onClick={handleFormsClick}
                >
                  Forms
                </div>
              </div>
              <div className="content">
                {policyState === "active" && (
                  <div className="policies-content">
                    <h1>
                      Setup your <span> Policies </span>
                    </h1>
                    <p>
                      Single tool for Expense management & travel. End to end
                      visibility in your travel & other expenses.
                    </p>
                    <button onClick={() => setShowModal(true)}>
                      {" "}
                      SIGN UP NOW{" "}
                    </button>
                    <ModalComp
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                )}
                {reportState === "active" && (
                  <div className="reports-content">
                    <h1>
                      Manage all <span> Reports </span>
                    </h1>
                    <p>
                      Download .csv expense reports for your reconciliation
                      needs.
                    </p>
                    <button onClick={() => setShowModal(true)}>
                      {" "}
                      SIGN UP NOW{" "}
                    </button>
                    <ModalComp
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                )}
                {formState === "active" && (
                  <div className="forms-content">
                    <h1>
                      <span> T&E Form </span> Settings
                    </h1>
                    <p>
                      Create an alphanumeric code that will be unique to each
                      expense request raised by an employee.
                    </p>
                    <button onClick={() => setShowModal(true)}>
                      {" "}
                      SIGN UP NOW{" "}
                    </button>
                    <ModalComp
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <Questions />

          <h2 className="business-h">
            {" "}
            Your business is traveling places. We’re ready to help you save!{" "}
          </h2>
          <button className="business-btn" onClick={() => setShowModal(true)}>
            SIGN UP NOW
          </button>
          <ModalComp showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </>
  );
};

export default Main;
