import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../../css/ExpenseApp/Modal.scss";

const Category = () => {
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

  const clearSelection = () => {
    setSelectedOption("");
    setIsOptionSelected(false);
  };

  return (
    <>
      <div className="dropdown-input" ref={dropdownRef}>
        <Form.Control
          className={`category-form ${isOptionSelected ? "has-value" : ""}`}
          type="text"
          placeholder="Category"
          value={selectedOption}
          onClick={() => setIsOpen(!isOpen)}
          autoFocus
        />

        {isOptionSelected && selectedOption && (
          <span
            className="clear-selection-icon"
            onClick={() => clearSelection()}
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        )}

        <span
          className="dropdown-icon"
          onClick={() => toggleDropdown(selectedOption)}
        >
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
        {isOpen && (
          <div className="dropdown-menu">
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Commission")}
            >
              Commission
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Rent")}
            >
              Rent
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Deposit")}
            >
              Deposit
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Savings")}
            >
              Savings
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Salary")}
            >
              Salary
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
