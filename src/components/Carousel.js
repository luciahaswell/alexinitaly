import React from "react";
import { useState } from "react";


const Carousel = ({ imageList }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        let nextIndex = (currentImageIndex + 1) % imageList.length;
        setCurrentImageIndex(nextIndex);
    }

    const prevImage = () => {
        let prevIndex = (currentImageIndex === 0) ? (imageList.length - 1) : ((currentImageIndex - 1) % imageList.length);
        setCurrentImageIndex(prevIndex);
    }

    return (
        <div className="carousel">
            <button
                className='carousel-button prev'
                onClick={nextImage}
            >
                &#x2039;
            </button>
            <img className='carouselImage'
                src={imageList[currentImageIndex]} 
                alt='pictures from the the city'/>
            <button
                className='carousel-button next'
                onClick={prevImage}
            >
                &#x203A;
            </button>
        </div>
    )
}

export default Carousel;