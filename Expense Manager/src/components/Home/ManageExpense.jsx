import React, { useState } from "react";
import ModalComp from "./ModalComp";
import "../../css/Home/ManageExpense.scss";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import hr from "../../Images/hr.jpg";
import team from "../../Images/team.jpg";
import employees from "../../Images/employees.jpg";

const ManageExpense = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="blue-div" id="benefits-section">
        <div className="container">
          <div className="line-div">
            <div className="line-left"></div>
            <h1> How does Expense Manager help you Manage Expenses? </h1>
          </div>
          <CardGroup>
            <Card className="card-style">
              <Card.Img variant="top" src={hr} />
              <Card.Body className="card-body">
                <Card.Title className="card-title"> Admin / HR </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      {" "}
                      Category-wise policy integration for granular control{" "}
                    </li>
                    <li> T&E form download with attached receipts. </li>
                    <li>
                      {" "}
                      Configurable policies with an easy-to-seek approval
                      process for better compliance.{" "}
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-style">
              <Card.Img variant="top" src={team} />
              <Card.Body className="card-body">
                <Card.Title className="card-title"> Finance Team </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      {" "}
                      Single tool for expense management & travel solutions.{" "}
                    </li>
                    <li>
                      {" "}
                      End-to-end visibility on your travel & other expenses.{" "}
                    </li>
                    <li>
                      {" "}
                      Real-time availability of expense claims reports for easy
                      record maintenance and auditing purposes.{" "}
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card-style">
              <Card.Img variant="top" src={employees} />
              <Card.Body className="card-body">
                <Card.Title className="card-title"> Employees </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      {" "}
                      An online expense manager ensures effortless filing of
                      official expenses.{" "}
                    </li>
                    <li> Full process visibility on expense claim status </li>
                    <li>
                      {" "}
                      All travel-related expenses are picked by our integrated
                      travel & expense management solution.{" "}
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>

          <h2> Get your benefits by creating your own account! </h2>

          <button onClick={() => setShowModal(true)}> SIGN UP NOW </button>
          <ModalComp showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </>
  );
};

export default ManageExpense;
