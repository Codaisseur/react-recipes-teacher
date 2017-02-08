// src/recipes/RecipesContainer.test.js
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import { RecipesContainer } from './RecipesContainer'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'

chai.use(chaiEnzyme)

const recipes = [
  {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
  },
  {
    title: 'Paella',
    summary: 'This is the dramatic seafood paella that looks stunning, with crustaceans and shellfish. You can vary the quantities of seafood and also use crab, crayfish, etc.',
    vegan: false,
    vegetarian: false,
    pescatarian: true,
  },
  {
    title: 'Spare ribs',
    summary: 'Spare ribs are a variety of pork ribs cooked and eaten in various cuisines around the world. They are cut from the lower portion of the pig specifically the belly and breastbone, behind the shoulder, and include 11 to 13 long bones.',
    vegan: false,
    vegetarian: false,
    pescatarian: false,
  }
]

describe('<RecipesContainer />', () => {
  const container = shallow(<RecipesContainer recipes={ recipes } />)

  it('is wrapped in a div with class name "recipes"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('recipes')
  })

  it('contains a Title', () => {
    expect(container).to.have.descendants(Title)
  })

  it('sets the Title to "All Recipes"', () => {
    expect(container).to.contain(<Title content="All Recipes" />)
  })

  it('renders all recipes as a RecipeItem', () => {
    expect(container).to.have.exactly(recipes.length).descendants(RecipeItem)
  })
})
