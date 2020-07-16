import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './RentalCarousel.css'

const RentalCarousel = ({ images }) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div data-interval="false" >
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                data-interval="false"
            >
                {
                    images.map((rental, i) => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 carousel-img"
                                    src={images[i]}
                                    alt={`${i + 1}`}
                                />
                                {/* <Carousel.Caption>
                      <h3>{props.caption[i]}</h3>
                      <p>{props.subCaption[i]}Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        </div>
    );
}

export default RentalCarousel