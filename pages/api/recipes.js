import fetch from 'node-fetch'

export const getAllRecipes = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return response
  } catch (error) {
    console.log('error', error)
  }
}