import React, { Fragment, useState } from 'react';
import Formulario from './Formulario'
import Usuarios from './Usuarios'


function App() {
  
  // Arreglo de usuarios
  const [ usuarios, guardarUsuarios ] = useState([]);

  // Funcion que tome los usuarios que ya estan y agregue el nuevo
  const crearUsuario = usuario => {
    guardarUsuarios([
      ...usuarios,
      usuario
    ]);
  }

  // Funcion para eliminar Usuario por su ID
  const eliminarUsuario = id => {
    const eliminoUsuario = usuarios.filter(usuario => usuario.id !== id);
    guardarUsuarios(eliminoUsuario)
  }

  // Editar Usuario
  const editarUsuario = item => {
    console.log(item)
  }

  // Mnesaje condicional
  const titulo = usuarios.length === 0 ? 'Aun no hay usuarios' : 'Lista de usuarios';

  return (
      <Fragment>

        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <Formulario 
                crearUsuario = {crearUsuario}
              />
            </div>

            <div className="col-md-5">
            
            <h4> {titulo} </h4>
              {usuarios.map(usuario => (
                <Usuarios 
                  key = {usuario.id}
                  usuario = {usuario}
                  eliminarUsuario = {eliminarUsuario}
                  editarUsuario = {editarUsuario}
                />
              ))}
              
            </div>
          </div>
        </div>
      
      </Fragment>
  
  );
}

export default App;
