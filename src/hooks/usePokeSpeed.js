import axios from 'axios'
import { useEffect, useState } from 'react'

const usePokeSpeed = url => {

  const [speed, setSpeed] = useState()

    useEffect(() => {
        
        axios.get(url)
        .then(res => {
            setSpeed(res.data.stats[5].base_stat)
            
        })
        .catch(err => console.log(err))
    
        
    }, [])

  return speed
}



export default usePokeSpeed