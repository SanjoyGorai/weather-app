import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componants/navbar/Navbar'
import Forcast from './componants/hero/Forcast'
import Weather from './componants/hero/Weather'

function App() {
  const [weather, setweather] = useState(0)

  // fetch('http://api.weatherstack.com/current?access_key=4701858b84337e570ddb1c9d192ffd17&query=Dhaka')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data.current.wind_speed);
  //     console.log(data);
  //   })
  //   .catch(error => console.error(error))



  return (
    <>
      {/* <h1 className='text-red-700 font-bold'>Weather App</h1> */}

      <div>
        {/* <img src="" alt="News Image goes here" /> */}
        {/* <h2>News Headline</h2> */}
      </div>
      <Navbar />
      <Forcast/>
      <Weather/>

    </>
  )
}

export default App
