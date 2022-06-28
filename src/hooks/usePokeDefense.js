import axios from 'axios'
import { useEffect, useState } from 'react'

const usePokeDefense = url => {

  const [defense, setDefense] = useState()

    useEffect(() => {
        
        axios.get(url)
        .then(res => {
            setDefense(res.data.stats[2].base_stat)
            
        })
        .catch(err => console.log(err))
    
        
    }, [])

  return defense
}



export default usePokeDefense