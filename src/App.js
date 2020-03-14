
import React from 'react'
import Board from './components/Board.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import logo from './assets/roadtrip.gif'
import Map from './leaflet.js'

const App = ()=> {
  return (
    <div className="App">
      <h1 className="title" style = { {color: "white"} }>Trip Tracker</h1>
      <p style={ {color: "white", fontSize: "14px"} }>Your new favorite trip planner 🚙</p>
      <img src={logo}></img>
      <Board />
   
			<Map />

		</div>
  );
}

export default App