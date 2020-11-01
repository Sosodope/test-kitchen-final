import Link from 'next/link'
import { userData, myRecipes } from '../../data'
import Sidebar from '../../components/Shared/Sidebar'
import classNames from 'classnames'
import '../../styles/style.scss'

class MyRecipes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'published'
    }
  }

  setTab = (tab) => {
    this.setState({
      activeTab: tab
    })
  }

  render() {
    return(
      <div id="app" className="md:flex antialiased">
        <Sidebar userData={userData} />
        <main className="bg-gray-100 h-screen w-full overflow-y-auto">
          <section id="performance">
            <header className="border-b border-solid border-gray-300 bg-white flex justify-between">
              <Link href='/add/new-recipe'>
								<button href="#performance" className="rounded text-sm block py-3 px-6 hover:bg-blue-600 text-left">Add Recipe</button>
							</Link>            </header>
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
              <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
                <ul className="flex border-b">
                  <li className="-mb-px mr-1">
                    <a
                      className={classNames(
                        'bg-white inline-block py-2 px-4 text-blue-700 font-semibold',
                        this.state.activeTab === 'published' ? `border-l border-t border-r rounded-t`: ''
                      )}
                      onClick={() => this.setTab('published')}>Published</a>
                  </li>
                  <li className="mr-1">
                    <a
                      className={classNames(
                        'bg-white inline-block py-2 px-4 text-blue-700 font-semibold',
                        this.state.activeTab === 'drafts' ? `border-l border-t border-r rounded-t`: ''
                      )}
                      onClick={() => this.setTab('drafts')}>Drafts</a>
                  </li>
                </ul>
              </header>
              <section className="p-4 flex flex-row flex-wrap items-center text-center">
                {
                  this.state.activeTab === 'published' ? (
                    <>
                      {
                        myRecipes.published.map((recipe, index) => {
                          return (
                            <Link
                              href={`/my-recipes/[id]`}
                              as={`/my-recipes/${index}`}
                              key={index}
                              >
                              <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                                <img className="w-full" src='/placeholder.png' alt="Sunset in the mountains" />
                                  {/* <img className="w-full" src="https://images.unsplash.com/photo-1600345968497-bb0c69de64f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Sunset in the mountains" /> */}
                                  <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{recipe.title}</div>
                                    <p className="text-gray-700 text-base">
                                    {recipe.description}
                                    </p>
                                  </div>
                                  <div className="px-6 pt-4 pb-2">
                                    {
                                      recipe.tags.map((tag, index) => {
                                        return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                                      })
                                    }
                                  </div>
                              </div>
                          </Link>
                          )
                        })
                      }
                    </>
                  ) : (
                    <>
                      {
                        myRecipes.drafts.map((recipe, index) => {
                          return (
                            <Link
                              href={`/my-recipes/[id]`}
                              as={`/my-recipes/${index}`}
                              key={index}
                              >
                              <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                                <img className="w-full" src='/placeholder.png' alt="Sunset in the mountains" />
                                  <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{recipe.title}</div>
                                    <p className="text-gray-700 text-base">
                                    {recipe.description}
                                    </p>
                                  </div>
                                  <div className="px-6 pt-4 pb-2">
                                    {
                                      recipe.tags.map((tag, index) => {
                                        return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                                      })
                                    }
                                  </div>
                              </div>
                          </Link>
                          )
                        })
                      }
                    </>
                  )
                }
              </section>
            </section>
            
          </section>
        </main>
  
    </div>
    )
  }
}

export default MyRecipes