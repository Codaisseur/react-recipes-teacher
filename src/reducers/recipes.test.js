import chai, { expect } from 'chai'
import recipes from './recipes'

describe('recipes reducer', () => {
  const initialState = recipes()
  const expectedState = []

  it('return an empty array for the initial state', () => {
    expect(initialState).to.eql(expectedState)
  })
})
