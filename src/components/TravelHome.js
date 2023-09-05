import React from 'react';
import RegionList from './RegionList';
import { useState } from 'react';

function TravelHome() {

    const [mapImageLink,setMapImageLink] = useState('default');

    const resetMap = () =>{
        setMapImageLink('default');
      }
    
      const highlightRegion = (event) =>{
        const text = event.target.textContent;
        let textStripped = text.replace("-","").toLowerCase();
        setMapImageLink(textStripped);
      }
    
    return (
        <div>
            <div className='titleSection'>
                <h1 className='pageTitle'>TRAVEL WITH ME</h1>
            </div>
            <div className='test'>
                <div className='travelSection'>
                    <div className='mapImageContainer'>
                        <img src={require(`../media/regionMap/${mapImageLink}.PNG`)}
                            className='travelMap'
                            alt='interactive map of italy'></img>
                    </div>
                    <RegionList 
                        highlightRegion={highlightRegion}
                        resetMap={resetMap}/>
                </div>
            </div>
        </div>
    );
}

export default TravelHome;