import React, { Component } from 'react';

import { SearchBox } from './components/search-box/search-box.component';       
import { CardList } from './components/card-list/card-list.component';  

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      techbros: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({techbros: users}))
  }
    
  render() { 
    const { techbros, searchField } = this.state;
    const filteredMonsters = techbros.filter(techbro => techbro.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'> 
        <h1>Monster Rolodex</h1>
  
        <SearchBox 
         placeholder='Search monster'
         handleChange={e => this.setState({ searchField: e.target.value})}
        />

        <CardList techbros={filteredMonsters} />
       
      </div>
    );
  }
}
export default App;
