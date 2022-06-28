import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Aside from './Aside'
import PokeCard from './PokeCard'
import Pagination from './Pagination'


const PokedexScreen = () => {

   const [pokemons, setPokemons] = useState()
   const [currentPage, setCurrentPage] = useState(1)

   let arrayPokemons = []
   const pokemonPerPage = 12

   if ( pokemons?.length < pokemonPerPage ){
      arrayPokemons = [...pokemons]
   } else {
    const lastPokemon = currentPage * pokemonPerPage 
    arrayPokemons = pokemons?.slice(lastPokemon - pokemonPerPage, lastPokemon)
   }

   let arrayPages = []
   let qtyPages = Math.ceil(pokemons?.length / pokemonPerPage)
   const pagesPerBlock = 5
   let currentBlock = Math.ceil(currentPage / pagesPerBlock)
   if( currentBlock * pagesPerBlock >= qtyPages ){
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= qtyPages; i++) {
      arrayPages.push(i)
    } 
   } else {
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++ ){
      arrayPages.push(i)
    }
   }


   useEffect(() => {
    const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'

    axios.get(URL_POKEMONS)
    .then(res => setPokemons(res.data.results))
    .catch(err => console.log(err))

   }, [])

  return (
    <div>
      <Aside/>
      <Pagination 
        arrayPages={arrayPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        qtyPages={qtyPages}
      />
      <div className='card_container'>
        {
            arrayPokemons?.map(pokemon => (
                <PokeCard 
                key={pokemon.url}
                url={pokemon.url}
                />
            ))
        }
      </div>
      <Pagination 
        arrayPages={arrayPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        qtyPages={qtyPages}
      />
    </div>
  )
}

export default PokedexScreen