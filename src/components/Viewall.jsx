import axios from 'axios'
import React, { useEffect, useState } from 'react'

const appLink="http://127.0.0.1:8000/api/viewall/"
const Viewall = () => {
  const[viewConnectionDetails,setConnectionDetails]=useState([ ])

  useEffect(
    ()=>{
      FetchConnectionDetails()
    }
  )

  const FetchConnectionDetails=()=>{
    axios.get(appLink).then(
      (response)=>{
        setConnectionDetails(response.data)
      }
    )
  }

  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">


                <table class="table">
                  <thead>
                  <tr>
                  <th scope="col">Customer Id</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Broadband Plan</th>
                  <th scope="col">Mobile Number</th>
                  <th scope="col">Subscription Date</th>
                  <th scope="col">Next Subscription Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Address</th>
                  <th scope="col">Pincode</th>
                  <th scope="col">Network Id</th>
                  </tr>
                  </thead>
           
                  <tbody>
                     {
                        viewConnectionDetails.map(
                        (value,index)=>{
                        return <tr>
                               
                        <td>{value.customerid}</td>
                        <td>{value.customerName}</td>
                        <td>{value.broadbandplan}</td>
                        <td>{value.mobileNo}</td>
                        <td>{value.subDate}</td>
                        <td>{value.NxtSubDate}</td>
                        <td>{value.amount}</td>
                        <td>{value.address}</td>
                        <td>{value.pincode}</td>
                        <td>{value.ntwid}</td>
                          
                          </tr>
                        }
                      )
                      
                     }

                  
                  </tbody>
                  </table>                  
                </div>               
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Viewall