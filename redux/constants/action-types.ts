import { Post } from "../../Interfaces/types";
import { ItemsfromAPI } from "../../Interfaces/types";
  export const  FETCH_SELECTED_PRODUCTS = "FETCH_SELECTED_PRODUCTS";
  export const   FETCH_PRODUCTS = "FETCH_PRODUCTS";
  export const  SET_PRODUCTS = "SET_PRODUCTS";
  export const  SELECTED_PRODUCTS = "SELECTED_PRODUCTS";
  export const   REMOVE_SELECTED_PRODUCTS = "REMOVE_SELECTED_PRODUCTS";



  
  export interface FETCH_PRODUCTS_I{
    type : typeof FETCH_PRODUCTS,
    payload:ItemsfromAPI
  }


  export interface FETCH_SELECTED_PRODUCTS_I{
    type : typeof FETCH_SELECTED_PRODUCTS,
    payload:Post
  }

  export type ExpertDispatchTypes = FETCH_PRODUCTS_I|FETCH_SELECTED_PRODUCTS_I;
