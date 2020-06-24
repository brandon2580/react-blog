import React from 'react';
import '../../App.css'

const Home = () => {
    return (
        <div>
            <div className='center'>
                <h1 className='pageHeader'>Welcome!</h1>
                <h3 className=''>To create a blog, click <a href='/create-blog'>here</a></h3>
            </div>
        </div>
    )
}

export default Home;
