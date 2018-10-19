import React, { Component } from 'react';
// import firebase from 'firebase';

// estilos
import './Register.css'
import image from './../../assets/img/4.jpg';

class Register extends Component {
  render() {
    return (
      <div className="container form-centrado">
        <form className="row justify-content-center fondo-container">
          <div className="form-group primera-caja">
          <img className=""  src={image} alt="" width="300px"/>
          <input type="name" className="form-control" placeholder="Ingresa tu nombre"/>
          <input type="email" className="form-control" placeholder="Ingresa un correo"/>
          <input type="password" className="form-control" placeholder="Ingresa una contraseña"/>
          <br/>
          <button type="submit" className="btn btn-primary btn-block">Registrar</button>
          </div>            
        </form>   
      </div>
    );
  }
}

export default Register;