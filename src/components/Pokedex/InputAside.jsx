import axios from 'axios'
import React, { useEffect, useState } from 'react'

const InputAside = ({setPokemons, pokemons}) => {

    const [typeFilter, setTypeFilter] = useState('')

    const [value, setValue] = useState('')

    const onChange = e => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if(typeFilter !== ''){
        axios.get(`https://pokeapi.co/api/v2/type/${typeFilter}`)
            .then(res => setPokemons(res.data))
    }
    },[typeFilter])

    const handleType = e => {
        setTypeFilter(e.target.value)
    }

    const onSearch = searchTerm => {
        console.log(searchTerm)
    }


  return (
    <form className='form_container'>
        <div className='form_search_container'>
            <input 
            className='form_search' 
            placeholder='Insert Pokemon name' 
            type="text"
            value={value}
            onChange={onChange}
             />
            <button 
            className='search_btn'
            onClick={() => onSearch(value)}
            >
                Search
            </button>
            <div className='dropdown'>
                {
                   pokemons?.name?.map(pokemon => {
                    <div className='dropdown_row'>
                        {pokemon}
                    </div>
                   })
                }
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