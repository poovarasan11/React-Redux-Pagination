import Pagination from 'react-bootstrap/Pagination';
import { useSelector, useDispatch } from "react-redux";
import { page_number } from "../redux/ActionCreators";

function AdvancedExample() {
    const dispatch = useDispatch()
    // const [pageNumber, setPageNumber] = useState(0)
    const pageNumber = useSelector((state) => state.pageNumber)
    console.log("pageClick Number::", pageNumber);
    function pageClick(pageNumber) {
        dispatch(page_number(pageNumber))
    }
    function pageItem() {
        let items = []
        for (let item = 1; item <= 10; item++) {
            items.push(
                <Pagination.Item active={item == pageNumber} onClick={() => { pageClick(item) }}>{item}</Pagination.Item>
            )
        }
        return items
    }
    function previous() {
        pageClick(pageNumber - 1)
    }
    function next() {
        pageClick(pageNumber + 1)
    }
    function start() {
        pageClick(1)
    }
    function end() {
        pageClick(10)
    }

    return (
        <Pagination className='pagination'>
            <Pagination.First disabled={pageNumber == 1} onClick={start} />
            <Pagination.Prev disabled={pageNumber == 1} onClick={previous} />.
            {pageItem()}
            <Pagination.Next disabled={pageNumber == 10} onClick={next} />
            <Pagination.Last disabled={pageNumber == 10} onClick={end} />
        </Pagination>
    );
}

export default AdvancedExample;

