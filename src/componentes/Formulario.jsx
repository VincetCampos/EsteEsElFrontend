import { useState } from 'react'
import '../css/Formulario.css'
export const Formulario = () =>{

    const[formValues, setformValues] = useState({
        nombre: ""
    })

    const cambio = (e)=> setformValues({
        ...formValues, 
        nombre: e.target.value
    })
    
    return(
        <form>
            <label className="label" htmlFor="nombre">Nombre</label>
            <input className="texto" 
                name="nombre"
                value={formValues.nombre}
                onChange={cambio} 
                type="text" />
            <input type="submit" value="Guardar"/>
            <br />

            Nombre: {formValues.nombre}
        </form>
    )
}