import React from "react";
import HeaderDiv from "./HeaderDiv";
import Cost from "./Cost";
import Expenses from "./Expenses";
import ManageExpense from "./ManageExpense";
import Main from "./Main";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <HeaderDiv />
      <Cost />
      <Expenses />
      <ManageExpense />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
