// src/components/Navigation.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history } from '../store'
import signOut from '../actions/user/sign-out'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import LocalDining from 'material-ui/svg-icons/maps/local-dining'
import FlatButton from 'material-ui/FlatButton'

export class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  signUp() {
    history.push('/sign-up')
  }

  goHome() {
    history.push('/')
  }

  render() {
    const { signedIn } = this.props
    return (
      <AppBar
        title="Recipes"
        iconElementLeft={<IconButton onClick={this.goHome}><LocalDining /></IconButton>}
        iconElementRight={signedIn ?
          <FlatButton label="Sign out" onClick={this.signOut.bind(this)} /> :
          <FlatButton label="Sign up" onClick={this.signUp} />
        }
      />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signOut })(Navigation)
