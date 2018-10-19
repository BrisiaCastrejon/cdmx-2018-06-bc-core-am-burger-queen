// dependencias
import React, { Component } from 'react';
// estilos
import './App.css';
//componentes
import Login from './../Login/Login'
// import Register from './../Register/Register'

class App extends Component {
  render() {
    return (
      <div className="App">   
        <Login />
      </div>
    );
  }
}

export default App;
