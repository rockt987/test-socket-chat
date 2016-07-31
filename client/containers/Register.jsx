import {connect} from 'react-redux'
import RegisterPage from '../components/RegisterPage'
import { registerUserName } from '../modules/username'

const mapStateToProps = (state) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {

  return {
    onRegisterUserName: (username) => dispatch(registerUserName(username))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(RegisterPage)
