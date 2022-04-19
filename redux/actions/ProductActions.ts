/*Actions ---> Describes what you want to do
    Action Always return a JS Object

*/
import { FETCH_PRODUCTS, FETCH_SELECTED_PRODUCTS } from "../constants/action-types";
import ExpertAPI from "../../services/ExpertAPI";
import { Dispatch } from "react";
import { ExpertDispatchTypes } from "../constants/action-types";

export const fetchProducts =
  () =>
  //Middleware --> makes an async API call  inside the action creator
  async (dispatch:Dispatch<ExpertDispatchTypes>) => {
    const response = await ExpertAPI.get(`/services?take=72`);

    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  };



  export const fetchSelectedProducts =
  (id:string) =>
  //Middleware --> makes an async API call  inside the action creator
  async (dispatch:Dispatch<ExpertDispatchTypes>) => {
    const response = await ExpertAPI.get(`/services/${id}`);

    dispatch({ type:FETCH_SELECTED_PRODUCTS, payload: response.data });
  };









// export const setProducts = (products) => {
//   return {
//     type: ActionTypes.SET_PRODUCTS,
//     payload: products,
//   };
// };

// export const selectedProducts = (products) => {
//   return {
//     type: ActionTypes.SELECTED_PRODUCTS,
//     payload: products,
//   };
// };

// export const removeSelectedProducts = () => {
//   return {
//     type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
//   };
// };
