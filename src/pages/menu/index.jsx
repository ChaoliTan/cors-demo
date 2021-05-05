import React from 'react';
import { pullMenu } from '../../api';

function MenuCarousel() {
    const response = pullMenu();

    console.log(response);
    return (
        <div>
            <h1>menu menu</h1>
        </div>
    );
}

export default MenuCarousel;
