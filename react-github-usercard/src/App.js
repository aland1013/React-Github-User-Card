import React from 'react';
import axios from 'axios';
import './App.css';

const userArray = ['aland1013', 'tetondan', 'dustinmyers', 'justml', 'luishrd', 'bigknell'];

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    userArray.forEach(user => {
      axios.get(`https://api.github.com/users/${user}`)
      .then(response => {
        console.log(response.data);
        this.setState({ users: [...this.state.users, response.data] });
      });
    });
    
  }

  render() {
    return (
      <div className="App">
        <h1>React Github Usercard Project</h1>
        {this.state.users.map(user => {
          return <p>{user.name}</p>;
        })}
      </div>
    );
  }
}

export default App;
