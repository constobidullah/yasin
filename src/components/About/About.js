import React from 'react';
import logo from '../../image/profile1.png'
import './About.css'

const About = () => {
    const informations = [
        { id: 1, name: "Yasin Khan" },
        { id: 2, name: "yasinkhan12@gmail.com" },
        { id: 3, name: "01746781288" },
        { id: 4, name: "23-01-2000" },
        { id: 5, name: "Bangladesh" },
        { id: 6, name: "Shiruail, shibchar, madaripur, Dhaka, Bangladesh" },
    ]
    return (
        <div className='about bg-slate-800 text-white'>
            <h3 className='text-6xl'>About me</h3>

            <div className='about-section'>
                <div>
                    <img className='about-image' src={logo} alt="" />
                </div>

                <div className='about-information-container'>
                    <p>Hello I'm Yasin Khan from Bangladesh. I'm Freelance graphic designer or photo editor master in upwork and freelancer.com marketplace.  </p>
                    <br />

                    <div className='about-information'>
                        <p> <strong className='mr-32'>Name:</strong> {informations[0].name}</p>
                        <p> <strong className='mr-32'>E-mail:</strong> {informations[1].name}</p>
                        <p> <strong className='mr-24'>Contact No:</strong> {informations[2].name}</p>
                        <p> <strong className='mr-20'>Birthday date:</strong> {informations[3].name}</p>
                        <p> <strong className='mr-24'>Nationality:</strong> {informations[4].name}</p>
                        <p> <strong className='mr-28'>Address:</strong> {informations[5].name}</p>
                    </div>
                    <div className='hire-and-cv-link'>
                        <a href="https://www.linkedin.com/in/yasin-khan-arafat/" target="_blank" className='hire-me'>Hire me</a>
                        <a href="https://www.linkedin.com/in/yasin-khan-arafat/" target="_blank" className='download-cv'>Download CV</a>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;