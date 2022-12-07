import React from 'react';
import logo from '../../image/profile5.png';
import './HeaderSection.css'

const HeaderSection = () => {
    return (
        <div className='flex justify-around items-center bg-slate-900 text-white header-section-container'>
            <div className='header-text'>
                <p>Hello,</p>
                <h2>I'm Yasin Khan</h2>
                <p>Freelance photo editor</p>
                <p className='mb-10'>Graphic designer</p>
                <a href="https://twitter.com/YasinKh25762797" target={'_blank'}>Hire me</a>
            </div>
            <img src={logo} alt="" />
        </div>
    );
};

export default HeaderSection;