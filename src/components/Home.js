import React from 'react';
import homePageImages from '../data/imageData';
import { useEffect, useState } from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';


const Home = () => {
    const [isEnter, setIsEnter] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % homePageImages.length)
    }

    useEffect(() => {
        const timerId = setInterval(() => {
            changeImage();
            setIsEnter((v) => !v);
        }, 5000);

        return () => 
        clearInterval(timerId);
    });


    return (
        <div className='homePage'>

            <div className='heroText'>
                <h1>MY SUMMER IN ITALY 2023</h1>
            </div>

            <div className='heroImageContainer'>
            <TransitionGroup>
                <CSSTransition
                    key={currentIndex}
                    in={isEnter}
                    timeout={500}
                    classNames='imageChange'                >
                    <img
                        src={homePageImages[currentIndex]}
                        className={`splashImage`}
                        alt='images from italy'
                    />
                </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    );
};


export default Home;