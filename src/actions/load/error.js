export const LOAD_ERROR = 'LOAD_ERROR'

export default (error) => {
  return {
    type: LOAD_ERROR,
    payload: error
  }
}
