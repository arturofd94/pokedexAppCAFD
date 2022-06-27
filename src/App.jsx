import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import PokedexScreen from './components/Pokedex/PokedexScreen'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/pokedex' element={<PokedexScreen/>} ></Route>
      </Routes>
    </div>
  )
}

export default App
