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
            <h2 classname='hoverCityTitle'>{cityName.toUpperCase()}</h2>
            <h4>{`vibes: ${vibes}`}</h4>
            <h4>{moneyLevel}</h4>
          </div>
        )}
      </div>
    )
};

export default CityPreview;