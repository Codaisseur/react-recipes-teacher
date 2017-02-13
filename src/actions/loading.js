// src/actions/loading.js

export const APP_LOADING = 'APP_LOADING'
export const APP_DONE_LOADING = 'APP_DONE_LOADING'

export default (loading) => {
  const type = loading ? APP_LOADING : APP_DONE_LOADING
  return { type }
}
