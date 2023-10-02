import React from "react";
import { useState } from "react";

function CityPreview({ cityName, index, vibes, moneyLevel,cityPreviewImage}) {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    let placeholderDollar = "";
    if(moneyLevel.length < 5){
      let numExtra = 5 - moneyLevel.length; 
      while(numExtra > 0){
        placeholderDollar = placeholderDollar + "$";
        numExtra--;
      }
    } 


    return (
        <div
        className={index % 2 === 0 ? "even cityPreview" : "odd cityPreview"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!isHovered && (
          <>
            <div className="cityPreviewImageContainer">
              <img src={cityPreviewImage}
              alt='region'/>
            </div>
            <div className="cityNamePreview">
              <h3>{cityName.toUpperCase()}</h3>
            </div>
          </>
        )}
  
        {isHovered && (
          <div className="hoverDiv">
            <h2 className='hoverCityTitle'>{cityName.toUpperCase()}</h2>
            <h4>{`vibes: ${vibes}`}</h4>
            <div className='moneyLevel'>
              <h4 className='whiteDollar'>{moneyLevel}</h4>
              <h4 className='greyDollar'>{placeholderDollar}</h4>
            </div>
            
          </div>
        )}
      </div>
    )
};

export default CityPreview;