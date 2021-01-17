import React, { Component } from 'react';
import {Link} from 'react-router-dom'

function Home(){

    return (
        
        <body className='badya'>
        <header className='banner'>
        <div className="banner-text">
        <p className='a'>Welcome to the pctures World</p>
        <h1 className='b'> Mini Tumbler</h1>
        <p className='c'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam nulla hic in incidunt soluta, debitis magnam ut. Error nulla quasi,
         soluta quidem quibusdam aliquid voluptatum distinctio aut voluptatem veritatis possimus?</p>
        <Link className='d' to='/gallery'>Explore More</Link>
        </div>    
        </header>
        </body>
        

    )
    }
 
export default Home;