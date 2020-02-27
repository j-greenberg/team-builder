import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Form from "./Form";
import Members from "./Members";

function App() {

  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Bob", 
      role: "Manager", 
      email: "bob-manager@gmail.com"
    }
  ]);

const addNewMember = person => {

  const newMember = {
    id: Date.now(),
    name: person.name, 
    role: person.role,
    email: person.email
  }
  setTeam([...team, newMember]);
}

  return (
    <div className="App">
        <Form addNewMember={addNewMember}/>
        <Members team={team}/>
    </div>
  );
}

export default App;
