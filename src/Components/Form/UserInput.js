import React, { Component } from 'react'
class UserInput extends Component {
  constructor () {
    super()
    this.state = {
      user: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    this.setState({
      user: e.target.value
    })
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.getUserInfo(this.state.user)
  }
  render () {
    return (
      <div>
        <form className='FormSearch' onSubmit={this.handleSubmit}>
          <input
            type='text'
            className='input-lg form-control'
            name='username'
            placeholder='Github user...'
            value={this.state.user}
            onChange={this.handleChange}
          />
          <p>
            <a className='btn btn-warning btn-lg' href='#' role='button'>
              <strong>Nice stuff</strong>
            </a>
          </p>
        </form>
      </div>
    )
  }
}

export default UserInput
