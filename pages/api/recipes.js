import fetch from 'node-fetch'
import { loadDB, getRecipes } from '../../utils/firebase'

export const getAllRecipes = async () => {
  try {
    const response = await getRecipes()
    return response
  } catch (error) {
    console.log('error', error)
  }
}