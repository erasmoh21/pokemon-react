import React from 'react'

export default function SugerenciaInput(props) {
    return (
        <div className="contenedorSugerencia" ref={props.referencia}>
            <div>
                <p>Debe digitar un Pokemon</p> 
            </div>
        </div>
    )
}