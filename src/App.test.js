import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Title from './components/Title'

chai.use(chaiEnzyme())

const app = shallow(<App />)

describe('<App />', () => {
  it('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('render a Title', () => {
    expect(app).to.have.descendants(Title)
  })
})
