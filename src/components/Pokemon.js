import React,{useContext} from 'react'
import ContextCentral from '../context/ContextCentral.js'

export default function Pokemon() {
    let {pokemon} = useContext(ContextCentral)

    if(pokemon.abilities === undefined) {
        return null;
    }
    
    return (
        <div className="contenedorPrincipalPokemon">
            <div className='contenedorElementosPokemon'>
                <h1 className="tituloPokemon">{pokemon.name.toUpperCase()}</h1>
                <figure className="contenedorImagenPokemon">
                    <img src={pokemon.sprites.front_default} alt="pokemon"/>
                </figure>
            </div>
        </div>
    ) 
}