
import { useState } from 'react';
import './App.css';
import { Delete } from './components/Delete';
import { List } from './components/List';
import { Redirect } from './components/Redirect';
import { Shorten } from './components/Shorten';
import download from './components/download.png';

function App() {

  return (
    <div className="App">
      <img src={download} alt="ShortURL-img" style={{width:'50%',height:'200px',marginTop:'100px',marginBottom:'30px'}}/>
      <div className="cmpContainer">
        <Shorten />
      </div>
      <div className="cmpContainer">
        <Redirect />
      </div>
      <div className="cmpContainer">
        <Delete />
      </div>
      <div className="cmpContainer">
        <List />
      </div>
      

    </div>
  );
}

export default App;
