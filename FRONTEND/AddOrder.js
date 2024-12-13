import { Button, Row,Form } from 'react-bootstrap';
import axios from 'axios'
import { useState } from 'react';

export default function AddOrder(){
    const [formAdd,setformadd]=useState({})
    const [response,setresponse]=useState("")
    return(
        <div>
            <h1 className="text-primary">ADD  ORDER</h1>
            <Form className='border mx-auto  w-75'>

            <Form.Group as={Row} className='my-2'>
            <Form.Label column sm="1">ORDERID</Form.Label>
            <Form.Control type="number" className='w-25' onChange={(e)=>{
                setformadd({
                    ...formAdd,
                    OrderID:e.target.value
                })
            }}></Form.Control>
            </Form.Group>

            <Form.Group as={Row} className='my-2'>
            <Form.Label column sm="1">NAME</Form.Label>
            <Form.Control type="text" className='w-25'onChange={(e)=>{
                setformadd({
                    ...formAdd,
                    CustomerName:e.target.value
                })
            }}></Form.Control>
            </Form.Group>

            <Form.Group as={Row} className='my-2'>
            <Form.Label column sm="1">ADDRESS</Form.Label>
            <Form.Control type="text" className='w-25'onChange={(e)=>{
                setformadd({
                    ...formAdd,
                    DeliveryAddress:e.target.value
                })
            }}></Form.Control>
            </Form.Group>

            <Form.Group as={Row} className='my-2'>
            <Form.Label column sm="1">STATUS</Form.Label>
            <Form.Select className='w-25'onChange={(e)=>{
                setformadd({
                    ...formAdd,
                    Status:e.target.value
                })
            }}>
                <option>SELECT</option>
                <option value="PENDING">Pending</option>
                <option value="DELIVERED">delivered</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Row} className='my-2'>
            <Form.Label column sm="1">DATE</Form.Label>
            <Form.Control type="date" className='w-25'onChange={(e)=>{
                setformadd({
                    ...formAdd,
                    ExpectedDeliveryDate:e.target.value
                })
            }}></Form.Control>
            </Form.Group>
            
            <Button  type='submit' className='w-25 mx-5' onClick={async(e)=>{
                e.preventDefault();
                try {
                    const apiadd=await axios.post('http://localhost:3000/api/addOrders',formAdd)
                    const response=apiadd.data
                    console.log(response)
                    setresponse(response.message);
                } catch (e) {
                    console.error(e)
                    setresponse("ERROR!")
                }
            }}>SUBMIT</Button>
            <center><p>{response}</p></center>
            </Form>
        </div>
    );
}