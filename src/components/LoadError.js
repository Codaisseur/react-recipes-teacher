import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import './LoadError.sass'

export class LoadError extends PureComponent {
  render() {
    const { error } = this.props

    if (!error) return null

    return (
      <div className="load-error">
        <h3>Load Error</h3>
        <p>{ error }</p>
      </div>
    )
  }
}

const mapStateToProps = ({ loadError }) => ({ error: loadError })

export default connect(mapStateToProps)(LoadError)
