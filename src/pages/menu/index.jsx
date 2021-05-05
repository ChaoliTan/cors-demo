import React, { useState } from 'react';
import { pullMenu } from '../../api';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function MenuCarousel() {
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState([]);
    if (!loading) {
        setLoading(true);
        const response = pullMenu();
        response.then((res) => {
            // console.log(res.data.data.rows);
            setMenu(res.data.data.rows);
        });
    }

    return (
        <div className="carousel-wrapper">
            <Carousel showArrows dynamicHeight emulateTouch infiniteLoop useKeyboardArrows showThumbs={false}>
                {menu &&
                    menu.map((item, index) => {
                        return <img src={item.url} alt="menu" key={index} />;
                    })}
            </Carousel>
        </div>
    );
}

export default MenuCarousel;
