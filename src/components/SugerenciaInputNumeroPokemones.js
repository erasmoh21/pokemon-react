import React from 'react'

export const SugerenciaInputNumeroPokemones = (props) => {
    return (
        <div className='contenedorSugerencia' ref={props.referencia}>
            <div>
                <p>Tiene que digitar un numero</p>
            </div>
        </div>
    )
}