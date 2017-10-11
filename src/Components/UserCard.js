import React, { Component } from 'react';

const defaultImg = ''
const UserCard = ({user}) => (
  <div className='jumbotron row'>
    <h1>User Card</h1>
    <div className='col-md-4'>
    {user.avatar && <img src={user.avatar} width='200'/>}
    </div>
    <div className='col-md-8'>
      <p>Username: <strong>{user.name}</strong></p>
      <p>Repositiries: <strong>{user.repos}</strong></p>
      <p>Following: <strong>{user.following}</strong></p>
      <p>Followers: <strong>{user.followers}</strong></p>
      <p>Coder sinze: <strong>{user.date}</strong></p>
    </div>
  </div>
)
export default UserCard
