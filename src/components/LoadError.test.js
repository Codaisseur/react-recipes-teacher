import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import { LoadError } from './LoadError'

chai.use(chaiEnzyme())

describe('<LoadError />', () => {
  describe('when the error is null', () => {
    const error = shallow(<LoadError error={null} />)

    it('does not render anything', () => {
      expect(error).to.be.blank()
    })
  })

  describe('when the error is set', () => {
    const error = shallow(<LoadError error="Oops, I did it again." />)

    it('renders a div', () => {
      expect(error).to.have.tagName('div')
      expect(error).to.have.className('load-error')
    })

    it('shows a title', () => {
      expect(error.find('h3')).to.have.text('Load Error')
    })

    it('shows the actual error too', () => {
      expect(error.find('p')).to.have.text('Oops, I did it again.')
    })
  })
})
