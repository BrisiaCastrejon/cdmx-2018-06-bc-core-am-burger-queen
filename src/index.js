import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './../src/Components/App/App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
  apiKey: "AIzaSyAJG5TpGZkxr976aECcA6V9v1nDMbgn_Bo",
  authDomain: "redsocial-react-cef1a.firebaseapp.com",
  databaseURL: "https://redsocial-react-cef1a.firebaseio.com",
  projectId: "redsocial-react-cef1a",
  storageBucket: "redsocial-react-cef1a.appspot.com",
  messagingSenderId: "789292410495"
});


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

