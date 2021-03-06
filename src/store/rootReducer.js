import user from './user/userReducer'
import products from './products/productsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  user,
  products,
})

export default rootReducer
