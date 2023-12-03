
import { useSelector, useDispatch } from "react-redux";
import { page_action } from "./redux/ActionCreators";
import React, { useEffect } from 'react';
import axios from 'axios'
import DatatablePage from './components/DataTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import MonthPicker from "./components/MonthPicker";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const pageNumber = useSelector((state) => state.pageNumber)
  const tableData = useSelector((state) => state.tableData)
  const beforeDate = useSelector((state) => state.beforeDate)
  const afterDate = useSelector((state) => state.afterDate)
  const dispatch = useDispatch()
  const fetchData = async (pageNumber, per_page = 10) => {
    try {
      console.log("before");
      let url = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${per_page}`

      if (beforeDate) {

        const currentYear = beforeDate.getFullYear();
        const currentMonth = beforeDate.getMonth();
        url = url + `&brewed_before=${currentMonth}-${currentYear}`
      }
      if (afterDate) {

        const currentYear = afterDate.getFullYear();
        const currentMonth = afterDate.getMonth();
        url = url + `&brewed_after=${currentMonth}-${currentYear}`
      }
      const { data } = await axios.get(url);
      onPageDataChangeHandler(data)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData(pageNumber)
  }, [pageNumber, beforeDate, afterDate])


  function onPageDataChangeHandler(tableData) {
    dispatch(page_action(tableData))
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="data-table mt-4">
              <MonthPicker />
              <DatatablePage tableData={tableData} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
