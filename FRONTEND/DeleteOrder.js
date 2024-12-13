import axios from "axios";
import { useState } from "react";
import {Row, Form ,Button} from "react-bootstrap";

export default function DeleteOrder(){
    const[toTrack,settotrack]=useState(0)
    const[trackResponse,settrackresponse]=useState("")
    return(
            <div>
                <h1 className="text-primary">DELETE ORDER</h1>
                <Form className="shadow-lg mx-auto mt-2 w-75">
                    <br/>
                <Form.Group as={Row}>
                <Form.Label column sm='1'>ID</Form.Label>
                <Form.Control type="number" className="w-25"onChange={(e)=>{
                    settotrack(e.target.value)
                }}></Form.Control>
                </Form.Group>

                <Button onClick={async(e)=>{
                    const apidelete=await axios.delete(`http://localhost:3000/api/deleteOrders?OrderID=${toTrack}`)
                    settrackresponse(apidelete)
                }}>DELETE</Button>
                <p>{trackResponse}</p>
                <br />

                </Form>
            </div>
    );
}