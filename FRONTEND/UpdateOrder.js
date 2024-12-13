import {Form,Button,Row} from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';
export default function UpdateOrder(){
    const [toUpdate,settoupdate]=useState({})
    const [updateresponse,setupdateresponse]=useState("")
    return(
        <div>
            <h1 className="text-primary">UPDATE ORDER</h1>
            <Form className='border mx-auto w-75'>
                <Form.Group as={Row}>
                    <Form.Label column  sm='1'>OrderID</Form.Label>
                    <Form.Control type='number' className='w-25' onChange={(e)=>{
                        settoupdate({
                            ...toUpdate,
                            OrderID:e.target.value
                        })
                    }}></Form.Control>
                </Form.Group>

                <Form.Group as={Row} className='my-2'>
                    <Form.Label column  sm='1'>STATUS</Form.Label>
                    <Form.Control type='text' className='w-25' onChange={(e)=>{
                        settoupdate({
                            ...toUpdate,
                            Status:e.target.value
                        })
                    }}></Form.Control>
                </Form.Group>   

                <Button type='submit' className='w-25 ml-3' onClick={async(e)=>{
                    e.preventDefault()
                    try {
                        const apiupdate=await axios.put("http://localhost:3000/api/updateOrders",toUpdate)
                        const response=apiupdate.data.message
                        setupdateresponse(response)
                    } catch (error) {
                        setupdateresponse("ERROR!")
                    }
                    
                }}>UPDATE</Button>     
                <center><p>{updateresponse}</p></center>
            </Form>
        </div>
       
    );
}