import API from '../../middleware/api'
const api = new API()
const recipes = api.service('recipes')

export default (recipe, user) => {
  const liked = recipe.likedBy.filter((like) => (like === user._id)).length > 0

  api.app.authenticate()
    .then(() => {
      recipes.patch(recipe._id, { like: !liked })
    })
    .catch((error) => {
      console.error(error)
      // e.g. redirect to sign in!
    })

  return { type: 'LIKED_RECIPE' }
}
