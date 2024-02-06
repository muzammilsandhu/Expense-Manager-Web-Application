import React from "react";

const TransBody = () => {
  return (
    <div className="flex-container">
      <div>
        <input type="checkbox"/>
        <p style={{ display: "inline-block", marginLeft: "15px" }}>Date</p>
      </div>
      <div>
        <p>Amount</p>
      </div>
      <div>
        <p>Account/balance</p>
      </div>
      <div>
        <p>Category</p>
      </div>
    </div>
  );
};

export default TransBody;
