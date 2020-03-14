import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import logo from './assets/roadtrip.gif'

const App = ()=> {

  return (
    <div className="App">
      <h1 className="title" style = { {color: "white"} }>Trip Tracker</h1>
      <p style={ {color: "white", fontSize: "14px"} }>Your new favorite trip planner 🚙</p>
      <img src={logo}></img>
      <Board />
    </div>
  )
}

export default App