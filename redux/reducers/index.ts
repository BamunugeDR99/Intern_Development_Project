import {combineReducers} from 'redux';
import { productReducer, SelectedProductReducer } from './ProductReducers';

//Combine all reducers in to one combined reducer
const reducers = combineReducers({
    allProducts:productReducer,
    product:SelectedProductReducer
})

export default reducers;