import React from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Select from 'react-select';
import "../../css/ExpenseApp/Modal.scss";

const ExpenseModal = ({
  show,
  handleClose,
  formData,
  setFormData,
  accounts,
  handleSubmit
}) => {

  const options = [
    { value: 'Bills', label: 'Bills' },
    { value: 'Cloths', label: 'Cloths' },
    { value: 'Fees', label: 'Fees' }
  ];

  return (
    <>
      <Modal show={show} onHide={handleClose} className="income-modal" dialogClassName="modal-90w">
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Date /> */}
          <div className="row">
            <div className="col-10">
              <Form.Control
                className="income-form"
                type="number"
                placeholder="Income"
                value={formData?.amount}
                onChange={(e) => { setFormData((old) => { return { ...old, amount: parseInt(e.target.value) } }) }}
              />
            </div>
            <div className="col-2 pkr-div">
              PKR
            </div>
          </div>
          <div className="description-form">
            <textarea
              id="description"
              name="description"
              value={formData?.desc}
              onChange={(e) => { setFormData((old) => { return { ...old, desc: e.target.value } }) }}
              placeholder="Description"
              rows="4"
              cols="50"
            />
          </div>
          <div>&nbsp;</div>
          <Select
            options={options}
            defaultValue={options[0]}
            isDisabled={false}
            onChange={(e) => { setFormData((old) => { return { ...old, category: e.value } }) }}
            placeholder="Category"
          />
          <div>&nbsp;</div>
          <Select
            options={accounts.map(({ name, _id }) => { return { label: name, value: _id } })}
            isDisabled={false}
            onChange={(e) => { setFormData((old) => { return { ...old, accountId: e.value } }) }}
            placeholder="Payment Method"
          />
          {/* <Category />
          <Payment /> */}
        </Modal.Body>
        <Modal.Footer className="income-footer">
          <button className="addincome-btn" onClick={() => { handleSubmit('expense') }}>
            Add Expense
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExpenseModal;

