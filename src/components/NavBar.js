import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {

    const location = useLocation()



return (
    <div className='navBar'>
        <div className='italyImageContainer'>
            <img src={require('../media/NavBar/italyOutline.PNG')}
                className='italyImage'
                alt='outline of italy map'></img>
        </div>
        <div className='webName'>
            <Link className='navSection' to="/">Alex in Italy</Link>
        </div>
        <div className='webSections'>
            <Link
                className={`navSection hidden ${location.pathname === '/' ? 'current-page' : ''}`}
                to="/"
            >Home -</Link>
            <Link
                className={`navSection ${location.pathname === '/aboutme' ? 'current-page' : ''}`}
                to='aboutme'
            >About Me -</Link>
            <Link
                className={`navSection ${location.pathname === '/aboutgrant' ? 'current-page' : ''}`}
                to='aboutgrant'

            >About Grant -</Link>
            <Link
                className={`navSection ${location.pathname.startsWith('/travel') ? 'current-page' : ''}`}
                to='travel'

            >Travel</Link>

        </div>
    </div>
)
}

export default NavBar;