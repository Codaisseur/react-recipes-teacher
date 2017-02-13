// src/recipes/RecipeItem.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import LikeButton from '../components/LikeButton'
import toggleLikeAction from '../actions/recipes/toggle-like'
import './RecipeItem.sass'

export class RecipeItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
    toggleLikeAction: PropTypes.func.isRequired,
  }

  toggleLike() {
    const { _id } = this.props
    console.log('CLICK (RecipeItem)', _id)
    this.props.toggleLikeAction(_id)
  }

  render() {
    const { _id, title, summary, vegan, vegetarian, pescatarian, photo, liked } = this.props

    return(
      <article className="recipe">
        <header>
          <div className="cover" style={{ backgroundImage: `url(${photo})` }} />
          <h1>
            <Link to={`/recipes/${_id}`}>{ title }</Link>
          </h1>
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
          <LikeButton liked={ liked } onChange={ this.toggleLike.bind(this) } />
        </footer>
      </article>
    )
  }
}

export default connect(null, { toggleLikeAction })(RecipeItem)
