import React from 'react'
import './script/Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct.js';
import "./script/Subtotal.css";
import Subtotal from "./Subtotal.js";

function Checkout() {

  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>
              Your Shopping Basket is empty
              <p>
                You hava no items in you basket. To buy on or more just click "Add To Basket Button " next to item.
              </p>
            </h2>
          </div>
        ) : (
          <div>
              <h2 className="checkout__title">Your shopping Basket</h2>

              {basket?.map(item => (

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
      {basket.length > 0 && (
        <div className="checkout__right">
          <h1>SubTotal</h1>
          <Subtotal />
          {/* Subtotal */}
        </div>

      )}



    </div>
  );
}
export default Checkout;
