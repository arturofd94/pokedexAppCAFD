import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setTypeGlobal } from '../../store/slices/useType.slice'

const InputAside = ({setPokemons}) => {

    const { handleSubmit, reset, register } = useForm()

    const [typeFilter, setTypeFilter] = useState('')

    useEffect(() => {
        if(typeFilter !== ''){
        axios.get(`https://pokeapi.co/api/v2/type/${typeFilter}`)
            .then(res => setPokemons(res.data))
    }
    },[typeFilter])

    const dispatch = useDispatch()


    const submit = data => {
        dispatch()
        reset({
            pokemonType: ''
        })
    }

    const handleType = e => {
        setTypeFilter(e.target.value)
    }


  return (
    <form className='form_container' onSubmit={handleSubmit(submit)}>
        <div className='form_search_container'>
            <input 
            className='form_search' placeholder='Insert Pokemon name' type="text"
             />
            <button className='search_btn'>
                Search
            </button>
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