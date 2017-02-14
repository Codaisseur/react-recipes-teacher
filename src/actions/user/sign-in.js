// src/actions/user/sign-in.js
import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'
import { history } from '../../store'
export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()

export default (user) => {
  return (dispatch) => {
    dispatch(loading(true))

    api.authenticate(user)
    .then((response) => {
      dispatch(loadSuccess())
      dispatch({
        type: USER_SIGNED_IN,
        payload: response.data
      })
      history.push('/')
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}
