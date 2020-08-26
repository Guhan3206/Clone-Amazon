import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';
function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] =useStateValue();
    const removeFromBasket=()=>{
        // remove items from basket 
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        });
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image}/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title"><strong>{title}</strong></p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <i>{price}</i>
                </p>
                <div className="checkoutProduct_rating">
                    {/* looping for the rating */}
                    
                    {
                        Array(rating)
                        .fill()
                        .map(()=>(
                            <p>🌟</p>
                        ))
                    }
                </div>
                {/* onClick={RemoveFromBasket} */}
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
