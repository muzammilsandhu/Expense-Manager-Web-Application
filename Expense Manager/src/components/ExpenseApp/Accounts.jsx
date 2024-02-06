import React, { useState, useRef, useEffect } from "react";
import AccountLeftDiv from "./Accounts/AccountsLeftDiv";
import AccountRightDiv from "./Accounts/AccountsRightDiv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../css/ExpenseApp/Accounts.scss";

const Accounts = () => {
  const [showLeftDiv, setShowLeftDiv] = useState(true);

  const handleHamburgerClick = () => {
    setShowLeftDiv(!showLeftDiv);
  };

  const handleCancelClick = () => {
    setShowLeftDiv(false);
  };

  const leftDivRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handleClickOutside = (event) => {
    if (leftDivRef.current && !leftDivRef.current.contains(event.target)) {
      if (window.innerWidth <= 1280) {
        setShowLeftDiv(false);
      }
    }
  };

  return (
    <>
      <div
        className={`accounts-main-div ${showLeftDiv ? "show-left-div" : ""}`}
      >
        <div className="left-accounts-div" ref={leftDivRef}>
          <AccountLeftDiv />
        </div>
        <div className="right-accounts-div"><AccountRightDiv /></div>
      </div>
      {window.innerWidth <= 1280 && (
        <div className="bars-d-icon" onClick={handleHamburgerClick}>
          <FontAwesomeIcon icon={showLeftDiv ? faTimes : faBars} />
        </div>
      )}
      {showLeftDiv && window.innerWidth <= 1280 && (
        <div className="bars-d-icon" onClick={handleCancelClick}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      )}

      {!showLeftDiv && window.innerWidth <= 1280 && (
        <div className="bars-d-icon" onClick={handleHamburgerClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      )}
    </>
  );
};

export default Accounts;
