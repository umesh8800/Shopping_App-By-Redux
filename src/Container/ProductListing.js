import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios'
import {setProduct} from '../Redux/Action/ProductAction'

const ProductListing = () => {
    const products =useSelector((state)=>state);

    const dispatch=useDispatch();

    // console.log(products);

    const fetchProducts =async()=>{

        const response = await axios.get ("https://fakestoreapi.com/products").catch((err)=>{
            console.log("Err",err);
        });

        dispatch(setProduct(response.data));

    };

    useEffect(()=>{
        fetchProducts();
    },[])
// console.log("products",products)
    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
