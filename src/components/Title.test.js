// src/components/Title.test.js
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import Title from './Title'

describe('<Title />', () => {
  const whatever = 'No, uhm, ah well..'
  const theTitle = shallow(<Title content={whatever} />)

  it('wraps everything in an h1 tag', () => {
    expect(theTitle).to.have.tagName('h1')
  })

  describe('content prop', () => {
    it('renders it as text inside the h1 tag', () => {
      expect(theTitle).to.have.text(whatever)
    })

    describe('with different content', () => {
      const whatever = 'Yes, uhm, ah well..'
      const theTitle = shallow(<Title content={whatever} />)

      it('renders that as text inside the h1 tag', () => {
        expect(theTitle).to.have.text(whatever)
      })
    })
  })
})
