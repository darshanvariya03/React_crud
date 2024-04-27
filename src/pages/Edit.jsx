import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../style.css'
import { Link, useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const { editid } = useParams()
  const navigate = useNavigate()
  const [record, setRecord] = useState(JSON.parse(localStorage.getItem('users')) || [])
  const [fristName, setFristname] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')

  const handelsubmit = (e) => {
    e.preventDefault();

    let oldRecord = [...record]
    let update = oldRecord.map((val) => {
      if (val.id == editid) {
        return {
          ...val,
          fristName: fristName,
          lastName: lastName,
          email: email
        }

      }
      return val;
    })
    localStorage.setItem('users', JSON.stringify(update));
    alert('Employee Data update');
    navigate('/view');
  }

  useEffect(() => {
    let data = record.find(item => item.id == editid)
    if (data) {
      setFristname(data.fristName)
      setLastname(data.lastName)
      setEmail(data.email)
    }
  }, [editid])

  return (
    <div>
      <Form onSubmit={handelsubmit} className='container col-lg-5'>
        <h2 align="center">Edit Employee Data</h2>

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
          Update
        </Button>
    
        <Link to={'/view'}><Button className='btn btn-success viewbtn' type="submit">
          View</Button>
        </Link>

      </Form>

    </div>
  )
}

export default Edit