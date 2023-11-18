import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Weather from './components/Weather';


function App() {


  const [ city, setCity ] = useState("Toronto")

  const apiKey = "f674e616810a6019adbaa5b42a09cdbf"
  
  // const url = ""
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((response) => {
      console.log(response.data)
      setCity(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])




  // const cityName = () => {

  // }


  return (
    <div className="App">
      <div className=''>
        <input />
        {/* <button /> */}  
      </div>
      <Weather 
      humidity={city.weather}/>
      
    </div>
  );
}

export default App;
