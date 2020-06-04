import {ADD_PRODUCT,REMOVE_PRODUCT,UP_QUANTITY,DOWN_QUANTITY} from './action-types'

export const addProduct = product => ({
    type:ADD_PRODUCT,
    payload: product
  });
export const removeProduct = product => ({
    type:REMOVE_PRODUCT,
    payload: product
  });
export const upQuantity = product => ({
    type:UP_QUANTITY,
    payload: product
  });
export const downQuantity = product => ({
    type:DOWN_QUANTITY,
    payload: product
  });