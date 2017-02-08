import chai, { expect } from 'chai'
import toggleLike, { TOGGLE_LIKE } from './toggle-like'

describe('toggleLike(recipeId)', () => {
  const recipeId = 4
  const { type, payload } = toggleLike(recipeId)

  it('returns a type', () => {
    expect(type).to.eq(TOGGLE_LIKE)
  })

  it('returns a payload with the recipeId', () => {
    expect(payload).to.eq(recipeId)
  })
})
