import React from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from './Pagination'
import '../style.css'

const DatatablePage = (props) => {
    return (<>
        <div className="table-responsive pt-0 p-4 ">
            <Table striped bordered hover>
                <thead className="table-primary">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>tagline</th>
                        <th>attenuation_level</th>
                        <th>first_brewed</th>
                    </tr>
                </thead>
                <tbody >
                    {props.tableData.map((value, index) => (
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.tagline}</td>
                            <td>{value.attenuation_level}</td>
                            <td>{value.first_brewed}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
        <Pagination />
    </>
    );
};


export default DatatablePage;