import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle heading="Featured Item" subHeading="Check it Out"></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="Item image!" />
                </div>
                <div className='ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase my-2'>Where can i get some?</p>
                    <p>From where can I purchase some of that I'm looking for specific item or menu so that i can choose.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-2'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;