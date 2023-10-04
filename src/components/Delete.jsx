import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'

const Delete = () => {
   
    const [newDelete,setNewDelete]=useState(
        {
           customerid:""
        }
    )
    const readData=(event)=>{
        setNewDelete({...newDelete,[event.target.name]:event.target.value})
    }
    const displayDelete=()=>{
        //console.log(newDelete)
        const appLink = "http://127.0.0.1:8000/api/delete/"

        axios.post(appLink,newDelete).then(
            (response) => {
                console.log(response.data)
                if(response.data.status=="Deleted Successfully")
                {
                    alert("Deleted")
                }
                else{
                    alert("error")
                }
               

            }
        )
   
    }
    
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-lalel">Customer Id</label>
                        <input type="text" name="customerid" value={newDelete.customerid} className="form-control" onChange={readData}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={displayDelete} className="btn btn-success">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete