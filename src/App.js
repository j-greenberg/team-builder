import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";

const [teamMembers, setTeam] = useState([
  {
    name: '', 
    email: '', 
    role: ''
  }
]);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form/>
        </header>
    </div>
  );
}

export default App;
