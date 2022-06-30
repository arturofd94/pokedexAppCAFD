import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PokeType from './PokeType'

const PokeIdScreen = () => {

  const [pokemonId, setPokemonId] = useState()
  const [pokeImg, setPokeImg] = useState()
  const [type, setType] = useState()

  const { id } = useParams()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

    axios.get(url)
    .then(res => {
      setPokemonId(res.data)
      setPokeImg(res.data.sprites.other['official-artwork'].front_default)
      setType(res.data.types[0].type.name)
    })
    .catch(err => console.log(err))

  },[id])

  return (
    <div className='poke_id_container'>
      <Link className='poke_return' to='/pokedex'>&#60;</Link>
    <article className='poke_id_info'>
      <header className={`header_card_info ${type}`}>
        <img 
        className='poke_img_card'
        src={pokeImg} 
        alt={`Image poke ${pokemonId}`} />
      </header>
      <div className='body_card'>
        <section className='poke_gral'>
          <div className='poke_id'>{`#${id}`}</div>
          <hr className='hr_card' />
        <h1 className='name_poke'>{pokemonId?.name}</h1>
        <ul className='poke_stats'>
          <li className='stats_id'><span className='span_stats_id'>Attack</span>{pokemonId?.stats[1].base_stat}</li>
          <li className='stats_id'><span className='span_stats_id'>Defense</span>{pokemonId?.stats[2].base_stat}</li>
          <li className='stats_id'><span className='span_stats_id'>Special-Attack</span>{pokemonId?.stats[3].base_stat}</li>
          <li className='stats_id'><span className='span_stats_id'>Special-Defense</span>{pokemonId?.stats[4].base_stat}</li>
          <li className='stats_id'><span className='span_stats_id'>Speed</span>{pokemonId?.stats[5].base_stat}</li>
        </ul>
        <div className='type_flex'><p>Type</p></div>
        {
            pokemonId?.types.map(type => (
              <PokeType 
              key={type.type.name}
              type={type.type.name}
              />
            ))
        }
        </section>
      </div>
    </article>
    </div>
  )
}

export default PokeIdScreen