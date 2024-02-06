import React from "react";
import "../../css/Home/Expenses.scss";
import bank from "../../Images/piggie_bank.png";
import free_cost from "../../Images/free_cost.png";
import process from "../../Images/process.png";

const Expenses = () => {
  return (
    <>
      <div className="expense-div">
        <div className="container">
          <div className="line-parent">
            <div className="line"></div>
            <h1> Why use Expense Manager? </h1>
          </div>
          <div className="row images-div">
            <div className="col-md-4 text-center">
              <img src={bank} width="80" height="80" />
              <h4> Save Expenses </h4>
              <p>
                {" "}
                Corporate expense management automation helps in reducing
                leakage in travel expense.{" "}
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img src={process} width="80" height="80" />
              <h4> Seamless Process </h4>
              <p>
                {" "}
                Same platform is used to record the entire travel expenses as
                well as other spends, making the process seamless.{" "}
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img src={free_cost} width="80" height="80" />
              <h4> Free of Cost </h4>
              <p>
                {" "}
                It is completely free of cost unlike other expense management
                tools in the market.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expenses;
