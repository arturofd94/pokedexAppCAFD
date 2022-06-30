import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const InputAside = ({setPokemons, pokemons}) => {

    const [typeFilter, setTypeFilter] = useState('')

    const [value, setValue] = useState('')

    const navigate = useNavigate()

    
    useEffect(() => {
        if(typeFilter !== ''){
        axios.get(`https://pokeapi.co/api/v2/type/${typeFilter}`)
            .then(res => {
                setPokemons(res.data)
            })
    } else {
        const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
        axios.get(URL_POKEMONS)
        .then(res => {
            setPokemons(res.data.results)
            })
        .catch(err => console.log(err))
    }
    },[typeFilter])

    const handleType = e => {
        setTypeFilter(e.target.value)
    }

    const onSearch =  e  => {
        navigate(`/pokedex/${e.target.textContent}`)
    }

    const onChange = e => {
        setValue(e.target.value)
    }

       

  return (
    <form className='form_container'>
        <div className='form_search_container'>
            <div className='search_inner'>
                <input 
                className='form_search' 
                placeholder='Insert Pokemon name' 
                type="text"
                value={value}
                onChange={onChange}
                 />
                <div className='dropdown'>
                    {
                        pokemons?.filter(pokemon => {
                            const searchTerm = value.toLowerCase()
                            const pokeName = pokemon?.pokemon !== undefined ? pokemon?.pokemon.name.toLowerCase() : pokemon.name.toLowerCase()
                        

                        return searchTerm && pokeName.startsWith(searchTerm) && pokeName !== searchTerm
                        }).slice(0,4)
                        .map(pokemon => 
                            <div className='dropdown_row'
                            onClick={onSearch}
                            key={pokemons?.pokemon !== undefined ? pokemon.pokemon.url : pokemon.url}
                            >
                                {pokemons?.pokemon !== undefined ? pokemon.pokemon.name : pokemon.name}
                            </div>
                            )
                    }
                </div>
            </div>
        </div>
        <select className="select_type" onChange={handleType}>
            <option value="" >All pokemons</option>
            <option value="normal" >normal</option>
            <option value="fighting" >fighting</option>
            <option value="flying" >flying</option>
            <option value="poison" >poison</option>
            <option value="ground" >ground</option>
            <option value="rock" >rock</option>
            <option value="bug" >bug</option>
            <option value="ghost" >ghost</option>
            <option value="steel" >steel</option>
            <option value="fire" >fire</option>
            <option value="water" >water</option>
            <option value="grass" >grass</option>
            <option value="electric" >electric</option>
            <option value="psychic" >psychic</option>
            <option value="ice">ice</option>
            <option value="dragon" >dragon</option>
            <option value="dark" >dark</option>
            <option value="fairy" >fairy</option>
            <option value="unknown" >unknown</option>
            <option value="shadow">shadow</option>
        </select>
    </form>
  )
}

export default InputAside