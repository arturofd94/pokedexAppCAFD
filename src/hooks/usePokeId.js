import axios from 'axios'
import { useEffect, useState } from 'react'

const usePokeId = id => {

  const [pokemonID, setPokemonID] = useState()
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

    useEffect(() => {
        
        axios.get(url)
        .then(res => {
            setPokemonID(res.data)
            
        })
        .catch(err => console.log(err))
    
        
    }, [])

  return pokemonID
}



export default usePokeId