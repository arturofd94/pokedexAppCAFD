import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setNameGlobal } from '../../store/slices/userName.slice'
import { useNavigate } from 'react-router-dom'

const InputHome = () => {

    const { handleSubmit, reset, register } = useForm()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const submit = data => {
        dispatch(setNameGlobal(data.userName))
        reset({
            userName: ''
        })
        navigate('/pokedex')
    }

  return (
    <form className='form_home' onSubmit={handleSubmit(submit)}>
        <input
        className='form_input'
        placeholder='Set your name here'
         type="text" 
         {...register('userName')}/>
        <button className='form_btn'>Let's GO!!!</button>
    </form>
  )
}

export default InputHome