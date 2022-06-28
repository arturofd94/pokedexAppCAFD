import axios from 'axios'
import { useEffect, useState } from 'react'

const usePokeSpecialDef = url => {

  const [specialDefense, setSpecialDefense] = useState()

    useEffect(() => {
        
        axios.get(url)
        .then(res => {
            setSpecialDefense(res.data.stats[4].base_stat)
            
        })
        .catch(err => console.log(err))
    
        
    }, [])

  return specialDefense
}



export default usePokeSpecialDef