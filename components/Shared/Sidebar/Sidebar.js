import Link from 'next/link'
import { UserIcon } from '../Icons'

const Sidebar = (props) => {
  return (
    <aside className="sidebar-container w-full md:h-screen md:w-64 md:flex md:flex-col aside">
      <header className="sidebar-header border-b border-solid border-gray-800 flex-grow  flex flex-col p-4 items-center">
    	  <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden' }}>
    		    <UserIcon />
    		</div>
    			<h1 className="sidebar-header-username py-6 px-4 text-base font-medium">{props.userData.fullName}</h1>
    	</header>
    	<nav className="overflow-y-auto h-full flex-grow">
    		<ul className="font-medium px-4 text-left">
    			<li>
    				<Link href='/'>
							<button className="rounded text-sm text-left block py-3 px-6 hover:bg-blue-600 w-full">Home</button>
						</Link>
    			</li>
					<li>
    				<Link href='/saved-recipes'>
							<button className="rounded text-sm text-left block py-3 px-6 hover:bg-blue-600 w-full">Saved Recipes</button>
						</Link>
    			</li>
					<li>
						<Link href='/my-recipes'>
							<button className="rounded text-sm block py-3 px-6 hover:bg-blue-600 w-full text-left">My Recipes</button>
						</Link>
    			</li>
					<li>
						<Link href='/settings'>
    					<button className="rounded text-sm block py-3 px-6 hover:bg-blue-600 w-full text-left">Settings</button>
						</Link>
    			</li>
    		</ul>
    	</nav>
    	<footer className="p-4 border-t border-solid border-gray-800">
    			<button className="text-gray-600 text-xs leading-normal">Log out</button>
    	</footer>
    </aside>
  )
}

export default Sidebar
