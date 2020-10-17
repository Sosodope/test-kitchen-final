import Link from 'next/link'
import { userData } from '../data'
import '../styles/style.scss'

const Home = () => {
  return(
    <div id="app" className="md:flex antialiased">
    	<aside className="w-full md:h-screen md:w-64 md:flex md:flex-col aside">
    		<header className="border-b border-solid border-gray-800 flex-grow  flex flex-col p-4 items-center">
						<div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
							<img src={userData.avatar} />
						</div>
						<h1 className="py-6 px-4 text-base font-medium">{userData.fullName}</h1>
    		</header>
    		<nav className="overflow-y-auto h-full flex-grow">
    			<ul className="font-medium px-4 text-left">
    				<li>
    					<button href="#performance" className="rounded text-sm text-left block py-3 px-6 hover:bg-blue-600 w-full">Saved Recipes</button>
    					<button href="#performance" className="rounded text-sm block py-3 px-6 hover:bg-blue-600 w-full text-left">My Recipes</button>
							<button href="#performance" className="rounded text-sm block py-3 px-6 hover:bg-blue-600 w-full text-left">Settings</button>
    				</li>
    			</ul>
    		</nav>
    		<footer className="p-4 border-t border-solid border-gray-800">
						<button href="#performance" className="text-gray-600 text-xs leading-normal">Log out</button>
    		</footer>
    	</aside>
    	
    	<main className="bg-gray-100 h-screen w-full overflow-y-auto">
    		<section id="performance">
    			<header className="border-b border-solid border-gray-300 bg-white flex justify-between">
    				<h2 className="p-6">Search</h2>
						<button href="#performance" className="rounded text-sm block py-3 px-6 hover:bg-blue-600 text-left">Add Recipe</button>
    			</header>
    			<section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
    				<header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
    					Editor's Picks
    				</header>
    				<section className=" flex flex-row flex-wrap items-center text-center">
    					<div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b md:border-b-0 sm:border-r">
    						<span className="text-xs font-medium text-gray-500 uppercase">Some Fancy Dish</span>
    						<div className="py-4 flex flex-col items-center justify-center text-center">
									<div style={{ width: '250px', height: '250px', overflow: 'hidden', background: `url('https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')`, backgroundPosition: 'center', backgroundSize: 'cover'  }} />
   								<span className="items-center h-6 px-2 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</span>
    						</div>
    					</div>
    					<div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
							<span className="text-xs font-medium text-gray-500 uppercase">Some Fancy Dish</span>
    						<div className="py-4 flex flex-col items-center justify-center text-center">
									<div style={{ width: '250px', height: '250px', overflow: 'hidden', background: `url('https://images.unsplash.com/photo-1600345968497-bb0c69de64f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`, backgroundPosition: 'center', backgroundSize: 'cover'  }} />
   								<span className="items-center h-6 px-2 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</span>
    						</div>
    					</div>
    					<div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
							<span className="text-xs font-medium text-gray-500 uppercase">Some Fancy Dish</span>
    						<div className="py-4 flex flex-col items-center justify-center text-center">
									<div style={{ width: '250px', height: '250px', overflow: 'hidden', background: `url('https://images.unsplash.com/photo-1594124283765-34c7de0ca7c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80')`, backgroundPosition: 'center', backgroundSize: 'cover'  }} />
   								<span className="items-center h-6 px-2 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</span>
    						</div>
    					</div>
    					<div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r flex flex-col items-center">
							<span className="text-xs font-medium text-gray-500 uppercase">Some Fancy Dish</span>
								<div className="py-4 flex flex-col items-center justify-center text-center">
									<div style={{ width: '250px', height: '250px', overflow: 'hidden', background: `url('https://images.unsplash.com/photo-1560684352-8497838a2229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=756&q=80')`, backgroundPosition: 'center', backgroundSize: 'cover'  }} />
   								<span className="items-center h-6 px-2 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</span>
    						</div>
    					</div>
    				</section>
    				<section id="chart" className="p-4">
    					<canvas id="myChart" width="200" height="200"></canvas>
    				</section>
    			</section>

    			<div className="flex flex-wrap flex-row">
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
    		  </div>
    			
    			<section id="new">
    				<header className="border-b border-solid border-gray-300 bg-white">
    				<h2 className="p-6">My Drafts</h2>
    			</header>
    			</section>
    		</section>
    	</main>

  </div>
  )
}

export default Home