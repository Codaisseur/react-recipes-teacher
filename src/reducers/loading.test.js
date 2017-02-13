import chai, { expect } from 'chai'
import loading from './loading'
import { APP_LOADING, APP_DONE_LOADING } from '../actions/loading'

describe('loading reducer', () => {
  const initialState = false
  const eventualState = true

  describe('initial state', () => {
    it('is false', () => {
      expect(loading()).to.eq(false)
    })
  })

  describe(APP_LOADING, () => {
    const action = { type: APP_LOADING }

    it('turns true', () => {
      expect(loading(initialState, action)).to.eq(true)
    })
  })

  describe(APP_DONE_LOADING, () => {
    const initialState = true
    const action = { type: APP_DONE_LOADING }

    it('turns false', () => {
      expect(loading(initialState, action)).to.eq(false)
    })
  })
})
