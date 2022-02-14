import React,{useState} from 'react'
import ContextCentral from './ContextCentral.js'

export default function ManejadorDeContexto(props) {
    const [pokemon,setPokemon] = useState({})

    const getPokemon = (pokemonRecibido) => {
        setPokemon(pokemonRecibido)
    }

    return (
        <ContextCentral.Provider value={{pokemon,getPokemon}}>
            {props.children}
        </ContextCentral.Provider>

    )
}