import chai, { expect } from 'chai'
import { TOGGLE_LIKE } from '../actions/recipes/toggle-like'
import recipes, { dummyData } from './recipes'

describe('recipes reducer', () => {
  const initialState = recipes()
  const expectedState = []

  it('return an empty array for the initial state', () => {
    expect(initialState).to.eql(expectedState)
  })

  describe(TOGGLE_LIKE, () => {
    const initialRecipes = [
      {
        _id: '1234',
        liked: false
      },
      {
        _id: '1235',
        liked: true
      }
    ]

    const eventualRecipes = [
      {
        _id: '1234',
        liked: true
      },
      {
        _id: '1235',
        liked: true
      }
    ]

    const action = {
      type: TOGGLE_LIKE,
      payload: '1234'
    }

    const initialState = recipes(initialRecipes)

    it('toggles the liked prop on a recipe', () => {
      expect(initialState).to.eql(initialRecipes)
      expect(recipes(initialRecipes, action)).to.eql(eventualRecipes)
    })
  })
})
