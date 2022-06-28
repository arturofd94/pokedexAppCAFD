import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import PokedexScreen from './components/Pokedex/PokedexScreen'
import PokeIdScreen from './components/PokeID/PokeIdScreen'
import Header from './components/Header/Header'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route element={<Header/>}>
            <Route path='/pokedex' element={<PokedexScreen/>} ></Route>
            <Route path='/pokedex/:id' element={<PokeIdScreen/>} ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
