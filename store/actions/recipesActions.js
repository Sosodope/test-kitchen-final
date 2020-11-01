import {
  ADD_RECIPE,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE ,
  DELETE_RECIPE,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILURE ,
  GET_RECIPE,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_FAILURE ,
  UPDATE_RECIPE,
  UPDATE_RECIPE_SUCCESS,
  UPDATE_RECIPE_FAILURE 
} from '../actions/types'
import {
  getAllRecipes
} from '../../pages/api/recipes'

export const getAll = async (dispatch) => {
  dispatch({ type: GET_RECIPE })
  try {
    const res = await getAllRecipes()
    dispatch({
      type: GET_RECIPE_SUCCESS,
      payload: res
    })
  } catch (error) {
    dispatch({ type: GET_RECIPE_FAILURE })
  }
}
