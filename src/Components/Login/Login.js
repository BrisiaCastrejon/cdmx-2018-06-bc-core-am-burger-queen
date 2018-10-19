// dependencias
import React, { Component } from 'react';
import firebase from 'firebase';

// estilos
import './Login.css'

//componentes
import Register from './../Register/Register'

class App extends Component {
  constructor () {
    super();
    this.state = {
      user: null
    };
    this.handleLoginGoogle = this.handleLoginGoogle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  };
  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({user});
    });
  };
  handleLoginGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(`${error.code}: ${error.message} Ha ocurrido un error`))
  };
  handleLogout () {
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.emal} ha salido`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  } 
  handleUserAuth () {
    if (this.state.user) {
      return (
        <div className='user'>          
          <p>Bienvenid@ <br/>{this.state.user.displayName}<br/></p>
          <button className="btn btn-danger form-button button-logout" onClick={this.handleLogout}>Cerrar sesión</button>
          <br/>
        </div>
      );
    } else {
      return (
        <section className="row justify-content-center">
          <div>
          </div>
          <section className="">
          <Register />
          <button className="btn btn-danger btn-block" onClick={this.handleLoginGoogle}>Iniciar con Google</button>   
          </section>            
        </section>        
      )
    };
  };
  render() {
    return (
      <div className="container centrado-container">  
       <section>      
          {this.handleUserAuth()}
          </section>        
      </div>
    );
  }
}
export default App;