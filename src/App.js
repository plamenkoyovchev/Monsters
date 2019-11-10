import React, { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/Cards/CardList/CardList';

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => setMonsters(monsters));
  }, []);

  return (
    <div className="App">
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
