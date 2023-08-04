import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';

const CityPage = ({ cityName, aboutTheCity, whereToStay, whatToEat, whatToDo, toddlerTips, tiktokLink, regionName, images, favMemory }) => {
    let navigate = useNavigate();

    return (
        <div className='cityPage'>
            <div className='backButton'
                onClick={() => navigate(-1)}>
                <h4>{`< ${regionName}`}</h4>
            </div>
            <h1>{cityName}</h1>
            <Carousel imageList={images} />

            <h3>About the City:</h3>
            <p>{aboutTheCity}</p>

            <h3>Where to Stay:</h3>
            {whereToStay.map((location) =>
                <p className='locationLink'>{'-'}
                    <a href={location.link}
                        target="_blank"
                        rel="noreferrer"
                        >
                        {`${location.locationName}`}

                    </a>
                        {`: ${location.description}`}
                </p>
            )}

            <h3>What to Eat:</h3>
            <h4>Popular Foods:</h4>
            {whatToEat.popularFoods.map((food) =>
                <p>{`-${food}`}</p>
            )}
            <h4>Restaurants:</h4>
            {whatToEat.restaurants.map((place) =>
                <p>{'-'}
                    <a href={place.link}
                        target="_blank"
                        rel="noreferrer"
                        >
                            {`${place.name}`}
   
                    </a>
                </p>
            )}

            <h3>What to Do:</h3>
            {whatToDo.map((activity)=>
                <p>{`-${activity}`}</p>
            )}

            <h3>Traveling with a Toddler:</h3>
            <p>{toddlerTips}</p>

            <h3>Favorite Memory:</h3>
            <p>{favMemory}</p>

            <h3>Through My Eyes:</h3>
            <p>{tiktokLink}</p>
        </div>
    );
}

export default CityPage;