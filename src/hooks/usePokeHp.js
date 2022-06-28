import axios from 'axios'
import { useEffect, useState } from 'react'

const usePokeHp = url => {

  const [hp, setHp] = useState()
    useEffect(() => {
        
        axios.get(url)
        .then(res => {
            setHp(res.data.stats[0].base_stat)
            
        })
        .catch(err => console.log(err))
    
        
    }, [])

  return hp
}



export default usePokeHp