import React from 'react';
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CurrencyFormat from "./CheckoutProduct"
import CheckoutProduct from "./CheckoutProduct"; 
import Subtotal from './Subtotal';
function  Checkout() {
    const [{basket}] =useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                        <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/April/Hero/Hero_Currency_EN_1X._CB466692681_.jpg"
                        alt="AD"/>
                        
                        {basket?.length ===0 ?(
                            <div>
                                <h2>Your Shopping Basket is Empty</h2>
                                <p>
                                    You have no items in your basket. To buy one or more
                                    products click on "Add to basket " next to the item.
                                </p>
                            </div>
                        ):(
                            <div>
                                <h2  className="checkout_title">Your Shopping Basket</h2>
                                {/* List out all of the checkout products */}
                                {basket.map((item) =>(
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />

                                ))}

                            </div>
                        )}
            </div>  
            {basket.length >0 &&(
                <div className="checkout_right">
                    <Subtotal/>
                    
                </div>
            )}       
        </div>
    )
}

export default Checkout
