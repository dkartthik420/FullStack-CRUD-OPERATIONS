import {Button,Table} from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

export default function AllOrder(){
   const [allorder,setallorder]=useState([])
    return(
        <div>
            <h1 className="text-primary">DISPLAY ORDER</h1>
            <Button onClick={async(e)=>{
                e.preventDefault();
                try {
                    const apifettchall=await axios.get("http://localhost:3000/api/allOrders")
                    const response=apifettchall.data
                    console.log(response)
                    setallorder(response.data)
                } catch (e) {
                    console.log(e)
                }
            }}>DISPLAY</Button>
            {
                <Table>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>status</th>
                    </thead>
                    <tbody>
                        {allorder.map((user)=>
                            <tr>    
                                <td>{user.OrderID}</td>
                                <td>{user.CustomerName}</td>
                                <td>{user.DeliveryAddress}</td>
                                <td>{user.Status}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            }
        </div>
    );
}