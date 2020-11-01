import { connect } from 'react-redux'
import Link from 'next/link'
import { userData } from '../data'
import Sidebar from '../components/Shared/Sidebar'
import { getAll } from '../store/actions/recipesActions'
import { getRecipes } from '../utils/firebase'
import '../styles/style.scss'

class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			recipes: []
		}
  }
  
	componentDidMount() {
		this.props.getRecipesAction()
	}
  
  render() {
		return(
			<div id="app" className="md:flex antialiased">
				<Sidebar userData={userData} />
				<main className="bg-gray-100 h-screen w-full overflow-y-auto">
					<section id="performance">
						<header className="border-b border-solid border-gray-300 bg-white flex justify-between">
							<h2 className="p-6">Search</h2>
							<Link href='/add/new-recipe'>
								<button href="#performance" className="rounded text-sm block py-3 px-6 hover:bg-blue-600 text-left">Add Recipe</button>
							</Link>
						</header>
						<section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
							<header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
								Editor's Picks
							</header>
							<section className=" flex flex-row flex-wrap items-center text-center">
								{
									this.props.recipes && this.props.recipes.map((recipe, index) => {
										return (
											<Link
                        href={`/recipes/[id]`}
                        as={`/recipes/${index}`}
                        key={index}
                        >
												<div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b md:border-b-0 sm:border-r">
													<span className="text-xs font-medium text-gray-500 uppercase">{recipe.title || 'Title Not Available'}</span>
													<div className="py-4 flex flex-col items-center justify-center text-center">
														<div style={{ width: '250px', height: '250px', overflow: 'hidden', background: `url('/placeholder.png')`, backgroundPosition: 'center', backgroundSize: 'cover'  }} />
											<span className="items-center h-6 px-2 text-xs">{recipe.description || 'Description Not Available'}</span>
													</div>
												</div>
											</Link>
										)
									})
								}
							
							</section>
						</section>
	
						{/* <div className="flex flex-wrap flex-row">
							<div className="w-full lg:w-1/2">
								<section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
									<header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
										Trending Recipes
									</header>
									<section className="overflow-x-auto w-full">
										<table className="w-full" cellPadding="0" cellSpacing="0" border="0">
											<tbody>
												<tr>
													<td className="p-2 py-4 border-b border-solid border-gray-300">
														<div className="pl-4 flex flex-wrap flex-row items-center">
															<div className="mr-4 h-12 w-12 bg-red-600 rounded-full block flex  flex-row justify-center items-center text-white">A</div>
															<div className="text-gray-700">A name of a recipe</div>
														</div>
	
													</td>
													<td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">10</td>
												</tr>
												<tr>
													<td className="p-2 py-4 border-b border-solid border-gray-300">
														<div className="pl-4 flex flex-wrap flex-row items-center">
															<div className="mr-4 h-12 w-12 bg-green-600 rounded-full block flex  flex-row justify-center items-center text-white">B</div>
															<div className="text-gray-700">Another Recipe name</div>
														</div>
	
													</td>
													<td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">5</td>
												</tr>
												<tr>
													<td className="p-2 py-4 border-b border-solid border-gray-300">
														<div className="pl-4 flex flex-wrap flex-row items-center">
															<div className="mr-4 h-12 w-12 bg-blue-600 rounded-full block flex  flex-row justify-center items-center text-white">L</div>
															<div className="text-gray-700">Yet another</div>
														</div>
	
													</td>
													<td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">66</td>
												</tr>
												<tr>
													<td className="p-2 py-4 border-b border-solid border-gray-300">
														<div className="pl-4 flex flex-wrap flex-row items-center">
															<div className="mr-4 h-12 w-12 bg-yellow-600 rounded-full block flex  flex-row justify-center items-center text-white">G</div>
															<div className="text-gray-700">Recipes recipes</div>
														</div>
	
													</td>
													<td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">11</td>
												</tr>
											</tbody>
										</table>
									</section>
								</section>
							</div>
							<div className="w-full lg:w-1/2">
								<section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
									<header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
										Latest Recipes
									</header>
									<section className="overflow-x-auto w-full">
										<table className="w-full" cellPadding="0" cellSpacing="0" border="0">
											<tbody>
												<tr>
													<td className="p-2 py-4 border-b border-solid border-gray-300">
														<div className="pl-4 flex flex-wrap flex-row items-center">
															<div className="mr-4 h-12 w-12 bg-red-600 rounded-full block flex  flex-row justify-center items-center text-white">A</div>
															<div className="text-gray-700">New new new</div>
														</div>
	
													</td>
													<td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">5</td>
												</tr>
												<tr>
													<td className="p-2 py-4 border-b border-solid border-gray-300">
														<div className="pl-4 flex flex-wrap flex-row items-center">
															<div className="mr-4 h-12 w-12 bg-green-600 rounded-full block flex  flex-row justify-center items-center text-white">B</div>
															<div className="text-gray-700">He hey he</div>
														</div>
	
													</td>
													<td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">2</td>
												</tr>
												<tr>
													<td className="p-2 py-4 border-b border-solid border-gray-300">
														<div className="pl-4 flex flex-wrap flex-row items-center">
															<div className="mr-4 h-12 w-12 bg-blue-600 rounded-full block flex  flex-row justify-center items-center text-white">L</div>
															<div className="text-gray-700">Qpqoqoq</div>
														</div>
	
													</td>
													<td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">2</td>
												</tr>
												<tr>
													<td className="p-2 py-4 border-b border-solid border-gray-300">
														<div className="pl-4 flex flex-wrap flex-row items-center">
															<div className="mr-4 h-12 w-12 bg-yellow-600 rounded-full block flex  flex-row justify-center items-center text-white">G</div>
															<div className="text-gray-700">Lalalala</div>
														</div>
	
													</td>
													<td className="text-right p-2 pr-4 border-b border-solid border-gray-300 text-gray-700">1</td>
												</tr>
											</tbody>
										</table>
									</section>
								</section>
							</div>
						</div> */}
						
						{/* <section id="new">
							<header className="border-b border-solid border-gray-300 bg-white">
							<h2 className="p-6">My Drafts</h2>
						</header>
						</section> */}
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

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipesAction: async (options) => {
      const request = await getAll(dispatch, options)
      return request
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
