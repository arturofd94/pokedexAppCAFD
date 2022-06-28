import { createSlice } from '@reduxjs/toolkit'

export const pokemonTypeSlice = createSlice({
    name: 'pokemonType',
    initialState: 'All pokemons',
    reducers: {
        setTypeGlobal: (state, action) => action.payload

    }
})

export const { setTypeGlobal } = pokemonTypeSlice.actions

export default pokemonTypeSlice.reducer