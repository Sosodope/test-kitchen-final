import { connect } from 'react-redux'
import { getAll } from '../store/actions/recipesActions'
import '../styles/style.scss'

class Test extends React.Component {
  async componentDidMount() {
    await this.props.getRecipesAction()
  }
  render() {
    return (
      <div className='bg-gray-400'>
        <p>Hello</p>
        {
          this.props.recipes && (
          <div>
            {
              this.props.recipes.map((recipe) => {
                return (
                <p key={recipe.id}>{recipe.title}</p>
                )
              })
            }
          </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipesAction: async (options) => {
      const request = await getAll(dispatch, options)
      return request
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
