import {combineReducers} from 'redux';
import {productReducer,selectedProductReducer} from './ProductReducer';

 const reducers= combineReducers({
    allProduct:productReducer,
    product: selectedProductReducer,

})

export default reducers;