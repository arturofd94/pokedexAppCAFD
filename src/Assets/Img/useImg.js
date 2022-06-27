import { useState } from 'react';
import rotom from './Pokedex-Rotom.png'


const getImage = () => {
    
    const [images, setImages] = useState({
        rotom: rotom,
})

    return images
}

export default getImage;