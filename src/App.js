import React, { Component } from 'react';
// Components
import Header from './components/Header'
import Footer from './components/Footer'
import BeerControl from "./components/BeerControl";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BeerControl />
      <Footer />
    </div>
  );
}

export default App;