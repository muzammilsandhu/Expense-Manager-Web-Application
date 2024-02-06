import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import ExpenseLand from "./components/ExpenseApp/ExpenseLand";
import Home from "./components/Home/Home";
// import Calender from "./components/ExpenseApp/RoutePaths/Calender";
// import Report from "./components/ExpenseApp/RoutePaths/Report";
// import HistoryC from "./components/ExpenseApp/RoutePaths/History";
import PrivateRoutes from './PrivateRoutes';

import Analytics from "../src/components/ExpenseApp/RoutePaths/Analytics.jsx";
import Calender from "../src/components/ExpenseApp/RoutePaths/Calender";
import History from "../src/components/ExpenseApp/RoutePaths/History";
import Report from "../src/components/ExpenseApp/RoutePaths/Report";
import Transcations from "../src/components/ExpenseApp/RoutePaths/Transactions/Transactions";
import Users from "../src/components/ExpenseApp/RoutePaths/Users";
import CalendarDetails from "./components/pages/calendar";
import TransactionsDetails from "./components/pages/transactionDetails";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route component={Error} /> */}
        {/* <Route exact path="/ExpenseAppRoutePaths/Calender" component={Calender} />
        <Route exact path="/ExpenseApp/RoutePaths/Report" component={Report} />
        <Route exact path="/ExpenseApp/RoutePaths/History" component={HistoryC} /> */}
        <PrivateRoutes>
          <Route path="/ExpenseApp/ExpenseLand" component={ExpenseLand} />
          <Route path="/transactions" component={Transcations} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/calendar" component={Calender} />
          <Route path="/users" component={Users} />
          <Route path="/report" component={Report} />
          <Route path="/history" component={History} />
          <Route exact path="/transactiondetails" component={TransactionsDetails} />
          <Route exact path="/calendardetails" component={CalendarDetails} />
          <Route exact path="/analytics" component={Analytics} />
        </PrivateRoutes>
      </Switch>
    </>
  );
};

export default App;
