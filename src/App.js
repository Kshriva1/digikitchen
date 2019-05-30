import React from 'react';
import logo from './logo.svg';
import kitchenLogo from './kitchenLogo.jpg';
import './App.css';

function App() {
  return (
    <div className='pa3'>
    <div className='navigation pa3  bg-light-red' style={{height:'100px',width:'100px'}}>
        <img src={kitchenLogo} className="pointer App-logo" alt="logo" />
    </div>
    </div>
  );
}

export default App;
