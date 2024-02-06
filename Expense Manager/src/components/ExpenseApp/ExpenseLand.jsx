import {
  faExchangeAlt,
  faMinus,
  faPlus,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import logo from "../../Images/logo.png";
import "../../css/ExpenseApp/ExpenseLand.scss";
import { getAccount } from "../../redux/slice/account";
import { loginClearStates } from "../../redux/slice/posts";
import { posttransaction } from "../../redux/slice/transactions";
import { getFromLocal, removeFromLocal } from "../../utils/getfromlocal";
import Accounts from "./Accounts";
import ExpenseModal from "./ExpenseModal";
import IncomeModal from "./IncomeModal";
import TransferModal from "./TransferModal";

const ExpenseLand = () => {
  const history = useHistory()
  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [transactionType, setTransactionType] = useState('');
  const { list } = useSelector((state) => state.account)
  const [formData, setFormData] = useState({
    desc: '',
    amount: 0,
    category: '',
    accountId: '',
    userId: getFromLocal('userId'),
    transcationType: ''
  })

  const handleIncomeClick = () => {
    setShowIncomeModal(true);
    setFormData({
      desc: '',
      amount: 0,
      category: '',
      accountId: '',
      userId: getFromLocal('userId'),
      transcationType: ''
    })
    setTransactionType('income')
  };
  const handleExpenseClick = () => {
    setShowExpenseModal(true);
    setFormData({
      desc: '',
      amount: 0,
      category: '',
      accountId: '',
      userId: getFromLocal('userId'),
      transcationType: ''
    })
    setTransactionType('expense')
  };
  const handleTransferClick = () => {
    setShowTransferModal(true);
    setFormData({
      desc: '',
      amount: 0,
      category: '',
      accountId: '',
      userId: getFromLocal('userId'),
      transcationType: ''
    })
    setTransactionType('transfer')
  };

  const handleCloseIncomeModal = () => {
    setShowIncomeModal(false);
    setTransactionType('')
  };
  const handleCloseExpenseModal = () => {
    setShowExpenseModal(false);
    setTransactionType('')
  };
  const handleCloseTransferModal = () => {
    setShowTransferModal(false);
    setTransactionType('')
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getAccount()
  }, [])

  console.log('formData', formData)

  const handleSubmit = (transcationType) => {
    dispatch(posttransaction({ ...formData, transcationType }))
    dispatch(getAccount());
    setFormData({
      desc: '',
      amount: 0,
      category: '',
      accountId: '',
      userId: getFromLocal('userId'),
      transcationType: ''
    })
    setShowTransferModal(false);
    setShowExpenseModal(false);
    setShowIncomeModal(false);
  }

  return (
    <>
      <div className="main-expense-div">
        <div className="container-fluid expense-header">
          <div className="row align-items-center">
            <div className="col-4 d-flex align-items-center">
              <img src={logo} width="50" height="50" className="mr-2" />
              <div className="d-flex flex-column align-items-start">
                <h5 className="d-inline-block align-middle mb-0 h-five">
                  Expense Manager
                </h5>
                <p className="d-inline-block align-middle mb-0 ml-2 align-items-end p-logo">
                  Manage expenses
                </p>
              </div>
            </div>
            <div className="col-5 btn-div d-flex justify-content-center align-items-center">
              <button className="income-btn" onClick={handleIncomeClick}>
                <FontAwesomeIcon icon={faPlus} /> <span> Income </span>
              </button>
              <button className="expense-btn" onClick={handleExpenseClick}>
                <FontAwesomeIcon icon={faMinus} /> <span> Expense </span>
              </button>
              <button className="transfer-btn" onClick={handleTransferClick}>
                <FontAwesomeIcon icon={faExchangeAlt} /> <span> Transfer </span>
              </button>
            </div>
            <div className="col-3 d-flex justify-content-end icon-div cursor-pointer">
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  removeFromLocal('token')
                  removeFromLocal('userId')
                  dispatch(loginClearStates())
                  history.push('/')
                }} >
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  style={{ color: "#a2a5a5", margin: "18px", fontSize: "20px" }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Accounts />
      <IncomeModal
        setFormData={setFormData}
        formData={formData}
        accounts={list?.filter((val) => val.userId === getFromLocal('userId'))}
        show={showIncomeModal}
        handleSubmit={handleSubmit}
        handleClose={handleCloseIncomeModal}
      />
      <ExpenseModal
        setFormData={setFormData}
        formData={formData}
        accounts={list?.filter((val) => val.userId === getFromLocal('userId'))}
        show={showExpenseModal}
        handleSubmit={handleSubmit}
        handleClose={handleCloseExpenseModal}
      />
      <TransferModal
        setFormData={setFormData}
        formData={formData}
        accounts={list?.filter((val) => val.userId === getFromLocal('userId'))}
        show={showTransferModal}
        handleSubmit={handleSubmit}
        handleClose={handleCloseTransferModal}
      />
    </>
  );
};

export default ExpenseLand;
