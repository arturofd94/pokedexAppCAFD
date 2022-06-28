import axios from 'axios'
import { useEffect, useState } from 'react'

const usePokeApi = () => {

  const [pokemons, setPokemons] = useState()

    useEffect(() => {
        const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
        axios.get(URL_POKEMONS)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    
        
    }, [])

  return pokemons
}

export default usePokeApi