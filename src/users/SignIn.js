import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import signIn from '../actions/user/sign-in'
import Title from '../components/Title'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

const buttonStyle = {
  float: 'right',
  marginLeft: '2rem',
}

export class SignIn extends PureComponent {
  submitForm(event) {
    const user = {
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue()
    }
    this.props.signIn(user)

  }

  signUp() {
    history.push('/sign-up')
  }

  render() {
    return (
      <Paper style={ dialogStyle }>
        <Title content="Sign In" />

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <TextField ref="email" type="email" hintText="Email address" />
          </div>
          <div className="input">
            <TextField ref="password" type="password" hintText="Password"  />
          </div>
          <FlatButton
            onClick={ this.signUp }
            label="Sign up" />
          <RaisedButton
            style={ buttonStyle }
            onClick={ this.submitForm.bind(this) }
            label="Sign in"
            primary={true} />
        </form>
      </Paper>
    )
  }
}

export default connect(null, { signIn })(SignIn)
