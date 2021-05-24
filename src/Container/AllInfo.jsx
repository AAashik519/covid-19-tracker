import axios from 'axios'
import React, { useEffect, useState } from 'react'



const AllInfo = () => {
    const [info, setInfo] = useState({})
    useEffect(() => {
        const res = axios.get('https://api.covid19api.com/summary')
            .then(data => setInfo(data.data.Global))


    }, [])
    console.log(info)

     
    return (
        <>
            <div className="container ">
                <div className=' all-details'>


                    <div className="new-affected">
                        <h4>New Affected</h4>
                        <h1>{info.NewConfirmed}</h1>
                        <h6>{info.Date}</h6>
                    </div>
                    <div className="Total-affected">
                        <h4>Total Affected</h4>
                        <h1>{info.TotalConfirmed}</h1>
                        <h6>{info.Date}</h6>
                    </div>
                  
                    <div className="NewRecovered">
                        <h4>New Recovered</h4>
                        <h1>{info.NewRecovered}</h1>
                        <h6>{info.Date}</h6>
                    </div>
                    <div className="TotalRecovered">
                        <h4>Total Recovered</h4>
                        <h1>{info.TotalRecovered}</h1>
                        <h6>{info.Date}</h6>
                    </div>
                    <div className="NewDeaths">
                        <h4>Total Deaths</h4>
                        <h1>{info.TotalDeaths}</h1>
                        <h6>{info.Date}</h6>
                    </div>

                </div>
            </div>


        </>
    )
}

export default AllInfo
