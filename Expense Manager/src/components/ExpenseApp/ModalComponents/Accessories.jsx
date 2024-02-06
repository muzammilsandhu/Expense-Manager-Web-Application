import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../../css/ExpenseApp/Modal.scss";

const Accessories = () => {
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
          className={`accessories-form ${isOptionSelected ? "has-value" : ""}`}
          type="text"
          placeholder="Accessories"
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
          <div className="dropdown-menu accessories-menu">
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Bills")}
            >
              Bills
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Clothes")}
            >
              Clothes
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Entertainment")}
            >
              Entertainment
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Food")}
            >
              Food
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Footwear")}
            >
              Footwear
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Fuel")}
            >
              Fuel
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("General")}
            >
              General
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Gifts")}
            >
              Gifts
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Health")}
            >
              Health
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Home")}
            >
              Home
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Medical")}
            >
              Medical
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Holidays")}
            >
              Holidays
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Kids")}
            >
              Kids
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Pets")}
            >
              Pets
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Shopping")}
            >
              Shopping
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Sports")}
            >
              Sports
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Transportaion")}
            >
              Transportaion
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Vehicle")}
            >
              Vehicle
            </div>
            <div
              className="dropdown-item"
              onClick={() => toggleDropdown("Others")}
            >
              Others
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Accessories;
