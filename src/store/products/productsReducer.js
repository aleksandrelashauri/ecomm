import { SET_PRODUCTS } from './prodActions'

const initialState = {
  products: [],
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
    default:
      return state
  }
}
