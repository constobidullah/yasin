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
                        <a href="https://www.upwork.com/freelancers/~01603cf9ee2072fd0c?fbclid=IwAR2CycNr75ex7R0bBycrT_8wN0OQE6Sphx0IzbDN6Ov-DsgboKOHz7OCMWI" target="_blank" className='hire-me'>Hire me</a>
                        <a href="https://www.linkedin.com/in/yasin-khan-arafat/" target="_blank" className='download-cv'>Download CV</a>
                    </div>

                </div>

            </div>

            <div className=''>
                <h3 className='text-5xl text-lime-400 mb-10 underline text-7xl'>Description</h3>
                <p className='text-justify mx-20'>I'm an Upwork freelancer specializing in Graphic Design and photo retouching using Photoshop, Illustrator, and Lightroom. <br />
                    I'm ready to use all my knowledge and skills to make your Design on a higher professional level. <br />
                    You will get the highest quality service from me. <br />
                     Always keep deadlines. <br />
                      Always in touch. Always ready to make urgent tasks for my clients. <br /> <br />

                    ✅My goal is to provide the best results for all of my clients at reasonable prices. <br />

                    Making complex photo manipulations, photo retouching, and editing is my passion for a long time.  <br />
                     Please be as specific as possible. The more you give me, the better I can do my job. <br />

                    I'm proficient in Adobe Photoshop, Adobe Photoshop Lightroom, and Adobe Illustrator. <br />

                    I am also an expert in Microsoft Office, Excel, Word, and PowerPoint. <br /> <br />

                    ✅ I started learning Illustrator at first. <br /> Then I decided to learn Photoshop. <br /> When I started learning Photoshop, I felt that it was entertaining me more than anything. <br /> So I determined that I have to be a Graphic designer. <br /> I learned Lightroom to take my editing to a professional level. <br /> <br />
                    🎓Finally I enrolled in a course provided by the Govt of Bangladesh <br /> and got a certificate after completing the course. <br /> <br />

                    Best Regards, <br />
                    Yasin Khan  </p>
            </div>

        </div>
    );
};

export default About;