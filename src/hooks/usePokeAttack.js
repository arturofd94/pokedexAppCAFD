import axios from 'axios'
import { useEffect, useState } from 'react'

const usePokeAttack = url => {

  const [attack, setAttack] = useState()

    useEffect(() => {
        
        axios.get(url)
        .then(res => {
            setAttack(res.data.stats[1].base_stat)
            
        })
        .catch(err => console.log(err))
    
        
    }, [])

  return attack
}



export default usePokeAttack