import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types'

export const getItems = () => dispatch => {
  console.log("DISPATCH HIT")
  dispatch(setItemsLoading());
  axios
    .get('/api/items')
    .then((res) => {
      console.log("ReS", res)
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    })
}
export const addItem = (item) => dispatch => {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
}
