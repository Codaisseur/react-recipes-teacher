import chai, { expect } from 'chai'
import loading, { APP_LOADING, APP_DONE_LOADING } from './loading'

describe('Action: loading()', () => {
  it('returns type APP_LOADING when we pass in true', () => {
    expect(loading(true)).to.eql({ type: APP_LOADING })
  })

  it('returns type APP_DONE_LOADING when we pass in false', () => {
    expect(loading(false)).to.eql({ type: APP_DONE_LOADING })    
  })
})
