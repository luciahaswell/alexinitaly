import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import AboutGrant from './components/AboutGrant';
import NavBar from './components/NavBar';
import TravelHome from './components/TravelHome';
import Region from './components/Region';
import CityPage from './components/CityPage';
import locationData from './data/TravelData';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/aboutgrant" element={<AboutGrant />} />
        <Route path="/travel/*" element={<TravelHome />} />
        {locationData.map((region) => (
          <Route
            key={region.regionName}
            path={`travel/${region.regionName}/*`}
            element={
              <Region
                regionName={region.regionName}
                regionInfo={region.aboutTheRegion}
                cityInfo={region.cityInfo}
                regionPhoto={region.regionPhoto}
              />
            }
          />
        ))}
        {locationData.map((region) =>
          region.cityInfo.map((city) =>
            <Route
              key={city.cityName}
              path={`travel/${region.regionName}/${city.cityName}`}
              element={
                <CityPage
                  cityName={city.cityName}
                  aboutTheCity={city.aboutTheCity}
                  whereToStay={city.whereToStay}
                  whatToEat={city.whatToEat}
                  whatToDo={city.whatToDo}
                  toddlerTips={city.toddlerTips}
                  tiktokLink={city.tiktokLink}
                  regionName={region.regionName}
                  images={city.images}
                  favMemory={city.favMemory}
                />
              }
            />
          ))}
      </Routes>
    </div>
  );
}

export default App;


/*
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Travel from './Travel/Travel';
import AboutMe from './AboutMe/AboutMe';
import AboutGrant from './AboutGrant/AboutGrant';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/aboutgrant" element={<AboutGrant />} />
          <Route path="/travel/*" element={<Travel />} />
            
        </Routes>
    </div>
  );
}

export default App;
 */