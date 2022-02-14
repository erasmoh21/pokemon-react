import React,{useRef} from 'react'
import {SugerenciaInputNumeroPokemones} from './SugerenciaInputNumeroPokemones.js'

export default function FormularioNumeroPokemones() {
    const refSugerenciaInputNumerosPokemones = useRef()

    const validarFormulario = (e) => {
        e.preventDefault()
        const validador = /[^0-9]/

        if(validador.test(e.target.value)) {
            refSugerenciaInputNumerosPokemones.current.style.display = "flex"
        }
    }

    return (
        <div className='contenedorFormulario'>
            <form onSubmit={validarFormulario}>
                <label htmlFor='inputNumeroDePokemones'>Digite el numero de Pokemones: </label>
                <input type={'text'} id="inputNumeroDePokemones" name='numeroPokemones'></input>
                <button type={'submit'}>Enviar</button>
            </form>
            <SugerenciaInputNumeroPokemones referencia={refSugerenciaInputNumerosPokemones}/>
        </div>
    )
}