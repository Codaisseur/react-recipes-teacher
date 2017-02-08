export const TOGGLE_LIKE = 'TOGGLE_LIKE'

export default (recipeId) => {
  console.log('YOU CALLED??')
  return {
    type: TOGGLE_LIKE,
    payload: recipeId
  }
}
