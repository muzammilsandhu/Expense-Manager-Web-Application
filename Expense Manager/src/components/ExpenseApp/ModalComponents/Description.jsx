import React from "react";
import "../../../css/ExpenseApp/Modal.scss";

const Discription = ({handleChange}) => {
  return (
    <div className="description-form">
      <textarea id="description" name="description" onChange={handleChange} placeholder="Description" rows="4" cols="50" />
    </div>
  );
};

export default Discription;
