// src/recipes/RecipeItem.js
import React, { PureComponent, PropTypes } from 'react'
import './RecipeItem.sass'

class RecipeItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian, photo } = this.props

    return(
      <article className="recipe">
        <header>
          <div className="cover" style={{ backgroundImage: `url(${photo})` }} />
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
