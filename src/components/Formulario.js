import React, {useRef} from 'react'
import SugerenciaInput from './SugerenciaInput.js'
import manejadorPeticiones from './manejadorPeticiones.js'

export default function Formulario() {
    const contenedorSugerencia = useRef()
    const valorInput = useRef()

    const validarInput = async (e) => {
        e.preventDefault()
        const expresionValidadora = /[^A-Za-z]/

        if(valorInput.current.value.trim().length === 0 || expresionValidadora.test(valorInput.current.value)) {
            contenedorSugerencia.current.style.display = "block"
        } 
        else {
            contenedorSugerencia.current.style.display = "none"
            const peticionRecibida = await manejadorPeticiones(valorInput.current.value)
        }
    }

    return (
        <div className='contenedorFormulario'>
            <form onSubmit={validarInput}>
                <label htmlFor='formulario'>Digite el nombre de un Pokemon: </label>
                <input type={'text'} id="formulario" name='inputFormulario' ref={valorInput}></input>
                <button type={'submit'}>Enviar</button>
            </form> 
            <SugerenciaInput referencia={contenedorSugerencia}></SugerenciaInput>
        </div>
    )
}