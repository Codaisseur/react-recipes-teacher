import { TOGGLE_LIKE } from '../actions/recipes/toggle-like'
import { FETCHED_RECIPES } from '../actions/recipes/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_RECIPES :
      return [].concat(payload)

    case TOGGLE_LIKE :
      return state.map((recipe) => {
        if (recipe._id === payload) {
          return Object.assign({}, recipe, { liked: !recipe.liked })
        }

        return recipe
      })

    default :
      return state
  }
}
