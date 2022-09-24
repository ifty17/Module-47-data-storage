import React from 'react';
import { add, multiplay } from '../Utilities/Calculate';

const Shoes = () => {
    const first = 13;
    const second = 14;
    const result = multiplay(first, second);
    const sum = add (first, second)
    return (
        <div>
            <h3>This is shoes compo</h3>
            <p>Result: {result} and total: {sum}</p>
        </div>
    );
};

export default Shoes;