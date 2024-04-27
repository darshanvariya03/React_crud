import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../style.css'
import { Link, useNavigate } from 'react-router-dom';

const Add = () => {

    const navigate = useNavigate();
    const [fristName, setFristname] = useState("")
    const [lastName, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [record, setRecord] = useState([])

    const handelsubmit = (e) => {
        e.preventDefault()

        if (!fristName || !lastName || !email) {
            alert("Please Fill Up all Input")
            return false;
        }

        let obj = {
            id: Math.floor(Math.random() * 1000),
            fristName: fristName,
            lastName: lastName,
            email: email
        }

        let data = [...record, obj]
        setRecord(data)
        localStorage.setItem('users', JSON.stringify(data));

        alert('Employee added')

        setFristname('')
        setLastname('')
        setEmail('')
        navigate('/view')
    }

    useEffect(()=>{
        let allData = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
        setRecord(allData)
    },[])


    return (
        <div>
            <Form onSubmit={handelsubmit} className='container col-lg-5'>
                <h2 align="center">Add Employee</h2>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Employee Frist Name</Form.Label>
                    <Form.Control value={fristName} onChange={(e) => setFristname(e.target.value)} type="text" placeholder="Frist Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Employee Last Name</Form.Label>
                    <Form.Control value={lastName} onChange={(e) => setLastname(e.target.value)} type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Employee Email Id</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Id" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>

                <Link  to={'/view'}><Button className='btn btn-success viewbtn' type="submit">
                View</Button>
            </Link>

            </Form>

            

        </div>
    )
}

export default Add