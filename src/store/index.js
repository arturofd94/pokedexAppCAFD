import { configureStore } from '@reduxjs/toolkit'
import userName from './slices/userName.slice'
import pokemonType from './slices/useType.slice'

export default configureStore ({
   reducer: {
      userName,
      pokemonType,
   } 
})