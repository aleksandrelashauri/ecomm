import { SET_PRODUCTS, SET_CART, SET_SINGLE  } from './prodActions'

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products
  }
}
export const setSingle=(single)=> {
  return {
      type: SET_SINGLE,
      payload: single
  }
}

export const setCart=(cart)=> {
  return {
      type: SET_CART,
      payload: cart
  }
}