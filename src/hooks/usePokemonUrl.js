import axios from 'axios'
import { useEffect, useState } from 'react'

const usePokemonUrl = url => {

  const [pokemon, setPokemon] = useState()

    useEffect(() => {
        
        axios.get(url)
        .then(res => {
            setPokemon(res.data)
            
        })
        .catch(err => console.log(err))
    
        
    }, [])

  return pokemon
}



export default usePokemonUrl