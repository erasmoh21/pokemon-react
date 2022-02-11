import React,{useState,useEffect} from 'react'
import ContextCentral from './ContextCentral.js'

export default function ManejadorDeContexto(props) {
    const [pokemon,setPokemon] = useState({})

    const getPokemon = (pokemonRecibido) => {
        pokemon = pokemonRecibido
        setPokemon(pokemon)
    }

    return (
        <ContextCentral.Provider value={{pokemon,getPokemon}}>
            {props.children}
        </ContextCentral.Provider>

    )
}