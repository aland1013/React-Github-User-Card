import React from 'react';
import { Card, Image, Header, Icon, List } from 'semantic-ui-react';

const UserCard = (props) => {
  const { 
          avatar_url, 
          name,
          login,
          location,
          html_url,
          bio
        } = props.user;
  
  const { followers } = props;
  
  console.log(avatar_url);

  return (
    <>
      <Card href={html_url} target='_blank' centered raised>
        <Image src={avatar_url} alt='avatar' />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{login}</Card.Meta>
          <Card.Description>
            Location: {location}<br/>
            Bio: {bio}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Header as='h4' icon>
            <Icon name='users' circular />
            Followers
          </Header>
          <List size='large'>
            {followers.map(follower => {
              return (
                <List.Item as='a' key={follower.id} href={follower.html_url} target='_blank'>
                  <Icon name='user' />
                  <List.Content>
                    {follower.login}
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </Card.Content>
      </Card>
    </>
  );
}

export default UserCard;