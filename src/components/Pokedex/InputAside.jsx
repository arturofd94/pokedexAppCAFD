import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setTypeGlobal } from '../../store/slices/useType.slice'

const InputAside = () => {

    const { handleSubmit, reset, register } = useForm()

    const dispatch = useDispatch()


    const submit = data => {
        dispatch(setTypeGlobal(data.pokemonType))
        reset({
            pokemonType: ''
        })
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
        <select className="select_type">
            <option value="All pokemons" selected='' {...register('pokemonType')}>All pokemons</option>
            <option value="normal" {...register('pokemonType')}>normal</option>
            <option value="fighting" {...register('pokemonType')}>fighting</option>
            <option value="flying" {...register('pokemonType')}>flying</option>
            <option value="poison" {...register('pokemonType')}>poison</option>
            <option value="ground" {...register('pokemonType')}>ground</option>
            <option value="rock" {...register('pokemonType')}>rock</option>
            <option value="bug" {...register('pokemonType')}>bug</option>
            <option value="ghost" {...register('pokemonType')}>ghost</option>
            <option value="steel" {...register('pokemonType')}>steel</option>
            <option value="fire" {...register('pokemonType')}>fire</option>
            <option value="water" {...register('pokemonType')}>water</option>
            <option value="grass" {...register('pokemonType')}>grass</option>
            <option value="electric" {...register('pokemonType')}>electric</option>
            <option value="psychic" {...register('pokemonType')}>psychic</option>
            <option value="ice" {...register('pokemonType')}>ice</option>
            <option value="dragon" {...register('pokemonType')}>dragon</option>
            <option value="dark" {...register('pokemonType')}>dark</option>
            <option value="fairy" {...register('pokemonType')}>fairy</option>
            <option value="unknown" {...register('pokemonType')}>unknown</option>
            <option value="shadow" {...register('pokemonType')}>shadow</option>
        </select>
    </form>
  )
}

export default InputAside