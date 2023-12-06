import React from 'react'
import Flipkart from './images/flipkart.png'
import Amazon from './images/Amazon.png'
import Shoes from './images/shoe.png'


const Herosection = () => {
    return (
        <>
        <main className='hero container'>
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className='secondary-btn'>Categories</button>
            </div>


            <div className="shopping">
                <p>Also avaliable on</p>
            </div>


            <div className="brand-icons">
                <img className="icons" src={Flipkart} alt="flipkart" />
                <img className="icons" src={Amazon} alt="Amazon" />
            </div>

            </div>

            <div className="hero-image">
                <img src={Shoes} alt="Shoes" />
            </div>
        </main>
        </>
    )
}
export default Herosection;
