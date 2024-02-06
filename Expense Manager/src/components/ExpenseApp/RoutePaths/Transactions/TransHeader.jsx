import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCheck,
  faSearch,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import "../../../../css/ExpenseApp/RoutesPaths/Transactions.scss";

const TransHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = (option = "") => {
    setSelectedOption(option);
    setIsOpen(!isOpen);
    setIsOptionSelected(true);
  };

  return (
    <>
      <div className="dropdown-container">
        <div className="dropdown-input" ref={dropdownRef}>
          <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
            {selectedOption ? selectedOption : "All time"}{" "}
            <span
              className={`category-form ${isOptionSelected ? "has-value" : ""}`}
            >
              <FontAwesomeIcon icon={faCaretDown} />
            </span>{" "}
          </button>

          {isOpen && (
            <div className="dropdown-menu">
              <div
                className={`dropdown-item ${
                  selectedOption === "Current week" ? "selected" : ""
                }`}
                onClick={() => toggleDropdown("Current week")}
              >
                <span>Current week</span>
                {selectedOption === "Current week" && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </div>
              <div
                className={`dropdown-item ${
                  selectedOption === "Previous week" ? "selected" : ""
                }`}
                onClick={() => toggleDropdown("Previous week")}
              >
                <span>Previous week</span>
                {selectedOption === "Previous week" && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </div>
              <div
                className={`dropdown-item ${
                  selectedOption === "Current month" ? "selected" : ""
                }`}
                onClick={() => toggleDropdown("Current month")}
              >
                <span>Current month</span>
                {selectedOption === "Current month" && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </div>
              <div
                className={`dropdown-item ${
                  selectedOption === "Previous month" ? "selected" : ""
                }`}
                onClick={() => toggleDropdown("Previous month")}
              >
                <span>Previous month</span>
                {selectedOption === "Previous month" && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </div>
              <div
                className={`dropdown-item ${
                  selectedOption === "All time" ? "selected" : ""
                }`}
                onClick={() => toggleDropdown("All time")}
              >
                <span>All time</span>
                {selectedOption === "All time" && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </div>
              <div
                className={`dropdown-item ${
                  selectedOption === "Select dates" ? "selected" : ""
                }`}
                onClick={() => toggleDropdown("Select dates")}
              >
                <span>Select dates</span>
                {selectedOption === "Select dates" && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </div>
            </div>
          )}
        </div>
        <div className="search-div">
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} style={{ color: "#a9adaf" }} />
          </div>
          <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Search by accounts, customers, comments"
            autoComplete="off"
          />
        </div>
        <button className="download-btn">
        <FontAwesomeIcon icon={faArrowDown} className="fa-sharp" />
        </button>
      </div>
    </>
  );
};

export default TransHeader;
