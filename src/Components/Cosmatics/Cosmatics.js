import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cosmatic from '../Cosmatic/Cosmatic';


const Cosmatics = () => {
    const [cosmatics, setCosmatics] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmatics(data));
    },[])

    return (
        <div>
            <h1>Welcome to Cosmatics Shop</h1>
            {
                cosmatics.map(cosmatic => <Cosmatic
                     key={cosmatic.id}
                     cosmatic = {cosmatic}
                     ></Cosmatic>)
            }
        </div>
    );
};

export default Cosmatics;