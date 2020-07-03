import React , { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends React.Component{
  render(){

  return(
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}
}

export default App;
