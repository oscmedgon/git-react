import React, { Component } from 'react'
import $ from 'jquery'

import UserInput from '../Form/UserInput'
import App from './App.js'
import UserCard from '../UserCard'
class AppContainer extends Component {
  constructor () {
    super()
    this.state = ({
      user: ''
    })
    this.getUserInfo = this.getUserInfo.bind(this)
  }
  getUserInfo (user) {
    const url = `https://api.github.com/users/${user}`
    $.ajax({
      url
    })
        .then(dataFromApi => {
          this.setState({user: {
            avatar: dataFromApi.avatar_url,
            name: dataFromApi.login,
            repos: dataFromApi.public_repos,
            following: dataFromApi.following,
            followers: dataFromApi.followers,
            date: dataFromApi.created_at.replace((/([A-Z])+/g), ' ')
          }
          }, () => console.log(this.state))
        })
  }

  render () {
    return (
      <div className='container'>
        <div className='col-md-4 jumbotron'>
          <h1>GitFind</h1>
          <UserInput getUserInfo={this.getUserInfo} />
        </div>
        <div className='col-md-8'>
          <UserCard user={this.state.user}/>
        </div>
      </div>
    )
  }
}

export default AppContainer
