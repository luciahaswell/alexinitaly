import React from "react";
import { Link } from "react-router-dom";
import locationData from '../data/TravelData';

let regionList = [];
for (let region of locationData) {
  regionList.push(region.regionName)
};

function RegionList({highlightRegion,resetMap}) {



  return (
    <div className='regionList'>
      <h2 className='regionListTitle'>REGIONS</h2>
      <ul>
        {regionList.map((region) => (
          <li key={region}>
            <h3 
              onMouseOver={highlightRegion}
              onMouseOut={resetMap}
              >
              <Link className={`${region} regionLink`}
                to={`/travel/${region}`}>
                {`-${region}`}
              </Link>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RegionList;
