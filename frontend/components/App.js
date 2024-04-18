import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const[combinedData, setCombinedData] = useState([])
  
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    Promise.all([axios.get(urlPeople), axios.get(urlPlanets)])
      .then(([peopleRes, planetsRes]) => {
        const peopleData = peopleRes.data
        const planetsData = planetsRes.data
        const planetMap = {}
        planetsData.forEach(planet => {
          planetMap[planet.id] = planet
        })
        const combinedData = peopleData.map(person => ({
          ...person, homeworld: planetMap[person.homeworld].name 
        }))
        console.log(combinedData);
        setCombinedData(combinedData);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      { combinedData.map(data => {
        return <Character name={data.name} planet={data.homeworld} key={data.id}/>
      })}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
