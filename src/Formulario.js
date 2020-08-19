import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4'


const Formulario = ({crearUsuario}) => {
   
    const [ usuario, guardarUsuario ] = useState({
        nombre: '',
        apellido: '',
    })

    // State que lanza error de validacion de formulario
    const [ error, actualizarError ] = useState(false)

    // Extraigo los valores
    const { nombre, apellido } = usuario

    // Funcion que lee lo que se escribe en el input
    const actualizarUsuario = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario hace click en agregar
    const submitUsuario = e => {
        e.preventDefault();

        // Validar
        if(
            nombre.trim() === '' ||
            apellido.trim() === ''
        ) 
        {
            actualizarError(true)
            return;
        }

        // Agrego un ID
        usuario.id = uuid();

        //Agregar usuario
        crearUsuario(usuario)

        // Resetear Form
        guardarUsuario({
            nombre: '',
            apellido: ''
        })
    }
   
    return ( 

        <Fragment>

            <h4>Agregar personas</h4>

            { error ? <div className="p-3 mb-2 bg-danger text-white mt-5">Todos los campos son obligatorios</div> : null}
            
            <form 
                onSubmit={submitUsuario}
            >
              <label className="mt-4">
                Nombre
              </label>
              <input 
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Ingrese Nombre"
                onChange={actualizarUsuario}
                value = {nombre}
              />

              <label className="mt-4">
                Apellido
              </label>  
              <input 
                type="text"
                name="apellido"
                className="form-control"
                placeholder="Ingrese Apeliido"
                onChange={actualizarUsuario}
                value = {apellido}
              />

              <button className="btn btn-success mt-4">
                  Agregar
              </button>

            </form>
        </Fragment>    
    );
}
 
export default Formulario;