import React, {useState, useEffect } from 'react'
import axios from 'axios'
import CountriesInfo from './CountriesInfo'
import { Link } from 'react-router-dom'
import AllInfo from './AllInfo'

const Details = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        const res = axios.get('https://api.covid19api.com/summary')
       
         .then(data =>setList(data.data.Countries)  )
         

    }, [])
    console.log(list)
    return (
        < >
             <AllInfo /> 
            <CountriesInfo /> 
           

                {list.map((total) =>(
                   
                     <div className ='container'>
                          
                     <div className="row  info-heading">
                         <div className="col-lg-3 ">
                             <Link to='/countries' >{total.Country} </Link>
                         </div>
                         <div className="col-lg-3">
                             <h3>{total.NewConfirmed} </h3>
                         </div>
                         <div className="col-lg-3">
                             <h3>{total.NewRecovered}</h3>
                         </div>
                         <div className="col-lg-3">
                             <h3 className='death-color'>{total.NewDeaths} </h3>
                         </div>
                     </div>
                    
                 </div>
                ))}
               
    


        </>
    )
}

export default Details ;


// TotalDeaths: 2742
// TotalRecovered: 54686