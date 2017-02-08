// src/recipes/RecipeItem.test.js
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import { RecipeItem } from './RecipeItem'

chai.use(chaiEnzyme)

const recipe = {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
}

describe('<RecipeItem />', () => {
  const container = shallow(<RecipeItem { ...recipe } />)

  it('is wrapped in a article tag with class name "recipe"', () => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('recipe')
  })

  it('contains a the title', () => {
    expect(container.find('h1')).to.have.text(recipe.title)
  })

  describe('when it is vegetarian, it', () => {
    it('shows a 🥕', () => {
      expect(container.find('ul > li')).to.have.text('🥕')
    })
  })

  describe('when it is vegan, it', () => {
    const container = shallow(<RecipeItem { ...recipe } vegan={ true } />)

    it('shows a 🌾', () => {
      expect(container.find('ul > li')).to.have.text('🌾')
    })
  })
  describe('when it is pescatarian, it', () => {
    const container = shallow(<RecipeItem { ...recipe } pescatarian={ true } vegetarian={ false } />)
    it('shows a 🐟', () => {
      expect(container.find('ul > li')).to.have.text('🐟')
    })
  })
})
