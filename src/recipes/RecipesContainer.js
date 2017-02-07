// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'

class RecipesContainer extends PureComponent {
  renderRecipe(recipe, index) {
    return <RecipeItem key={ index } { ...recipe } />
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="All Recipes" />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe) }
        </main>
      </div>
    )
  }
}

export default RecipesContainer
