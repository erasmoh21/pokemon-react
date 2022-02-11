import React,{useContext} from 'react'
import ContextCentral from '../context/ContextCentral.js'

export default function Pokemon() {

    const {pokemon} = useContext(ContextCentral)

    return (
        <div className='contenedorPrincipalPokemon'>
            <h1>{pokemon.name}</h1>
        </div>
    )
}