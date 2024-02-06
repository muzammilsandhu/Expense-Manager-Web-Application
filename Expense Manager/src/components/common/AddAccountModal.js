import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import logo from "../../Images/logo.png";
import "../../css/Home/ModalComp.scss";
import { getAccount, postAccount } from "../../redux/slice/account";
import { getFromLocal } from "../../utils/getfromlocal";

const AddAccountModal = ({ showModal, setShowModal }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        userId: ''
    });

    console.log('formData', formData);

    const { loading, list } = useSelector((state) => state.account);

    console.log('list', list);

    const handleClose = () => setShowModal(false);

    const history = useHistory();

    const dispatch = useDispatch()

    const handleContinue = (e) => {
        e.preventDefault();
        // dispatch(loadlogin({ email: 'Irfan1@gmail.com', password: 'asc24254' }));
    }

    const handleAddAccount = () => {
        dispatch(postAccount({ ...formData, userId: getFromLocal('userId') }))
        dispatch(getAccount())
    }

    useEffect(() => {
        dispatch(getAccount())
    }, [])

    return (
        <>
            <Modal show={showModal} onHide={handleClose} dialogClassName="modal-90w" className="modal-comp">
                <Modal.Header>
                    <img alt="logo" src={logo} width="60" height="50" />
                    <Modal.Title style={{ marginLeft: "10px" }}>
                        Add Account
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Enter Account Details</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> </Form.Label>
                            <Form.Control
                                type="Name"
                                placeholder="Enter your account name"
                                value={formData.name}
                                onChange={(e) => setFormData((old) => { return { ...old, name: e.target.value } })}
                                autoComplete="off"
                            />
                            <div>&nbsp;</div>
                            {/* <Form.Control
                                type="number"
                                placeholder="balance"
                                value={formData.balance}
                                onChange={(e) => setFormData((old) => { return { ...old, balance: e.target.value } })}
                                autoComplete="off"
                            /> */}
                            <Button
                                disabled={formData?.name ? false : true}
                                className="continue-btn"
                                onClick={handleAddAccount}
                                style={
                                    !formData.name
                                        ? {
                                            backgroundColor: "gray",
                                            color: "white",
                                            marginLeft: "8px",
                                            padding: "9px 23px",
                                            border: "none",
                                            borderRadius: "3px",
                                            marginTop: "-5px",
                                        }
                                        : {
                                            marginLeft: "8px",
                                            padding: "9px 23px",
                                            border: "none",
                                            borderRadius: "3px",
                                            background:
                                                "linear-gradient(90deg, rgb(22, 65, 171), rgb(96, 151, 162))",
                                            color: "white",
                                            fontWeight: "bold",
                                            marginTop: "-5px",
                                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.4)",
                                        }
                                }
                            >
                                {loading ? <div class="spinner-border"></div> : 'CONTINUE'}
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddAccountModal;
