import axios from 'axios'
import { useEffect, useState } from 'react'

const usePokeSpecialAtt = url => {

  const [specialAttack, setSpecialAttack] = useState()

    useEffect(() => {
        
        axios.get(url)
        .then(res => {
            setSpecialAttack(res.data.stats[3].base_stat)
            
        })
        .catch(err => console.log(err))
    
        
    }, [])

  return specialAttack
}



export default usePokeSpecialAtt