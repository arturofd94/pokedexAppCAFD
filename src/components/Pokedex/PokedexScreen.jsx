import React, { useState } from 'react'
import Aside from './Aside'
import PokeCard from './PokeCard'
import Pagination from './Pagination'
import usePokeApi from '../../hooks/usePokeApi'


const PokedexScreen = () => {

   const [currentPage, setCurrentPage] = useState(1)

   const pokemons = usePokeApi()

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

   const pokemonURL = arrayPokemons?.map(pokemon => pokemon.url)
   


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