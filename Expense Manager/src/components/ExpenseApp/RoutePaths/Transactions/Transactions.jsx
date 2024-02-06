import "../../../../css/ExpenseApp/RoutesPaths/Transactions.scss";
import TransHeader from "./TransHeader";
import TransBody from "./TransBody";

const Transactions = () => {
  return (
    <div className="trans-container">
      <TransHeader />
      <TransBody />
    </div>
  );
};

export default Transactions;
