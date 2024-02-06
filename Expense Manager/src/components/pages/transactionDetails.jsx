
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction, getTransactions } from "../../redux/slice/transactions";
import { getFromLocal } from "../../utils/getfromlocal";
import GenericTable from "../common/GenericTable";
import Calendar from "../common/MonthCalendar";

const TransactionsDetails = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { list } = useSelector((state) => state.transaction)
    const [dataa, setData] = useState([])
    const dispatch = useDispatch();

    const data = [
        { id: 1, name: "John", age: 25, city: "New York" },
        { id: 2, name: "Jane", age: 30, city: "Los Angeles" },
        { id: 3, name: "Bob", age: 40, city: "Chicago" },
        { id: 4, name: "Alice", age: 35, city: "San Francisco" },
    ];

    const columns = [
        {
            Header: "Description",
            accessor: "desc",
        },
        {
            Header: "Transcation Type",
            accessor: "transcationType",
        },
        {
            Header: "Category",
            accessor: "category",
        },
        {
            Header: "Amount",
            accessor: "amount",
        },
    ];

    useEffect(() => {
        let userId = getFromLocal('userId');
        dispatch(getTransactions({ type: 'all', userId }))
    }, [])



    const handleDelete = (row) => {
        // console.log('first', row)
        dispatch(deleteTransaction({ transcationType: row?.original?.transcationType, id: row?.original?._id }))
        let userId = getFromLocal('userId');
        dispatch(getTransactions({ type: 'all', userId }))
    }

    return (
        <Container>
            <h1>DataTable Demo</h1>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <GenericTable
                data={list}
                columns={columns}
                searchTerm={searchTerm}
                handleDelete={handleDelete}
            />
            <Calendar data={list} />
        </Container>
    );
}
export default TransactionsDetails;