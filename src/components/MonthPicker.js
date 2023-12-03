
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button';

import { after_date_action, before_date_action } from "../redux/ActionCreators";

const MonthPicker = () => {

    const dispatch = useDispatch()
    const beforeDate = useSelector((state) => state.beforeDate)
    const afterDate = useSelector((state) => state.afterDate)

    function setBeforeDate(date) {
        dispatch(before_date_action(date))
    }
    function setAfterDate(date) {
        dispatch(after_date_action(date))
    }
    function clear() {
        dispatch(before_date_action(""))
        dispatch(after_date_action(""))

    }

    const renderMonthContent1 = (month, shortMonth, longMonth) => {
        const tooltipText = `Tooltip for month: ${longMonth}`;
        return <span title={tooltipText}>{shortMonth}</span>;
    };
    const renderMonthContent2 = (month, shortMonth, longMonth) => {
        const tooltipText = `Tooltip for month: ${longMonth}`;
        return <span title={tooltipText}>{shortMonth}</span>;
    };
    return (

        <div className="d-flex align-items-center p-4">
            <div className="d-flex align-items-center">
                <p className="mb-0 me-2">Brewed After</p>
                <DatePicker
                    selected={afterDate}
                    renderMonthContent={renderMonthContent2}
                    showMonthYearPicker
                    dateFormat="MM/yyyy"
                    onChange={(date) => setAfterDate(date)}
                    placeholderText="mm / yyyy"
                />
            </div>

            <div className="d-flex align-items-center">
                <p className=" ms-4 me-2 mb-0">Brewed Before </p>
                <DatePicker
                    selected={beforeDate}
                    renderMonthContent={renderMonthContent1}
                    showMonthYearPicker
                    dateFormat="MM/yyyy"
                    onChange={(date) => setBeforeDate(date)}
                    placeholderText="mm / yyyy"
                />
            </div>
            <Button className="ms-3" onClick={clear} variant="primary" size="md">Clear</Button>
        </div>

    );
};

export default MonthPicker