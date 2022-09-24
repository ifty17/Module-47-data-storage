import React from 'react';
import { addToDb } from '../Utilities/FakeDb';
import './Cosmatic.css'

const Cosmatic = (props) => {
    const {name, price, id} = props.cosmatic;

    const addToCart = (id) =>{
        addToDb(id)
    }

    const addToCartWithParam = () => addToCart(id);

    return (
      <div className="product">
        <h2>Buy this: {name}</h2>
        <p>Only for ${price}</p>
        <p>Id: {id}</p>
        <button onClick={addToCartWithParam}>Add to cart </button>
        {/* <button onClick={() => addToCart(id)}>Purchase </button> */}
      </div>
    );
};

export default Cosmatic;