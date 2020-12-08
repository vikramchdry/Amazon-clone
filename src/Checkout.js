import React from 'react'
import './script/Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct.js';

function Checkout() {

  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">

      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="" />

        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty </h2>
            <p2> You do not have any item in your basket . To buy one or more items, click "Add to Basket " next to the item. </p2>
          </div>
        ) :
          (
            <div>
              <h2 className="checkout__title">Your Shopping Basket</h2>
              {/* list out all of the checkout Product */}
              {basket.map(item => (
                <CheckoutProduct

                  item={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
               

              ))}
              
            </div>

          )
        }

    </div>
    </div>
    );
}

export default Checkout;
