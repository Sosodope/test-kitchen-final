import Link from 'next/link'
import { userData, myRecipes } from '../../data'
import Sidebar from '../../components/Shared/Sidebar'
import classNames from 'classnames'
import '../../styles/style.scss'

class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'account'
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
                        this.state.activeTab === 'account' ? `border-l border-t border-r rounded-t`: ''
                      )}
                      onClick={() => this.setTab('account')}>Account</a>
                  </li>
                  <li className="mr-1">
                    <a
                      className={classNames(
                        'bg-white inline-block py-2 px-4 text-blue-700 font-semibold',
                        this.state.activeTab === 'preferences' ? `border-l border-t border-r rounded-t`: ''
                      )}
                      onClick={() => this.setTab('preferences')}>Preferences</a>
                  </li>
                </ul>
              </header>
              <section className="p-4 flex flex-row flex-wrap items-center text-center">
                <p>Coming soon</p>
              </section>
            </section>
            
          </section>
        </main>
  
    </div>
    )
  }
}

export default Settings