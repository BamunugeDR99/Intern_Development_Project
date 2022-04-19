/* Reducers --> Describes how your actions transforms state into the next state
                Reducer always takes the initial state and the action
                Returns an object
 */
import { ItemsfromAPI, Post } from "../../Interfaces/types";

import {
  FETCH_PRODUCTS,
  FETCH_SELECTED_PRODUCTS,
  FETCH_PRODUCTS_I,
  FETCH_SELECTED_PRODUCTS_I,
} from "../constants/action-types";

//Initial State 1 of type ItemsfromAPI
const initialState1: ItemsfromAPI = {
  services: [],
};

//Initial State 1 of type Post
const initialState2: Post = {
  serviceName: "",
  title: "",
  image: "",
  details: "",
  serviceId: "",
  ratingCount: 0,
  durationMinutes: 0,
  rating: 0,
  price: 0,
  expert: {
    name: "",
    profilePic: "",
  },
};

export const productReducer = (
  state: ItemsfromAPI = initialState1,
  action: FETCH_PRODUCTS_I
) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const SelectedProductReducer = (
  state: Post = initialState2,
  action: FETCH_SELECTED_PRODUCTS_I
) => {
  switch (action.type) {
    case FETCH_SELECTED_PRODUCTS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
