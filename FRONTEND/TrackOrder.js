import axios from "axios";
import { useState } from "react";
import { Row,Form ,Button} from "react-bootstrap";

export default function TrackOrder(){
    const[toTrack,settotrack]=useState(0)
    const[trackResponse,settrackresponse]=useState("")
    return(
        <div>
            <h1 className="text-primary">TRACK ORDER</h1>
            <Form className='border mx-auto  w-75'>
                <Form.Group as={Row} className="my-2">
                    <Form.Label column sm="1" className="w-10">ORDER ID</Form.Label>
                    <Form.Control type="number" className="w-25"onChange={(e)=>{
                        settotrack(e.target.value)
                    }}></Form.Control>
                </Form.Group>
                <Button onClick={async(e)=>{
                e.preventDefault()
                try {
                    const apitrack=await axios.get(`http://localhost:3000/api/searchOrders?OrderID=${toTrack}`)
                    settrackresponse(apitrack.data.message)
                } catch (e) {
                    settrackresponse("error")
                    console.log(e)
                }
            }}>TRACK</Button>
            <center><p>{trackResponse}</p></center>
            </Form>

            

        </div>
    );
}