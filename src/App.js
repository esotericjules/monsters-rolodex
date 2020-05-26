import React from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  };

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
        }
          );
    return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox
              placeholder={'search monsters'}
              handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters}/>
        </div>
    );
  }
}


export default App;
