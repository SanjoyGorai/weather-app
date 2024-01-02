import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weather, setweather] = useState([])

  fetch('http://api.weatherstack.com/current?access_key=4701858b84337e570ddb1c9d192ffd17&query=Dhaka')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch(error => console.error(error))



  return (
    <>
      <h1 className='text-red-700 font-bold'>Weather App</h1>

      <div>
        <img src="" alt="News Image goes here" />
        <h2>News Headline</h2>

      </div>

    </>
  )
}

export default App
