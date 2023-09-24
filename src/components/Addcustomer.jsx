import React, { useState } from 'react'
import axios from 'axios'

const Addcustomer = () => {
    const[AddNewCus,SetNewCustomer]=useState(
        {
            customerid:"",
            customerName:"",
            broadbandplan:"",
            mobileNo:"",
            subDate:"",
            NxtSubDate:"",
            amount:"",
            address:"",
            pincode:"",
            ntwid:""
        }
    )
    const newReg=(event)=>{
        SetNewCustomer({...AddNewCus,[event.target.name]:event.target.value})
    }
    const displayReg=()=>{
        console.log(AddNewCus)
        const applink="http://127.0.0.1:8000/api/newreg/"
        axios.post(applink,AddNewCus).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="Registered Successfully")
                {
                    alert("Registered successfully")
                    SetNewCustomer({
                        customerid:"",
                        customerName:"",
                        broadbandplan:"",
                        mobileNo:"",
                        subDate:"",
                        NxtSubDate:"",
                        amount:"",
                        address:"",
                        pincode:"",
                        ntwid:""
                    })
                }

            }
        )
    }
      return (
    <div>
       
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Customer Id</label>
                            <input type="text" name="customerid" value={AddNewCus.customerid} className="form-control" onChange={newReg}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Customer Name</label>
                            <input type="text" name="customerName" value={AddNewCus.customerName} className="form-control"  onChange={newReg}/>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Broadband Plan</label>
                            <select name="broadbandplan" value={AddNewCus.broadbandplan} id="" className="form-control"  onChange={newReg}>
                                <option value="basic">Basic</option>
                                <option value="standard">Standard</option>
                                <option value="professional">Professional</option>
                                <option value="infinity">Infinity</option>
                            </select>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Mobile Number</label>
                            <input type="text" name="mobileNo" value={AddNewCus.mobileNo} className="form-control" onChange={newReg}/>
                        </div>
                        
                                                
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Subscription Date</label>
                            <input type="date" name="subDate" value={AddNewCus.subDate} id="" className="form-control"  onChange={newReg}/>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Next Subscription Date</label>
                            <input type="date" name="NxtSubDate" value={AddNewCus.NxtSubDate} id="" className="form-control"  onChange={newReg} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Amount</label>
                            <input type="text" className="form-control" name="amount" value={AddNewCus.amount}  onChange={newReg}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Address</label>
                             <textarea name="address" value={AddNewCus.address} id="" cols="30" rows="5" className="form-control"  onChange={newReg}></textarea>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Pincode</label>
                            <input type="text" name="pincode" value={AddNewCus.pincode} className="form-control"  onChange={newReg} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Network Id</label>
                            <input type="text" name="ntwid" value={AddNewCus.ntwid} className="form-control" onChange={newReg}/>
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={displayReg} className="btn btn-success">Add Customer</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <a href="/">Back to home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addcustomer