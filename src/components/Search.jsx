import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'

const Search = () => {
    const [data, setData] = useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [newSearch, SetNewSearch] = useState(
        {
            customerid: ""
        }
    )
    const readSearch = (read) => {
        SetNewSearch({ ...newSearch, [read.target.name]: read.target.value })

    }
    const dispalySearch = () => {
        setIsLoading(true)
        //  console.log(newSearch)
        const appLink = "http://127.0.0.1:8000/api/search/"
        axios.post(appLink, newSearch).then(
            (response) => {
                console.log(response.data)

                if (  (response.data.length) == 0 ) {
                    alert("INVALID CUSTOMER ID")
                }


                setData(response.data)

                setIsLoading(false)

            }
        )
    }
    return (
        <div>
            <Header />
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
                        
                          {isLoading ? <p> Loading......</p>   : 
                        data.map(
                            (value, index) => {
                                return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-XXl-12">
                                    <div class="card">
                                                <div class="card-body">
                                                <h5 class="card-title">Customer id={value.customerid}</h5>
                                                <p class="card-text">Customer Name={value.customerName}</p>
                                                <p class="card-text">Boardband Plan={value.broadbandplan}</p>
                                                <p class="card-text">Mobile Number{value.mobileNo}</p>
                                                <p class="card-text">Subscription Date={value.subDate}</p>
                                                <p class="card-text">Next Subscription date={value.NxtSubDate}</p>
                                                <p class="card-text">Amount={value.amount}</p>
                                                <p class="card-text">Address={value.address}</p>
                                                <p class="card-text">Pincode={value.pincode}</p>
                                                <p class="card-text">Network Id={value.ntwid}</p>
                                                
                                            </div>
                                    </div>
                                </div>
                            }
                        )}   



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search