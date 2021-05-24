import React from 'react';
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProduct.products);
    const { id, title } = products[0];

    const renderList=products.map((product)=>{

        const {id,title,image,price,category}=product
        return(
            <div className='four wide column' key={id}>
                <Link to={`/product/${id}`}>
            <div className='ui cards'>
                <div className='card' >
                    <div className='image cover'>
                        <img src={image} alt={title}/>
                    </div>
                    <div className='content'></div>
                    <div className='header'> {title} </div>
                    <div className='meta price'>${price}</div>
                    <div className="meta"> {category} </div>
                </div>
            </div>
            </Link>
        </div>
        );
    })

    return (
        <>
       { renderList}
        </>
       
    )
}

export default ProductComponent
