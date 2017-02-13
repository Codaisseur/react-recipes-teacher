// src/actions/recipes/fetch.js
import API from '../../middleware/api'
import loadError from '../load/error'
export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new API()
const recipes = api.service('recipes')

export default () => {
  return fetchRecipes
}

const fetchRecipes = (dispatch) => {
  recipes.find()
    .then((response) => {
      dispatch({
        type: FETCHED_RECIPES,
        payload: response.data
      })
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
}
