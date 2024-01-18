import React from 'react'
import sun from '../images/sun.png'
import { useState, useEffect } from 'react'
import { data } from 'autoprefixer'

const Weather = () => {

    const [temp, setTemp] = useState(null)

    useEffect(() => {
        fetch('http://api.weatherstack.com/current?access_key=4701858b84337e570ddb1c9d192ffd17&query=Dhaka')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.current);
                setTemp(data.current.temperature);
            })
            .catch(err => console.error(err))
    }, [])


    return (

        <>
            <h1 className='text-blue-800 font-bold'>{temp} &#xb0;</h1>
            <img src={sun} alt="" className='w-32' />
            <h3>cloudcover: {temp} </h3>
            {/* <h3>feelslike: {} </h3>
            <h3>humidity: {} </h3>
            <h3>is_day: {} </h3>
            <h3>observation_time: {} </h3>
            <h3>precip: {} </h3> */}
        </>
    )
}

export default Weather