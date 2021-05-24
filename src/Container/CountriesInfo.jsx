import React from 'react'

const CountriesInfo = () => {
    return (
        <div className ='container'>
            <div className="row  info-heading">
                <div className="col-lg-3 ">
                    <h3>Country</h3>
                </div>
                <div className="col-lg-3">
                    <h3>New Confirmed</h3>
                </div>
                <div className="col-lg-3">
                    <h3>Recoverd</h3>
                </div>
                <div className="col-lg-3">
                    <h3> New Death</h3>
                </div>
            </div>
        </div>
    )
}

export default CountriesInfo
