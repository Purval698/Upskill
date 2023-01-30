import React from 'react';
import './App.css';
import Student from './Student';

function App(){
  return (
    <div className="App">
      <Student name={"Pradip"} email={"Pradip@gmail.com"}/>
      <Student name={"Mask"} email={"Mask@gmail.com"}/>
      <Student name={"Jarvis"} email={"Jarvis@gmail.com"}/>
    </div>
  );
}

export default App;
