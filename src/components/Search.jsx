import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    const [newSearch,SetNewSearch]=useState(
        {
            customerid:""
        }
    )
    const readSearch=(read)=>{
        SetNewSearch({...newSearch,[read.target.name]:read.target.value})

    }
    const dispalySearch=()=>{
        console.log(newSearch)
    }
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-lalel">Customer Id</label>
                        <input type="text" name="customerid" value={newSearch.customerid} className="form-control" onChange={readSearch} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={dispalySearch} className="btn btn-success">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search