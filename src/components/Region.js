import React from 'react';
import CityPreview from './CityPreview';
import { Link, useNavigate } from 'react-router-dom';

const Region = ({ regionName, regionInfo, cityInfo,regionPhoto }) => {

    let navigate = useNavigate();

    return (
        <div className='regionPage'>
            <div className='backButton'
                onClick={() => navigate(-1)}>
                <h4>{`< Regions`}</h4>
            </div>
            <div className='regionTitle'>
                <h1>{regionName}</h1>
            </div>
            <div className='aboutRegion'>
                <h3>About the Region:</h3>
                <p>
                    {regionInfo}
                </p>
            </div>
            <div className='cityPreviewContainer'>
                {cityInfo.map((city, index) =>
                (
                    <Link
                        className="cityLink"
                        to={`/travel/${regionName}/${city.cityName}`}
                    >
                        <CityPreview
                            key={city.cityName}
                            cityName={city.cityName}
                            index={index}
                            regionName={regionName}
                            moneyLevel={city.quickInfo.$level}
                            vibes={city.quickInfo.vibes}
                            images={city.images}
                            regionPhoto={regionPhoto}

                        />
                    </Link>

                )
                )}

            </div>
        </div>
    );
}

export default Region;
