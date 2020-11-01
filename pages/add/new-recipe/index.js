import Link from 'next/link'
import { userData, myRecipes } from '../../../data'
import Sidebar from '../../../components/Shared/Sidebar'
import Button  from '../../../components/Shared/Button'
import ImageUpload from '../../../components/ImageUpload'
import classNames from 'classnames'
import { loadDB } from '../../../utils/firebase'
import { v4 as uuidv4 } from 'uuid'
import '../../../styles/style.scss'

class NewRecipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      edited: '',
      title: '',
      serving: '',
      steps: [],
      status: '',
      ingredients: [],
      author_id: '',
      prepTime: '',
      description: '',
      ingredientAmount: '',
      ingredientName: '',
      step: '',
      status: 'draft',
      authorId: '1',
      defaultImage: '',
      image: ''
    }
  }

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addIngredient = (event) => {
    event.preventDefault()
    const newIngredient = {
      amount: this.state.ingredientAmount,
      name: this.state.ingredientName
    }
    const arr = [...this.state.ingredients]
    arr.push(newIngredient)
    this.setState({
      ingredients: arr,
      ingredientAmount: '',
      ingredientName: ''
    })
  }

  addStep = (event) => {
    event.preventDefault()
    this.setState(prevState => ({
      steps: [...prevState.steps, this.state.step],
      step: ''
    }))
  }

  handleSave = async (event) => {
    event.preventDefault()
    const db = await loadDB()
    const id = uuidv4()
    try {
      const res = await db.collection('recipes').doc(id).set({
        title: this.state.title,
        serving: this.state.serving,
        steps: this.state.steps,
        status: this.state.status,
        ingredients: this.state.ingredients,
        author_id: this.state.authorId,
        prep_time: this.state.prepTime,
        description: this.state.description
      })
      if(res) {
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  updateStatus = (status) => {
    this.setState({
      status
    })
  }

  setImage = (option) => {
    this.setState({
      image: option
    })
  }

  render() {
    return(
      <div id="app" className="md:flex antialiased">
        <Sidebar userData={userData} />
        <main className="bg-gray-100 h-screen w-full overflow-y-auto">
          <section id="performance">
            <header className="border-b border-solid border-gray-300 bg-white flex justify-between">
              <button href="#performance" className="rounded text-sm block py-3 px-6 hover:bg-blue-600 text-left">Add Recipe</button>
            </header>
            <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
              <header className="flex flex-column justify-between border-b border-solid border-gray-300 p-4 text-lg font-medium">
                  <h1>New Recipe</h1>
                  <div className="flex">
                  <div class="mr-2 dropdown inline-block relative">
                    <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                      <span class="mr-1">{this.state.status}</span>
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                    </button>
                    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                      <li class=""><p class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => this.updateStatus('publish')}>Publish</p></li>
                      <li class=""><p class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => this.updateStatus('private')}>Make Private</p></li>
                      <li class=""><p class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => this.updateStatus('draft')}>Save Draft</p></li>
                    </ul>
                  </div>
                  <button onClick={this.handleSave}>Save</button>
                  </div>
              </header>
              <section className="p-4 flex flex-row flex-wrap items-center text-center">
              <form className="w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Title
                    </label>
                    <input name='title' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={'enter title'} onChange={this.handleUpdate} />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Prep time
                    </label>
                    <input name='prepTime' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={'enter prep time'} onChange={this.handleUpdate} />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Serving
                    </label>
                    <input name='serving' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={'enter serving'} onChange={this.handleUpdate} />
                  </div>
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                      Description
                    </label>
                    <textarea name='description' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={'description'} onChange={this.handleUpdate} />
                  </div>
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                      Steps
                    </label>
                    <textarea name='step' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder={'Enter a step'} onChange={this.handleUpdate} />
                    {/* <Button
                      extraClasses={`group relative flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out`}
                      label={'Add Step'}
                      onClick={this.addStep}
                    /> */}
                    <button onClick={this.addStep}>
                      Add Step
                    </button>
                  </div>
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Ingredients
                    </label>
                    <input name='ingredientName' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder='Enter an ingredient name' onChange={this.handleUpdate} />
                    <input name='ingredientAmount' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder='Enter an ingredient amount' onChange={this.handleUpdate} />
                    {/* <Button
                      extraClasses={`group relative flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out`}
                      label={'Add Ingredient'}
                      onClick={this.addIngredient}
                    /> */}
                    <button onClick={this.addIngredient}>
                      Add Ingredient
                    </button>
                  </div>
                  <ImageUpload />
                  {/* <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Tags
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={myRecipes.published[0].tags.join(', ')} />
                  </div> */}
                </div>
              </form>

              </section>
            </section>
            
          </section>
        </main>
  
    </div>
    )
  }
}

export default NewRecipe