import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchRecipes from '../actions/recipes/fetch'
import Title from '../components/Title'

export class RecipePage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {
    const { title } = this.props

    return(
      <div className="recipe page">
        <Title content={ title || 'Loading...' } />
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }, { params }) => {
  const recipe = recipes.reduce((prev, next) => {
    if (next._id === params.recipeId) {
      return next
    }
    return prev
  }, {})

  return {
    ...recipe
  }
}

export default connect(mapStateToProps, { fetchRecipes })(RecipePage)
