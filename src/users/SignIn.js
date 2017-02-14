import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import signIn from '../actions/user/sign-in'
import Title from '../components/Title'

export class SignIn extends PureComponent {
  submitForm(event) {
    event.preventDefault()
    const user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    this.props.signIn(user)

  }

  render() {
    return (
      <div className="sign-in form">
        <Title content="Sign In" />

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <input ref="email" type="email" placeholder="Email address" />
          </div>
          <div className="input">
            <input ref="password" type="password" placeholder="Password"  />
          </div>
          <Link to="/sign-up">Sign up</Link>
          <input type="submit" value="Sign in" />
        </form>
      </div>
    )
  }
}

export default connect(null, { signIn })(SignIn)
