import React, { useEffect, useState } from 'react'
import Aside from './Aside'
import PokeCard from './PokeCard'
import Pagination from './Pagination'
import axios from 'axios'


const PokedexScreen = () => {

   const [currentPage, setCurrentPage] = useState(1)

   const [pokemons, setPokemons] = useState()

    useEffect(() => {
        const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
        axios.get(URL_POKEMONS)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    
        
    }, [])

   let arrayPokemons = []
   const pokemonPerPage = 12
    
   if ( pokemons?.length < pokemonPerPage ){
      arrayPokemons = [...pokemons]
   } else {
    const lastPokemon = currentPage * pokemonPerPage 
    if (pokemons?.pokemon !== undefined){
      arrayPokemons = pokemons?.pokemon.slice(lastPokemon - pokemonPerPage, lastPokemon)
    }
      else {
        arrayPokemons = pokemons?.slice(lastPokemon - pokemonPerPage, lastPokemon)}
   }

   let arrayPages = []
   let qtyPages =  Math.ceil(pokemons?.length / pokemonPerPage)
   if (pokemons?.pokemon !== undefined) {
    qtyPages =  Math.ceil(pokemons?.pokemon.length / pokemonPerPage)
   } else {
    qtyPages =  Math.ceil(pokemons?.length / pokemonPerPage)
   }
   
   
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

  return (
    <div>
      <Aside 
      setPokemons={setPokemons}
      pokemons={pokemons?.pokemon !== undefined ? pokemons.pokemon : pokemons}
      />
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
                key={pokemons?.pokemon !== undefined ? pokemon.pokemon.url : pokemon.url}
                url={pokemons?.pokemon !== undefined ? pokemon.pokemon.url : pokemon.url}
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