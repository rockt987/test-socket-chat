import React, {PropTypes} from 'react'

import './registerpage.scss'

class RegisterPage extends React.Component {

  constructor(props) {
    super(props)
    this.validateOnEnter = this.validateOnEnter.bind(this)
  }

  validateOnEnter (e) {

    if (e.keyCode == 13) {
      const usernameInput = this.refs.username
      this.props.onRegisterUserName(usernameInput.value)
      return false;
    }
    return true;
  }

  render () {
    return (
      <div className='form'>
        <h3 className='title'>Please Enter your name</h3>
        <input ref='username' className='usernameInput' type='text' maxLength='14' onKeyDown={this.validateOnEnter} autoFocus={true}/>
      </div>
    )
  }
}

RegisterPage.propTypes = {
  onRegisterUserName: PropTypes.func,
}

RegisterPage.displayName = 'RegisterPage'
export default RegisterPage
