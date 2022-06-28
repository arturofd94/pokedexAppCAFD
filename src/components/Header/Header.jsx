import React from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='red_header list'>
        <div className='black_header list'></div>
        <div className='circle list'></div>
        <img className='poke_header list' src="https://pokedex-by-benja.netlify.app/assets/logo-pokedex.4364faa8.png" alt="" />
    </header>
    <Outlet/>
    </>
  )
}

export default Header