import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const UserCard = (props) => {
  const { 
          avatar_url, 
          name,
          login,
          location,
          html_url,
          followers,
          following,
          bio
        } = props.user;

  return (
    <>
      <Card centered raised>
        <Image src={avatar_url} alt="avatar" />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{login}</Card.Meta>
          <Card.Description>
            Location: {location}<br/>
            Profile: 
            <a 
              href={html_url}
              target="_blank"
            >{html_url}</a><br/>
            Bio: {bio}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon color="red" name="users" /> {followers} followers<br/>
          <Icon color="blue" name="users" /> {following} following<br/>
        </Card.Content>
      </Card>
    </>
  );
}

export default UserCard;