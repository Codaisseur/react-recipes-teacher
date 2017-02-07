// src/recipes/RecipeItem.js
import React, { PureComponent } from 'react'
import './RecipeItem.sass'

class RecipeItem extends PureComponent {
  render() {
    const { title, summary, vegan, vegetarian, pescatarian } = this.props

    return(
      <article className="recipe">
        <header>
          <h1>{ title }</h1>
          <ul className="categories">
            { vegan && <li title="vegan">🌾</li> }
            { !vegan && vegetarian && <li title="vegetarian">🥕</li> }
            { !vegetarian && pescatarian && <li title="pescatarian">🐟</li> }
          </ul>
        </header>
        <main>
          <p>{ summary }</p>
        </main>
        <footer>
        </footer>
      </article>
    )
  }
}

export default RecipeItem
