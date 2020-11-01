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
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  isLoading: false,
  recipes: [],
  error: '',
  errorMsg: ''
}

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      let nextState = {
        ...state,
        ...action.payload.isLoading,
        ...action.payload.recipes,
        ...action.error,
        ...action.errorMsg
      }
      if (state) nextState = state
      return nextState
    case ADD_RECIPE:
    case GET_RECIPE:
    case UPDATE_RECIPE:
    case DELETE_RECIPE:
      return {
        ...state,
        isLoading: true,
        error: false
      }
    case ADD_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }
    case GET_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: action.payload
      }
    // case UPDATE_RECIPE_SUCCESS:
    //   return {
    //     ...state,

    //   }
    case ADD_RECIPE_FAILURE:
    case DELETE_RECIPE_FAILURE:
    case GET_RECIPE_FAILURE:
    case UPDATE_RECIPE_FAILURE:
      return {
        ...state,
        error: true,
        errorMsg: action.payload
      }
    default:
      return state
  }
}

export default recipesReducer
