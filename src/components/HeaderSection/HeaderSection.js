import React from 'react';
import logo from '../../image/bgphoto2.jpg';
import './HeaderSection.css'

const HeaderSection = () => {
    return (
        <div className='flex justify-around items-center bg-black text-white header-section-container'>
            <div className='header-text'>
                <p className='text-2xl'>Hello,</p>
                <h2 className='text-7xl'><span>I'm Yasin Khan</span></h2>
                <p className='text-4xl'>Freelance photo editor</p>
                <p className='mb-10 text-4xl'>Graphic designer</p>
                <a href="https://twitter.com/YasinKh25762797"  target={'_blank'}>Hire me</a>
            </div>
            <img src={logo} alt="" />
        </div>
    );
};

export default HeaderSection;