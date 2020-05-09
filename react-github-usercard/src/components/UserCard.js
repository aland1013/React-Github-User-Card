import React from 'react';

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
      <img src={avatar_url} alt="avatar" />
      <h2>{name}</h2>
      <h3>{login}</h3>
      <p>Location: {location}</p>
      <p>Profile: 
        <a 
          href={html_url}
          target="_blank"
        >{html_url}</a>
      </p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
      <p>Bio: {bio}</p>
    </>
  );
}

export default UserCard;