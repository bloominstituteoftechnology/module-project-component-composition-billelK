import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import PicOfTheDay from "./main/PicOfTheDay"
import Details from "./main/Details"
import DateSelection from "./main/DateSelection"
function App() {
  const today = new Date()
  let day = today.getDate()
  let month = today.getMonth() +1
  let year = today.getFullYear()
  
  const array = [
    `${year}-${month}-${day}`,
    `${year}-${month}-${day -1}`,
    `${year}-${month}-${day -2}`,
    `${year}-${month}-${day -3}`,
    `${year}-${month}-${day -4}`
  ]
  
  const [nasaData, setNasaData] = useState({})
  const [selectedDate, setSelectedDate] = useState(array[0])
  const {copyright, title, date, explanation, url} = nasaData
  let nasBaseUrl = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY=${selectedDate}`
  
  useEffect( () => {
    axios
      .get(nasBaseUrl)
      .then(res => {
        setNasaData(res.data)
      })
      .catch(error => console.log(error.message))
  }, [selectedDate] ) 
  return (
    <div>
      <PicOfTheDay imgUrl={url} />
      <br/>
      <DateSelection dates={array} dateState= {setSelectedDate}/>
      <br/>
      <Details cp ={copyright} title={title} date={date} explanation={explanation} />
    </div>
  )
}

export default App
