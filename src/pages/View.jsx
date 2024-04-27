import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


const View = () => {

    const [employedata, setEmployedata] = useState(JSON.parse(localStorage.getItem('users')) || [])


    const deleteUser = (id) => {
        let alldata = [...employedata];
        let del = alldata.filter(item => item.id != id)
        setEmployedata(del)
        localStorage.setItem('users', JSON.stringify(del))
        alert('employee record deleted')
    }

    return (
        <div className='container col-lg-8'>
            <h2 align="center">Employee Data</h2>
            <Link to={'/'}>
                <button className='btn btn-success ml-2 mb-2'>Add</button>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>   
                </thead>
                <tbody>

                    {
                        employedata.map((val) => {
                            return (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.fristName}</td>
                                    <td>{val.lastName}</td>
                                    <td>{val.email}</td>
                                    <td>
                                        <button onClick={() => deleteUser(val.id)} className='btn btn-danger'>Delete</button>
                                        <Link to={`/edit/${val.id}`}>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                        </Link>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default View