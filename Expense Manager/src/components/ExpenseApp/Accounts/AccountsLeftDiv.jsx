import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../css/ExpenseApp/Accounts.scss";
import { getAccount } from "../../../redux/slice/account";
import { getFromLocal } from "../../../utils/getfromlocal";
import AddAccountModal from "../../common/AddAccountModal";

const AccountLeftDiv = () => {
  const { loading, list } = useSelector((state) => state.account);
  const [showModal, setShowModal] = useState(false)

  const [totalBalance, setTotalBalance] = useState(0);

  const handleModal = () => {
    setShowModal(true);
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAccount())
  }, [])
  useEffect(() => {
    let bal = 0;
    list.filter((val) => val.userId === getFromLocal('userId'))?.map(({ balance }) => bal = bal + parseInt(balance));
    setTotalBalance(bal)
  }, [list])

  return (
    <>
      <p>Total amount on accounts</p>
      <h3>{totalBalance}</h3>
      <div className="line-accounts"></div>
      <h6>my accounts</h6>
      <span style={{ cursor: 'pointer' }}
        onClick={handleModal}
      >
        <FontAwesomeIcon icon={faPlus} className="faPlus" />
      </span>
      <div className="row no-gutters my-accounts">

        {
          list.filter((val) => val.userId === getFromLocal('userId'))?.map(({ name, balance }, i) => {
            return <Fragment key={i}>
              <div className="col-6">
                <p>{name}</p>
              </div>
              <div className="col-6">
                <p style={{ float: "right" }}>Rs. {balance.toFixed(2)}</p>
              </div>
            </Fragment>
          })
        }
        <div className="line-accounts"></div>
      </div>
      <AddAccountModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default AccountLeftDiv;
