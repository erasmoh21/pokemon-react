import React,{useRef,useContext} from 'react'
import ContextCentral from '../context/ContextCentral.js'
import {SugerenciaInputNumeroPokemones} from './SugerenciaInputNumeroPokemones.js'
import manejadorPeticiones from '../helpers/manejadorPeticiones.js'

export default function FormularioNumeroPokemones() {
    const refSugerenciaInputNumerosPokemones = useRef()

    const validarFormulario = async (e) => {
        e.preventDefault()
        const validador = /[^0-9]/

        if(validador.test(e.target[0].value)) {
            refSugerenciaInputNumerosPokemones.current.style.display = "flex"
        }
        else {
            refSugerenciaInputNumerosPokemones.current.style.display = "none"
            const pokemones = await manejadorPeticiones({url:"https://pokeapi.co/api/v2/pokemon?limit=",data:e.target[0].value})
            console.log(pokemones)
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