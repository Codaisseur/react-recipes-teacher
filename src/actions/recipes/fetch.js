// src/actions/recipes/fetch.js
import API from '../../middleware/api'
import loadError from '../load/error'
import loading from '../loading'
export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new API()
const recipes = api.service('recipes')

export default () => {
  return fetchRecipes
}

const fetchRecipes = (dispatch) => {
  dispatch(loading(true))

  setTimeout(() => {
    recipes.find({
      query: {
        $limit: 25
      }
    })
    .then((response) => {
      dispatch({
        type: FETCHED_RECIPES,
        payload: response.data
      })
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }, 10000)
}
