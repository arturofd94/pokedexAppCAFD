import axios from 'axios'
import { useEffect, useState } from 'react'

const usePokeType = url => {

  const [type, setType] = useState()
    useEffect(() => {
        
        axios.get(url)
        .then(res => {
            setType(res.data.types[0].type.name)
            
        })
        .catch(err => console.log(err))
    
        
    }, [])

  return type
}



export default usePokeType