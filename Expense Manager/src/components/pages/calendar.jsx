
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../redux/slice/transactions";
import { getFromLocal } from "../../utils/getfromlocal";
import Calendar from "../common/MonthCalendar";

const CalendarDetails = () => {
    const { list } = useSelector((state) => state.transaction)
    const dispatch = useDispatch();

    useEffect(() => {
        let userId = getFromLocal('userId');
        dispatch(getTransactions({ type: 'all', userId }))
    }, [])

    return (
        <Container>
            <h1>Calendar Details</h1>
            <Calendar data={list} />
        </Container>
    );
}
export default CalendarDetails;