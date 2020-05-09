import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import { Container, Divider, Header } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    user: null,
    followers: []
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/aland1013')
      .then(response => {
        this.setState({ user: response.data });
      });
    
    axios.get('https://api.github.com/users/aland1013/followers')
      .then(response => {
        this.setState({ followers: response.data });
      });
  }

  render() {
    return (
      <Container text>
        <Divider hidden />
        <Header as='h1' textAlign='center'>React Github Usercard Project</Header>
        <Divider hidden />
        {this.state.user === null || this.state.followers.length === 0 ? (
          <h2>Loading...</h2>
        ) : (
          <UserCard user={this.state.user} followers={this.state.followers}/>
        )}
      </Container>
    );
  }
}

export default App;
