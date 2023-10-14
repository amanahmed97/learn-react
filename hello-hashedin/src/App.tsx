import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Test'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="plabel">Hello Hashedin</p>
        <Welcome fName="Tejas"/>
        <Message m="Hi there!"/>
      </header>
      <div>
        
      </div>
    </div>
  );
  
  interface Person{
    fName : string;
  }

  function Welcome(props : Person) {
  return (<h1>Welcome {props.fName}</h1>);
  }
  //export default Welcome;


}


export default App;
