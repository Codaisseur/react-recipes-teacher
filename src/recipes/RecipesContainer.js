// src/recipes/RecipesContainer.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchRecipes from '../actions/recipes/fetch'
import subscribeToRecipesService from '../actions/recipes/subscribe'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import './RecipesContainer.sass'

export class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    fetchRecipes: PropTypes.func.isRequired,
    subscribeToRecipesService: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchRecipes()
    this.props.subscribeToRecipesService()
  }

  renderRecipe(recipe, index) {
    return <RecipeItem key={ index } { ...recipe } liked={ false } />
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="All Recipes" />
        </header>

        <main className="container">
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps, {
  fetchRecipes,
  subscribeToRecipesService
})(RecipesContainer)
