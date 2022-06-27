import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Aside from './Aside'
import PokeCard from './PokeCard'
import Header from '../Header/Header'


const PokedexScreen = () => {

   const userName = useSelector( state => state.userName)

   const [pokemons, setPokemons] = useState()
   const [currentPage, setCurrentPage] = useState(1)

   const arrayPokemons = []
   const pokemonPerPage = 12

   useEffect(() => {
    const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30'

    axios.get(URL_POKEMONS)
    .then(res => setPokemons(res.data.results))
    .catch(err => console.log(err))

   }, [])

  return (
    <div>
      <Header />
      <Aside/>
      <div className='card_container'>
        {
            pokemons?.map(pokemon => (
                <PokeCard 
                key={pokemon.url}
                url={pokemon.url}
                />
            ))
        }
      </div>
    </div>
  )
}

export default PokedexScreen