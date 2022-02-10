import React from 'react'

export default function Pokemon({props}) {
    return (
        <div className='contenedorPrincipalPokemon'>
            <h2 className="nombrePokemon">{props.name}</h2>
            <figure>
                <img src={props.other.official-artwork.front_default}></img>
            </figure>
        </div>
    )
}