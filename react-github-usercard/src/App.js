import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import { Container, Divider, Header, Card } from 'semantic-ui-react';


const userArray = ['aland1013', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

class App extends React.Component {
  state = {
    users: [
      // { avatar_url: "https://avatars0.githubusercontent.com/u/20908636?v=4",
      // bio: "Experienced lawyer | aspiring legal engineer / blockchain developer",
      // blog: "",
      // company: null,
      // created_at: "2016-08-08T15:15:58Z",
      // email: null,
      // events_url: "https://api.github.com/users/aland1013/events{/privacy}",
      // followers: 1,
      // followers_url: "https://api.github.com/users/aland1013/followers",
      // following: 0,
      // following_url: "https://api.github.com/users/aland1013/following{/other_user}",
      // gists_url: "https://api.github.com/users/aland1013/gists{/gist_id}",
      // gravatar_id: "",
      // hireable: null,
      // html_url: "https://github.com/aland1013",
      // id: 20908636,
      // location: "Athens, GA",
      // login: "aland1013",
      // name: "Adam Land",
      // node_id: "MDQ6VXNlcjIwOTA4NjM2",
      // organizations_url: "https://api.github.com/users/aland1013/orgs",
      // public_gists: 1,
      // public_repos: 48,
      // received_events_url: "https://api.github.com/users/aland1013/received_events",
      // repos_url: "https://api.github.com/users/aland1013/repos",
      // site_admin: false,
      // starred_url: "https://api.github.com/users/aland1013/starred{/owner}{/repo}",
      // subscriptions_url: "https://api.github.com/users/aland1013/subscriptions",
      // type: "User",
      // updated_at: "2020-05-08T17:04:03Z",
      // url: "https://api.github.com/users/aland1013"}
    ]
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
      <Container text>
        <Divider hidden />
        <Header as='h1' textAlign='center'>React Github Usercard Project</Header>
        <Divider hidden />
        <Card.Group itemsPerRow={2}>
        {this.state.users.map(user => {
          return <UserCard key={user.id} user={user} />;
        })}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
