import React, { useState } from "react";
import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";
import "../../../css/ExpenseApp/Accounts.scss";

const AccountRightDiv = () => {
  const history = useHistory()
  const [activeButton, setActiveButton] = useState("Calendar");
  const handleClick = (event) => {
    setActiveButton(event.target.innerText);
  };
  return (
    <Router>
      <>
        <div className="nav-div">
          <div
            className="button"
            style={{ display: 'inline-block', cursor: 'pointer' }}
            activeClassName="active-link"
            onClick={() => { history.push('/transactiondetails') }}
          >
            Transactions
          </div>
          <div
            className="button"
            style={{ display: 'inline-block', cursor: 'pointer' }}
            activeClassName="active-link"
            onClick={() => { history.push('/calendardetails') }}
          >
            Calendar
          </div>
          <div
            className="button"
            style={{ display: 'inline-block', cursor: 'pointer' }}
            activeClassName="active-link"
            onClick={() => { history.push('/analytics') }}
          >
            Analytics
          </div>
          {/* <NavLink
            className="button"
            to="/users"
            activeClassName="active-link"
            onClick={handleClick}
          >
            Users
          </NavLink>
          <NavLink
            className="button"
            to="/report"
            activeClassName="active-link"
            onClick={handleClick}
          >
            Report
          </NavLink>
          <NavLink
            className="button"
            to="/history"
            activeClassName="active-link"
            onClick={handleClick}
          >
            History
          </NavLink> */}
        </div>
      </>
    </Router>
  );
};

export default AccountRightDiv;
