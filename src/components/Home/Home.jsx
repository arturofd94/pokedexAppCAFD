import React from 'react'
import getImage from '../../Assets/Img/useImg'
import InputHome from './InputHome'

const Home = () => {

    const images = getImage()
    console.log(images)

  return (
    <div className='Home_container'>
        <img className='home_img' src={images.rotom} alt="Pokedex Rotom" />
        <h2 className='home_title'>Welcome to POKEDEX APP!!</h2>
        <p className='home_info'>Tell me your Trainer name to continue...</p>
        <InputHome/>
    </div>
  )
}

export default Home