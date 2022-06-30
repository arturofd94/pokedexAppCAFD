import React from 'react' 
import usePokemonUrl from '../../hooks/usePokemonUrl'
import usePokeType from '../../hooks/usePokeType'
import usePokeHp from '../../hooks/usePokeHp'
import usePokeAttack from '../../hooks/usePokeAttack'
import usePokeDefense from '../../hooks/usePokeDefense'
import usePokeSpecialAtt from '../../hooks/usePokeSpecialAtt'
import usePokeSpecialDef from '../../hooks/usePokeSpecialDef'
import usePokeSpeed from '../../hooks/usePokeSpeed'
import { useNavigate } from 'react-router-dom'


const PokeCard = ({url}) => {

  const pokemon = usePokemonUrl(url)
  const type = usePokeType(url)
  const hp = usePokeHp(url)
  const attack = usePokeAttack(url)
  const defense = usePokeDefense(url)
  const specialAttack = usePokeSpecialAtt(url)
  const specialDefense = usePokeSpecialDef(url)
  const speed = usePokeSpeed(url)

  const navigate = useNavigate()

  const navigateTo = id => navigate(`/pokedex/${id}`)


  return (
    
      <article onClick={() => navigateTo(pokemon.id)} className={`card ${type}_border`}>
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
      </article>
    
  )
}

export default PokeCard