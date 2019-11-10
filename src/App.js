import React, { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/Cards/CardList/CardList';
import SearchBox from './components/UI/SearchBox/SearchBox';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchText, setSearchText] = useState('');

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => setMonsters(monsters));
  }, []);

  const onSearchChangeHandler = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="App">
      <SearchBox changed={onSearchChangeHandler} placeholder='Search' />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
