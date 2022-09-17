import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Form from './components/form';
import WeatherInfo from './components/weatherInfo';
import React from 'react';
import { useState } from "react";




function App() {
  

const [inputCity, setInputCity] = useState("")
const [data, setData] = useState({})
  return <>
    <div className='col-md-12'>
      <div className='weatherBg'>
           <h1 className='heading'>Weather App</h1>
           <Form cityChanged = {setInputCity} dataChanged = {setData} inputCity = {inputCity} ></Form>
          
      </div>
      {Object.keys(data).length > 0 &&
      <WeatherInfo data = {data}>
      </WeatherInfo>
      }
    </div> 
  </>
}

export default App;
