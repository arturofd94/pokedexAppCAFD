import React, { useEffect, useState } from 'react' 
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const PokeCard = ({url}) => {


  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState()
  const [type, setType] = useState()
  const [hp, setHp] = useState()
  const [attack, setAttack] = useState()
  const [defense, setDefense] = useState()
  const [specialAttack, setSpecialAttack] = useState()
  const [specialDefense, setSpecialDefense] = useState()
  const [speed, setSpeed] = useState()


    useEffect(() => {
        
        axios.get(url)
        .then(res => {
          setPokemon(res.data)
          setType(res.data.types[0].type.name)
          setHp(res.data.stats[0].base_stat)
          setAttack(res.data.stats[1].base_stat)
          setDefense(res.data.stats[2].base_stat)
          setSpecialAttack(res.data.stats[3].base_stat)
          setSpecialDefense(res.data.stats[4].base_stat)
          setSpeed(res.data.stats[5].base_stat)
        })
        .catch(err => console.log(err))
        .finally(setLoading(!loading))
    
        
    }, [])

  const navigate = useNavigate()

  const navigateTo = id => navigate(`/pokedex/${id}`)


  return (
    
      <article onClick={() => navigateTo(pokemon.id)} className='card'>
        <header className={`card_header ${type}`}>
        <img className='card_pokemon_img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <div className='card_body'>
          <h2 className='card_name'>{pokemon?.name}</h2>
          <p className='pokemon_type'>
            {pokemon?.types.map(type => type.type.name).join(' / ')}
          </p>
          <p className='pokemon_Text'>Type</p>
          <hr className='set_hr' />
          <ul className='list_stats'>
            <li className='stat'>hp
            <span className='stat_num'>{hp}</span>
            </li>
            <li className='stat'>attack
            <span className='stat_num'>{attack}</span>
            </li>
            <li className='stat'>defense
            <span className='stat_num'>{defense}</span>
            </li>
            <li className='stat'>special-attack
            <span className='stat_num'>{specialAttack}</span>
            </li>
            <li className='stat'>special-defense
            <span className='stat_num'>{specialDefense}</span>
            </li>
            <li className='stat'>speed
            <span className='stat_num'>{speed}</span>
            </li>
          </ul>
        </div>
        <div className='loader'>
          <div className={`loader_up ${loading ? '' : 'animationOn'}`}>
              <div className='loader_red'></div>
              <div className='loader_black'>
                <div className='loader_btn'></div>
              </div>
          </div>
          <div className={`loader_down ${loading ? '' : 'animationOn'}`}>
              <div className='loader_black'></div>
              <div className='loader_red'></div>
          </div>
              
        </div>
      </article>
    
  )
}

export default PokeCard