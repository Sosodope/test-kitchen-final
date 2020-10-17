import { combineReducers } from 'redux'
import recipesReducer from './recipesReducer'

const reducers = combineReducers({
  recipes: recipesReducer
})

export default reducers