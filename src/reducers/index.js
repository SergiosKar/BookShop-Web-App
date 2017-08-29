import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {booksReducer,bookReducer} from './bookReducers'




export default combineReducers({
  routing: routerReducer,
  books: booksReducer,
  book:bookReducer,
  
})