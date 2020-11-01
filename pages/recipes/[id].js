import { connect } from 'react-redux'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import { userData, myRecipes } from '../../data'
import Sidebar from '../../components/Shared/Sidebar'
import Button  from '../../components/Shared/Button'
import classNames from 'classnames'
import '../../styles/style.scss'

class RecipePreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      edited: ''
    }
  }

  goBack = () => {
    Router.back()
  }

  render() {
    return(
      <div id="app" className="md:flex antialiased">
        <Sidebar userData={userData} />
        <main className="bg-gray-100 h-screen w-full overflow-y-auto">
          <section id="performance">
            <header className="border-b border-solid border-gray-300 bg-white flex justify-between">
              <button className="rounded text-sm block py-3 px-6 hover:bg-blue-600 text-left" onClick={this.goBack}>Go back</button>

              <Link href='/add/new-recipe'>
								<button href="#performance" className="rounded text-sm block py-3 px-6 hover:bg-blue-600 text-left">Add Recipe</button>
							</Link>
            </header>
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
              <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
                <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                    <h6 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Title
                    </h6>
                    <p className="appearance-none block w-full mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text">{this.props.recipes[this.props.router.query.id].title}</p>
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <h6 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Prep time
                    </h6>
                    <p className="appearance-none block w-full leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text">{this.props.recipes[this.props.router.query.id].prep_time}</p>
                  </div>
              </header>
              <section className="p-4 flex flex-row flex-wrap items-center text-center">
              <div className="w-full">
              <img className="w-full" src='/placeholder.png' alt="Sunset in the mountains" />
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <h6 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                      Description
                    </h6>
                    {
                      this.props.recipes[this.props.router.query.id] && (
                        <p>{this.props.recipes[this.props.router.query.id].description}</p>
                      )
                    }
                  </div>
                  <div className="w-full px-3 mt-2 mb-6">
                    <h6 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                      Steps
                    </h6>
                    <div>
                      {
                        this.props.recipes[this.props.router.query.id] && this.props.recipes[this.props.router.query.id].steps.map((step, index) => {
                        return <p key={index}>{step}</p>
                        })
                      }
                    </div>
                  </div>
                  <div className="w-full px-3 mt-2 mb-6 md:mb-0">
                    <h6 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Ingredients
                    </h6>
                    {
                      this.props.recipes[this.props.router.query.id] && this.props.recipes[this.props.router.query.id].ingredients.map((ingredient) => {
                      return <p key={ingredient.id}>{ingredient.name} x {ingredient.amount}</p>
                      })
                    }
                  </div>
                </div>

                {/* <div className="mt-6">
                  <Button
                    extraClasses={`group relative w-full md:w-1/3 flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out`}
                    label={'Save'}
                    onClick={() => { console.log('clicked') }}
                  />
                </div> */}
              </div>

              </section>
            </section>
            
          </section>
        </main>
  
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes
  }
}

export default connect(mapStateToProps, null)(withRouter(RecipePreview))
