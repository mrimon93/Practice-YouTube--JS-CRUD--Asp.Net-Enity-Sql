import { Fragment, useEffect } from 'react';
import React from React
import Table from 'react-bootstrap/Table';

const CRUD = () => {

    const empdata = [
        {
        id: 1, 
        name : Muzammil,
        Age : 30,
        isActive: 1
        },
        {
            id: 2, 
            name : Aishah,
            Age : 29,
            isActive: 1
        },
        {
            id: 3, 
            name : Robert,
            Age : 45,
            isActive: 0
        },
    ]

    const [data, setData] = useEffect([]);

    useEffect(() => {
        setData([...empdata]);
    },[])


    return(
        <Fragment>
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th><name/th>
                    <th>Age</th>
                    <th>isActive</th>

                </tr>
            </thead>        
        </Table>
        </Fragment>
    )
}

export default CRUD;