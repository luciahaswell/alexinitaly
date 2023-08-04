import React from 'react';

function AboutGrant() {
    return (
        <div>
            <div className='titleSection'>
                <h1 className='pageTitle'>About The Grant</h1>
                <div className='grantInfo'>
                    <h4>Who are the Baranciks?</h4>
                    <p>
                        <br></br>
                        The Barancik Foundation was started by Chuck & Marjorie Barancik as a private, family foundation located in Sarasota, Florida with. Their goal was to make a meaningful difference in the areas of education, humanitarian causes, arts and culture, environment, and medical research in Sarasota and beyond. It was their desire to carry out their mission to make a meaningful difference and hope to have a ripple effect.
                        <br></br><br></br>
                    </p>
                    <h4>Why education and why educators?</h4>
                    <p>
                        <br></br>
                        Margie was an educator and a passionate advocate for the underserved, particularly children and families. Inspired by their family’s long belief in the power of philanthropy to shape our world and enrich the lives of all people.
                        <br></br>
                        The TIME Fellowship Program offers Sarasota County educators time to reconnect with their love of teaching.
                        <br></br>
                        Chuck and Margie Barancik loved our community’s children and teachers.  Because  of Margie’s teaching career, they knew what research clearly states: a motivated and highly effective classroom teacher is the most crucial factor for a child’s academic success.
                        <br></br>
                        To honor Margie’s chosen profession, we launched the Time to Inspire Margie’s Educators Initiative, known as ‘TIME Fellowship,’ in 2020.
                        <br></br>
                        The initiative awards 25 Sarasota County Schools educators up to $12,000 to help revitalize and renew their commitment to teaching.  To date, 50 Sarasota County teachers, assistant principals, and principals have received fellowships in Margie’s honor.
                    </p>
                </div>
                <div className='grantImageContainer'>
                    <img 
                        className='aboutGrantLogo'
                        src={require("../media/aboutGrant/Barancik-Foundation-Logo.jpg")}/>
                </div>

            </div>
        </div>
    );
}

export default AboutGrant;