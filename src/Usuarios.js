import React, { Fragment } from 'react';

const Usuarios = ({usuario, eliminarUsuario, editarUsuario}) =>  ( 

    <Fragment>
        <div className="card mt-3">
            <div className="card-body">
                <p><strong>Nombre: </strong> <span>{usuario.nombre}</span></p>
                <p><strong>Apellido: </strong><span>{usuario.apellido}</span></p>
            </div>

            <button
                className="btn btn-danger"
                onClick={ () => eliminarUsuario(usuario.id) }
            >
            Eliminar
            </button>

            <button
                className="btn btn-warning mt-3"
                onClick={ () => editarUsuario(usuario) }
            >
            Editar
            </button>
        </div>
    </Fragment>

 );

export default Usuarios;