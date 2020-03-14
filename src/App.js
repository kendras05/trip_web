import React from 'react'
import './App.css'
import logo from './assets/roadtrip.gif'

const App = ()=> {

  return (
    <div className="App">
      <h1 className="title">Trip Tracker</h1>
      <p style={ {color: "green", fontSize: "14px"}}>Your new favorite trip planner 🚗</p>
      <img src={logo}></img>
      <section id="board">Board</section>
    </div>
  )
}

export default App